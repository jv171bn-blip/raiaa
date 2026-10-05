const fs = require('fs');

const files = [
  'src/data/products.ts',
  'src/data/catalogExpanded.ts',
  'src/data/novosProdutosCatalogo.ts',
  'src/data/ultraBrasilProducts.ts'
];

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const imgMatches = text.match(/image:\s*["'][^"']+["']|"image":\s*["'][^"']+["']/g) || [];
  const raiaImages = imgMatches.filter(m => m.includes('raiadrogasil.io'));
  const localImages = imgMatches.filter(m => m.includes('/products/'));
  console.log(`=== ${file} ===`);
  console.log(`Total images: ${imgMatches.length}`);
  console.log(`raiadrogasil.io images: ${raiaImages.length}`);
  console.log(`local /products/ images: ${localImages.length}`);
}
