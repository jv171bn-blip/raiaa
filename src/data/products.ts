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
    'pastilha para garganta',
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
  ];

  return cosmeticKeywords.some(keyword => name.includes(keyword));
}

export const viterganZincoProduct: Product = {
  id: 140081,
  name: "Polivitamínico Zinco Pl 60 comprimidos",
  size: "60 Comprimidos revestidos",
  brand: "Vitergan Zinco",
  category: "Vida Saudável",
  subcategory: "Vitaminas",
  price: 234.69,
  image: "https://product-data.raiadrogasil.io/images/3710018.webp",
  bullets: [
    "Suplemento vitamínico e mineral com ação antioxidante.",
    "Combate os radicais livres que podem prejudicar o funcionamento dos órgãos.",
    "Auxilia na proteção celular e no bem-estar geral.",
  ],
  description:
    "O Vitergan Zinco Pl é um suplemento vitamínico e mineral antioxidante, composto por vitaminas e minerais que atuam contra radicais livres, moléculas que podem prejudicar o funcionamento adequado dos órgãos.",
  howToUse:
    "Tomar 1 comprimido revestido ao dia. Ingerir o comprimido junto às refeições.",
  composition:
    "Vitaminas A, C, E, Zinco Quelato e Minerais Antioxidantes.",
  warnings: [
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Este produto não é um medicamento.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "140081",
  dosage: "1.",
  ean: "7896226109350",
};

export const flexoneProduct: Product = {
  id: 912060,
  name: "Suplemento Alimentar Flexone 60 comprimidos",
  size: "60 Cápsulas",
  brand: "Flexone",
  category: "Vida Saudável",
  subcategory: "Colágeno",
  price: 257.13,
  image: "https://product-data.raiadrogasil.io/images/10701934.webp",
  bullets: [
    "Suplemento alimentar em comprimidos.",
    "Possui fórmula exclusiva",
    "Contém Glucosamina, Cúrcuma e Ácido Hialurônico.",
    "Conta com Colágeno Tipo II não desnaturado",
  ],
  description:
    "O Flexone é um suplemento alimentar em comprimidos, formulado com Glucosamina, Cúrcuma, Ácido Hialurônico e colágeno Tipo II não desnaturado, que auxilia na manutenção da função articular.",
  howToUse:
    "Recomenda-se ingerir 2 comprimidos ao dia, ou conforme orientação de médico ou nutricionista.",
  composition:
    "Curcumina (130 mg), Colágeno Tipo 2 (1,2 mg), Ácido Hialurônico (150 mg) e Glucosamina (750 mg).",
  warnings: [
    "Uso oral.",
    "Uso adulto.",
    "Este produto não é um medicamento.",
    "Gestantes, nutrizes e crianças até 3 (três) anos, somente devem consumir este produto sob orientação de nutricionistas ou médico.",
    "Não exceder a recomendação diária de consumo indicada na embalagem.",
    "Preservar em temperatura ambiente, proteger da luz e manter em local seco.",
    "Mantenha fora do alcance de crianças.",
  ],
  productCode: "912060",
  dosage: "1.",
  ean: "7899824401369",
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
    id: 11004,
    name: "Nicorette Icemint 4mg Goma Mastigável para Parar de Fumar 30 unidades",
    size: "30un",
    brand: "Nicorette",
    category: "Medicamentos",
    subcategory: "Anti-tabagismo",
    oldPrice: 119.20,
    price: 95.36,
    discount: 20,
    options: 2,
    image: "https://product-data.raiadrogasil.io/images/3539200.webp",
    bullets: [
      "Goma mastigável com 4mg de nicotina medicinal sabor Icemint.",
      "Auxilia no abandono do tabagismo aliviando a fissura e sintomas de abstinência.",
      "Sabor refrescante de menta gelada.",
      "Reduz gradualmente a necessidade de fumar.",
    ],
    description: "Nicorette é uma goma mastigável indicada para auxiliar na cessação do hábito de fumar, reduzindo os sintomas de abstinência causados pela dependência de nicotina.",
    howToUse: "Mastigue a goma lentamente até sentir um sabor forte de menta. Em seguida, descanse-a entre a gengiva e a bochecha por alguns minutos.",
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
    id: 11007,
    name: "Dipirona Monoidratada 1g 10 comprimidos Cimed Genérico",
    size: "10 Comprimidos",
    brand: "Cimed",
    category: "Medicamentos",
    subcategory: "Genéricos",
    price: 8.59,
    tierText: "a partir de 3 itens",
    image: "https://product-data.raiadrogasil.io/images/3821266.webp",
    bullets: [
      "Dipirona Monoidratada genérica Cimed de 1g.",
      "Tratamento eficaz contra dor e febre.",
      "Excelente custo-benefício com preço especial a partir de 3 itens.",
      "Medicamento genérico de alta qualidade e confiança.",
    ],
    description: "Dipirona Monoidratada Genérico Cimed 1g é indicada para o alívio das dores de cabeça, dores musculares e controle de febre.",
    howToUse: "Tomar 1/2 a 1 comprimido com água até 4 vezes ao dia.",
  },
  {
    id: 1065925,
    name: "Polivitamínico Neosil Attack Cabelo, Pele E Unha 90 comprimidos",
    size: "90 Cápsulas",
    brand: "Neosil",
    category: "Vida Saudável",
    subcategory: "Cabelo e Unhas",
    price: 384.90,
    options: 2,
    rating: 4.8,
    reviews: 48,
    image: "https://product-data.raiadrogasil.io/images/19779862.webp",
    bullets: [
      "Fórmula avançada com Silício Orgânico biodisponível (Si+Biobetter).",
      "Combate a queda capilar e fortalece unhas quebradiças.",
      "Estimula a síntese de colágeno e elastina na pele.",
      "Enriquecido com Biotina, Zinco e Vitaminas essenciais.",
    ],
    description: "Neosil Attack é um suplemento alimentar inovador desenvolvido para o fortalecimento e revitalização dos cabelos, unhas e pele.",
    howToUse: "Ingerir 1 comprimido ao dia com água, preferencialmente junto a uma refeição.",
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
    id: 11014,
    name: "Azelan 150mg/g Gel 30g",
    size: "30g",
    brand: "Azelan",
    category: "Dermocosméticos",
    subcategory: "Tratamento de Acne",
    oldPrice: 94.78,
    price: 72.98,
    discount: 23,
    rating: 4.8,
    reviews: 283,
    image: "https://product-data.raiadrogasil.io/images/3452298.webp",
    bullets: [
      "Ácido Azelaico 150mg/g em formulação gel suave.",
      "Ação antibacteriana e anti-inflamatória comprovada contra acne vulgar.",
      "Auxilia no clareamento de manchas pós-inflamatórias.",
      "Textura gel não oleosa, ideal para peles com tendência acneica.",
    ],
    description: "Azelan Gel é indicado para o tratamento tópico da acne e da rosácea papulopustulosa, atuando no combate à bactéria causadora da acne e reduzindo a oleosidade excessiva.",
    howToUse: "Lave a pele com água e sabonete suave. Aplique uma camada fina de Azelan nas áreas afetadas duas vezes ao dia (manhã e noite).",
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
    id: 2043,
    name: "Lenços Umedecidos Pampers Fresh Clean 144 Toalhinhas (Embalagem Tripla)",
    size: "144un",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    oldPrice: 41.90,
    price: 34.90,
    discount: 17,
    rating: 4.8,
    reviews: 280,
    image: "https://product-data.raiadrogasil.io/images/17547850.webp",
    bullets: [
      "Toalhinhas suaves e resistentes com loção à base de água pura.",
      "Ajudam a restabelecer o pH natural da pele do bebê a cada troca.",
      "Dermatologicamente testadas, hipoalergênicas e com fragrância delicada.",
    ],
    description: "Toalhas umedecidas Pampers Fresh Clean limpam delicadamente a pele do bebê desde o nascimento, protegendo contra irritações e proporcionando frescor.",
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
  },
];

