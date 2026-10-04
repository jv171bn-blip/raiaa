const https = require('https');

const queries = [
  { id: 30381, term: 'repelente sbp icaridina spray 100ml', file: 'sbp_repelente_icaridina_100ml.jpg' },
  { id: 30145, term: 'vitamina addera d3 7000ui 4 capsulas', file: 'addera_d3_7000ui_4caps.jpg' },
  { id: 30376, term: 'crisp bar integralmedica doce de leite', file: 'integralmedica_crisp_bar_doce_leite.jpg' },
  { id: 30218, term: 'equaliv melatonina gotas 20ml', file: 'equaliv_melatonina_gotas_20ml.jpg' },
  { id: 30213, term: 'gillette prestobarba 3 4 unidades', file: 'gillette_prestobarba_3_4un.jpg' },
  { id: 30275, term: 'polaramine xarope 120ml', file: 'polaramine_xarope_120ml.jpg' },
  { id: 30089, term: 'gel limpeza neutrogena purified skin 150g', file: 'neutrogena_purified_skin_150g.jpg' },
  { id: 30095, term: 'gel limpeza avene cleanance 300ml', file: 'avene_cleanance_gel_300ml.jpg' },
  { id: 30138, term: 'multivitaminico centrum de a a zinco 60 comprimidos', file: 'centrum_de_a_a_zinco_60comp.jpg' },
  { id: 30125, term: 'creme dental sensodyne repair protect 100g', file: 'sensodyne_repair_protect_100g.jpg' },
  { id: 30130, term: 'fio dental oral-b essential floss 50m', file: 'oralb_essential_floss_50m.jpg' },
  { id: 30131, term: 'absorvente always platinum noturno abas 28', file: 'always_platinum_noturno_28un.jpg' },
  { id: 30058, term: 'mascara wella fusion 150ml', file: 'wella_fusion_mascara_150ml.jpg' },
  { id: 30055, term: 'oleo kerastase elixir ultime 100ml', file: 'kerastase_elixir_ultime_100ml.jpg' },
  { id: 603, term: 'vitergan zinco 30 comprimidos', file: 'vitergan_zinco_30comp.jpg' }
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
  const found = [];
  for (const q of queries) {
    let res = await searchVTEX('www.drogariaspacheco.com.br', q.term);
    let source = 'Pacheco';
    if (!res) {
      res = await searchVTEX('www.saojoaofarmacias.com.br', q.term);
      source = 'Sao Joao';
    }
    if (res) {
      console.log(`[FOUND ${source}] ID ${q.id} -> ${res.name}\n   File: ${q.file}\n   URL: ${res.img}`);
      found.push({ ...q, downloadUrl: res.img });
    } else {
      console.log(`[NOT FOUND] ID ${q.id}: ${q.term}`);
    }
  }
  fs.writeFileSync('scratch/mismatches_to_download.json', JSON.stringify(found, null, 2));
}
run();
