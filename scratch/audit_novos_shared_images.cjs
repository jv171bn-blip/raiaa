const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf-8');
  const res = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const m = { exports: {} };
  new Function('exports', 'module', 'require', res.outputText)(m.exports, m, (mod) => {
    if (mod.includes('novosProdutosCatalogo')) return loadTs('src/data/novosProdutosCatalogo.ts');
    if (mod.includes('catalogExpanded')) return loadTs('src/data/catalogExpanded.ts');
    if (mod.includes('products')) return loadTs('src/data/products.ts');
    return {};
  });
  return m.exports;
}

const novosMod = loadTs('src/data/novosProdutosCatalogo.ts');
const prods = novosMod.novosProdutosCatalogo || [];

console.log('Total products in novosProdutosCatalogo:', prods.length);

const grouped = {};
prods.forEach(p => {
  const key = p.image;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(p);
});

console.log('\n--- IMAGES USED ON MULTIPLE PRODUCTS ---');
Object.entries(grouped)
  .filter(([img, list]) => list.length > 1)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([img, list]) => {
    console.log(`\n[${list.length}x] ${img}:`);
    list.forEach(p => console.log(`   - [ID ${p.id}] ${p.name}`));
  });
