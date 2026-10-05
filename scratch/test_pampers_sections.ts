import { deduplicateProducts } from '../src/data/products';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import {
  mostBought, blackDayProducts, weekHighlights, favoriteBrands,
  asianBeauty, fraldasProducts, remediosProducts, dermocosmeticosProducts,
  vitaminasSuplementosProducts, higieneBucalPersonalProducts, hairCareProducts,
  quemComprouTambem, similaresVocePode, todosProdutosExpandidos,
  viterganZincoProduct, flexoneProduct, Product
} from '../src/data/products';
import { montaProducts } from '../src/data/montaOffers';
import { getProductSizeTag, shuffleArray } from '../src/data/trendingProducts';

const allProducts: Product[] = deduplicateProducts([
  ...ultraBrasilProducts,
  ...mostBought, ...blackDayProducts, ...weekHighlights, ...favoriteBrands,
  ...fraldasProducts, ...remediosProducts, ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts, ...higieneBucalPersonalProducts,
  ...asianBeauty, ...montaProducts, ...quemComprouTambem, ...similaresVocePode,
  ...hairCareProducts, ...todosProdutosExpandidos,
  viterganZincoProduct, flexoneProduct,
]);

function isAllowedOnHomepage(p: Product): boolean {
  if (!p || !p.name) return false;
  const name = (p.name || '').toLowerCase();
  const cat = (p.category || '').toLowerCase();
  const sub = (p.subcategory || '').toLowerCase();
  const isDiaper = name.includes('fralda') || cat.includes('fralda') || sub.includes('fralda');
  if (isDiaper) {
    const size = getProductSizeTag(p);
    return size === 'P' || size === 'M' || size === 'G';
  }
  return true;
}

const source = allProducts.filter(isAllowedOnHomepage);

function pickPampersSizes(pool: Product[], usedIds: Set<number>): Product[] {
  const pampers = pool.filter(p => {
    const n = (p.name || '').toLowerCase();
    const b = (p.brand || '').toLowerCase();
    return (n.includes('pampers') || b.includes('pampers')) && n.includes('fralda');
  });

  const pItems = pampers.filter(p => getProductSizeTag(p) === 'P');
  const mItems = pampers.filter(p => getProductSizeTag(p) === 'M');
  const gItems = pampers.filter(p => getProductSizeTag(p) === 'G');

  const picked: Product[] = [];

  const availableP = pItems.filter(p => !usedIds.has(p.id));
  const chosenP = shuffleArray(availableP.length ? availableP : pItems)[0];
  if (chosenP) {
    picked.push(chosenP);
    usedIds.add(chosenP.id);
  }

  const availableM = mItems.filter(p => !usedIds.has(p.id));
  const chosenM = shuffleArray(availableM.length ? availableM : mItems)[0];
  if (chosenM) {
    picked.push(chosenM);
    usedIds.add(chosenM.id);
  }

  const availableG = gItems.filter(p => !usedIds.has(p.id));
  const chosenG = shuffleArray(availableG.length ? availableG : gItems)[0];
  if (chosenG) {
    picked.push(chosenG);
    usedIds.add(chosenG.id);
  }

  return picked;
}

const used = new Set<number>();
const maisPampers = pickPampersSizes(source, used);
const destaquePampers = pickPampersSizes(source, used);

console.log('=== PAMPERS IN MAIS COMPRADOS ===');
maisPampers.forEach(p => {
  console.log(`[Size: ${getProductSizeTag(p)}] ${p.name} - R$ ${p.price} (Img: ${p.image})`);
});

console.log('\n=== PAMPERS IN DESTAQUE DA SEMANA ===');
destaquePampers.forEach(p => {
  console.log(`[Size: ${getProductSizeTag(p)}] ${p.name} - R$ ${p.price} (Img: ${p.image})`);
});
