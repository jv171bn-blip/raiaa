import fs from 'fs';
import {
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
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
  Product,
} from '../src/data/products';
import { montaProducts } from '../src/data/montaOffers';
import { todosProdutosExpandidos } from '../src/data/catalogExpanded';
import { novosProdutosCatalogo } from '../src/data/novosProdutosCatalogo';

const allExisting: Product[] = deduplicateProducts([
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
  ...novosProdutosCatalogo,
  viterganZincoProduct,
  flexoneProduct,
]);

console.log('Total real existing products in codebase:', allExisting.length);

const matched = JSON.parse(fs.readFileSync('scratch/matched_user_products.json', 'utf8'));

function normalize(s: string) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&#8211;|&amp;|–|-|\+/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const matches: any[] = [];
for (const m of matched) {
  const sp = m.storeProduct;
  const sPrice = parseFloat(sp.prices.price) / 100;
  const sRegPrice = parseFloat(sp.prices.regular_price) / 100;
  const normS = normalize(sp.name);
  const wordsS = normS.split(' ').filter(w => w.length >= 3);

  for (const ex of allExisting) {
    const normEx = normalize(ex.name);
    // Exact or near exact match
    if (normS === normEx) {
      matches.push({
        type: 'exact',
        existingId: ex.id,
        existingName: ex.name,
        existingPrice: ex.price,
        newPrice: sPrice,
        newOldPrice: sRegPrice > sPrice ? sRegPrice : undefined,
        storeName: sp.name,
      });
      break;
    }
    // High overlap
    const wordsEx = normEx.split(' ').filter(w => w.length >= 3);
    const shared = wordsS.filter(w => wordsEx.includes(w));
    if (shared.length >= 4 && shared.length >= wordsS.length * 0.7 && shared.length >= wordsEx.length * 0.7) {
      matches.push({
        type: 'high_overlap',
        existingId: ex.id,
        existingName: ex.name,
        existingPrice: ex.price,
        newPrice: sPrice,
        newOldPrice: sRegPrice > sPrice ? sRegPrice : undefined,
        storeName: sp.name,
      });
      break;
    }
  }
}

console.log(`Found ${matches.length} matches with existing products!`);
matches.forEach((m, idx) => {
  console.log(`${idx + 1}. [ID: ${m.existingId}] "${m.existingName}"`);
  console.log(`   Our Price: R$ ${m.existingPrice} -> Ultra Price: R$ ${m.newPrice} (old: ${m.newOldPrice || 'none'})`);
});

fs.writeFileSync('scratch/existing_matches_to_update.json', JSON.stringify(matches, null, 2));
