const fs = require('fs');

const ubProducts = JSON.parse(fs.readFileSync('scratch/ultra_products.json', 'utf8'));

// Check ultraBrasilProducts.ts directly
const ubContent = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');

// Also check products.ts
const pContent = fs.readFileSync('src/data/products.ts', 'utf8');

console.log('=== AUDITING IMAGES ON DISK ===');
const publicDir = 'public';

function checkImage(img) {
  if (!img) return false;
  const relPath = img.startsWith('/') ? img.slice(1) : img;
  const fullPath = `public/${relPath}`;
  return fs.existsSync(fullPath);
}

// Find all products in ultraBrasilProducts.ts
const ubBlocks = ubContent.match(/\{[^{}]*?"name":\s*"[^"]*"[^{}]*?\}/g) || [];
console.log(`Auditing ${ubBlocks.length} products in ultraBrasilProducts.ts...`);

const imageUsage = {};
const missingImages = [];

ubBlocks.forEach(b => {
  const idM = b.match(/"id":\s*(\d+)/);
  const nameM = b.match(/"name":\s*"([^"]+)"/);
  const imgM = b.match(/"image":\s*"([^"]+)"/);
  
  if (imgM) {
    const img = imgM[1];
    if (!checkImage(img)) {
      missingImages.push({ id: idM?idM[1]:'?', name: nameM?nameM[1]:'?', img });
    }
    if (!imageUsage[img]) imageUsage[img] = [];
    imageUsage[img].push({ id: idM?idM[1]:'?', name: nameM?nameM[1]:'?' });
  }
});

console.log(`Missing images: ${missingImages.length}`);
missingImages.forEach(m => console.log('  MISSING:', m));

console.log('\n--- Duplicated images used across different products ---');
Object.entries(imageUsage).forEach(([img, prods]) => {
  if (prods.length > 1) {
    console.log(`\nImage ${img} is used by ${prods.length} products:`);
    prods.forEach(p => console.log(`  [id ${p.id}] ${p.name}`));
  }
});
