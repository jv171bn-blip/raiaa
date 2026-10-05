const sharp = require('sharp');

async function test() {
  const meta1 = await sharp('public/banners/hero_06_saude_mental.webp').metadata();
  const meta2 = await sharp('public/banners/mobile/hero_06_saude_mental.webp').metadata();
  const meta3 = await sharp('public/banners/mobile/mobile_6.png').metadata();

  console.log('hero_06 desktop:', meta1);
  console.log('hero_06 mobile webp:', meta2);
  console.log('hero_06 mobile_6.png:', meta3);
}

test();
