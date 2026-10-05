const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = 'public/health-space';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Target card image size: 480 x 280 (high-DPI 2x for a ~240x140 / ~260x150 card)
const CARD_W = 500;
const CARD_H = 280;

async function createCard1() {
  // Card 1: Saúde Mental
  // Source: public/banners/mobile/hero_06_saude_mental.webp (1200 x 600)
  // Contains "Saúde em foco" and the head with flowers.
  // Background: #f3f1ef
  // Let's fit the 1200x600 image into 500x280 with contain on #f3f1ef
  await sharp('public/banners/mobile/hero_06_saude_mental.webp')
    .resize(CARD_W, CARD_H, {
      fit: 'contain',
      background: { r: 243, g: 241, b: 239, alpha: 1 }
    })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'card_01_saude_mental.webp'));
  console.log('Created card_01_saude_mental.webp');
}

async function createCard2() {
  // Card 2: Outubro Rosa
  // Source: public/banners/mobile/hero_10_outubro_rosa.webp (1200 x 600)
  // Background: #f3f1ef
  await sharp('public/banners/mobile/hero_10_outubro_rosa.webp')
    .resize(CARD_W, CARD_H, {
      fit: 'contain',
      background: { r: 243, g: 241, b: 239, alpha: 1 }
    })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'card_02_outubro_rosa.webp'));
  console.log('Created card_02_outubro_rosa.webp');
}

async function createCard3() {
  // Card 3: Respirar Melhor
  // Source: public/banners/banner_09_respirar_melhor.png (1920 x 442)
  // The content is from x=520 to x=1370 (width ~850px).
  // Let's extract the content with some nice margin: x=480 to 1410 (width 930, height 442)
  // Background: #f2f1ef
  await sharp('public/banners/banner_09_respirar_melhor.png')
    .extract({ left: 460, top: 0, width: 980, height: 442 })
    .resize(CARD_W, CARD_H, {
      fit: 'contain',
      background: { r: 242, g: 241, b: 239, alpha: 1 }
    })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'card_03_respirar_melhor.webp'));
  console.log('Created card_03_respirar_melhor.webp');
}

async function createCard4() {
  // Card 4: Nutriweek
  // Source: public/banners/banner_07_nutriweek.png (1920 x 442)
  // Content is centered between x=400 and x=1500
  // Background: #f2f1ef
  await sharp('public/banners/banner_07_nutriweek.png')
    .extract({ left: 420, top: 0, width: 1060, height: 442 })
    .resize(CARD_W, CARD_H, {
      fit: 'contain',
      background: { r: 242, g: 241, b: 239, alpha: 1 }
    })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'card_04_nutriweek.webp'));
  console.log('Created card_04_nutriweek.webp');
}

async function createCard5() {
  // Card 5: Raia Conceito
  // Source: public/banners/banner_05_raia_conceito.png (1920 x 442)
  // Has teal gradient. Center has "Raia Conceito" + "Sua beleza ganhou um espaço premium..."
  // The central message is between x=450 and x=1470 (width ~1020)
  await sharp('public/banners/banner_05_raia_conceito.png')
    .extract({ left: 430, top: 0, width: 1060, height: 442 })
    .resize(CARD_W, CARD_H, {
      fit: 'contain',
      background: { r: 10, g: 60, b: 62, alpha: 1 }
    })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'card_05_raia_conceito.webp'));
  console.log('Created card_05_raia_conceito.webp');
}

async function main() {
  await createCard1();
  await createCard2();
  await createCard3();
  await createCard4();
  await createCard5();
  console.log('All 5 cards created successfully.');
}

main();
