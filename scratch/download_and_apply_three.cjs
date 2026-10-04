const fs = require('fs');
const https = require('https');
const path = require('path');

const list = [
  { id: 30129, file: 'curaprox_cs5460_individual.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/761251/290220---escova-dental-curaprox-ultra-soft-cs5460b-cores-sortidas.jpg' },
  { id: 30086, file: 'darrow_actine_400g_frasco.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/2569261/775711---Gel-de-Limpeza-Darrow-Darrow-Actine-Dermatologico-400g-1.jpg' },
  { id: 30071, file: 'isdin_fusion_water_fps60.jpg', url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1420336/719200---Protetor-Solar-Facial-ISDIN-FPS-60-Fusion-Water-5-Stars-Sem-Cor-50ml-1.jpg' }
];

function dl(item) {
  return new Promise(resolve => {
    const dest = path.join('public/products', item.file);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      const ws = fs.createWriteStream(dest);
      res.pipe(ws);
      ws.on('finish', () => {
        ws.close();
        console.log(`Saved ${item.file} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', () => resolve(false));
  });
}

async function run() {
  for (const it of list) {
    await dl(it);
  }

  let content = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
  for (const it of list) {
    const newImg = '/products/' + it.file;
    const r1 = new RegExp(`(\\{[^{}]*?"image":\\s*")[^"]+("[^{}]*?"id":\\s*${it.id}[^{}]*?\\})`, 'g');
    if (r1.test(content)) {
      content = content.replace(r1, `$1${newImg}$2`);
    } else {
      const r2 = new RegExp(`(\\{[^{}]*?"id":\\s*${it.id}[^{}]*?"image":\\s*")[^"]+("[^{}]*?\\})`, 'g');
      content = content.replace(r2, `$1${newImg}$2`);
    }
  }
  fs.writeFileSync('src/data/novosProdutosCatalogo.ts', content, 'utf8');
  console.log('Updated 3 items in novosProdutosCatalogo.ts!');
}
run();
