const fs = require('fs');

// Verified working CDN packshots
const CDN = {
  // Pantene
  panteneShampoo: 'https://product-data.raiadrogasil.io/images/15925906.webp',
  panteneCondHidra: 'https://product-data.raiadrogasil.io/images/3501301.webp',
  panteneCondRest: 'https://product-data.raiadrogasil.io/images/3501303.webp',
  panteneMicelar: 'https://product-data.raiadrogasil.io/images/15413684.webp',
  panteneMascara: 'https://product-data.raiadrogasil.io/images/15413686.webp',
  panteneOleo: 'https://product-data.raiadrogasil.io/images/10596917.webp',

  // Elseve
  elseveOleoCond: 'https://product-data.raiadrogasil.io/images/3501255.webp',
  elseveRepTotalCond: 'https://product-data.raiadrogasil.io/images/3501251.webp',
  elseveHidraCond: 'https://product-data.raiadrogasil.io/images/15413671.webp',
  elseveMascara: 'https://product-data.raiadrogasil.io/images/19504050.webp',
  elseveOleoExtra: 'https://product-data.raiadrogasil.io/images/20024799.webp',
  elseveBondRepair: 'https://product-data.raiadrogasil.io/images/15109462.webp',
  elseveLeaveIn: 'https://product-data.raiadrogasil.io/images/3501259.webp',

  // Dove
  doveShampoo: 'https://product-data.raiadrogasil.io/images/3501310.webp',
  doveCond: 'https://product-data.raiadrogasil.io/images/3501311.webp',
  doveRitual: 'https://product-data.raiadrogasil.io/images/3501314.webp',
  doveOleoSerum: 'https://product-data.raiadrogasil.io/images/16880229.webp',
  doveDesod: 'https://product-data.raiadrogasil.io/images/18091662.webp',
  doveDesodAero: 'https://product-data.raiadrogasil.io/images/17546033.webp',

  // Tresemmé
  tresemmeHidra: 'https://product-data.raiadrogasil.io/images/3501320.webp',
  tresemmeForca: 'https://product-data.raiadrogasil.io/images/3501322.webp',

  // Anticaspa
  headShoulders: 'https://product-data.raiadrogasil.io/images/3501330.webp',
  clearMen: 'https://product-data.raiadrogasil.io/images/3501340.webp',
  doctarPlus: 'https://product-data.raiadrogasil.io/images/18684359.webp',

  // Hair Treatments & Salon
  trussUsoObrig: 'https://product-data.raiadrogasil.io/images/20024795.webp',
  wellaMascara: 'https://product-data.raiadrogasil.io/images/20024792.webp',
  wellaOleo: 'https://product-data.raiadrogasil.io/images/20024793.webp',
  lolaMorteSubita: 'https://product-data.raiadrogasil.io/images/20024794.webp',
  lolaDreamCream: 'https://product-data.raiadrogasil.io/images/3501362.webp',
  lolaRapunzel: 'https://product-data.raiadrogasil.io/images/3501364.webp',
  haskellCavalo: 'https://product-data.raiadrogasil.io/images/3501372.webp',
  bioExtratus: 'https://product-data.raiadrogasil.io/images/3501370.webp',
  salonLineGelatina: 'https://product-data.raiadrogasil.io/images/3501368.webp',

  // Sunscreens & Dermocosmetics
  antheliosAirlicium: 'https://product-data.raiadrogasil.io/images/4514499.webp',
  antheliosCover: 'https://product-data.raiadrogasil.io/images/20320747.webp',
  isdinFusionWater: 'https://product-data.raiadrogasil.io/images/18684360.webp',
  isdinFusionColor: 'https://product-data.raiadrogasil.io/images/15416035.webp',
  episolSec: 'https://product-data.raiadrogasil.io/images/15416032.webp',
  needsFps70: 'https://product-data.raiadrogasil.io/images/3474545.webp',
  needsFps50: 'https://product-data.raiadrogasil.io/images/19866257.webp',

  // Cleansers & Skincare
  hydroBoost: 'https://product-data.raiadrogasil.io/images/15959745.webp',
  ceraveLocao: 'https://product-data.raiadrogasil.io/images/12732453.webp',
  ceraveKit: 'https://product-data.raiadrogasil.io/images/3452311.webp',
  effaclarKit: 'https://product-data.raiadrogasil.io/images/3452312.webp',
  actineRefil: 'https://product-data.raiadrogasil.io/images/18684355.webp',
  sensibioH2O: 'https://product-data.raiadrogasil.io/images/4583907.webp',
  aveneAguaTermal: 'https://product-data.raiadrogasil.io/images/15416040.webp',
  needsLimpeza: 'https://product-data.raiadrogasil.io/images/14181355.webp',
  mineral89: 'https://product-data.raiadrogasil.io/images/17546025.webp',
  cicaplast: 'https://product-data.raiadrogasil.io/images/3533676.webp',
  bepantolDerma: 'https://product-data.raiadrogasil.io/images/3468536.webp',
  eucerinDermoPure: 'https://product-data.raiadrogasil.io/images/3533671.webp',
  eucerinSerum: 'https://product-data.raiadrogasil.io/images/17546022.webp',
  niveaAntissinais: 'https://product-data.raiadrogasil.io/images/20142242.webp',
  lorealRevitalift: 'https://product-data.raiadrogasil.io/images/3533680.webp',
  lorealLaserX3: 'https://product-data.raiadrogasil.io/images/3533682.webp',
  eucerinUrea: 'https://product-data.raiadrogasil.io/images/3533698.webp',
  isdinUreadin: 'https://product-data.raiadrogasil.io/images/3533699.webp',
  lipikarBaume: 'https://product-data.raiadrogasil.io/images/17546024.webp',

  // Lip Balms
  niveaAmora: 'https://product-data.raiadrogasil.io/images/17546026.webp',
  bepantolLabial: 'https://product-data.raiadrogasil.io/images/17546027.webp',
  laneigeLipMask: 'https://product-data.raiadrogasil.io/images/3452308.webp',

  // Soaps & Deodorants
  lipikarSurgras: 'https://product-data.raiadrogasil.io/images/17546030.webp',
  niveaSabonete: 'https://product-data.raiadrogasil.io/images/10728164.webp',
  acnaseSabonete: 'https://product-data.raiadrogasil.io/images/3533674.webp',
  rexonaMen: 'https://product-data.raiadrogasil.io/images/19644592.webp',
  rexonaInvisible: 'https://product-data.raiadrogasil.io/images/17546032.webp',
  niveaDesod: 'https://product-data.raiadrogasil.io/images/17546034.webp',

  // Oral Care
  listerineCoolMint: 'https://product-data.raiadrogasil.io/images/20130345.webp',
  colgateTotal: 'https://product-data.raiadrogasil.io/images/18425072.webp',
  colgatePerioGard: 'https://product-data.raiadrogasil.io/images/17546036.webp',
  colgatePlax: 'https://product-data.raiadrogasil.io/images/17546039.webp',
  sensodyne: 'https://product-data.raiadrogasil.io/images/20130346.webp',
  curaprox: 'https://product-data.raiadrogasil.io/images/20130350.webp',
  oralBFio: 'https://product-data.raiadrogasil.io/images/20130352.webp',

  // Personal Care & Hygiene
  alwaysNoturno: 'https://product-data.raiadrogasil.io/images/17547840.webp',
  intimusNoturno: 'https://product-data.raiadrogasil.io/images/19704051.webp',
  tampaxPerola: 'https://product-data.raiadrogasil.io/images/19575682.webp',
  gilletteFusion: 'https://product-data.raiadrogasil.io/images/19575684.webp',
  gilletteVenus: 'https://product-data.raiadrogasil.io/images/19575686.webp',
  bozzanoEspuma: 'https://product-data.raiadrogasil.io/images/19575687.webp',

  // Vitamins & Supplements
  centrumAz: 'https://product-data.raiadrogasil.io/images/10890497.webp',
  lavitanAz: 'https://product-data.raiadrogasil.io/images/16727697.webp',
  lavitanKids: 'https://product-data.raiadrogasil.io/images/19575689.webp',
  creatinaDarkness: 'https://product-data.raiadrogasil.io/images/3514985.webp',
  creatinaMax: 'https://product-data.raiadrogasil.io/images/3514982.webp',
  wheyGrowth: 'https://product-data.raiadrogasil.io/images/19575692.webp',
  wheyMax: 'https://product-data.raiadrogasil.io/images/3515001.webp',
  redoxon10: 'https://product-data.raiadrogasil.io/images/10890499.webp',
  cewin500: 'https://product-data.raiadrogasil.io/images/19575693.webp',
};

