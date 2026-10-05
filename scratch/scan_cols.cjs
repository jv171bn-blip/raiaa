const sharp = require('sharp');

async function scanImage(imagePath) {
  const img = sharp(imagePath);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const bgR = data[0], bgG = data[1], bgB = data[2];

  // For every 20 pixels horizontally, calculate non-bg pixel count
  console.log(`Scanning ${imagePath} (${width}x${height})...`);
  const step = 40;
  const cols = [];
  for (let x = 0; x < width; x += step) {
    let count = 0;
    for (let y = 0; y < height; y += 4) {
      for (let dx = 0; dx < step && x + dx < width; dx += 4) {
        const idx = (y * width + (x + dx)) * info.channels;
        const diff = Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB);
        if (diff > 35) count++;
      }
    }
    if (count > 20) {
      cols.push({ x, count });
    }
  }
  console.log('Columns with content:', cols);
}

async function run() {
  await scanImage('public/banners/hero_06_saude_mental.webp');
}

run();
