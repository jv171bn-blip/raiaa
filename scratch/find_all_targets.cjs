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
const items = novosMod.novosProdutosCatalogo;

console.log('Total items in novosProdutosCatalogo:', items.length);

// Count image occurrences
const imageMap = {};
for (const item of items) {
  imageMap[item.image] = (imageMap[item.image] || 0) + 1;
}

// Find images shared by more than 1 item (indicates placeholder or generic image)
console.log('\n--- Images shared across multiple products in novosProdutosCatalogo ---');
const duplicates = [];
for (const [img, count] of Object.entries(imageMap)) {
  if (count > 1) {
    duplicates.push({ img, count });
    console.log(`${count} items share: ${img}`);
  }
}

// List all items using shared images
console.log('\n--- Items using shared images ---');
for (const d of duplicates) {
  console.log(`\nImage: ${d.img} (${d.count} items):`);
  const matching = items.filter(x => x.image === d.img);
  for (const m of matching) {
    console.log(`  ID ${m.id} | ${m.brand} | ${m.name}`);
  }
}
