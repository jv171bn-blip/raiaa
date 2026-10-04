const https = require('https');

async function testEndpoint(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(url, '-> status:', res.statusCode, 'len:', data.length);
        if (res.statusCode === 200) {
          console.log(data.slice(0, 300));
        }
        resolve(res.statusCode);
      });
    });
    req.on('error', err => {
      console.log(url, '-> error:', err.message);
      resolve(500);
    });
  });
}

async function run() {
  await testEndpoint('https://api.drogaraia.com.br/search/v1/search?terms=pantene&resultsPerPage=2');
  await testEndpoint('https://www.drogaraia.com.br/api/catalog_system/pub/products/search?ft=pantene');
  await testEndpoint('https://api.linx.com.br/v1/search?terms=pantene');
}

run();
