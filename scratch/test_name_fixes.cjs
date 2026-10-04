const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

// Master unified map built earlier
const masterMap = JSON.parse(fs.readFileSync('scratch/master_unified_map.json', 'utf8'));

// Name-based corrections for any offset IDs:
const nameFixes = [
  { namePart: 'Acnase', file: 'acnase_gel_20g.webp' },
  { namePart: 'Adapaleno', file: 'adapaleno_medley_30g.webp' },
  { namePart: 'Acnezil', file: 'acnezil_sabonete_cimed.webp' },
  { namePart: 'Cetaphil Pro AC', file: 'cetaphil_pro_ac_espuma.webp' },
  { namePart: 'Loção de Limpeza Suave Cetaphil', file: 'cetaphil_locao_limpeza.webp' },
  { namePart: 'Cetaphil Optimal Hydration', file: 'cetaphil_optimal_hydration_serum.png' },
  { namePart: 'Dove Original', file: 'dove_original_90g.webp' },
  { namePart: 'Protex Antibacteriano Limpeza Profunda', file: 'protex_limpeza_profunda.webp' },
  { namePart: 'Phebo Odor de Rosas', file: 'phebo_odor_de_rosas_90g.webp' },
  { namePart: 'Soapex 1%', file: 'soapex_barra.webp' },
  { namePart: 'Granado Bebê', file: 'granado_bebe_glicerina_250ml.webp' },
  { namePart: 'ABCDerm', file: 'bioderma_abcderm_gel_moussant.jpg' },
  { namePart: 'Lansinoh', file: 'lansinoh_lanolina_40g.jpg' },
  { namePart: 'Regenesis Premium', file: 'regenesis_premium_60caps.webp' },
  { namePart: 'Lillo', file: 'lillo_aspirador_nasal.webp' },
  { namePart: 'Mustela', file: 'mustela_maternite_antiestrias.webp' },
  { namePart: 'Rexona Clinical Classic', file: 'rexona_clinical_classic_feminino.webp' }
];

for (const fix of nameFixes) {
  const match = items.find(it => it.name.toLowerCase().includes(fix.namePart.toLowerCase()));
  if (match) {
    console.log(`Matched fix [${fix.namePart}] -> ID ${match.id} (${match.name})`);
    masterMap[match.id] = '/products/' + fix.file;
  } else {
    console.log(`NO MATCH for fix [${fix.namePart}]`);
  }
}

// Now simulate again
const simulated = items.map(it => {
  if (masterMap[it.id]) {
    return { ...it, image: masterMap[it.id] };
  }
  return it;
});

const imgMap = {};
for (const it of simulated) {
  if (!imgMap[it.image]) imgMap[it.image] = [];
  imgMap[it.image].push(it);
}

const remainingDups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log(`\nRemaining duplicate groups after name-based fixes: ${remainingDups.length}`);

for (const [img, list] of remainingDups) {
  console.log(`\nGroup with image ${img} (${list.length} items):`);
  list.forEach(i => console.log(`   ID ${i.id} | ${i.brand} | ${i.name}`));
}
