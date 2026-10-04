const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, res => {
      console.log('URL:', url, 'Status:', res.statusCode);
      if (res.statusCode >= 300 && res.statusCode < 400) {
        console.log('Redirect to:', res.headers.location);
        return resolve(fetchPage(res.headers.location));
      }
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => {
        const matches = [...html.matchAll(/https?:\/\/[^"'\s<>]+\.(?:jpg|jpeg|png|webp)/gi)].map(m => m[0]);
        console.log('Found ' + matches.length + ' image URLs');
        resolve(matches);
      });
    }).on('error', reject);
  });
}

fetchPage('https://www.ihypera.com.br/torsilax-caixa-12-comprimidos-13795_pai/p')
  .then(imgs => {
    const pImgs = imgs.filter(u => u.includes('arquivos/ids'));
    console.log('Product images:', [...new Set(pImgs)].slice(0, 5));
  })
  .catch(console.error);
