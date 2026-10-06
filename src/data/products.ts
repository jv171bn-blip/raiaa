export interface Product {
  id: number;
  name: string;
  size: string;
  oldPrice?: number;
  price: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  image: string;
  badges?: string[];
  sponsored?: boolean;
  options?: number;
  brand?: string;
  category?: string;
  subcategory?: string;
  bullets?: string[];
  description?: string;
  howToUse?: string;
  composition?: string;
  warnings?: string[];
  productCode?: string;
  activeIngredient?: string;
  dosage?: string;
  ean?: string;
  tierText?: string;
  consultStock?: boolean;
  ultraId?: number;
}

export function isCosmeticOrPersonalCare(product?: Product | null): boolean {
  if (!product) return false;

  const category = (product.category || '').toLowerCase();
  const subcategory = (product.subcategory || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  // Medicines, remedies, test kits, eye drops, medical devices cannot have user ratings (ANVISA)
  if (
    category.includes('medicamento') ||
    category.includes('remédio') ||
    category.includes('remedio') ||
    category.includes('farmácia') ||
    category.includes('farmacia') ||
    subcategory.includes('dor e febre') ||
    subcategory.includes('dores abdominais') ||
    subcategory.includes('dores musculares') ||
    subcategory.startsWith('dores') ||
    subcategory.includes(' dores') ||
    subcategory.includes('anti-tabagismo') ||
    subcategory.includes('digestão') ||
    subcategory.includes('digestao') ||
    subcategory.includes('genérico') ||
    subcategory.includes('generico') ||
    subcategory.includes('colírio') ||
    subcategory.includes('colirio') ||
    subcategory.includes('monitor') ||
    subcategory.includes('teste') ||
    subcategory.includes('remédio') ||
    subcategory.includes('remedio') ||
    subcategory.includes('primeiros socorros') ||
    subcategory.includes('diabetes') ||
    subcategory.includes('glicemia') ||
    subcategory.includes('pressão') ||
    subcategory.includes('pressao') ||
    subcategory.includes('oftalmo')
  ) {
    return false;
  }

  // Known medicine and pharmaceutical drug keywords
  const pharmaKeywords = [
    'dipirona',
    'novalgina',
    'buscopan',
    'nicorette',
    'enterogermina',
    'hyabak',
    'colírio',
    'colirio',
    'freestyle libre',
    'paracetamol',
    'ibuprofeno',
    'dorflex',
    'neosaldina',
    'medicamento',
    'remédio',
    'remedio',
    'antibiótico',
    'antibiotico',
    'anti-inflamatório',
    'anti-inflamatorio',
    'minoxidil',
    'fumagum',
    'aspirina',
    'benegrip',
    'cimegripe',
    'coristina',
    'deocil',
    'tilenol',
    'tylenol',
    'nimesulida',
    'doril',
    'torsilax',
    'cataflam',
    'voltaren',
    'anador',
    'luftal',
    'simeticona',
    'antiácido',
    'antiacido',
    'epocler',
    'estomazil',
    'eno',
    'sal de fruta',
    'losartana',
    'atenolol',
    'omeprazol',
    'pantoprazol',
    'amoxicilina',
    'azitromicina',
    'antialérgico',
    'antialergico',
    'allegra',
    'loratadina',
    'desloratadina',
    'cetirizina',
    'claritin',
    'sorine',
    'rinosoro',
    'neosoro',
    'narix',
    'flanax',
    'advil',
    'alivium',
    'atroveran',
    'butilbrometo',
    'escopolamina',
    'doralgina',
    'vick',
    'strepsils',
    'spray para garganta',
    'pastilha para garganta'
  ];

  if (pharmaKeywords.some(keyword => name.includes(keyword))) {
    return false;
  }

  // Allowed categories: Dermocosméticos, Beleza, Higiene, Perfumaria, Cabelos, Mamãe & Bebê
  if (
    category.includes('dermocosm') ||
    category.includes('beleza') ||
    category.includes('higiene') ||
    category.includes('cabelo') ||
    category.includes('perfum') ||
    category.includes('mamãe') ||
    category.includes('mamae') ||
    category.includes('bebê') ||
    category.includes('bebe') ||
    subcategory.includes('cabelo') ||
    subcategory.includes('hidratante') ||
    subcategory.includes('acne') ||
    subcategory.includes('sérum') ||
    subcategory.includes('serum') ||
    subcategory.includes('rosto') ||
    subcategory.includes('pele') ||
    subcategory.includes('barba') ||
    subcategory.includes('solar') ||
    subcategory.includes('desodorante') ||
    subcategory.includes('fralda') ||
    subcategory.includes('higiene do bebê') ||
    subcategory.includes('higiene do bebe') ||
    subcategory.includes('absorvente') ||
    subcategory.includes('bucal') ||
    subcategory.includes('intimo') ||
    subcategory.includes('íntimo') ||
    subcategory.includes('finalizador')
  ) {
    return true;
  }

  // Cosmetic and personal care product keywords
  const cosmeticKeywords = [
    'shampoo',
    'condicionador',
    'hidratante',
    'loção',
    'locao',
    'creme',
    'sérum',
    'serum',
    'protetor solar',
    'demaquilante',
    'sabonete',
    'desodorante',
    'antitranspirante',
    'fralda',
    'lenço',
    'lenco',
    'absorvente',
    'intimus',
    'bioniq',
    'óleo',
    'oleo',
    'tônico',
    'tonico',
    'ampola',
    'máscara',
    'mascara',
    'esfoliante',
    'gel de limpeza',
    'bepantol',
    'cerave',
    'eucerin',
    'azelan',
    'la roche',
    'vichy',
    'bioderma',
    'medicube',
    'skin1004',
    'curél',
    'curel',
    'kerasys',
    'biore',
    'bioré',
    'hada labo',
    'beauty of joseon',
    'cosrx',
    'pantene',
    'dove',
    'colgate',
    'dental',
    'flosser',
    'balm',
    'tratamento capilar',
    'booster',
    'trio',
    'mise en scène',
    'mise en scene',
    'retinol',
    'perfume',
    'eau de parfum',
    'eau de toilette',
    'cologne',
    'fragrância',
    'fragrancia',
    'xerjoff',
    'armaf',
    'lattafa',
    'creed',
    'montblanc'
  ];

  return cosmeticKeywords.some(keyword => name.includes(keyword));
}

export const viterganZincoProduct: Product = {
  id: 140081,
  name: "Polivitamínico Vitergan Zinco PL 30 Comprimidos",
  size: "30 Comprimidos",
  brand: "Vitergan Zinco",
  category: "Vida Saudável",
  subcategory: "Vitaminas",
  price: 119.90,
  oldPrice: 139.90,
  image: "/products/vitergan_zinco_30comp.jpg",
  bullets: [
    "Suplemento vitamínico e mineral com ação antioxidante.",
    "Combate os radicais livres que podem prejudicar o funcionamento dos órgãos.",
    "Auxilia na proteção celular e no bem-estar geral.",
  ],
  description:
    "O Vitergan Zinco Pl é um suplemento vitamínico e mineral antioxidante, composto por vitaminas e minerais que atuam contra radicais livres.",
  howToUse:
    "Tomar 1 comprimido ao dia com água junto a uma das refeições principais.",
  composition:
    "Vitaminas A, C, E, Zinco Quelato e Minerais Antioxidantes.",
  warnings: [
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Este produto não é um medicamento.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "140081",
  ean: "7896226109350",
};

export const flexoneProduct: Product = {
  id: 912060,
  name: "Di-Magnésio Malato 500mg bwell 60 Cápsulas",
  size: "60 Cápsulas",
  brand: "bwell",
  category: "Vida Saudável",
  subcategory: "Minerais",
  price: 64.90,
  oldPrice: 79.90,
  image: "/products/dimagnesio_malato_bwell.webp",
  bullets: [
    "Di-Magnésio Malato quelato com alta taxa de absorção.",
    "Auxilia no funcionamento muscular e no metabolismo energético.",
    "Fórmula desenvolvida pela linha exclusiva bwell.",
  ],
  description:
    "Suplemento mineral de Di-Magnésio Malato com alta biodisponibilidade para apoio muscular e energia no dia a dia.",
  howToUse:
    "Ingerir 2 cápsulas ao dia com um copo de água, preferencialmente antes das refeições.",
  composition:
    "Dimagnésio malato, antiumectante dióxido de silício e cápsula vegetal.",
  warnings: [
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "912060",
  ean: "7891058021111",
};

export const mostBought: Product[] = [
  {
    id: 11012,
    name: "Creme Multirreparador Calmante La Roche-Posay Cicaplast Baume B5+ 40ml",
    size: "40ml",
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    oldPrice: 104.90,
    price: 79.90,
    discount: 24,
    rating: 5,
    reviews: 48,
    image: "/products/cicaplast_baume_b5.jpg",
    bullets: [
      "Bálsamo multirreparador calmante para pele sensibilizada.",
      "Com Pantenol 5%, Madecassoside e complexo prebiótico Tribioma.",
      "Reparação acelerada da barreira cutânea.",
      "Adequado para bebês, crianças e adultos.",
    ],
    description: "Cicaplast Baume B5+ da La Roche-Posay é um creme multirreparador calmante com fórmula inovadora que acelera a reparação da barreira cutânea desde o 1º dia.",
    howToUse: "Aplique duas vezes ao dia na pele limpa e seca.",
  },
  {
    id: 1007146,
    name: "Sensor de Monitoramento de Glicose FreeStyle Libre 2 Plus Sistema Flash",
    size: "1un",
    brand: "Freestyle Libre",
    category: "Medicamentos",
    subcategory: "Monitores e Testes",
    oldPrice: 329.90,
    price: 329.80,
    image: "/products/freestyle_libre_2.jpg",
    bullets: [
      "Sensor de monitoramento de glicose sistema flash.",
      "Mede os níveis de glicose continuamente dia e noite.",
      "Compatível com o app FreeStyle LibreLink.",
      "Uso por até 15 dias com máxima precisão.",
    ],
    description: "O sensor FreeStyle Libre 2 Plus mede continuamente a concentração de glicose no líquido intersticial de pessoas com diabetes mellitus. Fácil de aplicar e confortável de usar.",
    howToUse: "Aplique o sensor na parte de trás do braço utilizando o aplicador descartável. Escaneie com o leitor ou smartphone.",
  },
  {
    id: 14951,
    name: "Colírio Hyabak 0,15% 10ml",
    size: "10ml",
    brand: "Hyabak",
    category: "Vida Saudável",
    subcategory: "Colírios",
    oldPrice: 78.90,
    price: 74.50,
    discount: 6,
    image: "/products/hyabak_10ml.jpg",
    bullets: [
      "Solução oftálmica lubrificante com hialuronato de sódio a 0,15%.",
      "Dispositivo ABAK que garante gotas estéreis sem conservantes.",
      "Compatível com todos os tipos de lentes de contato.",
      "Alívio imediato do desconforto ocular e olhos secos.",
    ],
    description: "Graças ao dispositivo ABAK, Hyabak permite fornecer gotas de solução sem conservantes. Pode, assim, ser utilizado com qualquer tipo de lente de contato.",
    howToUse: "Instilar 1 gota em cada olho sempre que necessário ao longo do dia.",
  },
  {
    id: 11003,
    name: "Novalgina Dipirona 1g 20 comprimidos",
    size: "20 Comprimidos",
    brand: "Novalgina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    oldPrice: 47.02,
    price: 34.99,
    discount: 26,
    options: 5,
    image: "/products/novalgina_1g_20comp.webp",
    bullets: [
      "Analgésico e antitérmico de rápida ação.",
      "Comprimidos de 1g de Dipirona Monoidratada.",
      "Alívio de dores intensas e controle de febre alta.",
      "Uso adulto e pediátrico acima de 15 anos.",
    ],
    description: "Novalgina 1g é um medicamento à base de dipirona monoidratada, utilizado no tratamento de dor e febre. Seus efeitos começam entre 30 e 60 minutos após a administração.",
    howToUse: "Tomar 1/2 a 1 comprimido com água até 4 vezes ao dia.",
  },
  {
    id: 11005,
    name: "Buscopan Composto Butilbrometo de Escopolamina 10mg + Dipirona Sódica 250mg 20 comprimidos",
    size: "20 Comprimidos revestidos",
    brand: "Buscopan",
    category: "Medicamentos",
    subcategory: "Dores Abdominais",
    oldPrice: 29.49,
    price: 23.90,
    discount: 19,
    image: "/products/buscopan_composto_20comp.webp",
    bullets: [
      "Ação dupla: antiespasmódica e analgésica.",
      "Combinação potente de Butilbrometo de Escopolamina 10mg e Dipirona 250mg.",
      "Alívio rápido de cólicas estomacais e abdominais intensas.",
      "Comprimidos revestidos de fácil deglutição.",
    ],
    description: "Buscopan Composto é indicado para o tratamento dos sintomas de cólicas gastrointestinais, cólicas biliares e dores espasmódicas na região do abdômen.",
    howToUse: "Tomar 1 a 2 comprimidos revestidos, 3 a 4 vezes ao dia, com água.",
  },
  {
    id: 11006,
    name: "Probiótico Enterogermina 10 frascos de 5ml",
    size: "50ml",
    brand: "Enterogermina",
    category: "Medicamentos",
    subcategory: "Digestão",
    price: 51.99,
    options: 2,
    badges: ["+1 nº da sorte"],
    image: "/products/enterogermina_10flac.jpg",
    bullets: [
      "Suspensão de esporos de Bacillus clausii (2 bilhões / 5ml).",
      "Restaura e equilibra a flora microbiana intestinal.",
      "Pronto para beber: frasconetes monodose sem sabor.",
      "Resistente ao suco gástrico e a antibióticos.",
    ],
    description: "Enterogermina é um probiótico que contribui para o equilíbrio da microbiota intestinal. Apresenta esporos de Bacillus clausii que chegam intactos ao intestino.",
    howToUse: "Agite o flaconete, gire a tampa para abrir e tome o conteúdo diretamente pela boca, 1 a 3 frascos ao dia.",
  },
  {
    id: 11013,
    name: "Loção Hidratante Corporal CeraVe Pele Seca a Extra Seca Hidratação Prolongada 473ml",
    size: "473ml",
    brand: "CeraVe",
    category: "Dermocosméticos",
    subcategory: "Hidratantes Corporais",
    oldPrice: 133.90,
    price: 99.90,
    discount: 25,
    options: 4,
    rating: 4.9,
    reviews: 597,
    image: "/products/cerave_locao_473ml.jpg",
    bullets: [
      "Contém 3 ceramidas essenciais (1, 3 e 6-II) e Ácido Hialurônico.",
      "Tecnologia MVE: liberação contínua de ativos para hidratação o dia todo.",
      "Fórmula leve, não comedogênica e de rápida absorção.",
      "Sem perfume e recomendada por dermatologistas.",
    ],
    description: "A Loção Hidratante CeraVe ajuda a restaurar a barreira protetora da pele do corpo e do rosto, proporcionando hidratação de longa duração para peles secas e ressecadas.",
    howToUse: "Aplique generosamente por todo o corpo e rosto sempre que sentir necessidade.",
  },
  {
    id: 11015,
    name: "Fórmula Infantil Ninho Fases 1+ Nestlé 1 a 3 anos 800g",
    size: "800g",
    brand: "Nestlé",
    category: "Mamãe e Bebê",
    subcategory: "Compostos Lácteos",
    price: 42.99,
    tierText: "a partir de 2 itens",
    rating: 4.9,
    reviews: 387,
    image: "/products/ninho_fases_1.jpg",
    bullets: [
      "Composto lácteo enriquecido para crianças de 1 a 3 anos.",
      "Contém Prebio 1 (fibras prebióticas) que favorecem a flora intestinal.",
      "Sem adição de açúcares (sacarose) e aromatizantes artificiais.",
      "Fonte de Cálcio, Zinco, Ferro e 18 vitaminas essenciais.",
    ],
    description: "Ninho Fases 1+ da Nestlé foi formulado para atender aos desafios nutricionais da fase pré-escolar, contribuindo para ossos fortes, imunidade e crescimento equilibrado.",
    howToUse: "Para preparar 1 copo (200ml): adicione 6 colheres-medida rasas (32g) de pó em 180ml de água morna ou fria previamente fervida.",
  },
  {
    id: 11016,
    name: "Sérum Facial Clareador Eucerin Dual Anti-Pigment 30ml",
    size: "30ml",
    brand: "Eucerin",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    oldPrice: 299.90,
    price: 260.61,
    discount: 13,
    badges: ["+1 nº da sorte"],
    rating: 4.8,
    reviews: 174,
    image: "/products/eucerin_dual_anti_pigment.jpg",
    bullets: [
      "Fórmula inovadora de câmara dupla com Thiamidol e Ácido Hialurônico.",
      "Reduz até 75% da intensidade de manchas escuras com uso regular.",
      "Previne o reaparecimento de hiperpigmentação solar e hormonal.",
      "Textura leve, toque aveludado e rápida absorção para todos os tipos de pele.",
    ],
    description: "Eucerin Anti-Pigment Dual Sérum combina dois princípios ativos potentes em uma fórmula inovadora: o Thiamidol patenteado, que atua na causa raiz da hiperpigmentação, e o Ácido Hialurônico concentrado, que hidrata profundamente.",
    howToUse: "Aplique uma vez ao dia (pela manhã ou à noite) no rosto, pescoço e colo bem limpos, massageando suavemente.",
  },
  {
    id: 2047,
    name: "Cereal Infantil Mucilon Milho Nestlé 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mamãe e Bebê",
    subcategory: "Alimentação Infantil",
    oldPrice: 32.90,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 460,
    image: "/products/mucilon_milho.jpg",
    bullets: [
      "Cereal infantil de milho enriquecido com vitaminas A, C, D e complexo B.",
      "NutriProtect+: combinação exclusiva de nutrientes essenciais para imunidade e desenvolvimento.",
      "Fonte de Ferro e Zinco de alta biodisponibilidade.",
      "Ideal para papinhas nutritivas e deliciosas.",
    ],
    description: "Mucilon Milho é um cereal infantil da Nestlé desenvolvido especialmente para complementar a alimentação de bebês e crianças a partir de 6 meses, auxiliando no crescimento saudável com ferro e vitaminas.",
  },
  {
    id: 20470,
    name: "Fórmula Infantil Danone Aptamil Profutura 1 com Prebióticos 800g",
    size: "800g",
    brand: "Aptamil",
    category: "Mamãe e Bebê",
    subcategory: "Fórmulas Infantis",
    oldPrice: 124.90,
    price: 98.90,
    discount: 21,
    image: "/products/aptamil_profutura.jpg",
    bullets: [
      "Fórmula infantil de partida para lactentes de 0 a 6 meses.",
      "Exclusiva combinação patenteada de prebióticos scGOS/lcFOS e pós-bióticos.",
      "Contém DHA, ARA e nucleotídeos essenciais para o desenvolvimento cognitivo e visual.",
      "Fórmula padrão-ouro recomendada por pediatras.",
    ],
    description: "Aptamil Profutura 1 é uma fórmula infantil com nutrientes inspirados na nutrição materna, contendo estrutura lipídica exclusiva e prebióticos que apoiam o sistema imunológico infantil.",
  },
  {
    id: 2048,
    name: "Cereal Infantil Mucilon Arroz e Aveia Nestlé 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mamãe e Bebê",
    subcategory: "Alimentação Infantil",
    oldPrice: 32.90,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 520,
    image: "/products/mucilon_arroz_aveia.jpg",
    bullets: [
      "Combinação balanceada de arroz e aveia rica em fibras para o intestino.",
      "Fonte de 13 vitaminas e minerais essenciais para o bebê.",
      "Fácil digestão e sabor suave que as crianças adoram.",
      "Sem adição de conservantes ou corantes artificiais.",
    ],
    description: "O Cereal Infantil Mucilon Arroz e Aveia Nestlé é fonte de energia saudável e nutrientes essenciais que apoiam o desenvolvimento infantil e a saúde digestiva.",
  },
  {
    id: 20480,
    name: "Fórmula Infantil Nestlé NAN Supreme 1 com HMOs 800g",
    size: "800g",
    brand: "NAN",
    category: "Mamãe e Bebê",
    subcategory: "Fórmulas Infantis",
    oldPrice: 159.90,
    price: 139.99,
    discount: 12,
    image: "/products/nan_supreme_1.jpg",
    bullets: [
      "Contém 2 Oligossacarídeos do Leite Humano (2'FL e LNnT) idênticos aos naturais.",
      "Proteína do soro do leite parcialmente hidrolisada para digestão mais leve.",
      "Indicado para bebês de 0 a 6 meses sob orientação médica ou nutricional.",
      "Enriquecido com DHA, ARA e probióticos B. lactis.",
    ],
    description: "NAN Supreme 1 da Nestlé traz a mais avançada tecnologia com HMOs e proteínas selecionadas que facilitam a digestão e reduzem o risco de desconfortos intestinais.",
  },
  {
    id: 2042,
    name: "Pomada Preventiva de Assaduras Desitin Maximum Strength Roxa 113g",
    size: "113g",
    brand: "Desitin",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    oldPrice: 74.90,
    price: 64.90,
    discount: 13,
    rating: 4.9,
    reviews: 350,
    image: "/products/desitin_roxa.jpg",
    bullets: [
      "Concentração máxima permitida de 40% de Óxido de Zinco.",
      "Alivia a dor e o desconforto de assaduras severas desde a 1ª aplicação.",
      "Barreira protetora espessa e duradoura contra a acidez da urina e fezes.",
    ],
    description: "Desitin Maximum Strength Roxa é o tratamento número 1 recomendado nos EUA contra assaduras persistentes, criando uma barreira impermeável de longa duração.",
  },
  {
    id: 20490,
    name: "Composto Lácteo Ninho Fases 1+ Prebio 1 Nestlé 800g",
    size: "800g",
    brand: "Ninho",
    category: "Mamãe & Bebê",
    subcategory: "Fórmulas Infantis",
    oldPrice: 52.90,
    price: 44.90,
    discount: 15,
    rating: 4.9,
    reviews: 580,
    image: "/products/ninho_fases_1.jpg",
    bullets: [
      "Desenvolvido para crianças de 1 a 3 anos de idade.",
      "Composto com fibras Prebio 1 que auxiliam no bom funcionamento do intestino.",
      "Rico em Cálcio, Ferro, Zinco e Vitaminas A, C, D e E.",
      "Sabor adorado por gerações com qualidade Nestlé.",
    ],
    description: "Ninho Fases 1+ ajuda a complementar a nutrição de crianças a partir de 1 ano, fornecendo nutrientes fundamentais para a fase de descobertas e crescimento.",
  },
  {
    id: 2041,
    name: "Pomada para Assaduras Hipoglós Amêndoas 40g",
    size: "40g",
    brand: "Hipoglós",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    oldPrice: 26.90,
    price: 22.90,
    discount: 15,
    rating: 4.9,
    reviews: 320,
    image: "/products/hipoglos_amendoas.jpg",
    bullets: [
      "Fórmula enriquecida com Óleo de Amêndoas e Óxido de Zinco.",
      "Textura suave fácil de aplicar e remover na troca de fraldas.",
      "Cria uma barreira protetora contra assaduras e irritações por umidade.",
    ],
    description: "Hipoglós Amêndoas forma uma camada protetora nutritiva com óleo de amêndoas e vitaminas A e E, mantendo a pele do bebê hidratada e livre de assaduras.",
  },
  {
    id: 2049,
    name: "Cereal Infantil Mucilon Multicereais Nestlé 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mamãe & Bebê",
    subcategory: "Alimentação Infantil",
    oldPrice: 32.90,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 380,
    image: "/products/mucilon_multicereais_600g.webp",
    bullets: [
      "Mix balanceado de trigo, cevada, arroz e aveia.",
      "Enriquecido com ferro, zinco e vitamina C para fortalecer as defesas naturais.",
      "Prático e nutritivo para o café da manhã ou lanchinho.",
    ],
    description: "Mucilon Multicereais combina grãos selecionados para oferecer textura aveludada e nutrição completa para a fase de introdução alimentar dos pequenos.",
  }
];

export const blackDayProducts: Product[] = [
  {
    id: 1250294,
    name: "Fralda Pampers Confort Sec Tamanho G 60 Unidades",
    size: "Tam G (60un)",
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    price: 59.61,
    oldPrice: 74.76,
    discount: 70,
    rating: 4.9,
    reviews: 626,
    options: 5,
    badges: ["Black do Dia", "+1 nº da sorte"],
    tierText: "Super Oferta 70% OFF",
    image: "/products/pampers_confort_sec_g.webp",
    bullets: [
      "Fralda descartável campeã em vendas em todo o Brasil.",
      "Tamanho G indicado para bebês de 9 a 13kg com 60 unidades.",
      "Canais de ar exclusivos que permitem a circulação de ar dentro da fralda.",
      "Gel Mágico que absorve e retém a umidade mantendo a pele seca por até 12 horas.",
      "Até 2 vezes mais sequinha a noite toda, evitando vazamentos e desconforto.",
      "Loção hipoalergênica que protege a pele sensível contra irritações e assaduras.",
    ],
    description: "A Fralda Pampers Confort Sec é a número 1 em vendas no Brasil e líder absoluta de preferência das famílias. Desenvolvida com canais de ar e gel mágico ultra-absorvente, mantém o bebê sequinho e protegido durante o dia e a noite inteira.",
    howToUse: "Coloque o bebê sobre a fralda aberta, ajuste as abas elásticas adesivas confortavelmente na cintura.",
    composition: "Polpa de celulose, polímero superabsorvente, polietileno, polipropileno, elásticos e loção dermoprotetora com extrato de camomila.",
    warnings: ["Uso externo.", "Descarte no lixo comum, nunca no vaso sanitário.", "Mantenha fora do alcance de crianças."],
    productCode: "1250294",
    ean: "7500435123456",
  },
  {
    id: 103,
    name: "Desodorante Antitranspirante Aerosol Rexona Men Sem Perfume 72h 150ml",
    size: "150ml",
    oldPrice: 19.90,
    price: 14.75,
    discount: 26,
    tierText: "a partir de 2 itens",
    badges: ["Black do Dia"],
    rating: 4.7,
    reviews: 48,
    image: "/products/rexona_men_sem_perfume_aerosol.jpg",
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    description: "Proteção antitranspirante 72 horas sem fragrância, hipoalergênico e dermatologicamente testado para homens com pele sensível.",
  },
  {
    id: 109,
    name: "Protetor Solar Facial Needs Beauty FPS 70 40g",
    size: "40g",
    oldPrice: 44.90,
    price: 31.49,
    discount: 30,
    options: 4,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 164,
    image: "/products/needs_beauty_fps70.jpg",
    brand: "Needs",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    description: "Protetor solar facial Needs Beauty com FPS 70, toque seco, textura leve e ação antioxidante com Vitamina E.",
  },
  {
    id: 3999,
    name: "Kit Lenço Umedecido Huggies Rosto e Corpo Hipoalergênico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.8,
    reviews: 623,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    badges: ["+1 nº da sorte", "Leve 4 Pague 3"],
    description: "O Kit Lenço Umedecido Huggies Rosto e Corpo foi desenvolvido para proporcionar limpeza delicada e segura da cabeça aos pés. Com fórmula hipoalergênica e textura suave como algodão, limpa sem agredir a pele sensível do bebê e de toda a família.",
    composition: "Aqua, Polysorbate 20, Caprylyl Glycol, Sodium Benzoate, Coco-Betaine, Malic Acid, Parfum, Sodium Citrate, Aloe Barbadensis Leaf Extract, Tocopheryl Acetate.",
    howToUse: "Abra a tampa flip-top, puxe o lacre adesivo e retire uma toalha umedecida. Aplique suavemente sobre a área a ser limpa. Feche bem a embalagem para preservar a umidade.",
    warnings: ["Uso externo.", "Não ingerir.", "Em caso de irritação, suspenda o uso e procure orientação médica.", "Mantenha fora do alcance de crianças."],
    productCode: "109823",
    ean: "7896007548902",
    dosage: "4 pacotes com 48 toalhas cada (192un)",
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 84.90,
    price: 48.59,
    discount: 20,
    badges: ["Black do Dia"],
    rating: 4.9,
    reviews: 340,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosméticos",
    subcategory: "Limpeza Facial",
    description: "Gel de limpeza facial Actine de alta performance dermatológica para controle prolongado da oleosidade e redução da acne.",
  },
  {
    id: 116,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml Leve Mais Pague Menos",
    size: "500ml",
    oldPrice: 28.90,
    price: 21.90,
    discount: 24,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 190,
    image: "/products/listerine_cool_mint_500ml.jpg",
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    description: "Enxaguante antisséptico Listerine Cool Mint que elimina até 99% das bactérias causadoras do mau hálito, placa e gengivite.",
  },
  {
    id: 118,
    name: "Shampoo Anticaspa Darrow Doctar Plus 120ml",
    size: "120ml",
    oldPrice: 72.90,
    price: 58.90,
    discount: 19,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 145,
    image: "/products/darrow_doctar_plus_140ml.jpg",
    brand: "Darrow",
    category: "Cabelos",
    subcategory: "Shampoo",
    description: "Shampoo dermatológico anticaspa intensivo que elimina descamações severas e alivia o prurido no couro cabeludo desde o primeiro uso.",
  },];

export const weekHighlights: Product[] = [];

export const favoriteBrands: Product[] = [];

export const asianBeauty: Product[] = [
  {
    id: 401,
    name: "Tônico Facial em Disco Medicube Zero Pore Pad 2.0 70un",
    size: "70un",
    price: 279.00,
    rating: 5.0,
    reviews: 58,
    brand: "Medicube",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    image: "/products/medicube_zero_pore_pad.webp",
    bullets: [
      "Discos esfoliantes faciais duplos com AHA e BHA patenteados.",
      "Reduz visivelmente o tamanho e a aparência dos poros dilatados.",
      "Controla a oleosidade excessiva e remove células mortas suavemente.",
      "Fabricado na Coreia do Sul - Autêntico K-Beauty.",
    ],
    description: "O Zero Pore Pad 2.0 da Medicube é um tônico facial em discos formulado clinicamente na Coreia do Sul com complexos patenteados de AHA e BHA para desobstruir os poros, regular o sebo e uniformizar a textura da pele.",
    howToUse: "Após a limpeza facial, passe o lado texturizado suavemente pelo rosto evitando os olhos. Em seguida, utilize o lado macio para finalizar e auxiliar na absorção.",
    composition: "AHA, BHA, Extrato de Flor de Camélia, Pantenol, Ácido Hialurônico.",
    ean: "8809628880628",
    productCode: "401",
  },
  {
    id: 402,
    name: "Ampola Facial Skin1004 Madagascar Centella Asiatica 55ml",
    size: "55ml",
    oldPrice: 179.90,
    price: 162.99,
    discount: 9,
    rating: 4.9,
    reviews: 84,
    brand: "Skin1004",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    image: "/products/skin1004_centella_55ml.webp",
    bullets: [
      "100% de extrato puro de Centella Asiatica colhida em Madagascar.",
      "Acalma instantaneamente a pele irritada, sensível ou sensibilizada.",
      "Fortalece a barreira cutânea e equilibra a hidratação.",
      "Fórmula hipoalergênica vegana produzida na Coreia do Sul.",
    ],
    description: "A clássica ampola facial calmante da marca coreana Skin1004 contém extrato purificado de Centella Asiatica para reparar a barreira cutânea, hidratar e acalmar vermelhidões sem deixar sensação pegajosa.",
    howToUse: "Aplique de 2 a 3 gotas no rosto limpo e tonificado, dando leves batidinhas com as pontas dos dedos até a completa absorção.",
    composition: "Centella Asiatica Extract 100%.",
    ean: "8809576260020",
    productCode: "402",
  },
  {
    id: 403,
    name: "Creme Hidratante Facial Intensivo Curél Peles Secas e Sensíveis 40g",
    size: "40g",
    price: 139.90,
    badges: ["Exclusivo"],
    rating: 4.9,
    reviews: 67,
    brand: "Curél",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    image: "/products/curel_creme_facial.webp",
    bullets: [
      "Tecnologia japonesa de Ceramidas avançadas desenvolvida pela Kao Japão.",
      "Nutre intensamente e restaura a barreira protetora da pele muito seca e sensível.",
      "Textura leve e aveludada com rápida absorção sem pesar.",
      "Fabricado no Japão - Marca Nº 1 para peles sensíveis no mercado japonês.",
    ],
    description: "Desenvolvido pelos laboratórios da Kao Corporation no Japão, Curél Intensive Moisture Facial Cream repõe as ceramidas naturais da pele, protegendo contra agressões externas e ressecamento severo.",
    howToUse: "Aplique uma quantidade do tamanho de uma pérola suavemente sobre todo o rosto limpo, de manhã e à noite.",
    composition: "Ceramide Functioning Ingredient, Extrato de Eucalipto, Alantoína.",
    ean: "4901301236210",
    productCode: "403",
  },
  {
    id: 404,
    name: "Kit Mise En Scène Perfect Serum Magic Straight Trio",
    size: "1un",
    price: 189.90,
    rating: 4.8,
    reviews: 42,
    brand: "Mise En Scène",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    image: "/products/mise_en_scene_perfect_serum.webp",
    bullets: [
      "Tratamento capilar completo efeito liso com tecnologia coreana antifrizz por até 24h.",
      "Enriquecido com 7 óleos nobres dourados (Argan, Camélia, Marula, Oliva, Jojoba, Coco e Damasco).",
      "Kit com Shampoo 140ml + Máscara Treatment 30ml + Sérum Capilar 15ml.",
      "Fabricado na Coreia do Sul pela Amorepacific.",
    ],
    description: "Linha de tratamento capilar de alta performance Mise En Scène, do grupo coreano Amorepacific. O trio Magic Straight alinha a fibra capilar, controla o frizz rebelde e confere brilho radiante.",
    howToUse: "Lave com o Shampoo Magic Straight, aplique a máscara Treatment nos fios úmidos por 3 minutos e enxágue. Finalize com algumas gotas do Sérum nos cabelos secos ou úmidos.",
    ean: "8809803560124",
    productCode: "404",
  },
  {
    id: 405,
    name: "Protetor Solar Bioré UV Aqua Rich Watery Essence FPS 50+ 70g",
    size: "70g",
    oldPrice: 89.90,
    price: 79.90,
    discount: 11,
    rating: 4.9,
    reviews: 184,
    brand: "Bioré",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    image: "/products/biore_uv_aqua_rich.jpg",
    bullets: [
      "Fórmula japonesa revolucionária com tecnologia Micro Defense FPS 50+ e PA++++.",
      "Textura aquosa ultraleve que se funde instantaneamente à pele sem deixar resíduo branco.",
      "Enriquecido com Ácido Hialurônico e Extrato de Geleia Real para hidratação prolongada.",
      "Fabricado no Japão pela Kao Corporation - Protetor solar nº 1 do Japão.",
    ],
    description: "O protetor solar japonês mais vendido do mundo. Bioré UV Aqua Rich Watery Essence oferece altíssima proteção contra raios UVA e UVB com sensação refrescante e toque seco invisível sob maquiagem.",
    howToUse: "Aplique uniformemente sobre o rosto e corpo antes da exposição solar. Reaplique sempre após sudorese intensa, nadar ou secar-se com toalha.",
    composition: "Filtros UV Micro Defense, Ácido Hialurônico, Geleia Real, Água purificada.",
    ean: "4901301413246",
    productCode: "405",
  },
  {
    id: 406,
    name: "Loção Hidratante Facial Hada Labo Gokujyun Premium Ácido Hialurônico 170ml",
    size: "170ml",
    oldPrice: 149.90,
    price: 129.90,
    discount: 13,
    rating: 5.0,
    reviews: 95,
    brand: "Hada Labo",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    image: "/products/hada_labo_gokujyun.jpg",
    bullets: [
      "Fórmula japonesa icônica com 7 tipos de Ácido Hialurônico de diferentes pesos moleculares.",
      "Hidratação profunda da epiderme até as camadas celulares mais profundas.",
      "Sem fragrância, sem corantes, sem álcool etílico e sem óleos minerais.",
      "Fabricado no Japão pela Rohto Pharmaceutical.",
    ],
    description: "Hada Labo Gokujyun Premium Lotion é uma loção aquosa rica desenvolvida no Japão pela Rohto Pharmaceutical que proporciona hidratação duradoura e restaura o volume natural e a elasticidade da pele.",
    howToUse: "Coloque algumas gotas na palma da mão e pressione suavemente sobre o rosto e pescoço limpos até completa absorção.",
    composition: "7 tipos de Ácido Hialurônico (incluindo Nano, Fermentado e Reticulado).",
    ean: "4987241167449",
    productCode: "406",
  },
  {
    id: 407,
    name: "Protetor Solar Facial Beauty of Joseon Relief Sun: Rice + Probiotics FPS 50+ 50ml",
    size: "50ml",
    oldPrice: 169.90,
    price: 144.90,
    discount: 15,
    rating: 4.9,
    reviews: 128,
    brand: "Beauty of Joseon",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    image: "/products/beauty_of_joseon_relief_sun.jpg",
    bullets: [
      "Contém 30% de Extrato de Arroz e Complexo Fermentado de Grãos Probióticos.",
      "Acabamento sedoso, luminoso e sem efeito esbranquiçado (white cast).",
      "Filtro químico orgânico suave ideal para todos os tipos de pele, inclusive sensíveis.",
      "Fabricado na Coreia do Sul - Fenômeno global de K-Beauty.",
    ],
    description: "O protetor solar Relief Sun Rice + Probiotics da Beauty of Joseon é formulado com técnicas tradicionais da dinastia Joseon combinadas à mais avançada ciência cosmética sul-coreana para nutrir e proteger a pele do sol.",
    howToUse: "Como última etapa da rotina de skincare matinal, aplique uma quantidade generosa sobre o rosto e pescoço.",
    composition: "Oryza Sativa (Rice) Extract 30%, Probiotics Ferment Complex, Niacinamida.",
    ean: "8809738316275",
    productCode: "407",
  },
  {
    id: 408,
    name: "Essência Facial COSRX Advanced Snail 96 Mucin Power Essence 100ml",
    size: "100ml",
    oldPrice: 199.90,
    price: 175.90,
    discount: 12,
    rating: 4.9,
    reviews: 156,
    brand: "COSRX",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    image: "/products/cosrx_snail_mucin.jpg",
    bullets: [
      "Composto por 96% de Filtrado de Secreção de Caracol purificado.",
      "Repara a pele danificada, acalma vermelhidões e melhora a elasticidade cutânea.",
      "Hidrata intensamente sem obstruir os poros, conferindo brilho viçoso (glass skin).",
      "Fabricado na Coreia do Sul pela COSRX.",
    ],
    description: "A essência best-seller mundial da COSRX formulada com 96% de mucina de caracol ajuda a renovar a barreira de hidratação, reparar cicatrizes superficiais e restaurar o viço da pele desidratada.",
    howToUse: "Após limpar e tonificar o rosto, aplique 2 a 3 pumps em todo o rosto com batidinhas suaves até ser absorvido.",
    composition: "Snail Secretion Filtrate 96%, Hialuronato de Sódio, Pantenol, Arginina.",
    ean: "8809416470009",
    productCode: "408",
  },
  {
    id: 409,
    name: "Sérum Capilar Mise En Scène Perfect Serum Styling 30ml",
    size: "30ml",
    price: 69.90,
    rating: 4.8,
    reviews: 31,
    brand: "Mise En Scène",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    image: "/products/mise_en_scene_perfect_serum.webp",
    bullets: [
      "Óleo capilar estilizador e protetor térmico coreano com fixação suave e memória de forma.",
      "Protege os fios contra ferramentas de calor (secador e chapinha) e umidade.",
      "Com blend de 7 óleos naturais preciosos e fragrância floral sofisticada.",
      "Fabricado na Coreia do Sul pela Amorepacific.",
    ],
    description: "Sérum estilizador de alta precisão que mantém penteados, cachos e escovas modelados por muito mais tempo enquanto nutre profundamente a fibra capilar.",
    howToUse: "Aplique uma moeda de sérum nos cabelos úmidos antes da escova ou nos cabelos secos para fixação suave e brilho espelhado.",
    ean: "8809803560230",
    productCode: "409",
  }
];

export const quemComprouTambem: Product[] = [
  {
    id: 3999,
    name: "Kit Lenço Umedecido Huggies Rosto e Corpo Hipoalergênico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.9,
    reviews: 142,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
  },
  {
    id: 2042,
    name: "Pomada Preventiva de Assaduras Desitin Maximum Strength Roxa 113g",
    size: "113g",
    oldPrice: 79.90,
    price: 64.90,
    discount: 19,
    rating: 4.9,
    reviews: 88,
    image: "/products/desitin_roxa.jpg",
    brand: "Desitin",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
  },
  {
    id: 2041,
    name: "Pomada para Assaduras Hipoglós Amêndoas 40g",
    size: "40g",
    oldPrice: 28.90,
    price: 22.90,
    discount: 21,
    rating: 4.8,
    reviews: 57,
    image: "/products/hipoglos_amendoas.jpg",
    brand: "Hipoglós",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
  },
  {
    id: 1303,
    name: "Bálsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 48.00,
    price: 36.00,
    discount: 25,
    rating: 4.9,
    reviews: 310,
    image: "/products/cicaplast_baume_b5.jpg",
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Rosto",
  },
  {
    id: 1305,
    name: "Loção Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.90,
    price: 89.90,
    discount: 18,
    rating: 4.9,
    reviews: 215,
    image: "/products/cerave_locao_473ml.jpg",
    brand: "CeraVe",
    category: "Dermocosméticos",
    subcategory: "Corpo",
  },
  {
    id: 1306,
    name: "Creme Multirrestaurador Bepantol Derma 20g",
    size: "20g",
    oldPrice: 42.90,
    price: 34.90,
    discount: 19,
    rating: 4.8,
    reviews: 94,
    image: "/products/bepantol_derma_20g.webp",
    brand: "Bepantol",
    category: "Dermocosméticos",
    subcategory: "Corpo",
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 59.90,
    price: 48.59,
    discount: 19,
    rating: 4.8,
    reviews: 180,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosméticos",
    subcategory: "Limpeza Facial",
  },
  {
    id: 116,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml Leve Mais Pague Menos",
    size: "500ml",
    oldPrice: 28.90,
    price: 21.90,
    discount: 24,
    rating: 4.7,
    reviews: 120,
    image: "/products/listerine_cool_mint_500ml.jpg",
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
  },
  {
    id: 103,
    name: "Desodorante Antitranspirante Aerosol Rexona Men Sem Perfume 72h 150ml",
    size: "150ml",
    oldPrice: 19.90,
    price: 14.75,
    discount: 26,
    rating: 4.8,
    reviews: 95,
    image: "/products/rexona_men_sem_perfume_aerosol.jpg",
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
  },
  {
    id: 109,
    name: "Protetor Solar Facial Needs Beauty FPS 70 40g",
    size: "40g",
    oldPrice: 42.00,
    price: 31.49,
    discount: 25,
    rating: 4.6,
    reviews: 64,
    image: "/products/needs_beauty_fps70.jpg",
    brand: "Needs",
    category: "Dermocosméticos",
    subcategory: "Protetor Solar",
  },
  {
    id: 11015,
    name: "Fórmula Infantil Ninho Fases 1+ Nestlé 1 a 3 anos 800g",
    size: "800g",
    oldPrice: 52.90,
    price: 42.99,
    discount: 19,
    rating: 4.9,
    reviews: 130,
    image: "/products/ninho_fases_1.jpg",
    brand: "Nestlé",
    category: "Mamãe & Bebê",
    subcategory: "Nutrição Infantil",
  },
  {
    id: 2047,
    name: "Cereal Infantil Mucilon Milho Nestlé 600g",
    size: "600g",
    oldPrice: 34.90,
    price: 27.99,
    discount: 20,
    rating: 4.8,
    reviews: 75,
    image: "/products/mucilon_milho.jpg",
    brand: "Nestlé",
    category: "Mamãe & Bebê",
    subcategory: "Nutrição Infantil",
  },
  {
    id: 501,
    name: "Fralda Pampers Pants Ajuste Total M 78 unidades",
    size: "78un",
    oldPrice: 163.68,
    price: 140.28,
    discount: 14,
    options: 5,
    badges: ["+1 nº da sorte"],
    rating: 4.8,
    reviews: 16,
    image: "/products/pampers_pants_m.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
  },
  {
    id: 912060,
    name: "Di-Magnésio Malato 500mg bwell 60 Cápsulas",
    size: "60 Cápsulas",
    oldPrice: 79.90,
    price: 64.90,
    discount: 19,
    rating: 4.8,
    reviews: 42,
    image: "/products/dimagnesio_malato_bwell.webp",
    brand: "bwell",
    category: "Vida Saudável",
    subcategory: "Suplementos",
  }
];

export const similaresVocePode: Product[] = [
  {
    id: 603,
    name: "Polivitamínico Vitergan Zinco 30 Comprimidos revestidos",
    size: "30 Comprimidos revestidos",
    oldPrice: 115.00,
    price: 110.00,
    discount: 4,
    image: "/products/vitergan_zinco_30comp.jpg",
    brand: "Vitergan Zinco",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
  },
  {
    id: 1303,
    name: "Bálsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 48.00,
    price: 36.00,
    discount: 25,
    rating: 4.9,
    reviews: 310,
    image: "/products/cicaplast_baume_b5.jpg",
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Rosto",
  },
  {
    id: 1305,
    name: "Loção Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.90,
    price: 89.90,
    discount: 18,
    rating: 4.9,
    reviews: 215,
    image: "/products/cerave_locao_473ml.jpg",
    brand: "CeraVe",
    category: "Dermocosméticos",
    subcategory: "Corpo",
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 59.90,
    price: 48.59,
    discount: 19,
    rating: 4.8,
    reviews: 180,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosméticos",
    subcategory: "Limpeza Facial",
  },
  {
    id: 3999,
    name: "Kit Lenço Umedecido Huggies Rosto e Corpo Hipoalergênico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.9,
    reviews: 142,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
  }
];

export const hairCareProducts: Product[] = [];

// ===========================================================================
// FRALDAS & MAMÃE E BEBÊ (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const fraldasProducts: Product[] = [
  {
    id: 3999,
    name: "Kit Lenço Umedecido Huggies Rosto e Corpo Hipoalergênico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.8,
    reviews: 623,
    image: "/products/huggies_rosto_corpo.jpg",
    badges: ["+1 nº da sorte", "Leve 4 Pague 3"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    bullets: [
      "Apreciadas por seu perfume suave e agradável e pela umidade equilibrada.",
      "Textura espessa e durável que limpa de maneira eficaz sem causar irritação.",
      "Tampa com abertura fácil e uso versátil para mãos, rosto e corpo.",
      "Embalagem prática e higiênica que complementa a excelente qualidade.",
    ],
    description: "O Kit Lenço Umedecido Huggies Rosto e Corpo foi desenvolvido para proporcionar limpeza delicada e segura da cabeça aos pés. Com fórmula hipoalergênica e textura suave como algodão, limpa sem agredir a pele sensível do bebê e de toda a família.",
    composition: "Aqua, Polysorbate 20, Caprylyl Glycol, Sodium Benzoate, Coco-Betaine, Malic Acid, Parfum, Sodium Citrate, Aloe Barbadensis Leaf Extract, Tocopheryl Acetate.",
    howToUse: "Abra a tampa flip-top, puxe o lacre adesivo e retire uma toalha umedecida. Aplique suavemente sobre a área a ser limpa. Feche bem a embalagem para preservar a umidade.",
    warnings: ["Uso externo.", "Não ingerir.", "Em caso de irritação, suspenda o uso e procure orientação médica.", "Mantenha fora do alcance de crianças."],
    productCode: "109823",
    ean: "7896007548902",
    dosage: "4 pacotes com 48 toalhas cada (192un)",
  },
  {
    id: 1101,
    name: "Fralda Pampers Confort Sec Tamanho P 50 Unidades",
    size: "Tam P (50un)",
    oldPrice: 105.18,
    price: 87.63,
    discount: 17,
    rating: 4.9,
    reviews: 284,
    options: 5,
    image: "/products/pampers_confort_sec_p.webp",
    badges: ["Compre 2 Leve +", "Mais Vendido Bebê"],
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Canais de ar que permitem a circulação livre mantendo o bebê sequinho por até 12 horas.",
      "Gel mágico que absorve e retém a umidade no interior da fralda.",
      "Barreiras antivazamento reforçadas que se adaptam suavemente ao corpo do bebê.",
      "Loção hipoalergênica que previne assaduras e irritações na pele sensível.",
    ],
    description: "A Fralda Pampers Confort Sec possui canais de ar que permitem que o ar circule livremente dentro da fralda, mantendo o bumbum do bebê sequinho a noite toda com proteção antivazamento superior.",
  },
  {
    id: 1250308,
    name: "Fralda Pampers Confort Sec Tamanho M 70 Unidades",
    size: "Tam M (70un)",
    oldPrice: 77.15,
    price: 54.49,
    discount: 14,
    rating: 4.9,
    reviews: 380,
    options: 5,
    image: "/products/pampers_confort_sec_m.webp",
    badges: ["+1 nº da sorte"],
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para bebês de 6 a 10kg com 70 unidades.",
      "Camada ultra-absorvente com canais de gel que não deixam a fralda pesar.",
      "Barreiras antivazamento duplas e ajuste cômodo.",
      "Proteção e conforto garantidos a noite toda.",
    ],
    description: "Fralda Pampers Confort Sec tamanho M para bebês de 6 a 10kg, garantindo noites sequinhas e confortáveis com canais de ar.",
  },
  {
    id: 1250294,
    name: "Fralda Pampers Confort Sec Tamanho G 60 Unidades",
    size: "Tam G (60un)",
    oldPrice: 74.76,
    price: 59.61,
    discount: 16,
    rating: 4.9,
    reviews: 420,
    options: 5,
    image: "/products/pampers_confort_sec_g.webp",
    badges: ["+1 nº da sorte"],
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G indicado para bebês de 9 a 13kg com 60 unidades.",
      "Canais de ar que permitem a circulação de ar dentro da fralda.",
      "Gel Mágico que absorve e retém a umidade mantendo a pele seca.",
      "Até 2 vezes mais sequinha a noite toda.",
    ],
    description: "Fralda Descartável Pampers Confort Sec tamanho G com 60 unidades. Proporciona noites tranquilas e dias confortáveis para o seu bebê.",
  },
  {
    id: 1250309,
    name: "Fralda Pampers Confort Sec Tamanho XG 92 Unidades",
    size: "Tam XG (92un)",
    oldPrice: 157.83,
    price: 134.43,
    discount: 15,
    rating: 5.0,
    reviews: 310,
    options: 5,
    image: "/products/pampers_confort_sec_xg.webp",
    badges: ["+1 nº da sorte"],
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para bebês de 11 a 15kg com 92 unidades no pacote econômico.",
      "Máxima retenção de umidade com canais de gel de alta absorção.",
      "Cintura elástica confortável para bebês ativos.",
      "Proteção dia e noite sem vazamentos.",
    ],
    description: "Fralda Pampers Confort Sec tamanho XG com 92 unidades no pacote econômico com alça. Máxima absorção e conforto para o bebê.",
  },
  {
    id: 1250310,
    name: "Fralda Pampers Confort Sec Tamanho XXG 88 Unidades",
    size: "Tam XXG (88un)",
    oldPrice: 163.68,
    price: 140.28,
    discount: 14,
    rating: 4.9,
    reviews: 215,
    options: 5,
    image: "/products/pampers_confort_sec_xxg.jpg",
    badges: ["+1 nº da sorte"],
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês acima de 14kg com 88 unidades no pacote econômico.",
      "Canais de ar revolucionários que deixam a pele respirar.",
      "Gel Mágico que absorve e retém a umidade mantendo a pele seca por até 12 horas.",
      "Barreiras antivazamento reforçadas e cintura elástica confortável.",
    ],
    description: "A Fralda Pampers Confort Sec tamanho XXG foi desenvolvida para bebês acima de 14kg, oferecendo até 12 horas de absorção avançada e proteção máxima contra vazamentos.",
    howToUse: "Coloque o bebê sobre a fralda aberta, feche as abas adesivas elásticas ajustando ao corpinho.",
    composition: "Polpa de celulose, polímero superabsorvente, polietileno, polipropileno, elásticos e loção dermoprotetora com extrato de camomila.",
    warnings: ["Uso externo.", "Descarte no lixo comum, nunca no vaso sanitário.", "Mantenha fora do alcance de crianças."],
    productCode: "1250310",
    ean: "7500435123457",
  },
  {
    id: 1104,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho P 50 Unidades",
    size: "Tam P (50un)",
    oldPrice: 111.03,
    price: 93.48,
    discount: 16,
    rating: 4.8,
    reviews: 142,
    options: 5,
    image: "/products/pampers_pants_p.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Indicada para bebês de 5 a 8kg com 50 fraldas.",
      "Cintura elástica 360° fácil de vestir e rasgar para retirar.",
      "Canais de gel ultra-absorvente com retenção prolongada.",
    ],
    description: "Fralda-calça Pampers Pants tamanho P fácil de vestir mesmo com o bebê em movimento, com proteção antivazamento de até 12 horas.",
  },
  {
    id: 501,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho M 78 Unidades",
    size: "Tam M (78un)",
    oldPrice: 163.68,
    price: 140.28,
    discount: 14,
    rating: 4.8,
    reviews: 160,
    options: 5,
    image: "/products/pampers_pants_m.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Veste como shortinho e ajusta-se a 360° no corpinho.",
      "Tamanho M indicado para bebês de 6 a 10kg com 78 unidades.",
      "Proteção antivazamento por até 12 horas.",
    ],
    description: "Pampers Pants M proporciona facilidade máxima de troca e ajuste anatômico perfeito 360 graus.",
  },
  {
    id: 2040,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho G 72 Unidades",
    size: "Tam G (72un)",
    oldPrice: 169.53,
    price: 146.13,
    discount: 14,
    rating: 4.9,
    reviews: 410,
    options: 5,
    image: "/products/pampers_pants_g.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Veste como shortinho e ajusta-se automaticamente a 360° ao corpo do bebê.",
      "Tamanho G indicado para 9 a 13kg com 72 unidades.",
      "Canais de gel que mantêm o bebê sequinho por até 12 horas.",
    ],
    description: "Pampers Pants proporciona a máxima facilidade de troca com cintura elástica 360° superconfortável.",
  },
  {
    id: 20404,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XG 64 Unidades",
    size: "Tam XG (64un)",
    oldPrice: 175.38,
    price: 151.98,
    discount: 13,
    rating: 4.9,
    reviews: 290,
    options: 5,
    image: "/products/pampers_pants_xg.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para bebês de 12 a 15kg com 64 unidades.",
      "Cintura elástica 360° macia que não aperta.",
      "Até 12 horas de absorção sequinha e segura.",
    ],
    description: "Pampers Pants tamanho XG combina a facilidade do shortinho com canais absorventes avançados para noites ininterruptas de sono.",
  },
  {
    id: 20405,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XXG 74 Unidades",
    size: "Tam XXG (74un)",
    oldPrice: 181.23,
    price: 157.83,
    discount: 13,
    rating: 4.9,
    reviews: 210,
    options: 5,
    image: "/products/pampers_pants_xxg.jpg",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês acima de 14kg com 74 unidades.",
      "Ajuste anatômico 360° perfeito para bebês grandes e ativos.",
      "Gel ultra-absorvente com barreiras duplas antivazamento.",
    ],
    description: "Fralda-calça Pampers Pants XXG com proteção máxima e cintura flexível que acompanha os passos do bebê com conforto absoluto.",
  },
  {
    id: 20390,
    name: "Fralda Huggies Natural Care Tamanho P 36 Unidades",
    size: "Tam P (36un)",
    oldPrice: 84.90,
    price: 69.90,
    discount: 18,
    rating: 4.8,
    reviews: 180,
    options: 5,
    image: "/products/huggies_natural_care_p.jpg",
    badges: ["0% Fragrância", "Pele Sensível"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Feita com fibras naturais e suaves como algodão.",
      "0% fragrância, parabenos e cloro elementar.",
      "Bolhas suaves de absorção que mantêm a pele do recém-nascido e bebê sequinha.",
    ],
    description: "Huggies Natural Care tamanho P especialmente formulada para a pele delicada dos bebês, oferecendo cuidado puro e natural com máxima suavidade.",
  },
  {
    id: 20391,
    name: "Fralda Huggies Natural Care Tamanho M 78 Unidades",
    size: "Tam M (78un)",
    oldPrice: 139.90,
    price: 119.90,
    discount: 14,
    rating: 4.8,
    reviews: 260,
    options: 5,
    image: "/products/huggies_natural_care_m.jpg",
    badges: ["0% Fragrância", "Pele Sensível"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Feita com fibras naturais e suaves como algodão.",
      "0% de fragrância, parabenos e cloro elementar.",
      "Bolhas suaves de absorção que mantêm o bebê sequinho.",
    ],
    description: "Huggies Natural Care M com fibras naturais e 0% fragrância, testada dermatologicamente para o máximo cuidado com a pele delicada do bebê.",
  },
  {
    id: 20392,
    name: "Fralda Huggies Natural Care Tamanho G 66 Unidades",
    size: "Tam G (66un)",
    oldPrice: 144.90,
    price: 124.90,
    discount: 14,
    rating: 4.8,
    reviews: 310,
    options: 5,
    image: "/products/huggies_natural_care_g.jpg",
    badges: ["0% Fragrância", "Pele Sensível"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G para 9 a 12,5kg com 66 unidades.",
      "Fibras naturais com toque macio e respirabilidade máxima.",
      "Cuidado hipoalergênico superior aprovado por pediatras.",
    ],
    description: "Huggies Natural Care G mantém a pele do bebê protegida e livre de assaduras com absorção inteligente e materiais naturais hipoalergênicos.",
  },
  {
    id: 20393,
    name: "Fralda Huggies Natural Care Tamanho XG 58 Unidades",
    size: "Tam XG (58un)",
    oldPrice: 149.90,
    price: 129.90,
    discount: 13,
    rating: 4.9,
    reviews: 220,
    options: 5,
    image: "/products/huggies_natural_care_xg.jpg",
    badges: ["0% Fragrância", "Pele Sensível"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG para 12 a 15kg com 58 unidades.",
      "Dermatologicamente testada para peles extremamente sensíveis.",
      "Absorção de até 12 horas sem vazamento.",
    ],
    description: "Huggies Natural Care XG entrega a mais alta pureza e proteção suave para o bebê em fase ativa de desenvolvimento.",
  },
  {
    id: 20394,
    name: "Fralda Huggies Natural Care Tamanho XXG 54 Unidades",
    size: "Tam XXG (54un)",
    oldPrice: 154.90,
    price: 134.90,
    discount: 13,
    rating: 4.8,
    reviews: 175,
    options: 5,
    image: "/products/huggies_natural_care_xxg.jpg",
    badges: ["0% Fragrância", "Pele Sensível"],
    brand: "Huggies",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG para bebês acima de 14kg com 54 unidades.",
      "Barreiras altas e suaves que evitam marcas na pele.",
      "Respirabilidade prolongada dia e noite.",
    ],
    description: "Huggies Natural Care XXG proporciona máxima proteção para bebês grandinhos, preservando o equilíbrio natural da pele com suavidade extrema.",
  },
  {
    id: 1096086,
    name: "Fralda Huggies Máxima Proteção Tamanho M 104 Unidades",
    size: "Tam M (104un)",
    oldPrice: 134.90,
    price: 114.90,
    discount: 15,
    rating: 4.8,
    reviews: 210,
    options: 5,
    image: "/products/huggies_pants_m.jpg",
    badges: ["Fácil de Vestir", "Ajuste 360°"],
    brand: "Huggies",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M para 5,5 a 9,5kg com 104 unidades.",
      "Cintura elástica 360° que não marca a barriguinha.",
      "Canais acolchoados para distribuição uniforme do xixi.",
    ],
    description: "Huggies Roupinha Proteção Acolchoada M proporciona total liberdade para o bebê engatinhar e brincar sem risco de vazamento.",
  },
  {
    id: 1096087,
    name: "Fralda Huggies Máxima Proteção Tamanho G 136 Unidades",
    size: "Tam G (136un)",
    oldPrice: 139.90,
    price: 119.90,
    discount: 14,
    rating: 4.9,
    reviews: 295,
    options: 5,
    image: "/products/huggies_pants_g.jpg",
    badges: ["Fácil de Vestir", "Ajuste 360°"],
    brand: "Huggies",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G para 9 a 12,5kg com 136 fraldas no pacote econômico.",
      "Camada protetora ultra-acolchoada de toque suave.",
      "Até 12 horas de proteção contra vazamentos.",
    ],
    description: "Huggies Calça Roupinha G alia conveniência e conforto supremo, com ajuste flexível que se adapta perfeitamente aos movimentos do corpinho.",
  },
  {
    id: 1096088,
    name: "Fralda Huggies Máxima Proteção Tamanho XG 82 Unidades",
    size: "Tam XG (82un)",
    oldPrice: 149.90,
    price: 129.90,
    discount: 13,
    rating: 4.8,
    reviews: 160,
    options: 5,
    image: "/products/huggies_pants_xg.jpg",
    badges: ["Fácil de Vestir", "Ajuste 360°"],
    brand: "Huggies",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG para 12 a 15kg com 82 fraldas no pacote econômico.",
      "Cintura elástica 360° macia que veste como roupinha.",
      "Proteção acolchoada com barreiras antivazamento duplas.",
    ],
    description: "Fralda formato calça que veste como roupinha e possui cintura elástica 360 graus, facilitando a troca e garantindo total liberdade de movimento para o bebê ativo.",
  },
  {
    id: 1096089,
    name: "Fralda Huggies Máxima Proteção Tamanho XXG 80 Unidades",
    size: "Tam XXG (80un)",
    oldPrice: 154.90,
    price: 134.90,
    discount: 13,
    rating: 4.8,
    reviews: 185,
    options: 5,
    image: "/products/huggies_pants_xxg.jpg",
    badges: ["Fácil de Vestir", "Ajuste 360°"],
    brand: "Huggies",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG para bebês de 14 a 20kg com 80 unidades no pacote econômico.",
      "Laterais rasga-fácil e fita de fechamento para descarte limpo.",
      "Núcleo acolchoado superabsorvente para noites tranquilas.",
    ],
    description: "Huggies Proteção Acolchoada formato roupinha tamanho XXG, perfeita para crianças em fase de desfralde com alta segurança antivazamento.",
  },
  {
    id: 21108,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper M 68 Unidades",
    size: "68un (M)",
    oldPrice: 79.90,
    price: 64.90,
    discount: 19,
    rating: 4.7,
    reviews: 110,
    options: 5,
    image: "/products/babysec_ultrasec_m.jpg",
    badges: ["Custo-Benefício", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 5 a 9,5kg com 68 unidades no hiper pacote.",
      "Tecnologia de rápida absorção e cobertura suave.",
      "Fitas adesivas flexíveis que abrem e fecham sem rasgar.",
    ],
    description: "Babysec Ultrasec M garante noites sequinhas e dias com muito conforto e economia para o bolso da família.",
  },
  {
    id: 1109,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper G 60 Unidades",
    size: "60un (G)",
    oldPrice: 84.90,
    price: 69.90,
    discount: 18,
    rating: 4.7,
    reviews: 94,
    options: 5,
    image: "/products/babysec_ultrasec_g.jpg",
    badges: ["Custo-Benefício", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Até 12 horas de proteção contra vazamentos.",
      "Fitas elásticas reajustáveis que abrem e fecham quantas vezes precisar.",
      "Estampas divertidas e exclusivas da Galinha Pintadinha.",
    ],
    description: "Babysec Ultrasec com tecnologia de rápida absorção e fitas reajustáveis, mantendo o bebê sequinho por até 12 horas com excelente custo-benefício.",
  },
  {
    id: 21112,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XG 56 Unidades",
    size: "56un (XG)",
    oldPrice: 89.90,
    price: 74.90,
    discount: 17,
    rating: 4.7,
    reviews: 88,
    options: 5,
    image: "/products/babysec_ultrasec_xg.jpg",
    badges: ["Custo-Benefício", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 11 a 14kg com 56 unidades.",
      "Cintura anatômica com toque suave e barreiras reforçadas.",
      "Absorção eficiente que aguenta a noite toda sem vazar.",
    ],
    description: "Babysec Ultrasec XG com design divertido e proteção prolongada para bebês ativos e alegres.",
  },
  {
    id: 21113,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XXG 48 Unidades",
    size: "48un (XXG)",
    oldPrice: 94.90,
    price: 79.90,
    discount: 16,
    rating: 4.8,
    reviews: 74,
    options: 5,
    image: "/products/babysec_ultrasec_xxg.jpg",
    badges: ["Custo-Benefício", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês acima de 13kg com 48 unidades.",
      "Máximo rendimento e proteção duradoura.",
      "Materiais hipoalergênicos e cobertura respirável.",
    ],
    description: "Fralda Babysec Ultrasec XXG desenvolvida para garantir noites tranquilas de sono com excelente absorção e ótimo rendimento.",
  },
  {
    id: 21115,
    name: "Fralda Pom Pom Protek Proteção de Mãe M 28 Unidades",
    size: "28un (M)",
    oldPrice: 54.90,
    price: 44.90,
    discount: 18,
    rating: 4.6,
    reviews: 90,
    options: 5,
    image: "/products/pompom_protek_m.jpg",
    brand: "Pom Pom",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 4 a 9kg com 28 unidades.",
      "Camada de proteção de mãe com até 12 horas de absorção.",
      "Toque suave como algodão e barreiras reforçadas.",
    ],
    description: "Fralda Pom Pom Protek tamanho M oferece carinho e segurança para o seu bebê durante todo o dia e noite.",
  },
  {
    id: 1110,
    name: "Fralda Pom Pom Protek Proteção de Mãe G 24 Unidades",
    size: "24un (G)",
    oldPrice: 59.90,
    price: 49.90,
    discount: 17,
    rating: 4.6,
    reviews: 72,
    options: 5,
    image: "/products/pompom_protek_g.jpg",
    brand: "Pom Pom",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Canal superabsorvente com distribuição rápida do líquido.",
      "Orelhas elásticas mais confortáveis.",
      "Loção hidratante enriquecida com extrato de camomila.",
    ],
    description: "Pom Pom Protek Proteção de Mãe com camada superabsorvente, orelhas elásticas e loção hidratante com extrato de camomila para cuidar da pele do seu bebê.",
  },
  {
    id: 21116,
    name: "Fralda Pom Pom Protek Proteção de Mãe XG 20 Unidades",
    size: "20un (XG)",
    oldPrice: 64.90,
    price: 54.90,
    discount: 15,
    rating: 4.7,
    reviews: 80,
    options: 5,
    image: "/products/pompom_protek_xg.jpg",
    brand: "Pom Pom",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 12 a 15kg com 20 unidades.",
      "Canais de ar que auxiliam na respiração da pele infantil.",
      "Fitas laterais ajustáveis de fixação segura.",
    ],
    description: "Pom Pom Protek XG garante bem-estar e proteção contínua com fórmula suave e absorção prolongada.",
  },
  {
    id: 21117,
    name: "Fralda Pom Pom Protek Proteção de Mãe XXG 18 Unidades",
    size: "18un (XXG)",
    oldPrice: 69.90,
    price: 59.90,
    discount: 14,
    rating: 4.6,
    reviews: 62,
    options: 5,
    image: "/products/pompom_protek_xxg.jpg",
    brand: "Pom Pom",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês de 14 a 18kg com 18 unidades.",
      "Proteção de até 12 horas sem vazamento.",
      "Dermatologicamente testada para evitar assaduras.",
    ],
    description: "Pom Pom Protek XXG cuida com carinho dos bebês grandinhos, oferecendo máxima absorção e toque suave.",
  },
  {
    id: 21118,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite P 22 Unidades",
    size: "22un (P)",
    oldPrice: 94.90,
    price: 48.59,
    discount: 16,
    rating: 4.9,
    reviews: 120,
    options: 5,
    image: "/products/mamypoko_calca_p.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho P indicado para 3 a 9kg com 22 unidades.",
      "Cintura superelástica e suave que não aperta.",
      "Absorção japonesa instantânea que não empelota.",
    ],
    description: "Fralda-calça MamyPoko P com exclusiva tecnologia japonesa, facilitando a troca e mantendo o corpinho sequinho e livre de assaduras.",
  },
  {
    id: 21119,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite M 18 Unidades",
    size: "18un (M)",
    oldPrice: 89.90,
    price: 64.72,
    discount: 14,
    rating: 4.9,
    reviews: 140,
    options: 5,
    image: "/products/mamypoko_calca_m.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 7 a 10kg com 18 unidades.",
      "Caminhos de ar respiráveis que liberam calor e umidade.",
      "Veste rápido mesmo com o bebê em movimento.",
    ],
    description: "MamyPoko Fralda-Calça Dia e Noite M garante conforto sem igual e absorção de até 12 horas com toque ultrassuave.",
  },
  {
    id: 1111,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite G 30 Unidades",
    size: "30un (G)",
    oldPrice: 114.90,
    price: 94.90,
    discount: 17,
    rating: 4.9,
    reviews: 156,
    options: 5,
    image: "/products/mamypoko_calca_g.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tecnologia japonesa de absorção profunda que não pesa nem empelota.",
      "Cintura macia que estica até duas vezes sem apertar a barriguinha.",
      "Caminhos de ar respiráveis que liberam calor e umidade.",
    ],
    description: "Fralda-calça com tecnologia japonesa exclusiva, canais de ar respiráveis e absorção rápida que não pesa nem empelota, proporcionando conforto inigualável.",
  },
  {
    id: 21120,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite XG 26 Unidades",
    size: "26un (XG)",
    oldPrice: 119.90,
    price: 99.90,
    discount: 17,
    rating: 4.9,
    reviews: 135,
    options: 5,
    image: "/products/mamypoko_calca_xg.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 12 a 17kg com 26 unidades.",
      "Dupla proteção contra vazamentos nas perninhas.",
      "Fita de descarte fácil e prática para o dia a dia.",
    ],
    description: "MamyPoko Fralda-Calça XG para bebês cheios de energia, garantindo proteção dia e noite com a mais avançada tecnologia japonesa.",
  },
  {
    id: 21121,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite XXG 22 Unidades",
    size: "22un (XXG)",
    oldPrice: 124.90,
    price: 104.90,
    discount: 16,
    rating: 4.9,
    reviews: 110,
    options: 5,
    image: "/products/mamypoko_calca_xxg.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês de 15 a 26kg com 22 unidades.",
      "Cintura super macia com ajuste amplo e seguro.",
      "Ultra-absorvente, mantendo a pele seca por até 12 horas.",
    ],
    description: "Fralda-calça MamyPoko XXG projetada para crianças maiores, unindo alta capacidade de retenção ao conforto insuperável do modelo veste-fácil.",
  },
  {
    id: 1112,
    name: "Composto Lácteo Ninho Fases 1+ Nestlé 800g",
    size: "800g",
    oldPrice: 51.90,
    price: 44.90,
    discount: 13,
    rating: 4.9,
    reviews: 340,
    image: "/products/ninho_fases_1.jpg",
    badges: ["Rico em Fibras e Vitaminas"],
    brand: "Ninho",
    category: "Mamãe & Bebê",
    subcategory: "Alimentação Infantil",
    bullets: [
      "Formulado especialmente para crianças a partir de 1 ano.",
      "Rico em imunonutrientes essenciais: Zinco, Selênio e Vitaminas A, C e D.",
      "Contém prebióticos que auxiliam na saúde intestinal.",
    ],
    description: "Ninho Fases 1+ formulado especialmente para crianças na fase pré-escolar com imunonutrientes essenciais (Zinco, Vitaminas A, C e D) e prebióticos.",
  }
];

