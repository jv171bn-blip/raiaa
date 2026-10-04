import { Product } from './products';

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  helpfulCount: number;
}

export interface AttributeRating {
  name: string;
  labels: [string, string, string]; // [left, middle, right]
  activeSegment: 1 | 2 | 3 | 4; // 1 to 4
}

export interface ProductReviewsData {
  rating: number;
  reviewsCount: number;
  recommendedPercentage: number;
  aiSummary: string;
  attributes: AttributeRating[];
  highlightTags: string[];
  reviews: CustomerReview[];
}

// Global author pool of 120 authentic Brazilian customer names
const AUTHOR_POOL = [
  'Bruno S.', 'Débora F.', 'Lucas T.', 'Carlos M.', 'Mariana C.',
  'Rafael O.', 'Patrícia B.', 'Fernanda L.', 'Thiago M.', 'Amanda R.',
  'Rodrigo K.', 'Juliana P.', 'Leandro S.', 'Camila N.', 'Gabriel H.',
  'Vanessa D.', 'Marcelo F.', 'Beatriz Ramos', 'André P.', 'Tatiane B.',
  'Lucas Mendes', 'Cláudia Siqueira', 'Renata V.', 'Felipe N.', 'Larissa T.',
  'Diego Rocha', 'Aline G.', 'Thais M.', 'Rodrigo Cunha', 'Tatiana C.',
  'Rogério Lima', 'Alexandre P.', 'Eduardo M.', 'Fabiana L.', 'Guilherme P.',
  'Helena V.', 'Igor A.', 'Joana M.', 'Natália N.', 'Otávio B.',
  'Priscila V.', 'Rafaela B.', 'Samuel X.', 'Viviane S.', 'Leonardo C.',
  'Sabrina M.', 'Wagner P.', 'Gisele A.', 'Caio R.', 'Carolina D.',
  'Marcos Vinícius', 'Larissa Prado', 'Carlos Eduardo', 'Thiago Rocha', 'Vanessa Guimarães',
  'Gustavo Borges', 'Tatiana Martins', 'André Luiz', 'Roberto Fonseca', 'Daniel Carvalho',
  'Patrícia Ramos', 'Camila Souza', 'Fernanda Neves', 'Mariana Toledo', 'Aline Duarte',
  'Carolina Prado', 'Rafael Meireles', 'Renata Vasconcelos', 'Fernando Dias', 'Cláudia Duarte',
  'Diego Antunes', 'Vinícius Paiva', 'Bárbara Fontes', 'Maurício Silveira', 'Simone Peixoto',
  'Henrique Macedo', 'Isabela Morais', 'Danilo Alencar', 'Carla Medeiros', 'Fábio Nogueira',
  'Letícia Santoro', 'Murilo Bernardes', 'Renan Castro', 'Juliana Farias', 'Erick Bittencourt',
  'Luiza Xavier', 'Cássio Sampaio', 'Priscila Leite', 'Matheus Vieira', 'Paula Guimarães',
  'Ricardo Antunes', 'Bianca Teles', 'Felipe Toledo', 'Taís Albuquerque', 'Gustavo Pires',
  'Flávia Ribeiro', 'Breno Salgado', 'Monique Tavares', 'Sérgio Meira', 'Daniele Siqueira',
  'Luan Camargo', 'Sabrina Fontes', 'Alan Vasconcelos', 'Kelly Rocha', 'Hugo Medeiros',
  'Jéssica Prado', 'Vitor Fagundes', 'Elisa Cavalcanti', 'Tales Silveira', 'Bruna Furtado',
  'Caio Nogueira', 'Mirella Paiva', 'Wesley Santos', 'Lorena Barreto', 'Douglas Ramos',
  'Talita Vianna', 'Yuri Morais', 'Camila Ferraz', 'Robson Toledo', 'Paloma Meireles'
];

// Base dates pool spread over 24 months
const DATES_POOL = [
  '18/02/2024', '04/02/2024', '22/01/2024', '15/01/2024', '28/12/2023',
  '12/12/2023', '26/11/2023', '14/11/2023', '29/10/2023', '15/10/2023',
  '03/10/2023', '19/09/2023', '05/09/2023', '20/08/2023', '08/08/2023',
  '24/07/2023', '11/07/2023', '27/06/2023', '15/06/2023', '30/05/2023',
  '14/05/2023', '28/04/2023', '12/04/2023', '27/03/2023', '10/03/2023',
  '22/02/2023', '05/02/2023', '18/01/2023', '04/01/2023', '16/12/2022'
];

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// -------------------------------------------------------------
// Helper to extract clean, natural Brazilian Portuguese product phrasing
// e.g. "a fralda Pampers", "o desodorante Rexona", "o protetor solar Needs"
// NEVER includes technical specifications like "G 60 unidades", "150ml", "40g", etc.
// -------------------------------------------------------------
export function getNaturalProductPhrasing(product: Product): {
  article: string;
  noun: string;
  brand: string;
  nounWithBrand: string;
  nounWithBrandCapital: string;
} {
  const pName = (product.name || '').toLowerCase();
  const pBrand = (product.brand || '').trim();
  const pSub = (product.subcategory || '').toLowerCase();
  const pCat = (product.category || '').toLowerCase();
  const full = `${pName} ${pBrand} ${pSub} ${pCat}`.toLowerCase();

  // Extract clean, recognizable brand name
  let brand = pBrand;
  if (!brand || brand.length < 2) {
    if (full.includes('pampers')) brand = 'Pampers';
    else if (full.includes('huggies')) brand = 'Huggies';
    else if (full.includes('babysec')) brand = 'Babysec';
    else if (full.includes('mamy poko') || full.includes('mamypoko')) brand = 'MamyPoko';
    else if (full.includes('rexona')) brand = 'Rexona';
    else if (full.includes('dove')) brand = 'Dove';
    else if (full.includes('nivea')) brand = 'Nivea';
    else if (full.includes('colgate')) brand = 'Colgate';
    else if (full.includes('needs')) brand = 'Needs';
    else if (full.includes('cerave')) brand = 'CeraVe';
    else if (full.includes('la roche') || full.includes('anthelios') || full.includes('effaclar') || full.includes('cicaplast')) brand = 'La Roche-Posay';
    else if (full.includes('bioré') || full.includes('biore')) brand = 'Bioré';
    else if (full.includes('darrow') || full.includes('actine') || full.includes('doctar')) brand = 'Darrow';
    else if (full.includes('pantene')) brand = 'Pantene';
    else if (full.includes('elseve')) brand = 'Elseve';
    else if (full.includes('vitergan')) brand = 'Vitergan';
    else if (full.includes('flexone')) brand = 'Flexone';
    else if (full.includes('redoxon')) brand = 'Redoxon';
    else if (full.includes('eucerin')) brand = 'Eucerin';
    else if (full.includes('bepantol')) brand = 'Bepantol';
    else if (full.includes('azelan')) brand = 'Azelan';
    else if (full.includes('neutrogena')) brand = 'Neutrogena';
    else if (full.includes('centrum')) brand = 'Centrum';
    else if (full.includes('lavitan')) brand = 'Lavitan';
    else if (full.includes('bwell')) brand = 'bwell';
    else brand = 'Droga Raia';
  }

  // Simplify brand removing redundant words
  const cleanBrand = brand
    .replace(/^(polivitamínico|suplemento|fralda|desodorante|protetor|creme|shampoo)\s+/i, '')
    .trim();

  // Determine natural Portuguese noun and gender article
  let article = 'o';
  let noun = 'produto';

  if (full.includes('fralda-calça') || full.includes('fralda calça')) {
    article = 'a';
    noun = 'fralda-calça';
  } else if (full.includes('fralda')) {
    article = 'a';
    noun = 'fralda';
  } else if (full.includes('lenço') || full.includes('lenco') || full.includes('toalha umedecida')) {
    article = 'os';
    noun = 'lenços umedecidos';
  } else if (full.includes('desodorante') || full.includes('antitranspirante')) {
    article = 'o';
    noun = 'desodorante';
  } else if (full.includes('protetor solar') || full.includes('filtro solar')) {
    article = 'o';
    noun = 'protetor solar';
  } else if (full.includes('creme dental') || full.includes('pasta de dente')) {
    article = 'o';
    noun = 'creme dental';
  } else if (full.includes('enxaguante')) {
    article = 'o';
    noun = 'enxaguante bucal';
  } else if (full.includes('shampoo')) {
    article = 'o';
    noun = 'shampoo';
  } else if (full.includes('condicionador')) {
    article = 'o';
    noun = 'condicionador';
  } else if (full.includes('máscara') || full.includes('mascara')) {
    article = 'a';
    noun = 'máscara capilar';
  } else if (full.includes('sérum') || full.includes('serum')) {
    article = 'o';
    noun = 'sérum';
  } else if (full.includes('óleo') || full.includes('oleo')) {
    article = 'o';
    noun = 'óleo capilar';
  } else if (full.includes('gel de limpeza')) {
    article = 'o';
    noun = 'gel de limpeza';
  } else if (full.includes('hidratante') || full.includes('loção') || full.includes('locao')) {
    article = 'o';
    noun = 'hidratante';
  } else if (full.includes('pomada')) {
    article = 'a';
    noun = 'pomada';
  } else if (full.includes('creatina')) {
    article = 'a';
    noun = 'creatina';
  } else if (full.includes('whey')) {
    article = 'o';
    noun = 'whey protein';
  } else if (full.includes('vitamina c')) {
    article = 'a';
    noun = 'vitamina C';
  } else if (full.includes('polivitamínico') || full.includes('polivitaminico')) {
    article = 'o';
    noun = 'polivitamínico';
  } else if (full.includes('vitamina')) {
    article = 'a';
    noun = 'vitamina';
  } else if (full.includes('suplemento')) {
    article = 'o';
    noun = 'suplemento';
  } else if (full.includes('melatonina')) {
    article = 'a';
    noun = 'melatonina';
  } else if (full.includes('sabonete')) {
    article = 'o';
    noun = 'sabonete';
  }

  // Refinements for specific famous lines
  let brandDisplay = cleanBrand;
  if (full.includes('rexona') && full.includes('clinical')) {
    brandDisplay = 'Rexona Clinical';
  } else if (full.includes('anthelios')) {
    brandDisplay = 'Anthelios';
  } else if (full.includes('cicaplast')) {
    brandDisplay = 'Cicaplast';
  } else if (full.includes('actine')) {
    brandDisplay = 'Actine';
  } else if (full.includes('doctar')) {
    brandDisplay = 'Doctar';
  } else if (full.includes('bepantol')) {
    brandDisplay = 'Bepantol';
  } else if (full.includes('vitergan')) {
    brandDisplay = 'Vitergan';
  }

  const nounWithBrand = `${article} ${noun} ${brandDisplay}`.trim();
  const capArticle = article.charAt(0).toUpperCase() + article.slice(1);
  const nounWithBrandCapital = `${capArticle} ${noun} ${brandDisplay}`.trim();

  return {
    article,
    noun,
    brand: brandDisplay,
    nounWithBrand,
    nounWithBrandCapital,
  };
}

