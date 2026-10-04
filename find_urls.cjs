const fs = require('fs');
const content = fs.readFileSync('C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.system_generated/steps/3269/content.md', 'utf8');

const regex = /https:\/\/img\.drogasil\.com\.br\/home\/vitrine\/[^"'<> ]+/gi;
let m;
const set = new Set();
while ((m = regex.exec(content)) !== null) {
  set.add(m[0]);
}

console.log('Total vitrine URLs:', set.size);
Array.from(set).forEach(u => console.log(u));
