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
 * Normaliza qualquer produto com preço acima de R$ 1000 para a faixa de
 * R$ 950 a R$ 999 com centavos quebrados.
 */
function normalizePriceCeiling(product: Product): Product {
  if (product && product.price > 1000) {
    const hash = Math.abs(Number(product.id) || 0);
    const centsList = [0.49, 0.79, 0.89, 0.90, 0.95, 0.85, 0.70, 0.65, 0.50, 0.80];
    const cents = centsList[hash % centsList.length];
    const intPart = 950 + (hash % 49); // 950 a 998
    const newPrice = Number((intPart + cents).toFixed(2));
    return {
      ...product,
      price: newPrice,
    };
  }
  return product;
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
