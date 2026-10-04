import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const bannersDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/banners';
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 442; // Ratio 4.344:1 matching 704 x 162 from screenshot

async function processAllBanners() {
  const files = fs.readdirSync(bannersDir).filter(f => f.startsWith('banner_') && f.endsWith('.png'));

  for (const file of files) {
    if (file === 'banner_01_primavera.png') {
      // Banner 1 is already in native widescreen from the user's screenshot!
      console.log('Skipping banner_01 (already perfect widescreen)');
      continue;
    }

    const filePath = path.join(bannersDir, file);
    const img = sharp(filePath);
    const meta = await img.metadata();

    // Sample background colors from left and right edges
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    // Left edge color sample (x=5, y=half)
    const midY = Math.floor(info.height / 2);
    const leftIdx = (midY * info.width + 5) * info.channels;
    const leftColor = { r: data[leftIdx], g: data[leftIdx+1], b: data[leftIdx+2] };

    // Right edge color sample (x=width-6, y=half)
    const rightIdx = (midY * info.width + (info.width - 6)) * info.channels;
    const rightColor = { r: data[rightIdx], g: data[rightIdx+1], b: data[rightIdx+2] };

    // Resize content to fit height (442px) with sharp lanczos3
    const scaledWidth = Math.round((info.width / info.height) * TARGET_HEIGHT);
    const scaledContent = await sharp(filePath)
      .resize(scaledWidth, TARGET_HEIGHT, {
        fit: 'contain',
        kernel: sharp.kernel.lanczos3,
        background: { r: leftColor.r, g: leftColor.g, b: leftColor.b, alpha: 1 }
      })
      .toBuffer();

    // Create 1920x442 canvas with background extending to edges
    // If left and right colors are similar, use uniform background, or gradient
    const bgCanvas = await sharp({
      create: {
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        channels: 3,
        background: { r: leftColor.r, g: leftColor.g, b: leftColor.b }
      }
    })
    .png()
    .toBuffer();

    // Composite scaled content centered
    const leftOffset = Math.max(0, Math.floor((TARGET_WIDTH - scaledWidth) / 2));
    
    await sharp(bgCanvas)
      .composite([{
        input: scaledContent,
        left: leftOffset,
        top: 0
      }])
      .sharpen({ sigma: 1.1, m1: 1.3, m2: 2.5 })
      .png({ quality: 100 })
      .toFile(filePath + '.tmp');

    fs.copyFileSync(filePath + '.tmp', filePath);
    fs.unlinkSync(filePath + '.tmp');
    console.log(`Processed ${file} to widescreen 1920x442`);
  }

  console.log('All banners processed to exact 1920x442 widescreen format!');
}

processAllBanners();
