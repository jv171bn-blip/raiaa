const fs = require('fs');

function isSizedDiaperProduct(p) {
  if (!p || !p.name) return false;
  const name = (p.name || '').toUpperCase();
  const sub = (p.subcategory || '').toUpperCase();
  const cat = (p.category || '').toUpperCase();

  // Wet wipes are NOT diapers
  if (name.includes('LENÇO') || name.includes('LENCO') || name.includes('TOALH') || name.includes('POMADA') || name.includes('CREME')) {
    return false;
  }

  // Must be diapers or pants / geriatric diapers
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
  const text = `${p.name} ${p.size || ''}`.toUpperCase();
  if (text.includes('XXG') || text.includes('XX-G') || text.includes('EXTRA EXTRA') || text.includes('TAM XXG')) {
    return 'XXG';
  }
  if (text.includes('XG') || text.includes('G/XG') || text.includes('EXTRA G') || text.includes('TAM XG')) {
    return 'XG';
  }
  if (
    text.includes('TAMANHO G') ||
    text.includes('TAM G') ||
    text.includes(' TAM. G') ||
    text.includes('TAM.G') ||
    /\bTAM[\s.:-]*G\b/.test(text) ||
    /\bTAMANHO[\s.:-]*G\b/.test(text) ||
    text.includes(' G ') ||
    text.endsWith(' G')
  ) {
    return 'G';
  }
  if (
    text.includes('TAMANHO M') ||
    text.includes('TAM M') ||
    text.includes(' TAM. M') ||
    text.includes('TAM.M') ||
    /\bTAM[\s.:-]*M\b/.test(text) ||
    /\bTAMANHO[\s.:-]*M\b/.test(text) ||
    text.includes(' M ') ||
    text.endsWith(' M')
  ) {
    return 'M';
  }
  if (
    text.includes('TAMANHO P') ||
    text.includes('TAM P') ||
    text.includes(' TAM. P') ||
    text.includes('TAM.P') ||
    /\bTAM[\s.:-]*P\b/.test(text) ||
    /\bTAMANHO[\s.:-]*P\b/.test(text) ||
    text.includes(' P ') ||
    text.endsWith(' P') ||
    text.includes(' RN')
  ) {
    return 'P';
  }
  return 'OUTRO';
}

function isAllowedOnHomepage(p) {
  if (!p) return false;
  if (!isSizedDiaperProduct(p)) return true; // Everything else (medicines, wipes, shampoos, etc) is allowed

  const size = getProductSizeTag(p);
  // User instruction:
  // "evite colocar produtos tamanho XG ou XXG na pagina inicial deixe amostra apenas M e G"
  return size === 'M' || size === 'G';
}

// Check on products.ts
const pText = fs.readFileSync('src/data/products.ts', 'utf-8');
const regex = /\{[\s\S]*?\n  \}/g;
let m;
let totalChecked = 0;
let allowed = 0;
let rejected = 0;

while ((m = regex.exec(pText)) !== null) {
  const block = m[0];
  const nameM = block.match(/name:\s*"([^"]+)"/);
  if (!nameM) continue;
  const sizeM = block.match(/size:\s*"([^"]+)"/);
  const p = {
    name: nameM[1],
    size: sizeM ? sizeM[1] : '',
    subcategory: block.includes('subcategory:') ? (block.match(/subcategory:\s*"([^"]+)"/) || [])[1] : '',
  };

  if (isSizedDiaperProduct(p)) {
    totalChecked++;
    const sizeTag = getProductSizeTag(p);
    const ok = isAllowedOnHomepage(p);
    if (ok) {
      allowed++;
      console.log(`[ALLOWED on Homepage: ${sizeTag}] ${p.name}`);
    } else {
      rejected++;
      console.log(`[BLOCKED on Homepage: ${sizeTag}] ${p.name}`);
    }
  }
}

console.log(`\nTotal diaper products: ${totalChecked}`);
console.log(`Allowed (M or G only): ${allowed}`);
console.log(`Blocked (XG, XXG, P): ${rejected}`);
