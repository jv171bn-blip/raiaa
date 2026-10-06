import { Product } from './products';

/**
 * Palavras-chave e marcas pesquisadas na web como campeões de vendas e produtos em alta
 * nas principais farmácias do Brasil (Droga Raia / Raia Drogasil):
 *
 * 1. Medicamentos crônicos e de alta rotatividade: Glifage, Losartana, Tadalafila, Cialis,
 *    Dorflex, Neosaldina, Dipirona, Paracetamol, Tylenol, Neosoro, Torsilax, Benegrip,
 *    Coristina D, Cimegripe, Omeprazol, Buscopan, Buscofem, Luftal, Simeticona, Vick VapoRub,
 *    Aspirina Prevent, Allegra, Loratadina, Floratil, Enterogermina.
 *
 * 2. Mamãe e Bebê campeões: Pampers Confort Sec, Pampers Pants, Huggies Supreme Care,
 *    Bepantol Baby, Hipoglós Amêndoas, Desitin Roxa, Aptamil Profutura, Nan Supreme, Mucilon.
 *
 * 3. Skincare & Dermocosméticos em alta: La Roche-Posay Anthelios, ISDIN Fusion Water,
 *    Bioré Aqua Rich, Principia Sérum Niacinamida / Vitamina C / Protetor / Gel,
 *    CeraVe Loção, Cetaphil, Eucerin Oil Control, Beauty of Joseon, COSRX, Hada Labo.
 *
 * 4. Cabelos em alta: Elseve Glycolic Gloss, Óleo Extraordinário, Reparação Total 5,
 *    Pantene Bambu / Hidratação / Colágeno, Dove Reconstrução, TRESemmé.
 *
 * 5. Aparelhos e Suplementos líderes: Omron Aparelho de Pressão, Accu-Chek Glicosímetro,
 *    Termômetro Digital G-Tech, Curativos Band-Aid, Creatina Creapure Vitafor, Addera D3,
 *    Puravida Biotrimag Magnésio.
 */
export const TRENDING_KEYWORDS = [
  'tadalafila',
  'cialis',
  'glifage',
  'losartana',
  'dorflex',
  'neosaldina',
  'dipirona',
  'tylenol',
  'paracetamol',
  'neosoro',
  'torsilax',
  'benegrip',
  'coristina',
  'cimegripe',
  'omeprazol',
  'pantoprazol',
  'buscopan',
  'buscofem',
  'luftal',
  'simeticona',
  'vick',
  'aspirina',
  'allegra',
  'loratadina',
  'floratil',
  'enterogermina',
  'pampers',
  'huggies',
  'bepantol',
  'hipoglós',
  'hipoglos',
  'desitin',
  'aptamil',
  'nan',
  'mucilon',
  'anthelios',
  'fusion water',
  'aqua rich',
  'principia',
  'cerave',
  'cetaphil',
  'oil control',
  'glycolic gloss',
  'óleo extraordinário',
  'oleo extraordinario',
  'pantene',
  'dove',
  'tresemmé',
  'tresemme',
  'omron',
  'accu-chek',
  'accuchek',
  'termômetro',
  'termometro',
  'band-aid',
  'bandaid',
  'creatina',
  'addera',
  'biotrimag',
  'sensodyne',
  'colgate',
  'rexona',
];

/**
 * Algoritmo de embaralhamento Fisher-Yates (100% aleatório e estatisticamente uniforme)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Verifica se o produto é uma fralda ou produto com variação de tamanho (P, M, G, XG, XXG)
 */
export function isSizedDiaperProduct(p: Product): boolean {
  if (!p || !p.name) return false;
  const name = (p.name || '').toUpperCase();
  const sub = (p.subcategory || '').toUpperCase();

  // Lenços umedecidos, pomadas, cremes não são fraldas de tamanho P/M/G
  if (
    name.includes('LENÇO') ||
    name.includes('LENCO') ||
    name.includes('TOALH') ||
    name.includes('POMADA') ||
    name.includes('CREME')
  ) {
    return false;
  }

  return (
    name.includes('FRALDA') ||
    sub.includes('FRALDA') ||
    name.includes('PANTS') ||
    name.includes('ROUPA ÍNTIMA') ||
    name.includes('ROUPA INTIMA') ||
    name.includes('TENA SLIP') ||
    name.includes('BIGFRAL')
  );
}

