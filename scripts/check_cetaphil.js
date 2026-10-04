import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function checkCetaphil() {
  const file = path.join(uploadDir, 'media_1790556021131.png');
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's sample vertical column x=135 (center of card) from y=0 to y=320
  for (let y = 0; y < height; y++) {
    const idx = (y * width + 135) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (y < 40 || (y > 190 && y < 240)) {
      console.log(`y=${y}: rgb(${r},${g},${b})`);
    }
  }

  // Also let's check left edge around y=100
  for (let x = 0; x < 40; x++) {
    const idx = (100 * width + x) * channels;
    console.log(`x=${x}, y=100: rgb(${data[idx]},${data[idx+1]},${data[idx+2]})`);
  }
}

checkCetaphil();