export const blackDayProducts: Product[] = [
  {
    id: 1250294,
    name: "Fralda Pampers Confort Sec Tamanho G 60 Unidades",
    size: "Tam G (60un)",
    brand: "Pampers",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    price: 32.90,
    oldPrice: 109.90,
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
    id: 102,
    name: "Hidratante Facial Nivea Antissinais Creme 100g",
    size: "100g",
    oldPrice: 39.99,
    price: 29.90,
    discount: 25,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 318,
    image: "https://product-data.raiadrogasil.io/images/20142242.webp",
    brand: "Nivea",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    description: "Creme Facial Antissinais Nivea com fórmula leve e rápida absorção, proporcionando hidratação profunda e reduzindo sinais de expressão.",
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
    id: 108,
    name: "Melatonina 0,21mg bwell Gotas 30ml",
    size: "30ml",
    oldPrice: 41.99,
    price: 24.77,
    discount: 41,
    badges: ["Black do Dia"],
    image: "https://product-data.raiadrogasil.io/images/14052840.webp",
    brand: "bwell",
    category: "Vida Saudável",
    subcategory: "Suplementos",
    description: "Melatonina em gotas bwell 0,21mg para rápida absorção e apoio a um ciclo de sono saudável e reparador.",
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
    id: 110,
    name: "Lenço Umedecido Needs Baby Recém-Nascido 176 Unidades",
    size: "176un",
    oldPrice: 24.90,
    price: 18.75,
    discount: 25,
    tierText: "a partir de 2 itens",
    badges: ["Black do Dia"],
    rating: 4.9,
    reviews: 43,
    image: "https://product-data.raiadrogasil.io/images/11719163.webp",
    brand: "Needs",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    description: "Toalhas umedecidas Needs Baby Recém-Nascido, sem álcool e hipoalergênicas, formuladas especialmente para a pele delicada.",
  },
  {
    id: 111,
    name: "Creatina Hardcore Integralmedica 150g",
    size: "150g",
    oldPrice: 49.99,
    price: 34.90,
    discount: 30,
    options: 2,
    badges: ["Black do Dia"],
    image: "https://product-data.raiadrogasil.io/images/3448861.webp",
    brand: "Integralmedica",
    category: "Vida Saudável",
    subcategory: "Performance & Fitness",
    description: "Creatina monoidratada 100% pura da Integralmedica, auxiliando no aumento do desempenho físico durante exercícios de alta intensidade.",
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 84.90,
    price: 67.90,
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
    id: 117,
    name: "Creme Multirrestaurador Bepantol Derma Toque Seco 30g",
    size: "30g",
    oldPrice: 48.90,
    price: 37.90,
    discount: 22,
    badges: ["Black do Dia"],
    rating: 4.9,
    reviews: 260,
    image: "https://product-data.raiadrogasil.io/images/3468536.webp",
    brand: "Bepantol",
    category: "Dermocosméticos",
    subcategory: "Hidratação Facial",
    description: "Hidratante facial com Pró-Vitamina B5 em fórmula oil-free e toque seco, ideal para o dia a dia e aplicação antes da maquiagem.",
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
  },
  {
    id: 119,
    name: "Vitamina C Efervescente Redoxon Tripla Ação 10 Comprimidos",
    size: "10 Comprimidos",
    oldPrice: 34.90,
    price: 25.90,
    discount: 26,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 112,
    image: "https://product-data.raiadrogasil.io/images/3501712.webp",
    brand: "Redoxon",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
    description: "Vitamina C 1g associada a Zinco e Vitamina D em comprimidos efervescentes sabor laranja para tripla defesa imunológica.",
  },
  {
    id: 120,
    name: "Desodorante Antitranspirante Roll-On Dove Original 50ml",
    size: "50ml",
    oldPrice: 15.90,
    price: 11.49,
    discount: 28,
    badges: ["Black do Dia"],
    rating: 4.9,
    reviews: 210,
    image: "https://product-data.raiadrogasil.io/images/18091662.webp",
    brand: "Dove",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    description: "Desodorante roll-on Dove Original com 1/4 de creme hidratante e proteção 48 horas contra o suor, deixando as axilas macias e suaves.",
  },
];

