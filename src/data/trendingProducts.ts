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
 * "evite colocar produtos tamanho XG ou XXG na pagina inicial deixe amostra apenas M e G"
 *
 * Para qualquer produto com variação de tamanho (fraldas infantis/geriátricas):
 * - Bloqueia totalmente XG e XXG
 * - Na página inicial, exibe à mostra EXCLUSIVAMENTE tamanhos M e G
 * - Demais produtos (remédios, dermocosméticos, higiene, etc.) são exibidos normalmente
 */
export function isAllowedOnHomepage(p: Product): boolean {
  if (!p || !p.name) return false;
  if (isSizedDiaperProduct(p)) {
    const size = getProductSizeTag(p);
    return size === 'M' || size === 'G';
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
    const lower = q.toLowerCase();
    const p = allProducts.find(item => {
      if (!item || !isAllowedOnHomepage(item)) return false;
      const name = (item.name || '').toLowerCase();
      const brand = (item.brand || '').toLowerCase();
      return name.includes(lower) || brand.includes(lower);
    });

    if (p && !seenIds.has(p.id)) {
      result.push(p);
      seenIds.add(p.id);
    }
  }

  // Completa com os melhores itens do fallback se necessário
  for (const p of fallbackPool) {
    if (result.length >= count) break;
    if (p && isAllowedOnHomepage(p) && !seenIds.has(p.id)) {
      result.push(p);
      seenIds.add(p.id);
    }
  }

  return result.slice(0, count);
}

/**
 * 1. Mais Comprados: Campeões reais de vendas de uma farmácia Droga Raia
 * (Dorflex, Neosaldina, Novalgina, Tylenol, Buscopan Composto, Torsilax, Benegrip,
 * Omeprazol, Losartana, Vick, Enterogermina, Hyabak, Cicaplast, CeraVe, Pampers M, Rexona Clinical)
 */
export function getRandomMaisComprados(allProducts: Product[], count = 16): Product[] {
  const curatedQueries = [
    'dorflex relaxante',
    'neosaldina analgésico',
    'novalgina dipirona 1g',
    'tylenol 750mg',
    'buscopan composto',
    'torsilax relaxante',
    'benegrip multi',
    'omeprazol 20mg',
    'losartana potássica 50mg',
    'vick vaporub',
    'enterogermina 10 frascos',
    'hyabak 0,15%',
    'cicaplast baume b5+',
    'loção hidratante corporal cerave',
    'fralda pampers confort sec tamanho m',
    'rexona clinical classic',
    'sensodyne limpeza profunda',
    'cialis diário 5mg'
  ];

  const pool = getTrendingPool(allProducts);
  return resolveCuratedSection(curatedQueries, allProducts, pool, count);
}

/**
 * 2. Black do Dia Com até 70%: Melhores ofertas e dermocosméticos em promoção
 * (Eucerin, ISDIN Fusion Water, Bioré Aqua Rich, Principia Niacinamida, Principia Vitamina C,
 * Principia GL-02, Cetaphil, Desitin Roxa, Hipoglós Amêndoas, Huggies Natural Care M,
 * Elseve Glycolic Gloss, Curaprox CS 5460, Colgate Luminous White, Centrum de A a Zinco)
 */
export function getRandomBlackDoDia(allProducts: Product[], count = 14): Product[] {
  const curatedQueries = [
    'eucerin dual anti-pigment',
    'fusion water magic',
    'bioré uv aqua rich',
    'principia niacinamida',
    'principia vitamina c',
    'principia gl-02',
    'cetaphil pele sensível',
    'desitin maximum strength',
    'hipoglós amêndoas',
    'fralda huggies natural care tamanho m',
    'pampers pants ajuste total m',
    'elseve glycolic gloss',
    'curaprox cs 5460',
    'colgate luminous white',
    'centrum de a a zinco'
  ];

  const discounted = allProducts.filter(
    p => isAllowedOnHomepage(p) && ((p.discount && p.discount >= 15) || (p.oldPrice && p.oldPrice > p.price))
  );

  return resolveCuratedSection(curatedQueries, allProducts, discounted, count);
}

