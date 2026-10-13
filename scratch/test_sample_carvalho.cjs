const fs = require('fs');

async function testSample() {
  const sitemapRes = await fetch('https://drogariacarvalho.com/sitemap.xml', { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>(https:\/\/drogariacarvalho\.com\/p\/[^<]+)<\/loc>/g)].map(m => m[1]);
  console.log('Total URLs found in sitemap:', urls.length);

  // Sample 5 URLs: start, quarter, middle, three-quarters, end
  const sampleIndices = [0, Math.floor(urls.length * 0.25), Math.floor(urls.length * 0.5), Math.floor(urls.length * 0.75), urls.length - 1];
  for (const idx of sampleIndices) {
    const u = urls[idx];
    console.log(`\nTesting [${idx}]: ${u}`);
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const match = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
      if (match) {
        const json = JSON.parse(match[1]);
        console.log('  Name:', json.name);
        console.log('  Price:', json.offers ? json.offers.price : 'N/A');
        console.log('  Images:', Array.isArray(json.image) ? json.image.length : typeof json.image);
        console.log('  Brand:', json.brand);
        console.log('  Category:', json.category);
      } else {
        console.log('  No JSON-LD found!');
      }
    } catch(e) {
      console.log('  Error:', e.message);
    }
  }
}

testSample().catch(console.error);