export const weekHighlights: Product[] = [
  {
    id: 201,
    name: "Creme Dental Colgate Total Prevenção Ativa Original Mint 90g",
    size: "90g",
    oldPrice: 12.59,
    price: 9.99,
    discount: 21,
    options: 2,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    rating: 5,
    reviews: 6,
    brand: "Colgate",
    category: "Higiene Pessoal",
    subcategory: "Higiene Bucal",
    image: "https://product-data.raiadrogasil.io/images/18425072.webp",
    description: "Creme dental com flúor e ação antibacteriana por até 24 horas, protegendo contra placa, cáries e tártaro com sabor mint refrescante.",
  },
  {
    id: 202,
    name: "Protetor Solar Facial La Roche-Posay Anthelios Ultra Cover+ FPS 85 Cor 03 30g",
    size: "30ml",
    price: 99.90,
    options: 11,
    sponsored: true,
    rating: 4.8,
    reviews: 95,
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    image: "https://product-data.raiadrogasil.io/images/20320747.webp",
    description: "Protetor solar facial com cobertura de base e muito alta proteção FPS 85. Controle de oleosidade e acabamento matte por até 18 horas.",
  },
  {
    id: 203,
    name: "Creme Dental Bioniq White Filler 75ml",
    size: "75ml",
    price: 59.99,
    sponsored: true,
    rating: 4.8,
    reviews: 46,
    brand: "Bioniq",
    category: "Higiene Pessoal",
    subcategory: "Higiene Bucal",
    image: "https://product-data.raiadrogasil.io/images/17012076.webp",
    description: "Creme dental com 20% de esmalte biomimético (hidroxiapatita branca), reparando a superfície do esmalte e devolvendo o branco natural dos dentes.",
  },
  {
    id: 204,
    name: "Óleo + Sérum Bifásico Dove Bond Intense Repair + Peptídeo 110ml",
    size: "110ml",
    oldPrice: 39.99,
    price: 36.99,
    discount: 8,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    rating: 4.8,
    reviews: 83,
    brand: "Dove",
    category: "Beleza",
    subcategory: "Finalizadores para Cabelo",
    image: "https://product-data.raiadrogasil.io/images/16880229.webp",
    description: "Óleo bifásico com complexo bio-peptídeos que repara a estrutura dos fios danificados, confere brilho imediato e protege contra pontas duplas.",
  },
  {
    id: 205,
    name: "Probiótico Enterogermina Criança e Adulto 5 Frascos 5ml",
    size: "25ml",
    oldPrice: 36.90,
    price: 29.59,
    discount: 20,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    brand: "Enterogermina",
    category: "Medicamentos",
    subcategory: "Digestão",
    image: "https://product-data.raiadrogasil.io/images/19927491.webp",
    description: "Esporos de Bacillus clausii em suspensão que restauram o equilíbrio da microbiota intestinal em adultos e crianças.",
  },
  {
    id: 206,
    name: "Novalgina Infantil Dipirona 50mg/ml Solução Oral 100ml + Seringa Dosadora",
    size: "100ml",
    oldPrice: 49.03,
    price: 39.99,
    discount: 18,
    sponsored: true,
    brand: "Novalgina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    image: "https://product-data.raiadrogasil.io/images/6760143.webp",
    description: "Analgésico e antitérmico sabor framboesa indicado para o alívio rápido de febre e dores em bebês e crianças a partir de 3 meses.",
  },
  {
    id: 207,
    name: "Absorvente Intimus Noturno Toda Protegida Cobertura Suave Com Abas 30 unidades",
    size: "30un",
    oldPrice: 33.99,
    price: 28.99,
    discount: 15,
    sponsored: true,
    rating: 4.8,
    reviews: 101,
    brand: "Intimus",
    category: "Mamãe & Bebê",
    subcategory: "Cuidados para a Mamãe",
    image: "https://product-data.raiadrogasil.io/images/19704051.webp",
    description: "Absorvente noturno com centro anatômico ultra absorvente e abas de proteção, proporcionando noites tranquilas e sem vazamentos.",
  },
  {
    id: 208,
    name: "Vitamina B6 Materna Nause Nestlé para Gestantes 60 Cápsulas",
    size: "60 Cápsulas",
    price: 94.69,
    sponsored: true,
    consultStock: true,
    brand: "Materna",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
    image: "https://product-data.raiadrogasil.io/images/20253124.webp",
    description: "Suplemento de vitamina B6 formulado pela Nestlé especialmente para gestantes, auxiliando na redução de náuseas matinais.",
  },
  {
    id: 209,
    name: "Suplemento Alimentar Nestlé Nutren Control Chocolate 200ml",
    size: "200ml",
    price: 14.18,
    tierText: "a partir de 4 itens",
    options: 2,
    sponsored: true,
    brand: "Nutren",
    category: "Vida Saudável",
    subcategory: "Nutrição Especializada",
    image: "https://product-data.raiadrogasil.io/images/20172305.webp",
    description: "Alimento pronto desenvolvido para controle glicêmico com proteínas, fibras e sem adição de açúcares no sabor chocolate.",
  },
  {
    id: 210,
    name: "Lactobacillus Materna Optic-Lac Nestlé Pós-Parto 30 Cápsulas",
    size: "30 Cápsulas",
    oldPrice: 173.99,
    price: 148.49,
    discount: 15,
    sponsored: true,
    brand: "Materna",
    category: "Vida Saudável",
    subcategory: "Probióticos",
    image: "https://product-data.raiadrogasil.io/images/20253133.webp",
    description: "Probiótico com cepa patenteada Lactobacillus fermentum LC40 para mulheres no período pós-parto e amamentação.",
  },
  {
    id: 211,
    name: "Complemento Alimentar Nutren Sênior 50+ Baunilha 200ml",
    size: "200ml",
    price: 14.18,
    tierText: "a partir de 2 itens",
    options: 2,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    brand: "Nutren",
    category: "Vida Saudável",
    subcategory: "Complementos Alimentares",
    image: "https://product-data.raiadrogasil.io/images/16391193.webp",
    description: "Complemento nutricional líquido para adultos 50+ com proteínas, cálcio, zinco e vitamina D para vitalidade muscular e óssea.",
  },
  {
    id: 212,
    name: "Lenço Umedecido Needs Baby Aloe Vera 176 Unidades",
    size: "176un",
    oldPrice: 39.90,
    price: 29.92,
    discount: 25,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    rating: 4.9,
    reviews: 128,
    brand: "Needs",
    category: "Mamãe & Bebê",
    subcategory: "Higiene do Bebê",
    image: "https://product-data.raiadrogasil.io/images/19458486.webp",
    description: "Lenços umedecidos hipoalergênicos com Aloe Vera suave, livres de álcool e formulados para a higiene segura e diária do bebê.",
  },
  {
    id: 213,
    name: "Spray para Garganta Natz Mel e Própolis 30ml",
    size: "30ml",
    oldPrice: 18.09,
    price: 15.38,
    discount: 15,
    options: 4,
    sponsored: true,
    badges: ["Exclusivo"],
    brand: "Natz",
    category: "Medicamentos",
    subcategory: "Remédios Naturais",
    image: "https://product-data.raiadrogasil.io/images/3814476.webp",
    description: "Extrato de própolis e mel em spray da marca exclusiva Natz, proporcionando sensação refrescante e conforto na garganta.",
  },
];

export const favoriteBrands: Product[] = [
  {
    id: 301,
    name: "Flosser Infantil para Limpeza dos Dentes GU",
    size: "40un",
    price: 24.99,
    discount: 25,
    rating: 4.5,
    reviews: 43,
    brand: "GUM",
    category: "Higiene Bucal",
    subcategory: "Higiene Bucal",
    image: "https://product-data.raiadrogasil.io/images/3463387.webp",
  },
  {
    id: 302,
    name: "Energético Relâmpago 1 flaconete de 10ml",
    size: "10ml",
    price: 9.90,
    discount: 97,
    badges: ["+1 nº da sorte"],
    brand: "Relâmpago",
    category: "Vida Saudável",
    subcategory: "Performance & Fitness",
    image: "https://product-data.raiadrogasil.io/images/14181353.webp",
  },
  {
    id: 303,
    name: "Sabonete em Barra Nivea Antibacteriana 3 em 1",
    size: "85g",
    price: 8.99,
    badges: ["+1 nº da sorte"],
    brand: "Nivea",
    category: "Beleza & Higiene",
    subcategory: "Sabonetes",
    image: "https://product-data.raiadrogasil.io/images/10728164.webp",
  },
  {
    id: 304,
    name: "Cálcio 600mg + Vitamina D 400UI Osteonutri 30",
    size: "30 comprimidos",
    price: 42.99,
    options: 2,
    brand: "Osteonutri",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
    image: "https://product-data.raiadrogasil.io/images/3517035.webp",
  },
  {
    id: 305,
    name: "Água Micelar Demaquilante Bioderma Sensibio H2O",
    size: "100ml",
    oldPrice: 89.90,
    price: 71.49,
    discount: 21,
    brand: "Bioderma",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    image: "https://product-data.raiadrogasil.io/images/4583907.webp",
  },
  {
    id: 306,
    name: "Fumagum 2mg Menta 36 Gomas",
    size: "36un",
    price: 71.56,
    options: 2,
    brand: "Fumagum",
    category: "Medicamentos",
    subcategory: "Anti-tabagismo",
    image: "https://product-data.raiadrogasil.io/images/15263858.webp",
  },
  {
    id: 307,
    name: "Protetor Solar Facial Toque Seco FPS 50",
    size: "50ml",
    oldPrice: 68.90,
    price: 52.99,
    discount: 23,
    rating: 4.3,
    reviews: 87,
    brand: "Needs",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    image: "https://product-data.raiadrogasil.io/images/19866257.webp",
  },
  {
    id: 308,
    name: "Shampoo Pantene Pro-V Liso Extremo",
    size: "400ml",
    oldPrice: 22.90,
    price: 18.99,
    discount: 17,
    brand: "Pantene",
    category: "Cabelos",
    subcategory: "Shampoo",
    image: "https://product-data.raiadrogasil.io/images/15925906.webp",
  },
];

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
  },
];

