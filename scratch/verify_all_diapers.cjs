const fs = require('fs');

const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const expRaw = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
const novosRaw = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

function extractAll(raw, file) {
  const list = [];
  const matches = raw.split(/\{\s*(?:id|"id"):\s*(\d+)/g);
  for (let i = 1; i < matches.length; i += 2) {
    const id = parseInt(matches[i], 10);
    const body = matches[i + 1];
    const nameM = body.match(/(?:"name"|name):\s*"([^"]+)"/);
    const imgM = body.match(/(?:"image"|image):\s*"([^"]+)"/);
    const sizeM = body.match(/(?:"size"|size):\s*"([^"]+)"/);
    if (nameM && imgM) {
      list.push({
        id,
        name: nameM[1],
        image: imgM[1],
        size: sizeM ? sizeM[1] : '',
        file
      });
    }
  }
  return list;
}

const all = [
  ...extractAll(ubRaw, 'ultraBrasilProducts.ts'),
  ...extractAll(prodRaw, 'products.ts'),
  ...extractAll(expRaw, 'catalogExpanded.ts'),
  ...extractAll(novosRaw, 'novosProdutosCatalogo.ts')
];

const diapers = all.filter(p => p.name.toLowerCase().includes('fralda') || p.name.toLowerCase().includes('pampers'));

console.log(`Found ${diapers.length} diapers in the catalog:`);
diapers.forEach(d => {
  console.log(`[${d.id}] "${d.name}" | image: ${d.image} | file: ${d.file}`);
});
