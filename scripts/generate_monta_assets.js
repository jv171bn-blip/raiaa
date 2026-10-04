import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';
const outDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/monta';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateAssets() {
  // 1. Principia: left 10, top 107, width 250, height 200
  await sharp(path.join(uploadDir, 'media_1790556011651.png'))
    .extract({ left: 10, top: 107, width: 250, height: 200 })
    .resize(600, 480, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2, m1: 1.4, m2: 3.0 })
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'principia_banner.png'));

  // 2. Cetaphil: left 13, top 27, width 250, height 200
  await sharp(path.join(uploadDir, 'media_1790556021131.png'))
    .extract({ left: 13, top: 27, width: 250, height: 200 })
    .resize(600, 480, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2, m1: 1.4, m2: 3.0 })
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'cetaphil_banner.png'));

  // 3. Puravida: left 118, top 117, width 250, height 200
  await sharp(path.join(uploadDir, 'media_1790556030719.png'))
    .extract({ left: 118, top: 117, width: 250, height: 200 })
    .resize(600, 480, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2, m1: 1.4, m2: 3.0 })
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'puravida_banner.png'));

  console.log('Successfully generated perfect 600x480 monta banners');
}

generateAssets();