export const quemComprouTambem: Product[] = [
  {
    id: 501,
    name: "Fralda Pampers Pants Ajuste Total M 78 unidades",
    size: "78un",
    oldPrice: 139.90,
    price: 119.90,
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
    id: 502,
    name: "Creme Vagisil Urin Protect para Incontinência 30g",
    size: "30g",
    price: 34.90,
    badges: ["⚡ 10 querem"],
    tierText: "Consulte o estoque",
    image: "https://product-data.raiadrogasil.io/images/15413679.webp",
    brand: "Vagisil",
    category: "Beleza & Higiene",
    subcategory: "Cuidados Íntimos",
  },
  {
    id: 503,
    name: "Balm Dr.Jones The Balm para Barba 100ml",
    size: "100ml",
    price: 54.90,
    rating: 4.5,
    reviews: 8,
    image: "https://product-data.raiadrogasil.io/images/3536728.webp",
    brand: "Dr.Jones",
    category: "Beleza & Higiene",
    subcategory: "Barba",
  },
  {
    id: 504,
    name: "Lavitan Super Fórmula Verisol Colágeno 300g",
    size: "300g",
    price: 87.00,
    sponsored: true,
    badges: ["+1 nº da sorte"],
    image: "https://product-data.raiadrogasil.io/images/20043561.webp",
    brand: "Lavitan",
    category: "Vida Saudável",
    subcategory: "Colágeno",
  },
  {
    id: 505,
    name: "Colágeno Verisol Collagen Plus Belíssima 120 cápsulas",
    size: "120 Cápsulas",
    price: 139.90,
    image: "https://product-data.raiadrogasil.io/images/7510280.webp",
    brand: "Belíssima",
    category: "Vida Saudável",
    subcategory: "Colágeno",
  },
];

export const similaresVocePode: Product[] = [
  {
    id: 601,
    name: "Polivitamínico Vitergan Zinco PL 30 Comprimidos",
    size: "30 Comprimidos",
    oldPrice: 135.58,
    price: 121.49,
    discount: 10,
    image: "https://product-data.raiadrogasil.io/images/3710018.webp",
    brand: "Vitergan Zinco",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
  },
  {
    id: 602,
    name: "Polivitamínico Vitergan Zinco 60 Comprimidos revestidos",
    size: "60 Comprimidos revestidos",
    oldPrice: 195.24,
    price: 189.38,
    discount: 3,
    image: "https://product-data.raiadrogasil.io/images/3491079.webp",
    brand: "Vitergan Zinco",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
  },
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
    id: 604,
    name: "Suplemento Alimentar Fortice 30 Comprimidos",
    size: "30 Comprimidos",
    price: 184.02,
    image: "https://product-data.raiadrogasil.io/images/11400089.webp",
    brand: "Fortice",
    category: "Vida Saudável",
    subcategory: "Colágeno",
  },
  {
    id: 605,
    name: "Suplemento Alimentar Bemove com 30 cápsulas",
    size: "30 Cápsulas",
    price: 235.24,
    image: "https://product-data.raiadrogasil.io/images/13224741.webp",
    brand: "Bemove",
    category: "Vida Saudável",
    subcategory: "Colágeno",
  },
];

