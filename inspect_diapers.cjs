const fs = require('fs');

const content = fs.readFileSync('./src/data/products.ts', 'utf8');
const lines = content.split('\n');
let curr = {};
const diapers = [];

for (let l of lines) {
  let mId = l.match(/id:\s*(\d+)/);
  if (mId) curr.id = mId[1];
  let mName = l.match(/name:\s*["']([^"']+)["']/);
  if (mName) curr.name = mName[1];
  let mSize = l.match(/size:\s*["']([^"']+)["']/);
  if (mSize) curr.size = mSize[1];
  let mPrice = l.match(/price:\s*([\d\.]+)/);
  if (mPrice) curr.price = mPrice[1];
  let mOptions = l.match(/options:\s*(\d+)/);
  if (mOptions) curr.options = mOptions[1];
  let mBrand = l.match(/brand:\s*["']([^"']+)["']/);
  if (mBrand) curr.brand = mBrand[1];

  if (l.trim() === '},') {
    if (curr.id && curr.name && curr.name.toLowerCase().includes('fralda')) {
      diapers.push({ ...curr });
    }
    curr = {};
  }
}

console.log('Total diapers found in products.ts:', diapers.length);
diapers.forEach(d => {
  console.log(`[${d.id}] (${d.brand || 'No brand'}) options: ${d.options || 'none'} | size: ${d.size} | R$ ${d.price} | ${d.name}`);
});
