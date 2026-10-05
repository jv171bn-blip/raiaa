const fs = require('fs');

const code = fs.readFileSync('src/data/products.ts', 'utf8');
const pRegex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let m;
const products = [];
while ((m = pRegex.exec(code)) !== null) {
  products.push({ id: m[1], name: m[2], image: m[3] });
}

console.log('Total products in products.ts:', products.length);
fs.writeFileSync('scratch/all_products_ts.json', JSON.stringify(products, null, 2));
console.log('Saved to scratch/all_products_ts.json');
