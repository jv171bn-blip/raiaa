const fs = require('fs');
const path = require('path');
const {
  existingNormalizedNames,
  normalizeText,
  extractBrand,
  inferCategorySubcategory,
  extractSize
} = require('./import_helpers.cjs');

async function testSampleImport() {
  console.log('Fetching sitemap...');
  const sitemapRes = await fetch('https://drogariacarvalho.com/sitemap.xml', { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>(https:\/\/drogariacarvalho\.com\/p\/[^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Found ${urls.length} product URLs.`);

  const sample = urls.slice(0, 10);
  const imported = [];
  let ignoredCount = 0;
  let baseId = 10000001;

  for (let i = 0; i < sample.length; i++) {
    const u = sample[i];
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const match = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
      if (!match) continue;
      const data = JSON.parse(match[1]);

      const name = data.name.trim();
      const norm = normalizeText(name);

      // Check if already in store
      if (existingNormalizedNames.has(norm)) {
        console.log(`[IGNORE - JÁ EXISTE]: ${name}`);
        ignoredCount++;
        continue;
      }

      const rawPrice = data.offers ? parseFloat(data.offers.price) : 0;
      if (!rawPrice || isNaN(rawPrice)) continue;

      // Exact 10% cheaper, no discount tag / no oldPrice
      const price10Cheaper = Number((rawPrice * 0.90).toFixed(2));

      // Image
      let img = '';
      if (Array.isArray(data.image) && data.image.length > 0) {
        img = data.image[0];
      } else if (typeof data.image === 'string') {
        img = data.image;
      }

      const brand = extractBrand(name);
      const { category, subcategory } = inferCategorySubcategory(name);
      const size = extractSize(name);

      const product = {
        id: baseId++,
        name,
        size,
        price: price10Cheaper,
        rating: 4.8 + Number(((i % 3) * 0.1).toFixed(1)),
        reviews: 40 + (i % 80),
        image: img,
        brand,
        category,
        subcategory,
        description: data.description ? data.description.trim().slice(0, 2000) : `${name}. Produto original com procedência garantida e envio imediato.`,
        productCode: String(baseId - 1)
      };

      imported.push(product);
      console.log(`[NOVO IMPORTADO]: ${name} | De R$ ${rawPrice} -> Por R$ ${product.price} (-10%) | Img: ${img.slice(0, 45)}...`);
    } catch(e) {
      console.error(`Error on ${u}:`, e.message);
    }
  }

  console.log(`\nResultado do teste: ${imported.length} importados, ${ignoredCount} ignorados.`);
  console.log('Exemplo do produto gerado:\n', JSON.stringify(imported[0], null, 2));
}

testSampleImport().catch(console.error);
