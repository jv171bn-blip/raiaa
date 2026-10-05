const fs = require('fs');

const content = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');

// Parse all items
const regex = /\{\s*"id":\s*(\d+)[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"[\s\S]*?\}(?:,)?/g;
let match;
const products = [];
while ((match = regex.exec(content)) !== null) {
  products.push({ id: parseInt(match[1]), name: match[2], image: match[3] });
}

console.log('Total products in ultraBrasilProducts:', products.length);

// Count image frequencies
const imgCount = {};
products.forEach(p => {
  imgCount[p.image] = (imgCount[p.image] || 0) + 1;
});

const sharedImages = Object.entries(imgCount).filter(([img, c]) => c > 1);
console.log('Shared images count:', sharedImages.length);
sharedImages.forEach(([img, c]) => {
  console.log(`\nImage ${img} shared by ${c} products:`);
  const prods = products.filter(p => p.image === img);
  prods.forEach(p => console.log(`  [id ${p.id}] ${p.name}`));
});
