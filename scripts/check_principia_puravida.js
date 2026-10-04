import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function checkPrincipiaAndPuravida() {
  // Principia
  const p1 = path.join(uploadDir, 'media_1790556011651.png');
  const d1 = await sharp(p1).raw().toBuffer({ resolveWithObject: true });
  // Find top of card at x=135
  for (let y = 80; y < 130; y++) {
    const idx = (y * d1.info.width + 135) * d1.info.channels;
    if (d1.data[idx] < 250) {
      console.log('Principia top at y=', y);
      break;
    }
  }
  for (let y = 280; y < 320; y++) {
    const idx = (y * d1.info.width + 135) * d1.info.channels;
    if (d1.data[idx] > 250) {
      console.log('Principia bottom at y=', y);
      break;
    }
  }

  // Puravida
  const p3 = path.join(uploadDir, 'media_1790556030719.png');
  const d3 = await sharp(p3).raw().toBuffer({ resolveWithObject: true });
  // Puravida is roughly centered around x=245
  for (let y = 80; y < 140; y++) {
    const idx = (y * d3.info.width + 245) * d3.info.channels;
    if (d3.data[idx] < 250) {
      console.log('Puravida top at y=', y);
      break;
    }
  }
  for (let y = 280; y < 330; y++) {
    const idx = (y * d3.info.width + 245) * d3.info.channels;
    if (d3.data[idx] > 250) {
      console.log('Puravida bottom at y=', y);
      break;
    }
  }
  // Find left of Puravida at y=200
  for (let x = 100; x < 150; x++) {
    const idx = (200 * d3.info.width + x) * d3.info.channels;
    if (d3.data[idx] < 250) {
      console.log('Puravida left at x=', x);
      break;
    }
  }
}

checkPrincipiaAndPuravida();
