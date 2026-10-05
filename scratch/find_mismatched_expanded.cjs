const fs = require('fs');

const code = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

const pRegex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let m;
const problems = [];
while ((m = pRegex.exec(code)) !== null) {
  const [_, id, name, img] = m;
  const lowerName = name.toLowerCase();
  const lowerImg = img.toLowerCase();

  if (lowerName.includes('fralda') && (lowerImg.includes('creme') || lowerImg.includes('locao') || lowerImg.includes('nivea') || lowerImg.includes('serum') || lowerImg.includes('gel') || lowerImg.includes('hidratante'))) {
    problems.push({ id, name, img, reason: 'FRALDA com imagem de creme/skincare' });
  }

  if (lowerImg.includes('fralda') || lowerImg.includes('pampers') || lowerImg.includes('huggies')) {
    if (!lowerName.includes('fralda') && !lowerName.includes('pampers') && !lowerName.includes('huggies') && !lowerName.includes('lenco') && !lowerName.includes('lenço')) {
      problems.push({ id, name, img, reason: 'NÃO-FRALDA com imagem de fralda' });
    }
  }
}

console.log('Problems in catalogExpanded.ts:', problems);