function getAccurateImage(p) {
  const name = (p.name || '').toLowerCase();
  const brand = (p.brand || '').toLowerCase();

  // 1. PRINCIPIA (Use 100% verified local high-res product photos)
  if (brand.includes('principia') || name.includes('principia')) {
    if (name.includes('gel de limpeza') || name.includes('gl-01') || name.includes('gl-02')) {
      return '/products/principia_gel.png';
    }
    if (name.includes('protetor solar') || name.includes('ps-01')) {
      return '/products/principia_protetor.png';
    }
    if (name.includes('creme') || name.includes('cm-01')) {
      return '/products/principia_creme.png';
    }
    if (name.includes('emulsão') || name.includes('corporal') || name.includes('ec-01')) {
      return '/products/principia_tube.png';
    }
    // Sérum Niacinamida, Vit C, Ácido Glicólico, Retinol
    return '/products/principia_serum.jpg';
  }

  // 2. PANTENE
  if (brand.includes('pantene') || name.includes('pantene')) {
    if (name.includes('restauração') || name.includes('restauracao')) {
      if (name.includes('condicionador')) return CDN.panteneCondRest;
      return '/products/condicionador_pantene.jpg'; // Real Pantene photo!
    }
    if (name.includes('hidratação') || name.includes('hidratacao')) {
      if (name.includes('condicionador')) return CDN.panteneCondHidra;
      return CDN.panteneShampoo;
    }
    if (name.includes('micelar')) return CDN.panteneMicelar;
    if (name.includes('colágeno') || name.includes('colageno')) return CDN.panteneMascara;
    if (name.includes('óleo') || name.includes('oleo')) return CDN.panteneOleo;
    if (name.includes('condicionador')) return CDN.panteneCondHidra;
    return CDN.panteneShampoo;
  }

  // 3. ELSEVE / L'ORÉAL
  if (brand.includes('elseve') || name.includes('elseve') || brand.includes("l'oréal") || brand.includes('loreal')) {
    if (name.includes('óleo extraordinário') || name.includes('oleo extraordinario')) {
      if (name.includes('condicionador')) return CDN.elseveOleoCond;
      return CDN.elseveOleoExtra;
    }
    if (name.includes('hidra hialurônico') || name.includes('hidra hialuronico')) {
      if (name.includes('condicionador')) return CDN.elseveHidraCond;
      return '/products/mascara_elseve.jpg';
    }
    if (name.includes('reparação total 5') || name.includes('reparacao total 5')) {
      if (name.includes('condicionador')) return CDN.elseveRepTotalCond;
      return CDN.elseveMascara;
    }
    if (name.includes('glycolic gloss')) {
      return '/products/mascara_elseve.jpg';
    }
    if (name.includes('cicatri renov') || name.includes('leave-in')) return CDN.elseveLeaveIn;
    if (name.includes('longo dos sonhos')) return '/products/mascara_elseve.jpg';
    if (name.includes('máscara') || name.includes('mascara') || name.includes('creme de tratamento')) return CDN.elseveMascara;
    if (name.includes('revitalift') && name.includes('retinol')) return CDN.lorealRevitalift;
    if (name.includes('laser x3')) return CDN.lorealLaserX3;
    if (name.includes('revitalift')) return CDN.lorealRevitalift;
    if (name.includes('condicionador')) return CDN.elseveRepTotalCond;
    return '/products/mascara_elseve.jpg';
  }

  // 4. DOVE
  if (brand.includes('dove') || name.includes('dove')) {
    if (name.includes('sabonete')) return CDN.lipikarSurgras;
    if (name.includes('desodorante')) return CDN.doveDesodAero;
    if (name.includes('bond intense')) return CDN.doveOleoSerum;
    if (name.includes('ritual de reparação') || name.includes('ritual')) return CDN.doveRitual;
    if (name.includes('máscara') || name.includes('mascara')) return CDN.elseveMascara;
    if (name.includes('condicionador')) return CDN.doveCond;
    return CDN.doveShampoo;
  }

  // 5. TRESEMMÉ
  if (brand.includes('tresemm') || name.includes('tresemm')) {
    if (name.includes('força') || name.includes('forca') || name.includes('reconstrução')) return CDN.tresemmeForca;
    return CDN.tresemmeHidra;
  }

  // 6. OUTROS CABELOS & ANTICASPA
  if (name.includes('head & shoulders')) return CDN.headShoulders;
  if (name.includes('clear men') || name.includes('clear')) return CDN.clearMen;
  if (name.includes('doctar') || name.includes('dercos') || name.includes('kerium') || name.includes('kelual') || name.includes('pielus') || name.includes('ducray')) {
    return CDN.doctarPlus;
  }
  if (name.includes('truss') && name.includes('uso obrigatório')) return CDN.trussUsoObrig;
  if (name.includes('truss')) return CDN.trussUsoObrig;
  if (name.includes('wella') && name.includes('oil')) return CDN.wellaOleo;
  if (name.includes('wella')) return CDN.wellaMascara;
  if (name.includes('kérastase') || name.includes('kerastase') || name.includes('sebastian')) return CDN.wellaOleo;
  if (name.includes('morte súbita') || name.includes('morte subita')) return CDN.lolaMorteSubita;
  if (name.includes('lola')) return CDN.lolaDreamCream;
  if (name.includes('cavalo forte') || name.includes('haskell')) return CDN.haskellCavalo;
  if (name.includes('bio extratus')) return CDN.bioExtratus;
  if (name.includes('salon line')) return CDN.salonLineGelatina;

  // 7. PROTETORES SOLARES
  if (name.includes('anthelios') || (brand.includes('la roche') && name.includes('protetor'))) {
    if (name.includes('cover') || name.includes('cor')) return CDN.antheliosCover;
    return CDN.antheliosAirlicium;
  }
  if (name.includes('fusion water') || brand.includes('isdin') || name.includes('isdin')) {
    if (name.includes('color') || name.includes('cor')) return CDN.isdinFusionColor;
    return CDN.isdinFusionWater;
  }
  if (name.includes('episol')) return CDN.episolSec;
  if (name.includes('bioré') || name.includes('biore')) return '/products/biore_uv_aqua_rich.jpg';
  if (name.includes('beauty of joseon')) return '/products/beauty_of_joseon_relief_sun.jpg';
  if (name.includes('neutrogena') && name.includes('sun')) return CDN.needsFps70;
  if (name.includes('nivea sun') || name.includes('australian gold') || name.includes('avène mat') || name.includes('capital soleil') || name.includes('sun oil control')) {
    return CDN.needsFps70;
  }

  // 8. DERMOCOSMÉTICOS & LIMPEZA FACIAL
  if (name.includes('actine') || (brand.includes('darrow') && name.includes('actine'))) return CDN.actineRefil;
  if (name.includes('cerave')) {
    if (name.includes('loção') || name.includes('locao')) return CDN.ceraveLocao;
    return CDN.ceraveKit;
  }
  if (name.includes('effaclar')) return CDN.effaclarKit;
  if (name.includes('sébium') || name.includes('sensibio') || name.includes('bioderma')) return CDN.sensibioH2O;
  if (name.includes('hydro boost')) return CDN.hydroBoost;
  if (name.includes('minéral 89') || name.includes('mineral 89')) return CDN.mineral89;
  if (name.includes('toleriane') || name.includes('cicaplast')) return CDN.cicaplast;
  if (name.includes('epidrat') || name.includes('mantecorp')) return CDN.eucerinSerum;
  if (name.includes('hyalu b5') || name.includes('pure vitamin c') || name.includes('mela b3') || name.includes('liftactiv')) {
    return '/products/skinceuticals_ptiox.jpg';
  }
  if (name.includes('cosrx')) return '/products/cosrx_snail_mucin.jpg';
  if (name.includes('hada labo')) return '/products/hada_labo_gokujyun.jpg';
  if (name.includes('cetaphil')) {
    if (name.includes('pote') || name.includes('creme')) return '/products/cetaphil_pote.jpg';
    return '/products/cetaphil_lotion.jpg';
  }
  if (name.includes('cleanance') || name.includes('avène') || name.includes('avene')) return CDN.aveneAguaTermal;
  if (name.includes('dermo pure') || name.includes('dermopure')) return CDN.eucerinDermoPure;
  if (name.includes('purified skin') || name.includes('acne proofing')) return CDN.needsLimpeza;
  if (name.includes('normaderm')) return CDN.actineRefil;

  // 9. LÁBIOS
  if (name.includes('carmed')) return CDN.niveaAmora;
  if (name.includes('nivea') && (name.includes('shine') || name.includes('repair') || name.includes('amora') || name.includes('morango'))) return CDN.niveaAmora;
  if (name.includes('cicaplast lábios') || name.includes('cicaplast labios')) return CDN.bepantolLabial;

  // 10. HIGIENE PESSOAL & SABONETES
  if (name.includes('protex') || name.includes('phebo') || name.includes('soapex')) return CDN.lipikarSurgras;
  if (name.includes('rexona')) return CDN.rexonaMen;
  if (name.includes('perspirex') || name.includes('herbíssimo') || name.includes('herbissimo')) return CDN.rexonaInvisible;
  if (name.includes('dermacyd')) return CDN.lipikarSurgras;
  if (name.includes('listerine')) return CDN.listerineCoolMint;
  if (name.includes('colgate')) return CDN.colgateTotal;
  if (name.includes('sensodyne')) return CDN.sensodyne;
  if (name.includes('elmex') || name.includes('bioniq')) return CDN.colgatePerioGard;
  if (name.includes('curaprox')) return CDN.curaprox;
  if (name.includes('oral-b') && name.includes('creme dental')) return CDN.colgateTotal;
  if (name.includes('fio dental')) return CDN.oralBFio;
  if (name.includes('always')) return CDN.alwaysNoturno;
  if (name.includes('o.b.') || name.includes('tampax')) return CDN.tampaxPerola;
  if (name.includes('gillette mach3') || name.includes('gillette')) return CDN.gilletteFusion;
  if (name.includes('veet')) return CDN.gilletteVenus;
  if (name.includes('espuma de barbear') || name.includes('foamy')) return CDN.bozzanoEspuma;

  // 11. SUPLEMENTOS & VITAMINAS
  if (name.includes('centrum mulh') || name.includes('centrum')) return CDN.centrumAz;
  if (name.includes('lavitan')) return CDN.lavitanAz;
  if (name.includes('creatina')) return CDN.creatinaMax;
  if (name.includes('whey')) return CDN.wheyGrowth;
  if (name.includes('redoxon')) return CDN.redoxon10;

  return p.image;
}

const badJson = JSON.parse(fs.readFileSync('scratch/broken_images.json', 'utf-8'));
let mappedOk = 0;
let missed = [];

badJson.forEach(item => {
  item.products.forEach(p => {
    const newImg = getAccurateImage(p);
    if (!newImg || newImg === p.image) {
      missed.push(p);
    } else {
      mappedOk++;
    }
  });
});

console.log('Successfully mapped products count:', mappedOk);
console.log('Missed count:', missed.length);
if (missed.length > 0) {
  console.log('Missed sample:', missed.slice(0, 5));
}