// -------------------------------------------------------------
// 1. BESPOKE PRODUCT REVIEW COLLECTIONS
// 100% natural conversational Brazilian Portuguese
// Free of technical specifications, sizes, or catalog codes
// -------------------------------------------------------------

// (A) Rexona Men Sem Perfume Aerosol (ID: 103)
const rexonaAerosolSemPerfumeReviews: ProductReviewsData = {
  rating: 4.9,
  reviewsCount: 890,
  recommendedPercentage: 98,
  aiSummary:
    'Elogiado pela ausência total de fragrância e pela proteção eficaz contra o suor e o mau odor ao longo de todo o dia, o desodorante Rexona proporciona jato seco imediato, não mancha camisas pretas nem brancas e é a escolha ideal para quem tem sensibilidade a perfumes ou pratica treinos intensos.',
  attributes: [
    {
      name: 'Proteção antitranspirante',
      labels: ['Baixa', 'Média', 'Alta'],
      activeSegment: 4,
    },
    {
      name: 'Sensação de jato seco',
      labels: ['Úmido', 'Moderado', 'Seco'],
      activeSegment: 4,
    },
    {
      name: 'Sem fragrância / Neutro',
      labels: ['Com cheiro', 'Leve', 'Totalmente Sem Perfume'],
      activeSegment: 4,
    },
  ],
  highlightTags: [
    'Zero fragrância / hipoalergênico',
    'Jato seco imediato',
    'Proteção duradoura',
    'Não mancha camisetas pretas',
  ],
  reviews: [
    {
      id: 'rex-aero-1',
      author: 'Bruno S.',
      rating: 5,
      date: '18/01/2024',
      text: 'O melhor desodorante sem perfume do mercado! Tenho rinite forte e não suporto produto com cheiro. Esse Rexona é 100% neutro e segura o suor o dia inteiro na academia.',
      helpfulCount: 9,
    },
    {
      id: 'rex-aero-2',
      author: 'Débora F.',
      rating: 5,
      date: '28/12/2023',
      text: 'Comprei para o meu marido que joga futebol e trabalha fora. Ele adorou porque o jato seco não deixa as axilas molhadas e não mancha camisas sociais.',
      helpfulCount: 7,
    },
    {
      id: 'rex-aero-3',
      author: 'Lucas T.',
      rating: 5,
      date: '14/11/2023',
      text: 'Proteção real contra o suor. Mesmo no calor de mais de 30 graus, mantém a axila sequinha até a noite sem ardência nem irritação.',
      helpfulCount: 6,
    },
    {
      id: 'rex-aero-4',
      author: 'Carlos M.',
      rating: 5,
      date: '05/10/2023',
      text: 'Uso o desodorante Rexona há muitos anos. É perfeito porque posso usar meu perfume importado favorito sem misturar odores.',
      helpfulCount: 8,
    },
    {
      id: 'rex-aero-5',
      author: 'Mariana C.',
      rating: 5,
      date: '22/09/2023',
      text: 'Excelente antitranspirante. O jato seca instantaneamente ao aplicar, não gruda no tecido da roupa nem deixa resíduo branco.',
      helpfulCount: 4,
    },
    {
      id: 'rex-aero-6',
      author: 'Rafael O.',
      rating: 5,
      date: '18/08/2023',
      text: 'Jato seco de verdade. Aplica e já pode vestir a camiseta preta sem medo. Não mancha nada.',
      helpfulCount: 5,
    },
    {
      id: 'rex-aero-7',
      author: 'Patrícia B.',
      rating: 4,
      date: '29/07/2023',
      text: 'Muito bom, rende bastante e cumpre o prometido. Dura quase o mês todo.',
      helpfulCount: 3,
    },
    {
      id: 'rex-aero-8',
      author: 'Fernanda L.',
      rating: 5,
      date: '11/06/2023',
      text: 'Não causa coceira nem escurece a axila. Fórmula neutra muito suave e altamente eficaz.',
      helpfulCount: 6,
    },
    {
      id: 'rex-aero-9',
      author: 'Thiago M.',
      rating: 5,
      date: '25/05/2023',
      text: 'Entrega pontual da Droga Raia. Compro sempre nas ofertas pelo ótimo custo-benefício.',
      helpfulCount: 4,
    },
    {
      id: 'rex-aero-10',
      author: 'Amanda R.',
      rating: 5,
      date: '03/04/2023',
      text: 'Segura até o fim do dia de treino pesado. Recomendo de olhos fechados para quem busca proteção máxima sem cheiro.',
      helpfulCount: 5,
    },
    {
      id: 'rex-aero-11',
      author: 'Rodrigo K.',
      rating: 4,
      date: '19/03/2023',
      text: 'Ótima fixação e proteção antitranspirante. Secagem rápida que não transfere para as roupas.',
      helpfulCount: 2,
    },
    {
      id: 'rex-aero-12',
      author: 'Juliana P.',
      rating: 5,
      date: '02/02/2023',
      text: 'Excelente para o dia a dia. Acabou com a minha preocupação de manchas amarelas em camisas brancas de trabalho.',
      helpfulCount: 7,
    },
    {
      id: 'rex-aero-13',
      author: 'Leandro S.',
      rating: 5,
      date: '15/01/2023',
      text: 'Muito superior aos desodorantes comuns de mercado. Dá segurança total o dia inteiro.',
      helpfulCount: 4,
    },
    {
      id: 'rex-aero-14',
      author: 'Camila N.',
      rating: 5,
      date: '28/11/2022',
      text: 'Uso logo após o banho pela manhã e fico completamente despreocupada o dia todo. Muito bom!',
      helpfulCount: 3,
    },
    {
      id: 'rex-aero-15',
      author: 'Gabriel H.',
      rating: 5,
      date: '10/10/2022',
      text: 'Eficiência nota 10 contra o odor. Não mancha camisa social nem camisetas escuras.',
      helpfulCount: 5,
    },
    {
      id: 'rex-aero-16',
      author: 'Vanessa D.',
      rating: 4,
      date: '18/09/2022',
      text: 'Muito bom produto, prático de aplicar e com ótima durabilidade da lata.',
      helpfulCount: 1,
    },
    {
      id: 'rex-aero-17',
      author: 'Marcelo F.',
      rating: 5,
      date: '05/08/2022',
      text: 'Compro sempre pela Droga Raia pelo preço e entrega rápida. Rexona é garantia de qualidade e confiança.',
      helpfulCount: 4,
    },
    {
      id: 'rex-aero-18',
      author: 'Beatriz Ramos',
      rating: 5,
      date: '12/07/2022',
      text: 'Não irrita após depilar. Protege muito bem sem arder a pele.',
      helpfulCount: 6,
    },
    {
      id: 'rex-aero-19',
      author: 'André P.',
      rating: 5,
      date: '22/05/2022',
      text: 'Uso para corrida e musculação. Segura o suor pesado com maestria, axila sempre seca.',
      helpfulCount: 2,
    },
    {
      id: 'rex-aero-20',
      author: 'Tatiane B.',
      rating: 5,
      date: '09/04/2022',
      text: 'Incrível a durabilidade da proteção. Sensação de frescor prolongada mesmo em dias quentes.',
      helpfulCount: 5,
    },
    {
      id: 'rex-aero-21',
      author: 'Lucas Mendes',
      rating: 5,
      date: '18/03/2022',
      text: 'Recomendo a todos. Sem resíduos brancos ou sensação pegajosa nas axilas.',
      helpfulCount: 3,
    },
    {
      id: 'rex-aero-22',
      author: 'Cláudia Siqueira',
      rating: 5,
      date: '04/02/2022',
      text: 'O melhor desodorante que já usei. Já testei vários e sempre volto para o Rexona!',
      helpfulCount: 8,
    },
  ],
};

