const fs = require('fs');
const path = require('path');

// 1. Load the masterMapping from verify_complete_coverage.cjs
const vccContent = fs.readFileSync('scratch/verify_complete_coverage.cjs', 'utf8');
const match = vccContent.match(/const masterMapping = {([\s\S]*?)};/);
if (!match) throw new Error('Could not find masterMapping in verify_complete_coverage.cjs');

const masterMapping = {};
for (const line of match[1].split('\n')) {
  const m = line.match(/(\d+):\s*'([^']+)'/);
  if (m) {
    masterMapping[Number(m[1])] = m[2];
  }
}

console.log(`Loaded ${Object.keys(masterMapping).length} mappings for novosProdutosCatalogo.ts`);

// 2. Apply to src/data/novosProdutosCatalogo.ts
let novosContent = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
let novosUpdated = 0;

for (const [id, newImg] of Object.entries(masterMapping)) {
  // Try pattern: "image": "..." before "id": <id>
  const regex1 = new RegExp(`(\\{[^{}]*?"image":\\s*")[^"]+("[^{}]*?"id":\\s*${id}[^{}]*?\\})`, 'g');
  if (regex1.test(novosContent)) {
    novosContent = novosContent.replace(regex1, `$1${newImg}$2`);
    novosUpdated++;
  } else {
    // Try pattern: "id": <id> before "image": "..."
    const regex2 = new RegExp(`(\\{[^{}]*?"id":\\s*${id}[^{}]*?"image":\\s*")[^"]+("[^{}]*?\\})`, 'g');
    if (regex2.test(novosContent)) {
      novosContent = novosContent.replace(regex2, `$1${newImg}$2`);
      novosUpdated++;
    } else {
      console.warn(`[WARNING] Could not find product ID ${id} in novosProdutosCatalogo.ts`);
    }
  }
}

fs.writeFileSync('src/data/novosProdutosCatalogo.ts', novosContent, 'utf8');
console.log(`Applied ${novosUpdated} updates to src/data/novosProdutosCatalogo.ts!`);

// 3. Apply fixes to src/data/products.ts
let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');

// Fix ID 103: Rexona Men Sem Perfume Aerosol
productsContent = productsContent.replace(
  /(id:\s*103,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/rexona_men_sem_perfume_aerosol.jpg$2'
);

// Fix ID 1502: Rexona Men Sem Perfume Roll-on
productsContent = productsContent.replace(
  /(id:\s*1502,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/rexona_men_sem_perfume_rollon.jpg$2'
);

// Fix ID 1306: Bepantol Derma 20g
productsContent = productsContent.replace(
  /(id:\s*1306,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/bepantol_derma_20g.webp$2'
);

// Fix ID 1405: Di-Magnésio Malato 500mg bwell
productsContent = productsContent.replace(
  /(id:\s*1405,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/dimagnesio_malato_bwell.webp$2'
);

// Fix ID 2049: Mucilon Multicereais 600g
productsContent = productsContent.replace(
  /(id:\s*2049,[\s\S]*?name:\s*"Cereal Infantil Mucilon Multicereais[^"]*",[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/mucilon_multicereais_600g.webp$2'
);

fs.writeFileSync('src/data/products.ts', productsContent, 'utf8');
console.log('Applied fixes to src/data/products.ts!');

// 4. Apply fix to src/data/catalogExpanded.ts
let catContent = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

// Fix ID 2049: Mucilon Multicereais 600g
catContent = catContent.replace(
  /(id:\s*2049,[\s\S]*?name:\s*"Cereal Infantil Mucilon Multicereais[^"]*",[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/mucilon_multicereais_600g.webp$2'
);

fs.writeFileSync('src/data/catalogExpanded.ts', catContent, 'utf8');
console.log('Applied fix to src/data/catalogExpanded.ts!');
