const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 1. Batch 1 map
const b1Map = {
  30134: '/products/dove_original_90g.webp',
  30135: '/products/protex_limpeza_profunda.webp',
  30136: '/products/phebo_odor_de_rosas_90g.webp',
  30137: '/products/soapex_barra.webp',
  30133: '/products/dermacyd_femina.webp',
  30198: '/products/lipikar_surgras_barra_150g.webp',

  30158: '/products/merthiolate_spray_45ml.webp',
  30159: '/products/nebacetin_15g.webp',
  30231: '/products/algodao_cremer.webp',
  30232: '/products/agua_oxigenada_farmax.webp',
  30233: '/products/esparadrapo_cremer.webp',
  30234: '/products/nexcare_micropore_branca.jpg',
  30235: '/products/atadura_cremer.webp',
  30236: '/products/gaze_cremer.webp',
  30402: '/products/alcool_70_1000ml.webp',

  30292: '/products/joelheira_mercur.webp',
  30293: '/products/bolsa_termica_termogel.webp',
  30294: '/products/meia_kendall.webp',
  30330: '/products/bolsa_gelo_mercur.webp',
  30331: '/products/bolsa_agua_quente_mercur.webp',
  30332: '/products/luvas_supermax.webp',
  30333: '/products/tornozeleira_mercur.webp',
  30334: '/products/munhequeira_kestal.jpeg',
  30335: '/products/cinta_lombar_mercur.webp',
  30336: '/products/palmilha_ortho_pauher.webp',
  30337: '/products/protetor_joanete_ortho_pauher.webp',
  30338: '/products/tipoia_velpeau_mercur.webp',
  30339: '/products/bengala_mercur.webp',
  30340: '/products/muleta_mercur.webp',
  30341: '/products/colar_cervical_mercur.jpg',

  30001: '/products/elseve_glycolic_1.webp',
  30002: '/products/elseve_glycolic_condicionador_400ml.webp',
  30007: '/products/elseve_hidra_hialuronico_shampoo.webp',
  30010: '/products/elseve_longo_dos_sonhos_shampoo.webp',
  30013: '/products/pantene_restauracao_shampoo_400ml.webp',
  30060: '/products/vichy_dercos_energy_400ml.webp',
  30061: '/products/dercos_ds_anticaspa.webp',
  30063: '/products/kerium_ds_anticaspa_125ml.webp',
  30064: '/products/ducray_kelual_ds.webp',

  30076: '/products/neutrogena_sun_fresh_fps70.webp',
  30077: '/products/nivea_sun_fps50_200ml.webp',
  30078: '/products/vichy_capital_soleil_fps60.webp',
  30080: '/products/eucerin_sun_oil_control_fps60.webp',
  30079: '/products/avene_mat_perfect_fps60.webp',
  30081: '/products/australian_gold_spray_gel.webp',
  30106: '/products/laroche_hyalu_b5.jpg',
  30107: '/products/laroche_pure_vit_c.webp',
  30108: '/products/laroche_mela_b3.webp',
  30109: '/products/vichy_liftactiv_b3.webp',

  30257: '/products/flanax_550mg.webp',
  30258: '/products/alivium_100mg.webp',
  30266: '/products/strepsils_mel_limao.webp',
  30267: '/products/benalet_menta.webp',
  30268: '/products/ciflogex_menta.webp',
  30269: '/products/fluimucil_600mg.webp',
  30270: '/products/bisolvon_adulto_120ml.webp',
  30325: '/products/mucosolvan_adulto_120ml.webp',
  30323: '/products/loratamed_10mg.webp'
};

// 2. Batch 2 map
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
  30138: 'granado_bebe_glicerina_250ml.webp',
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

