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

const pool = trendMod.getTrendingPool(all);

console.log('Trending pool size:', pool.length);

// Let's inspect images in trending pool
const remoteImgs = pool.filter(p => p.image.startsWith('http'));
const localImgs = pool.filter(p => p.image.startsWith('/products/'));

console.log(`Local images: ${localImgs.length}, Remote images: ${remoteImgs.length}`);

// Check if any remote images return 404 or are invalid
fs.writeFileSync('scratch/trending_pool_items.json', JSON.stringify(pool.map(p => ({
  id: p.id,
  brand: p.brand,
  name: p.name,
  image: p.image
})), null, 2));

console.log('Saved scratch/trending_pool_items.json');
