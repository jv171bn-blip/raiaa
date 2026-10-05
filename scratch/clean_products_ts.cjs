const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// 1. Update viterganZincoProduct and flexoneProduct
content = content.replace(
  /export const viterganZincoProduct: Product = \{[\s\S]*?\n\};/,
  `export const viterganZincoProduct: Product = {
  id: 140081,
  name: "Polivitamínico Vitergan Zinco PL 30 Comprimidos",
  size: "30 Comprimidos",
  brand: "Vitergan Zinco",
  category: "Vida Saudável",
  subcategory: "Vitaminas",
  price: 119.90,
  oldPrice: 139.90,
  image: "/products/vitergan_zinco_30comp.jpg",
  bullets: [
    "Suplemento vitamínico e mineral com ação antioxidante.",
    "Combate os radicais livres que podem prejudicar o funcionamento dos órgãos.",
    "Auxilia na proteção celular e no bem-estar geral.",
  ],
  description:
    "O Vitergan Zinco Pl é um suplemento vitamínico e mineral antioxidante, composto por vitaminas e minerais que atuam contra radicais livres.",
  howToUse:
    "Tomar 1 comprimido ao dia com água junto a uma das refeições principais.",
  composition:
    "Vitaminas A, C, E, Zinco Quelato e Minerais Antioxidantes.",
  warnings: [
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Este produto não é um medicamento.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "140081",
  ean: "7896226109350",
};`
);

content = content.replace(
  /export const flexoneProduct: Product = \{[\s\S]*?\n\};/,
  `export const flexoneProduct: Product = {
  id: 912060,
  name: "Di-Magnésio Malato 500mg bwell 60 Cápsulas",
  size: "60 Cápsulas",
  brand: "bwell",
  category: "Vida Saudável",
  subcategory: "Minerais",
  price: 64.90,
  oldPrice: 79.90,
  image: "/products/dimagnesio_malato_bwell.webp",
  bullets: [
    "Di-Magnésio Malato quelato com alta taxa de absorção.",
    "Auxilia no funcionamento muscular e no metabolismo energético.",
    "Fórmula desenvolvida pela linha exclusiva bwell.",
  ],
  description:
    "Suplemento mineral de Di-Magnésio Malato com alta biodisponibilidade para apoio muscular e energia no dia a dia.",
  howToUse:
    "Ingerir 2 cápsulas ao dia com um copo de água, preferencialmente antes das refeições.",
  composition:
    "Dimagnésio malato, antiumectante dióxido de silício e cápsula vegetal.",
  warnings: [
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "912060",
  ean: "7891058021111",
};`
);

// 2. Now clean the arrays:
// mostBought, blackDayProducts, weekHighlights, favoriteBrands, quemComprouTambem,
// similaresVocePode, hairCareProducts, remediosProducts, dermocosmeticosProducts,
// vitaminasSuplementosProducts, higieneBucalPersonalProducts
const arraysToClean = [
  'mostBought',
  'blackDayProducts',
  'weekHighlights',
  'favoriteBrands',
  'quemComprouTambem',
  'similaresVocePode',
  'hairCareProducts',
  'remediosProducts',
  'dermocosmeticosProducts',
  'vitaminasSuplementosProducts',
  'higieneBucalPersonalProducts'
];

function cleanArray(arrayName, sourceText) {
  const startRegex = new RegExp(`export const ${arrayName}: Product\\[\\] = \\[`);
  const match = sourceText.match(startRegex);
  if (!match) return sourceText;

  const startIdx = match.index;
  const endIdx = sourceText.indexOf('];', startIdx);
  if (endIdx === -1) return sourceText;

  const block = sourceText.slice(startIdx, endIdx);
  // Split products inside this block
  // Items start with `  {`
  const items = block.split(/(?=\n  \{\s*\n\s*id:)/g);
  const cleanItems = items.filter(item => {
    if (!item.includes('id:')) return true; // header
    if (item.includes('raiadrogasil.io')) return false; // REMOVE!
    return true;
  });

  const newBlock = cleanItems.join('');
  return sourceText.slice(0, startIdx) + newBlock + sourceText.slice(endIdx);
}

for (const arr of arraysToClean) {
  content = cleanArray(arr, content);
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Finished updating products.ts');
