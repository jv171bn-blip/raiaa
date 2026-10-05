const sharp = require('sharp');
const fs = require('fs');

async function analyzeBanner(bannerPath, name) {
  const img = sharp(bannerPath);
  const meta = await img.metadata();
  console.log(`\n=== ${name} (${bannerPath}) ===`);
  console.log(`Dimensions: ${meta.width}x${meta.height}`);

  // Let's sample along horizontal lines to find text/graphic clusters
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const bgR = data[0], bgG = data[1], bgB = data[2];

  // Divide width into 10 segments and count non-bg pixels
  const segWidth = Math.floor(meta.width / 10);
  const segCounts = [];
  for (let s = 0; s < 10; s++) {
    let count = 0;
    const startX = s * segWidth;
    const endX = (s + 1) * segWidth;
    for (let y = 0; y < meta.height; y += 4) {
      for (let x = startX; x < endX; x += 4) {
        const idx = (y * meta.width + x) * info.channels;
        const diff = Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB);
        if (diff > 35) count++;
      }
    }
    segCounts.push({ seg: s, range: `${startX}-${endX}`, count });
  }
  console.log('Segment density:', segCounts);
}

async function run() {
  await analyzeBanner('public/banners/hero_06_saude_mental.webp', 'Saúde Mental');
  await analyzeBanner('public/banners/hero_10_outubro_rosa.webp', 'Outubro Rosa');
  await analyzeBanner('public/banners/banner_09_respirar_melhor.png', 'Respirar Melhor');
  await analyzeBanner('public/banners/banner_07_nutriweek.png', 'Nutriweek');
  await analyzeBanner('public/banners/banner_05_raia_conceito.png', 'Raia Conceito');
}

run();
