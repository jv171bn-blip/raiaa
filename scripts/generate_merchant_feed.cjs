const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 1. Bundle and extract products
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
console.log(`Total unique products extracted: ${products.length}`);

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

function cleanTsv(text) {
  if (!text) return '';
  return String(text)
    .replace(/[\r\n\t]+/g, ' ')
    .trim();
}

// 2. Generate XML (Google Merchant RSS 2.0)
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Portal Farma Brasil - Catálogo de Produtos</title>
    <link>${BASE_URL}</link>
    <description>Feed oficial de produtos da Portal Farma Brasil para o Google Merchant Center</description>
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

// 3. Generate TSV (Tab-Separated Values)
const tsvHeader = ['id', 'title', 'description', 'price', 'condition', 'link', 'availability', 'image_link', 'brand', 'gtin', 'identifier_exists'].join('\t');
const tsvRows = [tsvHeader];

for (const p of products) {
  const id = p.id;
  const title = cleanTsv((p.name || '').slice(0, 150));
  const rawDesc = p.description || (p.bullets && p.bullets.length ? p.bullets.join('. ') : p.name) || 'Produto de qualidade e procedência garantida.';
  const description = cleanTsv(rawDesc.slice(0, 5000));
  const link = `${BASE_URL}/?produto=${id}`;
  const imageLink = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image.startsWith('/') ? '' : '/'}${p.image}`;
  const price = `${Number(p.price).toFixed(2)} BRL`;
  const brand = cleanTsv(p.brand || 'Droga Raia');
  const gtin = p.ean ? String(p.ean).replace(/\D/g, '') : '';
  const identifierExists = gtin && gtin.length >= 8 ? 'yes' : 'no';

  tsvRows.push([
    id,
    title,
    description,
    price,
    'new',
    link,
    'in_stock',
    imageLink,
    brand,
    gtin,
    identifierExists
  ].join('\t'));
}

const tsv = tsvRows.join('\n');

// Ensure public dir exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Write files to public/
fs.writeFileSync('public/produtos.xml', xml, 'utf-8');
fs.writeFileSync('public/feed.xml', xml, 'utf-8');
fs.writeFileSync('public/produtos.tsv', tsv, 'utf-8');
fs.writeFileSync('public/produtos.txt', tsv, 'utf-8');

console.log('Successfully generated:');
console.log('- public/produtos.xml');
console.log('- public/feed.xml');
console.log('- public/produtos.tsv');
console.log('- public/produtos.txt');

// Also copy to dist if dist exists
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/produtos.xml', xml, 'utf-8');
  fs.writeFileSync('dist/feed.xml', xml, 'utf-8');
  fs.writeFileSync('dist/produtos.tsv', tsv, 'utf-8');
  fs.writeFileSync('dist/produtos.txt', tsv, 'utf-8');
  console.log('Copied to dist/ folder as well.');
}
