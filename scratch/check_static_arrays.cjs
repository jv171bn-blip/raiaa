const fs = require('fs');

function isSizedDiaperProduct(p) {
  if (!p || !p.name) return false;
  const name = (p.name || '').toUpperCase();
  const sub = (p.subcategory || '').toUpperCase();
  if (name.includes('LENÇO') || name.includes('LENCO') || name.includes('TOALH') || name.includes('POMADA') || name.includes('CREME')) return false;
  return (
    name.includes('FRALDA') ||
    sub.includes('FRALDA') ||
    name.includes('PANTS') ||
    name.includes('ROUPA ÍNTIMA') ||
    name.includes('ROUPA INTIMA') ||
    name.includes('TENA SLIP') ||
    name.includes('BIGFRAL')
  );
}

function getProductSizeTag(p) {
  if (!p || !p.name) return 'OUTRO';
  const text = (p.name + ' ' + (p.size || '')).toUpperCase();
  if (text.includes('XXG') || text.includes('XX-G') || text.includes('EXTRA EXTRA') || text.includes('TAM XXG')) return 'XXG';
  if (text.includes('XG') || text.includes('G/XG') || text.includes('EXTRA G') || text.includes('TAM XG')) return 'XG';
  if (text.includes('TAMANHO G') || text.includes('TAM G') || text.includes(' G ') || text.endsWith(' G')) return 'G';
  if (text.includes('TAMANHO M') || text.includes('TAM M') || text.includes(' M ') || text.endsWith(' M')) return 'M';
  if (text.includes('TAMANHO P') || text.includes('TAM P') || text.includes(' P ') || text.endsWith(' P') || text.includes(' RN')) return 'P';
  return 'OUTRO';
}

const content = fs.readFileSync('src/data/products.ts', 'utf-8');
const arrays = ['mostBought', 'blackDayProducts', 'weekHighlights', 'favoriteBrands', 'asianBeauty'];
arrays.forEach(arrName => {
  const reg = new RegExp('export const ' + arrName + ': Product\\[\\] = \\[([\\s\\S]*?)\\];', 'm');
  const match = content.match(reg);
  if (!match) return;
  const block = match[1];
  const objRegex = /\{[\s\S]*?\}/g;
  let o;
  while ((o = objRegex.exec(block)) !== null) {
    const ob = o[0];
    const nm = ob.match(/name:\s*"([^"]+)"/);
    const sz = ob.match(/size:\s*"([^"]+)"/);
    if (!nm) continue;
    const p = { name: nm[1], size: sz ? sz[1] : '' };
    if (isSizedDiaperProduct(p)) {
      const tag = getProductSizeTag(p);
      console.log(arrName, 'has diaper:', p.name, 'Size:', tag);
    }
  }
});
