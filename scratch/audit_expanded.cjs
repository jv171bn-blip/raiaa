const fs = require('fs');

const content = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

// Parse items
const matches = [...content.matchAll(/\{\s*id:\s*(\d+)[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)];
console.log('Total items in catalogExpanded:', matches.length);

const imgCounts = {};
matches.forEach(m => {
  imgCounts[m[3]] = (imgCounts[m[3]] || 0) + 1;
});

const shared = Object.entries(imgCounts).filter(([img, c]) => c > 1);
console.log('Shared images in catalogExpanded:', shared.length);
shared.forEach(([img, c]) => {
  console.log(`\nImage ${img} (x${c}):`);
  matches.filter(m => m[3] === img).forEach(m => console.log(`  [id ${m[1]}] ${m[2]}`));
});

// Also check any items with "Fralda"
const diapers = matches.filter(m => m[2].toLowerCase().includes('fralda'));
console.log('\nDiapers in catalogExpanded:', diapers.length);
diapers.forEach(d => console.log(`  [id ${d[1]}] ${d[2]} -> ${d[3]}`));
