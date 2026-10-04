const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf-8');
  const res = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const m = { exports: {} };
  new Function('exports', 'module', 'require', res.outputText)(m.exports, m, (mod) => {});
  return m.exports;
}

const prodMod = loadTs('src/data/products.ts');
['mostBought', 'blackDayProducts', 'weekHighlights', 'favoriteBrands'].forEach(name => {
  console.log('=== ' + name + ' ===');
  (prodMod[name] || []).forEach(p => {
    console.log('[' + p.id + '] ' + p.name + ' -> ' + p.image);
  });
});
