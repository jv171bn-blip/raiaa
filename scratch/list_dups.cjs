const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

const imgMap = {};
for (const item of items) {
  if (!imgMap[item.image]) imgMap[item.image] = [];
  imgMap[item.image].push({ id: item.id, name: item.name });
}

const dups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log('Total duplicate image URLs in novosProdutosCatalogo:', dups.length);

dups.forEach(([img, list], idx) => {
  console.log(`\nGroup ${idx + 1}: ${img} (${list.length} items)`);
  list.forEach(x => console.log(`  ID ${x.id}: ${x.name}`));
});
