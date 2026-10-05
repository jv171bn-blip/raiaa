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

const allProducts: Product[] = deduplicateProducts([
  ...ultraBrasilProducts,
  ...mostBought, ...blackDayProducts, ...weekHighlights, ...favoriteBrands,
  ...fraldasProducts, ...remediosProducts, ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts, ...higieneBucalPersonalProducts,
  ...asianBeauty, ...montaProducts, ...quemComprouTambem, ...similaresVocePode,
  ...hairCareProducts, ...todosProdutosExpandidos,
  viterganZincoProduct, flexoneProduct,
]);

console.log('Total allProducts:', allProducts.length);

// Partition into:
// 1. estaoEmBlack: products with discount, or black badge, or from blackDayProducts
// 2. maisComprados: best sellers (supplements, fraldas, high sales, oral care)
// 3. destaqueDaSemana: luxury skincare, dermocosmetics, hair care, asian beauty

const estaoEmBlack: Product[] = [];
const maisComprados: Product[] = [];
const destaqueDaSemana: Product[] = [];

for (const p of allProducts) {
  const normName = (p.name || '').toLowerCase();
  const normCat = (p.category || '').toLowerCase();
  const normSub = (p.subcategory || '').toLowerCase();

  const hasBlackDiscount = (p.discount && p.discount > 0) || (p.badges && p.badges.includes('Black do Dia'));

  if (hasBlackDiscount) {
    estaoEmBlack.push(p);
  } else if (
    normCat.includes('suplement') || normSub.includes('suplement') ||
    normName.includes('whey') || normName.includes('creatina') || normName.includes('bcaa') ||
    normName.includes('fralda') || normCat.includes('fralda') || normCat.includes('bucal') ||
    normName.includes('colgate') || normName.includes('sensodyne') ||
    normCat.includes('medicamento')
  ) {
    maisComprados.push(p);
  } else {
    destaqueDaSemana.push(p);
  }
}

// Sort each so newly added (ultraId) come FIRST
const sortByNewest = (list: Product[]) => [...list].sort((a, b) => {
  const aNew = Boolean(a.ultraId);
  const bNew = Boolean(b.ultraId);
  if (aNew && !bNew) return -1;
  if (!aNew && bNew) return 1;
  if (aNew && bNew) return (b.ultraId || 0) - (a.ultraId || 0);
  return 0;
});

const sortedBlack = sortByNewest(estaoEmBlack);
const sortedMais = sortByNewest(maisComprados);
const sortedDestaque = sortByNewest(destaqueDaSemana);

console.log('Estão em Black:', sortedBlack.length, '| Novos primeiro:', sortedBlack.slice(0, 3).map(p => p.ultraId));
console.log('Mais Comprados:', sortedMais.length, '| Novos primeiro:', sortedMais.slice(0, 3).map(p => p.ultraId));
console.log('Destaque da Semana:', sortedDestaque.length, '| Novos primeiro:', sortedDestaque.slice(0, 3).map(p => p.ultraId));
console.log('Total distributed:', sortedBlack.length + sortedMais.length + sortedDestaque.length);
