const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Find all products in products.ts
const idMatches = [...content.matchAll(/id:\s*(\d+)/g)].map(m => parseInt(m[1]));
console.log('Total id occurrences:', idMatches.length);

// Let us find each array in products.ts
const arrayNames = [
  'mostBought',
  'blackDayProducts',
  'weekHighlights',
  'favoriteBrands',
  'asianBeauty',
  'quemComprouTambem',
  'similaresVocePode',
  'hairCareProducts',
  'fraldasProducts',
  'remediosProducts',
  'dermocosmeticosProducts',
  'vitaminasSuplementosProducts',
  'higieneBucalPersonalProducts',
  'bebeMaisVendidos'
];

arrayNames.forEach(arr => {
  const regex = new RegExp(`export const ${arr}: Product\\[\\] = \\[([\\s\\S]*?)\\];`, 'm');
  const match = content.match(regex);
  if (match) {
    const items = [...match[1].matchAll(/name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)];
    const diaperItems = items.filter(i => i[1].toLowerCase().includes('fralda') || i[1].toLowerCase().includes('pampers'));
    if (diaperItems.length > 0) {
      console.log(`\nArray ${arr} has ${diaperItems.length} diapers:`);
      diaperItems.forEach(d => console.log(`  "${d[1]}" -> ${d[2]}`));
    }
  }
});
