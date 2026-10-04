const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
  { file: 'huggies_natural_care_p.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1216186/fralda-huggies-premium-natural-care-p-36-unidades-10046258_1.jpg' },
  { file: 'huggies_natural_care_m.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1202376/fralda-huggies-natural-care-m-78-unidades-10052501_1.jpg' },
  { file: 'huggies_natural_care_g.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1202370/fralda-huggies-natural-care-g-66-unidades-10052502_1.jpg' },
  { file: 'huggies_natural_care_xg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1201157/fralda-huggies-natural-care-xg-58-unidades-10052979_1.jpg' },
  { file: 'huggies_natural_care_xxg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1201160/fralda-huggies-natural-care-xxg-54-unidades-10052982_1.jpg' },
  { file: 'huggies_pants_m.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1230616/fralda-huggies-maxima-protecao-m-104-unidades-10041260_1.jpg' },
  { file: 'huggies_pants_g.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1217273/fralda-huggies-maxima-protecao-g-136-unidades-10045969_1.jpg' },
  { file: 'huggies_pants_xg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1230537/fralda-huggies-maxima-protecao-xg-82-unidades-10041258_1.jpg' },
  { file: 'huggies_pants_xxg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1230641/fralda-huggies-maxima-protecao-xxg-80-unidades-10041257_1.jpg' }
];

function dl(item) {
  return new Promise(resolve => {
    const dest = path.join('public/products', item.file);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode !== 200) {
        console.error(`HTTP ${res.statusCode} for ${item.file}`);
        return resolve(false);
      }
      const ws = fs.createWriteStream(dest);
      res.pipe(ws);
      ws.on('finish', () => {
        ws.close();
        console.log(`Saved ${item.file} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', err => {
      console.error(`Error for ${item.file}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const it of downloads) {
    await dl(it);
  }
}
run();
