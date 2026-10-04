const fs = require('fs');
const path = require('path');
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

const expMod = loadTs('src/data/catalogExpanded.ts');
const prods = expMod.todosProdutosExpandidos || [];

console.log('Total products in catalogExpanded.ts:', prods.length);

const imgCounts = {};
prods.forEach(p => {
  imgCounts[p.image] = (imgCounts[p.image] || 0) + 1;
});

const dupes = Object.entries(imgCounts).filter(([url, count]) => count > 2);
console.log('Images used multiple times in catalogExpanded:', dupes.length);
dupes.forEach(([url, count]) => {
  const samples = prods.filter(p => p.image === url).slice(0, 3).map(p => p.name);
  console.log(`[${count}x] ${url} -> ${samples.join(' | ')}`);
});