export const hairCareProducts: Product[] = [
  {
    id: 701,
    name: "Pente de Cabelo Dentes Largos Ricca Rosa",
    size: "1 unidade",
    price: 12.99,
    rating: 4.8,
    reviews: 64,
    image: "https://product-data.raiadrogasil.io/images/17026725.webp",
    brand: "Ricca",
    category: "Cabelos",
    subcategory: "Pentes e Escovas",
    bullets: [
      "Dentes largos que desembaraçam sem quebrar os fios.",
      "Ideal para cabelos cacheados, crespos ou molhados.",
      "Material antiestático resistente e pontas arredondadas.",
    ],
    description: "O Pente Ricca Dentes Largos foi desenvolvido para desembaraçar os fios com suavidade, evitando a quebra capilar.",
  },
  {
    id: 702,
    name: "Escova de Cabelo Desembaraçadora Ricca Flex Oval",
    size: "1 unidade",
    price: 29.90,
    rating: 4.9,
    reviews: 112,
    image: "https://product-data.raiadrogasil.io/images/3671366.webp",
    brand: "Ricca",
    category: "Cabelos",
    subcategory: "Pentes e Escovas",
    bullets: [
      "Cerdas flexíveis de dupla altura que deslizam facilmente pelos nós.",
      "Design vazado em espiral que se adapta ao formato da cabeça.",
      "Pode ser usada com secador graças à sua ventilação especial.",
    ],
    description: "A Escova Flex Oval da Ricca desembaraça fios secos ou molhados com extrema maciez e sem puxões.",
  },
  {
    id: 703,
    name: "Condicionador Pantene Pro-V Liso Extremo 400ml",
    size: "400ml",
    oldPrice: 26.90,
    price: 21.99,
    discount: 18,
    rating: 4.7,
    reviews: 89,
    image: "https://product-data.raiadrogasil.io/images/15925924.webp",
    brand: "Pantene",
    category: "Cabelos",
    subcategory: "Condicionador",
    bullets: [
      "Fórmula Pro-Vitaminas com tecnologia que alinha os fios.",
      "Cabelos lisos, macios e sem frizz até o final do dia.",
      "Sem adição de sal e com hidratação profunda da raiz às pontas.",
    ],
    description: "O Condicionador Pantene Pro-V Liso Extremo sela as cutículas capilares promovendo brilho instantâneo e redução do frizz.",
  },
  {
    id: 704,
    name: "Máscara de Tratamento Elseve Reparação Total 5 300g",
    size: "300g",
    oldPrice: 32.90,
    price: 26.50,
    discount: 19,
    rating: 4.9,
    reviews: 153,
    image: "https://product-data.raiadrogasil.io/images/19504050.webp",
    brand: "Elseve",
    category: "Cabelos",
    subcategory: "Máscara Capilar",
    bullets: [
      "Combate os 5 sinais dos cabelos danificados: quebra, ressecamento, opacidade, rigidez e pontas duplas.",
      "Enriquecida com Ceramida reparadora.",
      "Tratamento intensivo para hidratação e reparação profunda.",
    ],
    description: "A Máscara Elseve Reparação Total 5 repara profundamente a fibra capilar, devolvendo a vitalidade e a maciez dos cabelos.",
  },
];

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
    oldPrice: 89.90,
    price: 74.90,
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
    oldPrice: 104.90,
    price: 89.90,
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
    oldPrice: 109.90,
    price: 92.50,
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
    oldPrice: 134.90,
    price: 114.90,
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
    name: "Fralda Pampers Confort Sec Tamanho XXG 84 Unidades",
    size: "Tam XXG (84un)",
    oldPrice: 139.90,
    price: 119.90,
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
      "Tamanho XXG indicado para bebês acima de 14kg com 84 unidades no pacote econômico.",
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
    oldPrice: 94.90,
    price: 79.90,
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
    oldPrice: 139.90,
    price: 119.90,
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
    oldPrice: 144.90,
    price: 124.90,
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
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XG 60 Unidades",
    size: "Tam XG (60un)",
    oldPrice: 149.90,
    price: 129.90,
    discount: 13,
    rating: 4.9,
    reviews: 290,
    options: 5,
    image: "/products/pampers_pants_xg.webp",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para bebês de 12 a 15kg com 60 unidades.",
      "Cintura elástica 360° macia que não aperta.",
      "Até 12 horas de absorção sequinha e segura.",
    ],
    description: "Pampers Pants tamanho XG combina a facilidade do shortinho com canais absorventes avançados para noites ininterruptas de sono.",
  },
  {
    id: 20405,
    name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XXG 54 Unidades",
    size: "Tam XXG (54un)",
    oldPrice: 154.90,
    price: 134.90,
    discount: 13,
    rating: 4.9,
    reviews: 210,
    options: 5,
    image: "/products/pampers_pants_xxg.jpg",
    brand: "Pampers",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para bebês acima de 14kg com 54 unidades.",
      "Ajuste anatômico 360° perfeito para bebês grandes e ativos.",
      "Gel ultra-absorvente com barreiras duplas antivazamento.",
    ],
    description: "Fralda-calça Pampers Pants XXG com proteção máxima e cintura flexível que acompanha os passos do bebê com conforto absoluto.",
  },
  {
    id: 20390,
    name: "Fralda Huggies Natural Care Tamanho P 48 Unidades",
    size: "Tam P (48un)",
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
    name: "Fralda Huggies Natural Care Tamanho G 68 Unidades",
    size: "Tam G (68un)",
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
      "Tamanho G para 9 a 12,5kg com 68 unidades.",
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
    name: "Fralda Huggies Natural Care Tamanho XXG 52 Unidades",
    size: "Tam XXG (52un)",
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
      "Tamanho XXG para bebês acima de 14kg com 52 unidades.",
      "Barreiras altas e suaves que evitam marcas na pele.",
      "Respirabilidade prolongada dia e noite.",
    ],
    description: "Huggies Natural Care XXG proporciona máxima proteção para bebês grandinhos, preservando o equilíbrio natural da pele com suavidade extrema.",
  },
  {
    id: 1096085,
    name: "Fralda Calça Huggies Proteção Acolchoada Tamanho P 44 Unidades",
    size: "Tam P (44un)",
    oldPrice: 89.90,
    price: 74.90,
    discount: 17,
    rating: 4.8,
    reviews: 130,
    options: 5,
    image: "/products/huggies_pants_xg.webp",
    badges: ["Fácil de Vestir", "Ajuste 360°"],
    brand: "Huggies",
    category: "Mamãe e Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho P indicado para 5 a 8kg com 44 unidades.",
      "Veste como roupinha com cós acolchoado e macio.",
      "Absorção rápida e fácil descarte com fita adesiva.",
    ],
    description: "Fralda-calça Huggies Proteção Acolchoada P oferece praticidade imbatível na troca com toque macio e proteção reforçada.",
  },
  {
    id: 1096086,
    name: "Fralda Calça Huggies Proteção Acolchoada Tamanho M 68 Unidades",
    size: "Tam M (68un)",
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
      "Tamanho M para 7 a 10kg com 68 unidades.",
      "Cintura elástica 360° que não marca a barriguinha.",
      "Canais acolchoados para distribuição uniforme do xixi.",
    ],
    description: "Huggies Roupinha Proteção Acolchoada M proporciona total liberdade para o bebê engatinhar e brincar sem risco de vazamento.",
  },
  {
    id: 1096087,
    name: "Fralda Calça Huggies Proteção Acolchoada Tamanho G 60 Unidades",
    size: "Tam G (60un)",
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
      "Tamanho G para 9 a 12,5kg com 60 fraldas no pacote econômico.",
      "Camada protetora ultra-acolchoada de toque suave.",
      "Até 12 horas de proteção contra vazamentos.",
    ],
    description: "Huggies Calça Roupinha G alia conveniência e conforto supremo, com ajuste flexível que se adapta perfeitamente aos movimentos do corpinho.",
  },
  {
    id: 1096088,
    name: "Fralda Calça Huggies Proteção Acolchoada Tamanho XG 80 Unidades",
    size: "Tam XG (80un)",
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
      "Tamanho XG para 12 a 15kg com 80 fraldas no pacote econômico.",
      "Cintura elástica 360° macia que veste como roupinha.",
      "Proteção acolchoada com barreiras antivazamento duplas.",
    ],
    description: "Fralda formato calça que veste como roupinha e possui cintura elástica 360 graus, facilitando a troca e garantindo total liberdade de movimento para o bebê ativo.",
  },
  {
    id: 1096089,
    name: "Fralda Calça Huggies Proteção Acolchoada Tamanho XXG 72 Unidades",
    size: "Tam XXG (72un)",
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
      "Tamanho XXG para bebês acima de 14kg com 72 unidades.",
      "Laterais rasga-fácil e fita de fechamento para descarte limpo.",
      "Núcleo acolchoado superabsorvente para noites tranquilas.",
    ],
    description: "Huggies Proteção Acolchoada formato roupinha tamanho XXG, perfeita para crianças em fase de desfralde com alta segurança antivazamento.",
  },
  {
    id: 21107,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper P 42 Unidades",
    size: "42un (P)",
    oldPrice: 59.90,
    price: 49.90,
    discount: 17,
    rating: 4.7,
    reviews: 82,
    options: 5,
    image: "https://product-data.raiadrogasil.io/images/13179319.webp",
    badges: ["Custo-Benefício", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho P indicado para bebês até 6kg com 42 unidades.",
      "Até 12 horas de absorção com gel ultra-rápido.",
      "Estampas divertidas e exclusivas da Galinha Pintadinha.",
    ],
    description: "Fralda descartável Babysec Ultrasec P com fitas reajustáveis e barreira antivazamento, proporcionando economia inteligente e bebê sequinho.",
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
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XG 52 Unidades",
    size: "52un (XG)",
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
      "Tamanho XG indicado para 11 a 14kg com 52 unidades.",
      "Cintura anatômica com toque suave e barreiras reforçadas.",
      "Absorção eficiente que aguenta a noite toda sem vazar.",
    ],
    description: "Babysec Ultrasec XG com design divertido e proteção prolongada para bebês ativos e alegres.",
  },
  {
    id: 21113,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XXG 46 Unidades",
    size: "46un (XXG)",
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
      "Tamanho XXG indicado para bebês acima de 13kg com 46 unidades.",
      "Máximo rendimento e proteção duradoura.",
      "Materiais hipoalergênicos e cobertura respirável.",
    ],
    description: "Fralda Babysec Ultrasec XXG desenvolvida para garantir noites tranquilas de sono com excelente absorção e ótimo rendimento.",
  },
  {
    id: 21114,
    name: "Fralda Pom Pom Protek Proteção de Mãe P 36 Unidades",
    size: "36un (P)",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.6,
    reviews: 65,
    options: 5,
    image: "https://product-data.raiadrogasil.io/images/3490497.webp",
    brand: "Pom Pom",
    category: "Mamãe & Bebê",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho P indicado para 3 a 5kg com 36 unidades.",
      "Canal superabsorvente com loção hidratante e extrato de camomila.",
      "Orelhas elásticas macias que se ajustam sem apertar.",
    ],
    description: "Pom Pom Protek P protege a pele delicada desde os primeiros dias com loção hidratante com camomila e absorção rápida.",
  },
  {
    id: 21115,
    name: "Fralda Pom Pom Protek Proteção de Mãe M 48 Unidades",
    size: "48un (M)",
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
      "Tamanho M indicado para 4 a 9kg com 48 unidades.",
      "Camada de proteção de mãe com até 12 horas de absorção.",
      "Toque suave como algodão e barreiras reforçadas.",
    ],
    description: "Fralda Pom Pom Protek tamanho M oferece carinho e segurança para o seu bebê durante todo o dia e noite.",
  },
  {
    id: 1110,
    name: "Fralda Pom Pom Protek Proteção de Mãe G 42 Unidades",
    size: "42un (G)",
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
    name: "Fralda Pom Pom Protek Proteção de Mãe XG 38 Unidades",
    size: "38un (XG)",
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
      "Tamanho XG indicado para 12 a 15kg com 38 unidades.",
      "Canais de ar que auxiliam na respiração da pele infantil.",
      "Fitas laterais ajustáveis de fixação segura.",
    ],
    description: "Pom Pom Protek XG garante bem-estar e proteção contínua com fórmula suave e absorção prolongada.",
  },
  {
    id: 21117,
    name: "Fralda Pom Pom Protek Proteção de Mãe XXG 32 Unidades",
    size: "32un (XXG)",
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
      "Tamanho XXG indicado para bebês acima de 14kg com 32 unidades.",
      "Proteção de até 12 horas sem vazamento.",
      "Dermatologicamente testada para evitar assaduras.",
    ],
    description: "Pom Pom Protek XXG cuida com carinho dos bebês grandinhos, oferecendo máxima absorção e toque suave.",
  },
  {
    id: 21118,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite P 50 Unidades",
    size: "50un (P)",
    oldPrice: 94.90,
    price: 79.90,
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
      "Tamanho P indicado para 4 a 8kg com 50 unidades.",
      "Cintura superelástica e suave que não aperta.",
      "Absorção japonesa instantânea que não empelota.",
    ],
    description: "Fralda-calça MamyPoko P com exclusiva tecnologia japonesa, facilitando a troca e mantendo o corpinho sequinho e livre de assaduras.",
  },
  {
    id: 21119,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite M 68 Unidades",
    size: "68un (M)",
    oldPrice: 104.90,
    price: 89.90,
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
      "Tamanho M indicado para 6 a 11kg com 68 unidades.",
      "Caminhos de ar respiráveis que liberam calor e umidade.",
      "Veste rápido mesmo com o bebê em movimento.",
    ],
    description: "MamyPoko Fralda-Calça Dia e Noite M garante conforto sem igual e absorção de até 12 horas com toque ultrassuave.",
  },
  {
    id: 1111,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite Giga G 60 Unidades",
    size: "60un (G)",
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
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite XG 50 Unidades",
    size: "50un (XG)",
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
      "Tamanho XG indicado para 12 a 17kg com 50 unidades.",
      "Dupla proteção contra vazamentos nas perninhas.",
      "Fita de descarte fácil e prática para o dia a dia.",
    ],
    description: "MamyPoko Fralda-Calça XG para bebês cheios de energia, garantindo proteção dia e noite com a mais avançada tecnologia japonesa.",
  },
  {
    id: 21121,
    name: "Fralda MamyPoko Fralda-Calça Dia e Noite XXG 42 Unidades",
    size: "42un (XXG)",
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
      "Tamanho XXG indicado para bebês de 15 a 26kg com 42 unidades.",
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
  },
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
    id: 11007,
    name: "Dipirona Monoidratada 1g 10 comprimidos Cimed Genérico",
    activeIngredient: "Dipirona Sodica",
    size: "10 Comprimidos",
    oldPrice: 10.90,
    price: 8.59,
    discount: 21,
    image: "https://product-data.raiadrogasil.io/images/3821266.webp",
    badges: ["Genérico com Economia"],
    brand: "Cimed",
    category: "Medicamentos",
    subcategory: "Genéricos",
    bullets: [
      "Medicamento genérico com padrão de qualidade e eficácia comprovada.",
      "Excelente custo-benefício para tratamento de dores e febre.",
      "Comprimidos sulcados fáceis de deglutir.",
    ],
    description: "Medicamento genérico da Cimed com eficácia comprovada, indicado como analgésico e antitérmico para dores de cabeça, febre e dores em geral.",
    composition: "Dipirona monoidratada 1000mg.",
    warnings: ["DIPIRONA É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."],
  },
  {
    id: 1206,
    name: "Paracetamol 750mg Genérico EMS 20 Comprimidos",
    size: "20 Comprimidos",
    oldPrice: 15.90,
    price: 9.90,
    discount: 38,
    image: "https://product-data.raiadrogasil.io/images/3557049.webp",
    badges: ["Genérico EMS"],
    brand: "EMS Genérico",
    category: "Medicamentos",
    subcategory: "Genéricos",
    bullets: [
      "Analgésico e antitérmico de uso oral.",
      "Ideal para quem possui sensibilidade a anti-inflamatórios ou dipirona.",
      "Alívio de dores de dente, dor de garganta e febre decorrente de resfriados.",
    ],
    description: "Indicado para a redução da febre e para o alívio temporário de dores leves a moderadas, como dores associadas a resfriados comuns, cefaleia e dor de dente.",
    composition: "Paracetamol 750mg.",
    warnings: ["PARACETAMOL É UM MEDICAMENTO. NÃO USE JUNTO COM OUTROS MEDICAMENTOS QUE CONTENHAM PARACETAMOL."],
  },
  {
    id: 1207,
    name: "Nimesulida 100mg Genérico Eurofarma 12 Comprimidos",
    size: "12 Comprimidos",
    oldPrice: 18.00,
    price: 11.50,
    discount: 36,
    image: "https://product-data.raiadrogasil.io/images/14982032.webp",
    brand: "Eurofarma Genérico",
    category: "Medicamentos",
    subcategory: "Genéricos",
    bullets: [
      "Anti-inflamatório não esteroidal (AINE).",
      "Alívio da inflamação, dor e febre aguda.",
      "Tratamento de osteoartrite, tendinites e dores pós-cirúrgicas.",
    ],
    description: "Anti-inflamatório não esteroidal indicado para alívio de dor de garganta, dores pós-operatórias, osteoartrite e febre.",
    composition: "Nimesulida 100mg.",
    warnings: ["NIMESULIDA É UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM MÉDICO OU FARMACÊUTICO."],
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
    id: 1210,
    name: "Epocler Flaconete Sabor Abacaxi 10ml",
    size: "10ml",
    oldPrice: 4.29,
    price: 3.49,
    discount: 19,
    image: "https://product-data.raiadrogasil.io/images/19502999.webp",
    brand: "Epocler",
    category: "Medicamentos",
    subcategory: "Digestão",
    bullets: [
      "Auxilia no metabolismo hepático após excessos alimentares ou bebidas.",
      "Sabor refrescante de abacaxi.",
      "Flaconete dosador prático para consumo imediato.",
    ],
    description: "Epocler é indicado para o tratamento dos distúrbios metabólicos hepáticos provocados por excessos alimentares e ingestão de bebidas alcoólicas.",
    composition: "Citrato de colina 100mg, betaína 50mg, racemetionina 100mg por flaconete de 10ml.",
    warnings: ["EPOCLER É UM MEDICAMENTO. SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO."],
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
    id: 1214,
    name: "Goma de Mascar Nicorette Icemint 4mg 30 Unidades",
    size: "30 Gomas",
    oldPrice: 79.90,
    price: 68.90,
    discount: 14,
    image: "https://product-data.raiadrogasil.io/images/3539200.webp",
    badges: ["Alívio do Tabagismo", "Sabor Menta"],
    brand: "Nicorette",
    category: "Medicamentos",
    subcategory: "Anti-tabagismo",
    bullets: [
      "Terapia de reposição de nicotina clinicamente testada.",
      "Ajuda a controlar fissuras e sintomas de abstinência ao parar de fumar.",
      "Sabor refrescante Icemint sem açúcar.",
    ],
    description: "Goma mastigável com nicotina que reduz a vontade de fumar e os sintomas de abstinência decorrentes da interrupção do tabagismo.",
    warnings: ["NICORETTE É UM MEDICAMENTO. LEIA A BULA ANTES DE USAR."],
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
  },
];

