const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

console.log('Finding items by search keywords in novosProdutosCatalogo:');

function findItem(keyword, brand) {
  return items.filter(x => {
    const matchName = x.name.toLowerCase().includes(keyword.toLowerCase());
    const matchBrand = !brand || x.brand.toLowerCase().includes(brand.toLowerCase());
    return matchName && matchBrand;
  });
}

const queries = [
  { k: 'Granado', b: 'Granado' },
  { k: 'ABCDerm', b: 'Bioderma' },
  { k: 'Lansinoh', b: 'Lansinoh' },
  { k: 'Regenesis', b: 'Regenesis' },
  { k: 'Lillo', b: 'Lillo' },
  { k: 'Mustela', b: 'Mustela' },
  { k: 'Pro AC', b: 'Cetaphil' },
  { k: 'Cetaphil', b: 'Cetaphil' },
  { k: 'Optimal Hydration', b: 'Cetaphil' },
  { k: 'Clinical Classic', b: 'Rexona' },
  { k: 'Acnase', b: 'Acnase' },
  { k: 'Adapaleno', b: 'Medley' },
  { k: 'Acnezil', b: 'Cimed' },
  { k: 'Centrum', b: 'Centrum' },
  { k: 'Lavitan', b: 'Lavitan' },
  { k: 'Dux Nutrition', b: 'Dux Nutrition' },
  { k: 'Growth', b: 'Growth' },
  { k: 'Dprev', b: 'Dprev' },
  { k: 'Addera', b: 'Addera' },
  { k: 'Stevia', b: 'Color Andina' },
  { k: 'Resfenol', b: 'Resfenol' },
  { k: 'Multigrip', b: 'Multigrip' },
  { k: 'Naldecon', b: 'Naldecon' },
  { k: 'Mickey', b: 'Nexcare' },
  { k: 'Alcon', b: 'Alcon' },
  { k: 'Lacday', b: 'Lacday' },
  { k: 'Mack', b: 'Mack' }
];

for (const q of queries) {
  const matches = findItem(q.k, q.b);
  console.log(`\nQuery "${q.k}" (${q.b}): ${matches.length} found`);
  matches.forEach(m => console.log(`   ID ${m.id} | ${m.brand} | ${m.name} | Current Image: ${m.image}`));
}
