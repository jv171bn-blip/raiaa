const fs = require('fs');

const diaperFixes = {
  // Pampers XXG
  1250310: '/products/pampers_confort_sec_xxg.jpg',
  20405: '/products/pampers_pants_xxg.jpg',

  // Babysec
  21108: '/products/babysec_ultrasec_m.jpg',
  1109: '/products/babysec_ultrasec_g.jpg',
  21112: '/products/babysec_ultrasec_xg.jpg',
  21113: '/products/babysec_ultrasec_xxg.jpg',

  // Pom Pom
  21115: '/products/pompom_protek_m.jpg',
  1110: '/products/pompom_protek_g.jpg',
  21116: '/products/pompom_protek_xg.jpg',
  21117: '/products/pompom_protek_xxg.jpg',

  // MamyPoko
  21118: '/products/mamypoko_calca_p.jpg',
  21119: '/products/mamypoko_calca_m.jpg',
  1111: '/products/mamypoko_calca_g.jpg',
  21120: '/products/mamypoko_calca_xg.jpg',
  21121: '/products/mamypoko_calca_xxg.jpg'
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

for (const [id, newImg] of Object.entries(diaperFixes)) {
  const r = new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*")[^"]+(")`, 'g');
  content = content.replace(r, `$1${newImg}$2`);
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Applied diaper size fixes to src/data/products.ts!');
