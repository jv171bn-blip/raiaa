const https = require('https');

const queries = [
  { id: 30042, term: 'leave in elseve cicatri renov 100ml', file: 'elseve_cicatri_renov_leavein_100ml.jpg' },
  { id: 30016, term: 'shampoo pantene bambu 400ml', file: 'pantene_shampoo_bambu_400ml.jpg' },
  { id: 30027, term: 'shampoo tresemme brilho lamelar 400ml', file: 'tresemme_brilho_lamelar_400ml.jpg' },
  { id: 30051, term: 'banho de creme bio extratus tutano 250g', file: 'bio_extratus_tutano_creme_250g.jpg' },
  { id: 30052, term: 'mascara haskell cavalo forte 300g', file: 'haskell_cavalo_forte_mascara_300g.jpg' },
  { id: 30068, term: 'cetoconazol shampoo ems 100ml', file: 'cetoconazol_shampoo_ems_100ml.jpg' },
  { id: 30134, term: 'aparelho gillette mach3 2 cargas', file: 'gillette_mach3_aparelho_2cargas.jpg' },
  { id: 30135, term: 'carga gillette mach3 4 unidades', file: 'gillette_mach3_carga_4un.jpg' },
  { id: 30136, term: 'espuma barbear gillette foamy pele sensivel', file: 'gillette_foamy_pele_sensivel_312g.jpg' },
  { id: 30137, term: 'creme depilatorio veet peles delicadas 100ml', file: 'veet_creme_depilatorio_delicadas_100ml.jpg' }
];

function searchVTEX(endpoint, term) {
  return new Promise(resolve => {
    const url = `https://${endpoint}/api/catalog_system/pub/products/search?ft=${encodeURIComponent(term)}`;
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          if (j.length > 0 && j[0].items && j[0].items[0] && j[0].items[0].images) {
            resolve({
              name: j[0].productName,
              img: j[0].items[0].images[0].imageUrl
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (const q of queries) {
    let res = await searchVTEX('www.drogariaspacheco.com.br', q.term);
    let source = 'Pacheco';
    if (!res) {
      res = await searchVTEX('www.saojoaofarmacias.com.br', q.term);
      source = 'Sao Joao';
    }
    if (res) {
      console.log(`[FOUND ${source}] ID ${q.id} (${q.file}): ${res.name}\n   -> ${res.img}`);
    } else {
      console.log(`[NOT FOUND] ID ${q.id}: ${q.term}`);
    }
  }
}
run();
