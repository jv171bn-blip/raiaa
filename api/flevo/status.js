// O package.json usa "type": "module", então as funções da Vercel precisam ser ESM.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.FLEVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'FLEVO_API_KEY não configurada no servidor' });
  }

  try {
    const id = req.query?.id;
    if (!id) {
      return res.status(400).json({ success: false, error: 'Parâmetro id é obrigatório' });
    }

    // Mesmo endpoint e formato de resposta usados pelo proxy de desenvolvimento
    const response = await fetch(
      `https://app.flevopay.com.br/api/v1/query?action=get_transaction&id=${encodeURIComponent(id)}`,
      { method: 'GET', headers: { 'X-API-Key': apiKey } }
    );

    const data = await response.json();
    return res.status(response.status).json({
      success: response.ok,
      status: data?.status || 'unknown',
      id: data?.id,
      external_id: data?.external_id,
      amount: data?.amount,
      amount_in_reais: data?.amount_in_reais,
      raw: data,
    });
  } catch (err) {
    console.error('[FlevoPay Vercel] Erro na consulta de status:', err);
    return res.status(500).json({ success: false, error: err.message || 'Erro interno ao consultar status' });
  }
}
