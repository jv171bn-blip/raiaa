import sharp from 'sharp';

const dir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function run() {
  const { data, info } = await sharp(dir + '/media_1790556011651.png').raw().toBuffer({ resolveWithObject: true });
  const startY = 108, cardX = 135;
  for (let y = startY + 195; y < startY + 215; y++) {
    const idx = (y * info.width + cardX) * info.channels;
    console.log(`y=${y} (offset ${y - startY}): RGB(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  }
}

run();
