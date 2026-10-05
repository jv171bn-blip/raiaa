const sharp = require('sharp');

async function checkBounds(filePath) {
  const img = sharp(filePath);
  const { width, height } = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  const bgR = data[0], bgG = data[1], bgB = data[2];
  let minX = width, maxX = 0, minY = height, maxY = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const diff = Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB);
      if (diff > 35) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`${filePath}: content in [${minX}, ${minY}] to [${maxX}, ${maxY}], w=${maxX - minX}, h=${maxY - minY}`);
}

checkBounds('scratch/test_01.png');
