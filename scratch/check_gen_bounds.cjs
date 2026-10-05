const sharp = require('sharp');

async function checkGeneratedCard(filePath, bgExpected) {
  const img = sharp(filePath);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  const bgR = bgExpected.r, bgG = bgExpected.g, bgB = bgExpected.b;
  let minX = width, maxX = 0, minY = height, maxY = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const diff = Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB);
      if (diff > 35) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`${filePath} (${width}x${height}):`);
  console.log(`  Content bounds: x=[${minX} to ${maxX}] (padding left=${minX}, right=${width - 1 - maxX}), y=[${minY} to ${maxY}]`);
}

async function run() {
  await checkGeneratedCard('public/health-space/card_01_saude_mental.webp', { r: 243, g: 241, b: 239 });
  await checkGeneratedCard('public/health-space/card_02_outubro_rosa.webp', { r: 243, g: 241, b: 239 });
  await checkGeneratedCard('public/health-space/card_03_respirar_melhor.webp', { r: 242, g: 241, b: 239 });
  await checkGeneratedCard('public/health-space/card_04_nutriweek.webp', { r: 242, g: 241, b: 239 });
  await checkGeneratedCard('public/health-space/card_05_raia_conceito.webp', { r: 10, g: 60, b: 62 });
}

run();