/**
 * Extrai a sigla do tamanho do produto (P, M, G, XG, XXG)
 */
export function getProductSizeTag(p: Product): 'P' | 'M' | 'G' | 'XG' | 'XXG' | 'OUTRO' {
  if (!p || !p.name) return 'OUTRO';
  const text = `${p.name} ${p.size || ''}`.toUpperCase();
  if (text.includes('XXG') || text.includes('XX-G') || text.includes('EXTRA EXTRA') || text.includes('TAM XXG')) {
    return 'XXG';
  }
  if (text.includes('XG') || text.includes('G/XG') || text.includes('EXTRA G') || text.includes('TAM XG')) {
    return 'XG';
  }
  if (
    text.includes('TAMANHO G') ||
    text.includes('TAM G') ||
    text.includes(' TAM. G') ||
    text.includes('TAM.G') ||
    /\bTAM[\s.:-]*G\b/.test(text) ||
    /\bTAMANHO[\s.:-]*G\b/.test(text) ||
    text.includes(' G ') ||
    text.endsWith(' G')
  ) {
    return 'G';
  }
  if (
    text.includes('TAMANHO M') ||
    text.includes('TAM M') ||
    text.includes(' TAM. M') ||
    text.includes('TAM.M') ||
    /\bTAM[\s.:-]*M\b/.test(text) ||
    /\bTAMANHO[\s.:-]*M\b/.test(text) ||
    text.includes(' M ') ||
    text.endsWith(' M')
  ) {
    return 'M';
  }
  if (
    text.includes('TAMANHO P') ||
    text.includes('TAM P') ||
    text.includes(' TAM. P') ||
    text.includes('TAM.P') ||
    /\bTAM[\s.:-]*P\b/.test(text) ||
    /\bTAMANHO[\s.:-]*P\b/.test(text) ||
    text.includes(' P ') ||
    text.endsWith(' P') ||
    text.includes(' RN')
  ) {
    return 'P';
  }
  return 'OUTRO';
}

/**
 * Regra da Página Inicial (solicitada pelo usuário):
 * "deixe somente fralda pampers confort sec"
 *
 * Para qualquer produto com variação de tamanho (fraldas infantis/geriátricas):
 * - Bloqueia qualquer marca/linha que não seja Pampers Confort Sec
 * - Permite exclusivamente os tamanhos P, M e G da linha Confort Sec
 * - Bloqueia totalmente tamanhos XG e XXG na página inicial
 * - Demais produtos (remédios, dermocosméticos, higiene, suplementos, etc.) são exibidos normalmente
 */
export function isAllowedOnHomepage(p: Product): boolean {
  if (!p || !p.name) return false;
  if (isSizedDiaperProduct(p)) {
    const name = p.name.toLowerCase();
    const brand = (p.brand || '').toLowerCase();
    const isPampers = name.includes('pampers') || brand.includes('pampers');
    const isConfortSec = name.includes('confort sec');

    // Somente fralda Pampers Confort Sec é permitida na página inicial
    if (!isPampers || !isConfortSec) {
      return false;
    }

    const size = getProductSizeTag(p);
    return size === 'P' || size === 'M' || size === 'G';
  }
  return true;
}

/**
 * Retorna o pool de produtos que estão comprovadamente em alta e vendendo bem
 * Filtrado rigorosamente para que produtos de tamanho mostrem apenas M e G (sem XG, XXG ou P na home)
 */
export function getTrendingPool(allProducts: Product[]): Product[] {
  const lowerKeywords = TRENDING_KEYWORDS.map(k => k.toLowerCase());

  const matched = allProducts.filter(p => {
    if (!p || !p.name) return false;
    if (!isAllowedOnHomepage(p)) return false;
    const name = p.name.toLowerCase();
    const brand = (p.brand || '').toLowerCase();
    const cat = (p.category || '').toLowerCase();

    return lowerKeywords.some(k => name.includes(k) || brand.includes(k) || cat.includes(k));
  });

  const validPool = matched.filter(isAllowedOnHomepage);
  return validPool.length >= 30 ? validPool : allProducts.filter(isAllowedOnHomepage);
}

