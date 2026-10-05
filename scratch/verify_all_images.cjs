const fs = require('fs');

function checkFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  // Find objects with name, image, category
  const regex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
  let match;
  let count = 0;
  let missing = 0;
  let external = 0;
  const items = [];
  while ((match = regex.exec(content)) !== null) {
    count++;
    const [_, id, name, image] = match;
    items.push({ id, name, image });
    if (image.startsWith('http')) {
      external++;
    } else if (image.startsWith('/products/')) {
      const localPath = 'public' + image;
      if (!fs.existsSync(localPath)) {
        console.log(`[MISSING FILE] ${id} - ${name} => ${localPath}`);
        missing++;
      }
    }
  }
  console.log(`${filepath}: total ${count}, external: ${external}, missing local: ${missing}`);
  return items;
}

const p1 = checkFile('src/data/products.ts');
const p2 = checkFile('src/data/catalogExpanded.ts');
const p3 = checkFile('src/data/montaOffers.ts');
