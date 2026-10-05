const fs = require('fs');

function inspectCatalog(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Simple regex parser for products or objects
  const prods = [];
  // Match objects with name and image
  const regex = /{\s*(?:[^{}]*?"name":\s*"([^"]+)"[^{}]*?"image":\s*"([^"]+)"|[^{}]*?name:\s*"([^"]+)"[^{}]*?image:\s*"([^"]+)")/gs;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const name = match[1] || match[3];
    const image = match[2] || match[4];
    prods.push({ name, image, file: filePath });
  }
  return prods;
}

const p1 = inspectCatalog('src/data/products.ts');
const p2 = inspectCatalog('src/data/catalogExpanded.ts');
const p3 = inspectCatalog('src/data/novosProdutosCatalogo.ts');

const all = [...p1, ...p2, ...p3];
const raiaProds = all.filter(p => p.image.includes('raiadrogasil.io'));

console.log('Total products parsed with raiadrogasil images:', raiaProds.length);
console.log('First 20 examples:');
raiaProds.slice(0, 20).forEach(p => {
  console.log(`[${p.file}] ${p.name} -> ${p.image}`);
});