// ===========================================================================
// REMÉDIOS & MEDICAMENTOS (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const remediosProducts: Product[] = [
  {
    id: 1201,
    name: "Dorflex Analgésico e Relaxante Muscular 36 Comprimidos",
    size: "36 Comprimidos",
    oldPrice: 29.90,
    price: 25.99,
    discount: 13,
    image: "/products/dorflex_36.jpg",
    badges: ["Mais Vendido Farmácia"],
    brand: "Dorflex",
    category: "Medicamentos",
    subcategory: "Dores Musculares",
    bullets: [
      "Ação analgésica associada ao relaxamento muscular.",
      "Alívio rápido de dores de cabeça tensionais e contraturas musculares.",
      "Fórmula comprovada com Dipirona, Orfenadrina e Cafeína.",
    ],
    description: "Dorflex é indicado no alívio da dor associada a contraturas musculares decorrentes de processos traumáticos ou inflamatórios e em cefaleias tensionais.",
    composition: "Dipirona monoidratada 300mg, citrato de orfenadrina 35mg, cafeína anidra 50mg.",
    dosage: "Tomar 1 a 2 comprimidos, 3 a 4 vezes ao dia. Não ultrapassar o limite de 8 comprimidos ao dia.",
    warnings: [
      "DORFLEX É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM MÉDICO OU UM FARMACÊUTICO. LEIA A BULA.",
      "Contraindicado em pacientes com glaucoma, obstrução pilórica ou duodenal, acalasia do esôfago e hipertrofia prostática.",
    ],
  },
  {
    id: 1202,
    name: "Neosaldina Analgésico para Enxaqueca e Dor de Cabeça 20 Drágeas",
    size: "20 Drágeas",
    oldPrice: 31.90,
    price: 26.50,
    discount: 17,
    image: "/products/neosaldina_20drageas.webp",
    badges: ["Ação em 15 minutos"],
    brand: "Neosaldina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    bullets: [
      "Começa a agir a partir de 15 minutos.",
      "Combinação analgésica e antiespasmódica eficaz.",
      "Indicada para dores de cabeça e crises de enxaqueca.",
    ],
    description: "Neosaldina é um medicamento com atividade analgésica e antiespasmódica indicado para o tratamento de diversos tipos de dor de cabeça e cólicas.",
    composition: "Dipirona 300mg, mucato de isometepteno 30mg, cafeína 30mg por drágea.",
    dosage: "Tomar 1 a 2 drágeas em dose única a cada 6 horas se necessário. Não ultrapassar 8 drágeas diárias.",
    warnings: [
      "NEOSALDINA É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O MÉDICO OU O FARMACÊUTICO. LEIA A BULA.",
    ],
  },
  {
    id: 1203,
    name: "Torsilax Relaxante Muscular e Anti-inflamatório 30 Comprimidos",
    size: "30 Comprimidos",
    oldPrice: 28.90,
    price: 24.90,
    discount: 14,
    image: "/products/torsilax_30comp_real.jpg",
    brand: "Torsilax",
    category: "Medicamentos",
    subcategory: "Dores Musculares",
    bullets: [
      "Ação analgésica, anti-inflamatória e relaxante muscular.",
      "Indicado para lombalgias, torcicolos, artrite e contraturas dolorosas.",
      "Combinação de Cafeína, Carisoprodol, Diclofenaco Sódico e Paracetamol.",
    ],
    description: "Torsilax é indicado para o tratamento do reumatismo, lombalgias, torcicolos, crises agudas de gota e estados dolorosos musculares intensos.",
    composition: "Cafeína 30mg, carisoprodol 125mg, diclofenaco sódico 50mg, paracetamol 300mg.",
    warnings: [
      "TORSILAX É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM MÉDICO OU UM FARMACÊUTICO. LEIA A BULA.",
    ],
  },
  {
    id: 1204,
    name: "Novalgina Dipirona Monoidratada 1g 20 Comprimidos",
    size: "20 Comprimidos",
    oldPrice: 39.90,
    price: 34.90,
    discount: 13,
    image: "/products/novalgina_1g_20comp.webp",
    badges: ["Alta Potência", "Ação Rápida"],
    brand: "Novalgina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    bullets: [
      "Dose máxima de 1g de dipirona em comprimido único.",
      "Ação antitérmica e analgésica potente para febre alta e dores intensas.",
      "Marca de referência mundial em alívio da dor.",
    ],
    description: "Novalgina 1g é um analgésico e antitérmico à base de dipirona monoidratada com ação rápida e potente contra febre e dores moderadas a intensas.",
    composition: "Dipirona monoidratada 1000mg por comprimido.",
    dosage: "Adultos e adolescentes acima de 15 anos: 1/2 a 1 comprimido até 4 vezes ao dia.",
    warnings: [
      "NOVALGINA É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O MÉDICO OU FARMACÊUTICO. LEIA A BULA.",
    ],
  },
  {
    id: 1200,
    name: "Dipirona Monoidratada 500mg 10 comprimidos Prati Donaduzzi Genérico",
    activeIngredient: "Dipirona Sodica",
    size: "10 Comprimidos",
    oldPrice: 6.37,
    price: 3.49,
    discount: 45,
    options: 5,
    image: "/products/dipirona_prati_500mg.png",
    badges: ["Genérico"],
    brand: "Prati Donaduzzi",
    category: "Medicamentos",
    subcategory: "Genéricos",
    bullets: [
      "Medicamento genérico Prati Donaduzzi com eficácia comprovada.",
      "Ação analgésica e antitérmica para alívio rápido de dor e febre.",
      "Uso oral adulto e pediátrico acima de 3 meses.",
    ],
    description: "Dipirona Monoidratada 500mg com 10 comprimidos é um medicamento genérico indicado como analgésico e antitérmico para o alívio de dor e febre.",
    composition: "Dipirona Monoidratada 500mg.",
    warnings: ["DIPIRONA É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."],
  },
  {
    id: 1208,
    name: "Buscopan Composto 20 Comprimidos Revestidos",
    size: "20 Comprimidos Revestidos",
    oldPrice: 28.50,
    price: 23.90,
    discount: 16,
    image: "/products/buscopan_composto_20comp.webp",
    badges: ["Alívio de Cólicas"],
    brand: "Buscopan",
    category: "Medicamentos",
    subcategory: "Dores Abdominais",
    bullets: [
      "Combinação de Butilbrometo de Escopolamina com Dipirona.",
      "Alívio rápido e eficaz de cólicas menstruais, estomacais e intestinais.",
      "Ação antiespasmódica direta no foco da dor.",
    ],
    description: "Buscopan Composto é a combinação do consagrado antiespasmódico Butilbrometo de Escopolamina com o analgésico Dipirona, ideal para dores e cólicas na barriga.",
    composition: "Butilbrometo de escopolamina 10mg + Dipirona 250mg.",
    warnings: ["BUSCOPAN COMPOSTO É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE SEU MÉDICO."],
  },
  {
    id: 1209,
    name: "Luftal Gel Caps 125mg para Gases 10 Cápsulas Gelatinosas",
    size: "10 Cápsulas",
    oldPrice: 25.90,
    price: 21.90,
    discount: 15,
    image: "/products/luftal_gelcaps.jpg",
    badges: ["Age em 10 min", "Gel Caps"],
    brand: "Luftal",
    category: "Medicamentos",
    subcategory: "Digestão",
    bullets: [
      "Cápsulas gelatinosas moles fáceis de engolir.",
      "Ação rápida a partir de 10 minutos contra gases e estufamento.",
      "Rompe as bolhas gastrointestinais facilitando sua eliminação natural.",
    ],
    description: "Luftal Gel Caps age diretamente no estômago e intestino rompendo as bolhas de gás, aliviando o estufamento, desconforto abdominal e cólicas por flatulência.",
    composition: "Simeticona 125mg.",
    warnings: ["LUFTAL É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."],
  },
  {
    id: 1211,
    name: "Omeprazol 20mg Genérico Teuto 28 Cápsulas",
    size: "28 Cápsulas",
    oldPrice: 22.90,
    price: 14.90,
    discount: 35,
    image: "/products/omeprazol_medley_20mg.jpg",
    badges: ["Tratamento do Refluxo"],
    brand: "Teuto Genérico",
    category: "Medicamentos",
    subcategory: "Genéricos",
    bullets: [
      "Inibidor da bomba de prótons para redução da acidez gástrica.",
      "Tratamento contínuo de gastrite, refluxo e queimação estomacal.",
      "Embalagem com 28 cápsulas para ciclo completo de 4 semanas.",
    ],
    description: "Inibidor da bomba de prótons indicado para gastrite, refluxo gastroesofágico, azia e queimação estomacal.",
    composition: "Omeprazol 20mg em microgrânulos gastrorresistentes.",
    warnings: ["OMEPRAZOL É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O MÉDICO."],
  },
  {
    id: 1212,
    name: "Enterogermina Probiótico 2 Bilhões 10 Flaconetes 5ml",
    size: "10 Flaconetes de 5ml",
    oldPrice: 58.90,
    price: 49.90,
    discount: 15,
    image: "/products/enterogermina_10flac.jpg",
    badges: ["Flora Intestinal", "Pronto para Beber"],
    brand: "Enterogermina",
    category: "Medicamentos",
    subcategory: "Digestão",
    bullets: [
      "2 bilhões de esporos de Bacillus clausii por flaconete.",
      "Resiste à acidez gástrica e chega vivo ao intestino.",
      "Restaura e equilibra a flora intestinal após episódios de diarreia ou uso de antibióticos.",
    ],
    description: "Probiótico à base de esporos de Bacillus clausii indicado como adjuvante no tratamento de diarreia e desequilíbrios da flora bacteriana intestinal.",
    warnings: ["ENTEROGERMINA É UM MEDICAMENTO. LEIA A BULA."],
  },
  {
    id: 1213,
    name: "Colírio Hyabak 0,15% Hidratante Ocular 10ml",
    size: "10ml",
    oldPrice: 69.90,
    price: 59.90,
    discount: 14,
    image: "/products/hyabak_10ml.jpg",
    badges: ["Sem Conservantes", "Ácido Hialurônico"],
    brand: "Hyabak",
    category: "Medicamentos",
    subcategory: "Oftalmológicos",
    bullets: [
      "Hialuronato de sódio 0,15% para hidratação prolongada da superfície ocular.",
      "Frasco multidose com tecnologia Abak sem conservantes.",
      "Compatível com todos os tipos de lentes de contato.",
    ],
    description: "Solução oftálmica lubrificante e hidratante com hialuronato de sódio a 0,15%, sem conservantes, ideal para olhos secos e usuários de lentes de contato.",
    warnings: ["HYABAK É UM PRODUTO PARA SAÚDE. CONSULTE SEU OFTALMOLOGISTA."],
  },
  {
    id: 1215,
    name: "Sensor FreeStyle Libre 2 Plus Monitor Contínuo de Glicose",
    size: "1 Sensor",
    oldPrice: 359.00,
    price: 319.90,
    discount: 11,
    image: "/products/freestyle_libre_2.jpg",
    badges: ["Bluetooth Contínuo", "Sem Picadas"],
    brand: "Abbott FreeStyle",
    category: "Medicamentos",
    subcategory: "Diabetes & Monitoramento",
    bullets: [
      "Monitoramento contínuo de glicose com leituras enviadas a cada minuto via Bluetooth.",
      "Duração de até 15 dias de uso contínuo.",
      "Alarmes opcionais personalizáveis para glicose alta ou baixa.",
    ],
    description: "Sensor de monitoramento de glicose contínuo que envia leituras a cada minuto diretamente para o smartphone sem necessidade de picada de dedo.",
  }
];

