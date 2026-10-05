const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, headers: res.headers, json: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, error: e.message, raw: data.slice(0, 300) });
        }
      });
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function run() {
  const r = await fetchJson('https://aredeultrabrasil.com/wp-json/wc/store/v1/products?per_page=100&page=1');
  console.log('Status:', r.status);
  console.log('Total items in page 1:', Array.isArray(r.json) ? r.json.length : 0);
  console.log('Total pages header:', r.headers['x-wp-totalpages'], 'Total items:', r.headers['x-wp-total']);
}

run();
