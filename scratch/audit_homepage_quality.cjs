const fs = require('fs');
const path = require('path');

// 1. Check all images in public/products
const publicDir = path.resolve('public/products');
const publicFiles = new Set(fs.readdirSync(publicDir));
console.log('Total local image files in public/products:', publicFiles.size);

// 2. Check products.ts
const productsTs = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = /name:\s*['"`]([^'"`]+)['"`][\s\S]*?image:\s*['"`]([^'"`]+)['"`]/g;
let match;
let count = 0;
let missing = 0;
const missingList = [];
const diaperIssues = [];

while ((match = regex.exec(productsTs)) !== null) {
  count++;
  const name = match[1];
  const image = match[2];

  if (image.startsWith('/products/')) {
    const filename = image.replace('/products/', '');
    if (!publicFiles.has(filename)) {
      missing++;
      missingList.push({ name, image });
    }
  }

  // Check if name has diaper and image has cream/lotion
  const lowerName = name.toLowerCase();
  const lowerImg = image.toLowerCase();
  if (lowerName.includes('fralda') || lowerName.includes('pants')) {
    if (lowerImg.includes('creme') || lowerImg.includes('locao') || lowerImg.includes('cetaphil') || lowerImg.includes('cerave') || lowerImg.includes('serum') || lowerImg.includes('protetor')) {
      diaperIssues.push({ name, image });
    }
  }
}

console.log(`Total products parsed from products.ts: ${count}`);
console.log(`Total missing images: ${missing}`);
if (missingList.length > 0) {
  console.log('Sample missing:', missingList.slice(0, 5));
}
console.log(`Diapers with suspicious cream/skincare images: ${diaperIssues.length}`);
if (diaperIssues.length > 0) {
  console.log('Diaper issues:', diaperIssues);
}
