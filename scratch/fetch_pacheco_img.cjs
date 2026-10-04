const https = require('https');
const fs = require('fs');
const path = require('path');

const targets = [
  { url: 'https://www.drogariaspacheco.com.br/gel-de-limpeza-facial-bioderma-sensibio-gel-moussant-500ml/p', file: 'bioderma_sensibio_gel_moussant_200ml.jpg' },
  { url: 'https://www.drogariaspacheco.com.br/creme-hidratante-avene-xeracalm-repilidizante-200ml/p', file: 'avene_xeracalm_ad_400ml.jpg' }
];

function fetchPage(target) {
  return new Promise(resolve => {
    https.get(target.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const m = d.match(/https:\/\/[^"']+\/arquivos\/ids\/(\d+)-1000-1000\/[^"']*/);
        if (m) {
          console.log(`Found image for ${target.file}:`, m[0]);
          https.get(m[0], imgRes => {
            const dest = path.join('public/products', target.file);
            const stream = fs.createWriteStream(dest);
            imgRes.pipe(stream);
            stream.on('finish', () => {
              console.log(`Saved ${target.file} size:`, fs.statSync(dest).size);
              resolve();
            });
          });
        } else {
          console.log(`No match for ${target.file}, status: ${res.statusCode}`);
          resolve();
        }
      });
    });
  });
}

async function main() {
  for (const t of targets) {
    await fetchPage(t);
  }
}
main();