/**
 * Resolve uma lista curada de produtos autênticos da Droga Raia para cada seção,
 * garantindo ordenação por relevância real de farmácia e validação de tamanho de fraldas (apenas M e G).
 */
function resolveCuratedSection(
  curatedQueries: string[],
  allProducts: Product[],
  fallbackPool: Product[],
  count: number
): Product[] {
  const result: Product[] = [];
  const seenIds = new Set<number>();

  for (const q of curatedQueries) {
    const lower = q.toLowerCase().trim();
    const tokens = lower.split(/\s+/).filter(t => t.length >= 2);

    // 1. Prioriza correspondência com imagem local (/products/)
    let p = allProducts.find(item => {
      if (!item || !isAllowedOnHomepage(item) || seenIds.has(item.id)) return false;
      const name = (item.name || '').toLowerCase();
      const brand = (item.brand || '').toLowerCase();
      const full = `${name} ${brand}`;
      const matchesAllTokens = tokens.every(t => full.includes(t));
      const hasLocalImage = item.image && item.image.startsWith('/products/');
      return matchesAllTokens && hasLocalImage;
    });

    // 2. Se não encontrar por tokens, busca substring no nome com imagem local
    if (!p) {
      p = allProducts.find(item => {
        if (!item || !isAllowedOnHomepage(item) || seenIds.has(item.id)) return false;
        const name = (item.name || '').toLowerCase();
        const hasLocalImage = item.image && item.image.startsWith('/products/');
        return name.includes(lower) && hasLocalImage;
      });
    }

    // 3. Se ainda não encontrar, aceita produto correspondente válido
    if (!p) {
      p = allProducts.find(item => {
        if (!item || !isAllowedOnHomepage(item) || seenIds.has(item.id)) return false;
        const name = (item.name || '').toLowerCase();
        const brand = (item.brand || '').toLowerCase();
        const full = `${name} ${brand}`;
        return tokens.every(t => full.includes(t));
      });
    }

    if (p && !seenIds.has(p.id)) {
      result.push(p);
      seenIds.add(p.id);
    }
  }

  // Completa com os melhores itens do fallback se necessário, priorizando imagens locais
  for (const p of fallbackPool) {
    if (result.length >= count) break;
    if (p && isAllowedOnHomepage(p) && !seenIds.has(p.id)) {
      result.push(p);
      seenIds.add(p.id);
    }
  }

  return result.slice(0, count);
}

import { ultraBrasilProducts } from './ultraBrasilProducts';
import { novosKitsCarvalhoUltra } from './novosKitsCarvalhoUltra';

const allAvailableProducts = [...ultraBrasilProducts, ...novosKitsCarvalhoUltra];

/**
 * Helper para selecionar e alternar produtos por categoria
 */
function pickUltraItems(
  pool: Product[],
  predicate: (cat: string, name: string, brand: string) => boolean,
  count: number,
  usedIds: Set<number>
): Product[] {
  const matches = pool.filter(p => {
    if (!p || usedIds.has(p.id) || !isAllowedOnHomepage(p)) return false;
    const cat = (p.category || '').toLowerCase();
    const name = (p.name || '').toLowerCase();
    const brand = (p.brand || '').toLowerCase();
    return predicate(cat, name, brand);
  });
  const shuffled = shuffleArray(matches);
  const picked = shuffled.slice(0, count);
  picked.forEach(p => usedIds.add(p.id));
  return picked;
}

/**
 * Seleciona pacotes EXCLUSIVAMENTE de fralda Pampers Confort Sec nos tamanhos P, M e G
 * priorizando especificamente as ofertas solicitadas (M 70 Unidades e G 98 Unidades).
 */
