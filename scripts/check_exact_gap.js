import sharp from 'sharp';

const dir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function run() {
  const { data, info } = await sharp(dir + '/media_1790556011651.png').raw().toBuffer({ resolveWithObject: true });
  const startY = 108, cardX = 10;
  for (let y = startY + 190; y < startY + 225; y++) {
    let nonWhiteCount = 0;
    for (let x = cardX; x < cardX + 251; x++) {
      const idx = (y * info.width + x) * info.channels;
      if (data[idx] < 250 || data[idx+1] < 250 || data[idx+2] < 250) nonWhiteCount++;
    }
    console.log(`y=${y} offset=${y - startY} nonWhiteCount=${nonWhiteCount}`);
  }
}

run();
