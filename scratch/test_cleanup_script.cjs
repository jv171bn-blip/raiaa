const fs = require('fs');

const idsToDelete = new Set([
  // Pampers Confort Sec mismatches (used M 70 image)
  50301, 50297, 50300, 50296,
  // Pampers Premium Care mismatches (used XXG 56 image)
  50304, 50305, 50306, 50307, 50309, 50310, 50311, 50313, 50314, 50315,
  // Huggies mismatches (used M 80 image)
  50273, 50288, 50289, 50290, 50291, 50292,
  // MamyPoko mismatches (used XG 52 image)
  50275, 50276, 50277, 50278, 50280, 50283, 50284, 50285,
  // Pom Pom mismatches (used M 86 image)
  50316, 50318, 50319, 50320
]);

const imageFixes = {
  50302: '/products/pampers_confort_sec_p.webp', // P 50 Fraldas
  50293: '/products/pampers_confort_sec_g.webp', // G 60 Fraldas
  50294: '/products/ultra_28742.png',            // G 98 Fraldas
  50298: '/products/ultra_28743.png'             // M 70 Fraldas
};

let ubContent = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');

// Parse items from ultraBrasilProducts.ts
// Format is:
// export const ultraBrasilProducts: Product[] = [
//   { ... },
//   { ... }
// ];

// We can read lines and reconstruct
const lines = ubContent.split('\n');
const newLines = [];
let currentBlock = [];
let inBlock = false;
let deletedCount = 0;
let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim().startsWith('{')) {
    inBlock = true;
    currentBlock = [line];
  } else if (inBlock) {
    currentBlock.push(line);
    if (line.trim().startsWith('}') || line.trim().startsWith('},')) {
      inBlock = false;
      const blockText = currentBlock.join('\n');
      const idMatch = blockText.match(/"id":\s*(\d+)/);
      const id = idMatch ? parseInt(idMatch[1]) : null;

      if (id && idsToDelete.has(id)) {
        deletedCount++;
        // Skip this block!
        continue;
      }

      if (id && imageFixes[id]) {
        fixedCount++;
        const fixedBlock = blockText.replace(/"image":\s*"[^"]*"/, `"image": "${imageFixes[id]}"`);
        newLines.push(fixedBlock);
      } else {
        newLines.push(blockText);
      }
    }
  } else {
    newLines.push(line);
  }
}

console.log(`Deleted ${deletedCount} mismatched products without real image`);
console.log(`Fixed ${fixedCount} product images to their real packaging photos`);

// Clean up trailing commas in array
let resultText = newLines.join('\n');
// Fix any `,\n];` at the end
resultText = resultText.replace(/,\s*(\n\s*\];)/g, '$1');

// Verify remaining diaper products in resultText
const remainingBlocks = resultText.match(/\{[^{}]*?"name":\s*"[^"]*Fralda[^"]*"[^{}]*?\}/gi) || [];
console.log(`\nRemaining verified diaper products: ${remainingBlocks.length}`);
remainingBlocks.forEach(b => {
  const id = b.match(/"id":\s*(\d+)/)?.[1];
  const name = b.match(/"name":\s*"([^"]+)"/)?.[1];
  const img = b.match(/"image":\s*"([^"]+)"/)?.[1];
  console.log(`  [id ${id}] ${name} -> ${img}`);
});
