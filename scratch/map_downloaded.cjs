const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function loadModule(filePath) {
  let actualPath = filePath;
  if (!fs.existsSync(actualPath) && fs.existsSync(actualPath + '.ts')) actualPath = actualPath + '.ts';
  const tsCode = fs.readFileSync(actualPath, 'utf8');
  const result = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs', target: 'node18' });
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(m, m.exports, (mod) => {
    if (mod.startsWith('./') || mod.startsWith('../')) {
      return loadModule(path.join(path.dirname(actualPath), mod));
    }
    return require(mod);
  });
  return m.exports;
}

const novosMod = loadModule(path.resolve('src/data/novosProdutosCatalogo.ts'));
const items = novosMod.novosProdutosCatalogo;

// The downloaded files in public/products:
const verifiedFiles = [
  { file: '/products/dove_original_90g.webp', keywords: ['Dove Sabonete Original'] },
  { file: '/products/protex_limpeza_profunda.webp', keywords: ['Protex', 'Limpeza Profunda'] },
  { file: '/products/phebo_odor_de_rosas_90g.webp', keywords: ['Phebo', 'Odor de Rosas'] },
  { file: '/products/soapex_barra.webp', keywords: ['Soapex'] },
  { file: '/products/dermacyd_femina.webp', keywords: ['Dermacyd Femina Floral'] },
  { file: '/products/lipikar_surgras_barra_150g.webp', keywords: ['Lipikar Surgras'] },

  { file: '/products/merthiolate_spray_45ml.webp', keywords: ['Merthiolate Spray'] },
  { file: '/products/nebacetin_15g.webp', keywords: ['Nebacetin'] },
  { file: '/products/algodao_cremer.webp', keywords: ['Algodão Hidrófilo', 'Cremer'] },
  { file: '/products/agua_oxigenada_farmax.webp', keywords: ['Água Oxigenada', 'Farmax'] },
  { file: '/products/esparadrapo_cremer.webp', keywords: ['Esparadrapo', 'Cremer'] },
  { file: '/products/nexcare_micropore_branca.jpg', keywords: ['Nexcare', 'Microporosa'] },
  { file: '/products/atadura_cremer.webp', keywords: ['Atadura', 'Cremer'] },
  { file: '/products/gaze_cremer.webp', keywords: ['Gaze', 'Cremer'] },
  { file: '/products/alcool_70_1000ml.webp', keywords: ['Álcool 70%', 'Needs'] },

  { file: '/products/joelheira_mercur.webp', keywords: ['Joelheira Elástica', 'Mercur'] },
  { file: '/products/bolsa_termica_termogel.webp', keywords: ['Bolsa Térmica Gel', 'Termogel'] },
  { file: '/products/meia_kendall.webp', keywords: ['Meia Elástica de Compressão', 'Kendall'] },
  { file: '/products/bolsa_gelo_mercur.webp', keywords: ['Bolsa para Gelo', 'Mercur'] },
  { file: '/products/bolsa_agua_quente_mercur.webp', keywords: ['Bolsa para Água Quente', 'Mercur'] },
  { file: '/products/luvas_supermax.webp', keywords: ['Luvas de Procedimento', 'Supermax'] },
  { file: '/products/tornozeleira_mercur.webp', keywords: ['Tornozeleira Elástica', 'Mercur'] },
  { file: '/products/munhequeira_kestal.jpeg', keywords: ['Munhequeira', 'Tala', 'Kestal'] },
  { file: '/products/cinta_lombar_mercur.webp', keywords: ['Cinta Lombar', 'Mercur'] },
  { file: '/products/palmilha_ortho_pauher.webp', keywords: ['Palmilha Ortopédica', 'Ortho Pauher'] },
  { file: '/products/protetor_joanete_ortho_pauher.webp', keywords: ['Protetor e Corretivo de Joanete', 'Ortho Pauher'] },
  { file: '/products/tipoia_velpeau_mercur.webp', keywords: ['Tipoia Estofada Velpeau', 'Mercur'] },
  { file: '/products/bengala_mercur.webp', keywords: ['Bengala de Alumínio', 'Sequencial'] },
  { file: '/products/muleta_mercur.webp', keywords: ['Muleta Axilar', 'Mercur'] },
  { file: '/products/colar_cervical_mercur.jpg', keywords: ['Colar Cervical', 'Mercur'] },

  { file: '/products/elseve_glycolic_1.webp', keywords: ['Shampoo Elseve Glycolic Gloss'] },
  { file: '/products/elseve_glycolic_condicionador_400ml.webp', keywords: ['Condicionador Elseve Glycolic Gloss'] },
  { file: '/products/elseve_hidra_hialuronico_shampoo.webp', keywords: ['Shampoo Elseve Hidra Hialurônico'] },
  { file: '/products/elseve_longo_dos_sonhos_shampoo.webp', keywords: ['Shampoo Elseve Longo dos Sonhos'] },
  { file: '/products/pantene_restauracao_shampoo_400ml.webp', keywords: ['Shampoo Pantene Restauração'] },
  { file: '/products/vichy_dercos_energy_400ml.webp', keywords: ['Dercos Energy+'] },
  { file: '/products/dercos_ds_anticaspa.webp', keywords: ['Dercos Anticaspa Intensivo DS'] },
  { file: '/products/kerium_ds_anticaspa_125ml.webp', keywords: ['Kerium DS'] },
  { file: '/products/ducray_kelual_ds.webp', keywords: ['Kelual DS'] },

  { file: '/products/neutrogena_sun_fresh_fps70.webp', keywords: ['Neutrogena Sun Fresh', 'FPS 70'] },
  { file: '/products/nivea_sun_fps50_200ml.webp', keywords: ['Nivea Sun Protect & Hidrata', 'FPS 50'] },
  { file: '/products/vichy_capital_soleil_fps60.webp', keywords: ['Vichy Capital Soleil UV-Clear', 'FPS 60'] },
  { file: '/products/eucerin_sun_oil_control_fps60.webp', keywords: ['Eucerin Sun Oil Control', 'FPS 60'] },
  { file: '/products/avene_mat_perfect_fps60.webp', keywords: ['Avène Mat Perfect Fluido', 'FPS 60'] },
  { file: '/products/australian_gold_spray_gel.webp', keywords: ['Australian Gold Protetor Solar Spray Gel'] },
  { file: '/products/laroche_hyalu_b5.jpg', keywords: ['Hyalu B5 Sérum'] },
  { file: '/products/laroche_pure_vit_c.webp', keywords: ['Pure Vitamin C10'] },
  { file: '/products/laroche_mela_b3.webp', keywords: ['Mela B3 Sérum'] },
  { file: '/products/vichy_liftactiv_b3.webp', keywords: ['Liftactiv B3 Sérum'] },

  { file: '/products/flanax_550mg.webp', keywords: ['Flanax 550mg'] },
  { file: '/products/alivium_100mg.webp', keywords: ['Alivium 100mg/ml'] },
  { file: '/products/strepsils_mel_limao.webp', keywords: ['Pastilhas Strepsils Mel e Limão'] },
  { file: '/products/benalet_menta.webp', keywords: ['Benalet Pastilhas para Garganta'] },
  { file: '/products/ciflogex_menta.webp', keywords: ['Ciflogex'] },
  { file: '/products/fluimucil_600mg.webp', keywords: ['Fluimucil 600mg'] },
  { file: '/products/bisolvon_adulto_120ml.webp', keywords: ['Bisolvon 8mg/5ml'] },
  { file: '/products/mucosolvan_adulto_120ml.webp', keywords: ['Mucosolvan 30mg/5ml'] },
  { file: '/products/loratamed_10mg.webp', keywords: ['Loratamed 10mg'] }
];

console.log('Mapping verified files to items...');
for (const entry of verifiedFiles) {
  const match = items.find(item => {
    return entry.keywords.every(kw => item.name.toLowerCase().includes(kw.toLowerCase()));
  });
  if (match) {
    console.log(`MATCH: ID ${match.id} | current: ${match.image} | new: ${entry.file} | name: ${match.name}`);
  } else {
    console.log(`NO MATCH for keywords: ${entry.keywords.join(' + ')}`);
  }
}