// ===========================================================================
// DERMOCOSMÉTICOS & BELEZA (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const dermocosmeticosProducts: Product[] = [
  {
    id: 1301,
    name: "Protetor Solar Anthelios Airlicium+ FPS 80 La Roche-Posay 40g",
    size: "40g",
    oldPrice: 104.90,
    price: 89.90,
    discount: 14,
    rating: 4.9,
    reviews: 245,
    image: "https://product-data.raiadrogasil.io/images/4514499.webp",
    badges: ["Controle de Oleosidade", "FPS 80"],
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Proteção Solar",
    bullets: [
      "Tecnologia Airlicium que garante sensação de pele limpa e toque seco por 12 horas.",
      "Altíssima proteção UVA/UVB com FPS 80.",
      "Resistente à água e ao suor sem deixar resíduos brancos.",
    ],
    description: "Alta proteção contra raios UVA/UVB com tecnologia Airlicium que garante sensação de pele limpa e toque seco por até 12 horas, ideal para peles oleosas.",
  },
  {
    id: 1302,
    name: "Gel de Limpeza Facial Effaclar Concentrado La Roche-Posay 300g",
    size: "300g",
    oldPrice: 94.90,
    price: 82.90,
    discount: 13,
    rating: 4.9,
    reviews: 380,
    image: "https://product-data.raiadrogasil.io/images/18684359.webp",
    badges: ["Tamanho Econômico", "Dermatológico"],
    brand: "La Roche-Posay",
    category: "Dermocosméticos",
    subcategory: "Limpeza Facial",
    bullets: [
      "Fórmula concentrada com Ácido Salicílico e Zinco.",
      "Desobstrui os poros profundamente e combate a oleosidade duradouramente.",
      "Hipoalergênico e formulado para peles brasileiras.",
    ],
    description: "Limpa profundamente a pele oleosa e com tendência acneica, desobstruindo poros e reduzindo a produção excessiva de sebo.",
  },
  {
    id: 1303,
    name: "Bálsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 62.90,
    price: 54.90,
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
    id: 1304,
    name: "Hidratante Facial Neutrogena Hydro Boost Water Gel 50g",
    size: "50g",
    oldPrice: 79.90,
    price: 64.90,
    discount: 19,
    rating: 4.8,
    reviews: 290,
    image: "https://product-data.raiadrogasil.io/images/15959745.webp",
    badges: ["Ácido Hialurônico", "Water Gel"],
    brand: "Neutrogena",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    bullets: [
      "Textura water gel ultraleve não oleosa com rápida absorção.",
      "Hidratação intensa por 48 horas fortalecendo a barreira da pele.",
      "Não obstrui os poros (não comedogênico).",
    ],
    description: "Textura water gel ultraleve enriquecida com Ácido Hialurônico que reestabelece os níveis saudáveis de água na pele por 48 horas.",
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
  },
  {
    id: 1309,
    name: "Creme Facial Antissinais Nivea Q10 Power 100g",
    size: "100g",
    oldPrice: 46.90,
    price: 38.90,
    discount: 17,
    rating: 4.7,
    reviews: 170,
    image: "https://product-data.raiadrogasil.io/images/20142242.webp",
    badges: ["Coenzima Q10 100% Pura"],
    brand: "Nivea",
    category: "Dermocosméticos",
    subcategory: "Rosto",
    bullets: [
      "Coenzima Q10 idêntica à da pele e Creatina.",
      "Reduz visivelmente as rugas e linhas de expressão em 4 semanas.",
      "Fórmula nutritiva de hidratação prolongada por 24 horas.",
    ],
    description: "Fórmula de alta performance com Coenzima Q10 e Creatina que estimula a produção de colágeno, reduzindo rugas em 4 semanas.",
  },
  {
    id: 1310,
    name: "Azelan 150mg/g Gel Tratamento de Acne e Rosácea 30g",
    size: "30g",
    oldPrice: 69.90,
    price: 59.90,
    discount: 14,
    image: "https://product-data.raiadrogasil.io/images/3452298.webp",
    badges: ["Ácido Azelaico"],
    brand: "Azelan",
    category: "Dermocosméticos",
    subcategory: "Tratamento de Acne",
    bullets: [
      "Ácido Azelaico 150mg/g com tripla ação: antibacteriana, anti-inflamatória e desobstrutiva.",
      "Reduz cravos e espinhas sem manchar a pele.",
      "Eficaz no clareamento de manchas pós-inflamatórias e alívio da rosácea.",
    ],
    description: "Gel dermatológico formulado com Ácido Azelaico para redução de espinhas, cravos e atenuação das manchas e vermelhidão da rosácea.",
  },
];

