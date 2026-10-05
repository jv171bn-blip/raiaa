const http = require('http');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');

// Carrega as credenciais da FlevoPay diretamente do .env no servidor
function getFlevoCredentials() {
  let apiKey = process.env.FLEVO_API_KEY || '';
  let accountId = process.env.FLEVO_ACCOUNT_ID || '10038';

  if (!apiKey) {
    try {
      const envPath = path.resolve(__dirname, '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const keyMatch = envContent.match(/FLEVO_API_KEY=(.*)/);
        const accountMatch = envContent.match(/FLEVO_ACCOUNT_ID=(.*)/);
        if (keyMatch) apiKey = keyMatch[1].trim();
        if (accountMatch) accountId = accountMatch[1].trim();
      }
    } catch (e) {
      console.error('[FlevoPay Server] Erro ao ler .env:', e);
    }
  }

  if (!apiKey) {
    console.error('[FlevoPay Server] FLEVO_API_KEY não configurada (.env ou variável de ambiente)');
  }

  return { apiKey, accountId };
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

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // 1. Endpoint para criar transação Pix: POST /api/flevo/transaction
  if (req.method === 'POST' && url.pathname === '/api/flevo/transaction') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const { apiKey } = getFlevoCredentials();
        const parsed = JSON.parse(body || '{}');

        const response = await fetch('https://app.flevopay.com.br/api/v1/transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
          },
          body: JSON.stringify(parsed),
        });

        const data = await response.json();

        // Se qr_code_base64 for nulo, gera o QR code em base64 com a biblioteca QRCode
        if (data && data.qr_code && (!data.qr_code_base64 || data.qr_code_base64 === 'null')) {
          try {
            data.qr_code_base64 = await QRCode.toDataURL(data.qr_code, {
              width: 320,
              margin: 1,
              color: { dark: '#000000', light: '#ffffff' },
            });
          } catch (qrErr) {
            console.error('[FlevoPay Server] Erro ao gerar QR Code base64:', qrErr);
          }
        }

        res.writeHead(response.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: response.ok, data }));
      } catch (err) {
        console.error('[FlevoPay Server] Erro na criação da transação:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Erro interno no proxy FlevoPay' }));
      }
    });
    return;
  }

  // 2. Endpoint para consultar status do Pix: GET /api/flevo/status?id=...
  if (req.method === 'GET' && url.pathname === '/api/flevo/status') {
    try {
      const id = url.searchParams.get('id');
      if (!id) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Parâmetro id é obrigatório' }));
        return;
      }

      const { apiKey } = getFlevoCredentials();
      const flevoUrl = `https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=${encodeURIComponent(id)}`;

      const response = await fetch(flevoUrl, {
        method: 'GET',
        headers: {
          'X-API-Key': apiKey,
        },
      });

      const data = await response.json();

      res.writeHead(response.status, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          success: response.ok,
          status: data?.status || 'unknown',
          id: data?.id,
          external_id: data?.external_id,
          amount: data?.amount,
          amount_in_reais: data?.amount_in_reais,
          raw: data,
        })
      );
    } catch (err) {
      console.error('[FlevoPay Server] Erro ao consultar status:', err);
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
  console.log(`[FlevoPay Server] Servidor rodando na porta ${PORT}`);
});