// 3. Batch Final map
const batchFinalMap = {
  30045: 'dove_mascara_10em1.jpg',
  30044: 'pantene_mascara_colageno.jpg',
  30020: 'dove_shampoo_hidratacao_intensa_400ml.webp',
  30025: 'tresemme_blindagem_antifrizz_400ml.webp',
  30026: 'tresemme_detox_capilar_400ml.webp',
  30029: 'head_shoulders_remocao_oleosidade_400ml.webp',
  30050: 'salon_line_gelatina_todecacho_550g.jpg',
  30054: 'truss_night_spa_250ml.jpg',
  30056: 'kerastase_masquintense_200ml.jpg',
  30057: 'wella_oil_reflections_100ml.jpg',
  30059: 'sebastian_dark_oil_95ml.jpg',
  30065: 'ducray_anaphase_200ml.jpg',
  30066: 'pielus_di_shampoo_120ml.jpg',
  30067: 'darrow_doctar_plus_140ml.jpg',
  30093: 'principia_gel_gl02_350g.jpg',
  30070: 'anthelios_ultra_cover_fps60_cor2.jpg',
  30073: 'isdin_age_repair_fps50.webp',
  30075: 'episol_color_fps70_morena.jpg',
  30312: 'cerave_kit_cuidados_essenciais.jpg',
  30097: 'cerave_locao_facial_52ml.jpg',
  30085: 'effaclar_alta_tolerancia_300g.jpg',
  30313: 'kit_laroche_antiacne_effaclar.jpg',
  30094: 'vichy_normaderm_phytosolution_300g.jpg',
  30088: 'bioderma_sensibio_gel_moussant_200ml.jpg',
  30114: 'cicaplast_labios_7_5ml.jpg',
  30193: 'avene_xeracalm_ad_400ml.jpg',
  30101: 'epidrat_acqua_50g.webp',
  30191: 'bioderma_atoderm_creme_500ml.jpg',
  30103: 'principia_serum_vc10.jpg',
  30104: 'principia_serum_ag10.jpg',
  30105: 'principia_serum_rn03.jpg',
  30173: 'principia_serum_am10.jpg',
  30352: 'principia_tonico_al8.jpg',
  30353: 'principia_serum_at01.jpg',
  30111: 'carmed_fini_bananas_10g.jpg',
  30112: 'nivea_med_repair_fps15.jpg',
  30113: 'nivea_morango_shine.jpg',
  30194: 'nivea_amora_shine.jpg',
  30122: 'herbissimo_creme_tradicional_55g.jpg',
  30200: 'rexona_men_invisible_150ml.jpg',
  30124: 'colgate_luminous_white_brilliant_70g.jpg',
  30126: 'oralb_3d_white_glamorous_70g.jpg',
  30204: 'colgate_periogard_90g.jpg',
  30210: 'tampax_perola_regular_8un.jpg',
  30139: 'centrum_mulher_60comp.jpg',
  30141: 'lavitan_cabelos_unhas_60caps.jpg',
  30220: 'growth_whey_concentrado_80_1kg.webp',
  30222: 'dprev_50000ui_4caps.jpg',
  30374: 'color_andina_stevia_liquido.jpg',
  30263: 'resfenol_20caps.jpg',
  30264: 'multigrip_20caps.jpg',
  30265: 'naldecon_noite_24comp.jpg',
  30150: 'vick_inalador_portatil_0_5ml.jpg',
  30230: 'nexcare_curativos_mickey_10un.jpg',
  30243: 'tadalafila_20mg_eurofarma_4comp.jpg',
  30245: 'tadalafila_20mg_ems_4comp.jpg',
  30247: 'tadalafila_5mg_eurofarma_30comp.jpg',
  30248: 'tadalafila_5mg_cimed_30comp.jpg',
  30250: 'cialis_diario_5mg_30comp.jpg',
  30371: 'macks_protetor_auricular_silicone.jpg',
  30279: 'lacday_10000fcc_30comp.jpg',
  30241: 'alcon_estojo_lentes_contato.jpg'
};

// Combine all into master
const masterMap = {};

function addEntries(map, sourceName) {
  for (const [idStr, rawFile] of Object.entries(map)) {
    const id = Number(idStr);
    let fileName = rawFile.startsWith('/products/') ? rawFile.replace('/products/', '') : rawFile;
    // Check file in public/products
    let fullPath = path.resolve('public/products', fileName);
    if (!fs.existsSync(fullPath)) {
      // Check alternative extensions
      const base = fileName.replace(/\.[^.]+$/, '');
      const exts = ['.webp', '.jpg', '.jpeg', '.png'];
      let found = false;
      for (const ext of exts) {
        if (fs.existsSync(path.resolve('public/products', base + ext))) {
          fileName = base + ext;
          fullPath = path.resolve('public/products', fileName);
          found = true;
          break;
        }
      }
      if (!found) {
        console.error(`[MISSING FILE] ID ${id} (${sourceName}): ${fileName}`);
        continue;
      }
    }
    masterMap[id] = '/products/' + fileName;
  }
}

addEntries(b1Map, 'Batch 1');
addEntries(batch2Map, 'Batch 2');
addEntries(batchFinalMap, 'Batch Final');

console.log(`Total mapped IDs in masterMap: ${Object.keys(masterMap).length}`);

// Test against novosProdutosCatalogo.ts
const tsCode = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
const m = { exports: {} };
new Function('module', 'exports', result.code)(m, m.exports);
const items = m.exports.novosProdutosCatalogo;

console.log(`novosProdutosCatalogo items: ${items.length}`);

// Simulate
const updatedItems = items.map(it => {
  if (masterMap[it.id]) {
    return { ...it, image: masterMap[it.id] };
  }
  return it;
});

// Check duplicates after simulation
const imgUsage = {};
for (const it of updatedItems) {
  if (!imgUsage[it.image]) imgUsage[it.image] = [];
  imgUsage[it.image].push(it);
}

let dupGroups = 0;
for (const [img, list] of Object.entries(imgUsage)) {
  if (list.length > 1) {
    dupGroups++;
    console.log(`\n[REMAINING DUP GROUP] ${list.length}x image: ${img}`);
    list.forEach(i => console.log(`   ID ${i.id} | ${i.brand} | ${i.name}`));
  }
}

console.log(`\nTotal duplicate groups after simulation: ${dupGroups}`);

fs.writeFileSync('scratch/master_unified_map.json', JSON.stringify(masterMap, null, 2), 'utf8');
