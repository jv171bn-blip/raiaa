const fs = require('fs');

const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const expRaw = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

function extractProducts(raw, file) {
  const list = [];
  const matches = raw.split(/\{\s*(?:id|"id"):\s*(\d+)/g);
  for (let i = 1; i < matches.length; i += 2) {
    const id = parseInt(matches[i], 10);
    const body = matches[i + 1];
    const nameM = body.match(/(?:"name"|name):\s*"([^"]+)"/);
    const imgM = body.match(/(?:"image"|image):\s*"([^"]+)"/);
    if (nameM && imgM) {
      list.push({
        id,
        name: nameM[1],
        image: imgM[1],
        file
      });
    }
  }
  return list;
}

const prodClean = extractProducts(prodRaw, 'products.ts').filter(p => !p.image.includes('raiadrogasil.io') && p.image.startsWith('/products/'));
const expClean = extractProducts(expRaw, 'catalogExpanded.ts').filter(p => !p.image.includes('raiadrogasil.io') && p.image.startsWith('/products/'));

console.log('=== PROD CLEAN (89) ===');
prodClean.forEach(p => console.log(`[${p.id}] "${p.name}" -> ${p.image}`));

console.log('\n=== EXP CLEAN (30) ===');
expClean.forEach(p => console.log(`[${p.id}] "${p.name}" -> ${p.image}`));
