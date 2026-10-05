const fs = require('fs');

// Let's emulate App.tsx allProducts
const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const expRaw = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
const novosRaw = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

function extractAll(raw) {
  const list = [];
  const matches = raw.split(/\{\s*(?:id|"id"):\s*(\d+)/g);
  for (let i = 1; i < matches.length; i += 2) {
    const id = parseInt(matches[i], 10);
    const body = matches[i + 1];
    const nameM = body.match(/(?:"name"|name):\s*"([^"]+)"/);
    const imgM = body.match(/(?:"image"|image):\s*"([^"]+)"/);
    const brandM = body.match(/(?:"brand"|brand):\s*"([^"]+)"/);
    const catM = body.match(/(?:"category"|category):\s*"([^"]+)"/);
    if (nameM && imgM) {
      list.push({
        id,
        name: nameM[1],
        image: imgM[1],
        brand: brandM ? brandM[1] : '',
        category: catM ? catM[1] : ''
      });
    }
  }
  return list;
}

const all = [
  ...extractAll(ubRaw),
  ...extractAll(prodRaw),
  ...extractAll(expRaw),
  ...extractAll(novosRaw)
];

console.log('Total products across all 4 files:', all.length);

const publicFiles = new Set(fs.readdirSync('public/products'));

let missing = 0;
let remote = 0;
all.forEach(p => {
  if (p.image.startsWith('/products/')) {
    const f = p.image.replace('/products/', '');
    if (!publicFiles.has(f)) {
      missing++;
      console.log('MISSING LOCAL IMAGE:', p.name, p.image);
    }
  } else {
    remote++;
    console.log('REMOTE IMAGE:', p.name, p.image);
  }
});

console.log('Missing images:', missing);
console.log('Remote images:', remote);
