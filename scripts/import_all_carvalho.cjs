const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// 1. Bundle and load existing store products
esbuild.buildSync({
  entryPoints: ['src/data/allProducts.ts'],
  outfile: 'scratch/existing_products_bundle.cjs',
  bundle: true,
  platform: 'node',
  format: 'cjs'
});
const { allProducts } = require('../scratch/existing_products_bundle.cjs');

function normalizeText(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

// Only existing store products (excluding the ones with ID >= 10000000 which were imported from Carvalho)
const existingNormalizedNames = new Set(
  allProducts.filter(p => p.id < 10000000).map(p => normalizeText(p.name))
);
console.log(`Original store unique products to deduplicate against: ${existingNormalizedNames.size}`);

function extractBrand(name) {
  const n = name.toLowerCase();
  if (n.includes('la roche') || n.includes('anthelios') || n.includes('effaclar') || n.includes('cicaplast')) return 'La Roche-Posay';
  if (n.includes('principia')) return 'Principia';
  if (n.includes('isdin')) return 'ISDIN';
  if (n.includes('eucerin')) return 'Eucerin';
  if (n.includes('vichy') || n.includes('dercos')) return 'Vichy';
  if (n.includes('cerave')) return 'CeraVe';
  if (n.includes('cetaphil')) return 'Cetaphil';
  if (n.includes('bioderma')) return 'Bioderma';
  if (n.includes('avene') || n.includes('avène')) return 'Avène';
  if (n.includes('darrow') || n.includes('doctar') || n.includes('actine') || n.includes('nutrel')) return 'Darrow';
  if (n.includes('neutrogena')) return 'Neutrogena';
  if (n.includes('nivea')) return 'Nivea';
  if (n.includes('loreal') || n.includes('l’oreal') || n.includes('l\'oréal') || n.includes('elseve')) return "L'Oréal Paris";
  if (n.includes('wella') || n.includes('invigo') || n.includes('oil reflections')) return 'Wella Professionals';
  if (n.includes('braé') || n.includes('brae')) return 'Braé';
  if (n.includes('truss')) return 'TRUSS';
  if (n.includes('kérastase') || n.includes('kerastase')) return 'Kérastase';
  if (n.includes('redken')) return 'Redken';
  if (n.includes('senscience')) return 'Senscience';
  if (n.includes('lowell')) return 'Lowell';
  if (n.includes('inoar')) return 'Inoar';
  if (n.includes('huggies')) return 'Huggies';
  if (n.includes('pampers')) return 'Pampers';
  if (n.includes('dove')) return 'Dove';
  if (n.includes('rexona')) return 'Rexona';
  if (n.includes('colgate')) return 'Colgate';
  if (n.includes('oral-b')) return 'Oral-B';
  if (n.includes('listerine')) return 'Listerine';
  if (n.includes('closeup') || n.includes('close up')) return 'Close Up';
  if (n.includes('sensodyne')) return 'Sensodyne';
  if (n.includes('max titanium')) return 'Max Titanium';
  if (n.includes('probiótica') || n.includes('probiotica')) return 'Probiótica';
  if (n.includes('puravida') || n.includes('pura vida')) return 'Puravida';
  if (n.includes('growth')) return 'Growth Supplements';
  if (n.includes('integralmédica') || n.includes('integralmedica')) return 'IntegralMédica';
  if (n.includes('nutren')) return 'Nutren';
  if (n.includes('aptamil')) return 'Aptamil';
  if (n.includes('nan supreme') || n.includes('nan pro')) return 'NAN';
  if (n.includes('ninho')) return 'Ninho';
  if (n.includes('mucilon')) return 'Mucilon';
  if (n.includes('australian gold')) return 'Australian Gold';
  if (n.includes('cenoura & bronze') || n.includes('cenoura e bronze')) return 'Cenoura & Bronze';
  if (n.includes('sundown')) return 'Sundown';
  if (n.includes('needs')) return 'Needs';
  if (n.includes('elizavecca')) return 'Elizavecca';
  if (n.includes('cosrx')) return 'COSRX';
  if (n.includes('beauty of joseon')) return 'Beauty of Joseon';
  if (n.includes('skin1004')) return 'Skin1004';
  if (n.includes('medicube')) return 'Medicube';
  if (n.includes('hada labo')) return 'Hada Labo';
  if (n.includes('bioré') || n.includes('biore')) return 'Bioré';
  if (n.includes('alpecin')) return 'Alpecin';
  if (n.includes('pantene')) return 'Pantene';
  if (n.includes('tresemmé') || n.includes('tresemme')) return 'TRESemmé';
  if (n.includes('seda')) return 'Seda';
  if (n.includes('siàge') || n.includes('siage') || n.includes('eudora')) return 'Eudora';
  if (n.includes('widi care')) return 'Widi Care';
  if (n.includes('lola from rio') || n.includes('lola')) return 'Lola Cosmetics';
  if (n.includes('bio extratus')) return 'Bio Extratus';
  if (n.includes('imecap')) return 'Imecap';
  if (n.includes('lavitan')) return 'Lavitan';
  if (n.includes('vitalin')) return 'Vitalin';
  if (n.includes('g-tech')) return 'G-Tech';
  if (n.includes('omron')) return 'Omron';
  if (n.includes('ketocal')) return 'KetoCal';
  if (n.includes('mantecorp') || n.includes('epidrat') || n.includes('blancy')) return 'Mantecorp Skincare';
  if (n.includes('granado')) return 'Granado';
  if (n.includes('phebo')) return 'Phebo';
  if (n.includes('desitin')) return 'Desitin';
  if (n.includes('hipoglós') || n.includes('hipoglos')) return 'Hipoglós';
  if (n.includes('johnson')) return "Johnson's Baby";
  if (n.includes('salve')) return 'Sallve';
  if (n.includes('oceane') || n.includes('océane')) return 'Océane';
  if (n.includes('vult')) return 'Vult';
  if (n.includes('bepantol')) return 'Bepantol';
  return 'Droga Raia';
}

function inferCategorySubcategory(name) {
  const n = name.toLowerCase();
  if (n.includes('pet') || n.includes('cão') || n.includes('gato') || n.includes('cães') || n.includes('cachorro') || n.includes('antipulgas') || n.includes('bravecto') || n.includes('nexgard') || n.includes('simparic')) {
    return { category: 'Pet', subcategory: 'Higiene e Saúde Pet' };
  }
  if (n.includes('fralda') || n.includes('toalha umedecida') || n.includes('lenço umedecido') || n.includes('mamadeira') || n.includes('chupeta') || n.includes('bebê') || n.includes('bebe') || n.includes('infantil') || n.includes('desitin') || n.includes('hipoglós') || n.includes('hipoglos') || n.includes('pomada de assadura')) {
    return { category: 'Mamãe e Bebê', subcategory: 'Cuidados com o Bebê' };
  }
  if (n.includes('fórmula') || n.includes('formula') || n.includes('aptamil') || n.includes('nan ') || n.includes('ninho') || n.includes('mucilon') || n.includes('ketocal') || n.includes('enfamil') || n.includes('pediasure')) {
    return { category: 'Mamãe e Bebê', subcategory: 'Alimentação Infantil' };
  }
  if (n.includes('protetor solar') || n.includes('bloqueador solar') || n.includes('autobronzeador') || n.includes('bronzeador') || n.includes('fps ') || n.includes('anthelios') || n.includes('sun pigment') || n.includes('fusion water')) {
    return { category: 'Dermocosméticos', subcategory: 'Proteção Solar' };
  }
  if (n.includes('sérum') || n.includes('serum') || n.includes('anti-idade') || n.includes('antirrugas') || n.includes('retinol') || n.includes('vitamina c') || n.includes('ácido hialurônico') || n.includes('acido hialuronico') || n.includes('clareador') || n.includes('antiacne') || n.includes('limpeza facial') || n.includes('gel de limpeza') || n.includes('água micelar') || n.includes('tônico facial') || n.includes('hidratante facial')) {
    return { category: 'Dermocosméticos', subcategory: 'Cuidados Faciais' };
  }
  if (n.includes('creatina') || n.includes('whey') || n.includes('proteína') || n.includes('bcaa') || n.includes('glutamina') || n.includes('termogênico') || n.includes('pré-treino') || n.includes('pre-treino') || n.includes('hipercalórico') || n.includes('colágeno') || n.includes('colageno') || n.includes('ômega 3') || n.includes('omega 3') || n.includes('multivitamínico') || n.includes('vitamina') || n.includes('magnésio') || n.includes('zinco') || n.includes('melatonina') || n.includes('suplemento')) {
    return { category: 'Vitaminas e Suplementos', subcategory: 'Suplementos Alimentares' };
  }
  if (n.includes('shampoo') || n.includes('condicionador') || n.includes('máscara capilar') || n.includes('mascara capilar') || n.includes('ampola') || n.leave || n.includes('leave-in') || n.includes('óleo capilar') || n.includes('oleo capilar') || n.includes('tonico capilar') || n.includes('anticaspa') || n.includes('antiqueda') || n.includes('cabelo') || n.includes('cachos')) {
    return { category: 'Cabelos', subcategory: 'Tratamento Capilar' };
  }
  if (n.includes('creme dental') || n.includes('gel dental') || n.includes('escova dental') || n.includes('fio dental') || n.includes('enxaguante bucal') || n.includes('listerine') || n.includes('colgate') || n.includes('sensodyne') || n.includes('oral-b')) {
    return { category: 'Higiene Pessoal', subcategory: 'Higiene Bucal' };
  }
  if (n.includes('desodorante') || n.includes('antitranspirante') || n.includes('sabonete') || n.includes('hidratante corporal') || n.includes('loção corporal') || n.includes('absorvente') || n.includes('depilação')) {
    return { category: 'Higiene Pessoal', subcategory: 'Cuidados Corporais' };
  }
  if (n.includes('batom') || n.includes('gloss') || n.includes('rímel') || n.includes('rimel') || n.includes('base facial') || n.includes('corretivo') || n.includes('pó compacto') || n.includes('blush') || n.includes('delineador') || n.includes('sombra') || n.includes('iluminador') || n.includes('maquiagem')) {
    return { category: 'Beleza', subcategory: 'Maquiagem' };
  }
  if (n.includes('perfume') || n.includes('colônia') || n.includes('colonia') || n.includes('eau de parfum') || n.includes('eau de toilette') || n.includes('body splash')) {
    return { category: 'Beleza e Perfumaria', subcategory: 'Perfumaria' };
  }
  return { category: 'Beleza e Perfumaria', subcategory: 'Cuidados Diários' };
}

function extractSize(name) {
  const match = name.match(/([0-9]+(?:\.[0-9]+)?\s*(?:ml|l|g|kg|mg|un|unidades|cápsulas|capsulas|doses|comprimidos|envelopes))/i);
  return match ? match[1].trim() : 'Unidade';
}

const CACHE_FILE = path.join(__dirname, '..', 'scratch', 'carvalho_imported_cache.json');
const OUTPUT_TS = path.join(__dirname, '..', 'src', 'data', 'carvalhoCatalog.ts');

async function fetchWithRetry(url, maxRetries = 5) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: AbortSignal.timeout(12000)
      });
      if (res.ok) return res;
    } catch (e) {
      if (attempt === maxRetries) throw e;
    }
    await new Promise(r => setTimeout(r, 600 * attempt));
  }
  throw new Error(`Failed to fetch ${url}`);
}

