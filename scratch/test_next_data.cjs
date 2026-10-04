const https = require('https');

https.get('https://www.drogaraia.com.br/bio-extratus-banho-de-creme-tutano-250g.html', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  }
}, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    const nextDataMatch = body.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
    if (nextDataMatch) {
      try {
        const json = JSON.parse(nextDataMatch[1]);
        const str = JSON.stringify(json);
        const imgs = str.match(/https:\/\/[^"']*\.(?:webp|jpg|png)/gi);
        console.log('Next data images:', [...new Set(imgs)].slice(0, 10));
      } catch (e) {
        console.error('Parse error:', e.message);
      }
    } else {
      console.log('No next data found. Status was:', res.statusCode);
    }
  });
});
