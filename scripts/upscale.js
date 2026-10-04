import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bannersDir = path.join(__dirname, '../public/banners');
const files = fs.readdirSync(bannersDir).filter(f => f.startsWith('banner_') && f.endsWith('.png'));

console.log('Processing', files.length, 'banners...');

async function processBanners() {
  for (const file of files) {
    const filePath = path.join(bannersDir, file);
    const tempPath = path.join(bannersDir, 'temp_' + file);

    await sharp(filePath)
      .resize(1200, 600, {
        kernel: sharp.kernel.lanczos3,
        fit: 'fill'
      })
      .sharpen({
        sigma: 1.4,
        m1: 1.6,
        m2: 3.5
      })
      .modulate({
        brightness: 1.01,
        saturation: 1.05
      })
      .png({
        quality: 100,
        compressionLevel: 8
      })
      .toFile(tempPath);

    fs.copyFileSync(tempPath, filePath);
    fs.unlinkSync(tempPath);
    console.log('Upscaled to 1200x600:', file);
  }
}

processBanners()
  .then(() => console.log('All banners upscaled successfully!'))
  .catch(err => console.error(err));
