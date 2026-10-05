const sharp = require('sharp');
const fs = require('fs');

async function check() {
  const list = [
    'public/banners/mobile/mobile_6.png',
    'public/banners/mobile/mobile_10.png',
    'public/banners/mobile/mobile_9.png',
    'public/banners/mobile/mobile_7.png',
    'public/banners/mobile/mobile_5.png',
  ];

  for (const f of list) {
    const meta = await sharp(f).metadata();
    console.log(f, meta.width, meta.height);
  }
}

check();
