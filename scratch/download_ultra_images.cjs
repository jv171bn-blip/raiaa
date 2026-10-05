const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const matched = JSON.parse(fs.readFileSync('scratch/matched_user_products.json', 'utf8'));

// Prepare list of unique images to download
const downloadMap = new Map(); // srcUrl -> { id, ext, targetFilename, targetPath }

for (const m of matched) {
  const p = m.storeProduct;
  if (p.images && p.images.length > 0 && p.images[0].src) {
    const srcUrl = p.images[0].src;
    if (!downloadMap.has(srcUrl)) {
      // Determine file extension
      const urlPath = new URL(srcUrl).pathname;
      let ext = path.extname(urlPath).toLowerCase();
      if (!ext || ext.length > 5) ext = '.jpg';
      if (ext === '.jpeg') ext = '.jpg';

      const targetFilename = `ultra_${p.id}${ext}`;
      const targetPath = path.join('public', 'products', targetFilename);
      downloadMap.set(srcUrl, {
        productId: p.id,
        srcUrl,
        targetFilename,
        targetPath,
      });
    }
  }
}

console.log(`Total unique images to download: ${downloadMap.size}`);

function downloadOne(item) {
  return new Promise((resolve) => {
    // If file already exists and is > 1000 bytes, skip
    if (fs.existsSync(item.targetPath) && fs.statSync(item.targetPath).size > 1000) {
      return resolve({ success: true, cached: true, file: item.targetFilename });
    }

    const client = item.srcUrl.startsWith('https') ? https : http;
    const req = client.get(item.srcUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      // Handle redirect
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, item.srcUrl).href;
        }
        item.srcUrl = redirectUrl;
        return resolve(downloadOne(item));
      }

      if (res.statusCode !== 200) {
        return resolve({ success: false, status: res.statusCode, file: item.targetFilename, url: item.srcUrl });
      }

      const fileStream = fs.createWriteStream(item.targetPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close(() => {
          const sz = fs.statSync(item.targetPath).size;
          if (sz > 1000) {
            resolve({ success: true, file: item.targetFilename, size: sz });
          } else {
            resolve({ success: false, error: 'File too small', size: sz });
          }
        });
      });

      fileStream.on('error', (err) => {
        fs.unlink(item.targetPath, () => {});
        resolve({ success: false, error: err.message });
      });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    req.setTimeout(20000, () => {
      req.destroy();
      resolve({ success: false, error: 'Timeout' });
    });
  });
}

// Download with concurrency pool of 12
async function downloadAll() {
  const items = Array.from(downloadMap.values());
  const concurrency = 12;
  let idx = 0;
  let completed = 0;
  let failed = 0;

  async function worker() {
    while (idx < items.length) {
      const current = items[idx++];
      const res = await downloadOne(current);
      if (res.success) {
        completed++;
      } else {
        failed++;
        console.error(`Failed ${current.targetFilename}: ${res.error || res.status}`);
      }
      if ((completed + failed) % 30 === 0 || completed + failed === items.length) {
        console.log(`Progress: ${completed + failed} / ${items.length} (Success: ${completed}, Failed: ${failed})`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  console.log(`Download finished: ${completed} successful, ${failed} failed.`);

  // Save image map: productId -> localPath
  const imageMap = {};
  for (const item of items) {
    if (fs.existsSync(item.targetPath) && fs.statSync(item.targetPath).size > 1000) {
      imageMap[item.productId] = `/products/${item.targetFilename}`;
    }
  }
  fs.writeFileSync('scratch/ultra_image_map.json', JSON.stringify(imageMap, null, 2));
  console.log(`Saved local image mappings for ${Object.keys(imageMap).length} products to scratch/ultra_image_map.json`);
}

downloadAll();
