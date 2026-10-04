const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

// Existing downloaded files from download_all_remaining.cjs
const dlContent = fs.readFileSync('scratch/download_all_remaining.cjs', 'utf8');
const downloadedFiles = new Set([...dlContent.matchAll(/file:\s*'([^']+)'/g)].map(m => m[1]));

// Batch 1 files
const b1Content = fs.readFileSync('scratch/apply_batch1.cjs', 'utf8');
const b1Map = Object.fromEntries([...b1Content.matchAll(/(\d+):\s*'([^']+)'/g)].map(m => [Number(m[1]), m[2]]));

// Current images map
const imgMap = {};
for (const item of items) {
  if (!imgMap[item.image]) imgMap[item.image] = [];
  imgMap[item.image].push(item);
}

// Map of items that were in batch2 (from download_all_remaining.cjs)
const batch2Map = {
  30228: 'repoflor_250mg.webp',
  30229: 'lactulona_ameixa_120ml.webp',
  30280: 'tamarine_geleia_150g.jpg',
  30281: 'dulcolax_5mg.webp',
  30328: 'pedialyte_uva_500ml.webp',
  30329: 'floralyte_maca_500ml.jpg',
  30252: 'anador_500mg.webp',
  30253: 'lisador_dipi.webp',
  30254: 'torsilax_30comp.png',
  30255: 'tandrilax_30comp.jpg',
  30256: 'mioflex_a_12comp.png',
  30261: 'diclofenaco_potassico_medley_50mg.jpg',
  30262: 'cetoprofeno_150mg_eurofarma.jpg',
  30259: 'sumax_50mg.jpg',
  30260: 'naratriptana_2_5mg_ems.jpg',
  30315: 'maxalt_10mg.jpg',
  30153: 'estomazil_abacaxi.webp',
  30226: 'gaviscon_menta_150ml.jpg',
  30227: 'pepsamar_230mg.jpg',
  30278: 'sonrisal_2comp.webp',
  30156: 'engov_12comp.webp',
  30277: 'pantoprazol_40mg_eurofarma.jpg',
  30327: 'esomeprazol_40mg_ems.jpg',
  30271: 'melagriao_xarope_150ml.webp',
  30272: 'melagriao_spray_30ml.webp',
  30267: 'neopiridin_pastilhas_menta.webp',
  30274: 'loratadina_10mg.webp',
  30324: 'zyrtec_10mg.png',
  30224: 'salsep_360_50ml.jpg',
  30317: 'maresis_100ml.webp',
  30223: 'vick_pyrena_mel_limao.webp',
  30318: 'vick_pastilhas_cereja.png',
  30401: 'vick_inalador.webp',
  30160: 'lacrifilm_15ml.webp',
  30161: 'systane_ultra_15ml.webp',
  30162: 'renu_fresh_355ml.webp',
  30237: 'optive_15ml.webp',
  30238: 'fresh_tears_15ml.webp',
  30239: 'biotrue_300ml.webp',
  30240: 'opti_free_puremoist_300ml.webp',
  30372: 'cerumin_8ml.jpg',
  30284: 'omron_hem_6124.webp',
  30291: 'omron_balanca_hbf514c.webp',
  30286: 'gtech_termometro_infravermelho.webp',
  30287: 'gtech_oximetro_oled.webp',
  30290: 'gtech_inalador_mesh.jpg',
  30302: 'clearblue_digital.webp',
  30319: 'nosewash_seringa.webp',
  30321: 'medicate_espacador.webp',
  30322: 'gtech_umidificador_allergy_free.webp',
  30289: 'accuchek_guide_50tiras.webp',
  30403: 'accuchek_softclix_lancetas.png',
  30296: 'mamadeira_avent_petala_260ml.webp',
  30361: 'chupeta_avent_ultra_air.png',
  30404: 'bomba_tiraleite_avent.webp',
  30297: 'enfamil_premium_1_800g.jpg',
  30362: 'milnutri_complete_800g.webp',
  30363: 'nestogeno_1_800g.webp',
  30405: 'alicate_mundial_522.webp',
  30004: 'elseve_glycolic_acidificante.webp',
  30300: 'jontex_sensitive_8un.webp',
  30301: 'kmed_tradicional_50g.webp',
  30379: 'prudence_cores_sabores.webp',
  30138: 'granado_bebe_glicerina_250ml.webp', // Wait, check ID
  30141: 'bioderma_abcderm_gel_moussant.jpg', // Wait, check ID
  30364: 'lansinoh_lanolina_40g.jpg',
  30367: 'regenesis_premium_60caps.webp',
  30369: 'lillo_aspirador_nasal.webp',
  30370: 'mustela_maternite_antiestrias.webp',
  30095: 'cetaphil_pro_ac_espuma.webp',
  30096: 'cetaphil_locao_limpeza.webp',
  30113: 'cetaphil_optimal_hydration_serum.png',
  30129: 'rexona_clinical_classic_feminino.webp',
  30144: 'acnase_gel_20g.webp',
  30146: 'adapaleno_medley_30g.webp',
  30147: 'acnezil_sabonete_cimed.webp'
};

// Now simulate applying batch2
const simulated = items.map(item => {
  let img = item.image;
  if (batch2Map[item.id]) {
    img = '/products/' + batch2Map[item.id];
  }
  return { ...item, image: img };
});

const simImgMap = {};
for (const item of simulated) {
  if (!simImgMap[item.image]) simImgMap[item.image] = [];
  simImgMap[item.image].push(item);
}

const remainingDups = Object.entries(simImgMap).filter(([img, list]) => list.length > 1);
console.log('Duplicate groups remaining after batch2:', remainingDups.length);

const stillNeeding = [];
remainingDups.forEach(([img, list]) => {
  // The first item in the group is usually the original owner of that image
  // The remaining items (from index 1 onward) need individual images!
  console.log(`\nGroup with image ${img} (${list.length} items):`);
  list.forEach((it, idx) => {
    console.log(`  [${idx === 0 ? 'KEEP?' : 'NEED'}] ID ${it.id} | ${it.brand} | ${it.name}`);
    if (idx > 0) {
      stillNeeding.push(it);
    }
  });
});

console.log('\nTotal items still needing unique images after batch2:', stillNeeding.length);
fs.writeFileSync('scratch/still_needing.json', JSON.stringify(stillNeeding, null, 2), 'utf8');
