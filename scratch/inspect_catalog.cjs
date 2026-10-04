const fs = require('fs');

// We can evaluate or parse the array from novosProdutosCatalogo.ts
const content = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
// remove export const novosProdutosCatalogo: Product[] = and import
const arrayStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);

let items;
try {
  // Use Function to safely evaluate JSON-like JS array
  items = new Function('return ' + arrayStr)();
  console.log('Successfully parsed novosProdutosCatalogo! Total items:', items.length);
} catch (e) {
  console.error('Error parsing array:', e);
}

const prodsContent = fs.readFileSync('src/data/products.ts', 'utf8');
// Let's check products.ts as well
const prodArrayStr = prodsContent.substring(prodsContent.indexOf('['), prodsContent.lastIndexOf(']') + 1);
let prods;
try {
  prods = new Function('return ' + prodArrayStr)();
  console.log('Successfully parsed products.ts! Total items:', prods.length);
} catch (e) {
  console.error('Error parsing products.ts array:', e);
}

// Let's analyze images in novosProdutosCatalogo
const existingPublic = new Set(fs.readdirSync('public/products'));

console.log('\n--- Checking all items in novosProdutosCatalogo for potential image issues ---');
const suspicious = [];
for (const p of items) {
  // If it points to /products/xxx, does it exist?
  if (p.image.startsWith('/products/')) {
    const filename = p.image.replace('/products/', '');
    if (!existingPublic.has(filename)) {
      suspicious.push({ id: p.id, name: p.name, image: p.image, reason: 'File does not exist in public/products' });
    }
  }
}
console.log('Missing public files:', suspicious.length);
if (suspicious.length > 0) {
  console.log(suspicious);
}

// Let's also check for generic/shared/mismatched image names like mascara_elseve, dorflex, dipirona, sabonete, etc.
const checks = [
  'mascara_elseve', 'dorflex', 'dipirona', 'paracetamol', 'shampoo_pantene',
  'condicionador_pantene', 'cetaphil_lotion', 'cetaphil_pote', 'bepantol_baby',
  'mucilon_milho', '19644592.webp', '14981917.webp', '14982036.webp', '14181353.webp'
];

console.log('\n--- Checking products with potentially generic/mismatched images ---');
for (const p of items) {
  for (const c of checks) {
    if (p.image.includes(c)) {
      console.log(`[novos ID ${p.id}] ${p.name} -> ${p.image}`);
      break;
    }
  }
}

for (const p of prods) {
  for (const c of checks) {
    if (p.image.includes(c)) {
      console.log(`[prods ID ${p.id}] ${p.name} -> ${p.image}`);
      break;
    }
  }
}