// ===========================================================================
// DERMOCOSMÉTICOS & BELEZA (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const dermocosmeticosProducts: Product[] = [
  {
    id: 1303,
    name: "Bálsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 40,
    price: 36,
    discount: 13,
    rating: 4.9,
    reviews: 410,
    image: "/products/cicaplast_baume_b5.jpg",
    badges: ["Multirreparador", "Pantenol B5+"],
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Hidratantes Corporais",
    bullets: [
      "Novo complexo pré-biótico Tribioma com Pantenol 5% e Madecassoside.",
      "Acalma e repara a barreira cutânea desde a primeira aplicação.",
      "Indicado para rosto, corpo, lábios, tatuagens e pós-procedimentos.",
    ],
    description: "Bálsamo calmante e reparador para pele ressecada, tatuada, pós-procedimentos e áreas ásperas do corpo e rosto.",
  },
  {
    id: 1305,
    name: "Loção Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.90,
    price: 89.90,
    discount: 18,
    rating: 4.9,
    reviews: 320,
    image: "/products/cerave_locao_473ml.jpg",
    badges: ["3 Ceramidas", "Tecnologia MVE"],
    brand: "CeraVe",
    category: "Dermocosméticos",
    subcategory: "Hidratantes Corporais",
    bullets: [
      "3 ceramidas essenciais idênticas às da pele + Ácido Hialurônico.",
      "Tecnologia patenteada MVE com liberação contínua de hidratação por 24 horas.",
      "Textura leve, sem perfume e de rápida absorção.",
    ],
    description: "Hidrata e restaura a barreira protetora da pele de forma contínua com liberação prolongada de ceramidas e ácido hialurônico.",
  },
  {
    id: 1306,
    name: "Creme Multirrestaurador Bepantol Derma 20g",
    size: "20g",
    oldPrice: 39.90,
    price: 34.90,
    discount: 13,
    rating: 4.9,
    reviews: 198,
    image: "/products/bepantol_derma_20g.webp",
    badges: ["Dexpantenol Pró-Vit B5"],
    brand: "Bepantol",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    bullets: [
      "Alta concentração de Pró-Vitamina B5 (Dexpantenol).",
      "Restauração profunda de áreas ressecadas como cotovelos, joelhos e calcanhares.",
      "Acalma a pele sensibilizada e hidrata cutículas e lábios.",
    ],
    description: "Fórmula concentrada com pró-vitamina B5 que acelera a renovação celular e recupera a hidratação labial, cotovelos e áreas ressecadas.",
  },
  {
    id: 1307,
    name: "Sérum Facial Antirrugas Skinceuticals P-tiox 30ml",
    size: "30ml",
    oldPrice: 525.50,
    price: 469.90,
    discount: 11,
    rating: 4.9,
    reviews: 86,
    image: "/products/skinceuticals_ptiox.jpg",
    badges: ["Inovação Peptídica", "Efeito Botox-like"],
    brand: "Skinceuticals",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    bullets: [
      "Complexo de peptídeos avançados que modula as contrações musculares faciais.",
      "Suaviza 9 tipos de rugas de expressão, inclusive pés de galinha e linhas da testa.",
      "Melhora visivelmente a textura e o viço da pele em 1 semana.",
    ],
    description: "Sérum peptídico multi-alvo modulador que reduz visivelmente linhas de expressão, melhora a textura e a luminosidade da pele.",
  },
  {
    id: 1308,
    name: "Sérum Clareador Facial Eucerin Anti-Pigment Dual Sérum 30ml",
    size: "30ml",
    oldPrice: 249.90,
    price: 219.90,
    discount: 12,
    rating: 4.8,
    reviews: 134,
    image: "/products/eucerin_dual_anti_pigment.jpg",
    badges: ["Thiamidol Patenteado"],
    brand: "Eucerin",
    category: "Dermocosméticos",
    subcategory: "Séruns e Tratamento",
    bullets: [
      "Ativo patenteado Thiamidol que atua na raiz da hiperpigmentação.",
      "Reduz manchas escuras em até 75% com uso contínuo.",
      "Ácido Hialurônico concentrado para hidratação intensiva.",
    ],
    description: "Combina o ativo patenteado Thiamidol com ácido hialurônico para clarear e prevenir manchas escuras enquanto hidrata profundamente.",
  },];

