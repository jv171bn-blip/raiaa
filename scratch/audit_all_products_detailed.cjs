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

const prodMod = loadTs('src/data/products.ts');
const novosMod = loadTs('src/data/novosProdutosCatalogo.ts');
const expMod = loadTs('src/data/catalogExpanded.ts');

const allSources = [
  { name: 'products.ts (allProducts)', list: prodMod.deduplicateProducts([
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
  ]) },
  { name: 'novosProdutosCatalogo.ts', list: novosMod.novosProdutosCatalogo || [] },
  { name: 'catalogExpanded.ts', list: expMod.todosProdutosExpandidos || [] },
];

console.log('--- PRODUCT COUNTS ---');
allSources.forEach(s => console.log(`${s.name}: ${s.list.length} products`));

// Let's inspect all products for potential mismatches
const mismatches = [];

allSources.forEach(s => {
  s.list.forEach(p => {
    const pName = (p.name || '').toLowerCase();
    const pBrand = (p.brand || '').toLowerCase();
    const pImg = (p.image || '').toLowerCase();

    // Check specific known discrepancies
    let reason = null;

    // 1. Skinceuticals image on non-skinceuticals
    if (pImg.includes('skinceuticals') && !pName.includes('skinceuticals') && !pBrand.includes('skinceuticals')) {
      reason = `SkinCeuticals image on non-SkinCeuticals product (${p.name})`;
    }

    // 2. Principia image on non-principia
    if (pImg.includes('principia') && !pName.includes('principia') && !pBrand.includes('principia')) {
      reason = `Principia image on non-Principia product (${p.name})`;
    }

    // 3. Pantene image on non-pantene
    if (pImg.includes('pantene') && !pName.includes('pantene') && !pBrand.includes('pantene')) {
      reason = `Pantene image on non-Pantene product (${p.name})`;
    }

    // 4. Elseve image on non-elseve
    if (pImg.includes('elseve') && !pName.includes('elseve') && !pBrand.includes('elseve') && !pBrand.includes("l'oréal") && !pBrand.includes('loreal')) {
      reason = `Elseve image on non-Elseve product (${p.name})`;
    }

    // 5. Cetaphil image on non-cetaphil
    if (pImg.includes('cetaphil') && !pName.includes('cetaphil') && !pBrand.includes('cetaphil')) {
      reason = `Cetaphil image on non-Cetaphil product (${p.name})`;
    }

    // 6. Needs image on non-needs
    if (pImg.includes('needs') && !pName.includes('needs') && !pBrand.includes('needs')) {
      reason = `Needs image on non-Needs product (${p.name})`;
    }

    // 7. Biore image on non-biore
    if (pImg.includes('biore') && !pName.includes('bioré') && !pName.includes('biore') && !pBrand.includes('bioré') && !pBrand.includes('biore')) {
      reason = `Bioré image on non-Bioré product (${p.name})`;
    }

    // 8. Beauty of Joseon image on non-Beauty of Joseon
    if (pImg.includes('joseon') && !pName.includes('joseon')) {
      reason = `Beauty of Joseon image on non-Joseon product (${p.name})`;
    }

    // 9. Cosrx image on non-cosrx
    if (pImg.includes('cosrx') && !pName.includes('cosrx')) {
      reason = `COSRX image on non-COSRX product (${p.name})`;
    }

    // 10. Hada Labo image on non-Hada Labo
    if (pImg.includes('hada_labo') && !pName.includes('hada labo')) {
      reason = `Hada Labo image on non-Hada Labo product (${p.name})`;
    }

    // 11. Puravida image on non-Puravida
    if (pImg.includes('puravida') && !pName.includes('puravida') && !pBrand.includes('puravida')) {
      reason = `Puravida image on non-Puravida product (${p.name})`;
    }

    // 12. Tadalafila / Cialis image on non-erectile meds
    if ((pImg.includes('tadalafila') || pImg.includes('cialis')) && !pName.includes('tadalafila') && !pName.includes('cialis')) {
      reason = `Tadalafila/Cialis image on non-Tadalafila product (${p.name})`;
    }

    // 13. Benegrip image on non-benegrip
    if (pImg.includes('benegrip') && !pName.includes('benegrip')) {
      reason = `Benegrip image on non-Benegrip product (${p.name})`;
    }

    // 14. Coristina image on non-coristina
    if (pImg.includes('coristina') && !pName.includes('coristina')) {
      reason = `Coristina image on non-Coristina product (${p.name})`;
    }

    // 15. Omeprazol image on non-omeprazol
    if (pImg.includes('omeprazol') && !pName.includes('omeprazol')) {
      reason = `Omeprazol image on non-Omeprazol product (${p.name})`;
    }

    // 16. Allegra image on non-allegra
    if (pImg.includes('allegra') && !pName.includes('allegra')) {
      reason = `Allegra image on non-Allegra product (${p.name})`;
    }

    // 17. Escova / Pente Ricca image on non-brush
    if ((pImg.includes('ricca') || pImg.includes('escova_ricca') || pImg.includes('pente_ricca')) && !pName.includes('escova') && !pName.includes('pente') && !pName.includes('ricca')) {
      reason = `Hairbrush image on non-hairbrush product (${p.name})`;
    }

    // 18. Band-aid / curativo image on non-curativo
    if (pImg.includes('curativo_bandaid') && !pName.includes('curativo') && !pName.includes('band-aid') && !pName.includes('bandaid') && !pName.includes('adesivo')) {
      reason = `Band-Aid image on non-Band-Aid product (${p.name})`;
    }

    // 19. Condicionador photo on Shampoo
    if (pImg.includes('condicionador_pantene') && pName.includes('shampoo')) {
      reason = `Conditioner image on Shampoo product (${p.name})`;
    }

    // 20. Máscara Elseve on non-mask / non-tratamento
    if (pImg.includes('mascara_elseve') && pName.includes('shampoo')) {
      reason = `Hair mask pot image on Shampoo product (${p.name})`;
    }

    if (reason) {
      mismatches.push({
        source: s.name,
        id: p.id,
        name: p.name,
        brand: p.brand,
        image: p.image,
        reason,
      });
    }
  });
});

console.log(`\nFound ${mismatches.length} obvious image mismatches!`);
mismatches.slice(0, 30).forEach(m => {
  console.log(`[${m.source} ID ${m.id}] ${m.reason} -> current img: ${m.image}`);
});

fs.writeFileSync('scratch/mismatches.json', JSON.stringify(mismatches, null, 2));
console.log('Saved all mismatches to scratch/mismatches.json');
