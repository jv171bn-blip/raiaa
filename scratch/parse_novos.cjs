const fs = require('fs');

let novosRaw = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const eqIdx = novosRaw.indexOf('= [');
const startIdx = eqIdx + 2;
const endIdx = novosRaw.lastIndexOf(']');
const jsonStr = novosRaw.slice(startIdx, endIdx + 1);

const novos = JSON.parse(jsonStr);

const publicFiles = new Set(fs.readdirSync('public/products'));

let raiaCount = 0;
let validLocal = 0;
let missingLocal = 0;

novos.forEach(p => {
  if (p.image.includes('raiadrogasil.io')) raiaCount++;
  else if (p.image.startsWith('/products/')) {
    const f = p.image.replace('/products/', '');
    if (publicFiles.has(f)) validLocal++;
    else missingLocal++;
  }
});

console.log(`novosProdutosCatalogo count: ${novos.length}`);
console.log(`  raiadrogasil.io: ${raiaCount}`);
console.log(`  validLocal: ${validLocal}`);
console.log(`  missingLocal: ${missingLocal}`);