// (B) Rexona Men Sem Perfume Roll-on (ID: 1502 / 2899)
const rexonaRollonSemPerfumeReviews: ProductReviewsData = {
  rating: 4.8,
  reviewsCount: 642,
  recommendedPercentage: 97,
  aiSummary:
    'Altamente elogiado pela praticidade e precisão do formato roll-on, o desodorante Rexona sem perfume possui secagem rápida, esfera suave que não trava e fórmula livre de álcool e fragrância, garantindo axilas secas e protegidas o dia todo sem ressecar ou causar irritação.',
  attributes: [
    {
      name: 'Proteção antitranspirante',
      labels: ['Baixa', 'Média', 'Alta'],
      activeSegment: 4,
    },
    {
      name: 'Deslizamento da esfera roll-on',
      labels: ['Trava', 'Normal', 'Suave'],
      activeSegment: 4,
    },
    {
      name: 'Zero perfume / Sensibilidade',
      labels: ['Irritante', 'Moderado', 'Hipoalergênico'],
      activeSegment: 4,
    },
  ],
  highlightTags: [
    'Formato roll-on compacto',
    'Sem perfume e sem álcool',
    'Secagem rápida',
    'Ideal para levar na mochila',
  ],
  reviews: [
    {
      id: 'rex-roll-1',
      author: 'Marcos Vinícius',
      rating: 5,
      date: '20/01/2024',
      text: 'A versão roll-on do desodorante Rexona sem perfume é perfeita para carregar na mochila do trabalho e academia. A esfera desliza super bem sem travar e não vaza.',
      helpfulCount: 7,
    },
    {
      id: 'rex-roll-2',
      author: 'Larissa Prado',
      rating: 5,
      date: '05/01/2024',
      text: 'Prefiro mil vezes roll-on do que aerosol porque não faz aquela fumaça no banheiro. Seca rapidinho e não tem cheiro nenhum, perfeito pra usar com perfume.',
      helpfulCount: 6,
    },
    {
      id: 'rex-roll-3',
      author: 'Carlos Eduardo',
      rating: 5,
      date: '19/12/2023',
      text: 'Sem perfume de verdade! Não me causa nenhuma alergia e segura o suor o dia todo mesmo no transporte público lotado.',
      helpfulCount: 5,
    },
    {
      id: 'rex-roll-4',
      author: 'Thiago Rocha',
      rating: 5,
      date: '02/12/2023',
      text: 'O desodorante rende mais de um mês usando diariamente. Muito econômico e eficiente contra o odor.',
      helpfulCount: 4,
    },
    {
      id: 'rex-roll-5',
      author: 'Vanessa Guimarães',
      rating: 5,
      date: '15/11/2023',
      text: 'Não arde nem deixa a axila pegajosa. Espera dois minutinhos pra secar e veste a roupa que não mancha nada.',
      helpfulCount: 8,
    },
    {
      id: 'rex-roll-6',
      author: 'Gustavo Borges',
      rating: 4,
      date: '30/10/2023',
      text: 'Muito bom roll-on. Segura bem o suor durante o expediente inteiro. Só recomendo esperar secar antes de colocar camisa escura.',
      helpfulCount: 2,
    },
    {
      id: 'rex-roll-7',
      author: 'Tatiana Martins',
      rating: 5,
      date: '12/10/2023',
      text: 'Excelente produto da Rexona. Compro sempre na Droga Raia.',
      helpfulCount: 3,
    },
    {
      id: 'rex-roll-8',
      author: 'André Luiz',
      rating: 5,
      date: '25/09/2023',
      text: 'Tenho pele sensível nas axilas e outros me davam coceira. Esse roll-on sem perfume resolveu 100%.',
      helpfulCount: 6,
    },
    {
      id: 'rex-roll-9',
      author: 'Roberto Fonseca',
      rating: 5,
      date: '08/09/2023',
      text: 'Eficácia máxima. Transpiro bastante nas costas e axilas, e esse desodorante me mantém seco até a noite.',
      helpfulCount: 5,
    },
    {
      id: 'rex-roll-10',
      author: 'Daniel Carvalho',
      rating: 5,
      date: '19/08/2023',
      text: 'Muito prático para viagens de avião, passa tranquilamente na mala de mão. Proteção top.',
      helpfulCount: 4,
    },
    {
      id: 'rex-roll-11',
      author: 'Renata Vasconcelos',
      rating: 4,
      date: '04/08/2023',
      text: 'Gostei muito, fórmula suave e sem álcool. Não manchou minhas roupas.',
      helpfulCount: 1,
    },
    {
      id: 'rex-roll-12',
      author: 'Felipe Toledo',
      rating: 5,
      date: '17/07/2023',
      text: 'O melhor desodorante roll-on masculino sem cheiro. Cumpre exatamente o que promete.',
      helpfulCount: 4,
    },
    {
      id: 'rex-roll-13',
      author: 'Simone Peixoto',
      rating: 5,
      date: '29/06/2023',
      text: 'Comprei para o meu filho adolescente e ele adorou. Acabou o cheiro de suor do colégio.',
      helpfulCount: 7,
    },
    {
      id: 'rex-roll-14',
      author: 'Henrique Macedo',
      rating: 5,
      date: '11/06/2023',
      text: 'Entrega relâmpago da Raia. Produto lacrado e com ótimo prazo de validade.',
      helpfulCount: 3,
    },
    {
      id: 'rex-roll-15',
      author: 'Isabela Morais',
      rating: 5,
      date: '22/05/2023',
      text: 'Textura cremosa na medida certa, a esfera espalha sem excesso de produto.',
      helpfulCount: 2,
    },
    {
      id: 'rex-roll-16',
      author: 'Danilo Alencar',
      rating: 5,
      date: '08/05/2023',
      text: 'Excelente custo por uso. Uso de manhã e chego à noite com as axilas secas.',
      helpfulCount: 5,
    },
    {
      id: 'rex-roll-17',
      author: 'Carla Medeiros',
      rating: 4,
      date: '19/04/2023',
      text: 'Muito bom para quem não tolera fragrâncias fortes. Funciona muito bem.',
      helpfulCount: 2,
    },
    {
      id: 'rex-roll-18',
      author: 'Fábio Nogueira',
      rating: 5,
      date: '01/04/2023',
      text: 'Rexona nunca decepciona na proteção antitranspirante. O roll-on é show.',
      helpfulCount: 3,
    },
    {
      id: 'rex-roll-19',
      author: 'Letícia Santoro',
      rating: 5,
      date: '14/03/2023',
      text: 'Não escurece a pele e protege do mau odor o dia todo.',
      helpfulCount: 6,
    },
    {
      id: 'rex-roll-20',
      author: 'Murilo Bernardes',
      rating: 5,
      date: '26/02/2023',
      text: 'Recomendo fortemente. Tamanho ideal e proteção garantida.',
      helpfulCount: 4,
    },
    {
      id: 'rex-roll-21',
      author: 'Renan Castro',
      rating: 5,
      date: '10/02/2023',
      text: 'Segura o suor mesmo em dias muito abafados. Excelente!',
      helpfulCount: 3,
    },
    {
      id: 'rex-roll-22',
      author: 'Juliana Farias',
      rating: 5,
      date: '25/01/2023',
      text: 'Perfeito. Não troco por outro desodorante roll-on no dia a dia.',
      helpfulCount: 5,
    },
  ],
};

// (C) Rexona Clinical Men Clean Roll-On (ID: 1325)
const rexonaClinicalReviews: ProductReviewsData = {
  rating: 4.9,
  reviewsCount: 1120,
  recommendedPercentage: 99,
  aiSummary:
    'Reconhecido como a solução definitiva para transpiração excessiva e hiperidrose, o desodorante Rexona Clinical oferece proteção avançada contra o suor. Sua fórmula inovadora em creme forma uma barreira protetora que mantém as axilas completamente secas sob estresse ou calor intenso.',
  attributes: [
    {
      name: 'Controle de transpiração intensa',
      labels: ['Baixo', 'Moderado', 'Máximo'],
      activeSegment: 4,
    },
    {
      name: 'Duração da proteção sob estresse',
      labels: ['Curta', 'Média', 'Dia Todo'],
      activeSegment: 4,
    },
    {
      name: 'Suavidade da fórmula creme',
      labels: ['Agressivo', 'Moderado', 'Suave'],
      activeSegment: 4,
    },
  ],
  highlightTags: [
    'Máxima proteção contra suor',
    'Ideal para hiperidrose / suor excessivo',
    'Fórmula Clinical recomendada',
    'Axilas secas o dia todo',
  ],
  reviews: [
    {
      id: 'rex-clin-1',
      author: 'Gustavo Borges',
      rating: 5,
      date: '15/01/2024',
      text: 'O desodorante Rexona Clinical salvou a minha vida! Eu sofria com transpiração excessiva e molhava todas as camisas em reuniões de trabalho. Desde que comecei a usar, axila 100% seca o dia todo.',
      helpfulCount: 14,
    },
    {
      id: 'rex-clin-2',
      author: 'Tatiana Martins',
      rating: 5,
      date: '29/12/2023',
      text: 'Meu marido tinha problemas sérios de suor mesmo no ar-condicionado. Esse desodorante foi a única coisa que funcionou de verdade. Vale cada centavo.',
      helpfulCount: 11,
    },
    {
      id: 'rex-clin-3',
      author: 'Roberto Fonseca',
      rating: 5,
      date: '18/11/2023',
      text: 'Passo à noite antes de dormir conforme as orientações da embalagem. No dia seguinte posso treinar e trabalhar sob sol quente que não vaza nem uma gota.',
      helpfulCount: 9,
    },
    {
      id: 'rex-clin-4',
      author: 'André Luiz',
      rating: 5,
      date: '02/10/2023',
      text: 'Proteção clínica de verdade. Muito superior aos desodorantes comuns de prateleira.',
      helpfulCount: 8,
    },
    {
      id: 'rex-clin-5',
      author: 'Daniel Carvalho',
      rating: 5,
      date: '14/09/2023',
      text: 'Textura cremosa suave que não queima nem arde a pele. Fragrância limpa e discreta.',
      helpfulCount: 6,
    },
    {
      id: 'rex-clin-6',
      author: 'Vinícius Paiva',
      rating: 5,
      date: '28/08/2023',
      text: 'Compro sempre pelo app da Droga Raia. Nunca mais passei vergonha com manchas de suor na camisa.',
      helpfulCount: 7,
    },
    {
      id: 'rex-clin-7',
      author: 'Bárbara Fontes',
      rating: 5,
      date: '11/07/2023',
      text: 'Meu irmão tinha suor excessivo e o dermatologista recomendou o Rexona Clinical. O resultado foi impressionante na primeira semana.',
      helpfulCount: 10,
    },
    {
      id: 'rex-clin-8',
      author: 'Maurício Silveira',
      rating: 4,
      date: '24/06/2023',
      text: 'Produto incrível. Só precisa aplicar uma camada fina para durar o dia inteiro sem desperdiçar.',
      helpfulCount: 3,
    },
    {
      id: 'rex-clin-9',
      author: 'Simone Peixoto',
      rating: 5,
      date: '08/05/2023',
      text: 'Segura muito mesmo. Uma aplicação dura o dia inteiro sem precisar reaplicar.',
      helpfulCount: 5,
    },
    {
      id: 'rex-clin-10',
      author: 'Henrique Macedo',
      rating: 5,
      date: '19/04/2023',
      text: 'Excelente antitranspirante. Para quem treina pesado e corre na esteira é indispensável.',
      helpfulCount: 4,
    },
    {
      id: 'rex-clin-11',
      author: 'Isabela Morais',
      rating: 5,
      date: '02/03/2023',
      text: 'Não manchou roupas claras e deu um alívio gigante. Recomendo a todos!',
      helpfulCount: 6,
    },
    {
      id: 'rex-clin-12',
      author: 'Danilo Alencar',
      rating: 5,
      date: '18/02/2023',
      text: 'O melhor desodorante que já inventaram. Rexona Clinical é imbatível.',
      helpfulCount: 7,
    },
    {
      id: 'rex-clin-13',
      author: 'Carla Medeiros',
      rating: 5,
      date: '04/01/2023',
      text: 'Entrega rápida e produto bem embalado. Qualidade 100%.',
      helpfulCount: 2,
    },
    {
      id: 'rex-clin-14',
      author: 'Fábio Nogueira',
      rating: 4,
      date: '20/12/2022',
      text: 'Muito bom, rende bastante se souber dosar.',
      helpfulCount: 1,
    },
    {
      id: 'rex-clin-15',
      author: 'Letícia Santoro',
      rating: 5,
      date: '05/11/2022',
      text: 'Acabou com o constrangimento de camisas molhadas no trabalho.',
      helpfulCount: 8,
    },
    {
      id: 'rex-clin-16',
      author: 'Murilo Bernardes',
      rating: 5,
      date: '17/10/2022',
      text: 'Segurança absoluta o dia todo. Nota mil!',
      helpfulCount: 5,
    },
    {
      id: 'rex-clin-17',
      author: 'Renan Castro',
      rating: 5,
      date: '29/09/2022',
      text: 'Produto revolucionário para quem sua muito.',
      helpfulCount: 4,
    },
    {
      id: 'rex-clin-18',
      author: 'Juliana Farias',
      rating: 5,
      date: '12/08/2022',
      text: 'Dermatologicamente testado e super seguro para uso diário.',
      helpfulCount: 3,
    },
    {
      id: 'rex-clin-19',
      author: 'Erick Bittencourt',
      rating: 5,
      date: '25/06/2022',
      text: 'Não troco por nenhum outro no mundo.',
      helpfulCount: 6,
    },
    {
      id: 'rex-clin-20',
      author: 'Luiza Xavier',
      rating: 5,
      date: '09/05/2022',
      text: 'Excelente qualidade Unilever/Rexona.',
      helpfulCount: 2,
    },
    {
      id: 'rex-clin-21',
      author: 'Cássio Sampaio',
      rating: 5,
      date: '18/03/2022',
      text: 'Cheiro discreto e ação anti-umidade perfeita.',
      helpfulCount: 4,
    },
    {
      id: 'rex-clin-22',
      author: 'Priscila Leite',
      rating: 5,
      date: '01/02/2022',
      text: 'Sensação de banho tomado e axila sequinha até o final da noite.',
      helpfulCount: 7,
    },
  ],
};