function pickPampersSizes(pool: Product[], usedIds: Set<number>): Product[] {
  const pampers = pool.filter(p => {
    if (!p || !p.name) return false;
    const n = p.name.toLowerCase();
    const b = (p.brand || '').toLowerCase();
    const isPampers = n.includes('pampers') || b.includes('pampers');
    const isConfortSec = n.includes('confort sec');
    return isPampers && n.includes('fralda') && isConfortSec;
  });

  const pItems = pampers.filter(p => getProductSizeTag(p) === 'P');
  const mItems = pampers.filter(p => getProductSizeTag(p) === 'M');
  const gItems = pampers.filter(p => getProductSizeTag(p) === 'G');

  const picked: Product[] = [];

  // P (prioriza pacotes autênticos como 72un ou 50un)
  const availableP = pItems.filter(p => !usedIds.has(p.id));
  const poolP = availableP.length ? availableP : pItems;
  const chosenP = shuffleArray(poolP)[0];
  if (chosenP) {
    picked.push(chosenP);
    usedIds.add(chosenP.id);
  }

  // M (prioriza especificamente a oferta de 70 unidades solicitada pelo usuário)
  const availableM = mItems.filter(p => !usedIds.has(p.id));
  const poolM = availableM.length ? availableM : mItems;
  const preferredM = poolM.filter(p => p.name.includes('70'));
  const chosenM = shuffleArray(preferredM.length ? preferredM : poolM)[0];
  if (chosenM) {
    picked.push(chosenM);
    usedIds.add(chosenM.id);
  }

  // G (prioriza especificamente a oferta de 98 unidades solicitada pelo usuário)
  const availableG = gItems.filter(p => !usedIds.has(p.id));
  const poolG = availableG.length ? availableG : gItems;
  const preferredG = poolG.filter(p => p.name.includes('98'));
  const chosenG = shuffleArray(preferredG.length ? preferredG : poolG)[0];
  if (chosenG) {
    picked.push(chosenG);
    usedIds.add(chosenG.id);
  }

  return picked;
}

/**
 * Intercala itens de forma espaçada em uma lista base para que nunca fiquem
 * adjacentes ("um ao lado do outro"), distribuindo-os uniformemente pelo carrossel.
 */
function scatterItems(
  baseList: Product[],
  itemsToScatter: Product[],
  startOffset = 1,
  interval = 4
): Product[] {
  const result: Product[] = [...baseList];
  if (!itemsToScatter || itemsToScatter.length === 0) return result;

  itemsToScatter.forEach((item, idx) => {
    const targetIndex = Math.min(startOffset + idx * (interval + 1), result.length);
    result.splice(targetIndex, 0, item);
  });

  return result;
}

/**
 * Garante que nenhum pacote de fralda fique imediatamente ao lado de outro,
 * mantendo uma distância mínima de separação entre fraldas no carrossel.
 */
function separateDiapers(list: Product[], minSeparation = 2): Product[] {
  const result = [...list];
  for (let i = 0; i < result.length; i++) {
    if (isSizedDiaperProduct(result[i])) {
      for (let j = 1; j <= minSeparation && i + j < result.length; j++) {
        if (isSizedDiaperProduct(result[i + j])) {
          // Busca um produto que não seja fralda mais à frente para trocar
          const swapIdx = result.findIndex(
            (p, k) => k > i + minSeparation && !isSizedDiaperProduct(p)
          );
          if (swapIdx !== -1) {
            const temp = result[i + j];
            result[i + j] = result[swapIdx];
            result[swapIdx] = temp;
          }
        }
      }
    }
  }
  return result;
}

/**
 * 1. Mais Comprados: Campeões absolutos da lista Ultra Brasil e Pampers P, M e G espalhados
 * (Fraldas Pampers P, M e G intercaladas, Whey Protein, Creatinas, Pomada Bepantol Baby, CeraVe, Bioderma, Gillette Mach3, etc.)
 */
