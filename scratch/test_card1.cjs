const sharp = require('sharp');

async function testCard1() {
  // Extract x=260 to 1760 (width 1500, height 600)
  // Resize to fit in 480x240 on #f3f1ef background
  await sharp('public/banners/hero_06_saude_mental.webp')
    .extract({ left: 260, top: 0, width: 1500, height: 600 })
    .resize(480, 240, {
      fit: 'contain',
      background: { r: 243, g: 241, b: 239 }
    })
    .toFile('scratch/test_card_01.png');
  console.log('Generated scratch/test_card_01.png');
}

testCard1();
