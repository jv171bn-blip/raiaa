const sharp = require('sharp');

async function testCrop() {
  // Let's create an artifact image or a test image to see how it looks
  // Or check if sharp can extract the middle 600x600
  const meta = await sharp('public/banners/mobile/hero_06_saude_mental.webp').metadata();
  console.log('Mobile metadata:', meta);
}

testCrop();
