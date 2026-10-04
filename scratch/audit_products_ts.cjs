const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf-8');
  const res = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const m = { exports: {} };
  new Function('exports', 'module', 'require', res.outputText)(m.exports, m, (mod) => {
    return {};
  });
  return m.exports;
}

const prodMod = loadTs('src/data/products.ts');

const lists = [
  { name: 'mostBought', list: prodMod.mostBought },
  { name: 'blackDayProducts', list: prodMod.blackDayProducts },
  { name: 'weekHighlights', list: prodMod.weekHighlights },
  { name: 'favoriteBrands', list: prodMod.favoriteBrands },
  { name: 'fraldasProducts', list: prodMod.fraldasProducts },
  { name: 'remediosProducts', list: prodMod.remediosProducts },
  { name: 'dermocosmeticosProducts', list: prodMod.dermocosmeticosProducts },
  { name: 'vitaminasSuplementosProducts', list: prodMod.vitaminasSuplementosProducts },
  { name: 'higieneBucalPersonalProducts', list: prodMod.higieneBucalPersonalProducts },
  { name: 'asianBeauty', list: prodMod.asianBeauty },
  { name: 'quemComprouTambem', list: prodMod.quemComprouTambem },
  { name: 'similaresVocePode', list: prodMod.similaresVocePode },
  { name: 'hairCareProducts', list: prodMod.hairCareProducts },
];

console.log('--- PRODUCTS.TS ANALYSIS ---');
lists.forEach(l => {
  console.log(`\nList: ${l.name} (${l.list ? l.list.length : 0} items)`);
  if (!l.list) return;
  l.list.forEach(p => {
    console.log(`[${p.id}] ${p.name} -> ${p.image}`);
  });
});