// (D) Dove Original Roll-on (ID: 120 / 1107)
const doveRollonOriginalReviews: ProductReviewsData = {
  rating: 4.9,
  reviewsCount: 780,
  recommendedPercentage: 98,
  aiSummary:
    'Famoso por sua fórmula com 1/4 de creme hidratante, o desodorante Dove cuida delicadamente da pele das axilas, prevenindo ressecamento e irritações mesmo após a depilação. Garante proteção duradoura contra o suor acompanhada da inconfundível fragrância suave e aconchegante da Dove.',
  attributes: [
    {
      name: 'Poder hidratante (1/4 creme)',
      labels: ['Resseca', 'Neutro', 'Altamente Hidratante'],
      activeSegment: 4,
    },
    {
      name: 'Suavidade pós-depilação',
      labels: ['Arde', 'Moderada', 'Sem ardência / Muito Suave'],
      activeSegment: 4,
    },
    {
      name: 'Fragrância clássica Dove',
      labels: ['Fraca', 'Moderada', 'Aconchegante e Suave'],
      activeSegment: 4,
    },
  ],
  highlightTags: [
    '1/4 de creme hidratante',
    'Axilas macias e suaves',
    'Não arde após depilação',
    'Proteção antitranspirante',
  ],
  reviews: [
    {
      id: 'dove-roll-1',
      author: 'Patrícia Ramos',
      rating: 5,
      date: '17/01/2024',
      text: 'O desodorante Dove roll-on é meu companheiro fiel há mais de 10 anos! O 1/4 de creme hidratante deixa as axilas super macias e evita o escurecimento da pele.',
      helpfulCount: 9,
    },
    {
      id: 'dove-roll-2',
      author: 'Aline Duarte',
      rating: 5,
      date: '03/01/2024',
      text: 'Posso passar imediatamente após me depilar com lâmina que não arde nada! O cheirinho clássico de Dove é maravilhoso e dura o dia todo.',
      helpfulCount: 8,
    },
    {
      id: 'dove-roll-3',
      author: 'Fernanda Neves',
      rating: 5,
      date: '20/12/2023',
      text: 'Textura cremosa super gostosa de aplicar. A esfera não trava e distribui o produto perfeitamente sem escorrer.',
      helpfulCount: 6,
    },
    {
      id: 'dove-roll-4',
      author: 'Mariana Toledo',
      rating: 5,
      date: '04/11/2023',
      text: 'Proteção de verdade com muita hidratação. Minhas axilas nunca mais ficaram ressecadas ou irritadas.',
      helpfulCount: 7,
    },
    {
      id: 'dove-roll-5',
      author: 'Carolina Prado',
      rating: 5,
      date: '18/10/2023',
      text: 'Cheirinho de banho tomado que não enjoa. Compro sempre no app da Droga Raia.',
      helpfulCount: 4,
    },
    {
      id: 'dove-roll-6',
      author: 'Rafael Meireles',
      rating: 5,
      date: '29/09/2023',
      text: 'Minha esposa e eu usamos o desodorante Dove. Protege muito bem do odor e é muito gentil com a pele.',
      helpfulCount: 3,
    },
    {
      id: 'dove-roll-7',
      author: 'Renata Vasconcelos',
      rating: 4,
      date: '12/09/2023',
      text: 'Muito bom roll-on, super hidratante. Rende mais de um mês com uso diário.',
      helpfulCount: 2,
    },
    {
      id: 'dove-roll-8',
      author: 'Fernando Dias',
      rating: 5,
      date: '26/08/2023',
      text: 'Seca rápido e não transfere para camisas brancas. Dove é sinônimo de cuidado.',
      helpfulCount: 5,
    },
    {
      id: 'dove-roll-9',
      author: 'Cláudia Duarte',
      rating: 5,
      date: '10/08/2023',
      text: 'Sensação sedosa e agradável o dia todo. O melhor antitranspirante hidratante.',
      helpfulCount: 4,
    },
    {
      id: 'dove-roll-10',
      author: 'Diego Antunes',
      rating: 5,
      date: '22/07/2023',
      text: 'Entrega impecável da Drogaraia. Produto original e muito cheiroso.',
      helpfulCount: 3,
    },
    {
      id: 'dove-roll-11',
      author: 'Bárbara Fontes',
      rating: 5,
      date: '05/07/2023',
      text: 'Clareou minhas axilas com o tempo por causa do poder hidratante da fórmula.',
      helpfulCount: 8,
    },
    {
      id: 'dove-roll-12',
      author: 'Maurício Silveira',
      rating: 4,
      date: '18/06/2023',
      text: 'Muito bom antitranspirante, fragrância suave que agrada a todos.',
      helpfulCount: 1,
    },
    {
      id: 'dove-roll-13',
      author: 'Simone Peixoto',
      rating: 5,
      date: '30/05/2023',
      text: 'Não fico sem nunca na minha penteadeira. Nota 10!',
      helpfulCount: 4,
    },
    {
      id: 'dove-roll-14',
      author: 'Henrique Macedo',
      rating: 5,
      date: '14/05/2023',
      text: 'Fórmula suave que não agride. Ótima durabilidade do frasco.',
      helpfulCount: 2,
    },
    {
      id: 'dove-roll-15',
      author: 'Isabela Morais',
      rating: 5,
      date: '28/04/2023',
      text: 'Conforto total para quem tem pele sensível.',
      helpfulCount: 5,
    },
    {
      id: 'dove-roll-16',
      author: 'Danilo Alencar',
      rating: 5,
      date: '10/04/2023',
      text: 'Protege perfeitamente no calor.',
      helpfulCount: 3,
    },
    {
      id: 'dove-roll-17',
      author: 'Carla Medeiros',
      rating: 4,
      date: '22/03/2023',
      text: 'Muito prático e seguro.',
      helpfulCount: 1,
    },
    {
      id: 'dove-roll-18',
      author: 'Fábio Nogueira',
      rating: 5,
      date: '07/03/2023',
      text: 'Qualidade clássica Dove que nunca muda.',
      helpfulCount: 4,
    },
    {
      id: 'dove-roll-19',
      author: 'Letícia Santoro',
      rating: 5,
      date: '19/02/2023',
      text: 'Sem ardência, toque macio imediato.',
      helpfulCount: 6,
    },
    {
      id: 'dove-roll-20',
      author: 'Murilo Bernardes',
      rating: 5,
      date: '02/02/2023',
      text: 'Excelente custo-benefício.',
      helpfulCount: 2,
    },
    {
      id: 'dove-roll-21',
      author: 'Renan Castro',
      rating: 5,
      date: '14/01/2023',
      text: 'Aroma relaxante e axila protegida.',
      helpfulCount: 3,
    },
    {
      id: 'dove-roll-22',
      author: 'Juliana Farias',
      rating: 5,
      date: '01/01/2023',
      text: 'O melhor desodorante roll-on hidratante do mercado brasileiro!',
      helpfulCount: 7,
    },
  ],
};

