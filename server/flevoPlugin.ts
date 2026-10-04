import type { Plugin, ViteDevServer, PreviewServer } from 'vite';
import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

// Carrega as credenciais da FlevoPay diretamente do .env no servidor
function getFlevoCredentials() {
  let apiKey = process.env.FLEVO_API_KEY || '';
  let accountId = process.env.FLEVO_ACCOUNT_ID || '10038';

  if (!apiKey) {
    try {
      const envPath = path.resolve(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const keyMatch = envContent.match(/FLEVO_API_KEY=(.*)/);
        const accountMatch = envContent.match(/FLEVO_ACCOUNT_ID=(.*)/);
        if (keyMatch) apiKey = keyMatch[1].trim();
        if (accountMatch) accountId = accountMatch[1].trim();
      }
    } catch (e) {
      console.error('[FlevoPay Proxy] Erro ao ler .env:', e);
    }
  }

  // Chave secreta de fallback segura
  if (!apiKey) {
    apiKey = 'sk_3476ac27a86bffb0ac912200ffc8c1688545ae36c90acd384d3e1389390e4000';
  }

  return { apiKey, accountId };
}

export function flevoPayProxyPlugin(): Plugin {
  return {
    name: 'flevopay-proxy',
    configureServer(server: ViteDevServer) {
      setupMiddleware(server.middlewares);
    },
    configurePreviewServer(server: PreviewServer) {
      setupMiddleware(server.middlewares);
    },
  };
}

function setupMiddleware(middlewares: any) {
  middlewares.use(async (req: any, res: any, next: any) => {
    const rawUrl = req.originalUrl || req.url || '';
    const url = new URL(rawUrl, 'http://localhost');
    console.log('[Flevo Middleware]', req.method, rawUrl, url.pathname);

    // 1. Endpoint para criar transação Pix: POST /api/flevo/transaction
    if (req.method === 'POST' && url.pathname === '/api/flevo/transaction') {
      let body = '';
      req.on('data', (chunk: any) => {
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

          const data = (await response.json()) as any;

          // Se o qr_code_base64 vier nulo ou ausente, geramos o QR code real em base64
          if (data && data.qr_code && (!data.qr_code_base64 || data.qr_code_base64 === 'null')) {
            try {
              data.qr_code_base64 = await QRCode.toDataURL(data.qr_code, {
                width: 320,
                margin: 1,
                color: {
                  dark: '#000000',
                  light: '#ffffff',
                },
              });
            } catch (qrErr) {
              console.error('[FlevoPay Proxy] Erro ao gerar QR Code base64:', qrErr);
            }
          }

          res.writeHead(response.status, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: response.ok, data }));
        } catch (err: any) {
          console.error('[FlevoPay Proxy] Erro na criação da transação:', err);
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

        const data = (await response.json()) as any;

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
      } catch (err: any) {
        console.error('[FlevoPay Proxy] Erro ao consultar status:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message || 'Erro ao consultar status' }));
      }
      return;
    }

    next();
  });
}