export function getRandomMaisComprados(allProducts: Product[], count = 16): Product[] {
  const source = allProducts && allProducts.length ? allProducts.filter(isAllowedOnHomepage) : allAvailableProducts.filter(isAllowedOnHomepage);
  const used = new Set<number>();

  // Pacotes de fralda Pampers tamanhos P, M e G solicitados explicitamente
  const pampersPmg = pickPampersSizes(source, used);

  const baseItems: Product[] = [
    // Suplementos campeões (Whey, Creatina, BCAA)
    ...pickUltraItems(source, (c, n) => n.includes('whey') || n.includes('creatina') || n.includes('bcaa'), 3, used),
    // Mamãe e Bebê (pomada Bepantol Baby, etc.)
    ...pickUltraItems(source, (c, n) => n.includes('bepantol') || n.includes('baby'), 2, used),
    // Dermocosméticos e Skincare de alta performance
    ...pickUltraItems(source, (c, n) => c.includes('dermo') || n.includes('micelar') || n.includes('hidratante') || n.includes('cicaplast'), 3, used),
    // Higiene Pessoal, Barba e Bucal
    ...pickUltraItems(source, (c, n) => n.includes('gillette') || n.includes('oneblade') || n.includes('dental') || n.includes('desodorante') || n.includes('always'), 3, used),
    // Maquiagem e Beleza
    ...pickUltraItems(source, (c, n) => c.includes('maquiag') || n.includes('base') || n.includes('blush') || n.includes('delineador'), 3, used),
  ];

  // Completa os itens base com outros itens sem ser fraldas (para manter os pacotes Pampers distribuídos)
  const remaining = shuffleArray(source.filter(p => !used.has(p.id) && !isSizedDiaperProduct(p)));
  for (const p of remaining) {
    if (baseItems.length >= count - pampersPmg.length) break;
    baseItems.push(p);
    used.add(p.id);
  }

  // Intercala os pacotes Pampers P, M e G espalhados pela seção (nunca um ao lado do outro)
  const list = scatterItems(baseItems, pampersPmg, 1, 4);
  return separateDiapers(list).slice(0, count);
}

/**
 * 2. Black do Dia Com até 70%: Ofertas com desconto da lista Ultra Brasil
 * (Inclui as ofertas de Pampers Confort Sec M e G com desconto de -10%, espalhadas entre os itens)
 */
export function getRandomBlackDoDia(allProducts: Product[], count = 14): Product[] {
  const source = (allProducts && allProducts.length ? allProducts : allAvailableProducts).filter(isAllowedOnHomepage);
  const discounted = source.filter(p => (p.discount && p.discount > 0) || (p.oldPrice && p.oldPrice > p.price));

  // Ofertas com desconto de fraldas Pampers Confort Sec (-10% M 70un e G 98un)
  const pampersDiscounted = discounted.filter(p => {
    const n = (p.name || '').toLowerCase();
    return n.includes('pampers') && n.includes('confort sec');
  });

  const otherDiscounted = shuffleArray(discounted.filter(p => !isSizedDiaperProduct(p)));
  const baseItems = otherDiscounted.slice(0, Math.max(0, count - pampersDiscounted.length));

  // Espalha as ofertas de fraldas Pampers entre os demais produtos com desconto
  const list = scatterItems(baseItems, pampersDiscounted, 2, 4);
  return separateDiapers(list).slice(0, count);
}

/**
 * 3. Destaques da Semana: Fraldas Pampers P, M e G espalhadas, Saúde, Tratamento Capilar e Skincare
 */
export function getRandomDestaquesSemana(allProducts: Product[], count = 14): Product[] {
  const source = allProducts && allProducts.length ? allProducts.filter(isAllowedOnHomepage) : allAvailableProducts.filter(isAllowedOnHomepage);
  const used = new Set<number>();

  // Pacotes de fralda Pampers tamanhos P, M e G solicitados explicitamente
  const pampersPmg = pickPampersSizes(source, used);

  const baseItems: Product[] = [
    // Saúde das articulações e bem-estar (Colaten, Colflex, Cartliv, Exímia)
    ...pickUltraItems(source, (c, n) => n.includes('colaten') || n.includes('colflex') || n.includes('cartliv') || n.includes('eximia') || n.includes('artrogen'), 3, used),
    // Cabelos & Cuidados Capilares Avançados (Kérastase, Wella, Lizze Extreme)
    ...pickUltraItems(source, (c, n) => c.includes('cabelo') || n.includes('kerastase') || n.includes('wella') || n.includes('lizze'), 3, used),
    // Cuidados Dermatológicos Intensivos (SkinCeuticals, Neostrata, Avène Retrinal, Vichy)
    ...pickUltraItems(source, (c, n) => n.includes('skinceuticals') || n.includes('neostrata') || n.includes('avene') || n.includes('vichy'), 3, used),
    // Suplementos Especiais & Performance (Dux, Soldiers, Darkness, New Millen C4)
    ...pickUltraItems(source, (c, n) => n.includes('dux') || n.includes('soldiers') || n.includes('darkness') || n.includes('new millen') || n.includes('glutamina'), 2, used),
  ];

  const remaining = shuffleArray(source.filter(p => !used.has(p.id) && !isSizedDiaperProduct(p)));
  for (const p of remaining) {
    if (baseItems.length >= count - pampersPmg.length) break;
    baseItems.push(p);
    used.add(p.id);
  }

  // Intercala os pacotes Pampers P, M e G espalhados pela seção (ordem alternada, nunca lado a lado)
  const list = scatterItems(baseItems, shuffleArray(pampersPmg), 2, 3);
  return separateDiapers(list).slice(0, count);
}

