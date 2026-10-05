const fs = require('fs');

// Let's load ultraBrasilProducts
const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const expRaw = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

const publicFiles = new Set(fs.readdirSync('public/products'));

function extractProducts(raw) {
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

const ubList = extractProducts(ubRaw);
const prodList = extractProducts(prodRaw);
const expList = extractProducts(expRaw);

console.log('UB count:', ubList.length);
console.log('Prod count:', prodList.length);
console.log('Exp count:', expList.length);

// Check prodList for raiadrogasil
const prodClean = prodList.filter(p => !p.image.includes('raiadrogasil.io') && p.image.startsWith('/products/'));
console.log('Prod clean count:', prodClean.length);

// Check expList for raiadrogasil
const expClean = expList.filter(p => !p.image.includes('raiadrogasil.io') && p.image.startsWith('/products/'));
console.log('Exp clean count:', expClean.length);

// Let's check all images exist in public/products
const allClean = [...ubList, ...prodClean, ...expClean];
const missing = allClean.filter(p => {
  const f = p.image.replace('/products/', '');
  return !publicFiles.has(f);
});

console.log('Total clean products:', allClean.length);
console.log('Missing images among clean products:', missing.length);
if (missing.length > 0) {
  missing.forEach(m => console.log('Missing file:', m.image, 'for product:', m.name));
}