// ===========================================================================
// VITAMINAS & SUPLEMENTOS (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const vitaminasSuplementosProducts: Product[] = [
  {
    id: 1403,
    name: "Multivitamínico Centrum de A a Zinco 60 Comprimidos",
    size: "60 Comprimidos",
    oldPrice: 94.90,
    price: 79.90,
    discount: 16,
    rating: 4.8,
    reviews: 280,
    image: "/products/centrum_de_a_a_zinco_60comp.jpg",
    badges: ["Energia & Imunidade"],
    brand: "Centrum",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
    bullets: [
      "Complexo de vitaminas e minerais essenciais de A a Zinco.",
      "Apoia a imunidade, energia diária e ação antioxidante celular.",
      "Não contém glúten e tem zero calorias.",
    ],
    description: "Suplemento vitamínico e mineral completo com nutrientes essenciais que auxiliam no metabolismo energético e funcionamento do sistema imune.",
  },
  {
    id: 1405,
    name: "Di-Magnésio Malato 500mg bwell 60 Cápsulas",
    size: "60 Cápsulas",
    oldPrice: 62.90,
    price: 49.90,
    discount: 21,
    rating: 4.8,
    reviews: 145,
    image: "/products/dimagnesio_malato_bwell.webp",
    badges: ["Exclusivo Droga Raia"],
    brand: "bwell",
    category: "Vida Saudável",
    subcategory: "Vitaminas & Minerais",
    bullets: [
      "Magnésio ligado a moléculas de ácido málico para máxima biodisponibilidade.",
      "Auxilia na função muscular, prevenção de câimbras e energia celular.",
      "Marca exclusiva de saúde e bem-estar da Droga Raia.",
    ],
    description: "Magnésio de alta absorção e biodisponibilidade que auxilia no funcionamento muscular, neuromuscular e no metabolismo energético.",
  },];

