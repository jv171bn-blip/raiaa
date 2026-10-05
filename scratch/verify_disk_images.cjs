const fs = require('fs');
const path = require('path');

const publicFiles = new Set(fs.readdirSync('public/products'));

function verifyCatalog(file) {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.matchAll(/(?:"image"|image):\s*"([^"]+)"/g);
  const missing = [];
  let total = 0;
  for (const m of imgMatches) {
    total++;
    const url = m[1];
    if (url.startsWith('/products/')) {
      const filename = url.replace('/products/', '');
      if (!publicFiles.has(filename)) {
        missing.push({ url, filename });
      }
    } else {
      missing.push({ url, reason: 'Not a local /products/ url' });
    }
  }
  console.log(`=== ${file} ===`);
  console.log(`Total images: ${total}`);
  console.log(`Missing / invalid: ${missing.length}`);
  missing.forEach(m => console.log('  ', m));
}

verifyCatalog('src/data/products.ts');
verifyCatalog('src/data/catalogExpanded.ts');
verifyCatalog('src/data/ultraBrasilProducts.ts');
verifyCatalog('src/data/novosProdutosCatalogo.ts');
