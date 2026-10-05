const sharp = require('sharp');

async function verifyCard(file, bg) {
  const img = sharp(file);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const diff = Math.abs(data[idx] - bg.r) + Math.abs(data[idx+1] - bg.g) + Math.abs(data[idx+2] - bg.b);
      if (diff > 35) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`${file}:`);
  console.log(`  Size: ${width}x${height}`);
  console.log(`  Content bounds: x=[${minX}..${maxX}], y=[${minY}..${maxY}]`);
  console.log(`  Safety margins: Left=${minX}px, Right=${width - 1 - maxX}px, Top=${minY}px, Bottom=${height - 1 - maxY}px\n`);
}

async function run() {
  await verifyCard('public/banners/cards/card_01_saude_mental.webp', { r: 243, g: 241, b: 239 });
  await verifyCard('public/banners/cards/card_02_outubro_rosa.webp', { r: 243, g: 241, b: 239 });
  await verifyCard('public/banners/cards/card_03_respirar_melhor.webp', { r: 242, g: 241, b: 239 });
  await verifyCard('public/banners/cards/card_04_nutriweek.webp', { r: 242, g: 241, b: 239 });
  await verifyCard('public/banners/cards/card_05_raia_conceito.webp', { r: 12, g: 65, b: 68 });
}

run();
