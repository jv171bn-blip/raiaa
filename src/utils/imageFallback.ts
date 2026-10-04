import type React from 'react';

export function getFallbackImage(product?: {
  name?: string;
  brand?: string;
  category?: string;
  subcategory?: string;
}): string {
  if (!product) return '/products/cetaphil_lotion.jpg';

  const name = (product.name || '').toLowerCase();
  const brand = (product.brand || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  const sub = (product.subcategory || '').toLowerCase();
  const text = `${name} ${brand} ${cat} ${sub}`;

  // 0. Correspondência Direta de Alta Precisão por Produto Real
  if (text.includes('dorflex')) return '/products/dorflex_36.jpg';
  if (text.includes('neosaldina')) return '/products/neosaldina_20drageas.webp';
  if (text.includes('novalgina')) return '/products/novalgina_1g_20comp.webp';
  if (text.includes('buscopan')) return '/products/buscopan_composto_20comp.webp';
  if (text.includes('torsilax')) return '/products/torsilax_30comp_real.jpg';
  if (text.includes('tylenol')) return '/products/tylenol_750mg.jpg';
  if (text.includes('benegrip')) return '/products/benegrip_20comp.jpg';
  if (text.includes('omeprazol')) return '/products/omeprazol_medley_20mg.jpg';
  if (text.includes('losartana')) return '/products/losartana_50mg.jpg';
  if (text.includes('vick')) return '/products/vick_vaporub_50g.jpg';
  if (text.includes('enterogermina')) return '/products/enterogermina_10flac.jpg';
  if (text.includes('hyabak')) return '/products/hyabak_10ml.jpg';
  if (text.includes('cicaplast')) return '/products/cicaplast_baume_b5.jpg';
  if (text.includes('freestyle') || text.includes('libre')) return '/products/freestyle_libre_2.jpg';
  if (text.includes('floratil')) return '/products/floratil_200mg.jpg';
  if (text.includes('luftal')) return '/products/luftal_gelcaps.jpg';
  if (text.includes('band-aid') || text.includes('band aid') || text.includes('curativo')) return '/products/curativo_bandaid.jpg';
  if (text.includes('addera')) return '/products/addera_d3_real.jpg';
  if (text.includes('dprev')) return '/products/dprev_50000ui_4caps.jpg';
  if (text.includes('centrum')) return '/products/centrum_de_a_a_zinco_60comp.jpg';
  if (text.includes('anti-pigment') || text.includes('dual serum') || text.includes('dual sérum')) return '/products/eucerin_dual_anti_pigment.jpg';
  if (text.includes('eucerin')) return '/products/eucerin_sun_oil_control_fps60.webp';
  if (text.includes('fusion water') || text.includes('isdin')) return '/products/isdin_fusion_water_fps60.jpg';
  if (text.includes('listerine')) return '/products/listerine_cool_mint_500ml.jpg';
  if (text.includes('omron') || text.includes('pressão') || text.includes('pressao')) return '/products/aparelho_pressao_omron.jpg';
  if (text.includes('accu-chek') || text.includes('glicemia') || text.includes('glicos')) return '/products/glicosimetro_accuchek.jpg';
  if (text.includes('termômetro') || text.includes('termometro')) return '/products/termometro_digital_gtech.jpg';
  if (text.includes('allegra')) return '/products/allegra_120mg.jpg';
  if (text.includes('resfenol')) return '/products/resfenol_20caps.jpg';
  if (text.includes('coristina')) return '/products/coristina_d_16comp.jpg';
  if (text.includes('aspirina')) return '/products/aspirina_prevent.jpg';
  if (text.includes('desitin')) return '/products/desitin_roxa.jpg';
  if (text.includes('hipoglós') || text.includes('hipoglos')) return '/products/hipoglos_amendoas.jpg';
  if (text.includes('curaprox')) return '/products/curaprox_cs5460_individual.jpg';
  if (text.includes('colgate') || text.includes('luminous')) return '/products/colgate_luminous_white_brilliant_70g.jpg';
  if (text.includes('sensodyne')) return '/products/sensodyne_repair_protect_100g.jpg';
  if (text.includes('aptamil')) return '/products/aptamil_profutura.jpg';
  if (text.includes('ninho')) return '/products/ninho_fases_1.jpg';
  if (text.includes('mucilon')) return '/products/mucilon_milho.jpg';
  if (text.includes('soapex')) return '/products/soapex_barra.webp';
  if (text.includes('bioré') || text.includes('biore')) return '/products/biore_uv_aqua_rich.jpg';
  if (text.includes('hada labo')) return '/products/hada_labo_gokujyun.jpg';
  if (text.includes('joseon') || text.includes('relief sun')) return '/products/beauty_of_joseon_relief_sun.jpg';
  if (text.includes('snail') || text.includes('cosrx')) return '/products/cosrx_snail_mucin.jpg';
  if (text.includes('medicube')) return '/products/medicube_zero_pore_pad.webp';
  if (text.includes('skin1004') || text.includes('centella')) return '/products/skin1004_centella_55ml.webp';
  if (text.includes('curél') || text.includes('curel')) return '/products/curel_creme_facial.webp';
  if (text.includes('mise en scène') || text.includes('mise en scene')) return '/products/mise_en_scene_perfect_serum.webp';
  if (text.includes('cerave')) return '/products/cerave_locao_473ml.jpg';
  if (text.includes('tadalafila') || text.includes('cialis')) return '/products/cialis_diario_5mg_30comp.jpg';

  // 1. Principia
  if (text.includes('principia')) {
    if (text.includes('gel') || text.includes('limpeza')) return '/products/principia_gel_gl02_350g.jpg';
    if (text.includes('protetor') || text.includes('solar')) return '/products/principia_protetor.png';
    if (text.includes('creme') || text.includes('calmante')) return '/products/principia_creme.png';
    return '/products/principia_serum.jpg';
  }

  // 2. Cabelos / Shampoos / Condicionadores
  if (
    text.includes('shampoo') ||
    text.includes('condicionador') ||
    text.includes('pantene') ||
    text.includes('elseve') ||
    text.includes('cabelo') ||
    text.includes('tresemm') ||
    text.includes('head & shoulders') ||
    text.includes('lola') ||
    text.includes('haskell')
  ) {
    if (text.includes('glycolic')) return '/products/elseve_glycolic_1.webp';
    if (text.includes('bambu')) return '/products/pantene_shampoo_bambu_400ml.jpg';
    if (text.includes('colágeno') || text.includes('colageno')) return '/products/pantene_mascara_colageno.jpg';
    if (text.includes('máscara') || text.includes('mascara') || text.includes('tratamento')) {
      return '/products/mascara_elseve.jpg';
    }
    return '/products/condicionador_pantene.jpg';
  }

  // 3. Protetor Solar
  if (
    text.includes('protetor') ||
    text.includes('solar') ||
    text.includes('fps') ||
    text.includes('anthelios') ||
    text.includes('episol')
  ) {
    return '/products/needs_beauty_fps70.jpg';
  }

  // 4. Skincare / Dermocosméticos / Hidratantes
  if (
    text.includes('cetaphil') ||
    text.includes('dermocosm') ||
    text.includes('hidratante') ||
    text.includes('pele') ||
    text.includes('rosto') ||
    text.includes('sérum') ||
    text.includes('serum')
  ) {
    if (text.includes('pote')) return '/products/cetaphil_pote.jpg';
    return '/products/cetaphil_lotion.jpg';
  }

  // 5. Bebê e Fraldas
  if (
    text.includes('fralda') ||
    text.includes('pampers') ||
    text.includes('huggies') ||
    text.includes('bebê') ||
    text.includes('bebe')
  ) {
    if (text.includes('g') && !text.includes('kg')) return '/products/pampers_pants_g.webp';
    return '/products/pampers_confort_sec_m.webp';
  }

  // 6. Higiene Bucal
  if (
    text.includes('creme dental') ||
    text.includes('bucal') ||
    text.includes('dente')
  ) {
    return '/products/colgate_luminous_white_brilliant_70g.jpg';
  }

  // 7. Suplementos & Vitaminas
  if (
    text.includes('vitamina') ||
    text.includes('suplemento') ||
    text.includes('creatina') ||
    text.includes('whey') ||
    text.includes('biotrimag') ||
    text.includes('ômega') ||
    text.includes('omega') ||
    text.includes('lavitan')
  ) {
    return '/products/puravida_biotrimag.jpg';
  }

  // 8. Medicamentos Gerais
  if (text.includes('gripe') || text.includes('resfriado')) {
    return '/products/benegrip_20comp.jpg';
  }
  if (text.includes('dipirona') || text.includes('paracetamol') || text.includes('dor') || text.includes('febre') || text.includes('analgésico')) {
    return '/products/dorflex_36.jpg';
  }

  // Fallback padrão neutro e profissional
  return '/products/dorflex_36.jpg';
}

export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  product?: { name?: string; brand?: string; category?: string; subcategory?: string }
): void {
  const target = e.currentTarget;
  if (target.dataset.hasFallback === 'true') {
    // Já tentou fallback uma vez, previne loop infinito
    return;
  }
  target.dataset.hasFallback = 'true';
  target.src = getFallbackImage(product);
}
