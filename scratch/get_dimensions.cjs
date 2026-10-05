const fs = require('fs');

function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (filePath.endsWith('.png')) {
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    return { width, height };
  } else if (filePath.endsWith('.webp')) {
    // Basic webp dimensions
    if (buf.toString('ascii', 12, 16) === 'VP8X') {
      const width = 1 + buf.readUIntLE(24, 3);
      const height = 1 + buf.readUIntLE(27, 3);
      return { width, height };
    } else if (buf.toString('ascii', 12, 16) === 'VP8 ') {
      const width = buf.readUInt16LE(26) & 0x3fff;
      const height = buf.readUInt16LE(28) & 0x3fff;
      return { width, height };
    } else if (buf.toString('ascii', 12, 16) === 'VP8L') {
      const b0 = buf[21];
      const b1 = buf[22];
      const b2 = buf[23];
      const b3 = buf[24];
      const width = 1 + (((b1 & 0x3f) << 8) | b0);
      const height = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return { width, height };
    }
  }
  return { width: 0, height: 0 };
}

const files = [
  'public/banners/hero_06_saude_mental.webp',
  'public/banners/hero_10_outubro_rosa.webp',
  'public/banners/banner_09_respirar_melhor.png',
  'public/banners/banner_07_nutriweek.png',
  'public/banners/banner_05_raia_conceito.png'
];

files.forEach(f => {
  console.log(f, getDimensions(f));
});
