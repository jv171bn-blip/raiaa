const https = require('https');
const fs = require('fs');
const path = require('path');

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

async function fetchAll() {
  console.log('Fetching all products from aredeultrabrasil.com API...');
  const allProducts = [];
  const totalPages = 11;

  for (let page = 1; page <= totalPages; page++) {
    process.stdout.write(`Fetching page ${page}/${totalPages}... `);
    const r = await fetchJson(`https://aredeultrabrasil.com/wp-json/wc/store/v1/products?per_page=100&page=${page}`);
    if (r.status === 200 && Array.isArray(r.json)) {
      allProducts.push(...r.json);
      console.log(`OK (+${r.json.length} items, total so far: ${allProducts.length})`);
    } else {
      console.log(`Failed with status ${r.status}`);
    }
  }

  console.log(`Total products downloaded: ${allProducts.length}`);
  fs.writeFileSync('scratch/aredeultrabrasil_all_products.json', JSON.stringify(allProducts, null, 2));
  console.log('Saved to scratch/aredeultrabrasil_all_products.json');
}

fetchAll();
