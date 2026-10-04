const fs = require('fs');

const candidates = [
  'sbp_repelente_icaridina.jpg',
  'sbp_repelente_spray.jpg',
  'addera_d3_7000ui.webp',
  'integralmedica_crisp_bar.jpg',
  'equaliv_melatonina_gotas.webp',
  'neopiridin_pastilhas_menta.webp',
  'prestobarba_3_masculino.webp',
  'prestobarba_3.jpg',
  'polaramine_xarope_120ml.jpg',
  'isdin_fusion_water_fps60.webp',
  'episol_sec_fps60.jpg',
  'darrow_actine_gel_400g.webp',
  'neutrogena_purified_skin_150g.jpg',
  'avene_cleanance_gel_300ml.jpg',
  'mineral_89_50ml.webp',
  'centrum_a_zinco_60comp.jpg',
  'sensodyne_repair_protect.jpg',
  'oralb_fio_dental_50m.jpg',
  'always_platinum_noturno.jpg',
  'wella_fusion_mascara.jpg',
  'kerastase_elixir_ultime_100ml.jpg',
  'darrow_doctar_plus_140ml.jpg'
];

candidates.forEach(f => {
  const p = 'public/products/' + f;
  if (fs.existsSync(p)) {
    console.log(`[EXISTS] ${f} (${fs.statSync(p).size} bytes)`);
  } else {
    console.log(`[NOT ON DISK] ${f}`);
  }
});
