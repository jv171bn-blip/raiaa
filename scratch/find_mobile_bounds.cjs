const sharp = require('sharp');

async function findContentBounds(imagePath) {
  const image = sharp(imagePath);
  const { width, height } = await image.metadata();
  
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  
  console.log(`${imagePath}: size=${width}x${height}, bgColor=rgb(${bgR},${bgG},${bgB})`);
}

async function run() {
  const files = [
    'public/banners/mobile/hero_06_saude_mental.webp',
    'public/banners/mobile/hero_10_outubro_rosa.webp',
    'public/banners/mobile/banner_09_respirar_melhor.webp',
    'public/banners/mobile/banner_07_nutriweek.webp',
    'public/banners/mobile/banner_05_raia_conceito.webp',
    'public/banners/mobile/mobile_6.png',
    'public/banners/mobile/mobile_10.png',
    'public/banners/mobile/mobile_9.png',
    'public/banners/mobile/mobile_7.png',
    'public/banners/mobile/mobile_5.png'
  ];
  for (const f of files) {
    await findContentBounds(f);
  }
}

run();