// (E) Dove Original Aerossol (ID: 1281)
const doveAerosolOriginalReviews: ProductReviewsData = {
  rating: 4.9,
  reviewsCount: 950,
  recommendedPercentage: 99,
  aiSummary:
    'Elogiado pela névoa suave e aveludada combinada com 1/4 de creme hidratante, o desodorante Dove protege contra a transpiração e o mau odor, proporcionando maciez às axilas e a tradicional fragrância limpa e delicada que conquistou gerações.',
  attributes: [
    {
      name: 'Toque aveludado e macio',
      labels: ['Áspero', 'Moderado', 'Toque Aveludado'],
      activeSegment: 4,
    },
    {
      name: 'Proteção antitranspirante',
      labels: ['Baixa', 'Média', 'Alta'],
      activeSegment: 4,
    },
    {
      name: 'Suavidade com a pele',
      labels: ['Baixa', 'Média', 'Excelente'],
      activeSegment: 4,
    },
  ],
  highlightTags: [
    'Névoa suave e aveludada',
    '1/4 de creme hidratante',
    'Fragrância clássica Dove',
    'Axilas macias e suaves',
  ],
  reviews: [
    {
      id: 'dove-aero-1',
      author: 'Camila Souza',
      rating: 5,
      date: '19/01/2024',
      text: 'O desodorante Dove em aerosol é a melhor compra da Drogaraia! O jato é macio e aveludado, parece uma brisa cremosa.',
      helpfulCount: 11,
    },
    {
      id: 'dove-aero-2',
      author: 'Eduardo M.',
      rating: 5,
      date: '06/01/2024',
      text: 'Fragrância tradicional maravilhosa que transmite sensação de banho tomado o dia todo. Não mancha camisa social.',
      helpfulCount: 8,
    },
    {
      id: 'dove-aero-3',
      author: 'Flávia Ribeiro',
      rating: 5,
      date: '21/12/2023',
      text: 'Seca rapidinho e não esfarela na pele. Minhas axilas ficam hidratadas e macias sem nenhuma irritação.',
      helpfulCount: 7,
    },
    {
      id: 'dove-aero-4',
      author: 'Breno Salgado',
      rating: 5,
      date: '08/11/2023',
      text: 'Segura perfeitamente o dia todo. O desodorante tem um preço ótimo na Raia.',
      helpfulCount: 5,
    },
    {
      id: 'dove-aero-5',
      author: 'Monique Tavares',
      rating: 5,
      date: '25/10/2023',
      text: 'Uso após depilar e não arde nada. O 1/4 de creme hidratante faz toda a diferença.',
      helpfulCount: 6,
    },
    {
      id: 'dove-aero-6',
      author: 'Sérgio Meira',
      rating: 4,
      date: '10/10/2023',
      text: 'Muito bom produto. Aerosol de secagem rápida com cheiro bem suave.',
      helpfulCount: 2,
    },
    {
      id: 'dove-aero-7',
      author: 'Daniele Siqueira',
      rating: 5,
      date: '23/09/2023',
      text: 'Compro todo mês. A família toda usa e aprova.',
      helpfulCount: 4,
    },
    {
      id: 'dove-aero-8',
      author: 'Luan Camargo',
      rating: 5,
      date: '07/09/2023',
      text: 'Sensação refrescante imediata. Não deixa resíduos brancos nas roupas pretas.',
      helpfulCount: 5,
    },
    {
      id: 'dove-aero-9',
      author: 'Sabrina Fontes',
      rating: 5,
      date: '19/08/2023',
      text: 'Melhor desodorante em aerosol do mercado feminino e unissex.',
      helpfulCount: 6,
    },
    {
      id: 'dove-aero-10',
      author: 'Alan Vasconcelos',
      rating: 5,
      date: '02/08/2023',
      text: 'Entrega super ágil da Droga Raia. Chegou bem embalado e lacrado.',
      helpfulCount: 3,
    },
    {
      id: 'dove-aero-11',
      author: 'Kelly Rocha',
      rating: 4,
      date: '16/07/2023',
      text: 'Cheiro gostoso e boa fixação. Vale super a pena.',
      helpfulCount: 2,
    },
    {
      id: 'dove-aero-12',
      author: 'Hugo Medeiros',
      rating: 5,
      date: '28/06/2023',
      text: 'Proteção confiável contra o suor o dia inteiro de correria.',
      helpfulCount: 4,
    },
    {
      id: 'dove-aero-13',
      author: 'Jéssica Prado',
      rating: 5,
      date: '11/06/2023',
      text: 'Minhas axilas nunca mais ficaram ressecadas. Recomendo!',
      helpfulCount: 5,
    },
    {
      id: 'dove-aero-14',
      author: 'Vitor Fagundes',
      rating: 5,
      date: '25/05/2023',
      text: 'Ótima qualidade, rende muitos dias de uso.',
      helpfulCount: 2,
    },
    {
      id: 'dove-aero-15',
      author: 'Elisa Cavalcanti',
      rating: 5,
      date: '09/05/2023',
      text: 'Cheiro de limpeza reconfortante. Nota 10.',
      helpfulCount: 4,
    },
    {
      id: 'dove-aero-16',
      author: 'Tales Silveira',
      rating: 5,
      date: '21/04/2023',
      text: 'Não agride as axilas de forma alguma.',
      helpfulCount: 3,
    },
    {
      id: 'dove-aero-17',
      author: 'Bruna Furtado',
      rating: 4,
      date: '05/04/2023',
      text: 'Muito bom, excelente custo-benefício.',
      helpfulCount: 1,
    },
    {
      id: 'dove-aero-18',
      author: 'Caio Nogueira',
      rating: 5,
      date: '18/03/2023',
      text: 'Proteção sem falhas durante o dia todo.',
      helpfulCount: 3,
    },
    {
      id: 'dove-aero-19',
      author: 'Mirella Paiva',
      rating: 5,
      date: '02/03/2023',
      text: 'Suavidade máxima no contato com a pele.',
      helpfulCount: 4,
    },
    {
      id: 'dove-aero-20',
      author: 'Wesley Santos',
      rating: 5,
      date: '14/02/2023',
      text: 'Compro sempre e continuo recomendando.',
      helpfulCount: 2,
    },
    {
      id: 'dove-aero-21',
      author: 'Lorena Barreto',
      rating: 5,
      date: '28/01/2023',
      text: 'Perfeito para uso pós-banho antes de sair.',
      helpfulCount: 5,
    },
    {
      id: 'dove-aero-22',
      author: 'Douglas Ramos',
      rating: 5,
      date: '10/01/2023',
      text: 'Qualidade superior indiscutível da Dove.',
      helpfulCount: 6,
    },
  ],
};

// -------------------------------------------------------------
// 2. DYNAMIC DETERMINISTIC PRODUCT REVIEWS ENGINE
// Produces UNIQUE, natural, customized reviews for ANY product
// Follows the user rule: "gostei de usar a fralda pampers"
// NEVER includes technical specifications like "G 60 unidades", "150ml", etc.
// -------------------------------------------------------------

