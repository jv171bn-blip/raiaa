import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function checkPrincipia() {
  const f1 = path.join(uploadDir, 'media_1790556011651.png');
  const d1 = await sharp(f1).raw().toBuffer({ resolveWithObject: true });
  console.log('Principia text row:');
  for (let y = 295; y < 312; y++) {
    let darkCount = 0;
    for (let x = 30; x < 240; x++) {
      const idx = (y * d1.info.width + x) * d1.info.channels;
      if (d1.data[idx] < 200) darkCount++;
    }
    console.log(`y=${y}: dark pixels=${darkCount}`);
  }
}

checkPrincipia();
