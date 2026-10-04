const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const list = [
  {
    id: 30042,
    file: 'elseve_cicatri_renov_leavein_100ml.png',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1266863/852961---Leave-In-Multireparador-Capilar-Creme-Elseve-Reparacao-Total-5-Creme-100ml_0000_7908615053097_99_1_1200_72_SRGB.png'
  },
  {
    id: 30016,
    file: 'pantene_shampoo_bambu_400ml.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2335182/709794---shampoo-pantene-bambu-400ml-1.jpg'
  },
  {
    id: 30027,
    file: 'tresemme_brilho_lamelar_400ml.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2491653/Shampoo-TRESemme-Brilho-Lamelar-400ml.jpg'
  },
  {
    id: 30051,
    file: 'bio_extratus_tutano_creme_250g.jpg',
    url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1215028/10088859_1.jpg'
  },
  {
    id: 30052,
    file: 'haskell_cavalo_forte_mascara_300g.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/975310/771180---Mascara-de-Tratamento-Haskell-Cavalo-Forte-300ml-1.jpg'
  },
  {
    id: 30068,
    file: 'cetoconazol_shampoo_ems_100ml.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/655953/646245---shampoo-cetoconazol-20mg-ml-generico-100ml.jpg'
  },
  {
    id: 30134,
    file: 'gillette_mach3_aparelho_2cargas.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2335309/831697---kit-gillette-mach3-1-aparelho-recarregavel-3-cargas-para-barbear-1.jpg'
  },
  {
    id: 30135,
    file: 'gillette_mach3_carga_4un.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2306789/Carga-Gillette-Mach3-Sensitive-4-Unidades.jpg'
  },
  {
    id: 30136,
    file: 'gillette_foamy_pele_sensivel_312g.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1493359/137375---espuma-de-barbear-gillette-foamy-sensivel-175g-1.jpg'
  },
  {
    id: 30137,
    file: 'veet_creme_depilatorio_delicadas_100ml.jpg',
    url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2334818/814695---Creme-Depilatorio-Corporal-Veet-Pure---Fresh-Peles-Delicadas---200ml-1.jpg'
  }
];

function download(item) {
  return new Promise(resolve => {
    function tryReq(curUrl, depth) {
      if (depth > 5) return resolve(false);
      const client = curUrl.startsWith('https') ? https : http;
      const parsed = new URL(curUrl);
      const req = client.get(curUrl, {
        headers: {
          'Host': parsed.hostname,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let next = res.headers.location;
          if (!next.startsWith('http')) next = new URL(next, parsed.origin).href;
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
    }
    tryReq(item.url, 0);
  });
}

async function run() {
  for (const it of list) {
    await download(it);
  }
}
run();
