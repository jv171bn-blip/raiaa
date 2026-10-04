import { generateHomepageRotatingData } from '../src/data/trendingProducts';
import {
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  hairCareProducts,
  deduplicateProducts
} from '../src/data/products';
import { montaProducts } from '../src/data/montaOffers';
import { todosProdutosExpandidos } from '../src/data/catalogExpanded';
import fs from 'fs';

const allProducts = deduplicateProducts([
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
  ...hairCareProducts,
  ...todosProdutosExpandidos
]);

const data = generateHomepageRotatingData(allProducts, asianBeauty);

console.log('=== MAIS COMPRADOS ===');
data.maisComprados.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.id}] ${p.name}`);
  console.log(`   IMG: ${p.image}`);
});
