const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

const publicFiles = fs.readdirSync('public/products');

// Collect known downloaded mappings from:
// 1. apply_batch1.cjs
// 2. download_all_remaining.cjs
// 3. download_batch_final.cjs
// 4. download_final_all7.cjs

const knownMap = {};

// Parse download_batch_final.cjs
const bfCode = fs.readFileSync('scratch/download_batch_final.cjs', 'utf8');
for (const match of bfCode.matchAll(/{\s*id:\s*(\d+)[^}]*?file:\s*'([^']+)'/g)) {
  knownMap[Number(match[1])] = match[2];
}

// Parse download_final_all7.cjs
const f7Map = {
  30045: 'dove_mascara_10em1.jpg',
  30104: 'principia_serum_ag10.jpg',
  30353: 'principia_serum_at01.jpg',
  30312: 'cerave_kit_cuidados_essenciais.jpg',
  30220: 'growth_whey_concentrado_80_1kg.webp',
  30371: 'macks_protetor_auricular_silicone.jpg',
  30241: 'alcon_estojo_lentes_contato.jpg'
};
Object.assign(knownMap, f7Map);

// Batch 2 mappings from extract_all_needed.cjs
const b2Code = fs.readFileSync('scratch/extract_all_needed.cjs', 'utf8');
const b2M = b2Code.match(/const batch2Map = {([\s\S]*?)};/);
if (b2M) {
  for (const line of b2M[1].split('\n')) {
    const m = line.match(/(\d+):\s*'([^']+)'/);
    if (m) knownMap[Number(m[1])] = m[2];
  }
}

// Name-based corrections for any offset IDs
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
    knownMap[match.id] = fix.file;
  }
}

// Now check all 386 items
const updatedItems = items.map(it => {
  let img = it.image;
  if (knownMap[it.id]) {
    let fn = knownMap[it.id];
    if (fn.startsWith('/products/')) fn = fn.replace('/products/', '');
    // Check if file exists, or if there's a webp/jpg variant
    let p = path.join('public/products', fn);
    if (!fs.existsSync(p)) {
      const base = fn.replace(/\.[^.]+$/, '');
      for (const ext of ['.webp', '.jpg', '.jpeg', '.png']) {
        if (fs.existsSync(path.join('public/products', base + ext))) {
          fn = base + ext;
          p = path.join('public/products', fn);
          break;
        }
      }
    }
    if (fs.existsSync(p)) {
      img = '/products/' + fn;
    } else {
      console.log(`[FILE MISSING ON DISK] ID ${it.id} -> ${fn}`);
    }
  }
  return { ...it, image: img };
});

// Check duplicates
const imgMap = {};
for (const it of updatedItems) {
  if (!imgMap[it.image]) imgMap[it.image] = [];
  imgMap[it.image].push(it);
}

const dups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log(`\nRemaining duplicate groups in catalog: ${dups.length}`);

for (const [img, list] of dups) {
  console.log(`\nGroup with image ${img} (${list.length} items):`);
  list.forEach(i => console.log(`   ID ${i.id} | ${i.brand} | ${i.name}`));
}

fs.writeFileSync('scratch/simulated_remaining_dups.json', JSON.stringify(dups, null, 2), 'utf8');
