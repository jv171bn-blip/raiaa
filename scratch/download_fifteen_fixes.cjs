const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const targets = [
  // 1. SBP Repelente Spray com Icaridina 100ml
  { file: 'sbp_repelente_icaridina_100ml.jpg', url: 'https://cdn-cosmos.bluesoft.com.br/products/7891035618345' },
  // 2. Polaramine Xarope 120ml
  { file: 'polaramine_xarope_120ml.jpg', url: 'https://cdn-cosmos.bluesoft.com.br/products/7891142171757' },
  // 3. Wella Fusion Máscara 150ml
  { file: 'wella_fusion_mascara_150ml.jpg', url: 'https://cdn-cosmos.bluesoft.com.br/products/7896235353737' },
  // 4. Kérastase Elixir Ultime 100ml
  { file: 'kerastase_elixir_ultime_100ml.jpg', url: 'https://cdn-cosmos.bluesoft.com.br/products/3474636613908' },
  // 5. Addera D3 7.000UI 4 cápsulas
  { file: 'addera_d3_7000ui_4caps.jpg', url: 'https://cdn-cosmos.bluesoft.com.br/products/7896094914711' },

  // From Pacheco VTEX API:
  // 6. Protein Crisp Bar Doce de Leite / Ovomaltine
  { file: 'integralmedica_crisp_bar_doce_leite.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2568393/Protein-Crisp-Bar-Ovomaltine-45g---Integralmedica.jpg' },
  // 7. Equaliv Melatonina Gotas
  { file: 'equaliv_melatonina_gotas_20ml.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/755528/764035---Suplemento-Alimentar-Equaliv-Melatonina-210MCG-Gotas-30ml-1.jpg' },
  // 8. Gillette Prestobarba 3 Masculino 4un
  { file: 'gillette_prestobarba_3_4un.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2264212/Aparelho-De-Barbear-Gillette-Prestobarba-3-Ice-4-Unidades.jpg' },
  // 9. Gel de Limpeza Neutrogena Purified Skin 150g
  { file: 'neutrogena_purified_skin_150g.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1452825/892998---kit-gel-de-limpeza-neutrogena-purified-skin-150g-gel-de-limpeza-60g.jpg' },
  // 10. Gel de Limpeza Avène Cleanance 300g/300ml
  { file: 'avene_cleanance_gel_300ml.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1478095/736740---Gel-de-Limpeza-Avene-Cleanance-300g-1.jpg' },
  // 11. Multivitamínico Centrum De A a Zinco 60comp
  { file: 'centrum_de_a_a_zinco_60comp.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1307562/729426---Suplemento-Vitaminico-Centrum-Essentials-Homem-de-A-a-Zinco-60-Comprimidos_0003_7896009498626_1.png' },
  // 12. Sensodyne Repair & Protect 100g
  { file: 'sensodyne_repair_protect_100g.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1367250/350222---creme-dental-sensodyne-repair-protect-100g_0004_350222_0.png.png' },
  // 13. Oral-B Essential Floss 50m
  { file: 'oralb_essential_floss_50m.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2556626/89010---fio-dental-oral-b-essential-floss-encerado-menta-50m-1.jpg' },
  // 14. Always Platinum Noturno
  { file: 'always_platinum_noturno_28un.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/707809/511986---absorvente-always-malha-seca-mega-noturno-com-abas-8-unidades.jpg' },
  // 15. Vitergan Zinco 30comp
  { file: 'vitergan_zinco_30comp.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1004569/25666---vitergan-zinco-marjan-30-comprimidos-revestidos.jpg' }
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
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let next = res.headers.location;
          if (!next.startsWith('http')) next = new URL(next, parsed.origin).href;
          return tryReq(next, depth + 1);
        }
        if (res.statusCode !== 200) {
          console.error(`HTTP ${res.statusCode} for ${item.file} at ${curUrl}`);
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
  for (const it of targets) {
    await download(it);
  }
}
run();
