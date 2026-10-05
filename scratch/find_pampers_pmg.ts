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
import { getProductSizeTag } from '../src/data/trendingProducts';
import * as fs from 'fs';
import * as path from 'path';

const allProducts: Product[] = deduplicateProducts([
  ...ultraBrasilProducts,
  ...mostBought, ...blackDayProducts, ...weekHighlights, ...favoriteBrands,
  ...fraldasProducts, ...remediosProducts, ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts, ...higieneBucalPersonalProducts,
  ...asianBeauty, ...montaProducts, ...quemComprouTambem, ...similaresVocePode,
  ...hairCareProducts, ...todosProdutosExpandidos,
  viterganZincoProduct, flexoneProduct,
]);

const pampers = allProducts.filter(p => {
  const n = (p.name || '').toLowerCase();
  const b = (p.brand || '').toLowerCase();
  return (n.includes('pampers') || b.includes('pampers')) && n.includes('fralda');
});

console.log('Total Pampers Diapers:', pampers.length);

const pList: Product[] = [];
const mList: Product[] = [];
const gList: Product[] = [];

pampers.forEach(p => {
  const size = getProductSizeTag(p);
  const localImgPath = p.image.startsWith('/') ? path.join(process.cwd(), 'public', p.image) : '';
  const fileExists = localImgPath ? fs.existsSync(localImgPath) : false;
  const fileSize = fileExists ? fs.statSync(localImgPath).size : 0;
  console.log(`[ID: ${p.id}] Size: ${size} | Price: R$ ${p.price} | ImgExists: ${fileExists} (${fileSize}b) | Img: ${p.image} | Name: ${p.name}`);
  if (size === 'P') pList.push(p);
  if (size === 'M') mList.push(p);
  if (size === 'G') gList.push(p);
});

console.log(`Sizes found -> P: ${pList.length}, M: ${mList.length}, G: ${gList.length}`);
