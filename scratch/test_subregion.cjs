const sharp = require('sharp');

async function findSubregion() {
  const meta = await sharp('public/banners/hero_06_saude_mental.webp').metadata();
  console.log('Size:', meta.width, meta.height);
  
  // Let's test cropping around x=500 to x=1800
  // Or let's test extracting and saving to scratch/test_01.png
  await sharp('public/banners/hero_06_saude_mental.webp')
    .extract({ left: 450, top: 50, width: 1400, height: 500 })
    .resize(600, 300, { fit: 'contain', background: '#f3f1ef' })
    .toFile('scratch/test_01.png');
    
  console.log('Saved scratch/test_01.png');
}

findSubregion();
