import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';
const outDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/monta';

async function processCards() {
  const cards = [
    {
      name: 'principia_banner.png',
      file: 'media_1790556011651.png',
      crop: { left: 10, top: 108, width: 251, height: 196 }
    },
    {
      name: 'cetaphil_banner.png',
      file: 'media_1790556021131.png',
      crop: { left: 13, top: 28, width: 251, height: 196 },
      cleanCorner: true
    },
    {
      name: 'puravida_banner.png',
      file: 'media_1790556030719.png',
      crop: { left: 118, top: 117, width: 251, height: 196 },
      cleanCorner: true
    }
  ];

  for (const card of cards) {
    let img = sharp(path.join(uploadDir, card.file)).extract(card.crop);
    
    if (card.cleanCorner) {
      const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
      // In the top-right outside the rounded corner: y in [0, 8], x in [info.width - 15, info.width]
      for (let y = 0; y <= 8; y++) {
        for (let x = info.width - 15; x < info.width; x++) {
          const idx = (y * info.width + x) * info.channels;
          if (data[idx] < 250 || data[idx+1] < 250 || data[idx+2] < 250) {
            data[idx] = 255;
            data[idx+1] = 255;
            data[idx+2] = 255;
          }
        }
      }
      img = sharp(data, { raw: info });
    }

    // Upscale 2x to 502x392 with lanczos3
    await img
      .resize(502, 392, { kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 1.2, m2: 2.0 })
      .png({ quality: 100 })
      .toFile(path.join(outDir, card.name));

    console.log(`Generated ${card.name} (502x392)`);
  }
}

processCards();