function generateDynamicReviewsForProduct(product: Product): ProductReviewsData {
  const pName = product.name || 'Produto';
  const pBrand = product.brand || 'Marca';
  const pCat = (product.category || '').toLowerCase();
  const pSub = (product.subcategory || '').toLowerCase();
  const fullName = `${pName} ${pBrand} ${pCat} ${pSub}`.toLowerCase();

  const natural = getNaturalProductPhrasing(product);
  const { noun, brand, nounWithBrand, nounWithBrandCapital } = natural;

  const seed = simpleHash(`${product.id}-${pName}-${pBrand}`);
  const authorOffset = seed % AUTHOR_POOL.length;
  const dateOffset = seed % DATES_POOL.length;

  let categoryType: 'deodorant' | 'sunscreen' | 'diaper' | 'wipes' | 'hair' | 'oral' | 'vitamins' | 'skincare' | 'personal';

  if (fullName.includes('desodorante') || fullName.includes('antitranspirante') || fullName.includes('rexona') || fullName.includes('roll-on') || fullName.includes('aerosol')) {
    categoryType = 'deodorant';
  } else if (fullName.includes('solar') || fullName.includes('anthelios') || fullName.includes('fps')) {
    categoryType = 'sunscreen';
  } else if (fullName.includes('fralda')) {
    categoryType = 'diaper';
  } else if (fullName.includes('lenço') || fullName.includes('lenco') || fullName.includes('toalha umedecida')) {
    categoryType = 'wipes';
  } else if (fullName.includes('shampoo') || fullName.includes('condicionador') || fullName.includes('capilar') || fullName.includes('cabelo')) {
    categoryType = 'hair';
  } else if (fullName.includes('dental') || fullName.includes('escova') || fullName.includes('bucal') || fullName.includes('listerine') || fullName.includes('colgate')) {
    categoryType = 'oral';
  } else if (fullName.includes('vitamina') || fullName.includes('suplemento') || fullName.includes('whey') || fullName.includes('creatina') || fullName.includes('colágeno') || fullName.includes('colageno')) {
    categoryType = 'vitamins';
  } else if (fullName.includes('facial') || fullName.includes('sérum') || fullName.includes('serum') || fullName.includes('rosto') || fullName.includes('antissinais') || fullName.includes('hidratante')) {
    categoryType = 'skincare';
  } else {
    categoryType = 'personal';
  }

  let attributes: AttributeRating[];
  let highlightTags: string[];
  let aiSummary: string;
  let textTemplates: string[];

  switch (categoryType) {
    case 'deodorant':
      attributes = [
        { name: 'Proteção antitranspirante', labels: ['Baixa', 'Média', 'Alta'], activeSegment: 4 },
        { name: 'Sensação de toque seco', labels: ['Úmido', 'Moderado', 'Seco'], activeSegment: 4 },
        { name: 'Proteção contra manchas', labels: ['Baixa', 'Média', 'Alta'], activeSegment: 4 },
      ];
      highlightTags = [
        `Proteção garantida ${brand}`,
        'Toque seco imediato',
        'Não mancha roupas',
        'Sem irritação nas axilas',
      ];
      aiSummary = `Elogiado pela eficácia duradoura no controle da transpiração e do odor ao longo de todo o dia, ${nounWithBrand} proporciona axilas secas e frescas sem causar desconforto ou ardência na pele.`;
      textTemplates = [
        `Excelente desodorante da ${brand}! Segura perfeitamente o dia inteiro de trabalho e academia sem odor e sem suor.`,
        `Adorei usar ${nounWithBrand}! Rende muito e seca rápido, sem deixar sensação pegajosa nas axilas.`,
        `Não manchou minhas camisetas pretas nem brancas. Muito satisfeito com ${nounWithBrand}.`,
        `Proteção real de longa duração. Mesmo no calor pesado, mantém as axilas sequinhas até a noite.`,
        `Uso os desodorantes da ${brand} há anos e este cumpre exatamente o que promete.`,
        `Fragrância agradável e na medida certa, não agride a pele nem briga com outros perfumes.`,
        `Chegou super rápido pela entrega da Droga Raia. A embalagem veio perfeita.`,
        `Não causa coceira nem arde após a depilação. Fórmula muito segura e eficaz.`,
        `Comprei ${nounWithBrand} na promoção da Raia com excelente desconto. Recomendo de olhos fechados!`,
        `Segura muito bem o suor durante treinos intensos de corrida e musculação.`,
        `Toque seco imediato ao aplicar. Visto a roupa logo em seguida sem medo de manchar.`,
        `Muito superior a outros desodorantes convencionais. A qualidade da ${brand} é diferenciada.`,
        `Produto confiável, fórmula que respeita a pele sensível das axilas.`,
        `Rendimento excelente. Dura semanas de uso contínuo.`,
        `Acabou com qualquer preocupação de odor durante viagens e dias compridos.`,
        `Aprovadíssimo! Já é a terceira vez que compro ${nounWithBrand} e continuarei usando.`,
        `Sensação de frescor prolongada como se tivesse acabado de sair do banho.`,
        `Textura perfeita e fácil de aplicar no dia a dia. Vale cada centavo.`,
        `Entrega no mesmo dia da farmácia me salvou. Produto de altíssima qualidade.`,
        `Proteção antitranspirante nota 10, axilas secas e confortáveis o dia todo.`,
        `Sem resíduos brancos ou sensação pesada. Muito leve e eficaz.`,
        `O melhor desodorante que já utilizei. Parabéns à ${brand} por este produto!`
      ];
      break;

    case 'sunscreen':
      attributes = [
        { name: 'Controle de oleosidade e brilho', labels: ['Brilhoso', 'Moderado', 'Toque Seco'], activeSegment: 4 },
        { name: 'Sensação na pele', labels: ['Pesada', 'Média', 'Imperceptível'], activeSegment: 4 },
        { name: 'Resistência ao suor', labels: ['Baixa', 'Média', 'Alta'], activeSegment: 4 },
      ];
      highlightTags = [
        `Alta proteção solar ${brand}`,
        'Toque seco e rápida absorção',
        'Não esbranquiça a pele',
        'Sem brilho excessivo',
      ];
      aiSummary = `Apreciado pelo controle eficaz de oleosidade e pela textura confortável que não esbranquiça a pele, ${nounWithBrand} oferece proteção solar ideal para o uso diário sob maquiagem ou treinos ao ar livre.`;
      textTemplates = [
        `O melhor protetor solar que já testei! ${nounWithBrandCapital} espalha com muita facilidade e deixa a pele com toque seco.`,
        `Tenho pele mista a oleosa e ${nounWithBrand} segurou o brilho o dia inteiro sem craquelar.`,
        `Não arde os olhos nem escorre com o suor da academia. A qualidade da ${brand} é fantástica.`,
        `A embalagem é compacta e super prática para levar na bolsa e reaplicar ao longo do dia.`,
        `Minha dermatologista indicou ${nounWithBrand} e fez milagre na minha rotina de cuidados com a pele.`,
        `Fórmula leve que não deixa aquele aspecto esbranquiçado de fantasma no rosto. Adorei!`,
        `Excelente acabamento sob a base de maquiagem, não esfarela de jeito nenhum.`,
        `Chegou super rápido pela Droga Raia. Produto com ótimo prazo de validade e lacre intacto.`,
        `Uso diariamente antes de sair para o trabalho. Proteção solar confiável da ${brand}.`,
        `Não causou cravos nem espinhas. Fórmula não comedogênica de altíssimo nível.`,
        `Textura leve que absorve em menos de um minuto. Sensação de não estar usando nada no rosto.`,
        `Melhor custo-benefício para proteção facial diária. Rende bastante com poucas gotas.`,
        `Protegeu perfeitamente minha pele na praia e no dia a dia ensolarado sem queimar.`,
        `Não deixa a pele pegajosa nem oleosa ao longo da tarde. Aprovadíssimo!`,
        `Já estou no segundo frasco de ${nounWithBrand}. Indispensável na minha rotina de cuidados.`,
        `Toque aveludado e confortável. Muito superior a outros protetores da mesma faixa de preço.`,
        `Comprei na promoção da Drogaraia e valeu muito a pena. Entrega no prazo certo.`,
        `Uniformiza levemente a pele e deixa um viço bonito sem oleosidade excessiva.`,
        `Perfeito para quem tem pele sensível ou propensa a manchas solares.`,
        `Textura fluida muito agradável. Recomendo para todos os meus amigos.`,
        `Segurança máxima contra radiação solar. Marca ${brand} de total confiança.`,
        `Simplesmente excelente! Produto nota dez em todos os aspectos de proteção facial.`
      ];
      break;

    case 'diaper':
      attributes = [
        { name: 'Poder de absorção noturna', labels: ['Vaza', 'Moderada', 'Até 12h Seco'], activeSegment: 4 },
        { name: 'Ajuste anatômico no corpinho', labels: ['Aperta', 'Normal', 'Ajuste Perfeito'], activeSegment: 4 },
        { name: 'Toque e suavidade', labels: ['Áspero', 'Moderado', 'Toque de Algodão'], activeSegment: 4 },
      ];
      highlightTags = [
        `Qualidade comprovada ${brand}`,
        'Noites de sono sequinho',
        'Barreiras antivazamento',
        'Toque suave sem assaduras',
      ];
      aiSummary = `Elogiada pela excelente capacidade de absorção e pelo formato anatômico que se adapta aos movimentos do bebê, ${nounWithBrand} garante noites tranquilas de sono sem vazamentos e com a pele sempre protegida e sequinha.`;
      textTemplates = [
        `Fralda maravilhosa! ${nounWithBrandCapital} aguenta a noite toda sem vazar nem uma gota no berço.`,
        `O ajuste da fralda no corpinho do meu bebê é perfeito, não aperta a barriguinha nem as perninhas.`,
        `Comprei ${nounWithBrand} na promoção da Droga Raia. Melhor custo por tira do mercado.`,
        `Toque macio como algodão, nunca causou assadura ou alergia na pele delicada da minha filha.`,
        `Barreiras antivazamento super eficientes para bebês ativos que se movimentam muito.`,
        `Excelente absorção do xixi, o gel distribui uniformemente sem empelotar na frente.`,
        `Entrega super rápida da farmácia, o pacote chegou intacto e no mesmo dia.`,
        `Uso ${nounWithBrand} desde os primeiros meses e não troco por nenhuma outra marca.`,
        `As fitas e fechos ajustam com firmeza e não soltam mesmo quando o bebê engatinha.`,
        `Sono tranquilo de 12 horas garantido. Acorda com o bumbum sequinho pela manhã.`,
        `Qualidade premium da ${brand}. Dá total segurança para passeios longos e viagens.`,
        `Fralda respirável que mantém a pele arejada, prevenindo vermelhidão e irritações.`,
        `Tamanho ideal e muito anatômico. Recomendo muito!`,
        `Já testei várias marcas conhecidas, mas ${nounWithBrand} é sem dúvidas a mais confiável.`,
        `Muito confortável e flexível, acompanha cada movimento do bebê sem incomodar.`,
        `Pacote econômico que rende bastante no orçamento mensal da família.`,
        `Material de alta qualidade que não desmancha nem solta fiapos ao retirar.`,
        `Fácil de colocar e tirar, muito prática na correria das trocas diárias.`,
        `Indicação de mães no grupo do condomínio e realmente superou minhas expectativas.`,
        `Segurança máxima contra vazamentos noturnos. Nota 10 para a ${brand}!`,
        `A melhor fralda da categoria. Pode comprar sem medo de errar.`,
        `Perfeita em todos os sentidos: absorção, conforto e maciez para o bebê.`
      ];
      break;

    case 'wipes':
      attributes = [
        { name: 'Grau de umidade equilibrada', labels: ['Seco', 'Equilibrado', 'Perfeito'], activeSegment: 4 },
        { name: 'Espessura e resistência do lenço', labels: ['Fino / Rasga', 'Médio', 'Grosso e Macio'], activeSegment: 4 },
        { name: 'Suavidade com a pele', labels: ['Irritante', 'Moderada', 'Muito Suave'], activeSegment: 4 },
      ];
      highlightTags = [
        `Fórmula suave ${brand}`,
        'Umidade equilibrada até o fim',
        'Toalhinhas espessas que não rasgam',
        'Tampa flip-top prática',
      ];
      aiSummary = `Destacado pela umidade balanceada e pelo toque espesso e macio, ${nounWithBrand} realiza uma limpeza eficiente e delicada sem agredir a pele, preservando a hidratação natural e oferecendo embalagem prática para o dia a dia.`;
      textTemplates = [
        `Lenço de excelente qualidade da ${brand}! Bem umedecido na medida certa, nem encharcado nem seco.`,
        `A embalagem com tampa flip-top veda muito bem e impede que os lenços sequem.`,
        `Toalhinha grossa e resistente que não rasga ao puxar do pacote. Limpa muito com poucos lenços.`,
        `Fragrância delicada e suave que não agride o olfato do bebê nem dá alergia na pele.`,
        `Uso tanto nas trocas de fralda quanto no dia a dia para limpar mãos e rosto. Muito versátil.`,
        `Compro com frequência nas ofertas da Droga Raia pelo excelente custo-benefício.`,
        `Fórmula hipoalergênica muito segura. Meu filho tem pele sensível e nunca teve reação alérgica.`,
        `Entrega rápida e confiável da Raia. Produto com lacre perfeito.`,
        `Lenço macio com toque aveludado de algodão que desliza com suavidade na pele.`,
        `Rende bastante porque cada toalhinha puxa individualmente sem virar aquele bolo grudado.`,
        `Muito prático para carregar na bolsa do bebê, no carro e em passeios em família.`,
        `Sem álcool etílico, não arde e deixa uma sensação limpa e fresca instantânea.`,
        `Melhor lenço umedecido da categoria, a ${brand} acertou em cheio na fórmula.`,
        `Dura bastante e mantém a umidade até o último lencinho do fundo do pacote.`,
        `Limpa facilmente sem precisar esfregar a pele delicada do bebê.`,
        `Já recomendei para várias amigas mamães que também adoraram a experiência.`,
        `Material encorpado de altíssima qualidade que não deixa fiapos residuais.`,
        `Preço justo na Drogaraia e qualidade comprovada no uso diário.`,
        `Cheirinho agradável de bebê limpinho que todo mundo elogia.`,
        `Excelente para toda a família ter em casa no quarto e no banheiro.`,
        `Sem dúvidas o meu lenço favorito para higiene pessoal e do bebê.`,
        `Nota máxima para ${nounWithBrand}! Vale cada centavo investido.`
      ];
      break;

    case 'hair':
      attributes = [
        { name: 'Maciez e brilho nos fios', labels: ['Baixo', 'Moderado', 'Brilho Espelhado'], activeSegment: 4 },
        { name: 'Poder de tratamento e reparação', labels: ['Fraco', 'Médio', 'Intenso'], activeSegment: 4 },
        { name: 'Rendimento da fórmula', labels: ['Pouco', 'Médio', 'Excelente'], activeSegment: 4 },
      ];
      highlightTags = [
        `Tratamento capilar ${brand}`,
        'Maciez e brilho imediato',
        'Controle antifrizz duradouro',
        'Fórmula nutritiva',
      ];
      aiSummary = `Elogiado pela ação restauradora e pelo alinhamento dos fios, ${nounWithBrand} proporciona hidratação profunda, redução perceptível de frizz e pontas duplas, deixando os cabelos incrivelmente sedosos, leves e com brilho natural.`;
      textTemplates = [
        `Meu cabelo se transformou com ${nounWithBrand}! Os fios ficaram alinhados, sedosos e com um brilho incrível.`,
        `A fórmula da ${brand} é maravilhosa, hidrata profundamente sem deixar a raiz pesada ou oleosa.`,
        `O produto rende muito porque uma pequena quantidade já espalha por todo o comprimento.`,
        `Cheiro maravilhoso de salão de beleza que fixa nos cabelos o dia inteiro.`,
        `Reduziu o frizz e as pontas ressecadas logo nas primeiras lavagens de uso contínuo.`,
        `Comprei pela entrega rápida da Droga Raia e o produto chegou impecável.`,
        `Excelente para cabelos com química ou danificados pelo calor da chapinha e secador.`,
        `Desembaraça os fios no banho com facilidade, sem quebrar os cabelos.`,
        `Qualidade profissional da ${brand} com preço acessível de farmácia.`,
        `Cabelo com toque macio e movimento natural de comercial de TV. Adorei!`,
        `Melhor investimento capilar dos últimos tempos. Recomendo de olhos fechados.`,
        `Fórmula rica que nutre os fios desde o couro cabeludo até as pontas.`,
        `Sensação de limpeza duradoura e refrescante que dura até a próxima lavagem.`,
        `Já indiquei para minha mãe e irmãs que também amaram os resultados de ${nounWithBrand}.` ,
        `Deixa os cabelos disciplinados e super fáceis de pentear e finalizar.`,
        `Protege os fios das agressões diárias e mantém a hidratação por muito mais tempo.`,
        `Textura cremosa e fácil de aplicar, faz uma espuma rica e aveludada.`,
        `Aprovadíssimo! Não fico mais sem ${nounWithBrand} no meu cronograma capilar.`,
        `Custo-benefício fantástico pelas ofertas e pontuação do app da Raia.`,
        `Fios muito mais fortes, com menos queda por quebra e pontas seladas.`,
        `Resultado de salão de beleza no conforto de casa.`,
        `Nota 10 para ${nounWithBrand}! Simplesmente perfeito para a saúde dos cabelos.`
      ];
      break;

    case 'oral':
      attributes = [
        { name: 'Sensação prolongada de hálito fresco', labels: ['Fraca', 'Moderada', 'Intensa'], activeSegment: 4 },
        { name: 'Eficácia na limpeza e placa', labels: ['Baixa', 'Média', 'Alta'], activeSegment: 4 },
        { name: 'Cuidado com dentes e gengivas', labels: ['Agressivo', 'Moderado', 'Suave'], activeSegment: 4 },
      ];
      highlightTags = [
        `Higiene bucal avançada ${brand}`,
        'Hálito puro e refrescante',
        'Proteção contra placa e cáries',
        'Suave com esmalte e gengivas',
      ];
      aiSummary = `Reconhecido pela sensação prolongada de boca limpa e frescor duradouro, ${nounWithBrand} oferece proteção completa contra bactérias, placa e cáries, cuidando do esmalte dental com suavidade e eficácia clinicamente comprovada.`;
      textTemplates = [
        `Sensação incomparável de boca limpa e hálito fresco com ${nounWithBrand}!`,
        `Recomendação do meu dentista e notei grande melhora na saúde das gengivas e dentes.`,
        `Rende bastante na escovação diária de toda a família.`,
        `Sabor agradável e refrescante que não arde excessivamente na boca.`,
        `Sinto os dentes super lisinhos e protegidos contra a placa bacteriana o dia todo.`,
        `Comprei no app da Droga Raia com preço promocional excelente e entrega rápida.`,
        `Qualidade superior da ${brand}, marca pioneira e de total confiança odontológica.`,
        `Ajudou muito a diminuir a sensibilidade com bebidas frias e quentes.`,
        `Fórmula avançada que protege o esmalte dos dentes sem ser abrasiva.`,
        `Espuma na medida certa para uma higienização profunda e completa.`,
        `Indispensável na minha rotina matinal e antes de dormir. Não troco por outro.`,
        `Sensação de limpeza profissional como se tivesse acabado de sair do consultório.`,
        `Dentes mais claros e protegidos contra manchas do café diário.`,
        `Embalagem prática com tampa que veda com segurança e não vaza na necessaire.`,
        `Excelente rendimento, basta uma quantidade do tamanho de uma ervilha na escova.`,
        `Muito bom produto, atendeu plenamente as minhas expectativas de saúde bucal.`,
        `Refrescância duradoura que dá total segurança para conversar ao longo do dia.`,
        `Aprovado por todos aqui em casa, de crianças a adultos.`,
        `Chegou bem lacrado com selo de garantia da Raia. Atendimento nota 10.`,
        `Melhor opção para quem busca prevenção ativa contra tártaro e cáries.`,
        `Proteção completa e confiável da ${brand} no dia a dia.`,
        `Nota dez! Produto essencial para manter o sorriso saudável e bonito.`
      ];
      break;

    case 'vitamins':
      attributes = [
        { name: 'Facilidade de deglutição / consumo', labels: ['Difícil', 'Normal', 'Fácil'], activeSegment: 4 },
        { name: 'Melhora na energia e disposição', labels: ['Baixa', 'Moderada', 'Alta'], activeSegment: 4 },
        { name: 'Tolerância gástrica', labels: ['Desconforto', 'Média', 'Sem azia / Leve'], activeSegment: 4 },
      ];
      highlightTags = [
        `Suplementação de qualidade ${brand}`,
        'Mais energia e disposição',
        'Fortalecimento da imunidade',
        'Fácil absorção no organismo',
      ];
      aiSummary = `Elogiado pela composição balanceada e pela rápida assimilação pelo organismo, ${nounWithBrand} proporciona suporte nutricional diário com ganho perceptível de energia, vitalidade e fortalecimento das defesas naturais do corpo.`;
      textTemplates = [
        `Excelente suplementação! ${nounWithBrandCapital} me deu muito mais disposição para trabalhar e treinar.`,
        `Tomo todas as manhãs por orientação médica e senti uma melhora nítida na minha imunidade.`,
        `O produto tem ótimo rendimento e custo-benefício na Droga Raia.`,
        `Comprimidos fáceis de ingerir, não deixam gosto residual ruim nem causam azia.`,
        `Fórmula completa e balanceada da ${brand}. Exames de rotina vieram excelentes após o uso.`,
        `Chegou super rápido pela entrega da Drogaraia, produto original e lacrado com segurança.`,
        `Notei minhas unhas e cabelos muito mais fortes e saudáveis com o uso contínuo de ${nounWithBrand}.`,
        `Ótima absorção no organismo sem qualquer desconforto gástrico.`,
        `Suplemento de primeira linha, marca renomada de total confiança no mercado de saúde.`,
        `Menos cansaço mental e físico ao final do expediente de trabalho. Vale muito a pena.`,
        `Comprei na promoção da Raia com excelente desconto.`,
        `Indispensável na minha rotina de longevidade e bem-estar. Recomendo a todos!`,
        `Excelente qualidade dos ingredientes ativos. Resultados perceptíveis em poucas semanas.`,
        `Fácil de incluir na rotina diária junto com as refeições matinais.`,
        `Mais vitalidade e resistência para encarar as tarefas do dia a dia.`,
        `Produto confiável com padrão de qualidade e controle farmacêutico da ${brand}.`,
        `Sabor agradável e fácil de diluir / ingerir com água.`,
        `Já é o terceiro frasco que compro e continuarei utilizando sem falhar.`,
        `Entrega impecável no prazo prometido. Farmácia com excelência em atendimento.`,
        `Suplemento essencial para quem busca saúde preventiva e desempenho diário.`,
        `Aprovadíssimo pelo meu nutricionista e médico de família.`,
        `Nota máxima para ${nounWithBrand}! Qualidade de vida renovada.`
      ];
      break;

    case 'skincare':
      attributes = [
        { name: 'Hidratação e nutrição da pele', labels: ['Fraca', 'Moderada', 'Profunda'], activeSegment: 4 },
        { name: 'Textura e absorção', labels: ['Gruda / Oleoso', 'Normal', 'Toque Seco e Rápido'], activeSegment: 4 },
        { name: 'Uniformização e viço cutâneo', labels: ['Baixo', 'Médio', 'Viço Natural e Radiante'], activeSegment: 4 },
      ];
      highlightTags = [
        `Dermocosmético avançado ${brand}`,
        'Textura leve de rápida absorção',
        'Hidratação profunda sem oleosidade',
        'Dermatologicamente testado',
      ];
      aiSummary = `Apreciado pela textura sofisticada e pela rápida absorção sem resíduos gordurosos, ${nounWithBrand} entrega hidratação intensiva e restauração da barreira cutânea, promovendo viço natural, maciez e toque aveludado à pele.`;
      textTemplates = [
        `Esse ${noun} da ${brand} é simplesmente maravilhoso! Deixa a pele macia, hidratada e com viço sem engordurar.`,
        `Minha dermatologista indicou ${nounWithBrand} e em poucos dias já notei melhora na textura do rosto.`,
        `O produto rende demais, apenas uma pequena quantidade espalha por todo o rosto e pescoço.`,
        `Não obstrui os poros nem causou cravos ou acne na minha pele mista. Fórmula fantástica!`,
        `Absorve em segundos e deixa um toque aveludado perfeito para aplicar protetor solar em seguida.`,
        `Comprei pelo app da Droga Raia e chegou super rápido e bem embalado com lacre intacto.`,
        `Qualidade dermocosmética impecável da ${brand}. Vale cada centavo pelo resultado obtido.`,
        `Aliviou imediatamente o ressecamento e a sensibilidade provocados pelo clima seco.`,
        `Fórmula hipoalergênica e sem fragrâncias agressivas, perfeita para quem tem pele reativa.`,
        `Pele visivelmente mais iluminada, firme e com aspecto descansado e saudável.`,
        `Já estou no segundo frasco de ${nounWithBrand} e não troco por nenhum outro hidratante facial.`,
        `Textura leve e refrescante que se funde com a pele instantaneamente.`,
        `Excelente rendimento, dura meses usando de manhã e à noite.`,
        `Melhor investimento para a rotina diária de skincare e cuidados com a pele.`,
        `Sensação de conforto duradouro que dura o dia inteiro sem repuxar.`,
        `Aprovadíssimo! Produto premiado e recomendado pelos melhores dermatologistas.`,
        `Custo-benefício excelente pelas promoções e pontos do programa de fidelidade da Raia.`,
        `Minhas linhas finas de expressão e manchinhas clarearam com o uso disciplinado.`,
        `Produto original entregue com nota fiscal e total segurança de procedência.`,
        `Toque sedoso e acabamento matte sem brilho excessivo.`,
        `Indispensável no meu ritual de autocuidado matinal e noturno.`,
        `Nota 10 para ${nounWithBrand}! Transformou a saúde e beleza da minha pele.`
      ];
      break;

    case 'personal':
    default:
      attributes = [
        { name: 'Qualidade geral do produto', labels: ['Baixa', 'Média', 'Alta'], activeSegment: 4 },
        { name: 'Suavidade no uso diário', labels: ['Agressivo', 'Moderado', 'Suave'], activeSegment: 4 },
        { name: 'Custo-benefício', labels: ['Baixo', 'Médio', 'Excelente'], activeSegment: 4 },
      ];
      highlightTags = [
        `Qualidade garantida ${brand}`,
        'Ideal para uso diário da família',
        'Excelente custo-benefício',
        'Fórmula suave e confiável',
      ];
      aiSummary = `Elogiado pela qualidade superior e eficácia no uso cotidiano, ${nounWithBrand} atende perfeitamente às necessidades dos consumidores com fórmula confiável, excelente rendimento e alto índice de aprovação da família.`;
      textTemplates = [
        `Produto de excelente qualidade da ${brand}! Cumpre rigorosamente tudo o que promete.`,
        `A embalagem tem ótimo tamanho e rende muito no uso diário aqui em casa.`,
        `Muito satisfeito com a compra de ${nounWithBrand}. Chegou rápido e muito bem lacrado pela Droga Raia.`,
        `Textura suave e fórmula muito agradável, atende a família inteira com total segurança.`,
        `Qualidade superior às marcas concorrentes na mesma categoria. Vale muito a pena!`,
        `Comprei com desconto no app da Raia e a entrega foi pontual no mesmo dia.`,
        `Uso com frequência e nunca tive nenhum problema de irritação ou sensibilidade.`,
        `Embalagem moderna, resistente e prática para usar no banheiro ou levar na mala de viagem.`,
        `Excelente custo-benefício pela qualidade e durabilidade que oferece.`,
        `Marca ${brand} de total confiança e tradição no mercado brasileiro.`,
        `Sensação prolongada de conforto e bem-estar no dia a dia.`,
        `Recomendo a todos que procuram um produto confiável e de procedência garantida.`,
        `Já é a terceira vez que adquiro ${nounWithBrand} na farmácia e continuarei comprando.`,
        `Fragrância discreta e muito agradável, na medida exata para o cotidiano.`,
        `Aprovadíssimo! Produto indispensável na rotina de cuidados da minha casa.`,
        `Fórmula equilibrada que não agride nem resseca com o uso continuado.`,
        `Chegou antes do prazo estimado pela entrega da Drogaraia. Nota dez no serviço!`,
        `Melhor opção da categoria que já experimentei. Podem comprar sem medo.`,
        `Rendimento muito acima da média, uma pequena quantidade já é suficiente.`,
        `Produto original de procedência garantida, lacrado de fábrica.`,
        `Muito prático e seguro para toda a família usar todos os dias.`,
        `Excelente em todos os detalhes! Parabéns à ${brand} pela qualidade.`
      ];
      break;
  }

  // Generate 22 unique customer reviews
  const reviews: CustomerReview[] = [];
  for (let i = 0; i < 22; i++) {
    const authorIdx = (authorOffset + i) % AUTHOR_POOL.length;
    const dateIdx = (dateOffset + i) % DATES_POOL.length;
    const author = AUTHOR_POOL[authorIdx];
    const date = DATES_POOL[dateIdx];
    const text = textTemplates[i % textTemplates.length];
    const rating = i === 6 || i === 10 || i === 16 ? 4 : 5;
    const helpfulCount = ((seed + i * 3) % 9) + 1;

    reviews.push({
      id: `rev-${product.id || seed}-${i + 1}`,
      author,
      rating,
      date,
      text,
      helpfulCount,
    });
  }

  const computedRating = 4.8 + ((seed % 2) * 0.1);
  const reviewsCount = product.reviews || (340 + (seed % 650));
  const recommendedPercentage = 96 + (seed % 4);

  return {
    rating: Number(computedRating.toFixed(1)),
    reviewsCount,
    recommendedPercentage,
    aiSummary,
    attributes,
    highlightTags,
    reviews,
  };
}

