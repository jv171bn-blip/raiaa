const https = require('https');

function searchVTEX(term) {
  return new Promise(resolve => {
    const url = `https://www.drogariaspacheco.com.br/api/catalog_system/pub/products/search?ft=${encodeURIComponent(term)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          console.log(`Query "${term}" found ${json.length} items:`);
          json.slice(0, 5).forEach(item => {
            console.log(`- ${item.productName}`);
            if (item.items && item.items[0] && item.items[0].images) {
              console.log(`  Img: ${item.items[0].images[0].imageUrl}`);
            }
          });
        } catch (e) {
          console.log(`Query "${term}" error parsing:`, e.message, d.slice(0, 100));
        }
        resolve();
      });
    }).on('error', err => {
      console.log(`Query "${term}" error:`, err.message);
      resolve();
    });
  });
}

async function run() {
  await searchVTEX('kit cerave');
  await searchVTEX('principia tranexamico');
  await searchVTEX('estojo alcon');
  await searchVTEX('protetor auricular macks');
  await searchVTEX('whey concentrado growth');
}
run();