// ===========================================================================
// HIGIENE, BUCAL & CABELOS (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const higieneBucalPersonalProducts: Product[] = [
  {
    id: 1501,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml",
    size: "500ml",
    oldPrice: 27.90,
    price: 22.90,
    discount: 18,
    rating: 4.9,
    reviews: 320,
    image: "/products/listerine_cool_mint_500ml.jpg",
    badges: ["Mata 99% dos Germes"],
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    bullets: [
      "Elimina até 99,9% dos germes que causam placa, gengivite e mau hálito.",
      "Até 24 horas de proteção com uso diário contínuo.",
      "Sabor menta refrescante duradouro.",
    ],
    description: "Elimina até 99,9% dos germes que causam mau hálito, placa bacteriana e gengivite, garantindo proteção por até 24 horas.",
  },
  {
    id: 1502,
    name: "Desodorante Antitranspirante Rexona Men Sem Perfume Roll-on 50ml",
    size: "50ml",
    oldPrice: 16.90,
    price: 13.90,
    discount: 18,
    rating: 4.8,
    reviews: 175,
    image: "/products/rexona_men_sem_perfume_rollon.jpg",
    badges: ["72h Proteção"],
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    bullets: [
      "Proteção antitranspirante por até 72 horas ativada pelo movimento.",
      "0% álcool etílico e 0% fragrância para evitar alergias e odores.",
      "Dermatologicamente testado para peles sensíveis.",
    ],
    description: "Proteção ativada pelo movimento sem fragrância e sem álcool etílico, não irrita a pele e previne odores por 72 horas.",
  },];

