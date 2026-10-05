const sharp = require('sharp');

async function testMobile() {
  const meta = await sharp('public/banners/mobile/hero_06_saude_mental.webp').metadata();
  console.log('Mobile webp 06:', meta.width, 'x', meta.height);
  
  // Let's resize and see if we can check text location
  // Let's create a test image
}

testMobile();
