const fs = require('fs');
const path = require('path');
const https = require('https');

// Check all local files referenced in novosProdutosCatalogo and products.ts
const novos = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf-8');
const products = fs.readFileSync('src/data/products.ts', 'utf-8');

const regexImg = /"image":\s*"([^"]+)"/g;
const allImgs = new Set();
let m;
while ((m = regexImg.exec(novos)) !== null) {
  allImgs.add(m[1]);
}
const regexImg2 = /image:\s*"([^"]+)"/g;
while ((m = regexImg2.exec(products)) !== null) {
  allImgs.add(m[1]);
}

console.log('Total unique images in catalog:', allImgs.size);

let missingLocal = 0;
let localCount = 0;
let remoteUrls = [];

for (const img of allImgs) {
  if (img.startsWith('/')) {
    localCount++;
    const localPath = path.join('public', img.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      console.log('MISSING LOCAL FILE:', img, '->', localPath);
      missingLocal++;
    }
  } else if (img.startsWith('http')) {
    remoteUrls.push(img);
  }
}

console.log(`Local images: ${localCount} (missing: ${missingLocal})`);
console.log(`Remote images to verify: ${remoteUrls.length}`);
