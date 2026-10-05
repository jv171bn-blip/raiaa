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
  const r = await fetchJson('https://aredeultrabrasil.com/wp-json/wc/store/v1/products?per_page=1');
  if (r.json && r.json[0]) {
    const p = r.json[0];
    console.log('ID:', p.id);
    console.log('Name:', p.name);
    console.log('Slug:', p.slug);
    console.log('Permalink:', p.permalink);
    console.log('Prices:', p.prices);
    console.log('Images:', p.images);
    console.log('Categories:', p.categories);
  }
}

run();
