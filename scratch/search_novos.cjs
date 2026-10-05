const fs = require('fs');
const content = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

const targets = ['gillette', 'foamy', 'doctar', 'tadalafila', 'cialis', 'always', 'dermacyd', 'carmed', 'wella', 'truss', 'rexona', 'centrum'];
for (const t of targets) {
  const regex = new RegExp('"name":\\s*"([^"]*' + t + '[^"]*)"[\\s\\S]*?"image":\\s*"([^"]*)"', 'gi');
  let m;
  const matches = [];
  while ((m = regex.exec(content)) !== null) {
    matches.push({ name: m[1], image: m[2] });
  }
  console.log(`${t} (${matches.length}):`);
  matches.slice(0, 3).forEach(x => console.log(`  "${x.name}" -> ${x.image}`));
}
