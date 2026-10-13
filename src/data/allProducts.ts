import {
  Product,
  deduplicateProducts,
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  hairCareProducts,
  asianBeauty,
  quemComprouTambem,
  similaresVocePode,
  todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
} from './products';
import { suggestionProducts } from './suggestionsData';
import { ultraBrasilProducts } from './ultraBrasilProducts';
import { novosKitsCarvalhoUltra } from './novosKitsCarvalhoUltra';
import { novosProdutosCatalogo } from './novosProdutosCatalogo';
import { montaProducts } from './montaOffers';
import { carvalhoCatalog } from './carvalhoCatalog';

/**
 * Catálogo canônico e centralizado de todos os produtos do sistema.
 * Aplica deduplicação rigorosa por ID e por nome normalizado para
 * garantir que nenhum produto duplicado exista na aplicação.
 */
/**
 * Normaliza qualquer produto com preço ou preço antigo acima de R$ 1000 para a faixa de
 * R$ 950 a R$ 999 com centavos quebrados.
 */
export function normalizePriceCeiling(product: Product): Product {
  if (!product) return product;
  const p = { ...product };
  const hash = Math.abs(Number(p.id) || 0);
  const centsList = [0.49, 0.79, 0.89, 0.90, 0.95, 0.85, 0.70, 0.65, 0.50, 0.80];
  const cents = centsList[hash % centsList.length];

  if (p.price >= 1000) {
    const intPart = 950 + (hash % 49); // 950 a 998
    p.price = Number((intPart + cents).toFixed(2));
  }

  if (p.oldPrice && p.oldPrice >= 1000) {
    if (p.price < 950) {
      const intPart = 950 + ((hash + 7) % 49);
      p.oldPrice = Number((intPart + cents).toFixed(2));
      if (p.oldPrice <= p.price) {
        p.oldPrice = Number(Math.min(999.90, p.price + 50 + cents).toFixed(2));
      }
    } else {
      if (p.price < 995) {
        p.oldPrice = 998.90;
      } else {
        delete p.oldPrice;
      }
    }
    if (p.oldPrice && p.oldPrice > p.price) {
      p.discount = Math.round((1 - p.price / p.oldPrice) * 100);
      if (p.badges) {
        p.badges = p.badges.map(b => b.includes('% OFF') ? `${p.discount}% OFF` : b);
      }
    } else {
      delete p.oldPrice;
      delete p.discount;
      if (p.badges) {
        p.badges = p.badges.filter(b => !b.includes('% OFF'));
      }
    }
  }

  return p;
}

export const allProducts: Product[] = deduplicateProducts([
  ...ultraBrasilProducts,
  ...novosKitsCarvalhoUltra,
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
  ...novosProdutosCatalogo,
  ...carvalhoCatalog,
  viterganZincoProduct,
  flexoneProduct,
]).map(normalizePriceCeiling);

export { deduplicateProducts };
