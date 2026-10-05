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

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    const response = await fetch('https://app.flevopay.com.br/api/v1/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
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
