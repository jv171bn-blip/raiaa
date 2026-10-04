const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf-8');
  const res = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const m = { exports: {} };
  new Function('exports', 'module', 'require', res.outputText)(m.exports, m, (mod) => {
    if (mod.includes('products')) return loadTs('src/data/products.ts');
    if (mod.includes('catalogExpanded')) return loadTs('src/data/catalogExpanded.ts');
    if (mod.includes('novosProdutosCatalogo')) return loadTs('src/data/novosProdutosCatalogo.ts');
    if (mod.includes('montaOffers')) return loadTs('src/data/montaOffers.ts');
    if (mod.includes('trendingProducts')) return loadTs('src/data/trendingProducts.ts');
    return {};
  });
  return m.exports;
}

const prodMod = loadTs('src/data/products.ts');
const trendMod = loadTs('src/data/trendingProducts.ts');

const allProducts = prodMod.deduplicateProducts([
  ...prodMod.mostBought,
  ...prodMod.blackDayProducts,
  ...prodMod.weekHighlights,
  ...prodMod.favoriteBrands,
  ...prodMod.fraldasProducts,
  ...prodMod.remediosProducts,
  ...prodMod.dermocosmeticosProducts,
  ...prodMod.vitaminasSuplementosProducts,
  ...prodMod.higieneBucalPersonalProducts,
  ...prodMod.asianBeauty,
  ...prodMod.quemComprouTambem,
  ...prodMod.similaresVocePode,
  ...prodMod.hairCareProducts,
]);

console.log('Total allProducts loaded:', allProducts.length);

let totalDiaperSeen = 0;
let seenM = 0;
let seenG = 0;
let seenViolations = [];

for (let cycle = 1; cycle <= 100; cycle++) {
  const data = trendMod.generateHomepageRotatingData(allProducts, prodMod.asianBeauty);

  const sections = [
    { name: 'maisComprados', items: data.maisComprados },
    { name: 'blackDoDia', items: data.blackDoDia },
    { name: 'destaquesSemana', items: data.destaquesSemana },
    { name: 'marcasFavoritas', items: data.marcasFavoritas },
    { name: 'belezaAsiatica', items: data.belezaAsiatica },
  ];

  for (const sec of sections) {
    for (const p of sec.items) {
      if (trendMod.isSizedDiaperProduct(p)) {
        totalDiaperSeen++;
        const tag = trendMod.getProductSizeTag(p);
        if (tag === 'M') seenM++;
        else if (tag === 'G') seenG++;
        else {
          seenViolations.push({ cycle, section: sec.name, product: p.name, sizeTag: tag });
        }
      }
    }
  }
}

console.log('\n--- HOMEPAGE 100-CYCLE SIMULATION REPORT ---');
console.log(`Total diaper appearances across 100 cycles: ${totalDiaperSeen}`);
console.log(`Tamanho M appearances: ${seenM}`);
console.log(`Tamanho G appearances: ${seenG}`);
console.log(`Violations (XG, XXG, P, or invalid): ${seenViolations.length}`);

if (seenViolations.length > 0) {
  console.log('FAILED! Found violations:', seenViolations);
  process.exit(1);
} else {
  console.log('SUCCESS! 100% of diapers on homepage are exclusively M or G. 0 XG, 0 XXG, 0 P.');
}
