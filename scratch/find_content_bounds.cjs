const sharp = require('sharp');

async function findContentBounds(imagePath) {
  const image = sharp(imagePath);
  const { width, height } = await image.metadata();
  
  // Get raw pixel buffer
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  
  // Let's sample the background color from top-left pixel (0,0)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  
  console.log(`${imagePath}: size=${width}x${height}, bgColor=rgb(${bgR},${bgG},${bgB})`);
  
  // Find leftmost and rightmost non-background pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
      if (diff > 30) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log(`  Content bounds: x=[${minX} to ${maxX}] (width ${maxX - minX}), y=[${minY} to ${maxY}] (height ${maxY - minY})`);
  const centerX = Math.round((minX + maxX) / 2);
  const centerY = Math.round((minY + maxY) / 2);
  console.log(`  Center of content: (${centerX}, ${centerY}) -> ${(centerX / width * 100).toFixed(1)}% X`);
}

async function run() {
  const files = [
    'public/banners/hero_06_saude_mental.webp',
    'public/banners/hero_10_outubro_rosa.webp',
    'public/banners/banner_09_respirar_melhor.png',
    'public/banners/banner_07_nutriweek.png',
    'public/banners/banner_05_raia_conceito.png'
  ];
  for (const f of files) {
    await findContentBounds(f);
  }
}

run();
