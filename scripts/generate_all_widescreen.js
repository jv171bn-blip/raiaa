import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadDir = 'C:/Users/prosperidade/.gemini/antigravity-ide/brain/5fba3504-27a0-4022-8965-d1911c1f57b2/.user_uploaded';
const bannersDir = 'c:/Users/prosperidade/Desktop/Projetos/drogaraia/public/banners';

const bannerMappings = [
  { file: 'banner_01_primavera.png', skip: true }, // Already native desktop widescreen
  { file: 'banner_02_genericos.png', upload: 'media_1790546854443.png' },
  { file: 'banner_03_black_do_dia.png', upload: 'media_1790546857763.png' },
  { file: 'banner_04_nova_estacao.png', upload: 'media_1790546859984.png' },
  { file: 'banner_05_raia_conceito.png', upload: 'media_1790546862611.png' },
  { file: 'banner_06_ozivy.png', upload: 'media_1790546869250.png' },
  { file: 'banner_07_nutriweek.png', upload: 'media_1790546871676.png' },
  { file: 'banner_08_cuidado_diario.png', upload: 'media_1790546873812.png' },
  { file: 'banner_09_respirar_melhor.png', upload: 'media_1790546879823.png' },
  { file: 'banner_10_viralizou.png', upload: 'media_1790546882253.png' },
  { file: 'banner_11_barba_cabelo_corpo.png', upload: 'media_1790546886152.png' },
  { file: 'banner_12_performance.png', upload: 'media_1790546889016.png' },
  { file: 'banner_13_wella_fios.png', upload: 'media_1790546890865.png' },
  { file: 'banner_14_needs_baby.png', upload: 'media_1790546893072.png' },
  { file: 'banner_15_ninho.png', upload: 'media_1790546894998.png' },
];

const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 442; // Ratio 4.344:1 matching 704 x 162 from user screenshot

async function generateAllWidescreen() {
  for (const item of bannerMappings) {
    if (item.skip) {
      console.log(`Skipping ${item.file} (kept as native desktop widescreen)`);
      continue;
    }

    const inputPath = path.join(uploadDir, item.upload);
    const outputPath = path.join(bannersDir, item.file);

    // 1. Upscale original center content to height 442 (ratio ~ 2:1 -> width ~ 884)
    const centerBuf = await sharp(inputPath)
      .resize(884, TARGET_HEIGHT, { kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.1, m1: 1.3, m2: 2.2 })
      .png()
      .toBuffer();

    // 2. Extract edge columns (width 2px) to extend horizontally
    const leftCol = await sharp(centerBuf)
      .extract({ left: 0, top: 0, width: 2, height: TARGET_HEIGHT })
      .resize(518, TARGET_HEIGHT, { fit: 'fill' })
      .png()
      .toBuffer();

    const rightCol = await sharp(centerBuf)
      .extract({ left: 882, top: 0, width: 2, height: TARGET_HEIGHT })
      .resize(518, TARGET_HEIGHT, { fit: 'fill' })
      .png()
      .toBuffer();

    // 3. Composite into 1920x442
    await sharp({
      create: {
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
      }
    })
    .composite([
      { input: leftCol, left: 0, top: 0 },
      { input: centerBuf, left: 518, top: 0 },
      { input: rightCol, left: 1402, top: 0 }
    ])
    .sharpen({ sigma: 0.8, m1: 1.1, m2: 1.8 })
    .png({ quality: 100 })
    .toFile(outputPath);

    console.log(`Generated HD Widescreen 1920x442: ${item.file}`);
  }

  console.log('All 15 banners generated successfully at 1920x442!');
}

generateAllWidescreen();
