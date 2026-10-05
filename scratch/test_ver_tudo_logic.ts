import { deduplicateProducts } from '../src/data/products';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
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
  quemComprouTambem,
  similaresVocePode,
  todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
} from '../src/data/products';
import { montaProducts } from '../src/data/montaOffers';

const allProducts = deduplicateProducts([
  ...ultraBrasilProducts,
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
  ...todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
]);

console.log('--- ALL PRODUCTS TEST ---');
console.log('Total catalog count:', allProducts.length);
console.log('Total ultraBrasilProducts count:', ultraBrasilProducts.length);

// Check if allProducts has ultraBrasilProducts first
const first338 = allProducts.slice(0, 338);
const allFirstAreUltra = first338.every(p => Boolean(p.ultraId));
console.log('Are first 338 products in allProducts from Ultra Brasil?', allFirstAreUltra);

// Test sort logic from AllProductsPage:
const sortedLatest = [...allProducts].sort((a, b) => {
  const aIsNew = Boolean(a.ultraId);
  const bIsNew = Boolean(b.ultraId);
  if (aIsNew && !bIsNew) return -1;
  if (!aIsNew && bIsNew) return 1;
  if (aIsNew && bIsNew) {
    return (b.ultraId || 0) - (a.ultraId || 0);
  }
  return 0;
});

console.log('Sorted Latest - First 5 products:');
sortedLatest.slice(0, 5).forEach((p, i) => {
  console.log(`  ${i + 1}. [ID: ${p.id}, UltraID: ${p.ultraId}] ${p.name} - R$ ${p.price}`);
});

const withUltra = allProducts.filter(p => Boolean(p.ultraId));
console.log('Count of products with ultraId in allProducts:', withUltra.length);
console.log('Count of ultraBrasilProducts array:', ultraBrasilProducts.length);

const nonUltraInTop = sortedLatest.slice(0, withUltra.length).filter(p => !p.ultraId);
console.log('Non-ultra products in top slots:', nonUltraInTop.length);

const ultraInTop = sortedLatest.slice(0, withUltra.length).filter(p => Boolean(p.ultraId));
console.log('Ultra products in top slots:', ultraInTop.length);

console.log('Sorted Latest: 100% of top', withUltra.length, 'products are newly added Ultra Brasil products?', ultraInTop.length === withUltra.length);
console.log('Product right after last ultra:', sortedLatest[withUltra.length]?.name, 'UltraID:', sortedLatest[withUltra.length]?.ultraId);
