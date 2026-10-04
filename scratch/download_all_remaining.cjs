const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const downloads = [
  { url: 'https://product-data.raiadrogasil.io/images/7983534.webp', file: 'repoflor_250mg.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/20428552.webp', file: 'lactulona_ameixa_120ml.webp' },
  { url: 'https://ihypera2022.vtexassets.com/arquivos/ids/163906/7897322709789_0.jpg', file: 'tamarine_geleia_150g.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/20173148.webp', file: 'dulcolax_5mg.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/16566969.webp', file: 'pedialyte_uva_500ml.webp' },
  { url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1142311-1000-1000/genericos-tarja-vermelha-em-comprimido-pacheco.jpg', file: 'floralyte_maca_500ml.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/12779817.webp', file: 'anador_500mg.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/19192223.webp', file: 'lisador_dipi.webp' },
  { url: 'https://uploads.consultaremedios.com.br/product_images/full/62e9b09d14b578bfa511a906a994599200745a93.png', file: 'torsilax_30comp.png' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/580b0ae19b8467c991244090bca6450767972ed5.jpg', file: 'tandrilax_30comp.jpg' },
  { url: 'https://uploads.consultaremedios.com.br/product_images/full/193627c111a734df7b4cf2f16a07527ed6e65e78.png', file: 'mioflex_a_12comp.png' },
  { url: 'https://sjdigital.vtexassets.com/arquivos/ids/959010/diclofenaco-potassico-50mg-20-comprimidos-revestidos-generico-medley-92997_1.jpg', file: 'diclofenaco_potassico_medley_50mg.jpg' },
  { url: 'https://drogariacatarinense.vtexassets.com/arquivos/ids/182430-800-1067', file: 'cetoprofeno_150mg_eurofarma.jpg' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/94fd67ef7f51b86a13de4ee53f372201dd85010c.jpg', file: 'sumax_50mg.jpg' },
  { url: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/1437754-1000-1000/892866---Cloridrato-Naratriptana-2-5mg-Generico-EMS-10-Comprimidos-2.jpg', file: 'naratriptana_2_5mg_ems.jpg' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/df2218000d0506441e828aa681ef5466e9fc5ce7.jpg', file: 'maxalt_10mg.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/3715357.webp', file: 'estomazil_abacaxi.webp' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/870257343bcc1445ce88cab7d7d5eae41fc4dcb4.jpg', file: 'gaviscon_menta_150ml.jpg' },
  { url: 'https://drogariasp.vteximg.com.br/arquivos/ids/1849446-1000-1000/156477--Antiacido-Pepsamar-Menta-50-Comprimidos-Mastigaveis-1.jpg', file: 'pepsamar_230mg.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/3714579.webp', file: 'sonrisal_2comp.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/13145484.webp', file: 'engov_12comp.webp' },
  { url: 'https://tfdfn2.vtexassets.com/arquivos/ids/210174-800-800', file: 'pantoprazol_40mg_eurofarma.jpg' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/e93012731978594062a3f25cdbbf5262daccbb59.jpg', file: 'esomeprazol_40mg_ems.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/12686636.webp', file: 'melagriao_xarope_150ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3717367.webp', file: 'melagriao_spray_30ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/11418997.webp', file: 'neopiridin_pastilhas_menta.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/17272306.webp', file: 'loratadina_10mg.webp' },
  { url: 'https://santaluciadrogaria.vtexassets.com/arquivos/ids/249172/7896269901898.png', file: 'zyrtec_10mg.png' },
  { url: 'https://drogariasp.vteximg.com.br/arquivos/ids/578911-1000-1000/352179---descongestionante-nasal-salsep-spray-360--50ml.jpg', file: 'salsep_360_50ml.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/3539146.webp', file: 'maresis_100ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/18392973.webp', file: 'vick_pyrena_mel_limao.webp' },
  { url: 'https://uploads.consultaremedios.com.br/product_variation_images/full/b77324f63f6683f2ceb7dd978ee69d9d4f3135fd.png', file: 'vick_pastilhas_cereja.png' },
  { url: 'https://product-data.raiadrogasil.io/images/18392965.webp', file: 'vick_inalador.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/14052692.webp', file: 'lacrifilm_15ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3454935.webp', file: 'systane_ultra_15ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/11085123.webp', file: 'renu_fresh_355ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3462580.webp', file: 'optive_15ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3451667.webp', file: 'fresh_tears_15ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/14977016.webp', file: 'biotrue_300ml.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3454596.webp', file: 'opti_free_puremoist_300ml.webp' },
  { url: 'https://drogariasp.vteximg.com.br/arquivos/ids/578461-1000-1000/3395---cerumin-8ml.jpg', file: 'cerumin_8ml.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/5169012.webp', file: 'omron_hem_6124.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/17405320.webp', file: 'omron_balanca_hbf514c.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/4543506.webp', file: 'gtech_termometro_infravermelho.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/12698953.webp', file: 'gtech_oximetro_oled.webp' },
  { url: 'https://images.tcdn.com.br/img/img_prod/1041954/inalador_nebulizador_de_rede_vibratoria_nebmesh_2_g_tech_1269_2_ef0016bcf4c6a13becd80340a8e97572.jpg', file: 'gtech_inalador_mesh.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/3492449.webp', file: 'clearblue_digital.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3534833.webp', file: 'nosewash_seringa.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/4677096.webp', file: 'medicate_espacador.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3452399.webp', file: 'gtech_umidificador_allergy_free.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3455119.webp', file: 'accuchek_guide_50tiras.webp' },
  { url: 'https://www.accu-chek.com/sites/g/files/papvje226/files/2023-06/softclix-device-500x500_0.png', file: 'accuchek_softclix_lancetas.png' },
  { url: 'https://product-data.raiadrogasil.io/images/3535469.webp', file: 'mamadeira_avent_petala_260ml.webp' },
  { url: 'https://images.philips.com/is/image/philipsconsumer/6baca140455749bab5a6af7300bb22cc?$png$', file: 'chupeta_avent_ultra_air.png' },
  { url: 'https://product-data.raiadrogasil.io/images/3501316.webp', file: 'bomba_tiraleite_avent.webp' },
  { url: 'https://redesuperpopular.fbitsstatic.net/img/p/formula-infantil-enfamil-premium-1-po-800g-x-1-159835/346409.jpg', file: 'enfamil_premium_1_800g.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/12126946.webp', file: 'milnutri_complete_800g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/16643652.webp', file: 'nestogeno_1_800g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/6213219.webp', file: 'alicate_mundial_522.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/18888417.webp', file: 'elseve_glycolic_acidificante.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/12080391.webp', file: 'jontex_sensitive_8un.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3674012.webp', file: 'kmed_tradicional_50g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3504350.webp', file: 'prudence_cores_sabores.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/11370233.webp', file: 'granado_bebe_glicerina_250ml.webp' },
  { url: 'https://babyboss.ma/cdn/shop/products/bioderma_abcderm_gel_moussant_nettoyant_doux_1l-8399563555127-babyboss.maroc-44973791314231.jpg', file: 'bioderma_abcderm_gel_moussant.jpg' },
  { url: 'http://lansinoh.com/cdn/shop/files/1_a1bc79a5-5acc-4286-a22e-29ed79edd9e7.jpg', file: 'lansinoh_lanolina_40g.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/10797709.webp', file: 'regenesis_premium_60caps.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/4136087.webp', file: 'lillo_aspirador_nasal.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/15556941.webp', file: 'mustela_maternite_antiestrias.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3466193.webp', file: 'cetaphil_pro_ac_espuma.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/3457043.webp', file: 'cetaphil_locao_limpeza.webp' },
  { url: 'https://www.cetaphil.com.br/on/demandware.static/-/Sites-Galderma-BR-Library/default/dw8487c97b/routine/serum-hidratante-facial-optimal-hydration-cetaphil-30ml-1.png', file: 'cetaphil_optimal_hydration_serum.png' },
  { url: 'https://product-data.raiadrogasil.io/images/19192931.webp', file: 'rexona_clinical_classic_feminino.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/17492502.webp', file: 'acnase_gel_20g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/16487255.webp', file: 'adapaleno_medley_30g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/16917963.webp', file: 'acnezil_sabonete_cimed.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/10768072.webp', file: 'mucilon_multicereais_600g.webp' },
  { url: 'https://soneda.fbitsstatic.net/img/p/antitranspirante-aerosol-rexona-men-sem-perfume-72h-150ml-153432/340391.jpg', file: 'rexona_men_sem_perfume_aerosol.jpg' },
  { url: 'https://soneda.fbitsstatic.net/img/p/desodorante-roll-on-rexona-men-sem-perfume-50ml-153131/340080.jpg', file: 'rexona_men_sem_perfume_rollon.jpg' },
  { url: 'https://product-data.raiadrogasil.io/images/5401440.webp', file: 'bepantol_derma_20g.webp' },
  { url: 'https://product-data.raiadrogasil.io/images/14181353.webp', file: 'dimagnesio_malato_bwell.webp' }
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
          console.error(`[FAIL] ${dest}: HTTP ${res.statusCode}`);
          return resolve(false);
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(dest);
          if (stats.size > 500) {
            console.log(`[OK] ${dest} (${stats.size} bytes)`);
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
      req.setTimeout(10000, () => {
        req.destroy();
        console.error(`[TIMEOUT] ${dest}`);
        resolve(false);
      });
    }
    tryReq(url, 0);
  });
}

async function run() {
  console.log(`Starting download of ${downloads.length} items...`);
  const publicDir = path.resolve('public/products');
  let successCount = 0;
  for (const item of downloads) {
    const destPath = path.join(publicDir, item.file);
    const ok = await downloadFile(item.url, destPath);
    if (ok) successCount++;
  }
  console.log(`\nFinished: ${successCount}/${downloads.length} downloaded successfully.`);
}

run();
