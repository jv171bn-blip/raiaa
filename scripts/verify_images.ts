import fs from 'fs';
import path from 'path';
import {
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
  healthSpace,
  Product,
  viterganZincoProduct,
  flexoneProduct,
  quemComprouTambem,
  similaresVocePode,
  hairCareProducts,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  deduplicateProducts,
} from '../src/data/products';
import { montaProducts } from '../src/data/montaOffers';
import { todosProdutosExpandidos } from '../src/data/catalogExpanded';
import { generateHomepageRotatingData, isAllowedOnHomepage } from '../src/data/trendingProducts';

const suggestionProducts: Product[] = [];

const allProducts: Product[] = deduplicateProducts([
  ...mostBought,
  ...blackDayProducts,
  ...weekHighlights,
  ...favoriteBrands,
  ...fraldasProducts,
  ...remediosProducts,
  ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts,
  ...higieneBucalPersonalProducts,
  ...asianBeauty,
  ...montaProducts,
  ...quemComprouTambem,
  ...similaresVocePode,
  ...hairCareProducts,
  ...suggestionProducts,
  ...todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
]);

console.log('Total allProducts:', allProducts.length);

const publicDir = path.join(process.cwd(), 'public');

let missingCount = 0;
const missingList: any[] = [];
const externalImages: any[] = [];

for (const p of allProducts) {
  if (!p.image) {
    missingCount++;
    missingList.push({ id: p.id, name: p.name, reason: 'empty image' });
    continue;
  }
  if (p.image.startsWith('http://') || p.image.startsWith('https://')) {
    externalImages.push({ id: p.id, name: p.name, image: p.image });
  } else {
    const clean = p.image.startsWith('/') ? p.image.slice(1) : p.image;
    const fullPath = path.join(publicDir, clean);
    if (!fs.existsSync(fullPath)) {
      missingCount++;
      missingList.push({ id: p.id, name: p.name, image: p.image });
    }
  }
}

console.log('Missing / invalid local image files:', missingCount);
if (missingList.length > 0) {
  console.log('Missing list:', JSON.stringify(missingList, null, 2));
}

console.log('External images count:', externalImages.length);
if (externalImages.length > 0) {
  console.log('First 5 external images:', JSON.stringify(externalImages.slice(0, 5), null, 2));
}

// Find all Pampers diapers
console.log('\n--- Pampers Products ---');
const pampers = allProducts.filter(p => (p.name || '').toLowerCase().includes('pampers'));
pampers.forEach(p => {
  console.log(`ID: ${p.id} | Name: "${p.name}" | Size: "${p.size}" | Image: "${p.image}"`);
});

// Test homepage generation 10 times to see how often Pampers appears
console.log('\n--- Testing Homepage Generation (10 runs) ---');
for (let run = 1; run <= 10; run++) {
  const hp = generateHomepageRotatingData(allProducts, asianBeauty);
  const allHpProds = [
    ...hp.maisComprados,
    ...hp.blackDoDia,
    ...hp.destaquesSemana,
    ...hp.marcasFavoritas,
    ...hp.belezaAsiatica,
  ];

  const pampersDiapers = allHpProds.filter(p => {
    const n = (p.name || '').toLowerCase();
    return n.includes('pampers') && (n.includes('fralda') || n.includes('pants'));
  });

  const maisCompradosPampers = hp.maisComprados.filter(p => {
    const n = (p.name || '').toLowerCase();
    return n.includes('pampers') && (n.includes('fralda') || n.includes('pants'));
  });

  console.log(`Run ${run}: Total HP products: ${allHpProds.length} | Total Pampers diapers: ${pampersDiapers.length} | In Mais Comprados: ${maisCompradosPampers.length}`);
}