// -------------------------------------------------------------
// 3. MAIN ROUTER
// -------------------------------------------------------------

export function getProductReviewsData(product: Product): ProductReviewsData {
  const pId = product.id;
  const nameLow = (product.name || '').toLowerCase();
  const brandLow = (product.brand || '').toLowerCase();

  // (1) Rexona Men Sem Perfume Aerosol (ID: 103 or matching name)
  if (pId === 103 || (brandLow.includes('rexona') && nameLow.includes('aerosol') && nameLow.includes('sem perfume'))) {
    return { ...rexonaAerosolSemPerfumeReviews };
  }

  // (2) Rexona Men Sem Perfume Roll-on (ID: 1502 or 2899 or matching name)
  if (pId === 1502 || pId === 2899 || (brandLow.includes('rexona') && nameLow.includes('roll-on') && nameLow.includes('sem perfume'))) {
    return { ...rexonaRollonSemPerfumeReviews };
  }

  // (3) Rexona Clinical Men Clean Roll-On (ID: 1325 or clinical match)
  if (pId === 1325 || (brandLow.includes('rexona') && nameLow.includes('clinical'))) {
    return { ...rexonaClinicalReviews };
  }

  // (4) Dove Original Roll-On (ID: 120 or 1107 or matching name)
  if (pId === 120 || pId === 1107 || (brandLow.includes('dove') && nameLow.includes('roll-on') && nameLow.includes('original'))) {
    return { ...doveRollonOriginalReviews };
  }

  // (5) Dove Original Aerossol (ID: 1281 or matching name)
  if (pId === 1281 || (brandLow.includes('dove') && nameLow.includes('aeros') && nameLow.includes('original'))) {
    return { ...doveAerosolOriginalReviews };
  }

  // (6) ANY OTHER PRODUCT IN THE CATALOG:
  // Dynamically generate 100% natural, unique, tailored reviews for that specific product!
  return generateDynamicReviewsForProduct(product);
}
