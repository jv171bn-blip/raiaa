const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

console.log(`Total items in novosProdutosCatalogo: ${items.length}`);

const imgGroups = {};
for (const it of items) {
  if (!imgGroups[it.image]) imgGroups[it.image] = [];
  imgGroups[it.image].push(it);
}

const dups = Object.entries(imgGroups).filter(([img, list]) => list.length > 1);
console.log(`Current duplicate image groups in catalog: ${dups.length}`);

const report = dups.map(([img, list]) => {
  return {
    image: img,
    count: list.length,
    items: list.map(i => ({ id: i.id, brand: i.brand, name: i.name }))
  };
});

fs.writeFileSync('scratch/current_novos_duplicates.json', JSON.stringify(report, null, 2), 'utf8');
console.log(`Saved report to scratch/current_novos_duplicates.json`);

// Also show summary
report.forEach((g, idx) => {
  console.log(`\nGroup ${idx + 1} (${g.count}x): ${g.image}`);
  g.items.forEach(it => console.log(`   ID ${it.id} | ${it.brand} | ${it.name}`));
});
