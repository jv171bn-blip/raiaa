const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

const publicFiles = fs.readdirSync('public/products');
console.log(`Available files in public/products: ${publicFiles.length}`);

// Load current duplicates
const dupsReport = JSON.parse(fs.readFileSync('scratch/current_novos_duplicates.json', 'utf8'));

console.log(`There are ${dupsReport.length} duplicate groups in novosProdutosCatalogo.ts.`);

// Flatten all items involved in duplicate groups
const allDupItems = [];
dupsReport.forEach(g => {
  g.items.forEach((it, idx) => {
    allDupItems.push({
      groupImage: g.image,
      isFirstInGroup: idx === 0,
      ...it
    });
  });
});

console.log(`Total items currently sharing an image: ${allDupItems.length}`);

fs.writeFileSync('scratch/all_sharing_items.json', JSON.stringify(allDupItems, null, 2), 'utf8');
