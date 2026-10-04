const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

// Image duplicates map
const imgMap = {};
for (const item of items) {
  if (!imgMap[item.image]) imgMap[item.image] = [];
  imgMap[item.image].push(item);
}
const dups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);

// All downloaded files in public/products
const publicFiles = new Set(fs.readdirSync('public/products'));

// Check which products still have duplicates
const duplicatedItems = [];
dups.forEach(([img, list]) => {
  list.forEach(i => duplicatedItems.push(i));
});

console.log('Total items in duplicate groups:', duplicatedItems.length);

// Let's see which files in public/products match these items
fs.writeFileSync('scratch/all_dup_items.json', JSON.stringify(duplicatedItems, null, 2));