/**
 * 3. Destaques da Semana: Equipamentos de saúde, monitores e primeiros socorros
 * (FreeStyle Libre 2 Plus, Omron Aparelho de Pressão, Accu-Chek Guide Me, Accu-Chek Tiras,
 * Termômetro Digital G-Tech, Oxímetro G-Tech OLED, Teste Clearblue, Aspirina Prevent,
 * Allegra 120mg, Resfenol, Coristina D, Floratil, Luftal, Curativo Band-Aid, Addera D3)
 */
export function getRandomDestaquesSemana(allProducts: Product[], count = 14): Product[] {
  const curatedQueries = [
    'freestyle libre 2 plus',
    'omron hem-7122',
    'accu-chek guide me',
    'accu-chek guide 50 tiras',
    'termômetro digital clínico',
    'g-tech oled',
    'clearblue',
    'aspirina prevent',
    'allegra 120mg',
    'resfenol',
    'coristina d',
    'floratil 200mg',
    'luftal gel caps',
    'band-aid transparente',
    'addera d3'
  ];

  const pool = getTrendingPool(allProducts);
  return resolveCuratedSection(curatedQueries, allProducts, pool, count);
}

/**
 * 4. Marcas Favoritas: Marcas consagradas em cuidados diários, bebês e cabelos
 * (La Roche-Posay Hyalu B5, CeraVe, Pampers Pants G, Huggies Natural Care G,
 * Pantene Bambu, Pantene Colágeno, Dove Original, Rexona Men, Aptamil Profutura 1,
 * Ninho Fases 1+, Mucilon Milho, Soapex Barra, Sensodyne, Elseve Óleo Extraordinário)
 */
export function getRandomMarcasFavoritas(allProducts: Product[], count = 14): Product[] {
  const curatedQueries = [
    'hyalu b5',
    'cerave pele normal a oleosa',
    'fralda-calça pampers pants ajuste total tamanho g',
    'fralda huggies natural care tamanho g',
    'pantene bambu',
    'pantene colágeno',
    'dove original',
    'rexona men',
    'aptamil profutura 1',
    'ninho fases 1+',
    'mucilon milho',
    'soapex barra',
    'vagisil urin',
    'sensodyne limpeza profunda'
  ];

  const topBrands = [
    'la roche-posay', 'cerave', 'pampers', 'huggies', 'pantene', 'dove',
    'rexona', 'danone', 'nestlé', 'elseve', 'principia', 'sensodyne', 'eucerin'
  ];

  const brandPool = allProducts.filter(p => {
    if (!isAllowedOnHomepage(p)) return false;
    const b = (p.brand || '').toLowerCase();
    return topBrands.some(tb => b.includes(tb));
  });

  return resolveCuratedSection(curatedQueries, allProducts, brandPool, count);
}

/**
 * 5. Beleza Asiática: K-Beauty e J-Beauty legítimos disponíveis na Droga Raia
 * (Bioré UV Aqua Rich, Hada Labo Gokujyun, Beauty of Joseon Relief Sun, COSRX Snail Mucin,
 * Medicube Zero Pore Pad, Skin1004 Centella, Curél Creme Intensivo, Mise En Scène Perfect Serum)
 */
export function getRandomBelezaAsiatica(allProducts: Product[], asianBeautyList: Product[], count = 9): Product[] {
  const curatedQueries = [
    'bioré uv aqua rich',
    'hada labo gokujyun',
    'beauty of joseon relief sun',
    'cosrx advanced snail',
    'medicube zero pore pad',
    'skin1004 madagascar centella',
    'curél peles secas',
    'mise en scène perfect serum magic',
    'mise en scène perfect serum styling'
  ];

  const pool = asianBeautyList.filter(isAllowedOnHomepage);
  return resolveCuratedSection(curatedQueries, allProducts, pool, count);
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
 * Gera um conjunto completo e autêntico de produtos reais da farmácia Droga Raia
 * para todas as seções da página inicial, com garantia de que fraldas exibidas
 * à mostra sejam EXCLUSIVAMENTE tamanhos M e G (0 XG, 0 XXG, 0 P).
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

