const fs = require('fs');

const raw = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const lines = raw.split('\n');
const ids = [30045, 30312, 30104, 30353, 30220, 30371, 30241];

let currentObj = null;
let inItem = false;
let currentText = '';

for (const line of lines) {
  if (line.trim().startsWith('{')) {
    currentText = line + '\n';
  } else if (line.trim().startsWith('},') || line.trim() === '}') {
    currentText += line + '\n';
    for (const id of ids) {
      if (currentText.includes(`"id": ${id}`) || currentText.includes(`id: ${id}`)) {
        console.log(`=== FOUND ID ${id} ===`);
        const nameM = currentText.match(/"name":\s*"([^"]+)"/);
        const imgM = currentText.match(/"image":\s*"([^"]+)"/);
        const brandM = currentText.match(/"brand":\s*"([^"]+)"/);
        console.log('Name:', nameM ? nameM[1] : 'N/A');
        console.log('Brand:', brandM ? brandM[1] : 'N/A');
        console.log('Image:', imgM ? imgM[1] : 'N/A');
      }
    }
    currentText = '';
  } else {
    currentText += line + '\n';
  }
}
