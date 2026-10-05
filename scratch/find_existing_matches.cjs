const fs = require('fs');

const matched = JSON.parse(fs.readFileSync('scratch/matched_user_products.json', 'utf8'));

// Load existing catalogs
const pTs = fs.readFileSync('src/data/products.ts', 'utf8');
const expTs = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
const novTs = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

function extractCatalogItems(content, filename) {
  const items = [];
  const regex = /{\s*"id":\s*(\d+)[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"price":\s*([\d\.]+)[\s\S]*?}/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    items.push({ id: parseInt(m[1]), name: m[2], price: parseFloat(m[3]), file: filename });
  }
  // Also match objects without quotes around keys
  const regex2 = /id:\s*(\d+),[\s\S]*?name:\s*['"`]([^'"`]+)['"`],[\s\S]*?price:\s*([\d\.]+)/g;
  while ((m = regex2.exec(content)) !== null) {
    items.push({ id: parseInt(m[1]), name: m[2], price: parseFloat(m[3]), file: filename });
  }
  return items;
}

const existing = [
  ...extractCatalogItems(pTs, 'products.ts'),
  ...extractCatalogItems(expTs, 'catalogExpanded.ts'),
  ...extractCatalogItems(novTs, 'novosProdutosCatalogo.ts'),
];

console.log('Total existing items indexed:', existing.length);

// Compare names
function normalizeName(name) {
  return (name || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&#8211;|&amp;|–|-|\+/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const existingMatches = [];
for (const m of matched) {
  const sp = m.storeProduct;
  const sPrice = parseFloat(sp.prices.price) / 100;
  const sRegPrice = parseFloat(sp.prices.regular_price) / 100;
  const normS = normalizeName(sp.name);

  // Search existing
  for (const ex of existing) {
    const normEx = normalizeName(ex.name);
    // Check if normS and normEx match closely
    if (normS === normEx || (normS.length > 15 && normEx.includes(normS)) || (normEx.length > 15 && normS.includes(normEx))) {
      existingMatches.push({
        existingId: ex.id,
        existingName: ex.name,
        existingPrice: ex.price,
        existingFile: ex.file,
        newPrice: sPrice,
        newRegularPrice: sRegPrice > sPrice ? sRegPrice : undefined,
        storeName: sp.name,
      });
      break;
    }
  }
}

console.log(`Found ${existingMatches.length} products that already exist in our site catalog!`);
existingMatches.slice(0, 10).forEach(m => {
  console.log(`  [${m.existingId}] "${m.existingName}" in ${m.existingFile}: R$ ${m.existingPrice} -> R$ ${m.newPrice}`);
});

fs.writeFileSync('scratch/existing_matches_to_update.json', JSON.stringify(existingMatches, null, 2));
