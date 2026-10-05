import fs from 'fs';
import path from 'path';
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
import { generateHomepageRotatingData } from '../src/data/trendingProducts';

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
  ...todosProdutosExpandidos,
  ...novosProdutosCatalogo,
  viterganZincoProduct,
  flexoneProduct,
]);

const data = generateHomepageRotatingData(allProducts, asianBeauty);
const publicFiles = new Set(fs.readdirSync('public/products'));

function inspectList(list: Product[]) {
  return list.map((p, i) => {
    const filename = p.image ? p.image.replace('/products/', '') : '';
    const exists = p.image && p.image.startsWith('/products/') ? publicFiles.has(filename) : false;
    const isRemote = p.image && p.image.startsWith('http');
    return {
      index: i + 1,
      id: p.id,
      name: p.name,
      brand: p.brand,
      category: p.category,
      image: p.image,
      isLocal: Boolean(exists),
      isRemote: Boolean(isRemote),
      filename,
    };
  });
}

const report = {
  maisComprados: inspectList(data.maisComprados),
  blackDoDia: inspectList(data.blackDoDia),
  destaquesSemana: inspectList(data.destaquesSemana),
  marcasFavoritas: inspectList(data.marcasFavoritas),
  belezaAsiatica: inspectList(data.belezaAsiatica),
};

fs.writeFileSync('scratch/homepage_report.json', JSON.stringify(report, null, 2));
console.log('Homepage report generated successfully!');
