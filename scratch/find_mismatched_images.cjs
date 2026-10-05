const fs = require('fs');

const pFiles = fs.readdirSync('public/products');
console.log('Total files in public/products:', pFiles.length);

// Let's check image filenames vs product names in src/data/products.ts
const code = fs.readFileSync('src/data/products.ts', 'utf8');

// Match all product objects
const pRegex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let m;
const problems = [];
while ((m = pRegex.exec(code)) !== null) {
  const [_, id, name, img] = m;
  const lowerName = name.toLowerCase();
  const lowerImg = img.toLowerCase();

  // If name has fralda, but img has creme/locao/serum/shampoo/nivea/cerave/etc
  if (lowerName.includes('fralda') && (lowerImg.includes('creme') || lowerImg.includes('locao') || lowerImg.includes('nivea') || lowerImg.includes('serum') || lowerImg.includes('gel') || lowerImg.includes('hidratante'))) {
    problems.push({ id, name, img, reason: 'FRALDA com imagem de creme/skincare' });
  }

  // If img has fralda, but name is NOT fralda
  if (lowerImg.includes('fralda') || lowerImg.includes('pampers') || lowerImg.includes('huggies')) {
    if (!lowerName.includes('fralda') && !lowerName.includes('pampers') && !lowerName.includes('huggies') && !lowerName.includes('lenco') && !lowerName.includes('lenço')) {
      problems.push({ id, name, img, reason: 'NÃO-FRALDA com imagem de fralda' });
    }
  }
}

console.log('Problems found in products.ts:', problems);
