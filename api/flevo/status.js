function getFlevoCredentials() {
  const apiKey = process.env.FLEVO_API_KEY || 'sk_3476ac27a86bffb0ac912200ffc8c1688545ae36c90acd384d3e1389390e4000';
  const accountId = process.env.FLEVO_ACCOUNT_ID || '10038';
  return { apiKey, accountId };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const id = req.query?.id;
    if (!id) {
      return res.status(400).json({ success: false, error: 'Parâmetro id é obrigatório' });
    }

    const { apiKey } = getFlevoCredentials();
    const response = await fetch(`https://app.flevopay.com.br/api/v1/transaction/${encodeURIComponent(id)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
    });

    const data = await response.json();
    return res.status(response.status).json({ success: response.ok, data });
  } catch (err) {
    console.error('[FlevoPay Vercel] Erro na consulta de status:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno ao consultar status' });
  }
};