// ===========================================================================
// VITAMINAS & SUPLEMENTOS (Produtos e Imagens Oficiais Droga Raia)
// ===========================================================================
export const vitaminasSuplementosProducts: Product[] = [
  {
    id: 1401,
    name: "100% Whey Protein Max Titanium Baunilha 900g",
    size: "900g",
    oldPrice: 129.90,
    price: 109.90,
    discount: 15,
    rating: 4.9,
    reviews: 412,
    image: "https://product-data.raiadrogasil.io/images/3515001.webp",
    badges: ["21g de Proteína", "BCAA Natural"],
    brand: "Max Titanium",
    category: "Vida Saudável",
    subcategory: "Performance & Fitness",
    bullets: [
      "21g de proteína de alto valor biológico por porção.",
      "4,7g de BCAAs e aminoácidos essenciais para síntese proteica.",
      "Rápida dissolução com sabor irresistível de baunilha.",
    ],
    description: "Proteína concentrada do soro do leite com alto valor biológico, rica em aminoácidos essenciais para ganho de massa muscular e recuperação pós-treino.",
  },
  {
    id: 1402,
    name: "Creatina Monoidratada Pura Max Titanium 300g",
    size: "300g",
    oldPrice: 109.90,
    price: 89.90,
    discount: 18,
    rating: 4.9,
    reviews: 530,
    image: "https://product-data.raiadrogasil.io/images/3514982.webp",
    badges: ["100% Pura", "Força & Explosão"],
    brand: "Max Titanium",
    category: "Vida Saudável",
    subcategory: "Performance & Fitness",
    bullets: [
      "100% creatina monoidratada micronizada de alta pureza.",
      "Aumenta a força máxima e a capacidade física em exercícios intensos.",
      "Auxilia na volumização muscular e regeneração rápida de ATP.",
    ],
    description: "Creatina monoidratada 100% pura sem adição de conservantes ou carboidratos, essencial para ganho de força e resistência nos treinos.",
  },
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
    id: 1404,
    name: "Suplemento Lavitan A-Z Original 60 Comprimidos",
    size: "60 Comprimidos",
    oldPrice: 39.90,
    price: 29.90,
    discount: 25,
    rating: 4.7,
    reviews: 215,
    image: "https://product-data.raiadrogasil.io/images/16727697.webp",
    badges: ["Oferta Especial"],
    brand: "Lavitan",
    category: "Vida Saudável",
    subcategory: "Vitaminas",
    bullets: [
      "Rico em Ferro, Zinco, Vitamina C e Complexo B.",
      "Combate o cansaço físico e mental do dia a dia.",
      "Prático: apenas 1 comprimido ao dia.",
    ],
    description: "Complexo de vitaminas e minerais que combate a fadiga física e mental e complementa as necessidades diárias do organismo.",
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
  },
  {
    id: 1406,
    name: "Melatonina Gotas bwell Sabor Menta 30ml",
    size: "30ml",
    oldPrice: 49.90,
    price: 39.90,
    discount: 20,
    rating: 4.8,
    reviews: 160,
    image: "https://product-data.raiadrogasil.io/images/14052840.webp",
    badges: ["Sono Reparador", "Exclusivo Raia"],
    brand: "bwell",
    category: "Vida Saudável",
    subcategory: "Suplementos",
    bullets: [
      "Melatonina líquida sublingual de rápida absorção.",
      "Induz o sono de forma natural sem causar sonolência matinal residual.",
      "Sabor menta agradável e prático dosador em conta-gotas.",
    ],
    description: "Suplemento líquido de melatonina de rápida absorção para induzir um descanso de qualidade e sincronizar os ritmos do sono.",
  },
  {
    id: 1407,
    name: "Neosil Attack Suplemento para Queda Capilar 90 Comprimidos",
    size: "90 Comprimidos",
    oldPrice: 209.90,
    price: 179.90,
    discount: 14,
    rating: 4.8,
    reviews: 88,
    image: "https://product-data.raiadrogasil.io/images/19779862.webp",
    badges: ["Silício Orgânico Si+"],
    brand: "Neosil",
    category: "Vida Saudável",
    subcategory: "Cabelo e Unhas",
    bullets: [
      "Silício Orgânico Si+ biodisponível patenteado.",
      "Estimula a síntese de colágeno e queratina fortificando raízes e fios.",
      "Tratamento completo para 3 meses com 90 comprimidos.",
    ],
    description: "Tratamento inovador antiqueda enriquecido com silício biodisponível, biotina e zinco que fortalecem a haste capilar e estimulam novos fios.",
  },
];

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
  },
  {
    id: 1503,
    name: "Óleo Extraordinário Elseve L'Oréal Paris 100ml",
    size: "100ml",
    oldPrice: 47.90,
    price: 39.90,
    discount: 17,
    rating: 4.9,
    reviews: 460,
    image: "https://product-data.raiadrogasil.io/images/20024799.webp",
    badges: ["Nutrição Absoluta", "Mais Vendido"],
    brand: "Elseve",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    bullets: [
      "Mistura mágica de 6 micro-óleos de flores preciosas.",
      "Brilho espelhado, maciez incomparável e controle antifrizz.",
      "Proteção térmica contra secador e chapinha até 230°C.",
    ],
    description: "Fórmula enriquecida com micro-óleos de flores preciosas que nutrem intensamente sem pesar os fios, promovendo brilho cintilante e maciez.",
  },
  {
    id: 1504,
    name: "Shampoo Elseve Bond Repair Reparação Molecular 250ml",
    size: "250ml",
    oldPrice: 34.90,
    price: 29.90,
    discount: 14,
    rating: 4.8,
    reviews: 110,
    image: "https://product-data.raiadrogasil.io/images/15109462.webp",
    badges: ["Reparação Molecular"],
    brand: "Elseve",
    category: "Cabelos",
    subcategory: "Shampoo",
    bullets: [
      "Tecnologia com Complexo Pro-Bond que reconstrói as ligações capilares internas.",
      "Limpeza suave e fortalecimento intensivo da fibra danificada.",
      "Devolve o brilho, a elasticidade e a resistência mecânica dos fios.",
    ],
    description: "Tecnologia molecular patenteada com Complexo Pro-Bond que reconstrói as pontes internas da fibra capilar danificada.",
  },
  {
    id: 1505,
    name: "Óleo Capilar Pantene Miracles Óleo Poderoso 95ml",
    size: "95ml",
    oldPrice: 41.90,
    price: 34.90,
    discount: 17,
    rating: 4.8,
    reviews: 130,
    image: "https://product-data.raiadrogasil.io/images/10596917.webp",
    brand: "Pantene",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    bullets: [
      "Infusão nutritiva com fórmula Pro-Vitamina multibenefícios.",
      "Sela as pontas duplas instantaneamente e hidrata os fios ressecados.",
      "Toque seco com rápida absorção sem oleosidade residual.",
    ],
    description: "Óleo multibenefícios com Pro-Vitaminas que controla o frizz, protege contra pontas duplas e sela a umidade natural do cabelo.",
  },
];

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

  return scored;
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

  return uniqueRecs;
}

