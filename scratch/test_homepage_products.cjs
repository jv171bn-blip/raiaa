const fs = require('fs');

// We can extract all products defined in src/data/products.ts and src/data/catalogExpanded.ts and src/data/montaOffers.ts
// Let's create a mock or directly parse them.
const productsFile = fs.readFileSync('src/data/products.ts', 'utf8');

// Let's find every product in mostBought, blackDayProducts, weekHighlights, favoriteBrands, asianBeauty
function extractArray(name) {
  const start = productsFile.indexOf(`export const ${name}: Product[] = [`);
  if (start === -1) {
    const start2 = productsFile.indexOf(`export const ${name} = [`);
    if (start2 === -1) return [];
  }
  const slice = productsFile.slice(start);
  const end = slice.indexOf('];');
  const arrStr = slice.slice(0, end + 2);
  
  // Find id, name, category, image
  const items = [];
  const regex = /id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?(?:category:\s*["']([^"']+)["'])?[\s\S]*?image:\s*["']([^"']+)["']/g;
  let m;
  while ((m = regex.exec(arrStr)) !== null) {
    items.push({ id: m[1], name: m[2], category: m[3] || '', image: m[4] });
  }
  return items;
}

console.log('mostBought:', extractArray('mostBought').length);
console.log('blackDayProducts:', extractArray('blackDayProducts').length);
console.log('weekHighlights:', extractArray('weekHighlights').length);
console.log('favoriteBrands:', extractArray('favoriteBrands').length);
console.log('asianBeauty:', extractArray('asianBeauty').length);

const all = [
  ...extractArray('mostBought').map(p => ({ ...p, section: 'mostBought' })),
  ...extractArray('blackDayProducts').map(p => ({ ...p, section: 'blackDayProducts' })),
  ...extractArray('weekHighlights').map(p => ({ ...p, section: 'weekHighlights' })),
  ...extractArray('favoriteBrands').map(p => ({ ...p, section: 'favoriteBrands' })),
  ...extractArray('asianBeauty').map(p => ({ ...p, section: 'asianBeauty' })),
];

all.forEach(p => {
  console.log(`[${p.section}] ${p.name} | IMG: ${p.image}`);
});
