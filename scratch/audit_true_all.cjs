const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

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

const novosMod = loadTs('src/data/novosProdutosCatalogo.ts');
const novos = novosMod.novosProdutosCatalogo || [];

const catMod = loadTs('src/data/catalogExpanded.ts');
const todosExpandidos = catMod.todosProdutosExpandidos || [];

const prodMod = loadTs('src/data/products.ts');
const productArrays = [
  { name: 'mostBought', list: prodMod.mostBought },
  { name: 'blackDayProducts', list: prodMod.blackDayProducts },
  { name: 'weekHighlights', list: prodMod.weekHighlights },
  { name: 'favoriteBrands', list: prodMod.favoriteBrands },
  { name: 'asianBeauty', list: prodMod.asianBeauty },
  { name: 'quemComprouTambem', list: prodMod.quemComprouTambem },
  { name: 'similaresVocePode', list: prodMod.similaresVocePode },
  { name: 'hairCareProducts', list: prodMod.hairCareProducts },
  { name: 'fraldasProducts', list: prodMod.fraldasProducts },
  { name: 'remediosProducts', list: prodMod.remediosProducts },
  { name: 'dermocosmeticosProducts', list: prodMod.dermocosmeticosProducts },
  { name: 'vitaminasSuplementosProducts', list: prodMod.vitaminasSuplementosProducts },
  { name: 'higieneBucalPersonalProducts', list: prodMod.higieneBucalPersonalProducts },
  { name: 'healthSpace', list: prodMod.healthSpace },
  { name: 'bebeMaisVendidos', list: prodMod.bebeMaisVendidos }
];

// Combine unique products across all products.ts arrays
const productsUniqueMap = new Map();
productArrays.forEach(arr => {
  if (Array.isArray(arr.list)) {
    arr.list.forEach(p => {
      if (p && p.id && !productsUniqueMap.has(p.id)) {
        productsUniqueMap.set(p.id, p);
      }
    });
  }
});
const productsList = Array.from(productsUniqueMap.values());

console.log(`Auditing Catalogs:`);
console.log(`- novosProdutosCatalogo: ${novos.length} items`);
console.log(`- todosProdutosExpandidos: ${todosExpandidos.length} items`);
console.log(`- products.ts (unique across all sections): ${productsList.length} items\n`);

function auditDataset(name, items) {
  console.log(`=== AUDIT: ${name} ===`);
  const imgMap = {};
  let missingFiles = 0;

  for (const it of items) {
    if (!it.image) {
      console.error(`[ERROR] Item without image: ID ${it.id} - ${it.name}`);
      continue;
    }
    // Check local file existence
    if (it.image.startsWith('/products/')) {
      const diskPath = path.join('public', it.image);
      if (!fs.existsSync(diskPath)) {
        console.error(`[MISSING DISK FILE] ID ${it.id}: ${it.image}`);
        missingFiles++;
      }
    }
    if (!imgMap[it.image]) imgMap[it.image] = [];
    imgMap[it.image].push(it);
  }

  let dupCount = 0;
  for (const [img, list] of Object.entries(imgMap)) {
    if (list.length > 1) {
      dupCount++;
      console.log(`[DUP GROUP] (${list.length}x) Image: ${img}`);
      list.forEach(i => console.log(`   ID ${i.id} | ${i.brand || ''} | ${i.name}`));
    }
  }

  if (dupCount === 0 && missingFiles === 0) {
    console.log(`>>> PERFECT! 0 duplicates and 0 missing files in ${name}! <<<\n`);
  } else {
    console.log(`>>> Issues in ${name}: ${dupCount} duplicate groups, ${missingFiles} missing files <<<\n`);
  }
}

auditDataset('novosProdutosCatalogo', novos);
auditDataset('catalogExpanded (todosProdutosExpandidos)', todosExpandidos);
auditDataset('products.ts (all product sections)', productsList);
