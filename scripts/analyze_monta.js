import sharp from 'sharp';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';

async function main() {
  const f1 = path.join(uploadDir, 'media_1790556011651.png');
  const f2 = path.join(uploadDir, 'media_1790556021131.png');
  const f3 = path.join(uploadDir, 'media_1790556030719.png');

  console.log('f1:', await sharp(f1).metadata());
  console.log('f2:', await sharp(f2).metadata());
  console.log('f3:', await sharp(f3).metadata());
}

main();
