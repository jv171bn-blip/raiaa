const fs = require('fs');

const content = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

// The file has TypeScript array definitions.
// Let's filter each array to only retain items where image is NOT raiadrogasil.io.
// In catalogExpanded, each item is an object: { id: ..., name: ..., image: ... }

// Let's split by object boundaries
const arrayNames = [
  'medicamentosExpandidos',
  'dermocosmeticosExpandidos',
  'bebeInfantilExpandidos',
  'vitaminasSuplementosExpandidos',
  'higieneBucalCabelosExpandidos',
  'saudeEquipamentosExpandidos',
];

// Let's write a parser that parses each item in each array
function cleanArrayBlock(blockText) {
  // Split by product object
  // Objects start with `  {\n    id:`
  const items = blockText.split(/(?=\n  \{\s*\n\s*id:)/g);
  const cleanItems = items.filter(item => {
    if (!item.includes('id:')) return true; // header or code before first item
    if (item.includes('raiadrogasil.io')) return false; // REMOVE!
    return true;
  });
  return cleanItems.join('');
}

// Let's test on each array
let newContent = content;

// Replace ...novosProdutosCatalogo in todosProdutosExpandidos
newContent = newContent.replace(/\s*\.\.\.novosProdutosCatalogo,?\n?/, '\n');

// Also remove import { novosProdutosCatalogo }
newContent = newContent.replace(/import\s*\{\s*novosProdutosCatalogo\s*\}\s*from\s*['"]\.\/novosProdutosCatalogo['"];?\n?/, '');

// Now filter each of the 6 arrays
for (const arrName of arrayNames) {
  const startRegex = new RegExp(`export const ${arrName}: Product\\[\\] = \\[`);
  const match = newContent.match(startRegex);
  if (!match) continue;

  const startIdx = match.index;
  // find the closing ];
  const endIdx = newContent.indexOf('];', startIdx);
  if (endIdx === -1) continue;

  const block = newContent.slice(startIdx, endIdx);
  const cleanedBlock = cleanArrayBlock(block);
  newContent = newContent.slice(0, startIdx) + cleanedBlock + newContent.slice(endIdx);
}

fs.writeFileSync('src/data/catalogExpanded.ts', newContent, 'utf8');
console.log('Successfully cleaned catalogExpanded.ts');
