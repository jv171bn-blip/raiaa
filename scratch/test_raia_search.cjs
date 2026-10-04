const https = require('https');

function searchRaia(term) {
  return new Promise((resolve) => {
    const url = `https://api.drogaraia.com.br/search/v1/search?terms=${encodeURIComponent(term)}&resultsPerPage=3`;
    // Or check website search
    const req = https.get(`https://www.drogaraia.com.br/search?w=${encodeURIComponent(term)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // extract product images: product-data.raiadrogasil.io/images/<id>.webp
        const matches = [...data.matchAll(/https:\/\/product-data\.raiadrogasil\.io\/images\/(\d+)\.webp/g)].map(m => m[0]);
        const unique = [...new Set(matches)];
        resolve(unique.slice(0, 5));
      });
    });
    req.on('error', (err) => resolve([]));
  });
}

async function test() {
  const res = await searchRaia('Leave-in Elseve Cicatri Renov 100ml');
  console.log('Found images:', res);
}

test();
