const fs = require('fs');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

// Accurate map of the 81 items we downloaded
const batch2Updates = {
  30228: '/products/repoflor_250mg.webp',
  30229: '/products/lactulona_ameixa_120ml.webp',
  30280: '/products/tamarine_geleia_150g.jpg',
  30281: '/products/dulcolax_5mg.webp',
  30328: '/products/pedialyte_uva_500ml.webp',
  30329: '/products/floralyte_maca_500ml.jpg',
  30252: '/products/anador_500mg.webp',
  30253: '/products/lisador_dipi.webp',
  30254: '/products/torsilax_30comp.png',
  30255: '/products/tandrilax_30comp.jpg',
  30256: '/products/mioflex_a_12comp.png',
  30261: '/products/diclofenaco_potassico_medley_50mg.jpg',
  30262: '/products/cetoprofeno_150mg_eurofarma.jpg',
  30259: '/products/sumax_50mg.jpg',
  30260: '/products/naratriptana_2_5mg_ems.jpg',
  30315: '/products/maxalt_10mg.jpg',
  30153: '/products/estomazil_abacaxi.webp',
  30226: '/products/gaviscon_menta_150ml.jpg',
  30227: '/products/pepsamar_230mg.jpg',
  30278: '/products/sonrisal_2comp.webp',
  30156: '/products/engov_12comp.webp',
  30277: '/products/pantoprazol_40mg_eurofarma.jpg',
  30327: '/products/esomeprazol_40mg_ems.jpg',
  30271: '/products/melagriao_xarope_150ml.webp',
  30272: '/products/melagriao_spray_30ml.webp',
  30267: '/products/neopiridin_pastilhas_menta.webp',
  30274: '/products/loratadina_10mg.webp',
  30324: '/products/zyrtec_10mg.png',
  30224: '/products/salsep_360_50ml.jpg',
  30317: '/products/maresis_100ml.webp',
  30223: '/products/vick_pyrena_mel_limao.webp',
  30318: '/products/vick_pastilhas_cereja.png',
  30401: '/products/vick_inalador.webp',
  30160: '/products/lacrifilm_15ml.webp',
  30161: '/products/systane_ultra_15ml.webp',
  30162: '/products/renu_fresh_355ml.webp',
  30237: '/products/optive_15ml.webp',
  30238: '/products/fresh_tears_15ml.webp',
  30239: '/products/biotrue_300ml.webp',
  30240: '/products/opti_free_puremoist_300ml.webp',
  30372: '/products/cerumin_8ml.jpg',
  30284: '/products/omron_hem_6124.webp',
  30291: '/products/omron_balanca_hbf514c.webp',
  30286: '/products/gtech_termometro_infravermelho.webp',
  30287: '/products/gtech_oximetro_oled.webp',
  30290: '/products/gtech_inalador_mesh.jpg',
  30302: '/products/clearblue_digital.webp',
  30319: '/products/nosewash_seringa.webp',
  30321: '/products/medicate_espacador.webp',
  30322: '/products/gtech_umidificador_allergy_free.webp',
  30289: '/products/accuchek_guide_50tiras.webp',
  30403: '/products/accuchek_softclix_lancetas.png',
  30296: '/products/mamadeira_avent_petala_260ml.webp',
  30361: '/products/chupeta_avent_ultra_air.png',
  30404: '/products/bomba_tiraleite_avent.webp',
  30297: '/products/enfamil_premium_1_800g.jpg',
  30362: '/products/milnutri_complete_800g.webp',
  30363: '/products/nestogeno_1_800g.webp',
  30405: '/products/alicate_mundial_522.webp',
  30004: '/products/elseve_glycolic_acidificante.webp',
  30300: '/products/jontex_sensitive_8un.webp',
  30301: '/products/kmed_tradicional_50g.webp',
  30379: '/products/prudence_cores_sabores.webp',
  30117: '/products/granado_bebe_glicerina_250ml.webp',
  30208: '/products/bioderma_abcderm_gel_moussant.jpg',
  30298: '/products/lansinoh_lanolina_40g.jpg',
  30299: '/products/regenesis_premium_60caps.webp',
  30320: '/products/lillo_aspirador_nasal.webp',
  30355: '/products/mustela_maternite_antiestrias.webp',
  30090: '/products/cetaphil_pro_ac_espuma.webp',
  30091: '/products/cetaphil_locao_limpeza.webp',
  30170: '/products/cetaphil_optimal_hydration_serum.png',
  30129: '/products/rexona_clinical_classic_feminino.webp',
  30166: '/products/acnase_gel_20g.webp',
  30168: '/products/adapaleno_medley_30g.webp',
  30169: '/products/acnezil_sabonete_cimed.webp',
  30042: '/products/elseve_cicatri_renov_leavein_100ml.webp'
};

// Also apply batch 1 and batch 2 to see the exact remaining duplicates
const updatedItems = items.map(item => {
  if (batch2Updates[item.id]) {
    return { ...item, image: batch2Updates[item.id] };
  }
  return item;
});

const imgMap = {};
for (const item of updatedItems) {
  if (!imgMap[item.image]) imgMap[item.image] = [];
  imgMap[item.image].push(item);
}

const remainingDups = Object.entries(imgMap).filter(([img, list]) => list.length > 1);
console.log('Remaining duplicate image URLs:', remainingDups.length);

const targets = [];
remainingDups.forEach(([img, list], gIdx) => {
  console.log(`\n[Group ${gIdx + 1}] Shared Image: ${img} (${list.length} items)`);
  list.forEach((item, idx) => {
    // Determine whether this item is the "primary" owner of the image or needs a new one
    // We will list all items so we can assign exact packshots to each one
    console.log(`  Item ${idx}: ID ${item.id} | ${item.brand} | ${item.name}`);
    targets.push({
      groupId: gIdx + 1,
      isPrimary: idx === 0,
      id: item.id,
      brand: item.brand,
      name: item.name,
      currentImage: item.image
    });
  });
});

console.log('\nTotal items in remaining duplicate groups:', targets.length);
fs.writeFileSync('scratch/master_remaining_targets.json', JSON.stringify(targets, null, 2), 'utf8');
