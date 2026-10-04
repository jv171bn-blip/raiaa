const fs = require('fs');

const updates = {
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

let content = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');

let count = 0;
for (const [id, newImg] of Object.entries(updates)) {
  // Each product block has "id": <id> (or id: <id>)
  // Look for the block containing "id": <id> and replace its "image": "..."
  const regex = new RegExp(`(\\{[^{}]*?"image":\\s*")[^"]+("[^{}]*?"id":\\s*${id}[^{}]*?\\})`, 'g');
  const replaced = content.replace(regex, `$1${newImg}$2`);
  if (replaced !== content) {
    content = replaced;
    count++;
  } else {
    // Try alternate order where id comes before image
    const altRegex = new RegExp(`(\\{[^{}]*?"id":\\s*${id}[^{}]*?"image":\\s*")[^"]+("[^{}]*?\\})`, 'g');
    const altReplaced = content.replace(altRegex, `$1${newImg}$2`);
    if (altReplaced !== content) {
      content = altReplaced;
      count++;
    } else {
      console.warn(`WARNING: Failed to update ID ${id}`);
    }
  }
}

fs.writeFileSync('src/data/novosProdutosCatalogo.ts', content, 'utf8');
console.log(`Updated ${count} items in novosProdutosCatalogo.ts!`);