export const healthSpace: Array<{ id: number; title: string; description: string; image: string; tag: string }> = [
  {
    id: 1,
    title: "Saúde Mental & Bem-estar",
    description: "Dicas e cuidados para equilibrar a rotina, reduzir o estresse e cuidar das suas emoções.",
    image: "/banners/hero_06_saude_mental.webp",
    tag: "Bem-Estar"
  },
  {
    id: 2,
    title: "Prevenção e Diagnóstico Precoce",
    description: "A importância dos exames preventivos, acompanhamento médico regular e autocuidado.",
    image: "/banners/hero_10_outubro_rosa.webp",
    tag: "Prevenção"
  },
  {
    id: 3,
    title: "Respirar Melhor no Inverno",
    description: "Como cuidar da saúde respiratória, combater alergias e manter a imunidade em alta.",
    image: "/banners/banner_09_respirar_melhor.png",
    tag: "Saúde"
  },
  {
    id: 4,
    title: "Nutrição e Suplementação",
    description: "Orientações nutricionais, vitaminas e suplementos para uma vida mais saudável e ativa.",
    image: "/banners/banner_07_nutriweek.png",
    tag: "Nutrição"
  },
  {
    id: 5,
    title: "Espaço Farmacêutico & Vacinas",
    description: "Serviços de saúde, testes rápidos, aferição de pressão e vacinação na sua loja Raia.",
    image: "/banners/banner_05_raia_conceito.png",
    tag: "Serviços Raia"
  },
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
  const seenIds = new Set<number>();
  const seenNormalizedKeys = new Set<string>();
  const result: Product[] = [];

  for (const p of products) {
    if (!p || !p.id) continue;
    if (seenIds.has(p.id)) continue;

    const normKey = (p.name || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\btamanho\b/g, '')
      .replace(/\bdescartavel\b/g, '')
      .replace(/\bcom\b/g, '')
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
