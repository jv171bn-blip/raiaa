const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 1. Bundle and load existing store products
esbuild.buildSync({
  entryPoints: ['src/data/allProducts.ts'],
  outfile: 'scratch/existing_products_bundle.cjs',
  bundle: true,
  platform: 'node',
  format: 'cjs'
});
const { allProducts } = require('./existing_products_bundle.cjs');
console.log(`Loaded ${allProducts.length} existing store products.`);

// Helper to normalize names for deduplication
function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

const existingNormalizedNames = new Set(allProducts.map(p => normalizeText(p.name)));
console.log(`Unique normalized existing names: ${existingNormalizedNames.size}`);

function extractBrand(name) {
  const n = name.toLowerCase();
  if (n.includes('la roche') || n.includes('anthelios') || n.includes('effaclar')) return 'La Roche-Posay';
  if (n.includes('principia')) return 'Principia';
  if (n.includes('isdin')) return 'ISDIN';
  if (n.includes('eucerin')) return 'Eucerin';
  if (n.includes('vichy') || n.includes('dercos')) return 'Vichy';
  if (n.includes('cerave')) return 'CeraVe';
  if (n.includes('cetaphil')) return 'Cetaphil';
  if (n.includes('bioderma')) return 'Bioderma';
  if (n.includes('avene') || n.includes('avène')) return 'Avène';
  if (n.includes('darrow') || n.includes('doctar') || n.includes('actine')) return 'Darrow';
  if (n.includes('neutrogena')) return 'Neutrogena';
  if (n.includes('nivea')) return 'Nivea';
  if (n.includes('loreal') || n.includes('l’oreal') || n.includes('l\'oréal') || n.includes('elseve')) return "L'Oréal Paris";
  if (n.includes('wella') || n.includes('invigo') || n.includes('oil reflections')) return 'Wella Professionals';
  if (n.includes('braé') || n.includes('brae')) return 'Braé';
  if (n.includes('truss')) return 'TRUSS';
  if (n.includes('kérastase') || n.includes('kerastase')) return 'Kérastase';
  if (n.includes('redken')) return 'Redken';
  if (n.includes('senscience')) return 'Senscience';
  if (n.includes('lowell')) return 'Lowell';
  if (n.includes('inoar')) return 'Inoar';
  if (n.includes('huggies')) return 'Huggies';
  if (n.includes('pampers')) return 'Pampers';
  if (n.includes('dove')) return 'Dove';
  if (n.includes('rexona')) return 'Rexona';
  if (n.includes('colgate')) return 'Colgate';
  if (n.includes('oral-b')) return 'Oral-B';
  if (n.includes('listerine')) return 'Listerine';
  if (n.includes('closeup') || n.includes('close up')) return 'Close Up';
  if (n.includes('sensodyne')) return 'Sensodyne';
  if (n.includes('max titanium')) return 'Max Titanium';
  if (n.includes('probiótica') || n.includes('probiotica')) return 'Probiótica';
  if (n.includes('puravida') || n.includes('pura vida')) return 'Puravida';
  if (n.includes('growth')) return 'Growth Supplements';
  if (n.includes('integralmédica') || n.includes('integralmedica')) return 'IntegralMédica';
  if (n.includes('nutren')) return 'Nutren';
  if (n.includes('aptamil')) return 'Aptamil';
  if (n.includes('nan supreme') || n.includes('nan pro')) return 'NAN';
  if (n.includes('ninho')) return 'Ninho';
  if (n.includes('mucilon')) return 'Mucilon';
  if (n.includes('australian gold')) return 'Australian Gold';
  if (n.includes('cenoura & bronze') || n.includes('cenoura e bronze')) return 'Cenoura & Bronze';
  if (n.includes('sundown')) return 'Sundown';
  if (n.includes('needs')) return 'Needs';
  if (n.includes('elizavecca')) return 'Elizavecca';
  if (n.includes('cosrx')) return 'COSRX';
  if (n.includes('beauty of joseon')) return 'Beauty of Joseon';
  if (n.includes('skin1004')) return 'Skin1004';
  if (n.includes('medicube')) return 'Medicube';
  if (n.includes('hada labo')) return 'Hada Labo';
  if (n.includes('bioré') || n.includes('biore')) return 'Bioré';
  if (n.includes('alpecin')) return 'Alpecin';
  if (n.includes('pantene')) return 'Pantene';
  if (n.includes('tresemmé') || n.includes('tresemme')) return 'TRESemmé';
  if (n.includes('seda')) return 'Seda';
  if (n.includes('siàge') || n.includes('siage') || n.includes('eudora')) return 'Eudora';
  if (n.includes('widi care')) return 'Widi Care';
  if (n.includes('lola from rio') || n.includes('lola')) return 'Lola Cosmetics';
  if (n.includes('bio extratus')) return 'Bio Extratus';
  if (n.includes('imecap')) return 'Imecap';
  if (n.includes('lavitan')) return 'Lavitan';
  if (n.includes('vitalin')) return 'Vitalin';
  if (n.includes('g-tech')) return 'G-Tech';
  if (n.includes('omron')) return 'Omron';
  if (n.includes('ketocal')) return 'KetoCal';
  return 'Droga Raia';
}

