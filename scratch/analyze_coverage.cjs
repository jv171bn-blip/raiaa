const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

// Read download_all_remaining.cjs to get the list of files downloaded
const dlContent = fs.readFileSync('scratch/download_all_remaining.cjs', 'utf8');
const fileMatches = [...dlContent.matchAll(/file:\s*'([^']+)'/g)].map(m => m[1]);
console.log('Downloaded files in scratch/download_all_remaining.cjs:', fileMatches.length);

// Also apply_batch1
const b1Content = fs.readFileSync('scratch/apply_batch1.cjs', 'utf8');
const b1Matches = [...b1Content.matchAll(/(\d+):\s*'([^']+)'/g)].map(m => ({ id: Number(m[1]), file: m[2] }));
console.log('Batch 1 mapped IDs:', b1Matches.length);

// Let's see what each item currently has
const imgMap = {};
for (const item of items) {
  if (!imgMap[item.image]) imgMap[item.image] = [];
  imgMap[item.image].push(item);
}

const dups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log('Number of shared image URLs currently:', dups.length);

let totalItemsSharing = 0;
dups.forEach(([img, list]) => {
  totalItemsSharing += list.length;
});
console.log('Total items involved in duplicate image URLs:', totalItemsSharing);

// Print all shared images and their items
dups.forEach(([img, list], idx) => {
  console.log(`\n[Group ${idx + 1}] Shared image: ${img}`);
  list.forEach(item => {
    console.log(`   ID: ${item.id} | Brand: ${item.brand} | Name: ${item.name}`);
  });
});
