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

/**
 * Catálogo canônico e centralizado de todos os produtos do sistema.
 * Aplica deduplicação rigorosa por ID e por nome normalizado para
 * garantir que nenhum produto duplicado exista na aplicação.
 */
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
  viterganZincoProduct,
  flexoneProduct,
]);

export { deduplicateProducts };
