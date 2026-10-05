const fs = require('fs');

const pTs = fs.readFileSync('src/data/products.ts', 'utf8');
const expTs = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

const targets = [
  'gillette',
  'foamy',
  'doctar',
  'tadalafila',
  'cialis',
  'always',
  'dermacyd',
  'wella',
  'carmed',
  'bepantol baby',
  'pampers confort sec',
  'pampers pants',
  'huggies natural care'
];

function findItems(content, filename) {
  const lines = content.split('\n');
  const found = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const mId = line.match(/id:\s*(\d+)/);
    const mName = line.match(/name:\s*['"`]([^'"`]+)['"`]/);
    const mImg = line.match(/image:\s*['"`]([^'"`]+)['"`]/);

    if (mId) {
      if (current && current.name) found.push(current);
      current = { id: parseInt(mId[1], 10), line: i + 1, file: filename };
    }
    if (current) {
      if (mName) current.name = mName[1];
      if (mImg) current.image = mImg[1];
    }
  }
  if (current && current.name) found.push(current);
  return found;
}

const allFound = [...findItems(pTs, 'products.ts'), ...findItems(expTs, 'catalogExpanded.ts')];

console.log('Total indexed products:', allFound.length);

for (const target of targets) {
  const matches = allFound.filter(p => (p.name || '').toLowerCase().includes(target));
  console.log(`\nTarget "${target}" (${matches.length} matches):`);
  matches.slice(0, 3).forEach(m => console.log(`  [${m.id}] "${m.name}" -> ${m.image} (${m.file})`));
}