function inferCategorySubcategory(name) {
  const n = name.toLowerCase();
  if (n.includes('pet') || n.includes('cão') || n.includes('gato') || n.includes('cães')) {
    return { category: 'Pet', subcategory: 'Higiene e Cuidados Pet' };
  }
  if (n.includes('fralda') || n.includes('toalha umedecida') || n.includes('lenço umedecido') || n.includes('mamadeira') || n.includes('chupeta') || n.includes('bebê') || n.includes('bebe') || n.includes('infantil') || n.includes('desitin') || n.includes('hipoglós') || n.includes('hipoglos')) {
    return { category: 'Mamãe e Bebê', subcategory: 'Cuidados com o Bebê' };
  }
  if (n.includes('fórmula') || n.includes('formula') || n.includes('aptamil') || n.includes('nan ') || n.includes('ninho') || n.includes('mucilon') || n.includes('ketocal')) {
    return { category: 'Mamãe e Bebê', subcategory: 'Alimentação Infantil' };
  }
  if (n.includes('protetor solar') || n.includes('bloqueador solar') || n.includes('autobronzeador') || n.includes('bronzeador') || n.includes('fps ')) {
    return { category: 'Dermocosméticos', subcategory: 'Proteção Solar' };
  }
  if (n.includes('sérum') || n.includes('serum') || n.includes('anti-idade') || n.includes('antirrugas') || n.includes('retinol') || n.includes('vitamina c') || n.includes('ácido hialurônico') || n.includes('acido hialuronico') || n.includes('clareador') || n.includes('antiacne') || n.includes('limpeza facial') || n.includes('gel de limpeza') || n.includes('água micelar') || n.includes('tônico facial')) {
    return { category: 'Dermocosméticos', subcategory: 'Cuidados Faciais' };
  }
  if (n.includes('creatina') || n.includes('whey') || n.includes('proteína') || n.includes('bcaa') || n.includes('glutamina') || n.includes('termogênico') || n.includes('pré-treino') || n.includes('pre-treino') || n.includes('hipercalórico') || n.includes('colágeno') || n.includes('colageno') || n.includes('ômega 3') || n.includes('omega 3') || n.includes('multivitamínico') || n.includes('vitamina') || n.includes('magnésio') || n.includes('zinco') || n.includes('melatonina')) {
    return { category: 'Vitaminas e Suplementos', subcategory: 'Suplementos Alimentares' };
  }
  if (n.includes('shampoo') || n.includes('condicionador') || n.includes('máscara capilar') || n.includes('mascara capilar') || n.includes('ampola') || n.includes('leave-in') || n.includes('óleo capilar') || n.includes('oleo capilar') || n.includes('tonico capilar') || n.includes('anticaspa') || n.includes('antiqueda') || n.includes('cabelo')) {
    return { category: 'Cabelos', subcategory: 'Tratamento Capilar' };
  }
  if (n.includes('creme dental') || n.includes('gel dental') || n.includes('escova dental') || n.includes('fio dental') || n.includes('enxaguante bucal') || n.includes('listerine') || n.includes('colgate') || n.includes('sensodyne')) {
    return { category: 'Higiene Pessoal', subcategory: 'Higiene Bucal' };
  }
  if (n.includes('desodorante') || n.includes('antitranspirante') || n.includes('sabonete') || n.includes('hidratante corporal') || n.includes('loção corporal')) {
    return { category: 'Higiene Pessoal', subcategory: 'Cuidados Corporais' };
  }
  if (n.includes('batom') || n.includes('gloss') || n.includes('rímel') || n.includes('rimel') || n.includes('base facial') || n.includes('corretivo') || n.includes('pó compacto') || n.includes('blush') || n.includes('delineador') || n.includes('sombra')) {
    return { category: 'Beleza', subcategory: 'Maquiagem' };
  }
  if (n.includes('perfume') || n.includes('colônia') || n.includes('colonia') || n.includes('eau de parfum') || n.includes('eau de toilette') || n.includes('body splash')) {
    return { category: 'Beleza e Perfumaria', subcategory: 'Perfumaria' };
  }
  return { category: 'Beleza e Perfumaria', subcategory: 'Cuidados Diários' };
}

function extractSize(name) {
  const match = name.match(/([0-9]+(?:\.[0-9]+)?\s*(?:ml|l|g|kg|mg|un|unidades|cápsulas|capsulas|doses|comprimidos))/i);
  return match ? match[1].trim() : 'Unidade';
}

module.exports = {
  existingNormalizedNames,
  normalizeText,
  extractBrand,
  inferCategorySubcategory,
  extractSize
};
