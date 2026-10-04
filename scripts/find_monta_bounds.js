import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';
const outputDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/monta';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Let's inspect raw pixel rows and columns to find the exact boundaries of the card in each image.
async function findCardBoundaries(imagePath) {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log('Finding boundaries for', path.basename(imagePath), width, height);

  // Find non-white/grey borders
  // Background outside card is white (255, 255, 255)
  // Card background is approx (240-246, 242-248, 244-250)
  
  // Let's sample pixels across horizontal lines
  for (let y = 0; y < height; y += 20) {
    let rowColors = [];
    for (let x = 0; x < width; x += 30) {
      const idx = (y * width + x) * channels;
      rowColors.push(`[${x},${y}:${data[idx]},${data[idx+1]},${data[idx+2]}]`);
    }
    // console.log(rowColors.slice(0, 5).join(' '));
  }
}

async function run() {
  await findCardBoundaries(path.join(uploadDir, 'media_1790556011651.png'));
  await findCardBoundaries(path.join(uploadDir, 'media_1790556021131.png'));
  await findCardBoundaries(path.join(uploadDir, 'media_1790556030719.png'));
}

run();
