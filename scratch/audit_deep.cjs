const fs = require('fs');
const path = require('path');

// Let's load all catalogs and check every single product
const publicFiles = new Set(fs.readdirSync('public/products'));

console.log('Public product images count:', publicFiles.size);

// Check ultraBrasilProducts
const ubRaw = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
const ubMatches = ubRaw.match(/\{[\s\S]*?"id":\s*(\d+)[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"[\s\S]*?\}/g) || [];

console.log('UB products matched:', ubMatches.length);
