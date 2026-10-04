const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
  // Babysec
  { file: 'babysec_ultrasec_m.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1264407/fralda-babysec-ultrasec-galinha-pintadinha-hiper-m-68-unidades-10033462_1.jpg' },
  { file: 'babysec_ultrasec_g.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1264450/fralda-babysec-ultrasec-galinha-pintadinha-hiper-g-60-unidades-10033461_1.jpg' },
  { file: 'babysec_ultrasec_xg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1264448/fralda-babysec-ultrasec-galinha-pintadinha-hiper-xg-56-unidades-10033463_1.jpg' },
  { file: 'babysec_ultrasec_xxg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1264423/fralda-babysec-ultrasec-galinha-pintadinha-hiper-xxg-48-unidades-10033450_1.jpg' },

  // Pampers XXG
  { file: 'pampers_confort_sec_xxg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1216924/fralda-pampers-confort-sec-tamanho-xxg-88-unidades-10046071_1.jpg' },
  { file: 'pampers_pants_xxg.jpg', url: 'https://sjdigital.vteximg.com.br/arquivos/ids/1202307/fralda-pampers-pants-ajuste-total-max-xxg-74-unidades-10052538_1.jpg' },

  // Pom Pom Protek
  { file: 'pompom_protek_m.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1440204/890553---Fralda-Pom-Pom-Protek-Protecao-de-Mae-M-28-Unidades-1.jpg' },
  { file: 'pompom_protek_g.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1440221/890782---Fralda-Pom-Pom-Protek-Protecao-de-Mae-G-24-Unidades-1.jpg' },
  { file: 'pompom_protek_xg.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1460694/890812---fralda-pom-pom-protek-protecao-de-mae-mega-xg-20-unidades-1.jpg' },
  { file: 'pompom_protek_xxg.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1460695/890820---fralda-pom-pom-protek-protecao-de-mae-xxg-18-unidades-1.jpg' },

  // MamyPoko Fralda Calça
  { file: 'mamypoko_calca_p.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2511441/Fralda-Calca-Mamypoko-Dia---Noite-P-22-Unidades.jpg' },
  { file: 'mamypoko_calca_m.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2511496/Fralda-Calca-Mamypoko-Dia-e-Noite-Tamanho-Medio-18-Unidades.jpg' },
  { file: 'mamypoko_calca_g.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2511378/Fralda-Calca-Mamypoko-Dia-e-Noite-G-30-Unidades.jpg' },
  { file: 'mamypoko_calca_xg.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2511483/Fralda-Calca-Mamypoko-Dia-E-Noite-XG-Pacote-Com-26-Unidades.jpg' },
  { file: 'mamypoko_calca_xxg.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2511309/Fralda-Calca-Mamypoko-Dia-E-Noite-Xxg-Pacote-Com-22-Unidades.jpg' }
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
