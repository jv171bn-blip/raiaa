import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';
const outDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/monta';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function testCrops() {
  // 1. Principia from media_1790556011651.png
  // Let's crop full card and upper banner
  await sharp(path.join(uploadDir, 'media_1790556011651.png'))
    .extract({ left: 10, top: 107, width: 250, height: 198 })
    .toFile(path.join(outDir, 'principia_top.png'));

  // 2. Cetaphil from media_1790556021131.png
  await sharp(path.join(uploadDir, 'media_1790556021131.png'))
    .extract({ left: 13, top: 40, width: 250, height: 175 })
    .toFile(path.join(outDir, 'cetaphil_top.png'));

  // 3. Puravida from media_1790556030719.png
  await sharp(path.join(uploadDir, 'media_1790556030719.png'))
    .extract({ left: 118, top: 116, width: 250, height: 198 })
    .toFile(path.join(outDir, 'puravida_top.png'));

  console.log('Saved test crops to public/monta');
}

testCrops();
