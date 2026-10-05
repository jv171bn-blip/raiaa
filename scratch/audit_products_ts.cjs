const fs = require('fs');

const pContent = fs.readFileSync('src/data/products.ts', 'utf8');

// Find all products in products.ts
const pLines = pContent.split('\n');

const prods = [];
let cur = {};
let inP = false;

pLines.forEach((l, idx) => {
  const line = l.trim();
  if (line.startsWith('{')) {
    cur = {};
    inP = true;
  } else if (inP) {
    if (line.startsWith('id:')) cur.id = line.match(/id:\s*(\d+)/)?.[1];
    if (line.startsWith('name:')) cur.name = line.match(/name:\s*["']([^"']+)["']/)?.[1];
    if (line.startsWith('image:')) cur.image = line.match(/image:\s*["']([^"']+)["']/)?.[1];
    if (line.startsWith('}') || line.startsWith('},')) {
      inP = false;
      if (cur.name && cur.image) {
        prods.push({ ...cur, line: idx });
      }
    }
  }
});

console.log(`Audited ${prods.length} products in products.ts`);

// Check if images exist
const missing = prods.filter(p => {
  const path = p.image.startsWith('/') ? p.image.slice(1) : p.image;
  return !fs.existsSync(`public/${path}`);
});
console.log(`Missing images in products.ts: ${missing.length}`);
missing.forEach(m => console.log('  Missing:', m.id, m.name, m.image));

// Check duplicated images
const usage = {};
prods.forEach(p => {
  if (!usage[p.image]) usage[p.image] = [];
  usage[p.image].push(p);
});

console.log('\n--- Duplicated images in products.ts ---');
Object.entries(usage).forEach(([img, list]) => {
  if (list.length > 1) {
    console.log(`Image ${img} used by ${list.length} products:`);
    list.forEach(p => console.log(`  [id ${p.id}] ${p.name}`));
  }
});
