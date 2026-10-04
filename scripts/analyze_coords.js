import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function analyze(file) {
  const { data, info } = await sharp(path.join(uploadDir, file))
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log('===', file, width, 'x', height, '===');

  // Let's find rows where background is greyish (e.g. R > 230 && R < 252, G > 230 && G < 252, B > 230 && B < 252)
  for (let y = 0; y < height; y += 10) {
    let greyStart = -1;
    let greyEnd = -1;
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx+1];
      const b = data[idx+2];
      const isGrey = (r >= 238 && r <= 248 && g >= 240 && g <= 249 && b >= 240 && b <= 250);
      if (isGrey) {
        if (greyStart === -1) greyStart = x;
        greyEnd = x;
      }
    }
    if (greyStart !== -1 && (greyEnd - greyStart > 100)) {
      console.log(`y=${y}: grey from x=${greyStart} to x=${greyEnd} (w=${greyEnd - greyStart})`);
    }
  }
}

async function run() {
  await analyze('media_1790556011651.png');
  await analyze('media_1790556021131.png');
  await analyze('media_1790556030719.png');
}

run();
