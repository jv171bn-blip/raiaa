export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
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
    const id = req.query?.id || req.query?.transactionId;
    if (!id) {
      return res.status(400).json({ success: false, error: 'Parâmetro id é obrigatório' });
    }

    const response = await fetch(`https://api.blackcatoficial.com/api/sales/${encodeURIComponent(id)}/status`, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return res.status(response.status).json({
        success: false,
        error: data.message || 'Erro ao consultar status na Blackcat',
        raw: data,
      });
    }

    const rawStatus = data.data?.status || 'PENDING';
    let mappedStatus = rawStatus.toLowerCase();
    if (rawStatus === 'PAID') mappedStatus = 'approved';

    return res.status(200).json({
      success: true,
      status: mappedStatus,
      id: data.data?.transactionId,
      external_id: data.data?.transactionId,
      amount: data.data?.amount,
      amount_in_reais: data.data?.amount ? (data.data.amount / 100).toFixed(2) : undefined,
      raw: data.data,
    });
  } catch (err) {
    console.error('[Blackcat Vercel] Erro na consulta de status:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno ao consultar status' });
  }
}