/**
 * 4. Marcas Favoritas: Marcas consagradas presentes na lista Ultra Brasil
 * (Pampers, Huggies, MamyPoko, CeraVe, Bioderma, Avène, Max Titanium, Integralmedica, Colgate, Sensodyne, Wella, etc.)
 */
export function getRandomMarcasFavoritas(allProducts: Product[], count = 14): Product[] {
  const source = (allProducts && allProducts.length ? allProducts : allAvailableProducts).filter(isAllowedOnHomepage);
  const topBrands = [
    'pampers', 'huggies', 'mamypoko', 'cerave', 'bioderma', 'avène', 'avene',
    'max titanium', 'integralmedica', 'colgate', 'sensodyne', 'wella', 'vichy',
    'eucerin', 'dior', 'fenty', 'rare beauty'
  ];

  const brandMatches = source.filter(p => {
    const b = (p.brand || '').toLowerCase();
    const n = (p.name || '').toLowerCase();
    return topBrands.some(tb => b.includes(tb) || n.includes(tb));
  });

  const shuffled = separateDiapers(shuffleArray(brandMatches));
  if (shuffled.length >= count) return shuffled.slice(0, count);

  return separateDiapers(shuffleArray(source)).slice(0, count);
}

/**
 * 5. Beleza Asiática / Maquiagem & Skincare Premium da lista Ultra Brasil
 * (Bases, Batons, Paletas e Skincare de Alta Tecnologia: Rare Beauty, Fenty Beauty, Dior, YSL, Huda Beauty, Too Faced, Benefit, Nars, Shiseido, etc.)
 */
export function getRandomBelezaAsiatica(allProducts: Product[], asianBeautyList: Product[], count = 9): Product[] {
  const source = (allProducts && allProducts.length ? allProducts : allAvailableProducts).filter(isAllowedOnHomepage);
  const beautyItems = source.filter(p => {
    const c = (p.category || '').toLowerCase();
    const n = (p.name || '').toLowerCase();
    return c.includes('maquiag') || c.includes('beleza') || n.includes('base') || n.includes('blush') || n.includes('delineador') || n.includes('batom') || n.includes('bronzer') || n.includes('máscara') || n.includes('shiseido');
  });

  const shuffled = shuffleArray(beautyItems);
  if (shuffled.length >= count) return shuffled.slice(0, count);

  return shuffleArray(source).slice(0, count);
}

export interface HomepageRotatingData {
  maisComprados: Product[];
  blackDoDia: Product[];
  destaquesSemana: Product[];
  marcasFavoritas: Product[];
  belezaAsiatica: Product[];
  generatedAt: Date;
}

/**
 * Gera um conjunto exclusivo de produtos da lista Ultra Brasil para todas as seções
 * da página inicial, alternando dinamicamente entre eles com fotos 100% autênticas
 * e validação estrita de fraldas (somente tamanhos M e G).
 */
export function generateHomepageRotatingData(allProducts: Product[], asianBeautyList: Product[]): HomepageRotatingData {
  return {
    maisComprados: getRandomMaisComprados(allProducts, 16).filter(isAllowedOnHomepage),
    blackDoDia: getRandomBlackDoDia(allProducts, 14).filter(isAllowedOnHomepage),
    destaquesSemana: getRandomDestaquesSemana(allProducts, 14).filter(isAllowedOnHomepage),
    marcasFavoritas: getRandomMarcasFavoritas(allProducts, 14).filter(isAllowedOnHomepage),
    belezaAsiatica: getRandomBelezaAsiatica(allProducts, asianBeautyList, 9).filter(isAllowedOnHomepage),
    generatedAt: new Date(),
  };
}

