const fs = require('fs');
const content = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
const regex = /id:\s*(\d+)[\s\S]*?name:\s*["']([^"']*[Ff]ralda[^"']*)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(m[1], '|', m[2], '|', m[3]);
}
