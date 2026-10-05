const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Find all export const / const array declarations
const arrayMatches = content.matchAll(/(?:export\s+)?const\s+(\w+)(?::\s*Product\[\])?\s*=\s*\[/g);
const arrayNames = [];
for (const m of arrayMatches) {
  arrayNames.push({ name: m[1], index: m.index });
}

console.log('Arrays found in products.ts:', arrayNames.map(a => a.name));

// For each array, check how many raiadrogasil images it has
for (let i = 0; i < arrayNames.length; i++) {
  const current = arrayNames[i];
  const next = arrayNames[i + 1];
  const slice = content.slice(current.index, next ? next.index : undefined);
  const raiaMatches = slice.match(/https:\/\/product-data\.raiadrogasil\.io\/images\//g) || [];
  const localMatches = slice.match(/\/products\//g) || [];
  console.log(`Array "${current.name}": raiadrogasil=${raiaMatches.length}, local=${localMatches.length}`);
}
