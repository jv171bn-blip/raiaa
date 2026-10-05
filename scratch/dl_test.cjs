const https = require('https');
const fs = require('fs');

function dl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved', dest);
        resolve();
      });
    }).on('error', err => reject(err));
  });
}

async function main() {
  await dl('https://product-data.raiadrogasil.io/images/13179319.webp', 'scratch/babysec_p.webp');
  await dl('https://product-data.raiadrogasil.io/images/3490497.webp', 'scratch/pompom_p.webp');
  await dl('https://product-data.raiadrogasil.io/images/17547850.webp', 'scratch/pampers_wipes.webp');
}
main();
