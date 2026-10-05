const fs = require('fs');

function checkFile(filepath) {
  if (!fs.existsSync(filepath)) return;
  const content = fs.readFileSync(filepath, 'utf8');
  // Match objects with name and image
  const regex = /name:\s*['"`]([^'"`]+)['"`][\s\S]*?image:\s*['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const name = m[1];
    const img = m[2];
    const lowerName = name.toLowerCase();
    const lowerImg = img.toLowerCase();
    if (lowerName.includes('fralda') || lowerName.includes('pants')) {
      if (
        lowerImg.includes('creme') ||
        lowerImg.includes('locao') ||
        lowerImg.includes('lotion') ||
        lowerImg.includes('cetaphil') ||
        lowerImg.includes('cerave') ||
        lowerImg.includes('b5') ||
        lowerImg.includes('shampoo') ||
        lowerImg.includes('protetor') ||
        lowerImg.includes('serum') ||
        lowerImg.includes('dorflex') ||
        lowerImg.includes('remedio')
      ) {
        console.log('MISMATCH in ' + filepath + ':');
        console.log('  Name: ' + name);
        console.log('  Image: ' + img);
      }
    }
  }
}

checkFile('src/data/products.ts');
checkFile('src/data/catalogExpanded.ts');
checkFile('src/data/novosProdutosCatalogo.ts');
console.log('Check finished.');
