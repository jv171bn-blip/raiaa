const fs = require('fs');

const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
const prods = [];
const matches = ubRaw.split(/\{\s*"id":\s*(\d+)/g);
for (let i = 1; i < matches.length; i += 2) {
  const id = parseInt(matches[i], 10);
  const body = matches[i + 1];
  const nameM = body.match(/"name":\s*"([^"]+)"/);
  const imgM = body.match(/"image":\s*"([^"]+)"/);
  if (nameM && imgM) {
    prods.push({ id, name: nameM[1], image: imgM[1] });
  }
}

console.log('Total ultra products:', prods.length);

// Check if any ultra product shares the same image
const imgUsage = {};
prods.forEach(p => {
  if (!imgUsage[p.image]) imgUsage[p.image] = [];
  imgUsage[p.image].push(p);
});

const duplicates = Object.entries(imgUsage).filter(([img, list]) => list.length > 1);
console.log('Number of images shared by more than 1 product:', duplicates.length);
duplicates.forEach(([img, list]) => {
  console.log(`Image ${img} shared by ${list.length} products:`);
  list.forEach(p => console.log(`  - [${p.id}] ${p.name}`));
});
