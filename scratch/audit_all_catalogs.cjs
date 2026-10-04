const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function loadModule(filePath) {
  let actualPath = filePath;
  if (!fs.existsSync(actualPath)) {
    if (fs.existsSync(actualPath + '.ts')) actualPath = actualPath + '.ts';
  }
  const tsCode = fs.readFileSync(actualPath, 'utf8');
  const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(m, m.exports, (mod) => {
    if (mod.startsWith('./') || mod.startsWith('../')) {
      const dir = path.dirname(actualPath);
      return loadModule(path.join(dir, mod));
    }
    return require(mod);
  });
  return m.exports;
}

const novosMod = loadModule(path.resolve('src/data/novosProdutosCatalogo.ts'));
const novos = novosMod.novosProdutosCatalogo || [];

const productsMod = loadModule(path.resolve('src/data/products.ts'));
const products = productsMod.products || [];

const catalogMod = loadModule(path.resolve('src/data/catalogExpanded.ts'));
const catalog = catalogMod.catalogExpanded || [];

console.log(`Loaded items: novos=${novos.length}, products=${products.length}, catalogExpanded=${catalog.length}`);

// Let's check duplicates within each dataset
function checkDuplicates(name, items) {
  console.log(`\n=== Duplicates in ${name} ===`);
  const imgMap = {};
  for (const item of items) {
    if (!item.image) {
      console.log(`Item missing image: ID ${item.id} - ${item.name}`);
      continue;
    }
    if (!imgMap[item.image]) imgMap[item.image] = [];
    imgMap[item.image].push(item);
  }

  let dupCount = 0;
  for (const [img, list] of Object.entries(imgMap)) {
    if (list.length > 1) {
      dupCount++;
      console.log(`\n[${list.length}x] Image: ${img}`);
      for (const item of list) {
        console.log(`   ID ${item.id} | ${item.brand || ''} | ${item.name}`);
      }
    }
  }
  if (dupCount === 0) {
    console.log(`No duplicate images found in ${name}!`);
  }
}

checkDuplicates('novosProdutosCatalogo', novos);
checkDuplicates('products', products);
checkDuplicates('catalogExpanded', catalog);
