const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const items = [
  {
    name: 'Dove Máscara 10 em 1',
    file: 'dove_mascara_10em1.jpg',
    url: 'https://cdn-cosmos.bluesoft.com.br/products/7891150094895'
  },
  {
    name: 'Principia Sérum AG-10',
    file: 'principia_serum_ag10.jpg',
    url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1215527/10046878_1.jpg'
  },
  {
    name: 'Principia Sérum AT-01 (Mix-01)',
    file: 'principia_serum_at01.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1405569/808644---serum-principia-mix-01-5-niacinamida--4-glicolico--3-t-.jpg.jpg'
  },
  {
    name: 'Kit CeraVe Cuidados Essenciais',
    file: 'cerave_kit_cuidados_essenciais.jpg',
    url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1204270/10051665_1.jpg'
  },
  {
    name: 'Whey Protein Concentrado 80% Growth 1kg',
    file: 'growth_whey_concentrado_80_1kg.webp',
    url: 'https://www.gsuplementos.com.br/upload/produto/layout/185/alterado01-v2.webp'
  },
  {
    name: 'Protetor Auricular Mack\'s Silicone',
    file: 'macks_protetor_auricular_silicone.jpg',
    url: 'https://www.macksearplugs.com/wp-content/uploads/2016/10/6pair-silicone-800x800.jpg'
  },
  {
    name: 'Estojo Lentes de Contato Alcon Opti-Free',
    file: 'alcon_estojo_lentes_contato.jpg',
    url: 'https://www.citylens.com.my/wp-content/uploads/2014/09/1713.jpg'
  }
];

function download(item) {
  return new Promise(resolve => {
    function tryReq(curUrl, depth) {
      if (depth > 5) {
        console.error(`Too many redirects for ${item.file}`);
        return resolve(false);
      }
      const client = curUrl.startsWith('https') ? https : http;
      const parsed = new URL(curUrl);
      const req = client.get(curUrl, {
        headers: {
          'Host': parsed.hostname,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let next = res.headers.location;
          if (!next.startsWith('http')) {
            next = new URL(next, parsed.origin).href;
          }
          return tryReq(next, depth + 1);
        }
        if (res.statusCode !== 200) {
          console.error(`HTTP ${res.statusCode} for ${item.file}`);
          return resolve(false);
        }
        const dest = path.join('public/products', item.file);
        const ws = fs.createWriteStream(dest);
        res.pipe(ws);
        ws.on('finish', () => {
          ws.close();
          const sz = fs.statSync(dest).size;
          console.log(`[SUCCESS] ${item.file} saved (${sz} bytes)`);
          resolve(true);
        });
      });
      req.on('error', err => {
        console.error(`Error for ${item.file}:`, err.message);
        resolve(false);
      });
      req.setTimeout(15000, () => {
        req.destroy();
        console.error(`Timeout for ${item.file}`);
        resolve(false);
      });
    }
    tryReq(item.url, 0);
  });
}

async function run() {
  for (const it of items) {
    await download(it);
  }
}
run();
