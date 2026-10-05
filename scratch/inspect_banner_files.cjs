const sharp = require('sharp');

async function inspectImages() {
  const images = [
    { name: 'desktop_06', path: 'public/banners/hero_06_saude_mental.webp' },
    { name: 'mobile_06_webp', path: 'public/banners/mobile/hero_06_saude_mental.webp' },
    { name: 'mobile_6_png', path: 'public/banners/mobile/mobile_6.png' },
    { name: 'desktop_09', path: 'public/banners/banner_09_respirar_melhor.png' },
    { name: 'mobile_09_webp', path: 'public/banners/mobile/banner_09_respirar_melhor.webp' },
    { name: 'mobile_9_png', path: 'public/banners/mobile/mobile_9.png' },
    { name: 'desktop_05', path: 'public/banners/banner_05_raia_conceito.png' },
    { name: 'mobile_05_webp', path: 'public/banners/mobile/banner_05_raia_conceito.webp' },
  ];

  for (const img of images) {
    const meta = await sharp(img.path).metadata();
    console.log(`${img.name} (${img.path}): ${meta.width}x${meta.height}`);
  }
}

inspectImages();
