const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 1. Bundle and extract non-remedy products
esbuild.buildSync({
  entryPoints: ['scripts/get_all_products.ts'],
  outfile: 'scripts/get_all_products.cjs',
  bundle: true,
  platform: 'node',
  format: 'cjs'
});

// Clear cache and require
delete require.cache[require.resolve('./get_all_products.cjs')];
const { uniqueProducts } = require('./get_all_products.cjs');
const products = uniqueProducts;
console.log(`Total de produtos aprovados para o feed (sem remédios): ${products.length}`);

const BASE_URL = 'https://portalfarmabrasil.com';

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 2. Generate Google Merchant XML (produtos.xml)
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Drogaria Portal - Catálogo de Produtos</title>
    <link>${BASE_URL}</link>
    <description>Feed oficial de produtos (sem medicamentos) da Drogaria Portal para o Google Merchant Center</description>
`;

for (const p of products) {
  const id = p.id;
  const title = (p.name || '').slice(0, 150);
  const rawDesc = p.description || (p.bullets && p.bullets.length ? p.bullets.join('. ') : p.name) || 'Produto de qualidade e procedência garantida.';
  const description = rawDesc.slice(0, 5000);
  const link = `${BASE_URL}/?produto=${id}`;
  const imageLink = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image.startsWith('/') ? '' : '/'}${p.image}`;
  const price = `${Number(p.price).toFixed(2)} BRL`;
  const brand = p.brand || 'Droga Raia';
  const gtin = p.ean ? String(p.ean).replace(/\D/g, '') : '';
  const identifierExists = gtin && gtin.length >= 8 ? 'yes' : 'no';

  xml += `    <item>
      <g:id>${escapeXml(id)}</g:id>
      <g:title>${escapeXml(title)}</g:title>
      <g:description>${escapeXml(description)}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${escapeXml(imageLink)}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${price}</g:price>
      <g:brand>${escapeXml(brand)}</g:brand>
      <g:identifier_exists>${identifierExists}</g:identifier_exists>
`;
  if (identifierExists === 'yes') {
    xml += `      <g:gtin>${escapeXml(gtin)}</g:gtin>\n`;
  }
  if (p.category) {
    xml += `      <g:product_type>${escapeXml(p.category + (p.subcategory ? ' > ' + p.subcategory : ''))}</g:product_type>\n`;
  }
  xml += `    </item>\n`;
}

xml += `  </channel>
</rss>`;

// Ensure public dir exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// 3. Write ONLY public/produtos.xml
fs.writeFileSync('public/produtos.xml', xml, 'utf-8');
console.log(`Successfully generated public/produtos.xml com ${products.length} produtos!`);

// Remove obsolete duplicate files
const obsoleteFiles = [
  'public/feed.xml',
  'public/produtos.tsv',
  'public/produtos.txt',
  'dist/feed.xml',
  'dist/produtos.tsv',
  'dist/produtos.txt'
];
for (const file of obsoleteFiles) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Removido arquivo duplicado: ${file}`);
  }
}

// Also update dist/produtos.xml if dist exists
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/produtos.xml', xml, 'utf-8');
  console.log(`Atualizado dist/produtos.xml`);
}
