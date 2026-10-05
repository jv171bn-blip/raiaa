const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, json: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, error: e.message, raw: data.slice(0, 300) });
        }
      });
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function run() {
  const r1 = await fetchJson('https://aredeultrabrasil.com/wp-json/wp/v2/product?per_page=10');
  console.log('wp/v2/product:', r1.status, Array.isArray(r1.json) ? r1.json.length : r1.error || r1.raw);
  const r2 = await fetchJson('https://aredeultrabrasil.com/wp-json/wc/store/v1/products?per_page=10');
  console.log('wc/store/v1/products:', r2.status, Array.isArray(r2.json) ? r2.json.length : r2.error || r2.raw);
}

run();