// ---------------------------------------------------------------------------
// Mapa de categorias relacionadas: quando o produto pertence à chave, os
// produtos das categorias/subcategorias do array value também são relevantes.
// ---------------------------------------------------------------------------
const RELATED_SUBCATEGORIES: Record<string, string[]> = {
  // Higiene bucal
  'higiene bucal': ['higiene bucal'],
  // Creme dental → escova, fio dental, enxaguante, etc.
  'pasta': ['higiene bucal'],
  'creme dental': ['higiene bucal'],
  'escova': ['higiene bucal'],
  'fio dental': ['higiene bucal'],
  'flosser': ['higiene bucal'],
  'enxaguante': ['higiene bucal'],
  'mouthwash': ['higiene bucal'],
  // Fraldas & Higiene do Bebê
  'fraldas': ['fraldas', 'higiene do bebê', 'compostos lácteos', 'lenços umedecidos'],
  'higiene do bebê': ['higiene do bebê', 'fraldas'],
  // Dermocosméticos / Pele
  'rosto': ['rosto', 'séruns e tratamento', 'tratamento de acne', 'proteção solar', 'hidratantes corporais', 'limpeza facial'],
  'tratamento de acne': ['tratamento de acne', 'rosto', 'séruns e tratamento'],
  'séruns e tratamento': ['séruns e tratamento', 'rosto', 'tratamento de acne', 'hidratantes corporais'],
  'hidratantes corporais': ['hidratantes corporais', 'rosto', 'séruns e tratamento'],
  'proteção solar': ['proteção solar', 'rosto', 'séruns e tratamento'],
  'limpeza facial': ['limpeza facial', 'rosto', 'séruns e tratamento', 'tratamento de acne'],
  // Cabelo / Cabelos
  'cabelos': ['shampoo', 'condicionador', 'pentes e escovas', 'máscara capilar', 'finalizadores para cabelo', 'tratamento capilar', 'cabelo e unhas'],
  'cabelo': ['shampoo', 'condicionador', 'pentes e escovas', 'máscara capilar', 'finalizadores para cabelo', 'tratamento capilar', 'cabelo e unhas'],
  'shampoo': ['shampoo', 'condicionador', 'pentes e escovas', 'máscara capilar', 'finalizadores para cabelo', 'tratamento capilar'],
  'condicionador': ['condicionador', 'shampoo', 'máscara capilar', 'pentes e escovas', 'finalizadores para cabelo'],
  'pentes e escovas': ['pentes e escovas', 'shampoo', 'condicionador', 'máscara capilar', 'finalizadores para cabelo'],
  'pente': ['pentes e escovas', 'shampoo', 'condicionador', 'máscara capilar', 'finalizadores para cabelo'],
  'máscara capilar': ['máscara capilar', 'shampoo', 'condicionador', 'pentes e escovas', 'finalizadores para cabelo'],
  'finalizadores para cabelo': ['finalizadores para cabelo', 'cabelo e unhas', 'shampoo', 'condicionador', 'pentes e escovas', 'máscara capilar'],
  'tratamento capilar': ['tratamento capilar', 'shampoo', 'condicionador', 'máscara capilar', 'finalizadores para cabelo'],
  'cabelo e unhas': ['cabelo e unhas', 'finalizadores para cabelo', 'shampoo'],
  // Desodorantes
  'desodorantes': ['desodorantes'],
  // Vitaminas / Suplementos
  'vitaminas': ['vitaminas', 'suplementos', 'probióticos', 'colágeno', 'vitaminas & minerais', 'complementos alimentares', 'nutrição especializada'],
  'suplementos': ['suplementos', 'vitaminas', 'probióticos', 'colágeno', 'performance & fitness'],
  'colágeno': ['colágeno', 'vitaminas', 'suplementos'],
  'probióticos': ['probióticos', 'vitaminas', 'suplementos', 'digestão'],
  'performance & fitness': ['performance & fitness', 'suplementos', 'vitaminas & minerais'],
  'vitaminas & minerais': ['vitaminas & minerais', 'vitaminas', 'suplementos'],
  // Dor & Febre
  'dor e febre': ['dor e febre', 'dores musculares', 'dores abdominais', 'genéricos'],
  'dores musculares': ['dores musculares', 'dor e febre', 'genéricos'],
  'dores abdominais': ['dores abdominais', 'dor e febre', 'genéricos'],
  'genéricos': ['genéricos', 'dor e febre'],
  // Digestão
  'digestão': ['digestão', 'probióticos'],
  // Cuidados íntimos
  'cuidados íntimos': ['cuidados íntimos', 'cuidados para a mamãe'],
  'cuidados para a mamãe': ['cuidados para a mamãe', 'cuidados íntimos', 'fraldas'],
};

