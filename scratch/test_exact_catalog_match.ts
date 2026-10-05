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

console.log('Total allProducts with novosProdutosCatalogo:', allProducts.length);

const publicFiles = new Set(fs.readdirSync('public/products'));

function findItem(nameQuery: string, brandQuery?: string): Product | undefined {
  const q = nameQuery.toLowerCase();
  const b = brandQuery ? brandQuery.toLowerCase() : '';

  // 1. Exact match with local image
  const match = allProducts.find(p => {
    const pName = (p.name || '').toLowerCase();
    const pBrand = (p.brand || '').toLowerCase();
    const hasName = pName.includes(q);
    const hasBrand = b ? pBrand.includes(b) : true;
    return hasName && hasBrand && p.image.startsWith('/products/');
  });

  if (match) return match;

  // 2. Any match with local image
  return allProducts.find(p => {
    const pName = (p.name || '').toLowerCase();
    return pName.includes(q) && p.image.startsWith('/products/');
  });
}

// 1. Mais Comprados
const maisCompradosTargets = [
  'dorflex relaxante',
  'neosaldina analgésico',
  'novalgina dipirona 1g',
  'tylenol 750mg',
  'buscopan composto',
  'torsilax relaxante',
  'benegrip multi',
  'omeprazol 20mg',
  'losartana potássica 50mg',
  'vick vaporub',
  'enterogermina 10 frascos',
  'hyabak 0,15%',
  'cicaplast baume b5+',
  'cerave pele seca',
  'pampers confort sec tamanho m',
  'rexona men sem perfume aerosol'
];

console.log('\n--- 1. MAIS COMPRADOS ---');
for (const t of maisCompradosTargets) {
  const p = findItem(t);
  if (p) {
    const filename = p.image.replace('/products/', '');
    console.log(`OK: "${t}" -> [${p.id}] "${p.name}" | Img: "${p.image}" | Exists: ${publicFiles.has(filename)}`);
  } else {
    console.log(`MISSING: "${t}"`);
  }
}

// 2. Black do Dia (Mulher & Skincare & Cuidados)
const blackDoDiaTargets = [
  'eucerin dual anti-pigment',
  'fusion water magic',
  'bioré uv aqua rich',
  'principia vitamina c',
  'principia niacinamida',
  'principia gl-02',
  'hyalu b5',
  'elseve glycolic gloss',
  'wella professionals oil reflections',
  'truss night spa',
  'always platinum noturno',
  'dermacyd femina',
  'carmed fini bananas',
  'centrum mulher'
];

console.log('\n--- 2. BLACK DO DIA (MULHER & SKINCARE) ---');
for (const t of blackDoDiaTargets) {
  const p = findItem(t);
  if (p) {
    const filename = p.image.replace('/products/', '');
    console.log(`OK: "${t}" -> [${p.id}] "${p.name}" | Img: "${p.image}" | Exists: ${publicFiles.has(filename)}`);
  } else {
    console.log(`MISSING: "${t}"`);
  }
}

// 3. Destaques da Semana (Homem & Saúde & Equipamentos)
const destaquesSemanaTargets = [
  'gillette mach3 recarregável',
  'carga para aparelho gillette mach3',
  'gillette foamy pele sensível',
  'doctar plus',
  'cetoconazol shampoo',
  'tadalafila',
  'cialis diário 5mg',
  'freestyle libre 2 plus',
  'omron hem-7122',
  'accu-chek guide me',
  'accu-chek guide 50 tiras',
  'termômetro digital clínico',
  'g-tech oled',
  'luftal gel caps'
];

console.log('\n--- 3. DESTAQUES DA SEMANA (HOMEM & EQUIPAMENTOS) ---');
for (const t of destaquesSemanaTargets) {
  const p = findItem(t);
  if (p) {
    const filename = p.image.replace('/products/', '');
    console.log(`OK: "${t}" -> [${p.id}] "${p.name}" | Img: "${p.image}" | Exists: ${publicFiles.has(filename)}`);
  } else {
    console.log(`MISSING: "${t}"`);
  }
}

// 4. Marcas Favoritas (Bebê & Cuidados da Família)
const marcasFavoritasTargets = [
  'pampers confort sec tamanho g',
  'pampers confort sec tamanho m',
  'pampers pants ajuste total tamanho m',
  'pampers pants ajuste total tamanho g',
  'huggies natural care tamanho m',
  'huggies natural care tamanho g',
  'bepantol baby creme preventivo',
  'hipoglós amêndoas',
  'desitin maximum strength',
  'aptamil profutura 1',
  'nan supreme 1',
  'ninho fases 1+',
  'mucilon milho',
  'sensodyne limpeza profunda'
];

console.log('\n--- 4. MARCAS FAVORITAS (BEBÊ & FAMÍLIA) ---');
for (const t of marcasFavoritasTargets) {
  const p = findItem(t);
  if (p) {
    const filename = p.image.replace('/products/', '');
    console.log(`OK: "${t}" -> [${p.id}] "${p.name}" | Img: "${p.image}" | Exists: ${publicFiles.has(filename)}`);
  } else {
    console.log(`MISSING: "${t}"`);
  }
}

// 5. Beleza Asiática
const belezaAsiaticaTargets = [
  'bioré uv aqua rich',
  'hada labo gokujyun',
  'beauty of joseon relief sun',
  'cosrx advanced snail',
  'medicube zero pore pad',
  'skin1004 madagascar centella',
  'curél peles secas',
  'mise en scène perfect serum magic',
  'mise en scène perfect serum styling'
];

console.log('\n--- 5. BELEZA ASIÁTICA ---');
for (const t of belezaAsiaticaTargets) {
  const p = findItem(t);
  if (p) {
    const filename = p.image.replace('/products/', '');
    console.log(`OK: "${t}" -> [${p.id}] "${p.name}" | Img: "${p.image}" | Exists: ${publicFiles.has(filename)}`);
  } else {
    console.log(`MISSING: "${t}"`);
  }
}
