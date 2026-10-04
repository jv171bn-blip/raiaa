const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const downloads = [
  { id: 30045, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891150090286', file: 'dove_mascara_10em1.jpg' },
  { id: 30044, url: 'https://cdn-cosmos.bluesoft.com.br/products/7500435197014', file: 'pantene_mascara_colageno.jpg' },
  { id: 30020, url: 'https://product-data.raiadrogasil.io/images/16880177.webp', file: 'dove_shampoo_hidratacao_intensa_400ml.webp' },
  { id: 30025, url: 'https://product-data.raiadrogasil.io/images/6204239.webp', file: 'tresemme_blindagem_antifrizz_400ml.webp' },
  { id: 30026, url: 'https://product-data.raiadrogasil.io/images/6200944.webp', file: 'tresemme_detox_capilar_400ml.webp' },
  { id: 30029, url: 'https://product-data.raiadrogasil.io/images/20262110.webp', file: 'head_shoulders_remocao_oleosidade_400ml.webp' },
  { id: 30050, url: 'https://cdn-cosmos.bluesoft.com.br/products/7898623951198', file: 'salon_line_gelatina_todecacho_550g.jpg' },
  { id: 30054, url: 'https://cdn-cosmos.bluesoft.com.br/products/7898947943619', file: 'truss_night_spa_250ml.jpg' },
  { id: 30056, url: 'https://cdn-cosmos.bluesoft.com.br/products/3474637154967', file: 'kerastase_masquintense_200ml.jpg' },
  { id: 30057, url: 'https://cdn-cosmos.bluesoft.com.br/products/4064666306179', file: 'wella_oil_reflections_100ml.jpg' },
  { id: 30059, url: 'https://cdn-cosmos.bluesoft.com.br/products/8005610598635', file: 'sebastian_dark_oil_95ml.jpg' },
  { id: 30065, url: 'https://cdn-cosmos.bluesoft.com.br/products/3282770075533', file: 'ducray_anaphase_200ml.jpg' },
  { id: 30066, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891142201317', file: 'pielus_di_shampoo_120ml.jpg' },
  { id: 30067, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896290401855', file: 'darrow_doctar_plus_140ml.jpg' },
  { id: 30093, url: 'https://cdn-cosmos.bluesoft.com.br/products/609963220755', file: 'principia_gel_gl02_350g.jpg' },
  { id: 30070, url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706186179', file: 'anthelios_ultra_cover_fps60_cor2.jpg' },
  { id: 30073, url: 'https://cdn-cosmos.bluesoft.com.br/products/8429420199750', file: 'isdin_age_repair_fps50.jpg' },
  { id: 30075, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891142145727', file: 'episol_color_fps70_morena.jpg' },
  { id: 30312, url: 'https://cdn-cosmos.bluesoft.com.br/products/7908785487890', file: 'cerave_kit_cuidados_essenciais.jpg' },
  { id: 30097, url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706186698', file: 'cerave_locao_facial_52ml.jpg' },
  { id: 30085, url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706171434', file: 'effaclar_alta_tolerancia_300g.jpg' },
  { id: 30313, url: 'https://cdn-cosmos.bluesoft.com.br/products/7908615017754', file: 'kit_laroche_antiacne_effaclar.jpg' },
  { id: 30094, url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706171137', file: 'vichy_normaderm_phytosolution_300g.jpg' },
  { id: 30088, url: 'https://cdn-cosmos.bluesoft.com.br/products/3701129812037', file: 'bioderma_sensibio_gel_moussant_200ml.jpg' },
  { id: 30114, url: 'https://cdn-cosmos.bluesoft.com.br/products/7899706124874', file: 'cicaplast_labios_7_5ml.jpg' },
  { id: 30193, url: 'https://cdn-cosmos.bluesoft.com.br/products/3282770399523', file: 'avene_xeracalm_ad_400ml.jpg' },
  { id: 30101, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891142206596', file: 'epidrat_acqua_50g.jpg' },
  { id: 30191, url: 'https://cdn-cosmos.bluesoft.com.br/products/3701129805343', file: 'bioderma_atoderm_creme_500ml.jpg' },
  { id: 30103, url: 'https://cdn-cosmos.bluesoft.com.br/products/609963220359', file: 'principia_serum_vc10.jpg' },
  { id: 30104, url: 'https://cdn-cosmos.bluesoft.com.br/products/0736532824875', file: 'principia_serum_ag10.jpg' },
  { id: 30105, url: 'https://cdn-cosmos.bluesoft.com.br/products/609963220526', file: 'principia_serum_rn03.jpg' },
  { id: 30173, url: 'https://cdn-cosmos.bluesoft.com.br/products/602883706316', file: 'principia_serum_am10.jpg' },
  { id: 30352, url: 'https://cdn-cosmos.bluesoft.com.br/products/609963220373', file: 'principia_tonico_al8.jpg' },
  { id: 30353, url: 'https://cdn-cosmos.bluesoft.com.br/products/0609963220243', file: 'principia_serum_at01.jpg' },
  { id: 30111, url: 'https://cdn-cosmos.bluesoft.com.br/products/7897947601840', file: 'carmed_fini_bananas_10g.jpg' },
  { id: 30112, url: 'https://cdn-cosmos.bluesoft.com.br/products/4005808369621', file: 'nivea_med_repair_fps15.jpg' },
  { id: 30113, url: 'https://cdn-cosmos.bluesoft.com.br/products/4005808850839', file: 'nivea_morango_shine.jpg' },
  { id: 30194, url: 'https://cdn-cosmos.bluesoft.com.br/products/4005900453259', file: 'nivea_amora_shine.jpg' },
  { id: 30122, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896049528512', file: 'herbissimo_creme_tradicional_55g.jpg' },
  { id: 30200, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891150100510', file: 'rexona_men_invisible_150ml.jpg' },
  { id: 30124, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891024030820', file: 'colgate_luminous_white_brilliant_70g.jpg' },
  { id: 30126, url: 'https://cdn-cosmos.bluesoft.com.br/products/7506295388487', file: 'oralb_3d_white_glamorous_70g.jpg' },
  { id: 30204, url: 'https://cdn-cosmos.bluesoft.com.br/products/7793100130243', file: 'colgate_periogard_90g.jpg' },
  { id: 30210, url: 'https://cdn-cosmos.bluesoft.com.br/products/8001841536873', file: 'tampax_perola_regular_8un.jpg' },
  { id: 30139, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896009498640', file: 'centrum_mulher_60comp.jpg' },
  { id: 30141, url: 'https://cdn-cosmos.bluesoft.com.br/products/7897947612891', file: 'lavitan_cabelos_unhas_60caps.jpg' },
  { id: 30220, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891151912433', file: 'growth_whey_concentrado_80_1kg.jpg' },
  { id: 30222, url: 'https://cdn-cosmos.bluesoft.com.br/products/7898430192258', file: 'dprev_50000ui_4caps.jpg' },
  { id: 30374, url: 'https://cdn-cosmos.bluesoft.com.br/products/619205643778', file: 'color_andina_stevia_liquido.jpg' },
  { id: 30263, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896331703443', file: 'resfenol_20caps.jpg' },
  { id: 30264, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896472501823', file: 'multigrip_20caps.jpg' },
  { id: 30265, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896016806261', file: 'naldecon_noite_24comp.jpg' },
  { id: 30150, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896093000217', file: 'vick_inalador_portatil_0_5ml.jpg' },
  { id: 30230, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891040192694', file: 'nexcare_curativos_mickey_10un.jpg' },
  { id: 30243, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891317127800', file: 'tadalafila_20mg_eurofarma_4comp.jpg' },
  { id: 30245, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896004749648', file: 'tadalafila_20mg_ems_4comp.jpg' },
  { id: 30247, url: 'https://cdn-cosmos.bluesoft.com.br/products/7891317127725', file: 'tadalafila_5mg_eurofarma_30comp.jpg' },
  { id: 30248, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896523227450', file: 'tadalafila_5mg_cimed_30comp.jpg' },
  { id: 30250, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896382706370', file: 'cialis_diario_5mg_30comp.jpg' },
  { id: 30371, url: 'https://cdn-cosmos.bluesoft.com.br/products/033732000078', file: 'macks_protetor_auricular_silicone.jpg' },
  { id: 30279, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896094916821', file: 'lacday_10000fcc_30comp.jpg' },
  { id: 30241, url: 'https://cdn-cosmos.bluesoft.com.br/products/7896549800040', file: 'alcon_estojo_lentes_contato.jpg' }
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    function tryReq(currentUrl, redirects) {
      if (redirects > 5) {
        console.error(`[FAIL] ${dest}: Too many redirects`);
        return resolve(false);
      }
      const client = currentUrl.startsWith('https') ? https : http;
      const req = client.get(currentUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            const parsed = new URL(currentUrl);
            nextUrl = new URL(nextUrl, parsed.origin).href;
          }
          return tryReq(nextUrl, redirects + 1);
        }
        if (res.statusCode !== 200) {
          console.error(`[FAIL] ${dest}: HTTP ${res.statusCode} from ${currentUrl}`);
          return resolve(false);
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(dest);
          if (stats.size > 500) {
            console.log(`[OK] ${path.basename(dest)} (${stats.size} bytes)`);
            resolve(true);
          } else {
            console.error(`[FAIL] ${dest}: File too small (${stats.size} bytes)`);
            resolve(false);
          }
        });
      });
      req.on('error', (err) => {
        console.error(`[ERROR] ${dest}:`, err.message);
        resolve(false);
      });
      req.setTimeout(12000, () => {
        req.destroy();
        console.error(`[TIMEOUT] ${dest}`);
        resolve(false);
      });
    }
    tryReq(url, 0);
  });
}

async function run() {
  console.log(`Starting final download of ${downloads.length} items...`);
  const publicDir = path.resolve('public/products');
  let successCount = 0;
  const failed = [];
  for (const item of downloads) {
    const destPath = path.join(publicDir, item.file);
    const ok = await downloadFile(item.url, destPath);
    if (ok) {
      successCount++;
    } else {
      failed.push(item);
    }
  }
  console.log(`\nFinished: ${successCount}/${downloads.length} downloaded successfully.`);
  if (failed.length > 0) {
    console.log(`Failed items (${failed.length}):`, failed.map(f => f.file));
    fs.writeFileSync('scratch/final_failed.json', JSON.stringify(failed, null, 2));
  }
}

run();
