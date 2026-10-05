const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = 'public/banners/cards';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const W = 480;
const H = 270;

async function buildCards() {
  // 1. Saúde Mental & Bem-estar
  // Source: public/banners/hero_06_saude_mental.webp
  // Extract text "Saúde em foco" (starts around x=220) to end of head (x=1750)
  // Background: rgb(243, 241, 239)
  const c1Extracted = await sharp('public/banners/hero_06_saude_mental.webp')
    .extract({ left: 160, top: 0, width: 1640, height: 600 })
    .resize(430, 230, { fit: 'contain', background: { r: 243, g: 241, b: 239 } })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 243, g: 241, b: 239 }
    }
  })
  .composite([{ input: c1Extracted, gravity: 'center' }])
  .webp({ quality: 95 })
  .toFile(path.join(targetDir, 'card_01_saude_mental.webp'));
  console.log('Created card_01_saude_mental.webp');

  // 2. Prevenção e Diagnóstico Precoce (Outubro Rosa)
  // Source: public/banners/hero_10_outubro_rosa.webp
  // Extract text "Outubro Rosa" and ribbon graphic
  // Background: rgb(243, 241, 239)
  const c2Extracted = await sharp('public/banners/hero_10_outubro_rosa.webp')
    .extract({ left: 180, top: 0, width: 1680, height: 600 })
    .resize(430, 230, { fit: 'contain', background: { r: 243, g: 241, b: 239 } })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 243, g: 241, b: 239 }
    }
  })
  .composite([{ input: c2Extracted, gravity: 'center' }])
  .webp({ quality: 95 })
  .toFile(path.join(targetDir, 'card_02_outubro_rosa.webp'));
  console.log('Created card_02_outubro_rosa.webp');

  // 3. Respirar Melhor no Inverno
  // Source: public/banners/banner_09_respirar_melhor.png
  // Inhaler to 65% discount: x=500 to 1380
  // Background: rgb(242, 241, 239)
  const c3Extracted = await sharp('public/banners/banner_09_respirar_melhor.png')
    .extract({ left: 470, top: 0, width: 960, height: 442 })
    .resize(440, 230, { fit: 'contain', background: { r: 242, g: 241, b: 239 } })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 242, g: 241, b: 239 }
    }
  })
  .composite([{ input: c3Extracted, gravity: 'center' }])
  .webp({ quality: 95 })
  .toFile(path.join(targetDir, 'card_03_respirar_melhor.webp'));
  console.log('Created card_03_respirar_melhor.webp');

  // 4. Nutrição e Suplementação (Nutriweek)
  // Source: public/banners/banner_07_nutriweek.png
  // Central Nutriweek graphic + bottles + 50%: x=600 to 1320
  // Background: rgb(242, 241, 239)
  const c4Extracted = await sharp('public/banners/banner_07_nutriweek.png')
    .extract({ left: 580, top: 0, width: 760, height: 442 })
    .resize(400, 230, { fit: 'contain', background: { r: 242, g: 241, b: 239 } })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 242, g: 241, b: 239 }
    }
  })
  .composite([{ input: c4Extracted, gravity: 'center' }])
  .webp({ quality: 95 })
  .toFile(path.join(targetDir, 'card_04_nutriweek.webp'));
  console.log('Created card_04_nutriweek.webp');

  // 5. Espaço Farmacêutico & Vacinas (Raia Conceito)
  // Source: public/banners/banner_05_raia_conceito.png
  // "Raia Conceito" + "Sua beleza ganhou um espaço premium..."
  // Background: dark teal rgb(12, 65, 68)
  const c5Extracted = await sharp('public/banners/banner_05_raia_conceito.png')
    .extract({ left: 520, top: 0, width: 880, height: 442 })
    .resize(440, 230, { fit: 'contain' })
    .toBuffer();

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 12, g: 65, b: 68 }
    }
  })
  .composite([{ input: c5Extracted, gravity: 'center' }])
  .webp({ quality: 95 })
  .toFile(path.join(targetDir, 'card_05_raia_conceito.webp'));
  console.log('Created card_05_raia_conceito.webp');
}

buildCards();
