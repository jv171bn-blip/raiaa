const fs = require('fs');

const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const prods = [];
const matches = prodRaw.split(/\{\s*id:\s*(\d+)/g);
for (let i = 1; i < matches.length; i += 2) {
  const id = parseInt(matches[i], 10);
  const body = matches[i + 1];
  const nameM = body.match(/name:\s*"([^"]+)"/);
  const imgM = body.match(/image:\s*"([^"]+)"/);
  if (nameM && imgM) {
    prods.push({ id, name: nameM[1], image: imgM[1] });
  }
}

const raiaProds = prods.filter(p => p.image.includes('raiadrogasil.io'));
console.log('Total products in products.ts with raiadrogasil images:', raiaProds.length);
raiaProds.forEach(p => console.log(`  [${p.id}] ${p.name} -> ${p.image}`));
