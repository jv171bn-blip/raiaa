const fs = require('fs');
const path = require('path');
const https = require('https');

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

const remoteUrls = Array.from(allImgs).filter(u => u.startsWith('http'));
console.log(`Checking ${remoteUrls.length} remote URLs for 200 OK...`);

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 5000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', (err) => resolve({ url, status: 0, error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 408 }); });
    req.end();
  });
}

async function run() {
  const batchSize = 25;
  let broken = [];
  for (let i = 0; i < remoteUrls.length; i += batchSize) {
    const batch = remoteUrls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkUrl));
    results.forEach(r => {
      if (r.status !== 200) {
        console.log(`BROKEN [${r.status}]: ${r.url}`);
        broken.push(r);
      }
    });
  }

  console.log(`Audit complete: ${remoteUrls.length - broken.length} OK, ${broken.length} broken.`);
}

run();
