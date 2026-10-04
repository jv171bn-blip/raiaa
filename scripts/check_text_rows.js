import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function checkDetails() {
  // Cetaphil: media_1790556021131.png
  const f2 = path.join(uploadDir, 'media_1790556021131.png');
  const d2 = await sharp(f2).raw().toBuffer({ resolveWithObject: true });
  console.log('Cetaphil text row:');
  for (let y = 205; y < 225; y++) {
    let darkCount = 0;
    for (let x = 30; x < 240; x++) {
      const idx = (y * d2.info.width + x) * d2.info.channels;
      if (d2.data[idx] < 200) darkCount++;
    }
    console.log(`y=${y}: dark pixels=${darkCount}`);
  }

  // Puravida: media_1790556030719.png
  const f3 = path.join(uploadDir, 'media_1790556030719.png');
  const d3 = await sharp(f3).raw().toBuffer({ resolveWithObject: true });
  console.log('Puravida text row:');
  for (let y = 300; y < 322; y++) {
    let darkCount = 0;
    for (let x = 130; x < 350; x++) {
      const idx = (y * d3.info.width + x) * d3.info.channels;
      if (d3.data[idx] < 200) darkCount++;
    }
    console.log(`y=${y}: dark pixels=${darkCount}`);
  }
}

checkDetails();
