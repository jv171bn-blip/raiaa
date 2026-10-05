const fs = require('fs');

const matches = JSON.parse(fs.readFileSync('scratch/existing_matches_to_update.json', 'utf8'));
console.log(`Applying price updates for ${matches.length} existing products...`);

let pTs = fs.readFileSync('src/data/products.ts', 'utf8');
let expTs = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
let novTs = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

let totalUpdated = 0;

for (const m of matches) {
  const id = m.existingId;
  const newPrice = m.newPrice;
  const newOldPrice = m.newOldPrice;

  function updateInContent(content, filename) {
    // Look for product definition by id
    // e.g. "id": 1401, or id: 1401,
    // Match block around id:
    const regex1 = new RegExp(`({\\s*(?:[^{}]*?\\b)?id:\\s*${id}\\b[^{}]*?})`, 'g');
    const regex2 = new RegExp(`({\\s*(?:[^{}]*?\\b)?"id":\\s*${id}\\b[^{}]*?})`, 'g');

    let updated = false;

    content = content.replace(regex1, (block) => {
      // update price in block
      let newBlock = block.replace(/price:\s*[\d\.]+/, `price: ${newPrice}`);
      if (newOldPrice) {
        if (/oldPrice:\s*[\d\.]+/.test(newBlock)) {
          newBlock = newBlock.replace(/oldPrice:\s*[\d\.]+/, `oldPrice: ${newOldPrice}`);
        } else {
          newBlock = newBlock.replace(`price: ${newPrice}`, `oldPrice: ${newOldPrice},\n    price: ${newPrice}`);
        }
      }
      updated = true;
      return newBlock;
    });

    content = content.replace(regex2, (block) => {
      let newBlock = block.replace(/"price":\s*[\d\.]+/, `"price": ${newPrice}`);
      if (newOldPrice) {
        if (/"oldPrice":\s*[\d\.]+/.test(newBlock)) {
          newBlock = newBlock.replace(/"oldPrice":\s*[\d\.]+/, `"oldPrice": ${newOldPrice}`);
        } else {
          newBlock = newBlock.replace(`"price": ${newPrice}`, `"oldPrice": ${newOldPrice},\n    "price": ${newPrice}`);
        }
      }
      updated = true;
      return newBlock;
    });

    if (updated) {
      totalUpdated++;
    }
    return content;
  }

  pTs = updateInContent(pTs, 'products.ts');
  expTs = updateInContent(expTs, 'catalogExpanded.ts');
  novTs = updateInContent(novTs, 'novosProdutosCatalogo.ts');
}

fs.writeFileSync('src/data/products.ts', pTs, 'utf8');
fs.writeFileSync('src/data/catalogExpanded.ts', expTs, 'utf8');
fs.writeFileSync('src/data/novosProdutosCatalogo.ts', novTs, 'utf8');

console.log(`Total blocks updated: ${totalUpdated}`);