/**
 * Extracts simple keyword tokens from a product name for loose matching.
 */
function extractNameTokens(name: string): string[] {
  return name
    .toLowerCase()
    .replace(/[^a-záàâãéèêíïóôõöúüçñ\s]/gi, ' ')
    .split(/\s+/)
    .filter(t => t.length > 3);
}

/**
 * Returns up to `limit` products from `candidates` that are most similar
 * to `current`, excluding the current product itself.
 *
 * Scoring:
 *   +4  exact subcategory match
 *   +3  subcategory is in the RELATED_SUBCATEGORIES map for the current product
 *   +2  same category
 *   +1  per shared name keyword (up to +3 bonus)
 */
export function getSimilarProducts(
  current: Product,
  candidates: Product[],
  limit = 8
): Product[] {
  const currentSubLower = (current.subcategory || '').toLowerCase().trim();
  const currentCatLower = (current.category || '').toLowerCase().trim();
  const currentNameTokens = extractNameTokens(current.name);

  // Build the set of related subcategories for the current product
  const relatedSubcats = new Set<string>();
  // Match by current subcategory key
  for (const [key, values] of Object.entries(RELATED_SUBCATEGORIES)) {
    if (currentSubLower.includes(key) || key.includes(currentSubLower)) {
      values.forEach(v => relatedSubcats.add(v.toLowerCase()));
    }
  }
  // Also match by name tokens
  for (const token of currentNameTokens) {
    for (const [key, values] of Object.entries(RELATED_SUBCATEGORIES)) {
      if (key.includes(token) || token.includes(key)) {
        values.forEach(v => relatedSubcats.add(v.toLowerCase()));
      }
    }
  }

  const scored = candidates
    .filter(p => p.id !== current.id)
    .map(p => {
      const subLower = (p.subcategory || '').toLowerCase().trim();
      const catLower = (p.category || '').toLowerCase().trim();
      const nameTokens = extractNameTokens(p.name);
      let score = 0;

      // Subcategory exact match
      if (subLower && subLower === currentSubLower) score += 4;
      // Subcategory in related map
      else if (subLower && relatedSubcats.has(subLower)) score += 3;

      // Category match
      if (catLower && catLower === currentCatLower) score += 2;

      // Shared name keywords
      const sharedTokens = nameTokens.filter(t => currentNameTokens.includes(t));
      score += Math.min(sharedTokens.length, 3);

      return { product: p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ product }) => product);

  return deduplicateProducts(scored);
}

