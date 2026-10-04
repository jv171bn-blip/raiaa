const https = require('https');
const http = require('http');

const candidates = [
  // Dove 10 em 1
  { name: 'Dove 10 em 1 (7891150094895)', url: 'https://cdn-cosmos.bluesoft.com.br/products/7891150094895' },
  // Principia AG-10
  { name: 'Principia AG-10 (0736532824875)', url: 'https://cdn-cosmos.bluesoft.com.br/products/0736532824875' },
  { name: 'Principia AG-10 (736532824875)', url: 'https://cdn-cosmos.bluesoft.com.br/products/736532824875' },
  // Principia AT-01 / Mix-01
  { name: 'Principia Mix-01 (602883706477)', url: 'https://cdn-cosmos.bluesoft.com.br/products/602883706477' },
  // Cerave Kit
  { name: 'Cerave Kit (7908785487890)', url: 'https://cdn-cosmos.bluesoft.com.br/products/7908785487890' },
  { name: 'Cerave Kit (7899706190534)', url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706190534' },
  // Macks
  { name: 'Macks Silicone (033732000078)', url: 'https://cdn-cosmos.bluesoft.com.br/products/033732000078' },
  { name: 'Macks Silicone (33732000078)', url: 'https://cdn-cosmos.bluesoft.com.br/products/33732000078' },
  // Alcon estojo
  { name: 'Alcon Estojo (7896549800040)', url: 'https://cdn-cosmos.bluesoft.com.br/products/7896549800040' },
  // Growth Whey
  { name: 'Growth Whey (7891151912433)', url: 'https://cdn-cosmos.bluesoft.com.br/products/7891151912433' }
];

function testUrl(item) {
  return new Promise(resolve => {
    https.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      console.log(item.name, '-> HTTP', res.statusCode, 'len:', res.headers['content-length'] || '?');
      resolve();
    }).on('error', err => {
      console.log(item.name, '-> Error:', err.message);
      resolve();
    });
  });
}

async function run() {
  for (const c of candidates) {
    await testUrl(c);
  }
}
run();
