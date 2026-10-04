const fs = require('fs');
const esbuild = require('esbuild');
const path = require('path');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs', target: 'node18' });
  const m = { exports: {} };
  const customRequire = (mod) => {
    if (mod.startsWith('.')) {
      const target = path.resolve(path.dirname(file), mod);
      const full = fs.existsSync(target) ? target : target + '.ts';
      return loadTs(full);
    }
    return require(mod);
  };
  new Function('module', 'exports', 'require', res.code)(m, m.exports, customRequire);
  return m.exports;
}

const prodMod = loadTs('src/data/products.ts');
const catMod = loadTs('src/data/catalogExpanded.ts');
const trendMod = loadTs('src/data/trendingProducts.ts');

const all = prodMod.deduplicateProducts([
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
  ...catMod.todosProdutosExpandidos
]);

console.log('Total allProducts:', all.length);

const allowed = all.filter(trendMod.isAllowedOnHomepage);
console.log('Allowed on homepage (by size M/G rule):', allowed.length);

// Check if any product has an image that doesn't exist on disk
let missingDisk = 0;
allowed.forEach(p => {
  if (p.image && p.image.startsWith('/products/')) {
    const full = path.join('public', p.image);
    if (!fs.existsSync(full)) {
      console.log('[MISSING IMAGE FILE]', p.id, p.name, p.image);
      missingDisk++;
    }
  }
});
console.log('Missing disk images in allowed pool:', missingDisk);

// Check semantic consistency between name and image filename
const suspicious = [];
allowed.forEach(p => {
  const img = p.image.toLowerCase();
  const name = p.name.toLowerCase();

  // If local file, check keywords
  if (img.startsWith('/products/')) {
    const fn = path.basename(img, path.extname(img));
    // Check obvious mismatches
    if (fn.includes('termometro') && !name.includes('termômetro') && !name.includes('termometro')) {
      suspicious.push({ p, reason: 'Thermometer image on non-thermometer' });
    }
    if (fn.includes('bepantol_baby') && !name.includes('baby') && !name.includes('bepantol baby')) {
      suspicious.push({ p, reason: 'Bepantol Baby image on non-baby' });
    }
    if (fn.includes('mucilon_milho') && !name.includes('milho')) {
      suspicious.push({ p, reason: 'Mucilon milho on non-milho' });
    }
    if (fn.includes('curativo_bandaid') && !name.includes('band-aid') && !name.includes('curativo')) {
      suspicious.push({ p, reason: 'Band-aid image on non-curativo' });
    }
  }
});

console.log('Suspicious items in allowed pool:', suspicious.length);
suspicious.forEach(s => console.log('  -', s.p.id, s.p.name, '=>', s.p.image, `(${s.reason})`));