/**
 * Returns personalized product recommendations based on the customer's browsing history.
 * Analyzes the categories, subcategories, brands, and product name tokens the customer has viewed.
 * For example, if the customer viewed hair products (shampoo, etc.), it displays related hair care
 * products like combs (pentes), detangling brushes (escovas), conditioners, hair masks, and favorite brands.
 */
export function getPersonalizedRecommendations(
  viewedIds: number[],
  allProducts: Product[],
  fallbackProducts: Product[] = favoriteBrands,
  limit = 12
): Product[] {
  if (!viewedIds || viewedIds.length === 0) {
    return fallbackProducts;
  }

  const viewedMap = new Map<number, Product>();
  allProducts.forEach(p => viewedMap.set(p.id, p));

  const viewedList: Product[] = [];
  for (const id of viewedIds) {
    const p = viewedMap.get(id);
    if (p) viewedList.push(p);
  }

  if (viewedList.length === 0) {
    return fallbackProducts;
  }

  // Aggregate customer interest profile
  const categoryScores = new Map<string, number>();
  const subcategoryScores = new Map<string, number>();
  const brandScores = new Map<string, number>();
  const tokenScores = new Map<string, number>();
  const relatedSubcats = new Set<string>();

  viewedList.forEach((prod, index) => {
    // Recent views have higher weight: first element is newest
    const weight = Math.max(1, 4.0 - index * 0.4);

    if (prod.category) {
      const cat = prod.category.toLowerCase().trim();
      categoryScores.set(cat, (categoryScores.get(cat) || 0) + weight * 2);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (cat.includes(key) || key.includes(cat)) {
          related.forEach(r => relatedSubcats.add(r.toLowerCase()));
        }
      }
    }

    if (prod.subcategory) {
      const sub = prod.subcategory.toLowerCase().trim();
      subcategoryScores.set(sub, (subcategoryScores.get(sub) || 0) + weight * 3);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (sub.includes(key) || key.includes(sub)) {
          related.forEach(r => relatedSubcats.add(r.toLowerCase()));
        }
      }
    }

    if (prod.brand) {
      const br = prod.brand.toLowerCase().trim();
      brandScores.set(br, (brandScores.get(br) || 0) + weight * 3);
    }

    const tokens = extractNameTokens(prod.name);
    tokens.forEach(tok => {
      tokenScores.set(tok, (tokenScores.get(tok) || 0) + weight);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (tok.includes(key) || key.includes(tok)) {
          related.forEach(r => relatedSubcats.add(r.toLowerCase()));
        }
      }
    });
  });

  const viewedSet = new Set(viewedIds);

  const scored = allProducts.map(prod => {
    let score = 0;
    const cat = (prod.category || '').toLowerCase().trim();
    const sub = (prod.subcategory || '').toLowerCase().trim();
    const br = (prod.brand || '').toLowerCase().trim();
    const tokens = extractNameTokens(prod.name);

    // Exact subcategory match from history
    if (sub && subcategoryScores.has(sub)) {
      score += (subcategoryScores.get(sub) || 0) * 4;
    }

    // Related subcategory
    if (sub && relatedSubcats.has(sub)) {
      score += 10;
    }

    // Category match
    if (cat && categoryScores.has(cat)) {
      score += (categoryScores.get(cat) || 0) * 2;
    }

    // Brand match (boosts favorite brands)
    if (br && brandScores.has(br)) {
      score += (brandScores.get(br) || 0) * 3.5;
    }

    // Token match
    tokens.forEach(tok => {
      if (tokenScores.has(tok)) {
        score += (tokenScores.get(tok) || 0) * 2.5;
      }
      if (relatedSubcats.has(tok)) {
        score += 6;
      }
    });

    // Unviewed items get a slight discovery bonus
    if (!viewedSet.has(prod.id)) {
      score += 2;
    }

    return { prod, score };
  });

  const recommended = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.prod);

  const uniqueRecs: Product[] = [];
  const seen = new Set<number>();

  for (const p of recommended) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      uniqueRecs.push(p);
      if (uniqueRecs.length >= limit) break;
    }
  }

  // If fewer than limit, fill with fallbackProducts
  if (uniqueRecs.length < limit) {
    for (const p of fallbackProducts) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        uniqueRecs.push(p);
        if (uniqueRecs.length >= limit) break;
      }
    }
  }

  return deduplicateProducts(uniqueRecs);
}

export const healthSpace: Array<{ id: number; title: string; description: string; image: string; tag: string }> = [
  {
    id: 1,
    title: "Saúde Mental & Bem-estar",
    description: "Dicas e cuidados para equilibrar a rotina, reduzir o estresse e cuidar das suas emoções.",
    image: "/banners/cards/card_01_saude_mental.webp",
    tag: "Bem-Estar"
  },
  {
    id: 2,
    title: "Prevenção e Diagnóstico Precoce",
    description: "A importância dos exames preventivos, acompanhamento médico regular e autocuidado.",
    image: "/banners/cards/card_02_outubro_rosa.webp",
    tag: "Prevenção"
  },
  {
    id: 3,
    title: "Respirar Melhor no Inverno",
    description: "Como cuidar da saúde respiratória, combater alergias e manter a imunidade em alta.",
    image: "/banners/cards/card_03_respirar_melhor.webp",
    tag: "Saúde"
  },
  {
    id: 4,
    title: "Nutrição e Suplementação",
    description: "Orientações nutricionais, vitaminas e suplementos para uma vida mais saudável e ativa.",
    image: "/banners/cards/card_04_nutriweek.webp",
    tag: "Nutrição"
  },
  {
    id: 5,
    title: "Espaço Farmacêutico & Vacinas",
    description: "Serviços de saúde, testes rápidos, aferição de pressão e vacinação na sua loja Raia.",
    image: "/banners/cards/card_05_raia_conceito.webp",
    tag: "Serviços Raia"
  }
];

export const bebeMaisVendidos: Product[] = [
  blackDayProducts.find(p => p.id === 1250294)!,
  ...mostBought.filter(p => p.category === 'Mamãe e Bebê' || p.category === 'Mamãe & Bebê'),
].filter(Boolean);

/**
 * Deduplicates product arrays so that each SKU is represented exactly once
 * with a canonical ID and price, preventing duplicate cards and conflicting prices.
 */
export const deduplicateProducts = (products: Product[]): Product[] => {
  if (!products || !Array.isArray(products)) return [];
  const seenIds = new Set<number>();
  const seenNormalizedKeys = new Set<string>();
  const result: Product[] = [];

  for (const p of products) {
    if (!p || typeof p.id !== 'number') continue;
    if (seenIds.has(p.id)) continue;

    const normKey = (p.name || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\btamanho\b/g, '')
      .replace(/\btam\b/g, '')
      .replace(/\bdescartavel\b/g, '')
      .replace(/\bdescartaveis\b/g, '')
      .replace(/\bcom\b/g, '')
      .replace(/\bunidades\b/g, 'un')
      .replace(/\bunidade\b/g, 'un')
      .replace(/\bfrasco\b/g, '')
      .replace(/\bpacote\b/g, '')
      .replace(/[^a-z0-9]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (normKey && seenNormalizedKeys.has(normKey)) {
      continue;
    }

    seenIds.add(p.id);
    if (normKey) seenNormalizedKeys.add(normKey);
    result.push(p);
  }

  return result;
};

export { todosProdutosExpandidos } from './catalogExpanded';
export { novosProdutosCatalogo } from './novosProdutosCatalogo';