async function startImport() {
  console.log('--- RETOMANDO IMPORTAÇÃO TOTAL DROGARIA CARVALHO ---');
  const sitemapRes = await fetch('https://drogariacarvalho.com/sitemap.xml', { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const xml = await sitemapRes.text();
  const allUrls = [...xml.matchAll(/<loc>(https:\/\/drogariacarvalho\.com\/p\/[^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Total no sitemap: ${allUrls.length}`);

  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      console.log(`Carregado cache existente com ${Object.keys(cache).length} produtos.`);
    } catch (e) {}
  }

  let baseId = 10000001;
  const processedProducts = [];
  const processedUrls = new Set(Object.keys(cache));

  // Add cached items
  for (const url of Object.keys(cache)) {
    const item = cache[url];
    if (item && item.id) {
      processedProducts.push(item);
      existingNormalizedNames.add(normalizeText(item.name));
      if (item.id >= baseId) baseId = item.id + 1;
    }
  }

  const remainingUrls = allUrls.filter(u => !processedUrls.has(u));
  console.log(`URLs restantes para processar agora: ${remainingUrls.length}`);

  if (remainingUrls.length === 0) {
    console.log('Todas as URLs já foram processadas!');
    return;
  }

  const CONCURRENCY = 8;
  let cursor = 0;
  let ignoredCount = 0;
  let newImports = 0;
  let errorsCount = 0;

  async function worker() {
    while (cursor < remainingUrls.length) {
      const idx = cursor++;
      const u = remainingUrls[idx];

      try {
        const res = await fetchWithRetry(u);
        const html = await res.text();
        const match = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
        if (!match) {
          cache[u] = { empty: true };
          continue;
        }

        const data = JSON.parse(match[1]);
        const name = (data.name || '').trim();
        if (!name) {
          cache[u] = { empty: true };
          continue;
        }

        const norm = normalizeText(name);

        if (existingNormalizedNames.has(norm)) {
          ignoredCount++;
          cache[u] = { ignored: true, name };
          continue;
        }

        const rawPrice = data.offers ? parseFloat(data.offers.price) : 0;
        if (!rawPrice || isNaN(rawPrice) || rawPrice <= 0) {
          cache[u] = { no_price: true };
          continue;
        }

        // Exact 10% cheaper, no discount tag / no oldPrice
        const price10Cheaper = Number((rawPrice * 0.90).toFixed(2));

        let img = '';
        if (Array.isArray(data.image) && data.image.length > 0) {
          img = data.image[0];
        } else if (typeof data.image === 'string') {
          img = data.image;
        }
        if (!img) {
          const imgMatch = html.match(/src="(\/(?:essencial|catalogo|produtos)\/[^"]+)"/i);
          if (imgMatch) img = `https://drogariacarvalho.com${imgMatch[1]}`;
        }

        const brand = extractBrand(name);
        const { category, subcategory } = inferCategorySubcategory(name);
        const size = extractSize(name);
        const currentId = baseId++;

        const product = {
          id: currentId,
          name,
          size,
          price: price10Cheaper,
          rating: 4.8 + Number(((currentId % 3) * 0.1).toFixed(1)),
          reviews: 35 + (currentId % 95),
          image: img,
          brand,
          category,
          subcategory,
          description: data.description ? data.description.trim().slice(0, 2000) : `${name}. Produto original com procedência garantida e envio imediato pela Droga Raia.`,
          productCode: String(currentId)
        };

        cache[u] = product;
        processedProducts.push(product);
        existingNormalizedNames.add(norm);
        newImports++;
      } catch (err) {
        errorsCount++;
      }

      const totalDone = Object.keys(cache).length;
      if (totalDone % 100 === 0 || cursor >= remainingUrls.length) {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache), 'utf8');
        console.log(`[Progresso Total: ${totalDone}/${allUrls.length} (${((totalDone / allUrls.length) * 100).toFixed(1)}%)] Válidos acumulados: ${processedProducts.length} | Novos nesta rodada: ${newImports} | Erros: ${errorsCount}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache), 'utf8');

  const validProducts = processedProducts.filter(p => p && p.id && p.name && p.price);
  console.log(`\nImportação total finalizada! Total de produtos válidos: ${validProducts.length}`);

  const tsContent = `import { Product } from './products';

/**
 * Catálogo importado da Drogaria Carvalho com 10% de desconto aplicado.
 * Total de produtos importados: ${validProducts.length}
 */
export const carvalhoCatalog: Product[] = ${JSON.stringify(validProducts, null, 2)};
`;

  fs.writeFileSync(OUTPUT_TS, tsContent, 'utf8');
  console.log(`Arquivo salvo: ${OUTPUT_TS}`);
}

startImport().catch(console.error);
