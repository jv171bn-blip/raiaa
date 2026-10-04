import sharp from 'sharp';
import path from 'path';

const outDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/monta';

async function cleanCorners() {
  for (const name of ['cetaphil_banner.png', 'puravida_banner.png']) {
    const file = path.join(outDir, name);
    const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;

    // Clean top-right corner from x=width-40 to width, y=0 to 30
    for (let y = 0; y < 35; y++) {
      for (let x = width - 50; x < width; x++) {
        const idx = (y * width + x) * channels;
        // If it's not the grey card background or white
        data[idx] = 255;
        data[idx+1] = 255;
        data[idx+2] = 255;
        if (channels === 4) data[idx+3] = 255;
      }
    }

    await sharp(data, { raw: info })
      .png()
      .toFile(file + '.tmp');

    // Overwrite
    const fs = await import('fs');
    fs.copyFileSync(file + '.tmp', file);
    fs.unlinkSync(file + '.tmp');
    console.log('Cleaned corner for', name);
  }
}

cleanCorners();
