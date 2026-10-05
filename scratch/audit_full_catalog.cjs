const fs = require('fs');

// Load files
const novosRaw = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const expRaw = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
const prodRaw = fs.readFileSync('src/data/products.ts', 'utf8');
const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');

function parseProducts(content, fileName) {
  // Simple parser to extract product objects
  const prods = [];
  // Find each product object { ... }
  // We can match id, name, image, brand, category
  const matches = content.split(/\{\s*(?:id|"id"):\s*(\d+)/g);
  for (let i = 1; i < matches.length; i += 2) {
    const id = parseInt(matches[i], 10);
    const body = matches[i + 1];
    const nameM = body.match(/(?:"name"|name):\s*"([^"]+)"/);
    const imgM = body.match(/(?:"image"|image):\s*"([^"]+)"/);
    const brandM = body.match(/(?:"brand"|brand):\s*"([^"]+)"/);
    const catM = body.match(/(?:"category"|category):\s*"([^"]+)"/);

    if (nameM && imgM) {
      prods.push({
        id,
        name: nameM[1],
        image: imgM[1],
        brand: brandM ? brandM[1] : '',
        category: catM ? catM[1] : '',
        file: fileName
      });
    }
  }
  return prods;
}

const novos = parseProducts(novosRaw, 'novosProdutosCatalogo.ts');
const exp = parseProducts(expRaw, 'catalogExpanded.ts');
const prod = parseProducts(prodRaw, 'products.ts');
const ub = parseProducts(ubRaw, 'ultraBrasilProducts.ts');

console.log(`Parsed: novos=${novos.length}, exp=${exp.length}, prod=${prod.length}, ub=${ub.length}`);

// Check images
const publicFiles = new Set(fs.readdirSync('public/products'));

function analyzeList(list, name) {
  let raiaCount = 0;
  let missingLocal = 0;
  let validLocal = 0;
  let other = 0;

  list.forEach(p => {
    if (p.image.includes('raiadrogasil.io')) {
      raiaCount++;
    } else if (p.image.startsWith('/products/')) {
      const filename = p.image.replace('/products/', '');
      if (publicFiles.has(filename)) {
        validLocal++;
      } else {
        missingLocal++;
      }
    } else {
      other++;
    }
  });

  console.log(`=== ${name} (${list.length} total) ===`);
  console.log(`  raiadrogasil.io: ${raiaCount}`);
  console.log(`  valid local file: ${validLocal}`);
  console.log(`  missing local file: ${missingLocal}`);
  console.log(`  other: ${other}`);
}

analyzeList(novos, 'novosProdutosCatalogo');
analyzeList(exp, 'catalogExpanded');
analyzeList(prod, 'products.ts');
analyzeList(ub, 'ultraBrasilProducts');
