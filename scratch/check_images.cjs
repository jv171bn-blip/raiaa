const fs = require('fs');
const path = require('path');

// Let's inspect images in public/products
const publicProducts = fs.readdirSync('public/products');
console.log('Total files in public/products:', publicProducts.length);

// Let's check products in products.ts
const productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
const idMatches = productsContent.match(/id:\s*(\d+)/g) || [];
console.log('Total id entries in products.ts:', idMatches.length);

// Let's inspect what images are used by fraldas
const fraldaRegex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let match;
while ((match = fraldaRegex.exec(productsContent)) !== null) {
  const [_, id, name, image] = match;
  if (name.toLowerCase().includes('fralda') || image.toLowerCase().includes('fralda')) {
    console.log(`[${id}] ${name} => ${image}`);
  }
}
