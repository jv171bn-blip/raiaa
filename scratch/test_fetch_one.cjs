const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

fetchPage('https://aredeultrabrasil.com/product/100-whey-refil-900g-baunilha-max-titanium/').then(r => {
  console.log('Status:', r.status);
  console.log('HTML length:', r.html.length);
  const ogImg = r.html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  console.log('og:image:', ogImg ? ogImg[1] : 'not found');
  const wpImg = r.html.match(/wp-post-image[^>]*src=["']([^"']+)["']/i);
  console.log('wpImg:', wpImg ? wpImg[1] : 'not found');
  const woocommerceImg = r.html.match(/woocommerce-product-gallery__image[^>]*data-thumb=["']([^"']+)["']/i);
  console.log('woocommerce data-thumb:', woocommerceImg ? woocommerceImg[1] : 'not found');
}).catch(console.error);
