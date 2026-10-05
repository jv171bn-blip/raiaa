const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf8');
const blocks = content.split(/\{\s*id:\s*/).slice(1);

console.log('Total blocks in products.ts:', blocks.length);

const diapers = [];
blocks.forEach(b => {
  const full = '{ id: ' + b;
  const id = full.match(/id:\s*(\d+)/)?.[1];
  const name = full.match(/name:\s*"([^"]+)"/)?.[1];
  const img = full.match(/image:\s*"([^"]+)"/)?.[1];
  if (name && (name.toLowerCase().includes('fralda') || name.toLowerCase().includes('pampers'))) {
    diapers.push({ id, name, img });
  }
});

console.log('Diaper products found:', diapers.length);
diapers.forEach(d => console.log(`[id ${d.id}] "${d.name}" -> ${d.img}`));
