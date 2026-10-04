const fs = require('fs');

// 1. Updates for novosProdutosCatalogo.ts
const novosFixes = {
  30381: '/products/sbp_repelente_icaridina_100ml.jpg',
  30145: '/products/addera_d3_7000ui_4caps.jpg',
  30376: '/products/integralmedica_crisp_bar_doce_leite.jpg',
  30218: '/products/equaliv_melatonina_gotas_20ml.jpg',
  30316: '/products/neopiridin_pastilhas_menta.webp',
  30213: '/products/gillette_prestobarba_3_4un.jpg',
  30275: '/products/polaramine_xarope_120ml.jpg',
  30089: '/products/neutrogena_purified_skin_150g.jpg',
  30095: '/products/avene_cleanance_gel_300ml.jpg',
  30138: '/products/centrum_de_a_a_zinco_60comp.jpg',
  30125: '/products/sensodyne_repair_protect_100g.jpg',
  30130: '/products/oralb_essential_floss_50m.jpg',
  30131: '/products/always_platinum_noturno_28un.jpg',
  30058: '/products/wella_fusion_mascara_150ml.jpg',
  30055: '/products/kerastase_elixir_ultime_100ml.jpg'
};

let novosContent = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
for (const [id, newImg] of Object.entries(novosFixes)) {
  const r1 = new RegExp(`(\\{[^{}]*?"image":\\s*")[^"]+("[^{}]*?"id":\\s*${id}[^{}]*?\\})`, 'g');
  if (r1.test(novosContent)) {
    novosContent = novosContent.replace(r1, `$1${newImg}$2`);
  } else {
    const r2 = new RegExp(`(\\{[^{}]*?"id":\\s*${id}[^{}]*?"image":\\s*")[^"]+("[^{}]*?\\})`, 'g');
    novosContent = novosContent.replace(r2, `$1${newImg}$2`);
  }
}
fs.writeFileSync('src/data/novosProdutosCatalogo.ts', novosContent, 'utf8');
console.log('Applied cross-catalog fixes to novosProdutosCatalogo.ts!');

// 2. Updates for products.ts
let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');

// ID 118: Shampoo Darrow Doctar Plus 120ml
productsContent = productsContent.replace(
  /(id:\s*118,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/darrow_doctar_plus_140ml.jpg$2'
);

// ID 603: Vitergan Zinco 30 comp
productsContent = productsContent.replace(
  /(id:\s*603,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/vitergan_zinco_30comp.jpg$2'
);

// Huggies Natural Care sizes
const huggiesNaturalFixes = {
  20390: '/products/huggies_natural_care_p.jpg',
  20391: '/products/huggies_natural_care_m.jpg',
  20392: '/products/huggies_natural_care_g.jpg',
  20393: '/products/huggies_natural_care_xg.jpg',
  20394: '/products/huggies_natural_care_xxg.jpg'
};

for (const [id, newImg] of Object.entries(huggiesNaturalFixes)) {
  const r = new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*")[^"]+(")`, 'g');
  productsContent = productsContent.replace(r, `$1${newImg}$2`);
}

// Huggies Pants sizes
const huggiesPantsFixes = {
  1096086: '/products/huggies_pants_m.jpg',
  1096087: '/products/huggies_pants_g.jpg',
  1096088: '/products/huggies_pants_xg.jpg',
  1096089: '/products/huggies_pants_xxg.jpg'
};

for (const [id, newImg] of Object.entries(huggiesPantsFixes)) {
  const r = new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*")[^"]+(")`, 'g');
  productsContent = productsContent.replace(r, `$1${newImg}$2`);
}

fs.writeFileSync('src/data/products.ts', productsContent, 'utf8');
console.log('Applied fixes to products.ts!');

// 3. Updates for catalogExpanded.ts
let catContent = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

// ID 2038: Huggies Supreme Care G
catContent = catContent.replace(
  /(id:\s*2038,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/huggies_pants_g.jpg$2'
);

// ID 2039: Huggies Supreme Care M
catContent = catContent.replace(
  /(id:\s*2039,[\s\S]*?image:\s*")[^"]+(")/,
  '$1/products/huggies_pants_m.jpg$2'
);

fs.writeFileSync('src/data/catalogExpanded.ts', catContent, 'utf8');
console.log('Applied fixes to catalogExpanded.ts!');
