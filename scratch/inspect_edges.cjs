const sharp = require('sharp');

async function inspectEdges(filePath) {
  const img = sharp(filePath);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  console.log(`\nInspecting ${filePath} (${width}x${height}):`);
  // Check column 0 to 30
  for (let x = 0; x <= 30; x += 5) {
    let nonBg = 0;
    for (let y = 0; y < height; y++) {
      const idx = (y * width + x) * info.channels;
      const diff = Math.abs(data[idx] - 243) + Math.abs(data[idx+1] - 241) + Math.abs(data[idx+2] - 239);
      if (diff > 35) nonBg++;
    }
    if (nonBg > 0) console.log(`  Col x=${x}: ${nonBg} pixels`);
  }
}

async function run() {
  await inspectEdges('public/health-space/card_01_saude_mental.webp');
  await inspectEdges('public/banners/mobile/hero_06_saude_mental.webp');
  await inspectEdges('public/banners/hero_06_saude_mental.webp');
}

run();
