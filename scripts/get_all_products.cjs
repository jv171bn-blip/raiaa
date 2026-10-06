var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// scripts/get_all_products.ts
var get_all_products_exports = {};
__export(get_all_products_exports, {
  uniqueProducts: () => uniqueProducts
});
module.exports = __toCommonJS(get_all_products_exports);

// src/data/products.ts
var products_exports = {};
__export(products_exports, {
  asianBeauty: () => asianBeauty,
  bebeMaisVendidos: () => bebeMaisVendidos,
  blackDayProducts: () => blackDayProducts,
  deduplicateProducts: () => deduplicateProducts,
  dermocosmeticosProducts: () => dermocosmeticosProducts,
  favoriteBrands: () => favoriteBrands,
  flexoneProduct: () => flexoneProduct,
  fraldasProducts: () => fraldasProducts,
  getPersonalizedRecommendations: () => getPersonalizedRecommendations,
  getSimilarProducts: () => getSimilarProducts,
  hairCareProducts: () => hairCareProducts,
  healthSpace: () => healthSpace,
  higieneBucalPersonalProducts: () => higieneBucalPersonalProducts,
  isCosmeticOrPersonalCare: () => isCosmeticOrPersonalCare,
  mostBought: () => mostBought,
  novosProdutosCatalogo: () => novosProdutosCatalogo,
  quemComprouTambem: () => quemComprouTambem,
  remediosProducts: () => remediosProducts,
  similaresVocePode: () => similaresVocePode,
  todosProdutosExpandidos: () => todosProdutosExpandidos,
  vitaminasSuplementosProducts: () => vitaminasSuplementosProducts,
  viterganZincoProduct: () => viterganZincoProduct,
  weekHighlights: () => weekHighlights
});

// src/data/catalogExpanded.ts
var medicamentosExpandidos = [
  {
    id: 2001,
    name: "Tylenol 750mg Paracetamol 20 Comprimidos",
    activeIngredient: "Paracetamol",
    size: "20 Comprimidos",
    brand: "Tylenol",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    oldPrice: 38.9,
    price: 32.9,
    discount: 15,
    rating: 4.9,
    reviews: 310,
    image: "/products/tylenol_750mg.jpg",
    bullets: [
      "Al\xEDvio r\xE1pido e eficaz de dores de cabe\xE7a, dores musculares e febre.",
      "750mg de Paracetamol puro por comprimido.",
      "N\xE3o agride o est\xF4mago, seguro para quem n\xE3o pode tomar anti-inflamat\xF3rios.",
      "Marca n\xFAmero 1 recomendada por m\xE9dicos no Brasil."
    ],
    description: "Tylenol 750mg \xE9 um analg\xE9sico e antit\xE9rmico com f\xF3rmula \xE0 base de paracetamol indicado para o al\xEDvio de dores leves a moderadas e febre.",
    composition: "Paracetamol 750mg por comprimido.",
    dosage: "Adultos e crian\xE7as acima de 12 anos: 1 comprimido de 4 a 6 horas conforme necessidade.",
    warnings: ["TYLENOL \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. N\xC3O TOME OUTRO PRODUTO QUE CONTENHA PARACETAMOL."],
    ean: "7891030005474",
    productCode: "2001"
  },
  {
    id: 2003,
    name: "Aspirina Prevent 100mg \xC1cido Acetilsalic\xEDlico Bayer 30 Comprimidos",
    activeIngredient: "\xC1cido Acetilsalic\xEDlico",
    size: "30 Comprimidos",
    brand: "Aspirina",
    category: "Medicamentos",
    subcategory: "Cardiovascular",
    oldPrice: 34.9,
    price: 29.9,
    discount: 14,
    image: "/products/aspirina_prevent.jpg",
    bullets: [
      "Comprimidos gastrorresistentes que protegem o est\xF4mago.",
      "Reduz a agrega\xE7\xE3o plaquet\xE1ria prevenindo a forma\xE7\xE3o de co\xE1gulos.",
      "Indicado para a preven\xE7\xE3o secund\xE1ria de infarto e AVC em pacientes com risco."
    ],
    description: "Aspirina Prevent cont\xE9m \xE1cido acetilsalic\xEDlico em baixa dosagem com revestimento que resiste ao suco g\xE1strico, atuando como antiagregante plaquet\xE1rio.",
    composition: "\xC1cido acetilsalic\xEDlico 100mg com revestimento gastrorresistente.",
    dosage: "Tomar 1 comprimido ao dia com \xE1gua, de prefer\xEAncia no mesmo hor\xE1rio.",
    warnings: ["ASPIRINA PREVENT \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE SEU CARDIOLOGISTA."],
    ean: "7891106905530",
    productCode: "2003"
  },
  {
    id: 2004,
    name: "Losartana Pot\xE1ssica 50mg Medley Gen\xE9rico 30 Comprimidos",
    activeIngredient: "Losartana Potassica",
    size: "30 Comprimidos",
    brand: "Medley Gen\xE9rico",
    category: "Medicamentos",
    subcategory: "Gen\xE9ricos",
    oldPrice: 16.9,
    price: 11.9,
    discount: 30,
    image: "/products/losartana_50mg.jpg",
    bullets: [
      "Anti-hipertensivo padr\xE3o-ouro no controle da press\xE3o arterial elevada.",
      "Protege os rins e o cora\xE7\xE3o em pacientes com hipertens\xE3o e diabetes.",
      "Gen\xE9rico com rigoroso controle de qualidade Medley."
    ],
    description: "Medicamento gen\xE9rico indicado para o tratamento da hipertens\xE3o arterial, reduzindo os riscos de complica\xE7\xF5es cardiovasculares.",
    composition: "Losartana pot\xE1ssica 50mg.",
    dosage: "Dose inicial usual de 50mg uma vez ao dia.",
    warnings: ["LOSARTANA \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. VENDA SOB PRESCRI\xC7\xC3O M\xC9DICA."],
    ean: "7896427514337",
    productCode: "2004"
  },
  {
    id: 2007,
    name: "Allegra 120mg Antial\xE9rgico Sanofi 10 Comprimidos",
    activeIngredient: "Cloridrato de Fexofenadina",
    size: "10 Comprimidos",
    brand: "Allegra",
    category: "Medicamentos",
    subcategory: "Alergias",
    oldPrice: 62.9,
    price: 54.9,
    discount: 13,
    image: "/products/allegra_120mg.jpg",
    bullets: [
      "Cloridrato de fexofenadina que n\xE3o causa sonol\xEAncia.",
      "Al\xEDvio r\xE1pido de coriza, espirros, coceira no nariz e olhos lacrimejantes.",
      "Uma \xFAnica dose protege contra crises al\xE9rgicas o dia todo."
    ],
    description: "Allegra 120mg \xE9 um anti-histam\xEDnico de segunda gera\xE7\xE3o que combate os sintomas da rinite al\xE9rgica e urtic\xE1ria sem dar sono.",
    composition: "Cloridrato de fexofenadina 120mg.",
    warnings: ["ALLEGRA \xC9 UM MEDICAMENTO. SE PERSISTIREM OS SINTOMAS, CONSULTE O M\xC9DICO."],
    ean: "7891058019620",
    productCode: "2007"
  },
  {
    id: 2010,
    name: "Vick Vaporub Pomada Descongestionante 50g",
    size: "50g",
    brand: "Vick",
    category: "Medicamentos",
    subcategory: "Respirat\xF3rio",
    oldPrice: 34.9,
    price: 29.9,
    discount: 14,
    image: "/products/vick_vaporub_50g.jpg",
    bullets: [
      "Alivia 3 sintomas do resfriado: tosse, congest\xE3o nasal e dores musculares.",
      "Vapores terap\xEAuticos de mentol, c\xE2nfora e \xF3leo de eucalipto.",
      "Pode ser massageado no peito ou usado em inala\xE7\xF5es a vapor."
    ],
    description: "Pomada descongestionante que libera vapores bals\xE2micos para acalmar a tosse, liberar a respira\xE7\xE3o e confortar o sono durante gripes e resfriados.",
    composition: "C\xE2nfora 5,26%, Mentol 2,82%, \xD3leo de Eucalipto 1,33%.",
    warnings: ["VICK VAPORUB \xC9 UM MEDICAMENTO. USO EXTERNO OU INALA\xC7\xC3O. N\xC3O INGERIR."],
    ean: "7891721010306",
    productCode: "2010"
  },
  {
    id: 2016,
    name: "Dorflex Relaxante Muscular e Analg\xE9sico Sanofi 36 Comprimidos",
    size: "36 Comprimidos",
    brand: "Dorflex",
    category: "Medicamentos",
    subcategory: "Dores Musculares",
    oldPrice: 42.9,
    price: 36.9,
    discount: 14,
    image: "/products/dorflex_36.jpg",
    bullets: [
      "Embalagem fam\xEDlia com 36 comprimidos para tratamento de contraturas musculares.",
      "Combina\xE7\xE3o de Dipirona, Citrato de Orfenadrina e Cafe\xEDna.",
      "Desfaz a tens\xE3o do m\xFAsculo e alivia a dor rapidamente."
    ],
    description: "Dorflex \xE9 indicado para o al\xEDvio da dor associada a contraturas musculares decorrentes de estresse, m\xE1 postura ou esfor\xE7o f\xEDsico excessivo.",
    composition: "Dipirona 300mg, citrato de orfenadrina 35mg, cafe\xEDna 50mg por comprimido.",
    warnings: ["DORFLEX \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."],
    ean: "7891058017503",
    productCode: "2016"
  },
  {
    id: 2018,
    name: "Benegrip Multi Al\xEDvio de Gripes e Resfriados 20 Comprimidos",
    size: "20 Comprimidos",
    brand: "Benegrip",
    category: "Medicamentos",
    subcategory: "Gripes e Resfriados",
    oldPrice: 29.9,
    price: 24.9,
    discount: 17,
    image: "/products/benegrip_20comp.jpg",
    bullets: [
      "Combate os sintomas da gripe: febre, dor de cabe\xE7a e dores musculares.",
      "Dupla a\xE7\xE3o descongestionante e antit\xE9rmica.",
      "Comprimidos revestidos de f\xE1cil ingest\xE3o."
    ],
    description: "Benegrip Multi \xE9 indicado para o al\xEDvio r\xE1pido dos principais sintomas de gripes e resfriados.",
    warnings: ["BENEGRIP \xC9 UM MEDICAMENTO. CONSULTE O FARMAC\xCAUTICO. LEIA A BULA."],
    ean: "7896094911206",
    productCode: "2018"
  },
  {
    id: 2019,
    name: "Coristina D Descongestionante e Antigripal 16 Comprimidos",
    size: "16 Comprimidos",
    brand: "Coristina",
    category: "Medicamentos",
    subcategory: "Gripes e Resfriados",
    oldPrice: 32.9,
    price: 27.9,
    discount: 15,
    image: "/products/coristina_d_16comp.jpg",
    bullets: [
      "Qu\xE1drupla a\xE7\xE3o: analg\xE9sica, antit\xE9rmica, descongestionante e antial\xE9rgica.",
      "R\xE1pido al\xEDvio da coriza e nariz trancado.",
      "N\xE3o interrompe as atividades do dia a dia."
    ],
    description: "Coristina D proporciona al\xEDvio de sintomas decorrentes de gripes, resfriados e rinite al\xE9rgica.",
    warnings: ["CORISTINA D \xC9 UM MEDICAMENTO. LEIA A BULA."],
    ean: "7896094911305",
    productCode: "2019"
  },
  {
    id: 2022,
    name: "Floratil 200mg Probi\xF3tico Saccharomyces boulardii 4 C\xE1psulas",
    activeIngredient: "Saccharomyces boulardii",
    size: "4 C\xE1psulas",
    brand: "Floratil",
    category: "Medicamentos",
    subcategory: "Digest\xE3o",
    oldPrice: 56.9,
    price: 49.9,
    discount: 12,
    image: "/products/floratil_200mg.jpg",
    bullets: [
      "Levedura probi\xF3tica Saccharomyces boulardii liofilizada.",
      "Tratamento auxiliar da diarreia de diferentes causas.",
      "Restaura a microbiota intestinal ap\xF3s uso de antibi\xF3ticos."
    ],
    description: "Floratil \xE9 indicado como auxiliar no tratamento de diarreias infecciosas e associadas a antibi\xF3ticos, reconstituindo a flora normal.",
    warnings: ["FLORATIL \xC9 UM MEDICAMENTO. SE OS SINTOMAS PERSISTIREM, PROCURE ORIENTA\xC7\xC3O M\xC9DICA."],
    ean: "7891721021104",
    productCode: "2022"
  }
];
var dermocosmeticosExpandidos = [
  {
    id: 2025,
    name: "Protetor Solar Facial ISDIN Fotoprotetor Fusion Water Magic FPS 50 50ml",
    size: "50ml",
    brand: "ISDIN",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    oldPrice: 114.9,
    price: 98.9,
    discount: 14,
    rating: 5,
    reviews: 580,
    image: "/products/isdin_fusion_water_fps60.jpg",
    bullets: [
      "Fase aquosa ultraleve com absor\xE7\xE3o imediata e controle de oleosidade.",
      "Tecnologia Safe-Eye Tech: n\xE3o irrita nem arde os olhos.",
      "Cont\xE9m \xC1cido Hialur\xF4nico e Extrato de Alga do Mediterr\xE2neo antioxidante.",
      "Pode ser aplicado sobre a pele molhada (Wet Skin)."
    ],
    description: "Protetor solar facial ultraleve de fase aquosa para uso di\xE1rio. Absor\xE7\xE3o instant\xE2nea sem deixar res\xEDduos oleosos e toque seco sedoso.",
    ean: "8429421868436",
    productCode: "2025"
  },
  {
    id: 2028,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica Refil Econ\xF4mico 400g",
    size: "400g (Refil)",
    brand: "Darrow",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial",
    oldPrice: 89.9,
    price: 74.9,
    discount: 17,
    rating: 4.8,
    reviews: 295,
    image: "/products/darrow_actine_400g_frasco.jpg",
    bullets: [
      "Mais prescrito pelos dermatologistas para peles oleosas e com acne.",
      "\xC1cido Salic\xEDlico, Extrato de Aloe Vera e Lactato de Mentila calmante.",
      "Desobstrui os poros, reduz cravos e controla a oleosidade por 9 horas."
    ],
    description: "Gel de limpeza facial Actine higieniza profundamente a pele oleosa e acneica sem ressecar, eliminando bact\xE9rias e controlando o brilho excessivo.",
    ean: "7896403808597",
    productCode: "2028"
  },
  {
    id: 2031,
    name: "Protetor Solar Facial Needs FPS 70 Toque Seco 40g",
    size: "40g",
    brand: "Needs",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    oldPrice: 49.9,
    price: 42.9,
    discount: 14,
    rating: 4.7,
    reviews: 165,
    image: "/products/needs_beauty_fps70.jpg",
    badges: ["Exclusivo Droga Raia", "FPS 70"],
    bullets: [
      "Alt\xEDssima prote\xE7\xE3o contra raios solares UVA e UVB com FPS 70.",
      "Toque seco com r\xE1pida absor\xE7\xE3o e efeito matte prolongado.",
      "Resistente \xE0 \xE1gua e ao suor com f\xF3rmula n\xE3o oleosa."
    ],
    description: "Protetor solar facial Needs FPS 70 desenvolvido para o clima brasileiro, oferecendo alta prote\xE7\xE3o com acabamento aveludado e sequinho.",
    ean: "7891066009903",
    productCode: "2031"
  }
];
var bebeInfantilExpandidos = [
  {
    id: 2040,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho G 72 Unidades",
    size: "72un (G)",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    oldPrice: 144.9,
    price: 124.9,
    discount: 14,
    rating: 4.9,
    reviews: 410,
    image: "/products/pampers_pants_g.webp",
    bullets: [
      "Veste como shortinho e ajusta-se automaticamente a 360\xB0 ao corpo do beb\xEA.",
      "Para retirar, basta rasgar as laterais pr\xE1ticas com fita de descarte.",
      "Canais de gel que mant\xEAm o beb\xEA sequinho por at\xE9 12 horas."
    ],
    description: "Pampers Pants proporciona a m\xE1xima facilidade de troca at\xE9 com o beb\xEA em movimento, com cintura el\xE1stica 360\xB0 superconfort\xE1vel.",
    ean: "7500435137890",
    productCode: "2040"
  },
  {
    id: 2041,
    name: "Pomada para Assaduras Hipogl\xF3s Am\xEAndoas 40g",
    size: "40g",
    brand: "Hipogl\xF3s",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    oldPrice: 26.9,
    price: 22.9,
    discount: 15,
    rating: 4.9,
    reviews: 320,
    image: "/products/hipoglos_amendoas.jpg",
    bullets: [
      "F\xF3rmula enriquecida com \xD3leo de Am\xEAndoas e \xD3xido de Zinco.",
      "Textura suave f\xE1cil de aplicar e remover na troca de fraldas.",
      "Cria uma barreira protetora contra assaduras e irrita\xE7\xF5es por umidade."
    ],
    description: "Hipogl\xF3s Am\xEAndoas forma uma camada protetora nutritiva com \xF3leo de am\xEAndoas e vitaminas A e E, mantendo a pele do beb\xEA hidratada e livre de assaduras.",
    ean: "7891030018313",
    productCode: "2041"
  },
  {
    id: 2042,
    name: "Pomada Preventiva de Assaduras Desitin Maximum Strength Roxa 113g",
    size: "113g",
    brand: "Desitin",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    oldPrice: 74.9,
    price: 64.9,
    discount: 13,
    rating: 4.9,
    reviews: 350,
    image: "/products/desitin_roxa.jpg",
    bullets: [
      "Concentra\xE7\xE3o m\xE1xima permitida de 40% de \xD3xido de Zinco.",
      "Alivia a dor e o desconforto de assaduras severas desde a 1\xAA aplica\xE7\xE3o.",
      "Barreira protetora espessa e duradoura contra a acidez da urina e fezes."
    ],
    description: "Desitin Maximum Strength Roxa \xE9 o tratamento n\xFAmero 1 recomendado nos EUA contra assaduras persistentes, criando uma barreira imperme\xE1vel de longa dura\xE7\xE3o.",
    ean: "074300000781",
    productCode: "2042"
  },
  {
    id: 2045,
    name: "Pomada Bepantol Baby Creme Preventivo de Assaduras 120g",
    size: "120g",
    brand: "Bepantol",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    oldPrice: 38.9,
    price: 35.01,
    discount: 14,
    rating: 4.9,
    reviews: 430,
    image: "/products/bepantol_baby.jpg",
    bullets: [
      "Com Pr\xF3-Vitamina B5 que penetra na pele mantendo-a resistente e macia.",
      "Camada protetora transparente que permite acompanhar a recupera\xE7\xE3o da pele.",
      "Sem conservantes, corantes ou perfumes."
    ],
    description: "Bepantol Baby forma uma pel\xEDcula protetora flex\xEDvel e transparente contra o atrito e a umidade da fralda, regenerando a pele do beb\xEA de dentro para fora.",
    ean: "7891106913108",
    productCode: "2045"
  },
  {
    id: 2047,
    name: "Cereal Infantil Mucilon Milho Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 460,
    image: "/products/mucilon_milho.jpg",
    bullets: [
      "Cereal infantil de milho enriquecido com vitaminas A, C, D e complexo B.",
      "NutriProtect+: combina\xE7\xE3o exclusiva de nutrientes essenciais para imunidade e desenvolvimento.",
      "Fonte de Ferro e Zinco de alta biodisponibilidade.",
      "Ideal para papinhas nutritivas e deliciosas."
    ],
    description: "Mucilon Milho \xE9 um cereal infantil da Nestl\xE9 desenvolvido especialmente para complementar a alimenta\xE7\xE3o de beb\xEAs e crian\xE7as a partir de 6 meses, auxiliando no crescimento saud\xE1vel com ferro e vitaminas.",
    ean: "7891000100413",
    productCode: "2047"
  },
  {
    id: 2048,
    name: "Cereal Infantil Mucilon Arroz e Aveia Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 520,
    image: "/products/mucilon_arroz_aveia.jpg",
    bullets: [
      "Combina\xE7\xE3o balanceada de arroz e aveia rica em fibras para o intestino.",
      "Fonte de 13 vitaminas e minerais essenciais para o beb\xEA.",
      "F\xE1cil digest\xE3o e sabor suave que as crian\xE7as adoram.",
      "Sem adi\xE7\xE3o de conservantes ou corantes artificiais."
    ],
    description: "O Cereal Infantil Mucilon Arroz e Aveia Nestl\xE9 \xE9 fonte de energia saud\xE1vel e nutrientes essenciais que apoiam o desenvolvimento infantil e a sa\xFAde digestiva.",
    ean: "7891000100420",
    productCode: "2048"
  },
  {
    id: 2049,
    name: "Cereal Infantil Mucilon Multicereais Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 380,
    image: "/products/mucilon_multicereais_600g.webp",
    bullets: [
      "Mix balanceado de trigo, cevada, arroz e aveia.",
      "Enriquecido com ferro, zinco e vitamina C para fortalecer as defesas naturais.",
      "Pr\xE1tico e nutritivo para o caf\xE9 da manh\xE3 ou lanchinho."
    ],
    description: "Mucilon Multicereais combina gr\xE3os selecionados para oferecer textura aveludada e nutri\xE7\xE3o completa para a fase de introdu\xE7\xE3o alimentar dos pequenos.",
    ean: "7891000100437",
    productCode: "2049"
  },
  {
    id: 20470,
    name: "F\xF3rmula Infantil Danone Aptamil Profutura 1 com Prebi\xF3ticos 800g",
    size: "800g",
    brand: "Aptamil",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 124.9,
    price: 98.9,
    discount: 21,
    image: "/products/aptamil_profutura.jpg",
    bullets: [
      "F\xF3rmula infantil de partida para lactentes de 0 a 6 meses.",
      "Exclusiva combina\xE7\xE3o patenteada de prebi\xF3ticos scGOS/lcFOS e p\xF3s-bi\xF3ticos.",
      "Cont\xE9m DHA, ARA e nucleot\xEDdeos essenciais para o desenvolvimento cognitivo e visual.",
      "F\xF3rmula padr\xE3o-ouro recomendada por pediatras."
    ],
    description: "Aptamil Profutura 1 \xE9 uma f\xF3rmula infantil com nutrientes inspirados na nutri\xE7\xE3o materna, contendo estrutura lip\xEDdica exclusiva e prebi\xF3ticos que apoiam o sistema imunol\xF3gico infantil.",
    ean: "7891025114792",
    productCode: "20470"
  },
  {
    id: 20480,
    name: "F\xF3rmula Infantil Nestl\xE9 NAN Supreme 1 com HMOs 800g",
    size: "800g",
    brand: "NAN",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 159.9,
    price: 139.99,
    discount: 12,
    image: "/products/nan_supreme_1.jpg",
    bullets: [
      "Cont\xE9m 2 Oligossacar\xEDdeos do Leite Humano (2'FL e LNnT) id\xEAnticos aos naturais.",
      "Prote\xEDna do soro do leite parcialmente hidrolisada para digest\xE3o mais leve.",
      "Indicado para beb\xEAs de 0 a 6 meses sob orienta\xE7\xE3o m\xE9dica ou nutricional.",
      "Enriquecido com DHA, ARA e probi\xF3ticos B. lactis."
    ],
    description: "NAN Supreme 1 da Nestl\xE9 traz a mais avan\xE7ada tecnologia com HMOs e prote\xEDnas selecionadas que facilitam a digest\xE3o e reduzem o risco de desconfortos intestinais.",
    ean: "7891000300899",
    productCode: "20480"
  },
  {
    id: 20490,
    name: "Composto L\xE1cteo Ninho Fases 1+ Prebio 1 Nestl\xE9 800g",
    size: "800g",
    brand: "Ninho",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 52.9,
    price: 44.9,
    discount: 15,
    rating: 4.9,
    reviews: 580,
    image: "/products/ninho_fases_1.jpg",
    bullets: [
      "Desenvolvido para crian\xE7as de 1 a 3 anos de idade.",
      "Composto com fibras Prebio 1 que auxiliam no bom funcionamento do intestino.",
      "Rico em C\xE1lcio, Ferro, Zinco e Vitaminas A, C, D e E.",
      "Sabor adorado por gera\xE7\xF5es com qualidade Nestl\xE9."
    ],
    description: "Ninho Fases 1+ ajuda a complementar a nutri\xE7\xE3o de crian\xE7as a partir de 1 ano, fornecendo nutrientes fundamentais para a fase de descobertas e crescimento.",
    ean: "7891000100444",
    productCode: "20490"
  }
];
var vitaminasSuplementosExpandidos = [
  {
    id: 2050,
    name: "Addera D3 7.000 UI Vitamina D Colecalciferol 4 C\xE1psulas",
    activeIngredient: "Colecalciferol",
    size: "4 C\xE1psulas Gelatinosas",
    brand: "Addera",
    category: "Vida Saud\xE1vel",
    subcategory: "Vitaminas",
    oldPrice: 52.9,
    price: 44.9,
    discount: 15,
    rating: 4.9,
    reviews: 380,
    image: "/products/addera_d3_real.jpg",
    bullets: [
      "Colecalciferol 7.000 UI em c\xE1psulas gelatinosas moles de dose \xFAnica semanal.",
      "Auxilia na forma\xE7\xE3o e manuten\xE7\xE3o de ossos e dentes fortes.",
      "Fortalece o sistema imune e a fun\xE7\xE3o muscular."
    ],
    description: "Addera D3 \xE9 o suplemento de vitamina D mais receitado pelos m\xE9dicos no Brasil, essencial para a absor\xE7\xE3o eficiente de c\xE1lcio e f\xF3sforo no organismo.",
    composition: "Colecalciferol 7.000 UI por c\xE1psula.",
    ean: "7896094917307",
    productCode: "2050"
  }
];
var higieneBucalCabelosExpandidos = [
  {
    id: 2061,
    name: "Creme Dental Sensodyne Limpeza Profunda A\xE7\xE3o Desensibilizante 90g",
    size: "90g",
    brand: "Sensodyne",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    oldPrice: 26.9,
    price: 21.9,
    discount: 19,
    rating: 4.9,
    reviews: 310,
    image: "/products/sensodyne_repair_protect_100g.jpg",
    bullets: [
      "Tecnologia de espuma ativa que alcan\xE7a as \xE1reas interdentais dif\xEDceis.",
      "Prote\xE7\xE3o clinicamente comprovada contra a sensibilidade nos dentes.",
      "Sensa\xE7\xE3o refrescante de limpeza profissional prolongada com hortel\xE3."
    ],
    description: "Sensodyne Limpeza Profunda atua no interior do dente aliviando os est\xEDmulos dolorosos causados por alimentos gelados, quentes ou \xE1cidos.",
    ean: "7896015525413",
    productCode: "2061"
  },
  {
    id: 2062,
    name: "Escova Dental Curaprox CS 5460 Ultra Soft Trio (3 Unidades)",
    size: "3un (Trio)",
    brand: "Curaprox",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    oldPrice: 104.9,
    price: 89.9,
    discount: 14,
    rating: 5,
    reviews: 620,
    image: "/products/curaprox_cs5460_individual.jpg",
    bullets: [
      "5.460 cerdas ultrafinas de Curen\xAE patenteadas que n\xE3o machucam as gengivas.",
      "Remove a placa bacteriana com suavidade inigual\xE1vel e m\xE1xima efici\xEAncia.",
      "Cabo octogonal ergon\xF4mico que orienta o \xE2ngulo correto de escova\xE7\xE3o a 45\xB0."
    ],
    description: "A consagrada escova su\xED\xE7a Curaprox CS 5460 proporciona a mais suave e eficiente higiene bucal do mundo, sem desgastar o esmalte nem retrair a gengiva.",
    ean: "7612412422008",
    productCode: "2062"
  },
  {
    id: 2064,
    name: "Desodorante Antitranspirante Dove Original Aerossol 150ml (Kit Leve 2)",
    size: "2x150ml (Kit)",
    brand: "Dove",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    oldPrice: 35.9,
    price: 29.9,
    discount: 17,
    rating: 4.9,
    reviews: 380,
    image: "/products/dove_original_90g.webp",
    bullets: [
      "1/4 de creme hidratante com \xF3leo protetor para axilas macias e suaves.",
      "48 horas de prote\xE7\xE3o eficaz contra suor e maus odores.",
      "0% \xE1lcool et\xEDlico que ajuda a recuperar a pele ap\xF3s a depila\xE7\xE3o."
    ],
    description: "Dove Original aerossol oferece 48h de prote\xE7\xE3o antitranspirante com cuidado incompar\xE1vel para as axilas, mantendo a pele seca e hidratada.",
    ean: "7891150041239",
    productCode: "2064"
  },
  {
    id: 2066,
    name: "Desodorante Antitranspirante Rexona Clinical Men Clean Roll-On 48g",
    size: "48g",
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    oldPrice: 38.9,
    price: 31.9,
    discount: 18,
    rating: 4.9,
    reviews: 330,
    image: "/products/rexona_clinical_classic_feminino.webp",
    bullets: [
      "Prote\xE7\xE3o cl\xEDnica contra transpira\xE7\xE3o excessiva por at\xE9 96 horas.",
      "Tecnologia Defense+ que cria uma barreira contra o suor e o odor.",
      "Dermatologicamente testado e seguro para uso di\xE1rio."
    ],
    description: "Rexona Clinical combina 3x mais prote\xE7\xE3o contra a transpira\xE7\xE3o intensa com cuidado suave para a pele das axilas.",
    ean: "7891150041246",
    productCode: "2066"
  },
  {
    id: 2073,
    name: "\xD3leo Capilar Wella Professionals Oil Reflections Luminous Reflective 100ml",
    size: "100ml",
    brand: "Wella Professionals",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    oldPrice: 159.9,
    price: 139.9,
    discount: 13,
    rating: 5,
    reviews: 540,
    image: "/products/wella_oil_reflections_100ml.jpg",
    bullets: [
      "\xD3leos de Cam\xE9lia e Ch\xE1 Branco que conferem luminosidade e maciez sem pesar.",
      "A\xE7\xE3o protetora t\xE9rmica e controle duradouro do frizz.",
      "Fragr\xE2ncia luxuosa de perfumaria fina."
    ],
    description: "Oil Reflections \xE9 o \xF3leo capilar ic\xF4nico da Wella que nutre, protege e d\xE1 um brilho radiante com efeito espelhado para todos os tipos de cabelo.",
    ean: "8005610534298",
    productCode: "2073"
  }
];
var saudeEquipamentosExpandidos = [
  {
    id: 2078,
    name: "Curativo Band-Aid Transparente Johnson's 40 Unidades",
    size: "40un",
    brand: "Band-Aid",
    category: "Medicamentos",
    subcategory: "Primeiros Socorros",
    oldPrice: 22.9,
    price: 18.9,
    discount: 17,
    rating: 4.8,
    reviews: 185,
    image: "/products/curativo_bandaid.jpg",
    bullets: [
      "Tiras transparentes que se camuflam com o tom da pele.",
      "Almofada central que n\xE3o gruda no ferimento facilitando a remo\xE7\xE3o sem dor.",
      "Furos microsc\xF3picos que deixam a ferida respirar acelerando a cicatriza\xE7\xE3o."
    ],
    description: "Curativos adesivos Band-Aid Transparentes protegem pequenos cortes, arranh\xF5es e bolhas contra germes e sujeira com m\xE1xima discri\xE7\xE3o.",
    ean: "7891030005696",
    productCode: "2078"
  },
  {
    id: 2083,
    name: "Fita Microporosa Hipoalerg\xEAnica Needs Branca 25mm x 4,5m",
    size: "25mm x 4,5m",
    brand: "Needs",
    category: "Medicamentos",
    subcategory: "Primeiros Socorros",
    oldPrice: 14.5,
    price: 11.9,
    discount: 18,
    image: "/products/nexcare_micropore_branca.jpg",
    badges: ["Exclusivo Droga Raia", "Hipoalerg\xEAnica"],
    bullets: [
      "Fita microporosa que permite a respira\xE7\xE3o da pele sem causar irrita\xE7\xE3o.",
      "Remo\xE7\xE3o indolor sem puxar os pelos ou agredir a epiderme.",
      "Fixa\xE7\xE3o segura de gazes, curativos e sondas."
    ],
    description: "A fita microporosa Needs \xE9 ideal para peles sens\xEDveis de crian\xE7as e idosos, garantindo ades\xE3o segura e respir\xE1vel para curativos.",
    ean: "7891066009934",
    productCode: "2083"
  }
];
var todosProdutosExpandidos = [
  ...medicamentosExpandidos,
  ...dermocosmeticosExpandidos,
  ...bebeInfantilExpandidos,
  ...vitaminasSuplementosExpandidos,
  ...higieneBucalCabelosExpandidos,
  ...saudeEquipamentosExpandidos
];

// src/data/novosProdutosCatalogo.ts
var novosProdutosCatalogo = [
  {
    id: 77001,
    name: "Xerjoff Erba Pura Eau de Parfum Unissex-100 Ml",
    brand: "Xerjoff",
    size: "100ml",
    oldPrice: 1539,
    price: 1077.3,
    discount: 30,
    rating: 5,
    reviews: 142,
    image: "/products/xerjoff_erba_pura.jpg",
    badges: ["30% OFF", "Nicho", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Importados",
    bullets: [
      "Fragr\xE2ncia unissex de nicho italiana com assinatura olfativa inconfund\xEDvel.",
      "Notas de topo: Laranja Siciliana, Bergamota da Cal\xE1bria e Lim\xE3o Siciliano.",
      "Notas de cora\xE7\xE3o: Cesto de frutas mediterr\xE2neas suculentas.",
      "Notas de fundo: Alm\xEDscar branco, Baunilha de Madagascar e \xC2mbar quente com fixa\xE7\xE3o extrema."
    ],
    description: "Erba Pura da Xerjoff \xE9 uma composi\xE7\xE3o sedutora e moderna que combina notas c\xEDtricas mediterr\xE2neas com um buqu\xEA frutado aveludado e uma base quente e sensual de baunilha e alm\xEDscar.",
    howToUse: "Borrife o perfume a cerca de 15 cm da pele, preferencialmente nas \xE1reas de maior pulsa\xE7\xE3o como pulsos, pesco\xE7o e dobras dos cotovelos.",
    composition: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol.",
    warnings: [
      "Uso externo.",
      "N\xE3o ingerir.",
      "Inflam\xE1vel: manter longe do fogo e fontes de calor.",
      "Evitar contato com os olhos.",
      "Manter fora do alcance de crian\xE7as."
    ],
    productCode: "77001",
    ean: "8033488155255"
  },
  {
    id: 77002,
    name: "Armaf Club de Nuit Intense Eau de Toilette 105ml",
    brand: "Armaf",
    size: "105ml",
    oldPrice: 279.9,
    price: 195.93,
    discount: 30,
    rating: 4.9,
    reviews: 310,
    image: "/products/armaf_club_de_nuit.jpg",
    badges: ["30% OFF", "Best Seller", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Um dos perfumes masculinos mais aclamados e elogiados do mundo.",
      "Notas de topo: Lim\xE3o, Abacaxi, Groselha Preta, Bergamota e Ma\xE7\xE3.",
      "Notas de cora\xE7\xE3o: Vidoeiro, Jasmim e Rosa para uma aura esfumada sofisticada.",
      "Notas de fundo: Alm\xEDscar, \xC2mbar Cinzento, Patchouli e Baunilha com proje\xE7\xE3o marcante."
    ],
    description: "Club de Nuit Intense Man da Armaf \xE9 uma fragr\xE2ncia amadeirada especiada envolvente e magn\xE9tica, perfeita para noites e eventos em que voc\xEA deseja marcar presen\xE7a inesquec\xEDvel.",
    howToUse: "Borrife sobre a pele limpa e seca nas regi\xF5es de maior pulsa\xE7\xE3o como pesco\xE7o, nuca e pulsos.",
    composition: "Alcohol Denat., Parfum, Aqua, Limonene, Linalool, Citronellol, Coumarin, Geraniol.",
    warnings: [
      "Uso externo.",
      "Inflam\xE1vel.",
      "Evitar contato com os olhos e mucosas.",
      "Manter fora do alcance de crian\xE7as."
    ],
    productCode: "77002",
    ean: "6294015114171"
  },
  {
    id: 77003,
    name: "Perfume Eternity For Women Edp Feminino 100ml Calvin Klein",
    brand: "Calvin Klein",
    size: "100ml",
    oldPrice: 515.94,
    price: 361.16,
    discount: 30,
    rating: 4.9,
    reviews: 218,
    image: "/products/eternity_women_ck.jpg",
    badges: ["30% OFF", "Cl\xE1ssico", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Femininos",
    bullets: [
      "Cl\xE1ssico atemporal da perfumaria mundial, celebrando o amor eterno e a feminilidade.",
      "Notas de topo: Fr\xE9sia, S\xE1lvia, Mandarina e Notas Verdes frescas.",
      "Notas de cora\xE7\xE3o: L\xEDrio-do-vale, L\xEDrio Branco, Cravo, Violeta, Rosa e Jasmim.",
      "Notas de fundo: Alm\xEDscar, Heliotr\xF3pio, S\xE2ndalo e Patchouli."
    ],
    description: "Eternity for Women de Calvin Klein \xE9 um buqu\xEA floral branco elegante e harmonioso, inspirado no romance duradouro e na sofistica\xE7\xE3o feminina.",
    howToUse: "Aplique nas \xE1reas quentes do corpo como nuca, pulsos e atr\xE1s das orelhas.",
    composition: "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Benzyl Salicylate, Citronellol.",
    warnings: [
      "Uso externo.",
      "N\xE3o aplicar sobre a pele irritada ou lesionada.",
      "Manter longe de chamas."
    ],
    productCode: "77003",
    ean: "088300101405"
  },
  {
    id: 77004,
    name: "Perfume Noa Feminino Eau de Toilette - Cacharel 100ml",
    brand: "Cacharel",
    size: "100ml",
    oldPrice: 686.33,
    price: 480.43,
    discount: 30,
    rating: 4.8,
    reviews: 165,
    image: "/products/cacharel_noa.jpg",
    badges: ["30% OFF", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Femininos",
    bullets: [
      "Frasco ic\xF4nico esf\xE9rico com uma p\xE9rola reluzente em seu interior.",
      "Aroma floral amadeirado almiscarado com sensa\xE7\xE3o de serenidade e paz interior.",
      "Notas de topo: Alm\xEDscar Branco, Pe\xF4nia, Fr\xE9sia e P\xEAssego.",
      "Notas de cora\xE7\xE3o: L\xEDrio-do-vale, Caf\xE9, Grama verde, Ylang Ylang e Jasmim."
    ],
    description: "Noa de Cacharel \xE9 uma fragr\xE2ncia luminosa e reconfortante, que traduz leveza espiritual e delicadeza com sua harmoniosa nota de alm\xEDscar branco e caf\xE9 sutil.",
    howToUse: "Borrife a fragr\xE2ncia suavemente pelo corpo para uma sensa\xE7\xE3o de frescor e bem-estar o dia todo.",
    composition: "Alcohol, Aqua/Water, Parfum/Fragrance, Hydroxycitronellal, Alpha-Isomethyl Ionone.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Mantenha fora do alcance de crian\xE7as."],
    productCode: "77004",
    ean: "3360373016358"
  },
  {
    id: 77005,
    name: "Perfume Stronger With You Intensely Giorgio Armani Masculino Eau de Parfum 100ml",
    brand: "Giorgio Armani",
    size: "100ml",
    oldPrice: 799,
    price: 559.3,
    discount: 30,
    rating: 5,
    reviews: 289,
    image: "/products/stronger_with_you.jpg",
    badges: ["30% OFF", "Em Alta", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Fragr\xE2ncia oriental foug\xE8re intensamente viciante e apaixonante.",
      "Notas de topo: Pimenta Rosa, Jun\xEDpero e Violeta.",
      "Notas de cora\xE7\xE3o: Caramelo Toffee, Canela, Lavanda e S\xE1lvia.",
      "Notas de fundo: Baunilha Bourbon, Fava Tonka, \xC2mbar e Camur\xE7a."
    ],
    description: "Stronger With You Intensely de Giorgio Armani celebra o amor contempor\xE2neo com acordes quentes de caramelo, especiarias e baunilha encorpada de fixa\xE7\xE3o arrasadora.",
    howToUse: "Borrife em \xE1reas de pulsa\xE7\xE3o arterial para melhor difus\xE3o ao longo do dia.",
    composition: "Alcohol, Parfum/Fragrance, Aqua/Water, Coumarin, Linalool, Limonene.",
    warnings: ["Uso externo.", "Inflam\xE1vel at\xE9 secar.", "Manter afastado de chamas."],
    productCode: "77005",
    ean: "3614272225718"
  },
  {
    id: 77006,
    name: "Paco Rabanne One Million Eau de Toilette - Perfume Masculino 200ml",
    brand: "Paco Rabanne",
    size: "200ml",
    oldPrice: 1137,
    price: 795.9,
    discount: 30,
    rating: 4.9,
    reviews: 540,
    image: "/products/one_million_paco.jpg",
    badges: ["30% OFF", "Best Seller", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Frasco ic\xF4nico em formato de barra de ouro com volume generoso de 200ml.",
      "Fragr\xE2ncia amadeirada especiada e sedutora com rastro irresist\xEDvel.",
      "Notas de topo: Mandarina Sangu\xEDnea, Hortel\xE3-Pimenta e Toranja.",
      "Notas de cora\xE7\xE3o: Canela, Rosa Absoluta e Especiarias finas.",
      "Notas de fundo: Couro macio, \xC2mbar Ketal e Patchouli indiano."
    ],
    description: "1 Million de Paco Rabanne \xE9 o perfume de quem ousa viver seus sonhos dourados com intensidade e carisma sem limites.",
    howToUse: "Aplique nos pulsos e no pesco\xE7o para deixar um rastro marcante e duradouro.",
    composition: "Alcohol Denat., Parfum, Aqua, Coumarin, Limonene, Hydroxycitronellal, Linalool.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Manter longe do calor e do fogo."],
    productCode: "77006",
    ean: "3349668566372"
  },
  {
    id: 77007,
    name: "Absolu Aventus Eau de Parfum Masculino -100 Ml",
    brand: "Creed",
    size: "100ml",
    oldPrice: 4479,
    price: 3135.3,
    discount: 30,
    rating: 5,
    reviews: 96,
    image: "/products/absolu_aventus.jpg",
    badges: ["30% OFF", "Alta Perfumaria", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Importados",
    bullets: [
      "Edi\xE7\xE3o exclusiva e limitada da nobre casa de perfumes Creed.",
      "Reinterpreta\xE7\xE3o mais rica, esfumada e complexa do lend\xE1rio Aventus.",
      "Notas de topo: Bergamota, Groselha Preta, Toranja e Cardamomo.",
      "Notas de cora\xE7\xE3o: Gengibre, Canela, Patchouli e Pimenta Rosa.",
      "Notas de fundo: Vetiver do Haiti, Madeira de Carvalho, Alm\xEDscar e Ambroxan."
    ],
    description: "Absolu Aventus da Creed \xE9 uma obra-prima refinada e exclusiva para apreciadores da mais alta perfumaria art\xEDstica internacional.",
    howToUse: "Aplique pequenas borrifadas nos pontos de pulsa\xE7\xE3o para apreciar a evolu\xE7\xE3o magistral de suas notas.",
    composition: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Citronellol.",
    warnings: ["Uso externo.", "Produto inflam\xE1vel.", "Evitar exposi\xE7\xE3o \xE0 luz solar direta."],
    productCode: "77007",
    ean: "3508440004352"
  },
  {
    id: 77008,
    name: "Booster Lacoste Eau de Toilette Masculino-125 Ml",
    brand: "Lacoste",
    size: "125ml",
    oldPrice: 319,
    price: 223.3,
    discount: 30,
    rating: 4.8,
    reviews: 147,
    image: "/products/lacoste_booster.jpg",
    badges: ["30% OFF", "Refrescante", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Fragr\xE2ncia arom\xE1tica c\xEDtrica en\xE9rgica que desperta a vitalidade masculina.",
      "Notas de topo: Hortel\xE3-Pimenta, Eucalipto, Toranja e Laranja.",
      "Notas de cora\xE7\xE3o: Lavanda, Manjeric\xE3o, Pimenta e Noz-moscada.",
      "Notas de fundo: Vetiver, Cedro e S\xE2ndalo para sustenta\xE7\xE3o limpa e esportiva."
    ],
    description: "Lacoste Booster \xE9 a fragr\xE2ncia ideal para o homem din\xE2mico e focado que busca frescor estimulante e eleg\xE2ncia casual esportiva no dia a dia.",
    howToUse: "Borrife generosamente ap\xF3s o banho ou atividades esportivas para renovar a energia e frescor.",
    composition: "Alcohol Denat., Aqua/Water, Parfum/Fragrance, Limonene, Linalool, Citral.",
    warnings: ["Uso externo.", "N\xE3o vaporizar perto de chamas."],
    productCode: "77008",
    ean: "3616302931897"
  },
  {
    id: 77009,
    name: "Fierce Abercrombie Cologne Masculino-100 Ml",
    brand: "Abercrombie & Fitch",
    size: "100ml",
    oldPrice: 629,
    price: 440.3,
    discount: 30,
    rating: 4.9,
    reviews: 382,
    image: "/products/abercrombie_fierce.jpg",
    badges: ["30% OFF", "\xCDcone Mundial", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "O lend\xE1rio aroma assinatura das lojas Abercrombie & Fitch ao redor do globo.",
      "Fragr\xE2ncia amadeirada arom\xE1tica jovem, atl\xE9tica e magn\xE9tica.",
      "Notas de topo: Petitgrain, Cardamomo, Lim\xE3o, Laranja e Abeto.",
      "Notas de cora\xE7\xE3o: Jasmim, Alecrim, Rosa e L\xEDrio-do-vale.",
      "Notas de fundo: Vetiver, Alm\xEDscar, Musgo de Carvalho e Pau-brasil."
    ],
    description: "Fierce de Abercrombie & Fitch \xE9 um dos perfumes masculinos mais reconhecidos do planeta, combinando frescor esportivo marinho com notas amadeiradas quentes e sedutoras.",
    howToUse: "Borrife nos pulsos e no peito para uma fixa\xE7\xE3o masculina de destaque imediato.",
    composition: "Alcohol Denat., Water (Aqua), Fragrance (Parfum), Limonene, Linalool.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Manter fora do alcance de crian\xE7as."],
    productCode: "77009",
    ean: "085715169587"
  },
  {
    id: 77010,
    name: "Eternity Masculino Eau de Toilette - Calvin Klein 100ml",
    brand: "Calvin Klein",
    size: "100ml",
    oldPrice: 566.21,
    price: 396.35,
    discount: 30,
    rating: 4.9,
    reviews: 295,
    image: "/products/eternity_men_ck.jpg",
    badges: ["30% OFF", "Cl\xE1ssico", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Um dos grandes marcos da perfumaria masculina arom\xE1tica foug\xE8re.",
      "Equil\xEDbrio impec\xE1vel entre frescor herb\xE1ceo e sofistica\xE7\xE3o amadeirada.",
      "Notas de topo: Lavanda, Mandarina, Bergamota e Lim\xE3o.",
      "Notas de cora\xE7\xE3o: Coentro, L\xEDrio, Flor de Laranjeira, Bagas de Zimbro e Manjeric\xE3o.",
      "Notas de fundo: S\xE2ndalo, \xC2mbar, Alm\xEDscar, Vetiver e Jacarand\xE1."
    ],
    description: "Eternity for Men de Calvin Klein traduz a sensibilidade e a determina\xE7\xE3o do homem cl\xE1ssico em uma fragr\xE2ncia fresca, acolhedora e atemporal.",
    howToUse: "Aplique nos pontos de pulso ap\xF3s o barbear ou banho para frescor prolongado.",
    composition: "Alcohol Denat., Aqua/Water, Parfum/Fragrance, Linalool, Limonene, Geraniol.",
    warnings: ["Uso externo.", "Inflam\xE1vel."],
    productCode: "77010",
    ean: "088300105519"
  },
  {
    id: 77011,
    name: "Starwalker Montblanc Eau de Toilette Masculino-75 Ml",
    brand: "Montblanc",
    size: "75ml",
    oldPrice: 319,
    price: 223.3,
    discount: 30,
    rating: 4.8,
    reviews: 188,
    image: "/products/montblanc_starwalker.jpg",
    badges: ["30% OFF", "Elegante", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Inspirado na inova\xE7\xE3o e no homem moderno vision\xE1rio que constr\xF3i seu pr\xF3prio futuro.",
      "Fragr\xE2ncia amadeirada especiada l\xEDmpida e refinada.",
      "Notas de topo: Mandarina, Bambu e Bergamota.",
      "Notas de cora\xE7\xE3o: S\xE2ndalo, Cedro e Alm\xEDscar Branco.",
      "Notas de fundo: Gengibre, Resina de Abeto, Noz-moscada e \xC2mbar."
    ],
    description: "Starwalker da Montblanc \xE9 uma experi\xEAncia olfativa revigorante com acordes de bambu e gengibre, transmitindo magnetismo sereno e extrema sofistica\xE7\xE3o.",
    howToUse: "Borrife nos pulsos e base do pesco\xE7o para eleg\xE2ncia discreta e duradoura no ambiente de trabalho.",
    composition: "Alcohol Denat., Parfum, Aqua, Limonene, Linalool, Butylphenyl Methylpropional.",
    warnings: ["Uso externo.", "Evitar contato com os olhos."],
    productCode: "77011",
    ean: "3386460028462"
  },
  {
    id: 77012,
    name: "Lattafa Yara Eau de Parfum - Perfume Feminino 100Ml",
    brand: "Lattafa",
    size: "100ml",
    oldPrice: 210.9,
    price: 147.63,
    discount: 30,
    rating: 4.9,
    reviews: 430,
    image: "/products/lattafa_yara.jpg",
    badges: ["30% OFF", "Viral", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Femininos",
    bullets: [
      "Fragr\xE2ncia \xE1rabe oriental gourmand que se tornou sensa\xE7\xE3o global.",
      "Aroma doce, cremoso e envolvente com nuances de morango com chantilly.",
      "Notas de topo: Orqu\xEDdea, Heliotr\xF3pio e Tangerina.",
      "Notas de cora\xE7\xE3o: Acorde Gourmand e Frutas Tropicais.",
      "Notas de fundo: Baunilha, Alm\xEDscar e S\xE2ndalo."
    ],
    description: "Yara de Lattafa \xE9 um perfume \xE1rabe feminino delicadamente adocicado e cremoso, proporcionando uma aura encantadora de feminilidade e eleg\xE2ncia.",
    howToUse: "Borrife suavemente no pesco\xE7o, pulsos e roupas para uma proje\xE7\xE3o aveludada e doce.",
    composition: "Alcohol Denat., Parfum, Aqua, Benzyl Salicylate, Coumarin, Limonene.",
    warnings: ["Uso externo.", "N\xE3o ingerir.", "Manter em local fresco ao abrigo da luz."],
    productCode: "77012",
    ean: "6291108730515"
  },
  {
    id: 77013,
    name: "Perfume Lattafa Asad Masculino Eau de Parfum 100ml",
    brand: "Lattafa",
    size: "100ml",
    oldPrice: 530.33,
    price: 371.23,
    discount: 30,
    rating: 4.9,
    reviews: 275,
    image: "/products/lattafa_asad.jpg",
    badges: ["30% OFF", "Best Seller", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Fragr\xE2ncia \xE1rabe masculina potente com proje\xE7\xE3o imponente.",
      "Notas de topo: Pimenta Preta, Tabaco e Abacaxi suculento.",
      "Notas de cora\xE7\xE3o: Patchouli, Caf\xE9 escuro e \xCDris sofisticada.",
      "Notas de fundo: Baunilha Bourbon, \xC2mbar, Madeira Seca e Benjoim."
    ],
    description: "Asad de Lattafa \xE9 uma cria\xE7\xE3o oriental especiada intensa e luxuosa para homens com personalidade marcante e bom gosto incontest\xE1vel.",
    howToUse: "Borrife de 2 a 3 vezes nas regi\xF5es quentes do corpo para proje\xE7\xE3o marcante por horas.",
    composition: "Alcohol Denat., Parfum, Aqua, Linalool, Limonene, Coumarin, Eugenol.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Manter fora do alcance de crian\xE7as."],
    productCode: "77013",
    ean: "6291108735411"
  },
  {
    id: 77014,
    name: "Fakhar Lattafa Eau de Parfum Masculino -100 Ml",
    brand: "Lattafa",
    size: "100ml",
    oldPrice: 229,
    price: 160.3,
    discount: 30,
    rating: 4.8,
    reviews: 198,
    image: "/products/fakhar_lattafa.jpg",
    badges: ["30% OFF", "Sucesso \xC1rabe", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "Frasco suntuoso em prata e preto com emblema \xE1rabe nobre.",
      "Fragr\xE2ncia ambarada foug\xE8re fresca e moderna de alta versatilidade.",
      "Notas de topo: Ma\xE7\xE3 verde, Bergamota e Gengibre fresco.",
      "Notas de cora\xE7\xE3o: Lavanda, S\xE1lvia, Bagas de Zimbro e Ger\xE2nio.",
      "Notas de fundo: Fava Tonka, Madeira de \xC2mbar, Cedro e Vetiver."
    ],
    description: "Fakhar Black de Lattafa entrega uma assinatura arom\xE1tica fresca, sofisticada e envolvente, perfeita para qualquer ocasi\xE3o e clima.",
    howToUse: "Aplique nas \xE1reas do pesco\xE7o e t\xF3rax para aproveitar o frescor duradouro ao longo de todo o dia.",
    composition: "Alcohol Denat., Parfum, Aqua, Alpha-Isomethyl Ionone, Limonene, Linalool.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Evitar contato com os olhos."],
    productCode: "77014",
    ean: "6291107456058"
  },
  {
    id: 77015,
    name: "Pasta Angel Mugler Hidratante Corporal Unissex-200 Ml",
    brand: "Mugler",
    size: "200ml",
    oldPrice: 1079,
    price: 755.3,
    discount: 30,
    rating: 5,
    reviews: 112,
    image: "/products/mugler_angel_pasta.jpg",
    badges: ["30% OFF", "Luxo Absoluto", "Importado"],
    category: "Perfumaria",
    subcategory: "Hidratantes e Cuidados Corporais",
    bullets: [
      "Creme corporal com textura aveludada e ultra-hidratante com fragr\xE2ncia Angel original.",
      "F\xF3rmula enriquecida com o complexo patenteado IDS (Intense Diffusion System).",
      "Perfuma intensamente a pele ao longo de todo o dia com notas gourmand.",
      "Notas de Patchouli, Pralin\xEA, Caramelo, Baunilha e Frutas Vermelhas."
    ],
    description: "A Pasta Corporal Perfumada Angel de Mugler nutre profundamente a pele enquanto a envolve no ic\xF4nico e inebriante rastro de Angel.",
    howToUse: "Aplique suavemente por todo o corpo sobre a pele limpa, massageando at\xE9 completa absor\xE7\xE3o para hidrata\xE7\xE3o e perfuma\xE7\xE3o intensiva.",
    composition: "Aqua/Water, Glycerin, Caprylic/Capric Triglyceride, Parfum/Fragrance, Shea Butter, Coumarin, Limonene.",
    warnings: ["Uso externo.", "N\xE3o ingerir.", "Em caso de irrita\xE7\xE3o, suspenda o uso."],
    productCode: "77015",
    ean: "3439600056730"
  },
  {
    id: 77016,
    name: "Bleu de Chanel Eau de Toilette Masculino-100 Ml",
    brand: "Chanel",
    size: "100ml",
    oldPrice: 1009,
    price: 706.3,
    discount: 30,
    rating: 5,
    reviews: 680,
    image: "/products/bleu_de_chanel.jpg",
    badges: ["30% OFF", "Obra-Prima", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Masculinos",
    bullets: [
      "O elogio \xE0 liberdade masculina em uma composi\xE7\xE3o arom\xE1tica amadeirada inigual\xE1vel.",
      "Frasco de vidro azul marinho profundo quase negro com tampa magn\xE9tica ic\xF4nica.",
      "Notas de topo: Toranja, Lim\xE3o, Hortel\xE3 e Pimenta Rosa.",
      "Notas de cora\xE7\xE3o: Gengibre, Noz-moscada, Jasmim e Iso E Super.",
      "Notas de fundo: Incenso, Vetiver, Cedro, S\xE2ndalo, Patchouli e L\xE1dano."
    ],
    description: "Bleu de Chanel \xE9 a ess\xEAncia do homem determinado e sofisticado que dita suas pr\xF3prias regras, emanando um rastro magn\xE9tico e elegante.",
    howToUse: "Borrife diretamente na pele ou no interior das roupas para uma presen\xE7a marcante e atemporal.",
    composition: "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol, Coumarin.",
    warnings: ["Uso externo.", "Inflam\xE1vel at\xE9 secar.", "Manter longe do calor."],
    productCode: "77016",
    ean: "3145891074604"
  },
  {
    id: 77017,
    name: "Erba Gold Xerjoff Eau de Parfum Unissex-100 Ml",
    brand: "Xerjoff",
    size: "100ml",
    oldPrice: 2039,
    price: 1427.3,
    discount: 30,
    rating: 5,
    reviews: 89,
    image: "/products/xerjoff_erba_gold.jpg",
    badges: ["30% OFF", "Alta Joalheria", "Importado"],
    category: "Perfumaria",
    subcategory: "Perfumes Importados",
    bullets: [
      "A nova e aclamada evolu\xE7\xE3o dourada da linha V da prestigiada casa italiana Xerjoff.",
      "Apresentado em frasco suntuoso amarelo e dourado com len\xE7o de seda italiana exclusivo.",
      "Notas de topo: Lim\xE3o de Amalfi, Laranja Brasileira, Bergamota da Cal\xE1bria e Gengibre.",
      "Notas de cora\xE7\xE3o: Mel\xE3o Cantaloupe, P\xEAra, Cravo-da-\xEDndia, Cardamomo da Guatemala e Canela.",
      "Notas de fundo: Alm\xEDscar Branco, \xC2mbar, Baunilha de Madagascar e Notas Amadeiradas."
    ],
    description: "Erba Gold de Xerjoff \xE9 uma joia radiante da perfumaria de nicho, combinando especiarias quentes refinadas a frutas solares mediterr\xE2neas para uma assinatura inebriante.",
    howToUse: "Aplique com toques suaves nos pontos pulsantes como pulsos e pesco\xE7o para desfrutar da opul\xEAncia dourada de sua pir\xE2mide olfativa.",
    composition: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol, Eugenol.",
    warnings: ["Uso externo.", "Inflam\xE1vel.", "Manter em local fresco ao abrigo da luz solar."],
    productCode: "77017",
    ean: "8054320902522"
  }
];

// src/data/products.ts
function isCosmeticOrPersonalCare(product) {
  if (!product) return false;
  const category = (product.category || "").toLowerCase();
  const subcategory = (product.subcategory || "").toLowerCase();
  const name = (product.name || "").toLowerCase();
  if (category.includes("medicamento") || category.includes("rem\xE9dio") || category.includes("remedio") || category.includes("farm\xE1cia") || category.includes("farmacia") || subcategory.includes("dor e febre") || subcategory.includes("dores abdominais") || subcategory.includes("dores musculares") || subcategory.startsWith("dores") || subcategory.includes(" dores") || subcategory.includes("anti-tabagismo") || subcategory.includes("digest\xE3o") || subcategory.includes("digestao") || subcategory.includes("gen\xE9rico") || subcategory.includes("generico") || subcategory.includes("col\xEDrio") || subcategory.includes("colirio") || subcategory.includes("monitor") || subcategory.includes("teste") || subcategory.includes("rem\xE9dio") || subcategory.includes("remedio") || subcategory.includes("primeiros socorros") || subcategory.includes("diabetes") || subcategory.includes("glicemia") || subcategory.includes("press\xE3o") || subcategory.includes("pressao") || subcategory.includes("oftalmo")) {
    return false;
  }
  const pharmaKeywords = [
    "dipirona",
    "novalgina",
    "buscopan",
    "nicorette",
    "enterogermina",
    "hyabak",
    "col\xEDrio",
    "colirio",
    "freestyle libre",
    "paracetamol",
    "ibuprofeno",
    "dorflex",
    "neosaldina",
    "medicamento",
    "rem\xE9dio",
    "remedio",
    "antibi\xF3tico",
    "antibiotico",
    "anti-inflamat\xF3rio",
    "anti-inflamatorio",
    "minoxidil",
    "fumagum",
    "aspirina",
    "benegrip",
    "cimegripe",
    "coristina",
    "deocil",
    "tilenol",
    "tylenol",
    "nimesulida",
    "doril",
    "torsilax",
    "cataflam",
    "voltaren",
    "anador",
    "luftal",
    "simeticona",
    "anti\xE1cido",
    "antiacido",
    "epocler",
    "estomazil",
    "eno",
    "sal de fruta",
    "losartana",
    "atenolol",
    "omeprazol",
    "pantoprazol",
    "amoxicilina",
    "azitromicina",
    "antial\xE9rgico",
    "antialergico",
    "allegra",
    "loratadina",
    "desloratadina",
    "cetirizina",
    "claritin",
    "sorine",
    "rinosoro",
    "neosoro",
    "narix",
    "flanax",
    "advil",
    "alivium",
    "atroveran",
    "butilbrometo",
    "escopolamina",
    "doralgina",
    "vick",
    "strepsils",
    "spray para garganta",
    "pastilha para garganta"
  ];
  if (pharmaKeywords.some((keyword) => name.includes(keyword))) {
    return false;
  }
  if (category.includes("dermocosm") || category.includes("beleza") || category.includes("higiene") || category.includes("cabelo") || category.includes("perfum") || category.includes("mam\xE3e") || category.includes("mamae") || category.includes("beb\xEA") || category.includes("bebe") || subcategory.includes("cabelo") || subcategory.includes("hidratante") || subcategory.includes("acne") || subcategory.includes("s\xE9rum") || subcategory.includes("serum") || subcategory.includes("rosto") || subcategory.includes("pele") || subcategory.includes("barba") || subcategory.includes("solar") || subcategory.includes("desodorante") || subcategory.includes("fralda") || subcategory.includes("higiene do beb\xEA") || subcategory.includes("higiene do bebe") || subcategory.includes("absorvente") || subcategory.includes("bucal") || subcategory.includes("intimo") || subcategory.includes("\xEDntimo") || subcategory.includes("finalizador")) {
    return true;
  }
  const cosmeticKeywords = [
    "shampoo",
    "condicionador",
    "hidratante",
    "lo\xE7\xE3o",
    "locao",
    "creme",
    "s\xE9rum",
    "serum",
    "protetor solar",
    "demaquilante",
    "sabonete",
    "desodorante",
    "antitranspirante",
    "fralda",
    "len\xE7o",
    "lenco",
    "absorvente",
    "intimus",
    "bioniq",
    "\xF3leo",
    "oleo",
    "t\xF4nico",
    "tonico",
    "ampola",
    "m\xE1scara",
    "mascara",
    "esfoliante",
    "gel de limpeza",
    "bepantol",
    "cerave",
    "eucerin",
    "azelan",
    "la roche",
    "vichy",
    "bioderma",
    "medicube",
    "skin1004",
    "cur\xE9l",
    "curel",
    "kerasys",
    "biore",
    "bior\xE9",
    "hada labo",
    "beauty of joseon",
    "cosrx",
    "pantene",
    "dove",
    "colgate",
    "dental",
    "flosser",
    "balm",
    "tratamento capilar",
    "booster",
    "trio",
    "mise en sc\xE8ne",
    "mise en scene",
    "retinol",
    "perfume",
    "eau de parfum",
    "eau de toilette",
    "cologne",
    "fragr\xE2ncia",
    "fragrancia",
    "xerjoff",
    "armaf",
    "lattafa",
    "creed",
    "montblanc"
  ];
  return cosmeticKeywords.some((keyword) => name.includes(keyword));
}
var viterganZincoProduct = {
  id: 140081,
  name: "Polivitam\xEDnico Vitergan Zinco PL 30 Comprimidos",
  size: "30 Comprimidos",
  brand: "Vitergan Zinco",
  category: "Vida Saud\xE1vel",
  subcategory: "Vitaminas",
  price: 119.9,
  oldPrice: 139.9,
  image: "/products/vitergan_zinco_30comp.jpg",
  bullets: [
    "Suplemento vitam\xEDnico e mineral com a\xE7\xE3o antioxidante.",
    "Combate os radicais livres que podem prejudicar o funcionamento dos \xF3rg\xE3os.",
    "Auxilia na prote\xE7\xE3o celular e no bem-estar geral."
  ],
  description: "O Vitergan Zinco Pl \xE9 um suplemento vitam\xEDnico e mineral antioxidante, composto por vitaminas e minerais que atuam contra radicais livres.",
  howToUse: "Tomar 1 comprimido ao dia com \xE1gua junto a uma das refei\xE7\xF5es principais.",
  composition: "Vitaminas A, C, E, Zinco Quelato e Minerais Antioxidantes.",
  warnings: [
    "N\xE3o exceder a recomenda\xE7\xE3o di\xE1ria de consumo indicada na embalagem.",
    "Este produto n\xE3o \xE9 um medicamento.",
    "Mantenha fora do alcance de crian\xE7as."
  ],
  productCode: "140081",
  ean: "7896226109350"
};
var flexoneProduct = {
  id: 912060,
  name: "Di-Magn\xE9sio Malato 500mg bwell 60 C\xE1psulas",
  size: "60 C\xE1psulas",
  brand: "bwell",
  category: "Vida Saud\xE1vel",
  subcategory: "Minerais",
  price: 64.9,
  oldPrice: 79.9,
  image: "/products/dimagnesio_malato_bwell.webp",
  bullets: [
    "Di-Magn\xE9sio Malato quelato com alta taxa de absor\xE7\xE3o.",
    "Auxilia no funcionamento muscular e no metabolismo energ\xE9tico.",
    "F\xF3rmula desenvolvida pela linha exclusiva bwell."
  ],
  description: "Suplemento mineral de Di-Magn\xE9sio Malato com alta biodisponibilidade para apoio muscular e energia no dia a dia.",
  howToUse: "Ingerir 2 c\xE1psulas ao dia com um copo de \xE1gua, preferencialmente antes das refei\xE7\xF5es.",
  composition: "Dimagn\xE9sio malato, antiumectante di\xF3xido de sil\xEDcio e c\xE1psula vegetal.",
  warnings: [
    "N\xE3o exceder a recomenda\xE7\xE3o di\xE1ria de consumo indicada na embalagem.",
    "Mantenha fora do alcance de crian\xE7as."
  ],
  productCode: "912060",
  ean: "7891058021111"
};
var mostBought = [
  {
    id: 11012,
    name: "Creme Multirreparador Calmante La Roche-Posay Cicaplast Baume B5+ 40ml",
    size: "40ml",
    brand: "La Roche-Posay",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto",
    oldPrice: 104.9,
    price: 79.9,
    discount: 24,
    rating: 5,
    reviews: 48,
    image: "/products/cicaplast_baume_b5.jpg",
    bullets: [
      "B\xE1lsamo multirreparador calmante para pele sensibilizada.",
      "Com Pantenol 5%, Madecassoside e complexo prebi\xF3tico Tribioma.",
      "Repara\xE7\xE3o acelerada da barreira cut\xE2nea.",
      "Adequado para beb\xEAs, crian\xE7as e adultos."
    ],
    description: "Cicaplast Baume B5+ da La Roche-Posay \xE9 um creme multirreparador calmante com f\xF3rmula inovadora que acelera a repara\xE7\xE3o da barreira cut\xE2nea desde o 1\xBA dia.",
    howToUse: "Aplique duas vezes ao dia na pele limpa e seca."
  },
  {
    id: 1007146,
    name: "Sensor de Monitoramento de Glicose FreeStyle Libre 2 Plus Sistema Flash",
    size: "1un",
    brand: "Freestyle Libre",
    category: "Medicamentos",
    subcategory: "Monitores e Testes",
    oldPrice: 329.9,
    price: 329.8,
    image: "/products/freestyle_libre_2.jpg",
    bullets: [
      "Sensor de monitoramento de glicose sistema flash.",
      "Mede os n\xEDveis de glicose continuamente dia e noite.",
      "Compat\xEDvel com o app FreeStyle LibreLink.",
      "Uso por at\xE9 15 dias com m\xE1xima precis\xE3o."
    ],
    description: "O sensor FreeStyle Libre 2 Plus mede continuamente a concentra\xE7\xE3o de glicose no l\xEDquido intersticial de pessoas com diabetes mellitus. F\xE1cil de aplicar e confort\xE1vel de usar.",
    howToUse: "Aplique o sensor na parte de tr\xE1s do bra\xE7o utilizando o aplicador descart\xE1vel. Escaneie com o leitor ou smartphone."
  },
  {
    id: 14951,
    name: "Col\xEDrio Hyabak 0,15% 10ml",
    size: "10ml",
    brand: "Hyabak",
    category: "Vida Saud\xE1vel",
    subcategory: "Col\xEDrios",
    oldPrice: 78.9,
    price: 74.5,
    discount: 6,
    image: "/products/hyabak_10ml.jpg",
    bullets: [
      "Solu\xE7\xE3o oft\xE1lmica lubrificante com hialuronato de s\xF3dio a 0,15%.",
      "Dispositivo ABAK que garante gotas est\xE9reis sem conservantes.",
      "Compat\xEDvel com todos os tipos de lentes de contato.",
      "Al\xEDvio imediato do desconforto ocular e olhos secos."
    ],
    description: "Gra\xE7as ao dispositivo ABAK, Hyabak permite fornecer gotas de solu\xE7\xE3o sem conservantes. Pode, assim, ser utilizado com qualquer tipo de lente de contato.",
    howToUse: "Instilar 1 gota em cada olho sempre que necess\xE1rio ao longo do dia."
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
      "Analg\xE9sico e antit\xE9rmico de r\xE1pida a\xE7\xE3o.",
      "Comprimidos de 1g de Dipirona Monoidratada.",
      "Al\xEDvio de dores intensas e controle de febre alta.",
      "Uso adulto e pedi\xE1trico acima de 15 anos."
    ],
    description: "Novalgina 1g \xE9 um medicamento \xE0 base de dipirona monoidratada, utilizado no tratamento de dor e febre. Seus efeitos come\xE7am entre 30 e 60 minutos ap\xF3s a administra\xE7\xE3o.",
    howToUse: "Tomar 1/2 a 1 comprimido com \xE1gua at\xE9 4 vezes ao dia."
  },
  {
    id: 11005,
    name: "Buscopan Composto Butilbrometo de Escopolamina 10mg + Dipirona S\xF3dica 250mg 20 comprimidos",
    size: "20 Comprimidos revestidos",
    brand: "Buscopan",
    category: "Medicamentos",
    subcategory: "Dores Abdominais",
    oldPrice: 29.49,
    price: 23.9,
    discount: 19,
    image: "/products/buscopan_composto_20comp.webp",
    bullets: [
      "A\xE7\xE3o dupla: antiespasm\xF3dica e analg\xE9sica.",
      "Combina\xE7\xE3o potente de Butilbrometo de Escopolamina 10mg e Dipirona 250mg.",
      "Al\xEDvio r\xE1pido de c\xF3licas estomacais e abdominais intensas.",
      "Comprimidos revestidos de f\xE1cil degluti\xE7\xE3o."
    ],
    description: "Buscopan Composto \xE9 indicado para o tratamento dos sintomas de c\xF3licas gastrointestinais, c\xF3licas biliares e dores espasm\xF3dicas na regi\xE3o do abd\xF4men.",
    howToUse: "Tomar 1 a 2 comprimidos revestidos, 3 a 4 vezes ao dia, com \xE1gua."
  },
  {
    id: 11006,
    name: "Probi\xF3tico Enterogermina 10 frascos de 5ml",
    size: "50ml",
    brand: "Enterogermina",
    category: "Medicamentos",
    subcategory: "Digest\xE3o",
    price: 51.99,
    options: 2,
    badges: ["+1 n\xBA da sorte"],
    image: "/products/enterogermina_10flac.jpg",
    bullets: [
      "Suspens\xE3o de esporos de Bacillus clausii (2 bilh\xF5es / 5ml).",
      "Restaura e equilibra a flora microbiana intestinal.",
      "Pronto para beber: frasconetes monodose sem sabor.",
      "Resistente ao suco g\xE1strico e a antibi\xF3ticos."
    ],
    description: "Enterogermina \xE9 um probi\xF3tico que contribui para o equil\xEDbrio da microbiota intestinal. Apresenta esporos de Bacillus clausii que chegam intactos ao intestino.",
    howToUse: "Agite o flaconete, gire a tampa para abrir e tome o conte\xFAdo diretamente pela boca, 1 a 3 frascos ao dia."
  },
  {
    id: 11013,
    name: "Lo\xE7\xE3o Hidratante Corporal CeraVe Pele Seca a Extra Seca Hidrata\xE7\xE3o Prolongada 473ml",
    size: "473ml",
    brand: "CeraVe",
    category: "Dermocosm\xE9ticos",
    subcategory: "Hidratantes Corporais",
    oldPrice: 133.9,
    price: 99.9,
    discount: 25,
    options: 4,
    rating: 4.9,
    reviews: 597,
    image: "/products/cerave_locao_473ml.jpg",
    bullets: [
      "Cont\xE9m 3 ceramidas essenciais (1, 3 e 6-II) e \xC1cido Hialur\xF4nico.",
      "Tecnologia MVE: libera\xE7\xE3o cont\xEDnua de ativos para hidrata\xE7\xE3o o dia todo.",
      "F\xF3rmula leve, n\xE3o comedog\xEAnica e de r\xE1pida absor\xE7\xE3o.",
      "Sem perfume e recomendada por dermatologistas."
    ],
    description: "A Lo\xE7\xE3o Hidratante CeraVe ajuda a restaurar a barreira protetora da pele do corpo e do rosto, proporcionando hidrata\xE7\xE3o de longa dura\xE7\xE3o para peles secas e ressecadas.",
    howToUse: "Aplique generosamente por todo o corpo e rosto sempre que sentir necessidade."
  },
  {
    id: 11015,
    name: "F\xF3rmula Infantil Ninho Fases 1+ Nestl\xE9 1 a 3 anos 800g",
    size: "800g",
    brand: "Nestl\xE9",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Compostos L\xE1cteos",
    price: 42.99,
    tierText: "a partir de 2 itens",
    rating: 4.9,
    reviews: 387,
    image: "/products/ninho_fases_1.jpg",
    bullets: [
      "Composto l\xE1cteo enriquecido para crian\xE7as de 1 a 3 anos.",
      "Cont\xE9m Prebio 1 (fibras prebi\xF3ticas) que favorecem a flora intestinal.",
      "Sem adi\xE7\xE3o de a\xE7\xFAcares (sacarose) e aromatizantes artificiais.",
      "Fonte de C\xE1lcio, Zinco, Ferro e 18 vitaminas essenciais."
    ],
    description: "Ninho Fases 1+ da Nestl\xE9 foi formulado para atender aos desafios nutricionais da fase pr\xE9-escolar, contribuindo para ossos fortes, imunidade e crescimento equilibrado.",
    howToUse: "Para preparar 1 copo (200ml): adicione 6 colheres-medida rasas (32g) de p\xF3 em 180ml de \xE1gua morna ou fria previamente fervida."
  },
  {
    id: 11016,
    name: "S\xE9rum Facial Clareador Eucerin Dual Anti-Pigment 30ml",
    size: "30ml",
    brand: "Eucerin",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    oldPrice: 299.9,
    price: 260.61,
    discount: 13,
    badges: ["+1 n\xBA da sorte"],
    rating: 4.8,
    reviews: 174,
    image: "/products/eucerin_dual_anti_pigment.jpg",
    bullets: [
      "F\xF3rmula inovadora de c\xE2mara dupla com Thiamidol e \xC1cido Hialur\xF4nico.",
      "Reduz at\xE9 75% da intensidade de manchas escuras com uso regular.",
      "Previne o reaparecimento de hiperpigmenta\xE7\xE3o solar e hormonal.",
      "Textura leve, toque aveludado e r\xE1pida absor\xE7\xE3o para todos os tipos de pele."
    ],
    description: "Eucerin Anti-Pigment Dual S\xE9rum combina dois princ\xEDpios ativos potentes em uma f\xF3rmula inovadora: o Thiamidol patenteado, que atua na causa raiz da hiperpigmenta\xE7\xE3o, e o \xC1cido Hialur\xF4nico concentrado, que hidrata profundamente.",
    howToUse: "Aplique uma vez ao dia (pela manh\xE3 ou \xE0 noite) no rosto, pesco\xE7o e colo bem limpos, massageando suavemente."
  },
  {
    id: 2047,
    name: "Cereal Infantil Mucilon Milho Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 460,
    image: "/products/mucilon_milho.jpg",
    bullets: [
      "Cereal infantil de milho enriquecido com vitaminas A, C, D e complexo B.",
      "NutriProtect+: combina\xE7\xE3o exclusiva de nutrientes essenciais para imunidade e desenvolvimento.",
      "Fonte de Ferro e Zinco de alta biodisponibilidade.",
      "Ideal para papinhas nutritivas e deliciosas."
    ],
    description: "Mucilon Milho \xE9 um cereal infantil da Nestl\xE9 desenvolvido especialmente para complementar a alimenta\xE7\xE3o de beb\xEAs e crian\xE7as a partir de 6 meses, auxiliando no crescimento saud\xE1vel com ferro e vitaminas."
  },
  {
    id: 20470,
    name: "F\xF3rmula Infantil Danone Aptamil Profutura 1 com Prebi\xF3ticos 800g",
    size: "800g",
    brand: "Aptamil",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 124.9,
    price: 98.9,
    discount: 21,
    image: "/products/aptamil_profutura.jpg",
    bullets: [
      "F\xF3rmula infantil de partida para lactentes de 0 a 6 meses.",
      "Exclusiva combina\xE7\xE3o patenteada de prebi\xF3ticos scGOS/lcFOS e p\xF3s-bi\xF3ticos.",
      "Cont\xE9m DHA, ARA e nucleot\xEDdeos essenciais para o desenvolvimento cognitivo e visual.",
      "F\xF3rmula padr\xE3o-ouro recomendada por pediatras."
    ],
    description: "Aptamil Profutura 1 \xE9 uma f\xF3rmula infantil com nutrientes inspirados na nutri\xE7\xE3o materna, contendo estrutura lip\xEDdica exclusiva e prebi\xF3ticos que apoiam o sistema imunol\xF3gico infantil."
  },
  {
    id: 2048,
    name: "Cereal Infantil Mucilon Arroz e Aveia Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 520,
    image: "/products/mucilon_arroz_aveia.jpg",
    bullets: [
      "Combina\xE7\xE3o balanceada de arroz e aveia rica em fibras para o intestino.",
      "Fonte de 13 vitaminas e minerais essenciais para o beb\xEA.",
      "F\xE1cil digest\xE3o e sabor suave que as crian\xE7as adoram.",
      "Sem adi\xE7\xE3o de conservantes ou corantes artificiais."
    ],
    description: "O Cereal Infantil Mucilon Arroz e Aveia Nestl\xE9 \xE9 fonte de energia saud\xE1vel e nutrientes essenciais que apoiam o desenvolvimento infantil e a sa\xFAde digestiva."
  },
  {
    id: 20480,
    name: "F\xF3rmula Infantil Nestl\xE9 NAN Supreme 1 com HMOs 800g",
    size: "800g",
    brand: "NAN",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 159.9,
    price: 139.99,
    discount: 12,
    image: "/products/nan_supreme_1.jpg",
    bullets: [
      "Cont\xE9m 2 Oligossacar\xEDdeos do Leite Humano (2'FL e LNnT) id\xEAnticos aos naturais.",
      "Prote\xEDna do soro do leite parcialmente hidrolisada para digest\xE3o mais leve.",
      "Indicado para beb\xEAs de 0 a 6 meses sob orienta\xE7\xE3o m\xE9dica ou nutricional.",
      "Enriquecido com DHA, ARA e probi\xF3ticos B. lactis."
    ],
    description: "NAN Supreme 1 da Nestl\xE9 traz a mais avan\xE7ada tecnologia com HMOs e prote\xEDnas selecionadas que facilitam a digest\xE3o e reduzem o risco de desconfortos intestinais."
  },
  {
    id: 2042,
    name: "Pomada Preventiva de Assaduras Desitin Maximum Strength Roxa 113g",
    size: "113g",
    brand: "Desitin",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    oldPrice: 74.9,
    price: 64.9,
    discount: 13,
    rating: 4.9,
    reviews: 350,
    image: "/products/desitin_roxa.jpg",
    bullets: [
      "Concentra\xE7\xE3o m\xE1xima permitida de 40% de \xD3xido de Zinco.",
      "Alivia a dor e o desconforto de assaduras severas desde a 1\xAA aplica\xE7\xE3o.",
      "Barreira protetora espessa e duradoura contra a acidez da urina e fezes."
    ],
    description: "Desitin Maximum Strength Roxa \xE9 o tratamento n\xFAmero 1 recomendado nos EUA contra assaduras persistentes, criando uma barreira imperme\xE1vel de longa dura\xE7\xE3o."
  },
  {
    id: 20490,
    name: "Composto L\xE1cteo Ninho Fases 1+ Prebio 1 Nestl\xE9 800g",
    size: "800g",
    brand: "Ninho",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "F\xF3rmulas Infantis",
    oldPrice: 52.9,
    price: 44.9,
    discount: 15,
    rating: 4.9,
    reviews: 580,
    image: "/products/ninho_fases_1.jpg",
    bullets: [
      "Desenvolvido para crian\xE7as de 1 a 3 anos de idade.",
      "Composto com fibras Prebio 1 que auxiliam no bom funcionamento do intestino.",
      "Rico em C\xE1lcio, Ferro, Zinco e Vitaminas A, C, D e E.",
      "Sabor adorado por gera\xE7\xF5es com qualidade Nestl\xE9."
    ],
    description: "Ninho Fases 1+ ajuda a complementar a nutri\xE7\xE3o de crian\xE7as a partir de 1 ano, fornecendo nutrientes fundamentais para a fase de descobertas e crescimento."
  },
  {
    id: 2041,
    name: "Pomada para Assaduras Hipogl\xF3s Am\xEAndoas 40g",
    size: "40g",
    brand: "Hipogl\xF3s",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    oldPrice: 26.9,
    price: 22.9,
    discount: 15,
    rating: 4.9,
    reviews: 320,
    image: "/products/hipoglos_amendoas.jpg",
    bullets: [
      "F\xF3rmula enriquecida com \xD3leo de Am\xEAndoas e \xD3xido de Zinco.",
      "Textura suave f\xE1cil de aplicar e remover na troca de fraldas.",
      "Cria uma barreira protetora contra assaduras e irrita\xE7\xF5es por umidade."
    ],
    description: "Hipogl\xF3s Am\xEAndoas forma uma camada protetora nutritiva com \xF3leo de am\xEAndoas e vitaminas A e E, mantendo a pele do beb\xEA hidratada e livre de assaduras."
  },
  {
    id: 2049,
    name: "Cereal Infantil Mucilon Multicereais Nestl\xE9 600g",
    size: "600g",
    brand: "Mucilon",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    oldPrice: 32.9,
    price: 27.99,
    discount: 15,
    rating: 4.9,
    reviews: 380,
    image: "/products/mucilon_multicereais_600g.webp",
    bullets: [
      "Mix balanceado de trigo, cevada, arroz e aveia.",
      "Enriquecido com ferro, zinco e vitamina C para fortalecer as defesas naturais.",
      "Pr\xE1tico e nutritivo para o caf\xE9 da manh\xE3 ou lanchinho."
    ],
    description: "Mucilon Multicereais combina gr\xE3os selecionados para oferecer textura aveludada e nutri\xE7\xE3o completa para a fase de introdu\xE7\xE3o alimentar dos pequenos."
  }
];
var blackDayProducts = [
  {
    id: 1250294,
    name: "Fralda Pampers Confort Sec Tamanho G 60 Unidades",
    size: "Tam G (60un)",
    brand: "Pampers",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    price: 59.61,
    oldPrice: 74.76,
    discount: 70,
    rating: 4.9,
    reviews: 626,
    options: 5,
    badges: ["Black do Dia", "+1 n\xBA da sorte"],
    tierText: "Super Oferta 70% OFF",
    image: "/products/pampers_confort_sec_g.webp",
    bullets: [
      "Fralda descart\xE1vel campe\xE3 em vendas em todo o Brasil.",
      "Tamanho G indicado para beb\xEAs de 9 a 13kg com 60 unidades.",
      "Canais de ar exclusivos que permitem a circula\xE7\xE3o de ar dentro da fralda.",
      "Gel M\xE1gico que absorve e ret\xE9m a umidade mantendo a pele seca por at\xE9 12 horas.",
      "At\xE9 2 vezes mais sequinha a noite toda, evitando vazamentos e desconforto.",
      "Lo\xE7\xE3o hipoalerg\xEAnica que protege a pele sens\xEDvel contra irrita\xE7\xF5es e assaduras."
    ],
    description: "A Fralda Pampers Confort Sec \xE9 a n\xFAmero 1 em vendas no Brasil e l\xEDder absoluta de prefer\xEAncia das fam\xEDlias. Desenvolvida com canais de ar e gel m\xE1gico ultra-absorvente, mant\xE9m o beb\xEA sequinho e protegido durante o dia e a noite inteira.",
    howToUse: "Coloque o beb\xEA sobre a fralda aberta, ajuste as abas el\xE1sticas adesivas confortavelmente na cintura.",
    composition: "Polpa de celulose, pol\xEDmero superabsorvente, polietileno, polipropileno, el\xE1sticos e lo\xE7\xE3o dermoprotetora com extrato de camomila.",
    warnings: ["Uso externo.", "Descarte no lixo comum, nunca no vaso sanit\xE1rio.", "Mantenha fora do alcance de crian\xE7as."],
    productCode: "1250294",
    ean: "7500435123456"
  },
  {
    id: 103,
    name: "Desodorante Antitranspirante Aerosol Rexona Men Sem Perfume 72h 150ml",
    size: "150ml",
    oldPrice: 19.9,
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
    description: "Prote\xE7\xE3o antitranspirante 72 horas sem fragr\xE2ncia, hipoalerg\xEAnico e dermatologicamente testado para homens com pele sens\xEDvel."
  },
  {
    id: 109,
    name: "Protetor Solar Facial Needs Beauty FPS 70 40g",
    size: "40g",
    oldPrice: 44.9,
    price: 31.49,
    discount: 30,
    options: 4,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 164,
    image: "/products/needs_beauty_fps70.jpg",
    brand: "Needs",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    description: "Protetor solar facial Needs Beauty com FPS 70, toque seco, textura leve e a\xE7\xE3o antioxidante com Vitamina E."
  },
  {
    id: 3999,
    name: "Kit Len\xE7o Umedecido Huggies Rosto e Corpo Hipoalerg\xEAnico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.9,
    price: 39.9,
    discount: 20,
    rating: 4.8,
    reviews: 623,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    badges: ["+1 n\xBA da sorte", "Leve 4 Pague 3"],
    description: "O Kit Len\xE7o Umedecido Huggies Rosto e Corpo foi desenvolvido para proporcionar limpeza delicada e segura da cabe\xE7a aos p\xE9s. Com f\xF3rmula hipoalerg\xEAnica e textura suave como algod\xE3o, limpa sem agredir a pele sens\xEDvel do beb\xEA e de toda a fam\xEDlia.",
    composition: "Aqua, Polysorbate 20, Caprylyl Glycol, Sodium Benzoate, Coco-Betaine, Malic Acid, Parfum, Sodium Citrate, Aloe Barbadensis Leaf Extract, Tocopheryl Acetate.",
    howToUse: "Abra a tampa flip-top, puxe o lacre adesivo e retire uma toalha umedecida. Aplique suavemente sobre a \xE1rea a ser limpa. Feche bem a embalagem para preservar a umidade.",
    warnings: ["Uso externo.", "N\xE3o ingerir.", "Em caso de irrita\xE7\xE3o, suspenda o uso e procure orienta\xE7\xE3o m\xE9dica.", "Mantenha fora do alcance de crian\xE7as."],
    productCode: "109823",
    ean: "7896007548902",
    dosage: "4 pacotes com 48 toalhas cada (192un)"
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 84.9,
    price: 48.59,
    discount: 20,
    badges: ["Black do Dia"],
    rating: 4.9,
    reviews: 340,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial",
    description: "Gel de limpeza facial Actine de alta performance dermatol\xF3gica para controle prolongado da oleosidade e redu\xE7\xE3o da acne."
  },
  {
    id: 116,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml Leve Mais Pague Menos",
    size: "500ml",
    oldPrice: 28.9,
    price: 21.9,
    discount: 24,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 190,
    image: "/products/listerine_cool_mint_500ml.jpg",
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    description: "Enxaguante antiss\xE9ptico Listerine Cool Mint que elimina at\xE9 99% das bact\xE9rias causadoras do mau h\xE1lito, placa e gengivite."
  },
  {
    id: 118,
    name: "Shampoo Anticaspa Darrow Doctar Plus 120ml",
    size: "120ml",
    oldPrice: 72.9,
    price: 58.9,
    discount: 19,
    badges: ["Black do Dia"],
    rating: 4.8,
    reviews: 145,
    image: "/products/darrow_doctar_plus_140ml.jpg",
    brand: "Darrow",
    category: "Cabelos",
    subcategory: "Shampoo",
    description: "Shampoo dermatol\xF3gico anticaspa intensivo que elimina descama\xE7\xF5es severas e alivia o prurido no couro cabeludo desde o primeiro uso."
  }
];
var weekHighlights = [];
var favoriteBrands = [];
var asianBeauty = [
  {
    id: 401,
    name: "T\xF4nico Facial em Disco Medicube Zero Pore Pad 2.0 70un",
    size: "70un",
    price: 279,
    rating: 5,
    reviews: 58,
    brand: "Medicube",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto",
    image: "/products/medicube_zero_pore_pad.webp",
    bullets: [
      "Discos esfoliantes faciais duplos com AHA e BHA patenteados.",
      "Reduz visivelmente o tamanho e a apar\xEAncia dos poros dilatados.",
      "Controla a oleosidade excessiva e remove c\xE9lulas mortas suavemente.",
      "Fabricado na Coreia do Sul - Aut\xEAntico K-Beauty."
    ],
    description: "O Zero Pore Pad 2.0 da Medicube \xE9 um t\xF4nico facial em discos formulado clinicamente na Coreia do Sul com complexos patenteados de AHA e BHA para desobstruir os poros, regular o sebo e uniformizar a textura da pele.",
    howToUse: "Ap\xF3s a limpeza facial, passe o lado texturizado suavemente pelo rosto evitando os olhos. Em seguida, utilize o lado macio para finalizar e auxiliar na absor\xE7\xE3o.",
    composition: "AHA, BHA, Extrato de Flor de Cam\xE9lia, Pantenol, \xC1cido Hialur\xF4nico.",
    ean: "8809628880628",
    productCode: "401"
  },
  {
    id: 402,
    name: "Ampola Facial Skin1004 Madagascar Centella Asiatica 55ml",
    size: "55ml",
    oldPrice: 179.9,
    price: 162.99,
    discount: 9,
    rating: 4.9,
    reviews: 84,
    brand: "Skin1004",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    image: "/products/skin1004_centella_55ml.webp",
    bullets: [
      "100% de extrato puro de Centella Asiatica colhida em Madagascar.",
      "Acalma instantaneamente a pele irritada, sens\xEDvel ou sensibilizada.",
      "Fortalece a barreira cut\xE2nea e equilibra a hidrata\xE7\xE3o.",
      "F\xF3rmula hipoalerg\xEAnica vegana produzida na Coreia do Sul."
    ],
    description: "A cl\xE1ssica ampola facial calmante da marca coreana Skin1004 cont\xE9m extrato purificado de Centella Asiatica para reparar a barreira cut\xE2nea, hidratar e acalmar vermelhid\xF5es sem deixar sensa\xE7\xE3o pegajosa.",
    howToUse: "Aplique de 2 a 3 gotas no rosto limpo e tonificado, dando leves batidinhas com as pontas dos dedos at\xE9 a completa absor\xE7\xE3o.",
    composition: "Centella Asiatica Extract 100%.",
    ean: "8809576260020",
    productCode: "402"
  },
  {
    id: 403,
    name: "Creme Hidratante Facial Intensivo Cur\xE9l Peles Secas e Sens\xEDveis 40g",
    size: "40g",
    price: 139.9,
    badges: ["Exclusivo"],
    rating: 4.9,
    reviews: 67,
    brand: "Cur\xE9l",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto",
    image: "/products/curel_creme_facial.webp",
    bullets: [
      "Tecnologia japonesa de Ceramidas avan\xE7adas desenvolvida pela Kao Jap\xE3o.",
      "Nutre intensamente e restaura a barreira protetora da pele muito seca e sens\xEDvel.",
      "Textura leve e aveludada com r\xE1pida absor\xE7\xE3o sem pesar.",
      "Fabricado no Jap\xE3o - Marca N\xBA 1 para peles sens\xEDveis no mercado japon\xEAs."
    ],
    description: "Desenvolvido pelos laborat\xF3rios da Kao Corporation no Jap\xE3o, Cur\xE9l Intensive Moisture Facial Cream rep\xF5e as ceramidas naturais da pele, protegendo contra agress\xF5es externas e ressecamento severo.",
    howToUse: "Aplique uma quantidade do tamanho de uma p\xE9rola suavemente sobre todo o rosto limpo, de manh\xE3 e \xE0 noite.",
    composition: "Ceramide Functioning Ingredient, Extrato de Eucalipto, Alanto\xEDna.",
    ean: "4901301236210",
    productCode: "403"
  },
  {
    id: 404,
    name: "Kit Mise En Sc\xE8ne Perfect Serum Magic Straight Trio",
    size: "1un",
    price: 189.9,
    rating: 4.8,
    reviews: 42,
    brand: "Mise En Sc\xE8ne",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    image: "/products/mise_en_scene_perfect_serum.webp",
    bullets: [
      "Tratamento capilar completo efeito liso com tecnologia coreana antifrizz por at\xE9 24h.",
      "Enriquecido com 7 \xF3leos nobres dourados (Argan, Cam\xE9lia, Marula, Oliva, Jojoba, Coco e Damasco).",
      "Kit com Shampoo 140ml + M\xE1scara Treatment 30ml + S\xE9rum Capilar 15ml.",
      "Fabricado na Coreia do Sul pela Amorepacific."
    ],
    description: "Linha de tratamento capilar de alta performance Mise En Sc\xE8ne, do grupo coreano Amorepacific. O trio Magic Straight alinha a fibra capilar, controla o frizz rebelde e confere brilho radiante.",
    howToUse: "Lave com o Shampoo Magic Straight, aplique a m\xE1scara Treatment nos fios \xFAmidos por 3 minutos e enx\xE1gue. Finalize com algumas gotas do S\xE9rum nos cabelos secos ou \xFAmidos.",
    ean: "8809803560124",
    productCode: "404"
  },
  {
    id: 405,
    name: "Protetor Solar Bior\xE9 UV Aqua Rich Watery Essence FPS 50+ 70g",
    size: "70g",
    oldPrice: 89.9,
    price: 79.9,
    discount: 11,
    rating: 4.9,
    reviews: 184,
    brand: "Bior\xE9",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    image: "/products/biore_uv_aqua_rich.jpg",
    bullets: [
      "F\xF3rmula japonesa revolucion\xE1ria com tecnologia Micro Defense FPS 50+ e PA++++.",
      "Textura aquosa ultraleve que se funde instantaneamente \xE0 pele sem deixar res\xEDduo branco.",
      "Enriquecido com \xC1cido Hialur\xF4nico e Extrato de Geleia Real para hidrata\xE7\xE3o prolongada.",
      "Fabricado no Jap\xE3o pela Kao Corporation - Protetor solar n\xBA 1 do Jap\xE3o."
    ],
    description: "O protetor solar japon\xEAs mais vendido do mundo. Bior\xE9 UV Aqua Rich Watery Essence oferece alt\xEDssima prote\xE7\xE3o contra raios UVA e UVB com sensa\xE7\xE3o refrescante e toque seco invis\xEDvel sob maquiagem.",
    howToUse: "Aplique uniformemente sobre o rosto e corpo antes da exposi\xE7\xE3o solar. Reaplique sempre ap\xF3s sudorese intensa, nadar ou secar-se com toalha.",
    composition: "Filtros UV Micro Defense, \xC1cido Hialur\xF4nico, Geleia Real, \xC1gua purificada.",
    ean: "4901301413246",
    productCode: "405"
  },
  {
    id: 406,
    name: "Lo\xE7\xE3o Hidratante Facial Hada Labo Gokujyun Premium \xC1cido Hialur\xF4nico 170ml",
    size: "170ml",
    oldPrice: 149.9,
    price: 129.9,
    discount: 13,
    rating: 5,
    reviews: 95,
    brand: "Hada Labo",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    image: "/products/hada_labo_gokujyun.jpg",
    bullets: [
      "F\xF3rmula japonesa ic\xF4nica com 7 tipos de \xC1cido Hialur\xF4nico de diferentes pesos moleculares.",
      "Hidrata\xE7\xE3o profunda da epiderme at\xE9 as camadas celulares mais profundas.",
      "Sem fragr\xE2ncia, sem corantes, sem \xE1lcool et\xEDlico e sem \xF3leos minerais.",
      "Fabricado no Jap\xE3o pela Rohto Pharmaceutical."
    ],
    description: "Hada Labo Gokujyun Premium Lotion \xE9 uma lo\xE7\xE3o aquosa rica desenvolvida no Jap\xE3o pela Rohto Pharmaceutical que proporciona hidrata\xE7\xE3o duradoura e restaura o volume natural e a elasticidade da pele.",
    howToUse: "Coloque algumas gotas na palma da m\xE3o e pressione suavemente sobre o rosto e pesco\xE7o limpos at\xE9 completa absor\xE7\xE3o.",
    composition: "7 tipos de \xC1cido Hialur\xF4nico (incluindo Nano, Fermentado e Reticulado).",
    ean: "4987241167449",
    productCode: "406"
  },
  {
    id: 407,
    name: "Protetor Solar Facial Beauty of Joseon Relief Sun: Rice + Probiotics FPS 50+ 50ml",
    size: "50ml",
    oldPrice: 169.9,
    price: 144.9,
    discount: 15,
    rating: 4.9,
    reviews: 128,
    brand: "Beauty of Joseon",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    image: "/products/beauty_of_joseon_relief_sun.jpg",
    bullets: [
      "Cont\xE9m 30% de Extrato de Arroz e Complexo Fermentado de Gr\xE3os Probi\xF3ticos.",
      "Acabamento sedoso, luminoso e sem efeito esbranqui\xE7ado (white cast).",
      "Filtro qu\xEDmico org\xE2nico suave ideal para todos os tipos de pele, inclusive sens\xEDveis.",
      "Fabricado na Coreia do Sul - Fen\xF4meno global de K-Beauty."
    ],
    description: "O protetor solar Relief Sun Rice + Probiotics da Beauty of Joseon \xE9 formulado com t\xE9cnicas tradicionais da dinastia Joseon combinadas \xE0 mais avan\xE7ada ci\xEAncia cosm\xE9tica sul-coreana para nutrir e proteger a pele do sol.",
    howToUse: "Como \xFAltima etapa da rotina de skincare matinal, aplique uma quantidade generosa sobre o rosto e pesco\xE7o.",
    composition: "Oryza Sativa (Rice) Extract 30%, Probiotics Ferment Complex, Niacinamida.",
    ean: "8809738316275",
    productCode: "407"
  },
  {
    id: 408,
    name: "Ess\xEAncia Facial COSRX Advanced Snail 96 Mucin Power Essence 100ml",
    size: "100ml",
    oldPrice: 199.9,
    price: 175.9,
    discount: 12,
    rating: 4.9,
    reviews: 156,
    brand: "COSRX",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    image: "/products/cosrx_snail_mucin.jpg",
    bullets: [
      "Composto por 96% de Filtrado de Secre\xE7\xE3o de Caracol purificado.",
      "Repara a pele danificada, acalma vermelhid\xF5es e melhora a elasticidade cut\xE2nea.",
      "Hidrata intensamente sem obstruir os poros, conferindo brilho vi\xE7oso (glass skin).",
      "Fabricado na Coreia do Sul pela COSRX."
    ],
    description: "A ess\xEAncia best-seller mundial da COSRX formulada com 96% de mucina de caracol ajuda a renovar a barreira de hidrata\xE7\xE3o, reparar cicatrizes superficiais e restaurar o vi\xE7o da pele desidratada.",
    howToUse: "Ap\xF3s limpar e tonificar o rosto, aplique 2 a 3 pumps em todo o rosto com batidinhas suaves at\xE9 ser absorvido.",
    composition: "Snail Secretion Filtrate 96%, Hialuronato de S\xF3dio, Pantenol, Arginina.",
    ean: "8809416470009",
    productCode: "408"
  },
  {
    id: 409,
    name: "S\xE9rum Capilar Mise En Sc\xE8ne Perfect Serum Styling 30ml",
    size: "30ml",
    price: 69.9,
    rating: 4.8,
    reviews: 31,
    brand: "Mise En Sc\xE8ne",
    category: "Cabelos",
    subcategory: "Finalizadores para Cabelo",
    image: "/products/mise_en_scene_perfect_serum.webp",
    bullets: [
      "\xD3leo capilar estilizador e protetor t\xE9rmico coreano com fixa\xE7\xE3o suave e mem\xF3ria de forma.",
      "Protege os fios contra ferramentas de calor (secador e chapinha) e umidade.",
      "Com blend de 7 \xF3leos naturais preciosos e fragr\xE2ncia floral sofisticada.",
      "Fabricado na Coreia do Sul pela Amorepacific."
    ],
    description: "S\xE9rum estilizador de alta precis\xE3o que mant\xE9m penteados, cachos e escovas modelados por muito mais tempo enquanto nutre profundamente a fibra capilar.",
    howToUse: "Aplique uma moeda de s\xE9rum nos cabelos \xFAmidos antes da escova ou nos cabelos secos para fixa\xE7\xE3o suave e brilho espelhado.",
    ean: "8809803560230",
    productCode: "409"
  }
];
var quemComprouTambem = [
  {
    id: 3999,
    name: "Kit Len\xE7o Umedecido Huggies Rosto e Corpo Hipoalerg\xEAnico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.9,
    price: 39.9,
    discount: 20,
    rating: 4.9,
    reviews: 142,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA"
  },
  {
    id: 2042,
    name: "Pomada Preventiva de Assaduras Desitin Maximum Strength Roxa 113g",
    size: "113g",
    oldPrice: 79.9,
    price: 64.9,
    discount: 19,
    rating: 4.9,
    reviews: 88,
    image: "/products/desitin_roxa.jpg",
    brand: "Desitin",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA"
  },
  {
    id: 2041,
    name: "Pomada para Assaduras Hipogl\xF3s Am\xEAndoas 40g",
    size: "40g",
    oldPrice: 28.9,
    price: 22.9,
    discount: 21,
    rating: 4.8,
    reviews: 57,
    image: "/products/hipoglos_amendoas.jpg",
    brand: "Hipogl\xF3s",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA"
  },
  {
    id: 1303,
    name: "B\xE1lsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 48,
    price: 36,
    discount: 25,
    rating: 4.9,
    reviews: 310,
    image: "/products/cicaplast_baume_b5.jpg",
    brand: "La Roche-Posay",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto"
  },
  {
    id: 1305,
    name: "Lo\xE7\xE3o Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.9,
    price: 89.9,
    discount: 18,
    rating: 4.9,
    reviews: 215,
    image: "/products/cerave_locao_473ml.jpg",
    brand: "CeraVe",
    category: "Dermocosm\xE9ticos",
    subcategory: "Corpo"
  },
  {
    id: 1306,
    name: "Creme Multirrestaurador Bepantol Derma 20g",
    size: "20g",
    oldPrice: 42.9,
    price: 34.9,
    discount: 19,
    rating: 4.8,
    reviews: 94,
    image: "/products/bepantol_derma_20g.webp",
    brand: "Bepantol",
    category: "Dermocosm\xE9ticos",
    subcategory: "Corpo"
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 59.9,
    price: 48.59,
    discount: 19,
    rating: 4.8,
    reviews: 180,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial"
  },
  {
    id: 116,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml Leve Mais Pague Menos",
    size: "500ml",
    oldPrice: 28.9,
    price: 21.9,
    discount: 24,
    rating: 4.7,
    reviews: 120,
    image: "/products/listerine_cool_mint_500ml.jpg",
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal"
  },
  {
    id: 103,
    name: "Desodorante Antitranspirante Aerosol Rexona Men Sem Perfume 72h 150ml",
    size: "150ml",
    oldPrice: 19.9,
    price: 14.75,
    discount: 26,
    rating: 4.8,
    reviews: 95,
    image: "/products/rexona_men_sem_perfume_aerosol.jpg",
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes"
  },
  {
    id: 109,
    name: "Protetor Solar Facial Needs Beauty FPS 70 40g",
    size: "40g",
    oldPrice: 42,
    price: 31.49,
    discount: 25,
    rating: 4.6,
    reviews: 64,
    image: "/products/needs_beauty_fps70.jpg",
    brand: "Needs",
    category: "Dermocosm\xE9ticos",
    subcategory: "Protetor Solar"
  },
  {
    id: 11015,
    name: "F\xF3rmula Infantil Ninho Fases 1+ Nestl\xE9 1 a 3 anos 800g",
    size: "800g",
    oldPrice: 52.9,
    price: 42.99,
    discount: 19,
    rating: 4.9,
    reviews: 130,
    image: "/products/ninho_fases_1.jpg",
    brand: "Nestl\xE9",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Nutri\xE7\xE3o Infantil"
  },
  {
    id: 2047,
    name: "Cereal Infantil Mucilon Milho Nestl\xE9 600g",
    size: "600g",
    oldPrice: 34.9,
    price: 27.99,
    discount: 20,
    rating: 4.8,
    reviews: 75,
    image: "/products/mucilon_milho.jpg",
    brand: "Nestl\xE9",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Nutri\xE7\xE3o Infantil"
  },
  {
    id: 501,
    name: "Fralda Pampers Pants Ajuste Total M 78 unidades",
    size: "78un",
    oldPrice: 163.68,
    price: 140.28,
    discount: 14,
    options: 5,
    badges: ["+1 n\xBA da sorte"],
    rating: 4.8,
    reviews: 16,
    image: "/products/pampers_pants_m.webp",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas"
  },
  {
    id: 912060,
    name: "Di-Magn\xE9sio Malato 500mg bwell 60 C\xE1psulas",
    size: "60 C\xE1psulas",
    oldPrice: 79.9,
    price: 64.9,
    discount: 19,
    rating: 4.8,
    reviews: 42,
    image: "/products/dimagnesio_malato_bwell.webp",
    brand: "bwell",
    category: "Vida Saud\xE1vel",
    subcategory: "Suplementos"
  }
];
var similaresVocePode = [
  {
    id: 603,
    name: "Polivitam\xEDnico Vitergan Zinco 30 Comprimidos revestidos",
    size: "30 Comprimidos revestidos",
    oldPrice: 115,
    price: 110,
    discount: 4,
    image: "/products/vitergan_zinco_30comp.jpg",
    brand: "Vitergan Zinco",
    category: "Vida Saud\xE1vel",
    subcategory: "Vitaminas"
  },
  {
    id: 1303,
    name: "B\xE1lsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 48,
    price: 36,
    discount: 25,
    rating: 4.9,
    reviews: 310,
    image: "/products/cicaplast_baume_b5.jpg",
    brand: "La Roche-Posay",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto"
  },
  {
    id: 1305,
    name: "Lo\xE7\xE3o Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.9,
    price: 89.9,
    discount: 18,
    rating: 4.9,
    reviews: 215,
    image: "/products/cerave_locao_473ml.jpg",
    brand: "CeraVe",
    category: "Dermocosm\xE9ticos",
    subcategory: "Corpo"
  },
  {
    id: 115,
    name: "Gel de Limpeza Facial Darrow Actine Pele Acneica 400g",
    size: "400g",
    oldPrice: 59.9,
    price: 48.59,
    discount: 19,
    rating: 4.8,
    reviews: 180,
    image: "/products/darrow_actine_400g_frasco.jpg",
    brand: "Darrow",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial"
  },
  {
    id: 3999,
    name: "Kit Len\xE7o Umedecido Huggies Rosto e Corpo Hipoalerg\xEAnico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.9,
    price: 39.9,
    discount: 20,
    rating: 4.9,
    reviews: 142,
    image: "/products/huggies_rosto_corpo.jpg",
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA"
  }
];
var hairCareProducts = [];
var fraldasProducts = [
  {
    id: 3999,
    name: "Kit Len\xE7o Umedecido Huggies Rosto e Corpo Hipoalerg\xEAnico 48 unidades 4 pacotes",
    size: "192un",
    oldPrice: 49.9,
    price: 39.9,
    discount: 20,
    rating: 4.8,
    reviews: 623,
    image: "/products/huggies_rosto_corpo.jpg",
    badges: ["+1 n\xBA da sorte", "Leve 4 Pague 3"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Higiene do Beb\xEA",
    bullets: [
      "Apreciadas por seu perfume suave e agrad\xE1vel e pela umidade equilibrada.",
      "Textura espessa e dur\xE1vel que limpa de maneira eficaz sem causar irrita\xE7\xE3o.",
      "Tampa com abertura f\xE1cil e uso vers\xE1til para m\xE3os, rosto e corpo.",
      "Embalagem pr\xE1tica e higi\xEAnica que complementa a excelente qualidade."
    ],
    description: "O Kit Len\xE7o Umedecido Huggies Rosto e Corpo foi desenvolvido para proporcionar limpeza delicada e segura da cabe\xE7a aos p\xE9s. Com f\xF3rmula hipoalerg\xEAnica e textura suave como algod\xE3o, limpa sem agredir a pele sens\xEDvel do beb\xEA e de toda a fam\xEDlia.",
    composition: "Aqua, Polysorbate 20, Caprylyl Glycol, Sodium Benzoate, Coco-Betaine, Malic Acid, Parfum, Sodium Citrate, Aloe Barbadensis Leaf Extract, Tocopheryl Acetate.",
    howToUse: "Abra a tampa flip-top, puxe o lacre adesivo e retire uma toalha umedecida. Aplique suavemente sobre a \xE1rea a ser limpa. Feche bem a embalagem para preservar a umidade.",
    warnings: ["Uso externo.", "N\xE3o ingerir.", "Em caso de irrita\xE7\xE3o, suspenda o uso e procure orienta\xE7\xE3o m\xE9dica.", "Mantenha fora do alcance de crian\xE7as."],
    productCode: "109823",
    ean: "7896007548902",
    dosage: "4 pacotes com 48 toalhas cada (192un)"
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
    badges: ["Compre 2 Leve +", "Mais Vendido Beb\xEA"],
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Canais de ar que permitem a circula\xE7\xE3o livre mantendo o beb\xEA sequinho por at\xE9 12 horas.",
      "Gel m\xE1gico que absorve e ret\xE9m a umidade no interior da fralda.",
      "Barreiras antivazamento refor\xE7adas que se adaptam suavemente ao corpo do beb\xEA.",
      "Lo\xE7\xE3o hipoalerg\xEAnica que previne assaduras e irrita\xE7\xF5es na pele sens\xEDvel."
    ],
    description: "A Fralda Pampers Confort Sec possui canais de ar que permitem que o ar circule livremente dentro da fralda, mantendo o bumbum do beb\xEA sequinho a noite toda com prote\xE7\xE3o antivazamento superior."
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
    badges: ["+1 n\xBA da sorte"],
    brand: "Pampers",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para beb\xEAs de 6 a 10kg com 70 unidades.",
      "Camada ultra-absorvente com canais de gel que n\xE3o deixam a fralda pesar.",
      "Barreiras antivazamento duplas e ajuste c\xF4modo.",
      "Prote\xE7\xE3o e conforto garantidos a noite toda."
    ],
    description: "Fralda Pampers Confort Sec tamanho M para beb\xEAs de 6 a 10kg, garantindo noites sequinhas e confort\xE1veis com canais de ar."
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
    badges: ["+1 n\xBA da sorte"],
    brand: "Pampers",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G indicado para beb\xEAs de 9 a 13kg com 60 unidades.",
      "Canais de ar que permitem a circula\xE7\xE3o de ar dentro da fralda.",
      "Gel M\xE1gico que absorve e ret\xE9m a umidade mantendo a pele seca.",
      "At\xE9 2 vezes mais sequinha a noite toda."
    ],
    description: "Fralda Descart\xE1vel Pampers Confort Sec tamanho G com 60 unidades. Proporciona noites tranquilas e dias confort\xE1veis para o seu beb\xEA."
  },
  {
    id: 1250309,
    name: "Fralda Pampers Confort Sec Tamanho XG 92 Unidades",
    size: "Tam XG (92un)",
    oldPrice: 157.83,
    price: 134.43,
    discount: 15,
    rating: 5,
    reviews: 310,
    options: 5,
    image: "/products/pampers_confort_sec_xg.webp",
    badges: ["+1 n\xBA da sorte"],
    brand: "Pampers",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para beb\xEAs de 11 a 15kg com 92 unidades no pacote econ\xF4mico.",
      "M\xE1xima reten\xE7\xE3o de umidade com canais de gel de alta absor\xE7\xE3o.",
      "Cintura el\xE1stica confort\xE1vel para beb\xEAs ativos.",
      "Prote\xE7\xE3o dia e noite sem vazamentos."
    ],
    description: "Fralda Pampers Confort Sec tamanho XG com 92 unidades no pacote econ\xF4mico com al\xE7a. M\xE1xima absor\xE7\xE3o e conforto para o beb\xEA."
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
    badges: ["+1 n\xBA da sorte"],
    brand: "Pampers",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para beb\xEAs acima de 14kg com 88 unidades no pacote econ\xF4mico.",
      "Canais de ar revolucion\xE1rios que deixam a pele respirar.",
      "Gel M\xE1gico que absorve e ret\xE9m a umidade mantendo a pele seca por at\xE9 12 horas.",
      "Barreiras antivazamento refor\xE7adas e cintura el\xE1stica confort\xE1vel."
    ],
    description: "A Fralda Pampers Confort Sec tamanho XXG foi desenvolvida para beb\xEAs acima de 14kg, oferecendo at\xE9 12 horas de absor\xE7\xE3o avan\xE7ada e prote\xE7\xE3o m\xE1xima contra vazamentos.",
    howToUse: "Coloque o beb\xEA sobre a fralda aberta, feche as abas adesivas el\xE1sticas ajustando ao corpinho.",
    composition: "Polpa de celulose, pol\xEDmero superabsorvente, polietileno, polipropileno, el\xE1sticos e lo\xE7\xE3o dermoprotetora com extrato de camomila.",
    warnings: ["Uso externo.", "Descarte no lixo comum, nunca no vaso sanit\xE1rio.", "Mantenha fora do alcance de crian\xE7as."],
    productCode: "1250310",
    ean: "7500435123457"
  },
  {
    id: 1104,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho P 50 Unidades",
    size: "Tam P (50un)",
    oldPrice: 111.03,
    price: 93.48,
    discount: 16,
    rating: 4.8,
    reviews: 142,
    options: 5,
    image: "/products/pampers_pants_p.webp",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Indicada para beb\xEAs de 5 a 8kg com 50 fraldas.",
      "Cintura el\xE1stica 360\xB0 f\xE1cil de vestir e rasgar para retirar.",
      "Canais de gel ultra-absorvente com reten\xE7\xE3o prolongada."
    ],
    description: "Fralda-cal\xE7a Pampers Pants tamanho P f\xE1cil de vestir mesmo com o beb\xEA em movimento, com prote\xE7\xE3o antivazamento de at\xE9 12 horas."
  },
  {
    id: 501,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho M 78 Unidades",
    size: "Tam M (78un)",
    oldPrice: 163.68,
    price: 140.28,
    discount: 14,
    rating: 4.8,
    reviews: 160,
    options: 5,
    image: "/products/pampers_pants_m.webp",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Veste como shortinho e ajusta-se a 360\xB0 no corpinho.",
      "Tamanho M indicado para beb\xEAs de 6 a 10kg com 78 unidades.",
      "Prote\xE7\xE3o antivazamento por at\xE9 12 horas."
    ],
    description: "Pampers Pants M proporciona facilidade m\xE1xima de troca e ajuste anat\xF4mico perfeito 360 graus."
  },
  {
    id: 2040,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho G 72 Unidades",
    size: "Tam G (72un)",
    oldPrice: 169.53,
    price: 146.13,
    discount: 14,
    rating: 4.9,
    reviews: 410,
    options: 5,
    image: "/products/pampers_pants_g.webp",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Veste como shortinho e ajusta-se automaticamente a 360\xB0 ao corpo do beb\xEA.",
      "Tamanho G indicado para 9 a 13kg com 72 unidades.",
      "Canais de gel que mant\xEAm o beb\xEA sequinho por at\xE9 12 horas."
    ],
    description: "Pampers Pants proporciona a m\xE1xima facilidade de troca com cintura el\xE1stica 360\xB0 superconfort\xE1vel."
  },
  {
    id: 20404,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho XG 64 Unidades",
    size: "Tam XG (64un)",
    oldPrice: 175.38,
    price: 151.98,
    discount: 13,
    rating: 4.9,
    reviews: 290,
    options: 5,
    image: "/products/pampers_pants_xg.webp",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para beb\xEAs de 12 a 15kg com 64 unidades.",
      "Cintura el\xE1stica 360\xB0 macia que n\xE3o aperta.",
      "At\xE9 12 horas de absor\xE7\xE3o sequinha e segura."
    ],
    description: "Pampers Pants tamanho XG combina a facilidade do shortinho com canais absorventes avan\xE7ados para noites ininterruptas de sono."
  },
  {
    id: 20405,
    name: "Fralda-Cal\xE7a Pampers Pants Ajuste Total Tamanho XXG 74 Unidades",
    size: "Tam XXG (74un)",
    oldPrice: 181.23,
    price: 157.83,
    discount: 13,
    rating: 4.9,
    reviews: 210,
    options: 5,
    image: "/products/pampers_pants_xxg.jpg",
    brand: "Pampers",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para beb\xEAs acima de 14kg com 74 unidades.",
      "Ajuste anat\xF4mico 360\xB0 perfeito para beb\xEAs grandes e ativos.",
      "Gel ultra-absorvente com barreiras duplas antivazamento."
    ],
    description: "Fralda-cal\xE7a Pampers Pants XXG com prote\xE7\xE3o m\xE1xima e cintura flex\xEDvel que acompanha os passos do beb\xEA com conforto absoluto."
  },
  {
    id: 20390,
    name: "Fralda Huggies Natural Care Tamanho P 36 Unidades",
    size: "Tam P (36un)",
    oldPrice: 84.9,
    price: 69.9,
    discount: 18,
    rating: 4.8,
    reviews: 180,
    options: 5,
    image: "/products/huggies_natural_care_p.jpg",
    badges: ["0% Fragr\xE2ncia", "Pele Sens\xEDvel"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Feita com fibras naturais e suaves como algod\xE3o.",
      "0% fragr\xE2ncia, parabenos e cloro elementar.",
      "Bolhas suaves de absor\xE7\xE3o que mant\xEAm a pele do rec\xE9m-nascido e beb\xEA sequinha."
    ],
    description: "Huggies Natural Care tamanho P especialmente formulada para a pele delicada dos beb\xEAs, oferecendo cuidado puro e natural com m\xE1xima suavidade."
  },
  {
    id: 20391,
    name: "Fralda Huggies Natural Care Tamanho M 78 Unidades",
    size: "Tam M (78un)",
    oldPrice: 139.9,
    price: 119.9,
    discount: 14,
    rating: 4.8,
    reviews: 260,
    options: 5,
    image: "/products/huggies_natural_care_m.jpg",
    badges: ["0% Fragr\xE2ncia", "Pele Sens\xEDvel"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Feita com fibras naturais e suaves como algod\xE3o.",
      "0% de fragr\xE2ncia, parabenos e cloro elementar.",
      "Bolhas suaves de absor\xE7\xE3o que mant\xEAm o beb\xEA sequinho."
    ],
    description: "Huggies Natural Care M com fibras naturais e 0% fragr\xE2ncia, testada dermatologicamente para o m\xE1ximo cuidado com a pele delicada do beb\xEA."
  },
  {
    id: 20392,
    name: "Fralda Huggies Natural Care Tamanho G 66 Unidades",
    size: "Tam G (66un)",
    oldPrice: 144.9,
    price: 124.9,
    discount: 14,
    rating: 4.8,
    reviews: 310,
    options: 5,
    image: "/products/huggies_natural_care_g.jpg",
    badges: ["0% Fragr\xE2ncia", "Pele Sens\xEDvel"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G para 9 a 12,5kg com 66 unidades.",
      "Fibras naturais com toque macio e respirabilidade m\xE1xima.",
      "Cuidado hipoalerg\xEAnico superior aprovado por pediatras."
    ],
    description: "Huggies Natural Care G mant\xE9m a pele do beb\xEA protegida e livre de assaduras com absor\xE7\xE3o inteligente e materiais naturais hipoalerg\xEAnicos."
  },
  {
    id: 20393,
    name: "Fralda Huggies Natural Care Tamanho XG 58 Unidades",
    size: "Tam XG (58un)",
    oldPrice: 149.9,
    price: 129.9,
    discount: 13,
    rating: 4.9,
    reviews: 220,
    options: 5,
    image: "/products/huggies_natural_care_xg.jpg",
    badges: ["0% Fragr\xE2ncia", "Pele Sens\xEDvel"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG para 12 a 15kg com 58 unidades.",
      "Dermatologicamente testada para peles extremamente sens\xEDveis.",
      "Absor\xE7\xE3o de at\xE9 12 horas sem vazamento."
    ],
    description: "Huggies Natural Care XG entrega a mais alta pureza e prote\xE7\xE3o suave para o beb\xEA em fase ativa de desenvolvimento."
  },
  {
    id: 20394,
    name: "Fralda Huggies Natural Care Tamanho XXG 54 Unidades",
    size: "Tam XXG (54un)",
    oldPrice: 154.9,
    price: 134.9,
    discount: 13,
    rating: 4.8,
    reviews: 175,
    options: 5,
    image: "/products/huggies_natural_care_xxg.jpg",
    badges: ["0% Fragr\xE2ncia", "Pele Sens\xEDvel"],
    brand: "Huggies",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG para beb\xEAs acima de 14kg com 54 unidades.",
      "Barreiras altas e suaves que evitam marcas na pele.",
      "Respirabilidade prolongada dia e noite."
    ],
    description: "Huggies Natural Care XXG proporciona m\xE1xima prote\xE7\xE3o para beb\xEAs grandinhos, preservando o equil\xEDbrio natural da pele com suavidade extrema."
  },
  {
    id: 1096086,
    name: "Fralda Huggies M\xE1xima Prote\xE7\xE3o Tamanho M 104 Unidades",
    size: "Tam M (104un)",
    oldPrice: 134.9,
    price: 114.9,
    discount: 15,
    rating: 4.8,
    reviews: 210,
    options: 5,
    image: "/products/huggies_pants_m.jpg",
    badges: ["F\xE1cil de Vestir", "Ajuste 360\xB0"],
    brand: "Huggies",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M para 5,5 a 9,5kg com 104 unidades.",
      "Cintura el\xE1stica 360\xB0 que n\xE3o marca a barriguinha.",
      "Canais acolchoados para distribui\xE7\xE3o uniforme do xixi."
    ],
    description: "Huggies Roupinha Prote\xE7\xE3o Acolchoada M proporciona total liberdade para o beb\xEA engatinhar e brincar sem risco de vazamento."
  },
  {
    id: 1096087,
    name: "Fralda Huggies M\xE1xima Prote\xE7\xE3o Tamanho G 136 Unidades",
    size: "Tam G (136un)",
    oldPrice: 139.9,
    price: 119.9,
    discount: 14,
    rating: 4.9,
    reviews: 295,
    options: 5,
    image: "/products/huggies_pants_g.jpg",
    badges: ["F\xE1cil de Vestir", "Ajuste 360\xB0"],
    brand: "Huggies",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho G para 9 a 12,5kg com 136 fraldas no pacote econ\xF4mico.",
      "Camada protetora ultra-acolchoada de toque suave.",
      "At\xE9 12 horas de prote\xE7\xE3o contra vazamentos."
    ],
    description: "Huggies Cal\xE7a Roupinha G alia conveni\xEAncia e conforto supremo, com ajuste flex\xEDvel que se adapta perfeitamente aos movimentos do corpinho."
  },
  {
    id: 1096088,
    name: "Fralda Huggies M\xE1xima Prote\xE7\xE3o Tamanho XG 82 Unidades",
    size: "Tam XG (82un)",
    oldPrice: 149.9,
    price: 129.9,
    discount: 13,
    rating: 4.8,
    reviews: 160,
    options: 5,
    image: "/products/huggies_pants_xg.jpg",
    badges: ["F\xE1cil de Vestir", "Ajuste 360\xB0"],
    brand: "Huggies",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG para 12 a 15kg com 82 fraldas no pacote econ\xF4mico.",
      "Cintura el\xE1stica 360\xB0 macia que veste como roupinha.",
      "Prote\xE7\xE3o acolchoada com barreiras antivazamento duplas."
    ],
    description: "Fralda formato cal\xE7a que veste como roupinha e possui cintura el\xE1stica 360 graus, facilitando a troca e garantindo total liberdade de movimento para o beb\xEA ativo."
  },
  {
    id: 1096089,
    name: "Fralda Huggies M\xE1xima Prote\xE7\xE3o Tamanho XXG 80 Unidades",
    size: "Tam XXG (80un)",
    oldPrice: 154.9,
    price: 134.9,
    discount: 13,
    rating: 4.8,
    reviews: 185,
    options: 5,
    image: "/products/huggies_pants_xxg.jpg",
    badges: ["F\xE1cil de Vestir", "Ajuste 360\xB0"],
    brand: "Huggies",
    category: "Mam\xE3e e Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG para beb\xEAs de 14 a 20kg com 80 unidades no pacote econ\xF4mico.",
      "Laterais rasga-f\xE1cil e fita de fechamento para descarte limpo.",
      "N\xFAcleo acolchoado superabsorvente para noites tranquilas."
    ],
    description: "Huggies Prote\xE7\xE3o Acolchoada formato roupinha tamanho XXG, perfeita para crian\xE7as em fase de desfralde com alta seguran\xE7a antivazamento."
  },
  {
    id: 21108,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper M 68 Unidades",
    size: "68un (M)",
    oldPrice: 79.9,
    price: 64.9,
    discount: 19,
    rating: 4.7,
    reviews: 110,
    options: 5,
    image: "/products/babysec_ultrasec_m.jpg",
    badges: ["Custo-Benef\xEDcio", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 5 a 9,5kg com 68 unidades no hiper pacote.",
      "Tecnologia de r\xE1pida absor\xE7\xE3o e cobertura suave.",
      "Fitas adesivas flex\xEDveis que abrem e fecham sem rasgar."
    ],
    description: "Babysec Ultrasec M garante noites sequinhas e dias com muito conforto e economia para o bolso da fam\xEDlia."
  },
  {
    id: 1109,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper G 60 Unidades",
    size: "60un (G)",
    oldPrice: 84.9,
    price: 69.9,
    discount: 18,
    rating: 4.7,
    reviews: 94,
    options: 5,
    image: "/products/babysec_ultrasec_g.jpg",
    badges: ["Custo-Benef\xEDcio", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "At\xE9 12 horas de prote\xE7\xE3o contra vazamentos.",
      "Fitas el\xE1sticas reajust\xE1veis que abrem e fecham quantas vezes precisar.",
      "Estampas divertidas e exclusivas da Galinha Pintadinha."
    ],
    description: "Babysec Ultrasec com tecnologia de r\xE1pida absor\xE7\xE3o e fitas reajust\xE1veis, mantendo o beb\xEA sequinho por at\xE9 12 horas com excelente custo-benef\xEDcio."
  },
  {
    id: 21112,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XG 56 Unidades",
    size: "56un (XG)",
    oldPrice: 89.9,
    price: 74.9,
    discount: 17,
    rating: 4.7,
    reviews: 88,
    options: 5,
    image: "/products/babysec_ultrasec_xg.jpg",
    badges: ["Custo-Benef\xEDcio", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 11 a 14kg com 56 unidades.",
      "Cintura anat\xF4mica com toque suave e barreiras refor\xE7adas.",
      "Absor\xE7\xE3o eficiente que aguenta a noite toda sem vazar."
    ],
    description: "Babysec Ultrasec XG com design divertido e prote\xE7\xE3o prolongada para beb\xEAs ativos e alegres."
  },
  {
    id: 21113,
    name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XXG 48 Unidades",
    size: "48un (XXG)",
    oldPrice: 94.9,
    price: 79.9,
    discount: 16,
    rating: 4.8,
    reviews: 74,
    options: 5,
    image: "/products/babysec_ultrasec_xxg.jpg",
    badges: ["Custo-Benef\xEDcio", "Galinha Pintadinha"],
    brand: "Babysec",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para beb\xEAs acima de 13kg com 48 unidades.",
      "M\xE1ximo rendimento e prote\xE7\xE3o duradoura.",
      "Materiais hipoalerg\xEAnicos e cobertura respir\xE1vel."
    ],
    description: "Fralda Babysec Ultrasec XXG desenvolvida para garantir noites tranquilas de sono com excelente absor\xE7\xE3o e \xF3timo rendimento."
  },
  {
    id: 21115,
    name: "Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e M 28 Unidades",
    size: "28un (M)",
    oldPrice: 54.9,
    price: 44.9,
    discount: 18,
    rating: 4.6,
    reviews: 90,
    options: 5,
    image: "/products/pompom_protek_m.jpg",
    brand: "Pom Pom",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 4 a 9kg com 28 unidades.",
      "Camada de prote\xE7\xE3o de m\xE3e com at\xE9 12 horas de absor\xE7\xE3o.",
      "Toque suave como algod\xE3o e barreiras refor\xE7adas."
    ],
    description: "Fralda Pom Pom Protek tamanho M oferece carinho e seguran\xE7a para o seu beb\xEA durante todo o dia e noite."
  },
  {
    id: 1110,
    name: "Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e G 24 Unidades",
    size: "24un (G)",
    oldPrice: 59.9,
    price: 49.9,
    discount: 17,
    rating: 4.6,
    reviews: 72,
    options: 5,
    image: "/products/pompom_protek_g.jpg",
    brand: "Pom Pom",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Canal superabsorvente com distribui\xE7\xE3o r\xE1pida do l\xEDquido.",
      "Orelhas el\xE1sticas mais confort\xE1veis.",
      "Lo\xE7\xE3o hidratante enriquecida com extrato de camomila."
    ],
    description: "Pom Pom Protek Prote\xE7\xE3o de M\xE3e com camada superabsorvente, orelhas el\xE1sticas e lo\xE7\xE3o hidratante com extrato de camomila para cuidar da pele do seu beb\xEA."
  },
  {
    id: 21116,
    name: "Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e XG 20 Unidades",
    size: "20un (XG)",
    oldPrice: 64.9,
    price: 54.9,
    discount: 15,
    rating: 4.7,
    reviews: 80,
    options: 5,
    image: "/products/pompom_protek_xg.jpg",
    brand: "Pom Pom",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 12 a 15kg com 20 unidades.",
      "Canais de ar que auxiliam na respira\xE7\xE3o da pele infantil.",
      "Fitas laterais ajust\xE1veis de fixa\xE7\xE3o segura."
    ],
    description: "Pom Pom Protek XG garante bem-estar e prote\xE7\xE3o cont\xEDnua com f\xF3rmula suave e absor\xE7\xE3o prolongada."
  },
  {
    id: 21117,
    name: "Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e XXG 18 Unidades",
    size: "18un (XXG)",
    oldPrice: 69.9,
    price: 59.9,
    discount: 14,
    rating: 4.6,
    reviews: 62,
    options: 5,
    image: "/products/pompom_protek_xxg.jpg",
    brand: "Pom Pom",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para beb\xEAs de 14 a 18kg com 18 unidades.",
      "Prote\xE7\xE3o de at\xE9 12 horas sem vazamento.",
      "Dermatologicamente testada para evitar assaduras."
    ],
    description: "Pom Pom Protek XXG cuida com carinho dos beb\xEAs grandinhos, oferecendo m\xE1xima absor\xE7\xE3o e toque suave."
  },
  {
    id: 21118,
    name: "Fralda MamyPoko Fralda-Cal\xE7a Dia e Noite P 22 Unidades",
    size: "22un (P)",
    oldPrice: 94.9,
    price: 48.59,
    discount: 16,
    rating: 4.9,
    reviews: 120,
    options: 5,
    image: "/products/mamypoko_calca_p.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho P indicado para 3 a 9kg com 22 unidades.",
      "Cintura superel\xE1stica e suave que n\xE3o aperta.",
      "Absor\xE7\xE3o japonesa instant\xE2nea que n\xE3o empelota."
    ],
    description: "Fralda-cal\xE7a MamyPoko P com exclusiva tecnologia japonesa, facilitando a troca e mantendo o corpinho sequinho e livre de assaduras."
  },
  {
    id: 21119,
    name: "Fralda MamyPoko Fralda-Cal\xE7a Dia e Noite M 18 Unidades",
    size: "18un (M)",
    oldPrice: 89.9,
    price: 64.72,
    discount: 14,
    rating: 4.9,
    reviews: 140,
    options: 5,
    image: "/products/mamypoko_calca_m.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho M indicado para 7 a 10kg com 18 unidades.",
      "Caminhos de ar respir\xE1veis que liberam calor e umidade.",
      "Veste r\xE1pido mesmo com o beb\xEA em movimento."
    ],
    description: "MamyPoko Fralda-Cal\xE7a Dia e Noite M garante conforto sem igual e absor\xE7\xE3o de at\xE9 12 horas com toque ultrassuave."
  },
  {
    id: 1111,
    name: "Fralda MamyPoko Fralda-Cal\xE7a Dia e Noite G 30 Unidades",
    size: "30un (G)",
    oldPrice: 114.9,
    price: 94.9,
    discount: 17,
    rating: 4.9,
    reviews: 156,
    options: 5,
    image: "/products/mamypoko_calca_g.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tecnologia japonesa de absor\xE7\xE3o profunda que n\xE3o pesa nem empelota.",
      "Cintura macia que estica at\xE9 duas vezes sem apertar a barriguinha.",
      "Caminhos de ar respir\xE1veis que liberam calor e umidade."
    ],
    description: "Fralda-cal\xE7a com tecnologia japonesa exclusiva, canais de ar respir\xE1veis e absor\xE7\xE3o r\xE1pida que n\xE3o pesa nem empelota, proporcionando conforto inigual\xE1vel."
  },
  {
    id: 21120,
    name: "Fralda MamyPoko Fralda-Cal\xE7a Dia e Noite XG 26 Unidades",
    size: "26un (XG)",
    oldPrice: 119.9,
    price: 99.9,
    discount: 17,
    rating: 4.9,
    reviews: 135,
    options: 5,
    image: "/products/mamypoko_calca_xg.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XG indicado para 12 a 17kg com 26 unidades.",
      "Dupla prote\xE7\xE3o contra vazamentos nas perninhas.",
      "Fita de descarte f\xE1cil e pr\xE1tica para o dia a dia."
    ],
    description: "MamyPoko Fralda-Cal\xE7a XG para beb\xEAs cheios de energia, garantindo prote\xE7\xE3o dia e noite com a mais avan\xE7ada tecnologia japonesa."
  },
  {
    id: 21121,
    name: "Fralda MamyPoko Fralda-Cal\xE7a Dia e Noite XXG 22 Unidades",
    size: "22un (XXG)",
    oldPrice: 124.9,
    price: 104.9,
    discount: 16,
    rating: 4.9,
    reviews: 110,
    options: 5,
    image: "/products/mamypoko_calca_xxg.jpg",
    badges: ["Tecnologia Japonesa", "Cintura Super Macia"],
    brand: "MamyPoko",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Fraldas",
    bullets: [
      "Tamanho XXG indicado para beb\xEAs de 15 a 26kg com 22 unidades.",
      "Cintura super macia com ajuste amplo e seguro.",
      "Ultra-absorvente, mantendo a pele seca por at\xE9 12 horas."
    ],
    description: "Fralda-cal\xE7a MamyPoko XXG projetada para crian\xE7as maiores, unindo alta capacidade de reten\xE7\xE3o ao conforto insuper\xE1vel do modelo veste-f\xE1cil."
  },
  {
    id: 1112,
    name: "Composto L\xE1cteo Ninho Fases 1+ Nestl\xE9 800g",
    size: "800g",
    oldPrice: 51.9,
    price: 44.9,
    discount: 13,
    rating: 4.9,
    reviews: 340,
    image: "/products/ninho_fases_1.jpg",
    badges: ["Rico em Fibras e Vitaminas"],
    brand: "Ninho",
    category: "Mam\xE3e & Beb\xEA",
    subcategory: "Alimenta\xE7\xE3o Infantil",
    bullets: [
      "Formulado especialmente para crian\xE7as a partir de 1 ano.",
      "Rico em imunonutrientes essenciais: Zinco, Sel\xEAnio e Vitaminas A, C e D.",
      "Cont\xE9m prebi\xF3ticos que auxiliam na sa\xFAde intestinal."
    ],
    description: "Ninho Fases 1+ formulado especialmente para crian\xE7as na fase pr\xE9-escolar com imunonutrientes essenciais (Zinco, Vitaminas A, C e D) e prebi\xF3ticos."
  }
];
var remediosProducts = [
  {
    id: 1201,
    name: "Dorflex Analg\xE9sico e Relaxante Muscular 36 Comprimidos",
    size: "36 Comprimidos",
    oldPrice: 29.9,
    price: 25.99,
    discount: 13,
    image: "/products/dorflex_36.jpg",
    badges: ["Mais Vendido Farm\xE1cia"],
    brand: "Dorflex",
    category: "Medicamentos",
    subcategory: "Dores Musculares",
    bullets: [
      "A\xE7\xE3o analg\xE9sica associada ao relaxamento muscular.",
      "Al\xEDvio r\xE1pido de dores de cabe\xE7a tensionais e contraturas musculares.",
      "F\xF3rmula comprovada com Dipirona, Orfenadrina e Cafe\xEDna."
    ],
    description: "Dorflex \xE9 indicado no al\xEDvio da dor associada a contraturas musculares decorrentes de processos traum\xE1ticos ou inflamat\xF3rios e em cefaleias tensionais.",
    composition: "Dipirona monoidratada 300mg, citrato de orfenadrina 35mg, cafe\xEDna anidra 50mg.",
    dosage: "Tomar 1 a 2 comprimidos, 3 a 4 vezes ao dia. N\xE3o ultrapassar o limite de 8 comprimidos ao dia.",
    warnings: [
      "DORFLEX \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM M\xC9DICO OU UM FARMAC\xCAUTICO. LEIA A BULA.",
      "Contraindicado em pacientes com glaucoma, obstru\xE7\xE3o pil\xF3rica ou duodenal, acalasia do es\xF4fago e hipertrofia prost\xE1tica."
    ]
  },
  {
    id: 1202,
    name: "Neosaldina Analg\xE9sico para Enxaqueca e Dor de Cabe\xE7a 20 Dr\xE1geas",
    size: "20 Dr\xE1geas",
    oldPrice: 31.9,
    price: 26.5,
    discount: 17,
    image: "/products/neosaldina_20drageas.webp",
    badges: ["A\xE7\xE3o em 15 minutos"],
    brand: "Neosaldina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    bullets: [
      "Come\xE7a a agir a partir de 15 minutos.",
      "Combina\xE7\xE3o analg\xE9sica e antiespasm\xF3dica eficaz.",
      "Indicada para dores de cabe\xE7a e crises de enxaqueca."
    ],
    description: "Neosaldina \xE9 um medicamento com atividade analg\xE9sica e antiespasm\xF3dica indicado para o tratamento de diversos tipos de dor de cabe\xE7a e c\xF3licas.",
    composition: "Dipirona 300mg, mucato de isometepteno 30mg, cafe\xEDna 30mg por dr\xE1gea.",
    dosage: "Tomar 1 a 2 dr\xE1geas em dose \xFAnica a cada 6 horas se necess\xE1rio. N\xE3o ultrapassar 8 dr\xE1geas di\xE1rias.",
    warnings: [
      "NEOSALDINA \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O M\xC9DICO OU O FARMAC\xCAUTICO. LEIA A BULA."
    ]
  },
  {
    id: 1203,
    name: "Torsilax Relaxante Muscular e Anti-inflamat\xF3rio 30 Comprimidos",
    size: "30 Comprimidos",
    oldPrice: 28.9,
    price: 24.9,
    discount: 14,
    image: "/products/torsilax_30comp_real.jpg",
    brand: "Torsilax",
    category: "Medicamentos",
    subcategory: "Dores Musculares",
    bullets: [
      "A\xE7\xE3o analg\xE9sica, anti-inflamat\xF3ria e relaxante muscular.",
      "Indicado para lombalgias, torcicolos, artrite e contraturas dolorosas.",
      "Combina\xE7\xE3o de Cafe\xEDna, Carisoprodol, Diclofenaco S\xF3dico e Paracetamol."
    ],
    description: "Torsilax \xE9 indicado para o tratamento do reumatismo, lombalgias, torcicolos, crises agudas de gota e estados dolorosos musculares intensos.",
    composition: "Cafe\xEDna 30mg, carisoprodol 125mg, diclofenaco s\xF3dico 50mg, paracetamol 300mg.",
    warnings: [
      "TORSILAX \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. PROCURE UM M\xC9DICO OU UM FARMAC\xCAUTICO. LEIA A BULA."
    ]
  },
  {
    id: 1204,
    name: "Novalgina Dipirona Monoidratada 1g 20 Comprimidos",
    size: "20 Comprimidos",
    oldPrice: 39.9,
    price: 34.9,
    discount: 13,
    image: "/products/novalgina_1g_20comp.webp",
    badges: ["Alta Pot\xEAncia", "A\xE7\xE3o R\xE1pida"],
    brand: "Novalgina",
    category: "Medicamentos",
    subcategory: "Dor e Febre",
    bullets: [
      "Dose m\xE1xima de 1g de dipirona em comprimido \xFAnico.",
      "A\xE7\xE3o antit\xE9rmica e analg\xE9sica potente para febre alta e dores intensas.",
      "Marca de refer\xEAncia mundial em al\xEDvio da dor."
    ],
    description: "Novalgina 1g \xE9 um analg\xE9sico e antit\xE9rmico \xE0 base de dipirona monoidratada com a\xE7\xE3o r\xE1pida e potente contra febre e dores moderadas a intensas.",
    composition: "Dipirona monoidratada 1000mg por comprimido.",
    dosage: "Adultos e adolescentes acima de 15 anos: 1/2 a 1 comprimido at\xE9 4 vezes ao dia.",
    warnings: [
      "NOVALGINA \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O M\xC9DICO OU FARMAC\xCAUTICO. LEIA A BULA."
    ]
  },
  {
    id: 1200,
    name: "Dipirona Monoidratada 500mg 10 comprimidos Prati Donaduzzi Gen\xE9rico",
    activeIngredient: "Dipirona Sodica",
    size: "10 Comprimidos",
    oldPrice: 6.37,
    price: 3.49,
    discount: 45,
    options: 5,
    image: "/products/dipirona_prati_500mg.png",
    badges: ["Gen\xE9rico"],
    brand: "Prati Donaduzzi",
    category: "Medicamentos",
    subcategory: "Gen\xE9ricos",
    bullets: [
      "Medicamento gen\xE9rico Prati Donaduzzi com efic\xE1cia comprovada.",
      "A\xE7\xE3o analg\xE9sica e antit\xE9rmica para al\xEDvio r\xE1pido de dor e febre.",
      "Uso oral adulto e pedi\xE1trico acima de 3 meses."
    ],
    description: "Dipirona Monoidratada 500mg com 10 comprimidos \xE9 um medicamento gen\xE9rico indicado como analg\xE9sico e antit\xE9rmico para o al\xEDvio de dor e febre.",
    composition: "Dipirona Monoidratada 500mg.",
    warnings: ["DIPIRONA \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."]
  },
  {
    id: 1208,
    name: "Buscopan Composto 20 Comprimidos Revestidos",
    size: "20 Comprimidos Revestidos",
    oldPrice: 28.5,
    price: 23.9,
    discount: 16,
    image: "/products/buscopan_composto_20comp.webp",
    badges: ["Al\xEDvio de C\xF3licas"],
    brand: "Buscopan",
    category: "Medicamentos",
    subcategory: "Dores Abdominais",
    bullets: [
      "Combina\xE7\xE3o de Butilbrometo de Escopolamina com Dipirona.",
      "Al\xEDvio r\xE1pido e eficaz de c\xF3licas menstruais, estomacais e intestinais.",
      "A\xE7\xE3o antiespasm\xF3dica direta no foco da dor."
    ],
    description: "Buscopan Composto \xE9 a combina\xE7\xE3o do consagrado antiespasm\xF3dico Butilbrometo de Escopolamina com o analg\xE9sico Dipirona, ideal para dores e c\xF3licas na barriga.",
    composition: "Butilbrometo de escopolamina 10mg + Dipirona 250mg.",
    warnings: ["BUSCOPAN COMPOSTO \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE SEU M\xC9DICO."]
  },
  {
    id: 1209,
    name: "Luftal Gel Caps 125mg para Gases 10 C\xE1psulas Gelatinosas",
    size: "10 C\xE1psulas",
    oldPrice: 25.9,
    price: 21.9,
    discount: 15,
    image: "/products/luftal_gelcaps.jpg",
    badges: ["Age em 10 min", "Gel Caps"],
    brand: "Luftal",
    category: "Medicamentos",
    subcategory: "Digest\xE3o",
    bullets: [
      "C\xE1psulas gelatinosas moles f\xE1ceis de engolir.",
      "A\xE7\xE3o r\xE1pida a partir de 10 minutos contra gases e estufamento.",
      "Rompe as bolhas gastrointestinais facilitando sua elimina\xE7\xE3o natural."
    ],
    description: "Luftal Gel Caps age diretamente no est\xF4mago e intestino rompendo as bolhas de g\xE1s, aliviando o estufamento, desconforto abdominal e c\xF3licas por flatul\xEAncia.",
    composition: "Simeticona 125mg.",
    warnings: ["LUFTAL \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. LEIA A BULA."]
  },
  {
    id: 1211,
    name: "Omeprazol 20mg Gen\xE9rico Teuto 28 C\xE1psulas",
    size: "28 C\xE1psulas",
    oldPrice: 22.9,
    price: 14.9,
    discount: 35,
    image: "/products/omeprazol_medley_20mg.jpg",
    badges: ["Tratamento do Refluxo"],
    brand: "Teuto Gen\xE9rico",
    category: "Medicamentos",
    subcategory: "Gen\xE9ricos",
    bullets: [
      "Inibidor da bomba de pr\xF3tons para redu\xE7\xE3o da acidez g\xE1strica.",
      "Tratamento cont\xEDnuo de gastrite, refluxo e queima\xE7\xE3o estomacal.",
      "Embalagem com 28 c\xE1psulas para ciclo completo de 4 semanas."
    ],
    description: "Inibidor da bomba de pr\xF3tons indicado para gastrite, refluxo gastroesof\xE1gico, azia e queima\xE7\xE3o estomacal.",
    composition: "Omeprazol 20mg em microgr\xE2nulos gastrorresistentes.",
    warnings: ["OMEPRAZOL \xC9 UM MEDICAMENTO. SEU USO PODE TRAZER RISCOS. CONSULTE O M\xC9DICO."]
  },
  {
    id: 1212,
    name: "Enterogermina Probi\xF3tico 2 Bilh\xF5es 10 Flaconetes 5ml",
    size: "10 Flaconetes de 5ml",
    oldPrice: 58.9,
    price: 49.9,
    discount: 15,
    image: "/products/enterogermina_10flac.jpg",
    badges: ["Flora Intestinal", "Pronto para Beber"],
    brand: "Enterogermina",
    category: "Medicamentos",
    subcategory: "Digest\xE3o",
    bullets: [
      "2 bilh\xF5es de esporos de Bacillus clausii por flaconete.",
      "Resiste \xE0 acidez g\xE1strica e chega vivo ao intestino.",
      "Restaura e equilibra a flora intestinal ap\xF3s epis\xF3dios de diarreia ou uso de antibi\xF3ticos."
    ],
    description: "Probi\xF3tico \xE0 base de esporos de Bacillus clausii indicado como adjuvante no tratamento de diarreia e desequil\xEDbrios da flora bacteriana intestinal.",
    warnings: ["ENTEROGERMINA \xC9 UM MEDICAMENTO. LEIA A BULA."]
  },
  {
    id: 1213,
    name: "Col\xEDrio Hyabak 0,15% Hidratante Ocular 10ml",
    size: "10ml",
    oldPrice: 69.9,
    price: 59.9,
    discount: 14,
    image: "/products/hyabak_10ml.jpg",
    badges: ["Sem Conservantes", "\xC1cido Hialur\xF4nico"],
    brand: "Hyabak",
    category: "Medicamentos",
    subcategory: "Oftalmol\xF3gicos",
    bullets: [
      "Hialuronato de s\xF3dio 0,15% para hidrata\xE7\xE3o prolongada da superf\xEDcie ocular.",
      "Frasco multidose com tecnologia Abak sem conservantes.",
      "Compat\xEDvel com todos os tipos de lentes de contato."
    ],
    description: "Solu\xE7\xE3o oft\xE1lmica lubrificante e hidratante com hialuronato de s\xF3dio a 0,15%, sem conservantes, ideal para olhos secos e usu\xE1rios de lentes de contato.",
    warnings: ["HYABAK \xC9 UM PRODUTO PARA SA\xDADE. CONSULTE SEU OFTALMOLOGISTA."]
  },
  {
    id: 1215,
    name: "Sensor FreeStyle Libre 2 Plus Monitor Cont\xEDnuo de Glicose",
    size: "1 Sensor",
    oldPrice: 359,
    price: 319.9,
    discount: 11,
    image: "/products/freestyle_libre_2.jpg",
    badges: ["Bluetooth Cont\xEDnuo", "Sem Picadas"],
    brand: "Abbott FreeStyle",
    category: "Medicamentos",
    subcategory: "Diabetes & Monitoramento",
    bullets: [
      "Monitoramento cont\xEDnuo de glicose com leituras enviadas a cada minuto via Bluetooth.",
      "Dura\xE7\xE3o de at\xE9 15 dias de uso cont\xEDnuo.",
      "Alarmes opcionais personaliz\xE1veis para glicose alta ou baixa."
    ],
    description: "Sensor de monitoramento de glicose cont\xEDnuo que envia leituras a cada minuto diretamente para o smartphone sem necessidade de picada de dedo."
  }
];
var dermocosmeticosProducts = [
  {
    id: 1303,
    name: "B\xE1lsamo Reparador Cicaplast Baume B5+ La Roche-Posay 40ml",
    size: "40ml",
    oldPrice: 40,
    price: 36,
    discount: 13,
    rating: 4.9,
    reviews: 410,
    image: "/products/cicaplast_baume_b5.jpg",
    badges: ["Multirreparador", "Pantenol B5+"],
    brand: "La Roche-Posay",
    category: "Dermocosm\xE9ticos",
    subcategory: "Hidratantes Corporais",
    bullets: [
      "Novo complexo pr\xE9-bi\xF3tico Tribioma com Pantenol 5% e Madecassoside.",
      "Acalma e repara a barreira cut\xE2nea desde a primeira aplica\xE7\xE3o.",
      "Indicado para rosto, corpo, l\xE1bios, tatuagens e p\xF3s-procedimentos."
    ],
    description: "B\xE1lsamo calmante e reparador para pele ressecada, tatuada, p\xF3s-procedimentos e \xE1reas \xE1speras do corpo e rosto."
  },
  {
    id: 1305,
    name: "Lo\xE7\xE3o Hidratante Corporal CeraVe 473ml",
    size: "473ml",
    oldPrice: 109.9,
    price: 89.9,
    discount: 18,
    rating: 4.9,
    reviews: 320,
    image: "/products/cerave_locao_473ml.jpg",
    badges: ["3 Ceramidas", "Tecnologia MVE"],
    brand: "CeraVe",
    category: "Dermocosm\xE9ticos",
    subcategory: "Hidratantes Corporais",
    bullets: [
      "3 ceramidas essenciais id\xEAnticas \xE0s da pele + \xC1cido Hialur\xF4nico.",
      "Tecnologia patenteada MVE com libera\xE7\xE3o cont\xEDnua de hidrata\xE7\xE3o por 24 horas.",
      "Textura leve, sem perfume e de r\xE1pida absor\xE7\xE3o."
    ],
    description: "Hidrata e restaura a barreira protetora da pele de forma cont\xEDnua com libera\xE7\xE3o prolongada de ceramidas e \xE1cido hialur\xF4nico."
  },
  {
    id: 1306,
    name: "Creme Multirrestaurador Bepantol Derma 20g",
    size: "20g",
    oldPrice: 39.9,
    price: 34.9,
    discount: 13,
    rating: 4.9,
    reviews: 198,
    image: "/products/bepantol_derma_20g.webp",
    badges: ["Dexpantenol Pr\xF3-Vit B5"],
    brand: "Bepantol",
    category: "Dermocosm\xE9ticos",
    subcategory: "Rosto",
    bullets: [
      "Alta concentra\xE7\xE3o de Pr\xF3-Vitamina B5 (Dexpantenol).",
      "Restaura\xE7\xE3o profunda de \xE1reas ressecadas como cotovelos, joelhos e calcanhares.",
      "Acalma a pele sensibilizada e hidrata cut\xEDculas e l\xE1bios."
    ],
    description: "F\xF3rmula concentrada com pr\xF3-vitamina B5 que acelera a renova\xE7\xE3o celular e recupera a hidrata\xE7\xE3o labial, cotovelos e \xE1reas ressecadas."
  },
  {
    id: 1307,
    name: "S\xE9rum Facial Antirrugas Skinceuticals P-tiox 30ml",
    size: "30ml",
    oldPrice: 525.5,
    price: 469.9,
    discount: 11,
    rating: 4.9,
    reviews: 86,
    image: "/products/skinceuticals_ptiox.jpg",
    badges: ["Inova\xE7\xE3o Pept\xEDdica", "Efeito Botox-like"],
    brand: "Skinceuticals",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    bullets: [
      "Complexo de pept\xEDdeos avan\xE7ados que modula as contra\xE7\xF5es musculares faciais.",
      "Suaviza 9 tipos de rugas de express\xE3o, inclusive p\xE9s de galinha e linhas da testa.",
      "Melhora visivelmente a textura e o vi\xE7o da pele em 1 semana."
    ],
    description: "S\xE9rum pept\xEDdico multi-alvo modulador que reduz visivelmente linhas de express\xE3o, melhora a textura e a luminosidade da pele."
  },
  {
    id: 1308,
    name: "S\xE9rum Clareador Facial Eucerin Anti-Pigment Dual S\xE9rum 30ml",
    size: "30ml",
    oldPrice: 249.9,
    price: 219.9,
    discount: 12,
    rating: 4.8,
    reviews: 134,
    image: "/products/eucerin_dual_anti_pigment.jpg",
    badges: ["Thiamidol Patenteado"],
    brand: "Eucerin",
    category: "Dermocosm\xE9ticos",
    subcategory: "S\xE9runs e Tratamento",
    bullets: [
      "Ativo patenteado Thiamidol que atua na raiz da hiperpigmenta\xE7\xE3o.",
      "Reduz manchas escuras em at\xE9 75% com uso cont\xEDnuo.",
      "\xC1cido Hialur\xF4nico concentrado para hidrata\xE7\xE3o intensiva."
    ],
    description: "Combina o ativo patenteado Thiamidol com \xE1cido hialur\xF4nico para clarear e prevenir manchas escuras enquanto hidrata profundamente."
  }
];
var vitaminasSuplementosProducts = [
  {
    id: 1403,
    name: "Multivitam\xEDnico Centrum de A a Zinco 60 Comprimidos",
    size: "60 Comprimidos",
    oldPrice: 94.9,
    price: 79.9,
    discount: 16,
    rating: 4.8,
    reviews: 280,
    image: "/products/centrum_de_a_a_zinco_60comp.jpg",
    badges: ["Energia & Imunidade"],
    brand: "Centrum",
    category: "Vida Saud\xE1vel",
    subcategory: "Vitaminas",
    bullets: [
      "Complexo de vitaminas e minerais essenciais de A a Zinco.",
      "Apoia a imunidade, energia di\xE1ria e a\xE7\xE3o antioxidante celular.",
      "N\xE3o cont\xE9m gl\xFAten e tem zero calorias."
    ],
    description: "Suplemento vitam\xEDnico e mineral completo com nutrientes essenciais que auxiliam no metabolismo energ\xE9tico e funcionamento do sistema imune."
  },
  {
    id: 1405,
    name: "Di-Magn\xE9sio Malato 500mg bwell 60 C\xE1psulas",
    size: "60 C\xE1psulas",
    oldPrice: 62.9,
    price: 49.9,
    discount: 21,
    rating: 4.8,
    reviews: 145,
    image: "/products/dimagnesio_malato_bwell.webp",
    badges: ["Exclusivo Droga Raia"],
    brand: "bwell",
    category: "Vida Saud\xE1vel",
    subcategory: "Vitaminas & Minerais",
    bullets: [
      "Magn\xE9sio ligado a mol\xE9culas de \xE1cido m\xE1lico para m\xE1xima biodisponibilidade.",
      "Auxilia na fun\xE7\xE3o muscular, preven\xE7\xE3o de c\xE2imbras e energia celular.",
      "Marca exclusiva de sa\xFAde e bem-estar da Droga Raia."
    ],
    description: "Magn\xE9sio de alta absor\xE7\xE3o e biodisponibilidade que auxilia no funcionamento muscular, neuromuscular e no metabolismo energ\xE9tico."
  }
];
var higieneBucalPersonalProducts = [
  {
    id: 1501,
    name: "Enxaguante Bucal Listerine Cool Mint 500ml",
    size: "500ml",
    oldPrice: 27.9,
    price: 22.9,
    discount: 18,
    rating: 4.9,
    reviews: 320,
    image: "/products/listerine_cool_mint_500ml.jpg",
    badges: ["Mata 99% dos Germes"],
    brand: "Listerine",
    category: "Beleza & Higiene",
    subcategory: "Higiene Bucal",
    bullets: [
      "Elimina at\xE9 99,9% dos germes que causam placa, gengivite e mau h\xE1lito.",
      "At\xE9 24 horas de prote\xE7\xE3o com uso di\xE1rio cont\xEDnuo.",
      "Sabor menta refrescante duradouro."
    ],
    description: "Elimina at\xE9 99,9% dos germes que causam mau h\xE1lito, placa bacteriana e gengivite, garantindo prote\xE7\xE3o por at\xE9 24 horas."
  },
  {
    id: 1502,
    name: "Desodorante Antitranspirante Rexona Men Sem Perfume Roll-on 50ml",
    size: "50ml",
    oldPrice: 16.9,
    price: 13.9,
    discount: 18,
    rating: 4.8,
    reviews: 175,
    image: "/products/rexona_men_sem_perfume_rollon.jpg",
    badges: ["72h Prote\xE7\xE3o"],
    brand: "Rexona",
    category: "Beleza & Higiene",
    subcategory: "Desodorantes",
    bullets: [
      "Prote\xE7\xE3o antitranspirante por at\xE9 72 horas ativada pelo movimento.",
      "0% \xE1lcool et\xEDlico e 0% fragr\xE2ncia para evitar alergias e odores.",
      "Dermatologicamente testado para peles sens\xEDveis."
    ],
    description: "Prote\xE7\xE3o ativada pelo movimento sem fragr\xE2ncia e sem \xE1lcool et\xEDlico, n\xE3o irrita a pele e previne odores por 72 horas."
  }
];
var RELATED_SUBCATEGORIES = {
  // Higiene bucal
  "higiene bucal": ["higiene bucal"],
  // Creme dental → escova, fio dental, enxaguante, etc.
  "pasta": ["higiene bucal"],
  "creme dental": ["higiene bucal"],
  "escova": ["higiene bucal"],
  "fio dental": ["higiene bucal"],
  "flosser": ["higiene bucal"],
  "enxaguante": ["higiene bucal"],
  "mouthwash": ["higiene bucal"],
  // Fraldas & Higiene do Bebê
  "fraldas": ["fraldas", "higiene do beb\xEA", "compostos l\xE1cteos", "len\xE7os umedecidos"],
  "higiene do beb\xEA": ["higiene do beb\xEA", "fraldas"],
  // Dermocosméticos / Pele
  "rosto": ["rosto", "s\xE9runs e tratamento", "tratamento de acne", "prote\xE7\xE3o solar", "hidratantes corporais", "limpeza facial"],
  "tratamento de acne": ["tratamento de acne", "rosto", "s\xE9runs e tratamento"],
  "s\xE9runs e tratamento": ["s\xE9runs e tratamento", "rosto", "tratamento de acne", "hidratantes corporais"],
  "hidratantes corporais": ["hidratantes corporais", "rosto", "s\xE9runs e tratamento"],
  "prote\xE7\xE3o solar": ["prote\xE7\xE3o solar", "rosto", "s\xE9runs e tratamento"],
  "limpeza facial": ["limpeza facial", "rosto", "s\xE9runs e tratamento", "tratamento de acne"],
  // Cabelo / Cabelos
  "cabelos": ["shampoo", "condicionador", "pentes e escovas", "m\xE1scara capilar", "finalizadores para cabelo", "tratamento capilar", "cabelo e unhas"],
  "cabelo": ["shampoo", "condicionador", "pentes e escovas", "m\xE1scara capilar", "finalizadores para cabelo", "tratamento capilar", "cabelo e unhas"],
  "shampoo": ["shampoo", "condicionador", "pentes e escovas", "m\xE1scara capilar", "finalizadores para cabelo", "tratamento capilar"],
  "condicionador": ["condicionador", "shampoo", "m\xE1scara capilar", "pentes e escovas", "finalizadores para cabelo"],
  "pentes e escovas": ["pentes e escovas", "shampoo", "condicionador", "m\xE1scara capilar", "finalizadores para cabelo"],
  "pente": ["pentes e escovas", "shampoo", "condicionador", "m\xE1scara capilar", "finalizadores para cabelo"],
  "m\xE1scara capilar": ["m\xE1scara capilar", "shampoo", "condicionador", "pentes e escovas", "finalizadores para cabelo"],
  "finalizadores para cabelo": ["finalizadores para cabelo", "cabelo e unhas", "shampoo", "condicionador", "pentes e escovas", "m\xE1scara capilar"],
  "tratamento capilar": ["tratamento capilar", "shampoo", "condicionador", "m\xE1scara capilar", "finalizadores para cabelo"],
  "cabelo e unhas": ["cabelo e unhas", "finalizadores para cabelo", "shampoo"],
  // Desodorantes
  "desodorantes": ["desodorantes"],
  // Vitaminas / Suplementos
  "vitaminas": ["vitaminas", "suplementos", "probi\xF3ticos", "col\xE1geno", "vitaminas & minerais", "complementos alimentares", "nutri\xE7\xE3o especializada"],
  "suplementos": ["suplementos", "vitaminas", "probi\xF3ticos", "col\xE1geno", "performance & fitness"],
  "col\xE1geno": ["col\xE1geno", "vitaminas", "suplementos"],
  "probi\xF3ticos": ["probi\xF3ticos", "vitaminas", "suplementos", "digest\xE3o"],
  "performance & fitness": ["performance & fitness", "suplementos", "vitaminas & minerais"],
  "vitaminas & minerais": ["vitaminas & minerais", "vitaminas", "suplementos"],
  // Dor & Febre
  "dor e febre": ["dor e febre", "dores musculares", "dores abdominais", "gen\xE9ricos"],
  "dores musculares": ["dores musculares", "dor e febre", "gen\xE9ricos"],
  "dores abdominais": ["dores abdominais", "dor e febre", "gen\xE9ricos"],
  "gen\xE9ricos": ["gen\xE9ricos", "dor e febre"],
  // Digestão
  "digest\xE3o": ["digest\xE3o", "probi\xF3ticos"],
  // Cuidados íntimos
  "cuidados \xEDntimos": ["cuidados \xEDntimos", "cuidados para a mam\xE3e"],
  "cuidados para a mam\xE3e": ["cuidados para a mam\xE3e", "cuidados \xEDntimos", "fraldas"]
};
function extractNameTokens(name) {
  return name.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúüçñ\s]/gi, " ").split(/\s+/).filter((t) => t.length > 3);
}
function getSimilarProducts(current, candidates, limit = 8) {
  const currentSubLower = (current.subcategory || "").toLowerCase().trim();
  const currentCatLower = (current.category || "").toLowerCase().trim();
  const currentNameTokens = extractNameTokens(current.name);
  const relatedSubcats = /* @__PURE__ */ new Set();
  for (const [key, values] of Object.entries(RELATED_SUBCATEGORIES)) {
    if (currentSubLower.includes(key) || key.includes(currentSubLower)) {
      values.forEach((v) => relatedSubcats.add(v.toLowerCase()));
    }
  }
  for (const token of currentNameTokens) {
    for (const [key, values] of Object.entries(RELATED_SUBCATEGORIES)) {
      if (key.includes(token) || token.includes(key)) {
        values.forEach((v) => relatedSubcats.add(v.toLowerCase()));
      }
    }
  }
  const scored = candidates.filter((p) => p.id !== current.id).map((p) => {
    const subLower = (p.subcategory || "").toLowerCase().trim();
    const catLower = (p.category || "").toLowerCase().trim();
    const nameTokens = extractNameTokens(p.name);
    let score = 0;
    if (subLower && subLower === currentSubLower) score += 4;
    else if (subLower && relatedSubcats.has(subLower)) score += 3;
    if (catLower && catLower === currentCatLower) score += 2;
    const sharedTokens = nameTokens.filter((t) => currentNameTokens.includes(t));
    score += Math.min(sharedTokens.length, 3);
    return { product: p, score };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map(({ product }) => product);
  return deduplicateProducts(scored);
}
function getPersonalizedRecommendations(viewedIds, allProducts, fallbackProducts = favoriteBrands, limit = 12) {
  if (!viewedIds || viewedIds.length === 0) {
    return fallbackProducts;
  }
  const viewedMap = /* @__PURE__ */ new Map();
  allProducts.forEach((p) => viewedMap.set(p.id, p));
  const viewedList = [];
  for (const id of viewedIds) {
    const p = viewedMap.get(id);
    if (p) viewedList.push(p);
  }
  if (viewedList.length === 0) {
    return fallbackProducts;
  }
  const categoryScores = /* @__PURE__ */ new Map();
  const subcategoryScores = /* @__PURE__ */ new Map();
  const brandScores = /* @__PURE__ */ new Map();
  const tokenScores = /* @__PURE__ */ new Map();
  const relatedSubcats = /* @__PURE__ */ new Set();
  viewedList.forEach((prod, index) => {
    const weight = Math.max(1, 4 - index * 0.4);
    if (prod.category) {
      const cat = prod.category.toLowerCase().trim();
      categoryScores.set(cat, (categoryScores.get(cat) || 0) + weight * 2);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (cat.includes(key) || key.includes(cat)) {
          related.forEach((r) => relatedSubcats.add(r.toLowerCase()));
        }
      }
    }
    if (prod.subcategory) {
      const sub = prod.subcategory.toLowerCase().trim();
      subcategoryScores.set(sub, (subcategoryScores.get(sub) || 0) + weight * 3);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (sub.includes(key) || key.includes(sub)) {
          related.forEach((r) => relatedSubcats.add(r.toLowerCase()));
        }
      }
    }
    if (prod.brand) {
      const br = prod.brand.toLowerCase().trim();
      brandScores.set(br, (brandScores.get(br) || 0) + weight * 3);
    }
    const tokens = extractNameTokens(prod.name);
    tokens.forEach((tok) => {
      tokenScores.set(tok, (tokenScores.get(tok) || 0) + weight);
      for (const [key, related] of Object.entries(RELATED_SUBCATEGORIES)) {
        if (tok.includes(key) || key.includes(tok)) {
          related.forEach((r) => relatedSubcats.add(r.toLowerCase()));
        }
      }
    });
  });
  const viewedSet = new Set(viewedIds);
  const scored = allProducts.map((prod) => {
    let score = 0;
    const cat = (prod.category || "").toLowerCase().trim();
    const sub = (prod.subcategory || "").toLowerCase().trim();
    const br = (prod.brand || "").toLowerCase().trim();
    const tokens = extractNameTokens(prod.name);
    if (sub && subcategoryScores.has(sub)) {
      score += (subcategoryScores.get(sub) || 0) * 4;
    }
    if (sub && relatedSubcats.has(sub)) {
      score += 10;
    }
    if (cat && categoryScores.has(cat)) {
      score += (categoryScores.get(cat) || 0) * 2;
    }
    if (br && brandScores.has(br)) {
      score += (brandScores.get(br) || 0) * 3.5;
    }
    tokens.forEach((tok) => {
      if (tokenScores.has(tok)) {
        score += (tokenScores.get(tok) || 0) * 2.5;
      }
      if (relatedSubcats.has(tok)) {
        score += 6;
      }
    });
    if (!viewedSet.has(prod.id)) {
      score += 2;
    }
    return { prod, score };
  });
  const recommended = scored.filter((item) => item.score > 0).sort((a, b) => b.score - a.score).map((item) => item.prod);
  const uniqueRecs = [];
  const seen = /* @__PURE__ */ new Set();
  for (const p of recommended) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      uniqueRecs.push(p);
      if (uniqueRecs.length >= limit) break;
    }
  }
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
var healthSpace = [
  {
    id: 1,
    title: "Sa\xFAde Mental & Bem-estar",
    description: "Dicas e cuidados para equilibrar a rotina, reduzir o estresse e cuidar das suas emo\xE7\xF5es.",
    image: "/banners/cards/card_01_saude_mental.webp",
    tag: "Bem-Estar"
  },
  {
    id: 2,
    title: "Preven\xE7\xE3o e Diagn\xF3stico Precoce",
    description: "A import\xE2ncia dos exames preventivos, acompanhamento m\xE9dico regular e autocuidado.",
    image: "/banners/cards/card_02_outubro_rosa.webp",
    tag: "Preven\xE7\xE3o"
  },
  {
    id: 3,
    title: "Respirar Melhor no Inverno",
    description: "Como cuidar da sa\xFAde respirat\xF3ria, combater alergias e manter a imunidade em alta.",
    image: "/banners/cards/card_03_respirar_melhor.webp",
    tag: "Sa\xFAde"
  },
  {
    id: 4,
    title: "Nutri\xE7\xE3o e Suplementa\xE7\xE3o",
    description: "Orienta\xE7\xF5es nutricionais, vitaminas e suplementos para uma vida mais saud\xE1vel e ativa.",
    image: "/banners/cards/card_04_nutriweek.webp",
    tag: "Nutri\xE7\xE3o"
  },
  {
    id: 5,
    title: "Espa\xE7o Farmac\xEAutico & Vacinas",
    description: "Servi\xE7os de sa\xFAde, testes r\xE1pidos, aferi\xE7\xE3o de press\xE3o e vacina\xE7\xE3o na sua loja Raia.",
    image: "/banners/cards/card_05_raia_conceito.webp",
    tag: "Servi\xE7os Raia"
  }
];
var bebeMaisVendidos = [
  blackDayProducts.find((p) => p.id === 1250294),
  ...mostBought.filter((p) => p.category === "Mam\xE3e e Beb\xEA" || p.category === "Mam\xE3e & Beb\xEA")
].filter(Boolean);
var deduplicateProducts = (products) => {
  if (!products || !Array.isArray(products)) return [];
  const seenIds = /* @__PURE__ */ new Set();
  const seenNormalizedKeys = /* @__PURE__ */ new Set();
  const result = [];
  for (const p of products) {
    if (!p || typeof p.id !== "number") continue;
    if (seenIds.has(p.id)) continue;
    const normKey = (p.name || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\btamanho\b/g, "").replace(/\btam\b/g, "").replace(/\bdescartavel\b/g, "").replace(/\bdescartaveis\b/g, "").replace(/\bcom\b/g, "").replace(/\bunidades\b/g, "un").replace(/\bunidade\b/g, "un").replace(/\bfrasco\b/g, "").replace(/\bpacote\b/g, "").replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim();
    if (normKey && seenNormalizedKeys.has(normKey)) {
      continue;
    }
    seenIds.add(p.id);
    if (normKey) seenNormalizedKeys.add(normKey);
    result.push(p);
  }
  return result;
};

// src/data/ultraBrasilProducts.ts
var ultraBrasilProducts = [
  {
    "id": 50001,
    "ultraId": 26035,
    "name": "100% Whey Refil (900G) \u2013 Baunilha \u2013 Max Titanium",
    "size": "900G",
    "brand": "Max Titanium",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 84.04,
    "rating": 4.8,
    "reviews": 255,
    "image": "/products/ultra_26035.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 100% Whey Refil (900G) \u2013 Baunilha \u2013 Max Titanium. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26035"
  },
  {
    "id": 50002,
    "ultraId": 26137,
    "name": "3 Caixas Colaten Artro \u2013 Suplemento Para Articula\xE7\xF5es \u2013 30 Comprimidos",
    "size": "30 Comprimidos",
    "brand": "Colaten",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 236.28,
    "rating": 4.8,
    "reviews": 229,
    "image": "/products/ultra_26137.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 3 Caixas Colaten Artro \u2013 Suplemento Para Articula\xE7\xF5es \u2013 30 Comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26137"
  },
  {
    "id": 50003,
    "ultraId": 26138,
    "name": "3 Caixas Colaten Plenne Sabor Abacaxi e Hortel\xE3 30 Envelopes",
    "size": "30 Envelopes",
    "brand": "Colaten",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 308.21,
    "rating": 4.8,
    "reviews": 246,
    "image": "/products/ultra_26138.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 3 Caixas Colaten Plenne Sabor Abacaxi e Hortel\xE3 30 Envelopes. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26138"
  },
  {
    "id": 50004,
    "ultraId": 27100,
    "name": "3PC MINI KITS NUDE METALLICS EYE KIT",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Clean na Sephora",
    "subcategory": "",
    "price": 112.75,
    "rating": 4.8,
    "reviews": 100,
    "image": "/products/ultra_27100.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 3PC MINI KITS NUDE METALLICS EYE KIT. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27100"
  },
  {
    "id": 50005,
    "ultraId": 28184,
    "name": "3PC MINI KITS SOFT & WARM NUDES 3PC KIT",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Clean na Sephora",
    "subcategory": "",
    "price": 112.75,
    "rating": 4.8,
    "reviews": 268,
    "image": "/products/ultra_28184.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 3PC MINI KITS SOFT & WARM NUDES 3PC KIT. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28184"
  },
  {
    "id": 50006,
    "ultraId": 25953,
    "name": "3VS Nutrition Glutamine Powder 300g 100% Glutamina Pura",
    "size": "300g",
    "brand": "3VS Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 67.51,
    "rating": 4.8,
    "reviews": 181,
    "image": "/products/ultra_25953.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: 3VS Nutrition Glutamine Powder 300g 100% Glutamina Pura. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25953"
  },
  {
    "id": 50007,
    "ultraId": 26575,
    "name": "ABH GLIDR SHADOW STICK \u2013 BLUE ICE",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 195,
    "image": "/products/ultra_26575.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK \u2013 BLUE ICE. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26575"
  },
  {
    "id": 50008,
    "ultraId": 26512,
    "name": "ABH GLIDR SHADOW STICK- AMETHYST",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 224,
    "image": "/products/ultra_26512.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK- AMETHYST. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26512"
  },
  {
    "id": 50009,
    "ultraId": 26528,
    "name": "ABH GLIDR SHADOW STICK- COCOA DRIP",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 276,
    "image": "/products/ultra_26528.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK- COCOA DRIP. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26528"
  },
  {
    "id": 50010,
    "ultraId": 26544,
    "name": "ABH GLIDR SHADOW STICK- HOT SAND",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 108,
    "image": "/products/ultra_26544.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK- HOT SAND. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26544"
  },
  {
    "id": 50011,
    "ultraId": 26523,
    "name": "ABH GLIDR SHADOW STICK- MYSTIC",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 191,
    "image": "/products/ultra_26523.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK- MYSTIC. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26523"
  },
  {
    "id": 50012,
    "ultraId": 26559,
    "name": "ABH GLIDR SHADOW STICK- PETAL",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 143,
    "image": "/products/ultra_26559.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: ABH GLIDR SHADOW STICK- PETAL. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26559"
  },
  {
    "id": 50013,
    "ultraId": 28507,
    "name": "Absorvente Always Noturno Cobertura Suave com Abas Fluxo Intenso G 32 Unidades",
    "size": "32 Unidades",
    "brand": "Always",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 19.99,
    "price": 17.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 259,
    "image": "/products/ultra_28507.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Absorvente Always Noturno Cobertura Suave com Abas Fluxo Intenso G 32 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28507"
  },
  {
    "id": 50014,
    "ultraId": 26051,
    "name": "Adaptogen Tasty Whey Original 900g",
    "size": "900g",
    "brand": "Adaptogen",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 116.87,
    "rating": 4.8,
    "reviews": 87,
    "image": "/products/ultra_26051.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Adaptogen Tasty Whey Original 900g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26051"
  },
  {
    "id": 50015,
    "ultraId": 29604,
    "name": "\xC1gua Micelar Bioderma S\xE9bium H2O 250ml",
    "size": "250ml",
    "brand": "Bioderma",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 63.99,
    "rating": 4.8,
    "reviews": 208,
    "image": "/products/ultra_29604.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: \xC1gua Micelar Bioderma S\xE9bium H2O 250ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29604"
  },
  {
    "id": 50016,
    "ultraId": 29482,
    "name": "\xC1gua Micelar Clareadora Bioderma Pigmentbio H2O 250ml",
    "size": "250ml",
    "brand": "Bioderma",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 64.79,
    "rating": 4.8,
    "reviews": 114,
    "image": "/products/ultra_29482.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: \xC1gua Micelar Clareadora Bioderma Pigmentbio H2O 250ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29482"
  },
  {
    "id": 50017,
    "ultraId": 26272,
    "name": "\xC1gua Micelar Neutrogena Hydro Boost 7 em 1 400ml",
    "size": "400ml",
    "brand": "Neutrogena",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 42.59,
    "rating": 4.8,
    "reviews": 104,
    "image": "/products/ultra_26272.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: \xC1gua Micelar Neutrogena Hydro Boost 7 em 1 400ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26272"
  },
  {
    "id": 50018,
    "ultraId": 28664,
    "name": "\xC1gua Termal Av\xE8ne Eau Thermale 300ml",
    "size": "300ml",
    "brand": "Av\xE8ne",
    "category": "Cuidado Corporal",
    "subcategory": "Cuidado Facial",
    "oldPrice": 89.99,
    "price": 80.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 288,
    "image": "/products/ultra_28664.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: \xC1gua Termal Av\xE8ne Eau Thermale 300ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28664"
  },
  {
    "id": 50019,
    "ultraId": 28121,
    "name": "AH GLOW FDT MN4",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 297,
    "image": "/products/ultra_28121.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MN4. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28121"
  },
  {
    "id": 50020,
    "ultraId": 28028,
    "name": "AH GLOW FDT MN6",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 256,
    "image": "/products/ultra_28028.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MN6. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28028"
  },
  {
    "id": 50021,
    "ultraId": 28e3,
    "name": "AH GLOW FDT MN7",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 220,
    "image": "/products/ultra_28000.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MN7. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28000"
  },
  {
    "id": 50022,
    "ultraId": 28055,
    "name": "AH GLOW FDT MN8",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 275,
    "image": "/products/ultra_28055.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MN8. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28055"
  },
  {
    "id": 50023,
    "ultraId": 28107,
    "name": "AH GLOW FDT MW2",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 279,
    "image": "/products/ultra_28107.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MW2. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28107"
  },
  {
    "id": 50024,
    "ultraId": 27953,
    "name": "AH GLOW FDT MW8",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 81,
    "image": "/products/ultra_27953.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: AH GLOW FDT MW8. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27953"
  },
  {
    "id": 50025,
    "ultraId": 26007,
    "name": "Amino\xE1cidos Essenciais BCAA 2044mg 90 c\xE1psulas \u2013 Para Energia e Desempenho \u2013 Integralmedica",
    "size": "90 c\xE1psulas",
    "brand": "Integralmedica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 43.91,
    "rating": 4.8,
    "reviews": 219,
    "image": "/products/ultra_26007.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Amino\xE1cidos Essenciais BCAA 2044mg 90 c\xE1psulas \u2013 Para Energia e Desempenho \u2013 Integralmedica. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26007"
  },
  {
    "id": 50026,
    "ultraId": 25988,
    "name": "Amino\xE1cidos Essenciais BCAA Top 120 C\xE1ps \u2013 Para Recupera\xE7\xE3o e Desempenho \u2013 Integralmedica",
    "size": "",
    "brand": "Integralmedica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 64.67,
    "rating": 4.8,
    "reviews": 116,
    "image": "/products/ultra_25988.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Amino\xE1cidos Essenciais BCAA Top 120 C\xE1ps \u2013 Para Recupera\xE7\xE3o e Desempenho \u2013 Integralmedica. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25988"
  },
  {
    "id": 50027,
    "ultraId": 28257,
    "name": "Aparador e Raspador de Pelos Philips OneBlade com 3 Pentes QP2724/10 \xC0 prova d\u2019\xE1gua Bivolt",
    "size": "",
    "brand": "Philips",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 139.9,
    "price": 125.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 189,
    "image": "/products/ultra_28257.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Aparador e Raspador de Pelos Philips OneBlade com 3 Pentes QP2724/10 \xC0 prova d\u2019\xE1gua Bivolt. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28257"
  },
  {
    "id": 50028,
    "ultraId": 26074,
    "name": "Atlhetica Nutrition 100% Hiper Mass Flavour, 2.5Kg, Chocolate",
    "size": "5Kg",
    "brand": "Atlhetica Nutrition",
    "category": "Hipercalorico",
    "subcategory": "Suplementos",
    "price": 35.86,
    "rating": 4.8,
    "reviews": 258,
    "image": "/products/ultra_26074.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Atlhetica Nutrition 100% Hiper Mass Flavour, 2.5Kg, Chocolate. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26074"
  },
  {
    "id": 50029,
    "ultraId": 26526,
    "name": "BADgal BANG! Purple 8",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 130.35,
    "rating": 4.8,
    "reviews": 242,
    "image": "/products/ultra_26526.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BADgal BANG! Purple 8. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26526"
  },
  {
    "id": 50030,
    "ultraId": 27018,
    "name": "BADGAL M\uFFFDSCARA DE C\uFFFDLIOS BLUE",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 130.35,
    "rating": 4.8,
    "reviews": 246,
    "image": "/products/ultra_27018.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BADGAL M\uFFFDSCARA DE C\uFFFDLIOS BLUE. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27018"
  },
  {
    "id": 50031,
    "ultraId": 26830,
    "name": "BADGAL M\uFFFDSCARA DE C\uFFFDLIOS BROWN",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 130.35,
    "rating": 4.8,
    "reviews": 130,
    "image": "/products/ultra_26830.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BADGAL M\uFFFDSCARA DE C\uFFFDLIOS BROWN. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26830"
  },
  {
    "id": 50032,
    "ultraId": 26958,
    "name": "BADGAL M\uFFFDSCARA DE C\uFFFDLIOS PLUM",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 130.35,
    "rating": 4.8,
    "reviews": 106,
    "image": "/products/ultra_26958.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BADGAL M\uFFFDSCARA DE C\uFFFDLIOS PLUM. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26958"
  },
  {
    "id": 50033,
    "ultraId": 27793,
    "name": "Base Dior Face & Body Foundation",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 211.2,
    "rating": 4.8,
    "reviews": 221,
    "image": "/products/ultra_27793.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Dior Face & Body Foundation. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27793"
  },
  {
    "id": 50034,
    "ultraId": 28093,
    "name": "Base em P\xF3 Sephora Collection Best Skin Ever Matte",
    "size": "P",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 67.1,
    "rating": 4.8,
    "reviews": 261,
    "image": "/products/ultra_28093.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base em P\xF3 Sephora Collection Best Skin Ever Matte. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28093"
  },
  {
    "id": 50035,
    "ultraId": 27954,
    "name": "BASE EM STICK SEPHORA COLLECTION BEST SKIN EVER",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 87.45,
    "rating": 4.8,
    "reviews": 98,
    "image": "/products/ultra_27954.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE EM STICK SEPHORA COLLECTION BEST SKIN EVER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27954"
  },
  {
    "id": 50036,
    "ultraId": 27999,
    "name": "Base facial refil Shiseido Uv Protective Compact FPS 30",
    "size": "",
    "brand": "Shiseido",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 195.8,
    "rating": 4.8,
    "reviews": 203,
    "image": "/products/ultra_27999.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base facial refil Shiseido Uv Protective Compact FPS 30. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27999"
  },
  {
    "id": 50037,
    "ultraId": 27894,
    "name": "Base Fenty Beauty Soft Lit Naturally Luminous Longwear",
    "size": "",
    "brand": "Fenty Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 172.15,
    "rating": 4.8,
    "reviews": 178,
    "image": "/products/ultra_27894.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Fenty Beauty Soft Lit Naturally Luminous Longwear. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27894"
  },
  {
    "id": 50038,
    "ultraId": 28041,
    "name": "Base Kylie Cosmetics Power Plush Longwear",
    "size": "",
    "brand": "Kylie Cosmetics",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 160.05,
    "rating": 4.8,
    "reviews": 257,
    "image": "/products/ultra_28041.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Kylie Cosmetics Power Plush Longwear. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28041"
  },
  {
    "id": 50039,
    "ultraId": 28001,
    "name": "Base Laura Mercier Real Flawless Weightless Perfecting Foundation",
    "size": "",
    "brand": "Laura Mercier",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 189.75,
    "rating": 4.8,
    "reviews": 237,
    "image": "/products/ultra_28001.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Laura Mercier Real Flawless Weightless Perfecting Foundation. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28001"
  },
  {
    "id": 50040,
    "ultraId": 27677,
    "name": "BASE L\xCDQUIDA DIOR FOREVER SKIN GLOW",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 270.6,
    "rating": 4.8,
    "reviews": 229,
    "image": "/products/ultra_27677.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE L\xCDQUIDA DIOR FOREVER SKIN GLOW. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27677"
  },
  {
    "id": 50041,
    "ultraId": 27746,
    "name": "BASE LIQUIDA DIOR FOREVER SKIN WEAR",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 270.6,
    "rating": 4.8,
    "reviews": 82,
    "image": "/products/ultra_27746.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE LIQUIDA DIOR FOREVER SKIN WEAR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27746"
  },
  {
    "id": 50042,
    "ultraId": 27855,
    "name": "Base L\xEDquida Fenty Eaze Drop Blurring Lightweight Blurring Skin Tint",
    "size": "",
    "brand": "Fenty",
    "category": "S\xF3 Na Sephora",
    "subcategory": "",
    "price": 142.45,
    "rating": 4.8,
    "reviews": 175,
    "image": "/products/ultra_27855.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base L\xEDquida Fenty Eaze Drop Blurring Lightweight Blurring Skin Tint. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27855"
  },
  {
    "id": 50043,
    "ultraId": 28039,
    "name": "BASE L\xCDQUIDA HUDA BEAUTY EASY BLUR",
    "size": "",
    "brand": "Huda Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 164.45,
    "rating": 4.8,
    "reviews": 223,
    "image": "/products/ultra_28039.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE L\xCDQUIDA HUDA BEAUTY EASY BLUR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28039"
  },
  {
    "id": 50044,
    "ultraId": 28025,
    "name": "Base L\xEDquida MAC Soft Matte Studio Fix FPS15",
    "size": "",
    "brand": "MAC",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 187.55,
    "rating": 4.8,
    "reviews": 205,
    "image": "/products/ultra_28025.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base L\xEDquida MAC Soft Matte Studio Fix FPS15. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28025"
  },
  {
    "id": 50045,
    "ultraId": 27598,
    "name": "BASE LIQUIDA RARE BEAUTY TRUE TO MYSELF",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 158.95,
    "rating": 4.8,
    "reviews": 206,
    "image": "/products/ultra_27598.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE LIQUIDA RARE BEAUTY TRUE TO MYSELF. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27598"
  },
  {
    "id": 50046,
    "ultraId": 28096,
    "name": "BASE L\xCDQUIDA SEPHORA COLLECTION BEST SKIN EVER",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 87.45,
    "rating": 4.8,
    "reviews": 92,
    "image": "/products/ultra_28096.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE L\xCDQUIDA SEPHORA COLLECTION BEST SKIN EVER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28096"
  },
  {
    "id": 50047,
    "ultraId": 27983,
    "name": "Base L\xEDquida Sephora Collection Reveal The Real 12HR",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 87.45,
    "rating": 4.8,
    "reviews": 151,
    "image": "/products/ultra_27983.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base L\xEDquida Sephora Collection Reveal The Real 12HR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27983"
  },
  {
    "id": 50048,
    "ultraId": 27926,
    "name": "BASE L\xCDQUIDA YSL ALL HOURS GLOW FOUNDATION",
    "size": "",
    "brand": "YSL",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 240.08,
    "rating": 4.8,
    "reviews": 282,
    "image": "/products/ultra_27926.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BASE L\xCDQUIDA YSL ALL HOURS GLOW FOUNDATION. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27926"
  },
  {
    "id": 50049,
    "ultraId": 28111,
    "name": "Base Multifuncional Boca Rosa Stick Pele",
    "size": "",
    "brand": "Boca Rosa",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 49.5,
    "rating": 4.8,
    "reviews": 127,
    "image": "/products/ultra_28111.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Multifuncional Boca Rosa Stick Pele. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28111"
  },
  {
    "id": 50050,
    "ultraId": 27866,
    "name": "Base Nars Light Reflecting",
    "size": "",
    "brand": "Nars",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 237.05,
    "rating": 4.8,
    "reviews": 142,
    "image": "/products/ultra_27866.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Nars Light Reflecting. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27866"
  },
  {
    "id": 50051,
    "ultraId": 28169,
    "name": "Base Rare Beauty Positive Light Tinted Moisturizer",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 153.45,
    "rating": 4.8,
    "reviews": 233,
    "image": "/products/ultra_28169.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Rare Beauty Positive Light Tinted Moisturizer. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28169"
  },
  {
    "id": 50052,
    "ultraId": 28094,
    "name": "Base Sephora Collection Best Skin Ever Glow",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 87.45,
    "rating": 4.8,
    "reviews": 278,
    "image": "/products/ultra_28094.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Sephora Collection Best Skin Ever Glow. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28094"
  },
  {
    "id": 50053,
    "ultraId": 27853,
    "name": "Base Yves Saint Laurent All Hours Foundation",
    "size": "",
    "brand": "Yves Saint Laurent",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 266.75,
    "rating": 4.8,
    "reviews": 141,
    "image": "/products/ultra_27853.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Base Yves Saint Laurent All Hours Foundation. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27853"
  },
  {
    "id": 50054,
    "ultraId": 26011,
    "name": "Bcaa 2400 \u2013 100 Tabletes \u2013 Black Skull, Black Skull",
    "size": "100 Tabletes",
    "brand": "Black Skull",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 50.78,
    "rating": 4.8,
    "reviews": 287,
    "image": "/products/ultra_26011.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bcaa 2400 \u2013 100 Tabletes \u2013 Black Skull, Black Skull. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26011"
  },
  {
    "id": 50055,
    "ultraId": 26008,
    "name": "Bcaa 3:1:1 60 Capsulas Dark Lab",
    "size": "60 Capsulas",
    "brand": "Dark Lab",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 25.72,
    "rating": 4.8,
    "reviews": 236,
    "image": "/products/ultra_26008.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bcaa 3:1:1 60 Capsulas Dark Lab. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26008"
  },
  {
    "id": 50056,
    "ultraId": 26010,
    "name": "BCAA 3000 120 Capsulas Aminoacidos Essenciais Enriquecido com vitamina B6 Sem Sabor Ultra Concentrado Rapida Absor\xE7\xE3o Importado Original",
    "size": "120 Capsulas",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 33.25,
    "rating": 4.8,
    "reviews": 270,
    "image": "/products/ultra_26010.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BCAA 3000 120 Capsulas Aminoacidos Essenciais Enriquecido com vitamina B6 Sem Sabor Ultra Concentrado Rapida Absor\xE7\xE3o Importado Original. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26010"
  },
  {
    "id": 50057,
    "ultraId": 26014,
    "name": "BCAA 800MG (240 caps) \u2013 Now Sports",
    "size": "",
    "brand": "Now Sports",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 77.21,
    "rating": 4.8,
    "reviews": 118,
    "image": "/products/ultra_26014.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BCAA 800MG (240 caps) \u2013 Now Sports. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26014"
  },
  {
    "id": 50058,
    "ultraId": 26029,
    "name": "BCAA Attack 120 C\xE1ps | 3VS Nutrition",
    "size": "",
    "brand": "3VS Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 18.56,
    "rating": 4.8,
    "reviews": 153,
    "image": "/products/ultra_26029.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BCAA Attack 120 C\xE1ps | 3VS Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26029"
  },
  {
    "id": 50059,
    "ultraId": 27286,
    "name": "BENEFIT    BADGAL MINI   EYES 21G",
    "size": "21G",
    "brand": "Benefit",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 70.95,
    "rating": 4.8,
    "reviews": 182,
    "image": "/products/ultra_27286.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BENEFIT    BADGAL MINI   EYES 21G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27286"
  },
  {
    "id": 50060,
    "ultraId": 27184,
    "name": "BENEFIT    MINI THEY\u2019RE  MASC",
    "size": "",
    "brand": "Benefit",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 70.95,
    "rating": 4.8,
    "reviews": 208,
    "image": "/products/ultra_27184.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BENEFIT    MINI THEY\u2019RE  MASC. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27184"
  },
  {
    "id": 50061,
    "ultraId": 27414,
    "name": "BENEFIT    ROLLER LASH   MASC 4GR",
    "size": "",
    "brand": "Benefit",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 70.95,
    "rating": 4.8,
    "reviews": 158,
    "image": "/products/ultra_27414.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BENEFIT    ROLLER LASH   MASC 4GR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27414"
  },
  {
    "id": 50062,
    "ultraId": 27064,
    "name": "BENEFIT    THEY\u2019RE REAL  MASC 1UNID",
    "size": "1UNID",
    "brand": "Benefit",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 130.35,
    "rating": 4.8,
    "reviews": 148,
    "image": "/products/ultra_27064.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BENEFIT    THEY\u2019RE REAL  MASC 1UNID. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27064"
  },
  {
    "id": 50064,
    "ultraId": 26055,
    "name": "Best Whey \u2013 450g Achocolatado Toddy \u2013 Atlhetica Nutrition",
    "size": "450g",
    "brand": "Atlhetica Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 90.19,
    "rating": 4.8,
    "reviews": 155,
    "image": "/products/ultra_26055.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Best Whey \u2013 450g Achocolatado Toddy \u2013 Atlhetica Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26055"
  },
  {
    "id": 50065,
    "ultraId": 26030,
    "name": "Black Skull Refil Whey Zero 837G",
    "size": "837G",
    "brand": "Black Skull",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 87.88,
    "rating": 4.8,
    "reviews": 170,
    "image": "/products/ultra_26030.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Black Skull Refil Whey Zero 837G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26030"
  },
  {
    "id": 50066,
    "ultraId": 29436,
    "name": "Blancy TX Gel Creme Clareador Mantecorp 30g",
    "size": "30g",
    "brand": "Mantecorp",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 129.6,
    "rating": 4.8,
    "reviews": 212,
    "image": "/products/ultra_29436.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blancy TX Gel Creme Clareador Mantecorp 30g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29436"
  },
  {
    "id": 50067,
    "ultraId": 28711,
    "name": "Blemish+ Age Defense SkinCeuticals 30ml",
    "size": "30ml",
    "brand": "SkinCeuticals",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 199.99,
    "price": 179.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 207,
    "image": "/products/ultra_28711.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blemish+ Age Defense SkinCeuticals 30ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28711"
  },
  {
    "id": 50068,
    "ultraId": 27955,
    "name": "Blush Cremoso Rare Beauty Stay Vulnerable",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 103.95,
    "rating": 4.8,
    "reviews": 115,
    "image": "/products/ultra_27955.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush Cremoso Rare Beauty Stay Vulnerable. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27955"
  },
  {
    "id": 50069,
    "ultraId": 27612,
    "name": "BLUSH E BATOM EM BAST\xC3O MULTIUSO VIC BEAUT\xC9 STICK TUDO",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 92.95,
    "rating": 4.8,
    "reviews": 224,
    "image": "/products/ultra_27612.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH E BATOM EM BAST\xC3O MULTIUSO VIC BEAUT\xC9 STICK TUDO. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27612"
  },
  {
    "id": 50070,
    "ultraId": 26728,
    "name": "BLUSH E SOMBRA BRUNA TAVARES PLUSH",
    "size": "",
    "brand": "Bruna Tavares",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 31.9,
    "rating": 4.8,
    "reviews": 156,
    "image": "/products/ultra_26728.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH E SOMBRA BRUNA TAVARES PLUSH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26728"
  },
  {
    "id": 50071,
    "ultraId": 28140,
    "name": "Blush em Bast\xE3o Boca Rosa Stick Cor",
    "size": "",
    "brand": "Boca Rosa",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 33,
    "rating": 4.8,
    "reviews": 180,
    "image": "/products/ultra_28140.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush em Bast\xE3o Boca Rosa Stick Cor. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28140"
  },
  {
    "id": 50072,
    "ultraId": 28068,
    "name": "Blush em Bast\xE3o Nudestix Glow Core",
    "size": "",
    "brand": "Nudestix",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 106.7,
    "rating": 4.8,
    "reviews": 276,
    "image": "/products/ultra_28068.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush em Bast\xE3o Nudestix Glow Core. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28068"
  },
  {
    "id": 50073,
    "ultraId": 27938,
    "name": "BLUSH EM P\uFFFD ME BLUSH",
    "size": "P",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 296.45,
    "rating": 4.8,
    "reviews": 266,
    "image": "/products/ultra_27938.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH EM P\uFFFD ME BLUSH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27938"
  },
  {
    "id": 50074,
    "ultraId": 27911,
    "name": "Blush em p\xF3 Dior Rosy Glow",
    "size": "p",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 211.2,
    "rating": 4.8,
    "reviews": 247,
    "image": "/products/ultra_27911.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush em p\xF3 Dior Rosy Glow. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27911"
  },
  {
    "id": 50075,
    "ultraId": 28185,
    "name": "BLUSH EM P\xD3 MAC SKINFINISH COLOURSTRUCK",
    "size": "P",
    "brand": "MAC",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 144.1,
    "rating": 4.8,
    "reviews": 285,
    "image": "/products/ultra_28185.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH EM P\xD3 MAC SKINFINISH COLOURSTRUCK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28185"
  },
  {
    "id": 50076,
    "ultraId": 27770,
    "name": "Blush em p\xF3 YSL Make Me Blush",
    "size": "p",
    "brand": "YSL",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 296.45,
    "rating": 4.8,
    "reviews": 270,
    "image": "/products/ultra_27770.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush em p\xF3 YSL Make Me Blush. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27770"
  },
  {
    "id": 50077,
    "ultraId": 27942,
    "name": "BLUSH EM STICK BRUNA TAVARES COCA-COLA",
    "size": "",
    "brand": "Bruna Tavares",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 34.65,
    "rating": 4.8,
    "reviews": 114,
    "image": "/products/ultra_27942.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH EM STICK BRUNA TAVARES COCA-COLA. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27942"
  },
  {
    "id": 50078,
    "ultraId": 27971,
    "name": "BLUSH\xA0EM STICK MARI MARIA BLOOM\xA0UP",
    "size": "",
    "brand": "Mari Maria",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 26.95,
    "rating": 4.8,
    "reviews": 167,
    "image": "/products/ultra_27971.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH\xA0EM STICK MARI MARIA BLOOM\xA0UP. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27971"
  },
  {
    "id": 50079,
    "ultraId": 27466,
    "name": "Blush Iluminador em P\xF3 Rare Beauty Soft Pinch",
    "size": "P",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 109.45,
    "rating": 4.8,
    "reviews": 162,
    "image": "/products/ultra_27466.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush Iluminador em P\xF3 Rare Beauty Soft Pinch. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27466"
  },
  {
    "id": 50080,
    "ultraId": 28138,
    "name": "BLUSH L\uFFFDQUIDO \u2013 MAKE ME BLUSH",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 197.51,
    "rating": 4.8,
    "reviews": 146,
    "image": "/products/ultra_28138.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH L\uFFFDQUIDO \u2013 MAKE ME BLUSH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28138"
  },
  {
    "id": 50081,
    "ultraId": 27709,
    "name": "BLUSH LIQUIDO FENTY BEAUTY SHAKE N PLAY",
    "size": "",
    "brand": "Fenty Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 106.7,
    "rating": 4.8,
    "reviews": 113,
    "image": "/products/ultra_27709.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH LIQUIDO FENTY BEAUTY SHAKE N PLAY. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27709"
  },
  {
    "id": 50082,
    "ultraId": 27881,
    "name": "BLUSH L\xCDQUIDO HUDA BEAUTY FILTER",
    "size": "",
    "brand": "Huda Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 114.95,
    "rating": 4.8,
    "reviews": 177,
    "image": "/products/ultra_27881.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH L\xCDQUIDO HUDA BEAUTY FILTER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27881"
  },
  {
    "id": 50083,
    "ultraId": 28186,
    "name": "Blush L\xEDquido Laura Mercier Tinted Moisturizer Blush",
    "size": "",
    "brand": "Laura Mercier",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 110,
    "rating": 4.8,
    "reviews": 82,
    "image": "/products/ultra_28186.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush L\xEDquido Laura Mercier Tinted Moisturizer Blush. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28186"
  },
  {
    "id": 50084,
    "ultraId": 28166,
    "name": "BLUSH LIQUIDO ME BLUSH",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 219.45,
    "rating": 4.8,
    "reviews": 182,
    "image": "/products/ultra_28166.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH LIQUIDO ME BLUSH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28166"
  },
  {
    "id": 50085,
    "ultraId": 27823,
    "name": "Blush L\xEDquido Nars Afterglow",
    "size": "",
    "brand": "Nars",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 160.05,
    "rating": 4.8,
    "reviews": 291,
    "image": "/products/ultra_27823.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush L\xEDquido Nars Afterglow. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27823"
  },
  {
    "id": 50086,
    "ultraId": 28110,
    "name": "Blush L\xEDquido YSL Make Me Blush",
    "size": "",
    "brand": "YSL",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 219.45,
    "rating": 4.8,
    "reviews": 110,
    "image": "/products/ultra_28110.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush L\xEDquido YSL Make Me Blush. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28110"
  },
  {
    "id": 50087,
    "ultraId": 27852,
    "name": "BLUSH MULTIUSO SEPHORA COLLECTION CHEEK & LIP TINT",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 63.25,
    "rating": 4.8,
    "reviews": 124,
    "image": "/products/ultra_27852.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH MULTIUSO SEPHORA COLLECTION CHEEK & LIP TINT. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27852"
  },
  {
    "id": 50088,
    "ultraId": 28056,
    "name": "Blush Nars Talc Free",
    "size": "",
    "brand": "Nars",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 172.15,
    "rating": 4.8,
    "reviews": 292,
    "image": "/products/ultra_28056.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush Nars Talc Free. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28056"
  },
  {
    "id": 50089,
    "ultraId": 27636,
    "name": "Blush Rare Beauty Soft Pinch Matte Bouncy",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 120.45,
    "rating": 4.8,
    "reviews": 192,
    "image": "/products/ultra_27636.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush Rare Beauty Soft Pinch Matte Bouncy. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27636"
  },
  {
    "id": 50090,
    "ultraId": 27689,
    "name": "BLUSH SEPHORA COLLECTION MULTIUSE",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 57.75,
    "rating": 4.8,
    "reviews": 213,
    "image": "/products/ultra_27689.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BLUSH SEPHORA COLLECTION MULTIUSE. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27689"
  },
  {
    "id": 50091,
    "ultraId": 27941,
    "name": "Blush Stick Dior Rosy Glow",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 225.5,
    "rating": 4.8,
    "reviews": 97,
    "image": "/products/ultra_27941.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Blush Stick Dior Rosy Glow. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27941"
  },
  {
    "id": 50092,
    "ultraId": 28136,
    "name": "Bronzer Benefit Hoola",
    "size": "",
    "brand": "Benefit",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 157.85,
    "rating": 4.8,
    "reviews": 112,
    "image": "/products/ultra_28136.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bronzer Benefit Hoola. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28136"
  },
  {
    "id": 50093,
    "ultraId": 27806,
    "name": "BRONZER CREMOSO FENTY BEAUTY SUN STALK\u2019R SOUFFL\xC9",
    "size": "",
    "brand": "Fenty Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 185.35,
    "rating": 4.8,
    "reviews": 222,
    "image": "/products/ultra_27806.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BRONZER CREMOSO FENTY BEAUTY SUN STALK\u2019R SOUFFL\xC9. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27806"
  },
  {
    "id": 50094,
    "ultraId": 27939,
    "name": "Bronzer Cremoso Nars Laguna",
    "size": "",
    "brand": "Nars",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 195.8,
    "rating": 4.8,
    "reviews": 283,
    "image": "/products/ultra_27939.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bronzer Cremoso Nars Laguna. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27939"
  },
  {
    "id": 50095,
    "ultraId": 27507,
    "name": "Bronzer em Bast\xE3o Rare Beauty Warm Wishes\xA0Effortless",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Face",
    "subcategory": "",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 199,
    "image": "/products/ultra_27507.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bronzer em Bast\xE3o Rare Beauty Warm Wishes\xA0Effortless. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27507"
  },
  {
    "id": 50096,
    "ultraId": 28011,
    "name": "Bronzer em Bast\xE3o Too Faced Chocolate Soleil",
    "size": "",
    "brand": "Too Faced",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 162.8,
    "rating": 4.8,
    "reviews": 187,
    "image": "/products/ultra_28011.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bronzer em Bast\xE3o Too Faced Chocolate Soleil. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28011"
  },
  {
    "id": 50097,
    "ultraId": 28170,
    "name": "Bronzer em p\xF3 YSL All Hours Powder Hyper Bronze",
    "size": "p",
    "brand": "YSL",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 308.55,
    "rating": 4.8,
    "reviews": 250,
    "image": "/products/ultra_28170.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Bronzer em p\xF3 YSL All Hours Powder Hyper Bronze. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28170"
  },
  {
    "id": 50098,
    "ultraId": 27586,
    "name": "BRONZER ILUMINADOR TOO FACED SUN BUNNY",
    "size": "",
    "brand": "Too Faced",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 162.8,
    "rating": 4.8,
    "reviews": 222,
    "image": "/products/ultra_27586.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BRONZER ILUMINADOR TOO FACED SUN BUNNY. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27586"
  },
  {
    "id": 50099,
    "ultraId": 27884,
    "name": "BRONZER TOO FACED CHOCOLATE SOLEIL",
    "size": "",
    "brand": "Too Faced",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 175.45,
    "rating": 4.8,
    "reviews": 228,
    "image": "/products/ultra_27884.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: BRONZER TOO FACED CHOCOLATE SOLEIL. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27884"
  },
  {
    "id": 50100,
    "ultraId": 25916,
    "name": "C4 Beta Pump Extreme Pre Workout 225g \u2013 New Millen (Frutas Roxas",
    "size": "225g",
    "brand": "New Millen",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 70.96,
    "rating": 4.8,
    "reviews": 212,
    "image": "/products/ultra_25916.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: C4 Beta Pump Extreme Pre Workout 225g \u2013 New Millen (Frutas Roxas. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25916"
  },
  {
    "id": 50101,
    "ultraId": 25917,
    "name": "C4 Beta Pump Extreme Pre Workout 225g \u2013 New Millen (Tangerina)",
    "size": "225g",
    "brand": "New Millen",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 70.96,
    "rating": 4.8,
    "reviews": 229,
    "image": "/products/ultra_25917.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: C4 Beta Pump Extreme Pre Workout 225g \u2013 New Millen (Tangerina). F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25917"
  },
  {
    "id": 50102,
    "ultraId": 26095,
    "name": "Cabelo e Unha Vitamina para Crescimento Capilar Unhas Fortes e Pele Saud\xE1vel com Biotina Zinco e 16 Vitaminas Essenciais 60 C\xE1psulas da NUTRI-LEAF Sa\xFAde",
    "size": "60 C\xE1psulas",
    "brand": "Nutri-Leaf",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 67.72,
    "rating": 4.8,
    "reviews": 175,
    "image": "/products/ultra_26095.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Cabelo e Unha Vitamina para Crescimento Capilar Unhas Fortes e Pele Saud\xE1vel com Biotina Zinco e 16 Vitaminas Essenciais 60 C\xE1psulas da NUTRI-LEAF Sa\xFAde. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26095"
  },
  {
    "id": 50103,
    "ultraId": 26096,
    "name": "Cabelo Pele E Unha O Multivitam\xEDnico Da Beleza Feminina",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 33.79,
    "rating": 4.8,
    "reviews": 192,
    "image": "/products/ultra_26096.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Cabelo Pele E Unha O Multivitam\xEDnico Da Beleza Feminina. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26096"
  },
  {
    "id": 50104,
    "ultraId": 26666,
    "name": "CANETA DELINEADORA DOLCE&GABBANA EVERINK LINER",
    "size": "",
    "brand": "Dolce&Gabbana",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 154.94,
    "rating": 4.8,
    "reviews": 202,
    "image": "/products/ultra_26666.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CANETA DELINEADORA DOLCE&GABBANA EVERINK LINER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26666"
  },
  {
    "id": 50105,
    "ultraId": 26844,
    "name": "CANETA DELINEADORA MARI MARIA CAT EYES",
    "size": "",
    "brand": "Mari Maria",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 30.8,
    "rating": 4.8,
    "reviews": 148,
    "image": "/products/ultra_26844.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CANETA DELINEADORA MARI MARIA CAT EYES. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26844"
  },
  {
    "id": 50106,
    "ultraId": 28495,
    "name": "Caneta Fortalecedora de Unhas Fr\xE1geis Si-Nails ISDIN 2,5ml",
    "size": "5ml",
    "brand": "ISDIN",
    "category": "Cuidado Corporal",
    "subcategory": "Maquiagens e Acess\xF3rios",
    "oldPrice": 74.9,
    "price": 67.41,
    "discount": 10,
    "rating": 4.8,
    "reviews": 275,
    "image": "/products/ultra_28495.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Caneta Fortalecedora de Unhas Fr\xE1geis Si-Nails ISDIN 2,5ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28495"
  },
  {
    "id": 50107,
    "ultraId": 27363,
    "name": "CARE       MASCARA       EYES 10ML",
    "size": "10ML",
    "brand": "Gen\xE9rico",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 83.05,
    "rating": 4.8,
    "reviews": 171,
    "image": "/products/ultra_27363.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CARE       MASCARA       EYES 10ML. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27363"
  },
  {
    "id": 50108,
    "ultraId": 28256,
    "name": "Carga para Aparelho de Barbear Gillette Mach3 Sensitive 16 unidades",
    "size": "16 unidades",
    "brand": "Gillette",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 79.99,
    "price": 71.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 172,
    "image": "/products/ultra_28256.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Carga para Aparelho de Barbear Gillette Mach3 Sensitive 16 unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28256"
  },
  {
    "id": 50109,
    "ultraId": 26139,
    "name": "Centrum Mulher Multivitaminico 170 gummies Suplemento",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 235.64,
    "rating": 4.8,
    "reviews": 263,
    "image": "/products/ultra_26139.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Centrum Mulher Multivitaminico 170 gummies Suplemento. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26139"
  },
  {
    "id": 50110,
    "ultraId": 25216,
    "name": "CeraVe Lo\xE7\xE3o Hidratante Corporal com \xC1cido Hialur\xF4nico \u2013 Hidrata\xE7\xE3o Profunda para Pele Seca",
    "size": "",
    "brand": "CeraVe",
    "category": "Geral",
    "subcategory": "",
    "price": 89.9,
    "rating": 4.8,
    "reviews": 192,
    "image": "/products/ultra_25216.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CeraVe Lo\xE7\xE3o Hidratante Corporal com \xC1cido Hialur\xF4nico \u2013 Hidrata\xE7\xE3o Profunda para Pele Seca. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25216"
  },
  {
    "id": 50111,
    "ultraId": 28271,
    "name": "Chapinha Lizze Profissional 480 Extreme 110v Cinza",
    "size": "",
    "brand": "Lizze",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "oldPrice": 399.99,
    "price": 359.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 207,
    "image": "/products/ultra_28271.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Chapinha Lizze Profissional 480 Extreme 110v Cinza. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28271"
  },
  {
    "id": 50112,
    "ultraId": 28272,
    "name": "Chapinha Lizze Profissional 480 Extreme 220v Cinza",
    "size": "",
    "brand": "Lizze",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "oldPrice": 399.99,
    "price": 359.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 224,
    "image": "/products/ultra_28271.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Chapinha Lizze Profissional 480 Extreme 220v Cinza. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28272"
  },
  {
    "id": 50113,
    "ultraId": 26908,
    "name": "CHOCOLATE BTS CHOCOLATE",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 105.05,
    "rating": 4.8,
    "reviews": 136,
    "image": "/products/ultra_26908.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CHOCOLATE BTS CHOCOLATE. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26908"
  },
  {
    "id": 50114,
    "ultraId": 28653,
    "name": "Cicaplast Reparador Labial La Roche-Posay Cicaplast 7,5ml",
    "size": "5ml",
    "brand": "La Roche-Posay",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 40,
    "price": 36,
    "discount": 10,
    "rating": 4.8,
    "reviews": 101,
    "image": "/products/ultra_28653.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Cicaplast Reparador Labial La Roche-Posay Cicaplast 7,5ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28653"
  },
  {
    "id": 50115,
    "ultraId": 26879,
    "name": "C\xEDlios Posti\xE7os That Girl HALF LASH",
    "size": "",
    "brand": "That Girl",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 23.26,
    "rating": 4.8,
    "reviews": 83,
    "image": "/products/ultra_26879.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: C\xEDlios Posti\xE7os That Girl HALF LASH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26879"
  },
  {
    "id": 50116,
    "ultraId": 26972,
    "name": "Cilios Posti\xE7os That Girl Invisible Lash 3D Light",
    "size": "",
    "brand": "That Girl",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 24.2,
    "rating": 4.8,
    "reviews": 124,
    "image": "/products/ultra_26972.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Cilios Posti\xE7os That Girl Invisible Lash 3D Light. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26972"
  },
  {
    "id": 50117,
    "ultraId": 25740,
    "name": "Coenzima Q10 Vitafor COQ-10 com tcm e Vitamina E",
    "size": "",
    "brand": "Vitafor",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 88.73,
    "rating": 4.8,
    "reviews": 80,
    "image": "/products/ultra_25740.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Coenzima Q10 Vitafor COQ-10 com tcm e Vitamina E. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25740"
  },
  {
    "id": 50118,
    "ultraId": 26928,
    "name": "Cola delineadora That Girl",
    "size": "",
    "brand": "That Girl",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 48.51,
    "rating": 4.8,
    "reviews": 256,
    "image": "/products/ultra_26928.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Cola delineadora That Girl. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26928"
  },
  {
    "id": 50119,
    "ultraId": 26152,
    "name": "Col\xE1geno Artrogen Duo Sabor Laranja com Abacaxi \u2013 30 Sach\xEAs de 11g cada",
    "size": "30 Sach\xEAs",
    "brand": "Artrogen",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 91.97,
    "rating": 4.8,
    "reviews": 264,
    "image": "/products/ultra_26152.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Col\xE1geno Artrogen Duo Sabor Laranja com Abacaxi \u2013 30 Sach\xEAs de 11g cada. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26152"
  },
  {
    "id": 50120,
    "ultraId": 26153,
    "name": "Col\xE1geno Cartliv Ultra MDK 60 C\xE1psulas",
    "size": "60 C\xE1psulas",
    "brand": "Cartliv",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 51.19,
    "rating": 4.8,
    "reviews": 281,
    "image": "/products/ultra_26153.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Col\xE1geno Cartliv Ultra MDK 60 C\xE1psulas. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26153"
  },
  {
    "id": 50121,
    "ultraId": 26154,
    "name": "Col\xE1geno Tipo II Colflex HIALU 30 C\xE1psulas",
    "size": "30 C\xE1psulas",
    "brand": "Colflex",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 81.87,
    "rating": 4.8,
    "reviews": 298,
    "image": "/products/ultra_26154.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Col\xE1geno Tipo II Colflex HIALU 30 C\xE1psulas. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26154"
  },
  {
    "id": 50122,
    "ultraId": 26155,
    "name": "Col\xE1geno Tipo II Condres Long Bio 90 c\xE1psulas",
    "size": "90 c\xE1psulas",
    "brand": "Condres",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 164.11,
    "rating": 4.8,
    "reviews": 95,
    "image": "/products/ultra_26155.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Col\xE1geno Tipo II Condres Long Bio 90 c\xE1psulas. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26155"
  },
  {
    "id": 50123,
    "ultraId": 25894,
    "name": "Colaten artro 30 comprimidos",
    "size": "30 comprimidos",
    "brand": "Colaten",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 156.09,
    "rating": 4.8,
    "reviews": 278,
    "image": "/products/ultra_25894.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Colaten artro 30 comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25894"
  },
  {
    "id": 50124,
    "ultraId": 25893,
    "name": "Colaten artro com 30 comprimidos",
    "size": "30 comprimidos",
    "brand": "Colaten",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 145.3,
    "rating": 4.8,
    "reviews": 261,
    "image": "/products/ultra_25893.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Colaten artro com 30 comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25893"
  },
  {
    "id": 50125,
    "ultraId": 26133,
    "name": "Combo 2x Nutri Whey Protein Para Ganho de Peso Baunilha 900g Pote \u2013 Integralmedica",
    "size": "900g",
    "brand": "Integralmedica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 136.88,
    "rating": 4.8,
    "reviews": 161,
    "image": "/products/ultra_26133.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Combo 2x Nutri Whey Protein Para Ganho de Peso Baunilha 900g Pote \u2013 Integralmedica. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26133"
  },
  {
    "id": 50126,
    "ultraId": 26136,
    "name": "Combo 2x Suplemento em P\xF3 Nutri whey Protein Para Ganho de Peso Chocolate 900g Pote \u2013 Integralmedica",
    "size": "900g",
    "brand": "Integralmedica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Whey Protein",
    "price": 92.39,
    "rating": 4.8,
    "reviews": 212,
    "image": "/products/ultra_26136.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Combo 2x Suplemento em P\xF3 Nutri whey Protein Para Ganho de Peso Chocolate 900g Pote \u2013 Integralmedica. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26136"
  },
  {
    "id": 50127,
    "ultraId": 29506,
    "name": "Condicionador K\xE9rastase Chroma Absolu Fondant Cica 200ml",
    "size": "200ml",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "price": 145.79,
    "rating": 4.8,
    "reviews": 82,
    "image": "/products/ultra_29506.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Condicionador K\xE9rastase Chroma Absolu Fondant Cica 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29506"
  },
  {
    "id": 50128,
    "ultraId": 28342,
    "name": "Condicionador K\xE9rastase Gloss Absolu Insta Glaze Fondant 250ml",
    "size": "250ml",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "oldPrice": 179.99,
    "price": 161.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 94,
    "image": "/products/ultra_28342.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Condicionador K\xE9rastase Gloss Absolu Insta Glaze Fondant 250ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28342"
  },
  {
    "id": 50129,
    "ultraId": 28334,
    "name": "Condicionador Wella Professionals Ultimate Repair Passo 2 500ml",
    "size": "500ml",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "oldPrice": 219.99,
    "price": 197.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 178,
    "image": "/products/ultra_28334.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Condicionador Wella Professionals Ultimate Repair Passo 2 500ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28334"
  },
  {
    "id": 50130,
    "ultraId": 26156,
    "name": "Condres Col\xE1geno N\xE3o Hidrolisado Tipo II \u2013 90 c\xE1psulas",
    "size": "90 c\xE1psulas",
    "brand": "Condres",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 102.57,
    "rating": 4.8,
    "reviews": 112,
    "image": "/products/ultra_26156.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Condres Col\xE1geno N\xE3o Hidrolisado Tipo II \u2013 90 c\xE1psulas. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26156"
  },
  {
    "id": 50131,
    "ultraId": 27970,
    "name": "Contorno em bast\xE3o Fenty Match Stix",
    "size": "",
    "brand": "Fenty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 124.3,
    "rating": 4.8,
    "reviews": 150,
    "image": "/products/ultra_27970.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Contorno em bast\xE3o Fenty Match Stix. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27970"
  },
  {
    "id": 50132,
    "ultraId": 28187,
    "name": "Contorno em Bast\xE3o Sephora Collection",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 69.3,
    "rating": 4.8,
    "reviews": 99,
    "image": "/products/ultra_28187.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Contorno em Bast\xE3o Sephora Collection. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28187"
  },
  {
    "id": 50133,
    "ultraId": 27533,
    "name": "Contorno L\xEDquido Rare Beauty Soft Pinch",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 201,
    "image": "/products/ultra_27533.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Contorno L\xEDquido Rare Beauty Soft Pinch. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27533"
  },
  {
    "id": 50134,
    "ultraId": 28120,
    "name": "Corretivo Anastasia Magic Touch Concealer",
    "size": "",
    "brand": "Anastasia",
    "category": "Face",
    "subcategory": "",
    "price": 166.1,
    "rating": 4.8,
    "reviews": 280,
    "image": "/products/ultra_28120.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Anastasia Magic Touch Concealer. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28120"
  },
  {
    "id": 50135,
    "ultraId": 28183,
    "name": "Corretivo Bruna Tavares BT SkinPlush",
    "size": "",
    "brand": "Bruna Tavares",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 42.35,
    "rating": 4.8,
    "reviews": 251,
    "image": "/products/ultra_28183.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Bruna Tavares BT SkinPlush. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28183"
  },
  {
    "id": 50136,
    "ultraId": 28071,
    "name": "Corretivo Colorido Sephora Collection Best Skin Ever 8HR",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 57.75,
    "rating": 4.8,
    "reviews": 107,
    "image": "/products/ultra_28071.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Colorido Sephora Collection Best Skin Ever 8HR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28071"
  },
  {
    "id": 50137,
    "ultraId": 27870,
    "name": "Corretivo Dior Backstage",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 147.95,
    "rating": 4.8,
    "reviews": 210,
    "image": "/products/ultra_27870.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Dior Backstage. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27870"
  },
  {
    "id": 50138,
    "ultraId": 27896,
    "name": "Corretivo Dior Forever Skin Concealer",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 199.1,
    "rating": 4.8,
    "reviews": 212,
    "image": "/products/ultra_27896.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Dior Forever Skin Concealer. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27896"
  },
  {
    "id": 50139,
    "ultraId": 28054,
    "name": "CORRETIVO DOLCE&GABBANA EVERLAST",
    "size": "",
    "brand": "Dolce&Gabbana",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 179.19,
    "rating": 4.8,
    "reviews": 258,
    "image": "/products/ultra_28054.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO DOLCE&GABBANA EVERLAST. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28054"
  },
  {
    "id": 50140,
    "ultraId": 28026,
    "name": "CORRETIVO HUDA BEAUTY FAUX FILTER",
    "size": "",
    "brand": "Huda Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 143,
    "rating": 4.8,
    "reviews": 222,
    "image": "/products/ultra_28026.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO HUDA BEAUTY FAUX FILTER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28026"
  },
  {
    "id": 50141,
    "ultraId": 27838,
    "name": "CORRETIVO ILUMINADOR CAROLINA HERRERA NUDE COUTURE TRIPLE MOISTURE BRIGHTENER",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 177.65,
    "rating": 4.8,
    "reviews": 106,
    "image": "/products/ultra_27838.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO ILUMINADOR CAROLINA HERRERA NUDE COUTURE TRIPLE MOISTURE BRIGHTENER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27838"
  },
  {
    "id": 50142,
    "ultraId": 26605,
    "name": "Corretivo Iluminador de Olhos Nars Light Reflecting",
    "size": "",
    "brand": "Nars",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 166.1,
    "rating": 4.8,
    "reviews": 265,
    "image": "/products/ultra_26605.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Iluminador de Olhos Nars Light Reflecting. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26605"
  },
  {
    "id": 50143,
    "ultraId": 28070,
    "name": "Corretivo Iluminador Rare Beauty Positive Light Under",
    "size": "",
    "brand": "Rare Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 114.95,
    "rating": 4.8,
    "reviews": 90,
    "image": "/products/ultra_28070.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Iluminador Rare Beauty Positive Light Under. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28070"
  },
  {
    "id": 50144,
    "ultraId": 28150,
    "name": "Corretivo Kylie Cosmetics Power Plush Longwear",
    "size": "",
    "brand": "Kylie Cosmetics",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 124.3,
    "rating": 4.8,
    "reviews": 130,
    "image": "/products/ultra_28150.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Kylie Cosmetics Power Plush Longwear. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28150"
  },
  {
    "id": 50145,
    "ultraId": 28002,
    "name": "Corretivo Laura Mercier Real Flawless Weightless Perfecting",
    "size": "",
    "brand": "Laura Mercier",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 118.25,
    "rating": 4.8,
    "reviews": 254,
    "image": "/products/ultra_28002.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Laura Mercier Real Flawless Weightless Perfecting. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28002"
  },
  {
    "id": 50146,
    "ultraId": 27822,
    "name": "CORRETIVO L\xCDQUIDO SEPHORA COLLECTION BEST SKIN EVER",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 63.25,
    "rating": 4.8,
    "reviews": 274,
    "image": "/products/ultra_27822.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO L\xCDQUIDO SEPHORA COLLECTION BEST SKIN EVER. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27822"
  },
  {
    "id": 50147,
    "ultraId": 28152,
    "name": "CORRETIVO MARI MARIA COVER UP",
    "size": "",
    "brand": "Mari Maria",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 29.7,
    "rating": 4.8,
    "reviews": 164,
    "image": "/products/ultra_28152.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO MARI MARIA COVER UP. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28152"
  },
  {
    "id": 50148,
    "ultraId": 28137,
    "name": "Corretivo Sephora Collection Best Skin Ever Glow Concealer",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 63.25,
    "rating": 4.8,
    "reviews": 129,
    "image": "/products/ultra_28137.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo Sephora Collection Best Skin Ever Glow Concealer. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28137"
  },
  {
    "id": 50149,
    "ultraId": 27710,
    "name": "CORRETIVO SEPHORA COLLECTION BEST SKIN EVER MICRO",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 63.25,
    "rating": 4.8,
    "reviews": 130,
    "image": "/products/ultra_27710.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO SEPHORA COLLECTION BEST SKIN EVER MICRO. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27710"
  },
  {
    "id": 50150,
    "ultraId": 27665,
    "name": "Corretivo S\xE9rum Hidratante Fenty Beauty We\u2019re Even",
    "size": "",
    "brand": "Fenty Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 124.3,
    "rating": 4.8,
    "reviews": 245,
    "image": "/products/ultra_27665.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Corretivo S\xE9rum Hidratante Fenty Beauty We\u2019re Even. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27665"
  },
  {
    "id": 50151,
    "ultraId": 27650,
    "name": "CORRETIVO VIC BEAUT\xC9 INCR\xCDVEL",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 87.45,
    "rating": 4.8,
    "reviews": 210,
    "image": "/products/ultra_27650.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETIVO VIC BEAUT\xC9 INCR\xCDVEL. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27650"
  },
  {
    "id": 50152,
    "ultraId": 28014,
    "name": "CORRETOR HUDA BEAUTY FAUX FILTER COLOR",
    "size": "",
    "brand": "Huda Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 143,
    "rating": 4.8,
    "reviews": 238,
    "image": "/products/ultra_28014.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: CORRETOR HUDA BEAUTY FAUX FILTER COLOR. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28014"
  },
  {
    "id": 50153,
    "ultraId": 25950,
    "name": "Creatina \u2013 BIGBOOM \u2013 100% Pura 300G. A \xFAnica 3 em 1 | Col\xE1geno, BCAA + Creatina Monohidratada \u2013 para mulheres, crescimento de gl\xFAteos, crescimento muscular, aumento de energia, aux\xEDlio cognitivo e Col\xE1geno.",
    "size": "300G",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 150.58,
    "rating": 4.8,
    "reviews": 130,
    "image": "/products/ultra_25950.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina \u2013 BIGBOOM \u2013 100% Pura 300G. A \xFAnica 3 em 1 | Col\xE1geno, BCAA + Creatina Monohidratada \u2013 para mulheres, crescimento de gl\xFAteos, crescimento muscular, aumento de energia, aux\xEDlio cognitivo e Col\xE1geno.. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25950"
  },
  {
    "id": 50154,
    "ultraId": 25781,
    "name": "Creatina (300g) Max Titanium",
    "size": "300g",
    "brand": "Max Titanium",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 49.98,
    "rating": 4.8,
    "reviews": 117,
    "image": "/products/ultra_25781.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina (300g) Max Titanium. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25781"
  },
  {
    "id": 50155,
    "ultraId": 25782,
    "name": "Creatina Hardcore 150g Integralmedica",
    "size": "150g",
    "brand": "Integralmedica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 25.4,
    "rating": 4.8,
    "reviews": 134,
    "image": "/products/ultra_25782.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Hardcore 150g Integralmedica. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25782"
  },
  {
    "id": 50156,
    "ultraId": 25783,
    "name": "Creatina Monohidratada 250g \u2013 100% Pura Importada \u2013 Soldiers Nutrition",
    "size": "250g",
    "brand": "Soldiers Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 41.9,
    "rating": 4.8,
    "reviews": 151,
    "image": "/products/ultra_25783.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Monohidratada 250g \u2013 100% Pura Importada \u2013 Soldiers Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25783"
  },
  {
    "id": 50157,
    "ultraId": 25784,
    "name": "Creatina Monohidratada 600g \u2013 100% Pura Importada \u2013 Soldiers Nutrition",
    "size": "600g",
    "brand": "Soldiers Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 69.9,
    "rating": 4.8,
    "reviews": 168,
    "image": "/products/ultra_25784.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Monohidratada 600g \u2013 100% Pura Importada \u2013 Soldiers Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25784"
  },
  {
    "id": 50158,
    "ultraId": 25927,
    "name": "Creatina Monohidratada Pote 300g \u2013 100% Pura Importada \u2013 Soldiers Nutrition",
    "size": "300g",
    "brand": "Soldiers Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 46.59,
    "rating": 4.8,
    "reviews": 179,
    "image": "/products/ultra_25927.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Monohidratada Pote 300g \u2013 100% Pura Importada \u2013 Soldiers Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25927"
  },
  {
    "id": 50160,
    "ultraId": 25785,
    "name": "Creatina Monohidratada Pote 300G \u2013 Dux Nutrition",
    "size": "300G",
    "brand": "Dux Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 53.29,
    "rating": 4.8,
    "reviews": 185,
    "image": "/products/ultra_25785.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Monohidratada Pote 300G \u2013 Dux Nutrition. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25785"
  },
  {
    "id": 50161,
    "ultraId": 25929,
    "name": "Creatina Monohidratada Sem Sabor \u2013 Pote 300g \u2013 Suplementa\xE7\xE3o Treino Academia, Ganho Muscular Hipertrofia, For\xE7a Energia Resist\xEAncia, Suplementos Naturais \u2013 DUX HUMAN HEALTH",
    "size": "300g",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 61.63,
    "rating": 4.8,
    "reviews": 213,
    "image": "/products/ultra_25929.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Monohidratada Sem Sabor \u2013 Pote 300g \u2013 Suplementa\xE7\xE3o Treino Academia, Ganho Muscular Hipertrofia, For\xE7a Energia Resist\xEAncia, Suplementos Naturais \u2013 DUX HUMAN HEALTH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25929"
  },
  {
    "id": 50162,
    "ultraId": 25930,
    "name": "Creatina Pura Refil 500G Monohidratada Dark Lab",
    "size": "500G",
    "brand": "Dark Lab",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 69.48,
    "rating": 4.8,
    "reviews": 230,
    "image": "/products/ultra_25930.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creatina Pura Refil 500G Monohidratada Dark Lab. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25930"
  },
  {
    "id": 50163,
    "ultraId": 28622,
    "name": "Creme Anti-idade Skinceuticals Glycolic 10 50ml",
    "size": "50ml",
    "brand": "SkinCeuticals",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 449.9,
    "price": 404.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 234,
    "image": "/products/ultra_28622.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Anti-idade Skinceuticals Glycolic 10 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28622"
  },
  {
    "id": 50164,
    "ultraId": 28253,
    "name": "Creme Barriguinha Cream Beleza Brasileira 200g",
    "size": "200g",
    "brand": "Gen\xE9rico",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "oldPrice": 89.9,
    "price": 80.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 121,
    "image": "/products/ultra_28253.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Barriguinha Cream Beleza Brasileira 200g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28253"
  },
  {
    "id": 50165,
    "ultraId": 29525,
    "name": "Creme clareador de olheiras Eucerin Anti-pigment 15g",
    "size": "15g",
    "brand": "Eucerin",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 145.72,
    "rating": 4.8,
    "reviews": 185,
    "image": "/products/ultra_29525.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme clareador de olheiras Eucerin Anti-pigment 15g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29525"
  },
  {
    "id": 50166,
    "ultraId": 28286,
    "name": "Creme Contorno De Olhos Cicatricure Rugas Bolsas E Olheiras 15g",
    "size": "15g",
    "brand": "Cicatricure",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 39.99,
    "price": 35.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 242,
    "image": "/products/ultra_28286.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Contorno De Olhos Cicatricure Rugas Bolsas E Olheiras 15g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28286"
  },
  {
    "id": 50167,
    "ultraId": 28425,
    "name": "Creme Corporal Antiacne Eucerin Dermo Pure Efeito Triplo 200ml",
    "size": "200ml",
    "brand": "Eucerin",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "oldPrice": 79.99,
    "price": 71.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 185,
    "image": "/products/ultra_28425.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Corporal Antiacne Eucerin Dermo Pure Efeito Triplo 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28425"
  },
  {
    "id": 50168,
    "ultraId": 28613,
    "name": "Creme de Limpeza Calmante Vichy Dercos Sensi Scalp Refil 200ml",
    "size": "200ml",
    "brand": "Vichy",
    "category": "Cabelos",
    "subcategory": "Tratamento Capilar",
    "oldPrice": 54.99,
    "price": 49.49,
    "discount": 10,
    "rating": 4.8,
    "reviews": 81,
    "image": "/products/ultra_28613.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme de Limpeza Calmante Vichy Dercos Sensi Scalp Refil 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28613"
  },
  {
    "id": 50169,
    "ultraId": 26291,
    "name": "Creme Dental Colgate Natural Extracts Bicarbonato e Hortel\xE3 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 7.55,
    "rating": 4.8,
    "reviews": 207,
    "image": "/products/ultra_26291.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Natural Extracts Bicarbonato e Hortel\xE3 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26291"
  },
  {
    "id": 50170,
    "ultraId": 26319,
    "name": "Creme Dental Colgate Orthogard Cuidado Ortod\xF4ntico 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 26.15,
    "rating": 4.8,
    "reviews": 243,
    "image": "/products/ultra_26319.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Orthogard Cuidado Ortod\xF4ntico 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26319"
  },
  {
    "id": 50171,
    "ultraId": 26317,
    "name": "Creme Dental Colgate Sensitive Pro Al\xEDvio Imediato Branqueador 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 9.95,
    "rating": 4.8,
    "reviews": 209,
    "image": "/products/ultra_26317.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Sensitive Pro Al\xEDvio Imediato Branqueador 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26317"
  },
  {
    "id": 50172,
    "ultraId": 26321,
    "name": "Creme Dental Colgate Total 12 Antit\xE1rtaro 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 10.19,
    "rating": 4.8,
    "reviews": 277,
    "image": "/products/ultra_26321.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Total 12 Antit\xE1rtaro 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26321"
  },
  {
    "id": 50173,
    "ultraId": 26289,
    "name": "Creme Dental Colgate Total Original Mint 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 11.7,
    "rating": 4.8,
    "reviews": 173,
    "image": "/products/ultra_26289.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Total Original Mint 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26289"
  },
  {
    "id": 50174,
    "ultraId": 26309,
    "name": "Creme Dental Colgate Tripla A\xE7\xE3o Menta Original 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 3.39,
    "rating": 4.8,
    "reviews": 293,
    "image": "/products/ultra_26309.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Colgate Tripla A\xE7\xE3o Menta Original 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26309"
  },
  {
    "id": 50175,
    "ultraId": 26301,
    "name": "Creme Dental Sensodyne Original 90g",
    "size": "90g",
    "brand": "Sensodyne",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 12.43,
    "rating": 4.8,
    "reviews": 157,
    "image": "/products/ultra_26301.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Dental Sensodyne Original 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26301"
  },
  {
    "id": 50176,
    "ultraId": 28313,
    "name": "Creme Em Gel Effaclar La Roche-Posay Duo+ Fps30 40g",
    "size": "40g",
    "brand": "La Roche-Posay",
    "category": "Cuidado Corporal",
    "subcategory": "Cuidado Facial",
    "oldPrice": 119.99,
    "price": 107.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 261,
    "image": "/products/ultra_28313.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Em Gel Effaclar La Roche-Posay Duo+ Fps30 40g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28313"
  },
  {
    "id": 50177,
    "ultraId": 29283,
    "name": "Creme Facial Anti-Idade Eucerin Hyaluron-Filler + Elasticity FPS30 50ml",
    "size": "50ml",
    "brand": "Eucerin",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 137.69,
    "rating": 4.8,
    "reviews": 251,
    "image": "/products/ultra_29283.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Anti-Idade Eucerin Hyaluron-Filler + Elasticity FPS30 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29283"
  },
  {
    "id": 50178,
    "ultraId": 29420,
    "name": "Creme Facial Anti-idade L\u2019Or\xE9al Paris Revitalift Laser X3 Diurno 50ml",
    "size": "50ml",
    "brand": "Gen\xE9rico",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 64.79,
    "rating": 4.8,
    "reviews": 160,
    "image": "/products/ultra_29420.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Anti-idade L\u2019Or\xE9al Paris Revitalift Laser X3 Diurno 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29420"
  },
  {
    "id": 50179,
    "ultraId": 28260,
    "name": "Creme Facial Anti-idade Retinol 0.3 SkinCeuticals com Vitamina C 30ml",
    "size": "30ml",
    "brand": "SkinCeuticals",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 399.9,
    "price": 359.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 240,
    "image": "/products/ultra_28260.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Anti-idade Retinol 0.3 SkinCeuticals com Vitamina C 30ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28260"
  },
  {
    "id": 50180,
    "ultraId": 28506,
    "name": "Creme Facial Antissinais Nivea Cellular Expert Lift Avan\xE7ado Dia FPS30 50ml",
    "size": "50ml",
    "brand": "Nivea",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 44.3,
    "price": 39.87,
    "discount": 10,
    "rating": 4.8,
    "reviews": 242,
    "image": "/products/ultra_28506.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Antissinais Nivea Cellular Expert Lift Avan\xE7ado Dia FPS30 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28506"
  },
  {
    "id": 50181,
    "ultraId": 28302,
    "name": "Creme Facial Cicatricure Antissinais e Antirrugas 50g",
    "size": "50g",
    "brand": "Cicatricure",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 35,
    "price": 31.5,
    "discount": 10,
    "rating": 4.8,
    "reviews": 294,
    "image": "/products/ultra_28302.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Cicatricure Antissinais e Antirrugas 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28302"
  },
  {
    "id": 50182,
    "ultraId": 28651,
    "name": "Creme Facial Densifiant Fondant Profuse 30g",
    "size": "30g",
    "brand": "Profuse",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 156.3,
    "price": 140.67,
    "discount": 10,
    "rating": 4.8,
    "reviews": 287,
    "image": "/products/ultra_28651.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Densifiant Fondant Profuse 30g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28651"
  },
  {
    "id": 50183,
    "ultraId": 29623,
    "name": "Creme Facial Hialur\xF4nico Cetaphil Optimal Hydration 48g",
    "size": "48g",
    "brand": "Cetaphil",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 56.69,
    "rating": 4.8,
    "reviews": 91,
    "image": "/products/ultra_29623.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Hialur\xF4nico Cetaphil Optimal Hydration 48g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29623"
  },
  {
    "id": 50184,
    "ultraId": 28610,
    "name": "Creme Facial Iluminador Intensivo Av\xE8ne Vitamin Activ Cg 50ml",
    "size": "50ml",
    "brand": "Av\xE8ne",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 214.99,
    "price": 193.49,
    "discount": 10,
    "rating": 4.8,
    "reviews": 250,
    "image": "/products/ultra_28610.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Iluminador Intensivo Av\xE8ne Vitamin Activ Cg 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28610"
  },
  {
    "id": 50185,
    "ultraId": 28585,
    "name": "Creme Facial Neostrata Oily Skin Gel Plus 125g",
    "size": "125g",
    "brand": "Neostrata",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 339.9,
    "price": 305.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 265,
    "image": "/products/ultra_28585.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Neostrata Oily Skin Gel Plus 125g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28585"
  },
  {
    "id": 50186,
    "ultraId": 29479,
    "name": "Creme Facial Nivea Anti-manchas Cellular Luminous Fps50 40ml",
    "size": "40ml",
    "brand": "Nivea",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 52.64,
    "rating": 4.8,
    "reviews": 283,
    "image": "/products/ultra_29479.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Nivea Anti-manchas Cellular Luminous Fps50 40ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29479"
  },
  {
    "id": 50187,
    "ultraId": 28448,
    "name": "Creme Facial Nivea Gel Hialuronico Fresh 100g",
    "size": "100g",
    "brand": "Nivea",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 23.99,
    "price": 21.59,
    "discount": 10,
    "rating": 4.8,
    "reviews": 136,
    "image": "/products/ultra_28448.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Nivea Gel Hialuronico Fresh 100g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28448"
  },
  {
    "id": 50188,
    "ultraId": 28482,
    "name": "Creme Facial Rejuvenescedor Av\xE8ne Retrinal 0.1 30ml",
    "size": "30ml",
    "brand": "Av\xE8ne",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 199.9,
    "price": 179.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 274,
    "image": "/products/ultra_28482.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Facial Rejuvenescedor Av\xE8ne Retrinal 0.1 30ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28482"
  },
  {
    "id": 50189,
    "ultraId": 29406,
    "name": "Creme Fixador de Dentadura Ultra Corega Max Fixa\xE7\xE3o + Bloqueio Sem Sabor 2 unidades de 70g cada",
    "size": "2 unidades",
    "brand": "Corega",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "price": 64.79,
    "rating": 4.8,
    "reviews": 142,
    "image": "/products/ultra_29406.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Fixador de Dentadura Ultra Corega Max Fixa\xE7\xE3o + Bloqueio Sem Sabor 2 unidades de 70g cada. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29406"
  },
  {
    "id": 50190,
    "ultraId": 29421,
    "name": "Creme Hidratante Antiestrias Corporal ISDIN Woman 245g",
    "size": "245g",
    "brand": "ISDIN",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "price": 80.99,
    "rating": 4.8,
    "reviews": 177,
    "image": "/products/ultra_29421.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Antiestrias Corporal ISDIN Woman 245g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29421"
  },
  {
    "id": 50191,
    "ultraId": 28682,
    "name": "Creme Hidratante Bepantol Derma creme 40g",
    "size": "40g",
    "brand": "Gen\xE9rico",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "oldPrice": 39.99,
    "price": 35.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 154,
    "image": "/products/ultra_28682.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Bepantol Derma creme 40g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28682"
  },
  {
    "id": 50192,
    "ultraId": 26305,
    "name": "Creme Hidratante Bepantol Derma Multirrestaurador 40g",
    "size": "40g",
    "brand": "Gen\xE9rico",
    "category": "Hidratantes",
    "subcategory": "",
    "price": 45.58,
    "rating": 4.8,
    "reviews": 225,
    "image": "/products/ultra_26305.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Bepantol Derma Multirrestaurador 40g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26305"
  },
  {
    "id": 50193,
    "ultraId": 26274,
    "name": "Creme Hidratante CeraVe Pele Seca e Extrasseca 454g",
    "size": "454g",
    "brand": "CeraVe",
    "category": "Hidratantes",
    "subcategory": "",
    "price": 81.3,
    "rating": 4.8,
    "reviews": 138,
    "image": "/products/ultra_26274.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante CeraVe Pele Seca e Extrasseca 454g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26274"
  },
  {
    "id": 50194,
    "ultraId": 28263,
    "name": "Creme Hidratante Corporal Fisiogel Hipoalerg\xEAnico 450g",
    "size": "450g",
    "brand": "Gen\xE9rico",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "oldPrice": 49.99,
    "price": 44.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 291,
    "image": "/products/ultra_28263.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Corporal Fisiogel Hipoalerg\xEAnico 450g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28263"
  },
  {
    "id": 50195,
    "ultraId": 28459,
    "name": "Creme Hidratante Corporal Nivea Men 4 em 1 com 75g",
    "size": "75g",
    "brand": "Nivea",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "oldPrice": 23.9,
    "price": 21.51,
    "discount": 10,
    "rating": 4.8,
    "reviews": 103,
    "image": "/products/ultra_28459.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Corporal Nivea Men 4 em 1 com 75g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28459"
  },
  {
    "id": 50196,
    "ultraId": 29419,
    "name": "Creme Hidratante Epidrat Corpo Intensivo Mantecorp 500g",
    "size": "500g",
    "brand": "Mantecorp",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "price": 60.74,
    "rating": 4.8,
    "reviews": 143,
    "image": "/products/ultra_29419.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Epidrat Corpo Intensivo Mantecorp 500g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29419"
  },
  {
    "id": 50197,
    "ultraId": 28696,
    "name": "Creme Hidratante Facial La Roche-Posay Effaclar Mat 40ml",
    "size": "40ml",
    "brand": "La Roche-Posay",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 159.9,
    "price": 143.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 172,
    "image": "/products/ultra_28696.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Facial La Roche-Posay Effaclar Mat 40ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28696"
  },
  {
    "id": 50198,
    "ultraId": 28250,
    "name": "Creme Hidratante Lanc\xF4me Hydra Zen Creme 50ml",
    "size": "50ml",
    "brand": "Lanc\xF4me",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 369.99,
    "price": 332.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 290,
    "image": "/products/ultra_28250.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hidratante Lanc\xF4me Hydra Zen Creme 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28250"
  },
  {
    "id": 50199,
    "ultraId": 28612,
    "name": "Creme Hyaluronic Moisture Isdinceutics Oily Isdin 50g",
    "size": "50g",
    "brand": "ISDIN",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 169.99,
    "price": 152.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 284,
    "image": "/products/ultra_28612.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Hyaluronic Moisture Isdinceutics Oily Isdin 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28612"
  },
  {
    "id": 50200,
    "ultraId": 28649,
    "name": "Creme Isdinceutics K-Ox Eyes Contorno dos Olhos ISDIN 15g",
    "size": "15g",
    "brand": "ISDIN",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 154.7,
    "price": 139.23,
    "discount": 10,
    "rating": 4.8,
    "reviews": 253,
    "image": "/products/ultra_28649.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Isdinceutics K-Ox Eyes Contorno dos Olhos ISDIN 15g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28649"
  },
  {
    "id": 50201,
    "ultraId": 29462,
    "name": "Creme Nutritivo Vichy Redensificador Neovadiol Menopausa 50g",
    "size": "50g",
    "brand": "Vichy",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 153.82,
    "rating": 4.8,
    "reviews": 214,
    "image": "/products/ultra_29462.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Nutritivo Vichy Redensificador Neovadiol Menopausa 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29462"
  },
  {
    "id": 50202,
    "ultraId": 29337,
    "name": "Creme para \xC1rea dos Olhos La Roche-Posay Hyalu B5 15ml",
    "size": "15ml",
    "brand": "La Roche-Posay",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 137.62,
    "rating": 4.8,
    "reviews": 289,
    "image": "/products/ultra_29337.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme para \xC1rea dos Olhos La Roche-Posay Hyalu B5 15ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29337"
  },
  {
    "id": 50203,
    "ultraId": 29249,
    "name": "Creme para Contorno dos Olhos Vichy Liftactiv Col\xE1geno Specialist 16 15ml",
    "size": "15ml",
    "brand": "Vichy",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 137.69,
    "rating": 4.8,
    "reviews": 113,
    "image": "/products/ultra_29249.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme para Contorno dos Olhos Vichy Liftactiv Col\xE1geno Specialist 16 15ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29249"
  },
  {
    "id": 50204,
    "ultraId": 29368,
    "name": "Creme Para M\xE3os Bioderma Atoderm M\xE3os e unhas 50ml",
    "size": "50ml",
    "brand": "Bioderma",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "price": 48.59,
    "rating": 4.8,
    "reviews": 156,
    "image": "/products/ultra_29368.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Para M\xE3os Bioderma Atoderm M\xE3os e unhas 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29368"
  },
  {
    "id": 50205,
    "ultraId": 29388,
    "name": "Creme para m\xE3os Eucerin Anti-Pigment FPS30 75ml",
    "size": "75ml",
    "brand": "Eucerin",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "price": 81,
    "rating": 4.8,
    "reviews": 276,
    "image": "/products/ultra_29388.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme para m\xE3os Eucerin Anti-Pigment FPS30 75ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29388"
  },
  {
    "id": 50206,
    "ultraId": 29385,
    "name": "Creme Para P\xE9s Eucerin Urea Repair Plus 100ml",
    "size": "100ml",
    "brand": "Eucerin",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "price": 64.79,
    "rating": 4.8,
    "reviews": 225,
    "image": "/products/ultra_29385.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Para P\xE9s Eucerin Urea Repair Plus 100ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29385"
  },
  {
    "id": 50207,
    "ultraId": 28599,
    "name": "Creme Pigmentbio Night Renewer 50ml",
    "size": "50ml",
    "brand": "Gen\xE9rico",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 229.99,
    "price": 206.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 283,
    "image": "/products/ultra_28599.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Pigmentbio Night Renewer 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28599"
  },
  {
    "id": 50208,
    "ultraId": 28261,
    "name": "Creme Preventivo de Assaduras Bepantol Baby 120g",
    "size": "120g",
    "brand": "Gen\xE9rico",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "oldPrice": 38.9,
    "price": 35.01,
    "discount": 10,
    "rating": 4.8,
    "reviews": 257,
    "image": "/products/ultra_28261.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Preventivo de Assaduras Bepantol Baby 120g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28261"
  },
  {
    "id": 50209,
    "ultraId": 29251,
    "name": "Creme Rejuvenescedor Facial Cicatricure Gold Lift Diurno 50g",
    "size": "50g",
    "brand": "Cicatricure",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 56.69,
    "rating": 4.8,
    "reviews": 147,
    "image": "/products/ultra_29251.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Rejuvenescedor Facial Cicatricure Gold Lift Diurno 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29251"
  },
  {
    "id": 50210,
    "ultraId": 29253,
    "name": "Creme Rejuvenescedor Facial Cicatricure Gold Lift Noturno 50g",
    "size": "50g",
    "brand": "Cicatricure",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 56.69,
    "rating": 4.8,
    "reviews": 181,
    "image": "/products/ultra_29253.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Rejuvenescedor Facial Cicatricure Gold Lift Noturno 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29253"
  },
  {
    "id": 50211,
    "ultraId": 29592,
    "name": "Creme Rejuvenescedor Reviline Lift Mantecorp 30g",
    "size": "30g",
    "brand": "Mantecorp",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 121.42,
    "rating": 4.8,
    "reviews": 224,
    "image": "/products/ultra_29592.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Rejuvenescedor Reviline Lift Mantecorp 30g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29592"
  },
  {
    "id": 50212,
    "ultraId": 28679,
    "name": "Creme Reparador Hidratante Mustela Cicastela 40ml",
    "size": "40ml",
    "brand": "Mustela",
    "category": "Cuidado Corporal",
    "subcategory": "Hidratantes",
    "oldPrice": 48.99,
    "price": 44.09,
    "discount": 10,
    "rating": 4.8,
    "reviews": 103,
    "image": "/products/ultra_28679.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Creme Reparador Hidratante Mustela Cicastela 40ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28679"
  },
  {
    "id": 50213,
    "ultraId": 25987,
    "name": "Darkness \u2013 BCAA Fix 4500mg \u2013 120 Tabletes",
    "size": "120 Tabletes",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 72.95,
    "rating": 4.8,
    "reviews": 99,
    "image": "/products/ultra_25987.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Darkness \u2013 BCAA Fix 4500mg \u2013 120 Tabletes. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25987"
  },
  {
    "id": 50214,
    "ultraId": 25970,
    "name": "Darkness \u2013 Glutamina \u2013 300g",
    "size": "300g",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 99.76,
    "rating": 4.8,
    "reviews": 250,
    "image": "/products/ultra_25970.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Darkness \u2013 Glutamina \u2013 300g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25970"
  },
  {
    "id": 50215,
    "ultraId": 26817,
    "name": "Delineador 12H Sephora Collection Intense Ink Felt Liner",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 52.25,
    "rating": 4.8,
    "reviews": 129,
    "image": "/products/ultra_26817.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador 12H Sephora Collection Intense Ink Felt Liner. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26817"
  },
  {
    "id": 50216,
    "ultraId": 27162,
    "name": "Delineador Benefit Roller Liner",
    "size": "",
    "brand": "Benefit",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 100.65,
    "rating": 4.8,
    "reviews": 274,
    "image": "/products/ultra_27162.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Benefit Roller Liner. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27162"
  },
  {
    "id": 50217,
    "ultraId": 27101,
    "name": "Delineador de Longa Dura\xE7\xE3o Fenty Flyliner Longwear Eyeliner",
    "size": "",
    "brand": "Fenty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 88.55,
    "rating": 4.8,
    "reviews": 117,
    "image": "/products/ultra_27101.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador de Longa Dura\xE7\xE3o Fenty Flyliner Longwear Eyeliner. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27101"
  },
  {
    "id": 50218,
    "ultraId": 26990,
    "name": "Delineador Lanc\xF4me Id\xF4le Liner Waterproof",
    "size": "",
    "brand": "Lanc\xF4me",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 160.05,
    "rating": 4.8,
    "reviews": 210,
    "image": "/products/ultra_26990.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Lanc\xF4me Id\xF4le Liner Waterproof. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26990"
  },
  {
    "id": 50219,
    "ultraId": 26816,
    "name": "Delineador Lanc\xF4me Le Stylo Waterproof",
    "size": "",
    "brand": "Lanc\xF4me",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 195.8,
    "rating": 4.8,
    "reviews": 112,
    "image": "/products/ultra_26816.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Lanc\xF4me Le Stylo Waterproof. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26816"
  },
  {
    "id": 50220,
    "ultraId": 27084,
    "name": "Delineador L\xEDquido Clinique High Impact Ultrafine",
    "size": "",
    "brand": "Clinique",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 156.2,
    "rating": 4.8,
    "reviews": 268,
    "image": "/products/ultra_27084.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador L\xEDquido Clinique High Impact Ultrafine. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27084"
  },
  {
    "id": 50221,
    "ultraId": 26909,
    "name": "Delineador l\xEDquido Dior Diorshow",
    "size": "",
    "brand": "Dior",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 175.45,
    "rating": 4.8,
    "reviews": 153,
    "image": "/products/ultra_26909.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador l\xEDquido Dior Diorshow. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26909"
  },
  {
    "id": 50222,
    "ultraId": 27427,
    "name": "Delineador L\xEDquido Guerlain Mad Eyes",
    "size": "",
    "brand": "Guerlain",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 172.15,
    "rating": 4.8,
    "reviews": 159,
    "image": "/products/ultra_27427.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador L\xEDquido Guerlain Mad Eyes. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27427"
  },
  {
    "id": 50223,
    "ultraId": 26652,
    "name": "Delineador L\xEDquido Sephora Collection Intense Felt-tip 12hr",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 52.25,
    "rating": 4.8,
    "reviews": 184,
    "image": "/products/ultra_26652.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador L\xEDquido Sephora Collection Intense Felt-tip 12hr. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26652"
  },
  {
    "id": 50224,
    "ultraId": 27128,
    "name": "Delineador Long Lasting Eyeliner High Precision Brush",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 52.25,
    "rating": 4.8,
    "reviews": 136,
    "image": "/products/ultra_27128.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Long Lasting Eyeliner High Precision Brush. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27128"
  },
  {
    "id": 50225,
    "ultraId": 27065,
    "name": "Delineador MAC Brushstroke",
    "size": "",
    "brand": "MAC",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 115.5,
    "rating": 4.8,
    "reviews": 165,
    "image": "/products/ultra_27065.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador MAC Brushstroke. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27065"
  },
  {
    "id": 50226,
    "ultraId": 26519,
    "name": "DELINEADOR METALLIC SEPHORA COLLECTION SPECIAL EFFECTS",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 65.45,
    "rating": 4.8,
    "reviews": 123,
    "image": "/products/ultra_26519.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DELINEADOR METALLIC SEPHORA COLLECTION SPECIAL EFFECTS. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26519"
  },
  {
    "id": 50227,
    "ultraId": 26699,
    "name": "DELINEADOR SEPHORA COLLECTION EYELINER FEUTRE 12H INTENSE INK",
    "size": "",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 52.25,
    "rating": 4.8,
    "reviews": 103,
    "image": "/products/ultra_26699.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DELINEADOR SEPHORA COLLECTION EYELINER FEUTRE 12H INTENSE INK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26699"
  },
  {
    "id": 50228,
    "ultraId": 27081,
    "name": "Delineador Too Faced Better Than Sex Eyeliner Chocolate",
    "size": "",
    "brand": "Too Faced",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 150.15,
    "rating": 4.8,
    "reviews": 217,
    "image": "/products/ultra_27081.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Too Faced Better Than Sex Eyeliner Chocolate. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27081"
  },
  {
    "id": 50229,
    "ultraId": 26859,
    "name": "Delineador Too Faced Killer Liner",
    "size": "",
    "brand": "Too Faced",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 131.45,
    "rating": 4.8,
    "reviews": 183,
    "image": "/products/ultra_26859.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Delineador Too Faced Killer Liner. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26859"
  },
  {
    "id": 50230,
    "ultraId": 29505,
    "name": "Desodorante Aerosol La Roche-Posay 150ml",
    "size": "150ml",
    "brand": "La Roche-Posay",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "price": 89.02,
    "rating": 4.8,
    "reviews": 285,
    "image": "/products/ultra_29505.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Desodorante Aerosol La Roche-Posay 150ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29505"
  },
  {
    "id": 50231,
    "ultraId": 28586,
    "name": "Desodorante Antitranspirante Roll-On Vichy Peles Sens\xEDveis ou Depiladas 48h 50ml",
    "size": "50ml",
    "brand": "Vichy",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 118.99,
    "price": 107.09,
    "discount": 10,
    "rating": 4.8,
    "reviews": 282,
    "image": "/products/ultra_28586.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Desodorante Antitranspirante Roll-On Vichy Peles Sens\xEDveis ou Depiladas 48h 50ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28586"
  },
  {
    "id": 50232,
    "ultraId": 29248,
    "name": "Desodorante Roll On Perspirex \u2013 Comfort Roll-on 20ml",
    "size": "20ml",
    "brand": "Perspirex",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "price": 56.69,
    "rating": 4.8,
    "reviews": 96,
    "image": "/products/ultra_29248.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Desodorante Roll On Perspirex \u2013 Comfort Roll-on 20ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29248"
  },
  {
    "id": 50233,
    "ultraId": 29581,
    "name": "Desodorante Vichy Antitranspirante 48h 125ml",
    "size": "125ml",
    "brand": "Vichy",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "price": 97.19,
    "rating": 4.8,
    "reviews": 257,
    "image": "/products/ultra_29581.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Desodorante Vichy Antitranspirante 48h 125ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29581"
  },
  {
    "id": 50234,
    "ultraId": 26814,
    "name": "DG MAKE-UP EVERFULL HI-DEFINITION MASCARA 36H DEFINED 01 TOTAL BLACK",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 138.6,
    "rating": 4.8,
    "reviews": 298,
    "image": "/products/ultra_26814.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DG MAKE-UP EVERFULL HI-DEFINITION MASCARA 36H DEFINED 01 TOTAL BLACK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26814"
  },
  {
    "id": 50235,
    "ultraId": 27052,
    "name": "DIOR       OVERCURL      MASC 6G",
    "size": "6G",
    "brand": "Dior",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 166.1,
    "rating": 4.8,
    "reviews": 164,
    "image": "/products/ultra_27052.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DIOR       OVERCURL      MASC 6G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27052"
  },
  {
    "id": 50236,
    "ultraId": 27006,
    "name": "DIORSHOW M\uFFFDSCARA DE C\uFFFDLIOS MAXIMIZER 4D",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 166.1,
    "rating": 4.8,
    "reviews": 262,
    "image": "/products/ultra_27006.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DIORSHOW M\uFFFDSCARA DE C\uFFFDLIOS MAXIMIZER 4D. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27006"
  },
  {
    "id": 50237,
    "ultraId": 26731,
    "name": "DIORSHOW OVERVOLUME WATERPROOF 090",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 162.25,
    "rating": 4.8,
    "reviews": 207,
    "image": "/products/ultra_26731.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DIORSHOW OVERVOLUME WATERPROOF 090. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26731"
  },
  {
    "id": 50238,
    "ultraId": 27957,
    "name": "DRUNK ELEP D-BRONZI      FLUI 30.ML",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "S\xF3 Na Sephora",
    "subcategory": "",
    "price": 195.8,
    "rating": 4.8,
    "reviews": 149,
    "image": "/products/ultra_27957.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DRUNK ELEP D-BRONZI      FLUI 30.ML. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27957"
  },
  {
    "id": 50239,
    "ultraId": 28027,
    "name": "DUO DE P\xD3 SOLTO HUDA BEAUTY EASY BAKE",
    "size": "P",
    "brand": "Huda Beauty",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 173.25,
    "rating": 4.8,
    "reviews": 239,
    "image": "/products/ultra_28027.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: DUO DE P\xD3 SOLTO HUDA BEAUTY EASY BAKE. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28027"
  },
  {
    "id": 50240,
    "ultraId": 27033,
    "name": "Duo de Sombras Clinique High Impact Shadow Play",
    "size": "",
    "brand": "Clinique",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 124.85,
    "rating": 4.8,
    "reviews": 281,
    "image": "/products/ultra_27033.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Duo de Sombras Clinique High Impact Shadow Play. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27033"
  },
  {
    "id": 50241,
    "ultraId": 26012,
    "name": "Dux Nutrition Bcaa Powder Lim\xE3o \u2013 Pote 200 G",
    "size": "200 G",
    "brand": "Dux Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Amino\xE1cidos",
    "price": 72.08,
    "rating": 4.8,
    "reviews": 84,
    "image": "/products/ultra_26012.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Dux Nutrition Bcaa Powder Lim\xE3o \u2013 Pote 200 G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26012"
  },
  {
    "id": 50242,
    "ultraId": 25967,
    "name": "Dux Nutrition Glutamina 300g",
    "size": "300g",
    "brand": "Dux Nutrition",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 109.49,
    "rating": 4.8,
    "reviews": 199,
    "image": "/products/ultra_25967.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Dux Nutrition Glutamina 300g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25967"
  },
  {
    "id": 50243,
    "ultraId": 27968,
    "name": "EASY BAKE PRESSED POWDER BANANA BREAD",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 178.75,
    "rating": 4.8,
    "reviews": 116,
    "image": "/products/ultra_27968.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: EASY BAKE PRESSED POWDER BANANA BREAD. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27968"
  },
  {
    "id": 50244,
    "ultraId": 28258,
    "name": "Escova de Dente El\xE9trica Philips Colgate SonicPro 50",
    "size": "",
    "brand": "Philips",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 290,
    "price": 261,
    "discount": 10,
    "rating": 4.8,
    "reviews": 206,
    "image": "/products/ultra_28258.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Escova de Dente El\xE9trica Philips Colgate SonicPro 50. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28258"
  },
  {
    "id": 50245,
    "ultraId": 28273,
    "name": "Espuma de Limpeza Facial Air Foam Cerave 150ml",
    "size": "150ml",
    "brand": "CeraVe",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 59.99,
    "price": 53.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 241,
    "image": "/products/ultra_28273.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Espuma de Limpeza Facial Air Foam Cerave 150ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28273"
  },
  {
    "id": 50246,
    "ultraId": 25744,
    "name": "Ex\xEDmia Firmalize Age Complex com 30 Sach\xEAs",
    "size": "30 Sach\xEAs",
    "brand": "Ex\xEDmia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 118.54,
    "rating": 4.8,
    "reviews": 148,
    "image": "/products/ultra_25744.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Ex\xEDmia Firmalize Age Complex com 30 Sach\xEAs. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25744"
  },
  {
    "id": 50247,
    "ultraId": 25746,
    "name": "Eximia fortalize 30 comprimidos",
    "size": "30 comprimidos",
    "brand": "Eximia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 76.44,
    "rating": 4.8,
    "reviews": 182,
    "image": "/products/ultra_25746.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Eximia fortalize 30 comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25746"
  },
  {
    "id": 50248,
    "ultraId": 25741,
    "name": "Eximia Fortalize Kera D 30 comprimidos",
    "size": "30 comprimidos",
    "brand": "Eximia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 54.97,
    "rating": 4.8,
    "reviews": 97,
    "image": "/products/ultra_25741.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Eximia Fortalize Kera D 30 comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25741"
  },
  {
    "id": 50249,
    "ultraId": 25749,
    "name": "Ex\xEDmia Fortalize S Cabelos e Unhas Com 90 Comprimidos",
    "size": "90 Comprimidos",
    "brand": "Ex\xEDmia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 234.33,
    "rating": 4.8,
    "reviews": 233,
    "image": "/products/ultra_25749.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Ex\xEDmia Fortalize S Cabelos e Unhas Com 90 Comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25749"
  },
  {
    "id": 50251,
    "ultraId": 25743,
    "name": "Eximia Fortalize S com 30 Comprimidos",
    "size": "30 Comprimidos",
    "brand": "Eximia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 198.29,
    "rating": 4.8,
    "reviews": 131,
    "image": "/products/ultra_25743.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Eximia Fortalize S com 30 Comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25743"
  },
  {
    "id": 50252,
    "ultraId": 25742,
    "name": "Eximia Probiac com 60 Comprimidos",
    "size": "60 Comprimidos",
    "brand": "Eximia",
    "category": "Sa\xFAde e Beleza",
    "subcategory": "",
    "price": 91.94,
    "rating": 4.8,
    "reviews": 114,
    "image": "/products/ultra_25742.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Eximia Probiac com 60 Comprimidos. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25742"
  },
  {
    "id": 50253,
    "ultraId": 26957,
    "name": "EYESHADOW PALETTE KJ MU ESPALET 16GBRONZ",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 237.05,
    "rating": 4.8,
    "reviews": 89,
    "image": "/products/ultra_26957.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: EYESHADOW PALETTE KJ MU ESPALET 16GBRONZ. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26957"
  },
  {
    "id": 50254,
    "ultraId": 26955,
    "name": "FABULOUS DELINEADOR 01 ULTRA BLACK",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 163.35,
    "rating": 4.8,
    "reviews": 275,
    "image": "/products/ultra_26955.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FABULOUS DELINEADOR 01 ULTRA BLACK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26955"
  },
  {
    "id": 50255,
    "ultraId": 26681,
    "name": "FABULOUS EYES M\uFFFDSCARA DE C\uFFFDLIOS",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 147.02,
    "rating": 4.8,
    "reviews": 237,
    "image": "/products/ultra_26681.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FABULOUS EYES M\uFFFDSCARA DE C\uFFFDLIOS. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26681"
  },
  {
    "id": 50256,
    "ultraId": 26667,
    "name": "FABULOUS EYES M\uFFFDSCARA DE C\uFFFDLIOS WATERPF",
    "size": "M",
    "brand": "Gen\xE9rico",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 163.35,
    "rating": 4.8,
    "reviews": 219,
    "image": "/products/ultra_26667.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FABULOUS EYES M\uFFFDSCARA DE C\uFFFDLIOS WATERPF. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26667"
  },
  {
    "id": 50257,
    "ultraId": 27560,
    "name": "FACE IDOLE BLUSH LIQUIDO 60 9ML",
    "size": "9ML",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 220,
    "image": "/products/ultra_27560.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE BLUSH LIQUIDO 60 9ML. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27560"
  },
  {
    "id": 50258,
    "ultraId": 27494,
    "name": "FACE IDOLE BLUSH LIQUIDO 70 9ML",
    "size": "9ML",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 198,
    "image": "/products/ultra_27494.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE BLUSH LIQUIDO 70 9ML. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27494"
  },
  {
    "id": 50259,
    "ultraId": 27909,
    "name": "FACE IDOLE LCM IDOLE LQD BLUSH 10",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 166.1,
    "rating": 4.8,
    "reviews": 213,
    "image": "/products/ultra_27909.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE LCM IDOLE LQD BLUSH 10. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27909"
  },
  {
    "id": 50260,
    "ultraId": 27824,
    "name": "FACE IDOLE LCM IDOLE LQD BLUSH 30",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 88,
    "image": "/products/ultra_27824.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE LCM IDOLE LQD BLUSH 30. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27824"
  },
  {
    "id": 50261,
    "ultraId": 27837,
    "name": "FACE IDOLE LCM IDOLE LQD BLUSH 40",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 89,
    "image": "/products/ultra_27837.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE LCM IDOLE LQD BLUSH 40. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27837"
  },
  {
    "id": 50262,
    "ultraId": 27708,
    "name": "FACE IDOLE LCM IDOLE LQD BLUSH 80",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 96,
    "image": "/products/ultra_27708.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE LCM IDOLE LQD BLUSH 80. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27708"
  },
  {
    "id": 50263,
    "ultraId": 27819,
    "name": "FACE IDOLE LCM IDOLE LQD BLUSH 90",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 149.49,
    "rating": 4.8,
    "reviews": 223,
    "image": "/products/ultra_27819.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FACE IDOLE LCM IDOLE LQD BLUSH 90. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27819"
  },
  {
    "id": 50264,
    "ultraId": 26637,
    "name": "FAMOUS MASCARA DEEP BLACK",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 118.25,
    "rating": 4.8,
    "reviews": 149,
    "image": "/products/ultra_26637.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FAMOUS MASCARA DEEP BLACK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26637"
  },
  {
    "id": 50265,
    "ultraId": 26653,
    "name": "FAMOUS MINI MASCARA DEEP BALCK",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 70.95,
    "rating": 4.8,
    "reviews": 201,
    "image": "/products/ultra_26653.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FAMOUS MINI MASCARA DEEP BALCK. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26653"
  },
  {
    "id": 50266,
    "ultraId": 27854,
    "name": "FAUX FILTER COLOR CORRECTOR PEACH",
    "size": "",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 143,
    "rating": 4.8,
    "reviews": 158,
    "image": "/products/ultra_27854.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FAUX FILTER COLOR CORRECTOR PEACH. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "27854"
  },
  {
    "id": 50267,
    "ultraId": 28587,
    "name": "Fixador Corega Ultra em p\xF3 50g",
    "size": "50g",
    "brand": "Corega",
    "category": "Higiene Pessoal",
    "subcategory": "Desodorantes e Cuidados",
    "oldPrice": 79.8,
    "price": 71.82,
    "discount": 10,
    "rating": 4.8,
    "reviews": 299,
    "image": "/products/ultra_28587.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fixador Corega Ultra em p\xF3 50g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28587"
  },
  {
    "id": 50268,
    "ultraId": 28680,
    "name": "Fletop Lo\xE7\xE3o Para Pernas e P\xE9s com 200ml",
    "size": "200ml",
    "brand": "Gen\xE9rico",
    "category": "Cuidado Corporal",
    "subcategory": "",
    "oldPrice": 49.99,
    "price": 44.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 120,
    "image": "/products/ultra_28680.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fletop Lo\xE7\xE3o Para Pernas e P\xE9s com 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28680"
  },
  {
    "id": 50269,
    "ultraId": 28667,
    "name": "Fortalecedor de Unha Untralnail Base Forte Profuse 7ml",
    "size": "7ml",
    "brand": "Profuse",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "oldPrice": 69.9,
    "price": 62.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 119,
    "image": "/products/ultra_28667.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fortalecedor de Unha Untralnail Base Forte Profuse 7ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28667"
  },
  {
    "id": 50270,
    "ultraId": 28561,
    "name": "Fralda Babysec Ultra Sec G 60 Unidades",
    "size": "60 Unidades",
    "brand": "Babysec",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "oldPrice": 52.9,
    "price": 47.61,
    "discount": 10,
    "rating": 4.8,
    "reviews": 297,
    "image": "/products/ultra_28561.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Babysec Ultra Sec G 60 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28561"
  },
  {
    "id": 50271,
    "ultraId": 26245,
    "name": "Fralda Babysec UltraSec Galinha Pintadinha G 60 Unidades",
    "size": "60 Unidades",
    "brand": "Babysec",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 47.94,
    "rating": 4.8,
    "reviews": 85,
    "image": "/products/ultra_26245.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Babysec UltraSec Galinha Pintadinha G 60 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26245"
  },
  {
    "id": 50272,
    "ultraId": 28560,
    "name": "Fralda Babysec UltraSec XG 56 Unidades",
    "size": "56 Unidades",
    "brand": "Babysec",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "oldPrice": 54.9,
    "price": 49.41,
    "discount": 10,
    "rating": 4.8,
    "reviews": 280,
    "image": "/products/ultra_28560.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Babysec UltraSec XG 56 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28560"
  },
  {
    "id": 50274,
    "ultraId": 26243,
    "name": "Fralda Cal\xE7a Huggies Prote\xE7\xE3o Acolchoada M 80 Unidades",
    "size": "80 Unidades",
    "brand": "Huggies",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 83.94,
    "rating": 4.8,
    "reviews": 271,
    "image": "/products/ultra_26239.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Cal\xE7a Huggies Prote\xE7\xE3o Acolchoada M 80 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26243"
  },
  {
    "id": 50279,
    "ultraId": 26259,
    "name": "Fralda Cal\xE7a MamyPoko Dia & Noite XG 52 Unidades",
    "size": "52 Unidades",
    "brand": "MamyPoko",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 64.74,
    "rating": 4.8,
    "reviews": 103,
    "image": "/products/ultra_26256.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Cal\xE7a MamyPoko Dia & Noite XG 52 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26259"
  },
  {
    "id": 50281,
    "ultraId": 29230,
    "name": "Fralda cal\xE7a MamyPoko Dia & Noite XG 42 Unidades",
    "size": "42 Unidades",
    "brand": "MamyPoko",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 48.59,
    "rating": 4.8,
    "reviews": 230,
    "image": "/products/ultra_29230.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda cal\xE7a MamyPoko Dia & Noite XG 42 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29230"
  },
  {
    "id": 50282,
    "ultraId": 29233,
    "name": "Fralda Cal\xE7a MamyPoko Premium Seca Xxg 44 Unidades",
    "size": "44 Unidades",
    "brand": "MamyPoko",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 68.84,
    "rating": 4.8,
    "reviews": 281,
    "image": "/products/ultra_29233.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Cal\xE7a MamyPoko Premium Seca Xxg 44 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29233"
  },
  {
    "id": 50286,
    "ultraId": 28270,
    "name": "Fralda Descart\xE1vel Babysec Hiper XXG 48 Unidades",
    "size": "48 Unidades",
    "brand": "Babysec",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "oldPrice": 49.99,
    "price": 44.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 190,
    "image": "/products/ultra_28270.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Descart\xE1vel Babysec Hiper XXG 48 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28270"
  },
  {
    "id": 50287,
    "ultraId": 29620,
    "name": "Fralda Huggies Supreme Care G com 66 Unidades",
    "size": "66 Unidades",
    "brand": "Huggies",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 59.93,
    "rating": 4.8,
    "reviews": 260,
    "image": "/products/ultra_29620.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Huggies Supreme Care G com 66 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29620"
  },
  {
    "id": 50293,
    "ultraId": 26222,
    "name": "Fralda Pampers Confort Sec G 60 Unidades",
    "size": "60 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 73.64,
    "rating": 4.8,
    "reviews": 134,
    "image": "/products/pampers_confort_sec_g.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec G 60 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26222"
  },
  {
    "id": 50295,
    "ultraId": 28742,
    "name": "Fralda Pampers Confort Sec G 98 Unidades",
    "size": "98 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "oldPrice": 102.02,
    "price": 91.82,
    "discount": 10,
    "rating": 4.8,
    "reviews": 294,
    "image": "/products/ultra_28742.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec G 98 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28742"
  },
  {
    "id": 50299,
    "ultraId": 28743,
    "name": "Fralda Pampers Confort Sec M 70 Unidades",
    "size": "70 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "oldPrice": 74.76,
    "price": 67.28,
    "discount": 10,
    "rating": 4.8,
    "reviews": 91,
    "image": "/products/ultra_28743.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec M 70 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28743"
  },
  {
    "id": 50302,
    "ultraId": 26217,
    "name": "Fralda Pampers Confort Sec P 50 Unidades",
    "size": "50 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 60.3,
    "rating": 4.8,
    "reviews": 269,
    "image": "/products/pampers_confort_sec_p.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec P 50 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26217"
  },
  {
    "id": 50303,
    "ultraId": 29481,
    "name": "Fralda Pampers Confort Sec P 72 Unidades",
    "size": "72 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 59.61,
    "rating": 4.8,
    "reviews": 97,
    "image": "/products/ultra_29481.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec P 72 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29481"
  },
  {
    "id": 50308,
    "ultraId": 29509,
    "name": "Fralda Pampers Premium Care P 40 unidades",
    "size": "40 unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 42.55,
    "rating": 4.8,
    "reviews": 133,
    "image": "/products/ultra_29509.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Premium Care P 40 unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29509"
  },
  {
    "id": 50312,
    "ultraId": 26231,
    "name": "Fralda Pampers Premium Care XXG 56 Unidades",
    "size": "56 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 90.02,
    "rating": 4.8,
    "reviews": 287,
    "image": "/products/ultra_26229.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Premium Care XXG 56 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26231"
  },
  {
    "id": 50317,
    "ultraId": 26247,
    "name": "Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e M 86 Unidades",
    "size": "86 Unidades",
    "brand": "Pom Pom",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 65.94,
    "rating": 4.8,
    "reviews": 119,
    "image": "/products/ultra_26249.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pom Pom Protek Prote\xE7\xE3o de M\xE3e M 86 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26247"
  },
  {
    "id": 50321,
    "ultraId": 26945,
    "name": "FRANCINY E FRAN BY       EYES 38G",
    "size": "38G",
    "brand": "Gen\xE9rico",
    "category": "M\xE1scaras de C\xEDlios",
    "subcategory": "",
    "price": 35.75,
    "rating": 4.8,
    "reviews": 105,
    "image": "/products/ultra_26945.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FRANCINY E FRAN BY       EYES 38G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26945"
  },
  {
    "id": 50322,
    "ultraId": 26786,
    "name": "FRANCINY E FRAN BY       EYES 5G",
    "size": "5G",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 24.2,
    "rating": 4.8,
    "reviews": 262,
    "image": "/products/ultra_26786.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FRANCINY E FRAN BY       EYES 5G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26786"
  },
  {
    "id": 50323,
    "ultraId": 26946,
    "name": "FRANCINY E FRAN BY       EYES 7G",
    "size": "7G",
    "brand": "Gen\xE9rico",
    "category": "Beleza e Perfumaria",
    "subcategory": "Maquiagem",
    "price": 30.25,
    "rating": 4.8,
    "reviews": 122,
    "image": "/products/ultra_26946.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FRANCINY E FRAN BY       EYES 7G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26946"
  },
  {
    "id": 50324,
    "ultraId": 25923,
    "name": "Fresubin Protein Powder \u2013 300G",
    "size": "300G",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Esportivos",
    "price": 200.14,
    "rating": 4.8,
    "reviews": 111,
    "image": "/products/ultra_25923.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fresubin Protein Powder \u2013 300G. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25923"
  },
  {
    "id": 50325,
    "ultraId": 25926,
    "name": "FTW Creatina Monohidratada 100% Pura \u2013 Explos\xE3o de Energia, For\xE7a e Resist\xEAncia \u2013 Absor\xE7\xE3o R\xE1pida para Ganho de Massa e Performance \u2013 Pote 300g",
    "size": "300g",
    "brand": "Gen\xE9rico",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Creatina",
    "price": 46.04,
    "rating": 4.8,
    "reviews": 162,
    "image": "/products/ultra_25926.jpg",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: FTW Creatina Monohidratada 100% Pura \u2013 Explos\xE3o de Energia, For\xE7a e Resist\xEAncia \u2013 Absor\xE7\xE3o R\xE1pida para Ganho de Massa e Performance \u2013 Pote 300g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "25926"
  },
  {
    "id": 50326,
    "ultraId": 28322,
    "name": "Gel Antiacne Papuless Theraskin 25g",
    "size": "25g",
    "brand": "Gen\xE9rico",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 59.99,
    "price": 53.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 194,
    "image": "/products/ultra_28322.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel Antiacne Papuless Theraskin 25g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28322"
  },
  {
    "id": 50327,
    "ultraId": 29551,
    "name": "Gel Creme Bioderma Atoderm Intensive 500ml",
    "size": "500ml",
    "brand": "Bioderma",
    "category": "Cuidado Corporal",
    "subcategory": "Cuidado Facial",
    "price": 72.82,
    "rating": 4.8,
    "reviews": 187,
    "image": "/products/ultra_29551.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel Creme Bioderma Atoderm Intensive 500ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29551"
  },
  {
    "id": 50328,
    "ultraId": 29306,
    "name": "Gel Creme clareador Clair Concentre Profuse 30g",
    "size": "30g",
    "brand": "Profuse",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 137.69,
    "rating": 4.8,
    "reviews": 202,
    "image": "/products/ultra_29306.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel Creme clareador Clair Concentre Profuse 30g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29306"
  },
  {
    "id": 50329,
    "ultraId": 29322,
    "name": "Gel de Limpeza Facial Av\xE8ne Cleanance Intense 300g",
    "size": "300g",
    "brand": "Av\xE8ne",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 48.59,
    "rating": 4.8,
    "reviews": 254,
    "image": "/products/ultra_29322.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza Facial Av\xE8ne Cleanance Intense 300g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29322"
  },
  {
    "id": 50330,
    "ultraId": 29637,
    "name": "Gel de Limpeza Facial Bioderma S\xE9bium Gel Moussant 200ml",
    "size": "200ml",
    "brand": "Bioderma",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 32.39,
    "rating": 4.8,
    "reviews": 109,
    "image": "/products/ultra_29637.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza Facial Bioderma S\xE9bium Gel Moussant 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29637"
  },
  {
    "id": 50331,
    "ultraId": 29387,
    "name": "Gel De Limpeza Facial Darrow Actine Oil Control 400g",
    "size": "400g",
    "brand": "Darrow",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 48.59,
    "rating": 4.8,
    "reviews": 259,
    "image": "/products/ultra_29387.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel De Limpeza Facial Darrow Actine Oil Control 400g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29387"
  },
  {
    "id": 50332,
    "ultraId": 29357,
    "name": "Gel de Limpeza Facial La Roche-Posay Effaclar Concentrado 300g",
    "size": "300g",
    "brand": "La Roche-Posay",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 46.17,
    "rating": 4.8,
    "reviews": 189,
    "image": "/products/ultra_29357.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza Facial La Roche-Posay Effaclar Concentrado 300g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29357"
  },
  {
    "id": 50333,
    "ultraId": 28471,
    "name": "Gel de Limpeza Facial La Roche-Posay Mela B3 120g",
    "size": "120g",
    "brand": "La Roche-Posay",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 89.9,
    "price": 80.91,
    "discount": 10,
    "rating": 4.8,
    "reviews": 87,
    "image": "/products/ultra_28471.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza Facial La Roche-Posay Mela B3 120g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28471"
  },
  {
    "id": 50334,
    "ultraId": 28323,
    "name": "Gel de limpeza Neutrogena Acne Proofing 200ml",
    "size": "200ml",
    "brand": "Neutrogena",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "oldPrice": 39.99,
    "price": 35.99,
    "discount": 10,
    "rating": 4.8,
    "reviews": 211,
    "image": "/products/ultra_28323.png",
    "badges": [
      "-10%",
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de limpeza Neutrogena Acne Proofing 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "28323"
  },
  {
    "id": 50335,
    "ultraId": 29404,
    "name": "Gel de Limpeza S\xE9bium Bioderma Gel Moussant Actif 200ml",
    "size": "200ml",
    "brand": "Bioderma",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 32.4,
    "rating": 4.8,
    "reviews": 108,
    "image": "/products/ultra_29404.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza S\xE9bium Bioderma Gel Moussant Actif 200ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29404"
  },
  {
    "id": 50336,
    "ultraId": 29405,
    "name": "Gel de Limpeza S\xE9bium Gel Moussant Actif 500ml",
    "size": "500ml",
    "brand": "Gen\xE9rico",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 64.8,
    "rating": 4.8,
    "reviews": 125,
    "image": "/products/ultra_29405.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel de Limpeza S\xE9bium Gel Moussant Actif 500ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29405"
  },
  {
    "id": 50337,
    "ultraId": 26323,
    "name": "Gel Dental Colgate PerioGard Gengiva Saud\xE1vel 90g",
    "size": "90g",
    "brand": "Colgate",
    "category": "Cremes Dentais",
    "subcategory": "",
    "price": 22.79,
    "rating": 4.8,
    "reviews": 91,
    "image": "/products/ultra_26323.webp",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel Dental Colgate PerioGard Gengiva Saud\xE1vel 90g. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "26323"
  },
  {
    "id": 50338,
    "ultraId": 29282,
    "name": "Gel Espuma de Limpeza Facial Sallve 300ml",
    "size": "300ml",
    "brand": "Sallve",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados com o Rosto",
    "price": 48.59,
    "rating": 4.8,
    "reviews": 234,
    "image": "/products/ultra_29282.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Gel Espuma de Limpeza Facial Sallve 300ml. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29282"
  },
  {
    "id": 50357,
    "ultraId": 29624,
    "name": "MamyPoko Fralda Cal\xE7a Premium Seca M 68 Unidades",
    "size": "68 Unidades",
    "brand": "MamyPoko",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 64.72,
    "rating": 4.8,
    "reviews": 142,
    "image": "/products/ultra_29624.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: MamyPoko Fralda Cal\xE7a Premium Seca M 68 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29624"
  },
  {
    "id": 50358,
    "ultraId": 29508,
    "name": "Fralda Pampers Confort Sec Xxxg 44 Unidades",
    "size": "44 Unidades",
    "brand": "Pampers",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Fraldas Infantis",
    "price": 65.3,
    "rating": 4.8,
    "reviews": 118,
    "image": "/products/ultra_29508.png",
    "badges": [
      "Mais Vendidos"
    ],
    "description": "Produto aut\xEAntico e de alta performance: Fralda Pampers Confort Sec Xxxg 44 Unidades. F\xF3rmula com m\xE1xima pureza, efic\xE1cia comprovada e proced\xEAncia garantida.",
    "bullets": [
      "F\xF3rmula original e certificada de alta qualidade.",
      "Ideal para cuidados di\xE1rios e resultados superiores.",
      "Entrega r\xE1pida e segura com a garantia Droga Raia."
    ],
    "productCode": "29508"
  }
];

// src/data/novosKitsCarvalhoUltra.ts
var novosKitsCarvalhoUltra = [
  {
    "id": 60001,
    "name": "Kit Shampoo, M\xE1scara e Ampola Divine \u2013 Bra\xE9",
    "brand": "Bra\xE9",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 40.7,
    "oldPrice": 42.84,
    "discount": 5,
    "rating": 4.9,
    "reviews": 261,
    "image": "/products/kit_60001.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo, M\xE1scara e Ampola Divine \u2013 Bra\xE9. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60001",
    "size": "Kit"
  },
  {
    "id": 60002,
    "name": "Kit Shampoo Antiqueda Alpecin Caffeine C1 250ml 2 unidades",
    "brand": "Alpecin",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 170.98,
    "oldPrice": 179.98,
    "discount": 5,
    "rating": 5,
    "reviews": 262,
    "image": "/products/kit_60002.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Antiqueda Alpecin Caffeine C1 250ml 2 unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60002",
    "size": "250ml"
  },
  {
    "id": 60003,
    "name": "Kit Shampoo Suave + Condicionador + Deo Col\xF4nia Melancia Dolce Pet",
    "brand": "Dolce Pet",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 157.22,
    "oldPrice": 165.49,
    "discount": 5,
    "rating": 4.8,
    "reviews": 263,
    "image": "/products/kit_60003.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Suave + Condicionador + Deo Col\xF4nia Melancia Dolce Pet. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60003",
    "size": "Kit"
  },
  {
    "id": 60004,
    "name": "Kit Shampoo 350ml + Condicionador 150ml Dove Bond Repair+ Pept\xEDdeo",
    "brand": "Dove",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 17.91,
    "oldPrice": 18.85,
    "discount": 5,
    "rating": 4.9,
    "reviews": 264,
    "image": "/products/kit_60004.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo 350ml + Condicionador 150ml Dove Bond Repair+ Pept\xEDdeo. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60004",
    "size": "350ml"
  },
  {
    "id": 60005,
    "name": "Kit Shampoo Antiqueda Alpecin Caffeine Black Edition 250ml 2 unidades",
    "brand": "Alpecin",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 189.98,
    "oldPrice": 199.98,
    "discount": 5,
    "rating": 5,
    "reviews": 265,
    "image": "/products/kit_60005.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Antiqueda Alpecin Caffeine Black Edition 250ml 2 unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60005",
    "size": "250ml"
  },
  {
    "id": 60006,
    "name": "Kit Shampoo Suave + Condicionador Top\xE1zio + Deo Col\xF4nia Baby C\xE3es e Gatos",
    "brand": "Droga Raia",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 180.87,
    "oldPrice": 190.39,
    "discount": 5,
    "rating": 4.8,
    "reviews": 266,
    "image": "/products/kit_60006.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Suave + Condicionador Top\xE1zio + Deo Col\xF4nia Baby C\xE3es e Gatos. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60006",
    "size": "Kit"
  },
  {
    "id": 60007,
    "name": "Kit Shampoo Anticaspa Darrow Doctar Plus Intensivo 2 Unidades com 240ml cada",
    "brand": "Darrow",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 47.02,
    "oldPrice": 49.5,
    "discount": 5,
    "rating": 4.9,
    "reviews": 267,
    "image": "/products/kit_60007.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Anticaspa Darrow Doctar Plus Intensivo 2 Unidades com 240ml cada. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60007",
    "size": "2 Unidades"
  },
  {
    "id": 60008,
    "name": "Kit Shampoo Suave + Condicionador Top\xE1zio + Deo Col\xF4nia Cereja e Avel\xE3 C\xE3es e Gatos",
    "brand": "Droga Raia",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 180.87,
    "oldPrice": 190.39,
    "discount": 5,
    "rating": 5,
    "reviews": 268,
    "image": "/products/kit_60008.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Suave + Condicionador Top\xE1zio + Deo Col\xF4nia Cereja e Avel\xE3 C\xE3es e Gatos. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60008",
    "size": "Kit"
  },
  {
    "id": 60009,
    "name": "Kit Shampoo 250ml + Condicionador 230ml + 1 Cartela De Adesivos Divertidamente 2 Nutriex",
    "brand": "Nutriex",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 17.31,
    "oldPrice": 18.22,
    "discount": 5,
    "rating": 4.8,
    "reviews": 269,
    "image": "/products/kit_60009.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo 250ml + Condicionador 230ml + 1 Cartela De Adesivos Divertidamente 2 Nutriex. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60009",
    "size": "250ml"
  },
  {
    "id": 60010,
    "name": "Kit Shampoo 2 Em 1 250ml + Sabonete Liquido 250ml + 1 Cartela De Adesivos Toy Story Nutriex",
    "brand": "Nutriex",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 15.74,
    "oldPrice": 16.57,
    "discount": 5,
    "rating": 4.9,
    "reviews": 270,
    "image": "/products/kit_60010.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo 2 Em 1 250ml + Sabonete Liquido 250ml + 1 Cartela De Adesivos Toy Story Nutriex. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60010",
    "size": "250ml"
  },
  {
    "id": 60011,
    "name": "Kit Shampoo Suave + Condicionador Top\xE1zio Cereja e Avel\xE3 Dolce Pet para C\xE3es e Gatos - 500Ml",
    "brand": "Dolce Pet",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 154.87,
    "oldPrice": 163.02,
    "discount": 5,
    "rating": 5,
    "reviews": 271,
    "image": "/products/kit_60011.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo Suave + Condicionador Top\xE1zio Cereja e Avel\xE3 Dolce Pet para C\xE3es e Gatos - 500Ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60011",
    "size": "500Ml"
  },
  {
    "id": 60012,
    "name": "Kit Shampoo 360ml + Condicionador 360ml + M\xE1scara de Hidrata\xE7\xE3o 3 Minute Miracle 236ml Aussie Btx Effect",
    "brand": "Aussie",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 30.62,
    "oldPrice": 32.23,
    "discount": 5,
    "rating": 4.8,
    "reviews": 272,
    "image": "/products/kit_60012.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Shampoo 360ml + Condicionador 360ml + M\xE1scara de Hidrata\xE7\xE3o 3 Minute Miracle 236ml Aussie Btx Effect. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60012",
    "size": "360ml"
  },
  {
    "id": 60013,
    "name": "Kerasys Kit (Shampoo Revitalizing + Condicionador Repairing) 180Ml",
    "brand": "Kerasys",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 110.11,
    "oldPrice": 115.9,
    "discount": 5,
    "rating": 4.9,
    "reviews": 273,
    "image": "/products/kit_60013.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kerasys Kit (Shampoo Revitalizing + Condicionador Repairing) 180Ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60013",
    "size": "180Ml"
  },
  {
    "id": 60014,
    "name": "Kit Si\xE0ge DermoHair Shampoo 300ml + M\xE1scara 250g",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 39.9,
    "oldPrice": 42,
    "discount": 5,
    "rating": 5,
    "reviews": 274,
    "image": "/products/kit_60014.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Si\xE0ge DermoHair Shampoo 300ml + M\xE1scara 250g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60014",
    "size": "300ml"
  },
  {
    "id": 60015,
    "name": "Kit Seda Ceramidas Shampoo 300ml + Condicionador 190ml",
    "brand": "Seda",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 19.94,
    "oldPrice": 20.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 275,
    "image": "/products/kit_60015.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Seda Ceramidas Shampoo 300ml + Condicionador 190ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60015",
    "size": "300ml"
  },
  {
    "id": 60016,
    "name": "Kit Widi Care Juba Shampoo 500ml + Condicionador 500ml",
    "brand": "Widi Care",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 20.43,
    "oldPrice": 21.51,
    "discount": 5,
    "rating": 4.9,
    "reviews": 276,
    "image": "/products/kit_60016.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Widi Care Juba Shampoo 500ml + Condicionador 500ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60016",
    "size": "500ml"
  },
  {
    "id": 60017,
    "name": "Kit Barba Goot - \xD3leo + Balm + Shampoo Barba Embaixador 200ml",
    "brand": "Goot",
    "category": "Homem",
    "subcategory": "Barba e Cabelo",
    "price": 83.5,
    "oldPrice": 87.9,
    "discount": 5,
    "rating": 5,
    "reviews": 277,
    "image": "/products/kit_60017.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Barba Goot - \xD3leo + Balm + Shampoo Barba Embaixador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60017",
    "size": "200ml"
  },
  {
    "id": 60018,
    "name": "Kit Eudora Si\xE0ge Glow Expert Shampoo 250ml + M\xE1scara 250g",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 23.75,
    "oldPrice": 25,
    "discount": 5,
    "rating": 4.8,
    "reviews": 278,
    "image": "/products/kit_60018.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Eudora Si\xE0ge Glow Expert Shampoo 250ml + M\xE1scara 250g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60018",
    "size": "250ml"
  },
  {
    "id": 60019,
    "name": "Kit Wella Invigo Nutri Enrich Shampoo 250ml + M\xE1scara 150ml",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 74.53,
    "oldPrice": 78.45,
    "discount": 5,
    "rating": 4.9,
    "reviews": 279,
    "image": "/products/kit_60019.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Invigo Nutri Enrich Shampoo 250ml + M\xE1scara 150ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60019",
    "size": "250ml"
  },
  {
    "id": 60020,
    "name": "Kit Wella Invigo Nutri Enrich Shampoo 1L + Condicionador 1L",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 185.68,
    "oldPrice": 195.45,
    "discount": 5,
    "rating": 5,
    "reviews": 280,
    "image": "/products/kit_60020.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Invigo Nutri Enrich Shampoo 1L + Condicionador 1L. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60020",
    "size": "Kit"
  },
  {
    "id": 60021,
    "name": "Kit Elseve Glycolic Gloss Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 35.14,
    "oldPrice": 36.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 281,
    "image": "/products/kit_60021.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Elseve Glycolic Gloss Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60021",
    "size": "375ml"
  },
  {
    "id": 60022,
    "name": "Kit Tio Nacho Engrossador Shampoo 415ml + Condicionador 200ml",
    "brand": "Tio Nacho",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 52.05,
    "oldPrice": 54.79,
    "discount": 5,
    "rating": 4.9,
    "reviews": 282,
    "image": "/products/kit_60022.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Tio Nacho Engrossador Shampoo 415ml + Condicionador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60022",
    "size": "415ml"
  },
  {
    "id": 60023,
    "name": "Kit Eudora Si\xE0ge Nutri Rose Shampoo Condicionador 250/200ml",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 21.83,
    "oldPrice": 22.98,
    "discount": 5,
    "rating": 5,
    "reviews": 283,
    "image": "/products/kit_60023.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Eudora Si\xE0ge Nutri Rose Shampoo Condicionador 250/200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60023",
    "size": "200ml"
  },
  {
    "id": 60024,
    "name": "Kit Barba Goot Wood - \xD3leo + Balm + Shampoo Barba Embaixador 200ml",
    "brand": "Goot",
    "category": "Homem",
    "subcategory": "Barba e Cabelo",
    "price": 79.7,
    "oldPrice": 83.9,
    "discount": 5,
    "rating": 4.8,
    "reviews": 284,
    "image": "/products/kit_60024.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Barba Goot Wood - \xD3leo + Balm + Shampoo Barba Embaixador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60024",
    "size": "200ml"
  },
  {
    "id": 60025,
    "name": "Kit Elseve Liso dos Sonhos Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 17.05,
    "oldPrice": 17.95,
    "discount": 5,
    "rating": 4.9,
    "reviews": 285,
    "image": "/products/kit_60025.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Elseve Liso dos Sonhos Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60025",
    "size": "375ml"
  },
  {
    "id": 60026,
    "name": "Kit TRESemm\xE9 Brilho Lamelar Shampoo 350ml + Condicionador 175ml",
    "brand": "TRESemm\xE9",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 27.54,
    "oldPrice": 28.99,
    "discount": 5,
    "rating": 5,
    "reviews": 286,
    "image": "/products/kit_60026.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRESemm\xE9 Brilho Lamelar Shampoo 350ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60026",
    "size": "350ml"
  },
  {
    "id": 60027,
    "name": "Kit Wella Professionals Shampoo Oil Reflections 1l \u2013 2 unidades",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 158.13,
    "oldPrice": 166.45,
    "discount": 5,
    "rating": 4.8,
    "reviews": 287,
    "image": "/products/kit_60027.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Shampoo Oil Reflections 1l \u2013 2 unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60027",
    "size": "2 unidades"
  },
  {
    "id": 60028,
    "name": "Kit Loreal Absolut Repair Shampoo 750ml e Condicionador 750ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 259.67,
    "oldPrice": 273.34,
    "discount": 5,
    "rating": 4.9,
    "reviews": 288,
    "image": "/products/kit_60028.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Loreal Absolut Repair Shampoo 750ml e Condicionador 750ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60028",
    "size": "750ml"
  },
  {
    "id": 60029,
    "name": "Kit Pantene Pro-V Hidrata\xE7\xE3o Shampoo 350ml + Condicionador 175ml",
    "brand": "Pantene",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 42.74,
    "oldPrice": 44.99,
    "discount": 5,
    "rating": 5,
    "reviews": 289,
    "image": "/products/kit_60029.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Pantene Pro-V Hidrata\xE7\xE3o Shampoo 350ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60029",
    "size": "350ml"
  },
  {
    "id": 60030,
    "name": "Kit Dove Bond Intense Repair Shampoo 350ml + Condicionador 150ml",
    "brand": "Dove",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 28.49,
    "oldPrice": 29.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 290,
    "image": "/products/kit_60030.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Dove Bond Intense Repair Shampoo 350ml + Condicionador 150ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60030",
    "size": "350ml"
  },
  {
    "id": 60031,
    "name": "Kit Si\xE0ge Eudora Glow Expert Shampoo 250ml + Condicionador 125ml",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 31.82,
    "oldPrice": 33.49,
    "discount": 5,
    "rating": 4.9,
    "reviews": 291,
    "image": "/products/kit_60031.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Si\xE0ge Eudora Glow Expert Shampoo 250ml + Condicionador 125ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60031",
    "size": "250ml"
  },
  {
    "id": 60032,
    "name": "Kit Eudora Si\xE0ge Hidrata\xE7\xE3o Micelar Shampoo 250ml + M\xE1scara 250g",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 26.36,
    "oldPrice": 27.75,
    "discount": 5,
    "rating": 5,
    "reviews": 292,
    "image": "/products/kit_60032.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Eudora Si\xE0ge Hidrata\xE7\xE3o Micelar Shampoo 250ml + M\xE1scara 250g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60032",
    "size": "250ml"
  },
  {
    "id": 60033,
    "name": "Kit Elseve Repara\xE7\xE3o Total 5 Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 19.82,
    "oldPrice": 20.86,
    "discount": 5,
    "rating": 4.8,
    "reviews": 293,
    "image": "/products/kit_60033.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Elseve Repara\xE7\xE3o Total 5 Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60033",
    "size": "375ml"
  },
  {
    "id": 60034,
    "name": "Kit Si\xE0ge Eudora Hair Plastia Shampoo 250ml + Condicionador 125ml",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 82.64,
    "oldPrice": 86.99,
    "discount": 5,
    "rating": 4.9,
    "reviews": 294,
    "image": "/products/kit_60034.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Si\xE0ge Eudora Hair Plastia Shampoo 250ml + Condicionador 125ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60034",
    "size": "250ml"
  },
  {
    "id": 60035,
    "name": "Kit Si\xE0ge Eudora Liso Intenso Shampoo 250ml + Condicionador 125ml",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 38.94,
    "oldPrice": 40.99,
    "discount": 5,
    "rating": 5,
    "reviews": 295,
    "image": "/products/kit_60035.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Si\xE0ge Eudora Liso Intenso Shampoo 250ml + Condicionador 125ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60035",
    "size": "250ml"
  },
  {
    "id": 60036,
    "name": "Kit Wella Professionals Fusion Double Salon \u2013 Shampoo (2 Unidades)",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 141.61,
    "oldPrice": 149.06,
    "discount": 5,
    "rating": 4.8,
    "reviews": 296,
    "image": "/products/kit_60036.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Fusion Double Salon \u2013 Shampoo (2 Unidades). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60036",
    "size": "2 Unidades"
  },
  {
    "id": 60037,
    "name": "Kit Eudora Siage Hair-plastia Shampoo 250ml Condicionador 200ml",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 20.41,
    "oldPrice": 21.48,
    "discount": 5,
    "rating": 4.9,
    "reviews": 297,
    "image": "/products/kit_60037.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Eudora Siage Hair-plastia Shampoo 250ml Condicionador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60037",
    "size": "250ml"
  },
  {
    "id": 60038,
    "name": "Kit Pantene Pro-V Liso Extremo Shampoo 350ml + Condicionador 175ml",
    "brand": "Pantene",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 42.74,
    "oldPrice": 44.99,
    "discount": 5,
    "rating": 5,
    "reviews": 298,
    "image": "/products/kit_60038.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Pantene Pro-V Liso Extremo Shampoo 350ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60038",
    "size": "350ml"
  },
  {
    "id": 60039,
    "name": "Kit 2 Shampoo Suave Cereja e Avel\xE3 Dolce Pet C\xE3es e Gatos - 500 Ml",
    "brand": "Dolce Pet",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 154.87,
    "oldPrice": 163.02,
    "discount": 5,
    "rating": 4.8,
    "reviews": 299,
    "image": "/products/kit_60039.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 2 Shampoo Suave Cereja e Avel\xE3 Dolce Pet C\xE3es e Gatos - 500 Ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60039",
    "size": "500 Ml"
  },
  {
    "id": 60040,
    "name": "Kit Vichy Dercos Anticaspa Cabelos Secos Shampoo 300g + Refil 200g",
    "brand": "Vichy",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 54.58,
    "oldPrice": 57.45,
    "discount": 5,
    "rating": 4.9,
    "reviews": 110,
    "image": "/products/kit_60040.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Vichy Dercos Anticaspa Cabelos Secos Shampoo 300g + Refil 200g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60040",
    "size": "300g"
  },
  {
    "id": 60041,
    "name": "Kit Beb\xEA Natureza Shampoo 230ml + Condicionador 100ml + Col\xF4nia 30ml",
    "brand": "Beb\xEA Natureza",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 20.47,
    "oldPrice": 21.55,
    "discount": 5,
    "rating": 5,
    "reviews": 111,
    "image": "/products/kit_60041.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Beb\xEA Natureza Shampoo 230ml + Condicionador 100ml + Col\xF4nia 30ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60041",
    "size": "230ml"
  },
  {
    "id": 60042,
    "name": "Kit Elseve \xD3leo Extraordin\xE1rio Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 20.23,
    "oldPrice": 21.3,
    "discount": 5,
    "rating": 4.8,
    "reviews": 112,
    "image": "/products/kit_60042.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Elseve \xD3leo Extraordin\xE1rio Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60042",
    "size": "375ml"
  },
  {
    "id": 60043,
    "name": "Kit \xD3leo para Barba Goot Wood + Shampoo Barba Goot Embaixador 200ml",
    "brand": "Goot",
    "category": "Homem",
    "subcategory": "Barba e Cabelo",
    "price": 48.35,
    "oldPrice": 50.9,
    "discount": 5,
    "rating": 4.9,
    "reviews": 113,
    "image": "/products/kit_60043.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit \xD3leo para Barba Goot Wood + Shampoo Barba Goot Embaixador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60043",
    "size": "200ml"
  },
  {
    "id": 60044,
    "name": "Kit Bio Extratus Umectante \xD3leo de Coco Shampoo Condicionador 1kg",
    "brand": "Bio Extratus",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 41.48,
    "oldPrice": 43.66,
    "discount": 5,
    "rating": 5,
    "reviews": 114,
    "image": "/products/kit_60044.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Bio Extratus Umectante \xD3leo de Coco Shampoo Condicionador 1kg. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60044",
    "size": "1kg"
  },
  {
    "id": 60045,
    "name": "Kit Si\xE0ge DermoHair Shampoo 300ml + Condicionador 20ml + M\xE1scara 250g",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 56.75,
    "oldPrice": 59.74,
    "discount": 5,
    "rating": 4.8,
    "reviews": 115,
    "image": "/products/kit_60045.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Si\xE0ge DermoHair Shampoo 300ml + Condicionador 20ml + M\xE1scara 250g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60045",
    "size": "300ml"
  },
  {
    "id": 60046,
    "name": "Kit Lola From Rio Rapunzel - Shampoo 250ml + T\xF4nico 250ml + M\xE1scara 450g",
    "brand": "Lola From Rio",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 93,
    "oldPrice": 97.9,
    "discount": 5,
    "rating": 4.9,
    "reviews": 116,
    "image": "/products/kit_60046.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Lola From Rio Rapunzel - Shampoo 250ml + T\xF4nico 250ml + M\xE1scara 450g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60046",
    "size": "250ml"
  },
  {
    "id": 60047,
    "name": "Kit TRESemm\xE9 Hidrata\xE7\xE3o Profunda Shampoo 350ml + Condicionador 175ml",
    "brand": "TRESemm\xE9",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 27.54,
    "oldPrice": 28.99,
    "discount": 5,
    "rating": 5,
    "reviews": 117,
    "image": "/products/kit_60047.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRESemm\xE9 Hidrata\xE7\xE3o Profunda Shampoo 350ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60047",
    "size": "350ml"
  },
  {
    "id": 60048,
    "name": "Kit Eudora Si\xE0ge Cauteriza\xE7\xE3o dos Lisos Shampoo 250ml + M\xE1scara 250g",
    "brand": "Eudora Si\xE0ge",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 61.74,
    "oldPrice": 64.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 118,
    "image": "/products/kit_60048.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Eudora Si\xE0ge Cauteriza\xE7\xE3o dos Lisos Shampoo 250ml + M\xE1scara 250g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60048",
    "size": "250ml"
  },
  {
    "id": 60049,
    "name": "Kit Senscience Smooth \u2013 Shampoo 280ml + Condicionador 240ml + C.P.R 25ml",
    "brand": "Senscience",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 172.83,
    "oldPrice": 181.93,
    "discount": 5,
    "rating": 4.9,
    "reviews": 119,
    "image": "/products/kit_60049.jpeg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Senscience Smooth \u2013 Shampoo 280ml + Condicionador 240ml + C.P.R 25ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60049",
    "size": "280ml"
  },
  {
    "id": 60050,
    "name": "Kit Tio Nacho Reconstrutor Total Shampoo 415ml + Condicionador 200ml",
    "brand": "Tio Nacho",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 14.25,
    "oldPrice": 15,
    "discount": 5,
    "rating": 5,
    "reviews": 120,
    "image": "/products/kit_60050.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Tio Nacho Reconstrutor Total Shampoo 415ml + Condicionador 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60050",
    "size": "415ml"
  },
  {
    "id": 60051,
    "name": "Kit Wella Professionals Invigo Nutri-enrich \u2013 Shampoo 1l (2 Produtos)",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 94.98,
    "oldPrice": 99.98,
    "discount": 5,
    "rating": 4.8,
    "reviews": 121,
    "image": "/products/kit_60051.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Invigo Nutri-enrich \u2013 Shampoo 1l (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60051",
    "size": "2 Produtos"
  },
  {
    "id": 60052,
    "name": "Kit TRESemm\xE9 Reconstru\xE7\xE3o e For\xE7a Shampoo 350ml + Condicionador 175ml",
    "brand": "TRESemm\xE9",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 23.74,
    "oldPrice": 24.99,
    "discount": 5,
    "rating": 4.9,
    "reviews": 122,
    "image": "/products/kit_60052.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRESemm\xE9 Reconstru\xE7\xE3o e For\xE7a Shampoo 350ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60052",
    "size": "350ml"
  },
  {
    "id": 60053,
    "name": "Kit Pantene Pro-V Brilhos Extremo Shampoo 400ml + Condicionador 175ml",
    "brand": "Pantene",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 42.74,
    "oldPrice": 44.99,
    "discount": 5,
    "rating": 5,
    "reviews": 123,
    "image": "/products/kit_60053.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Pantene Pro-V Brilhos Extremo Shampoo 400ml + Condicionador 175ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60053",
    "size": "400ml"
  },
  {
    "id": 60054,
    "name": "Kit King C. Gillette para Barba Shampoo 241ml + S\xE9rum Preenchedor 50ml",
    "brand": "Gillette",
    "category": "Homem",
    "subcategory": "Barba e Cabelo",
    "price": 75.99,
    "oldPrice": 79.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 124,
    "image": "/products/kit_60054.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit King C. Gillette para Barba Shampoo 241ml + S\xE9rum Preenchedor 50ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60054",
    "size": "241ml"
  },
  {
    "id": 60055,
    "name": "Kit Wella Professionals Oil Reflections Shampoo 250ml + M\xE1scara 150ml",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 42.73,
    "oldPrice": 44.98,
    "discount": 5,
    "rating": 4.9,
    "reviews": 125,
    "image": "/products/kit_60055.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Oil Reflections Shampoo 250ml + M\xE1scara 150ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60055",
    "size": "250ml"
  },
  {
    "id": 60056,
    "name": "Kit L\u2019Or\xE9al Paris Repara\xE7\xE3o Total 5 Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 17.05,
    "oldPrice": 17.95,
    "discount": 5,
    "rating": 5,
    "reviews": 126,
    "image": "/products/kit_60056.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit L\u2019Or\xE9al Paris Repara\xE7\xE3o Total 5 Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60056",
    "size": "375ml"
  },
  {
    "id": 60057,
    "name": "Kit Principia Antiqueda (2 Produtos) \u2013 Shampoo 250ml + Condicionador 250ml",
    "brand": "Principia",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 40.6,
    "oldPrice": 42.74,
    "discount": 5,
    "rating": 4.8,
    "reviews": 127,
    "image": "/products/kit_60057.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Principia Antiqueda (2 Produtos) \u2013 Shampoo 250ml + Condicionador 250ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60057",
    "size": "2 Produtos"
  },
  {
    "id": 60058,
    "name": "Kit L\u2019Or\xE9al Elseve Hidra Hialur\xF4nico Shampoo 375ml + Condicionador 170ml",
    "brand": "L'Or\xE9al Paris",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 17.05,
    "oldPrice": 17.95,
    "discount": 5,
    "rating": 4.9,
    "reviews": 128,
    "image": "/products/kit_60058.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit L\u2019Or\xE9al Elseve Hidra Hialur\xF4nico Shampoo 375ml + Condicionador 170ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60058",
    "size": "375ml"
  },
  {
    "id": 60059,
    "name": "Kit Hidratei SHRP Shampoo 250ml + Condicionador 200ml + Mini Prote\xEDna 10g",
    "brand": "Hidratei",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 36.77,
    "oldPrice": 38.7,
    "discount": 5,
    "rating": 5,
    "reviews": 129,
    "image": "/products/kit_60059.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Hidratei SHRP Shampoo 250ml + Condicionador 200ml + Mini Prote\xEDna 10g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60059",
    "size": "250ml"
  },
  {
    "id": 60060,
    "name": "Kit Vuelo Shampoo Liso +Leave-In Explos\xE3o de Encantos para C\xE3es e Gatos",
    "brand": "Vuelo",
    "category": "Pet",
    "subcategory": "Higiene Pet",
    "price": 92.39,
    "oldPrice": 97.25,
    "discount": 5,
    "rating": 4.8,
    "reviews": 130,
    "image": "/products/kit_60060.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Vuelo Shampoo Liso +Leave-In Explos\xE3o de Encantos para C\xE3es e Gatos. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60060",
    "size": "Kit"
  },
  {
    "id": 60061,
    "name": "Kit Defini\xE7\xE3o",
    "brand": "Droga Raia",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 105.27,
    "oldPrice": 110.81,
    "discount": 5,
    "rating": 4.9,
    "reviews": 131,
    "image": "/products/kit_60061.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Defini\xE7\xE3o. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60061",
    "size": "Kit"
  },
  {
    "id": 60062,
    "name": "Kit Ps-03 + Lh-01",
    "brand": "Droga Raia",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 91.25,
    "oldPrice": 96.05,
    "discount": 5,
    "rating": 5,
    "reviews": 132,
    "image": "/products/kit_60062.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Ps-03 + Lh-01. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60062",
    "size": "Kit"
  },
  {
    "id": 60063,
    "name": "Kit Base Completa",
    "brand": "Droga Raia",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 118.16,
    "oldPrice": 124.38,
    "discount": 5,
    "rating": 4.8,
    "reviews": 133,
    "image": "/products/kit_60063.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Base Completa. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60063",
    "size": "Kit"
  },
  {
    "id": 60064,
    "name": "Kit Treino Noturno",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 85.22,
    "oldPrice": 89.71,
    "discount": 5,
    "rating": 4.9,
    "reviews": 134,
    "image": "/products/kit_60064.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Treino Noturno. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60064",
    "size": "Kit"
  },
  {
    "id": 60065,
    "name": "Kit Imunidade Homem",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 94.52,
    "oldPrice": 99.49,
    "discount": 5,
    "rating": 5,
    "reviews": 135,
    "image": "/products/kit_60065.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Imunidade Homem. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60065",
    "size": "Kit"
  },
  {
    "id": 60066,
    "name": "Kit Blancy Cis + Olhos",
    "brand": "Mantecorp Skincare",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 465.31,
    "oldPrice": 489.8,
    "discount": 5,
    "rating": 4.8,
    "reviews": 136,
    "image": "/products/kit_60066.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Blancy Cis + Olhos. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60066",
    "size": "Kit"
  },
  {
    "id": 60067,
    "name": "Kit Creatina G-Gummy",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 135.9,
    "oldPrice": 143.05,
    "discount": 5,
    "rating": 4.9,
    "reviews": 137,
    "image": "/products/kit_60067.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Creatina G-Gummy. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60067",
    "size": "Kit"
  },
  {
    "id": 60068,
    "name": "Kit Foco e Desempenho",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 32.44,
    "oldPrice": 34.15,
    "discount": 5,
    "rating": 5,
    "reviews": 138,
    "image": "/products/kit_60068.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Foco e Desempenho. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60068",
    "size": "Kit"
  },
  {
    "id": 60069,
    "name": "Kit Longevidade Ativa",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 127.97,
    "oldPrice": 134.71,
    "discount": 5,
    "rating": 4.8,
    "reviews": 139,
    "image": "/products/kit_60069.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Longevidade Ativa. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60069",
    "size": "Kit"
  },
  {
    "id": 60070,
    "name": "Kit Produtividade Di\xE1ria",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 129.98,
    "oldPrice": 136.82,
    "discount": 5,
    "rating": 4.9,
    "reviews": 140,
    "image": "/products/kit_60070.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Produtividade Di\xE1ria. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60070",
    "size": "Kit"
  },
  {
    "id": 60071,
    "name": "Kit Creatina Creapure 500g",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 124.07,
    "oldPrice": 130.6,
    "discount": 5,
    "rating": 5,
    "reviews": 141,
    "image": "/products/kit_60071.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Creatina Creapure 500g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60071",
    "size": "500g"
  },
  {
    "id": 60072,
    "name": "Kit Higiene Dental Azul Kuka",
    "brand": "Kuka",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 24.98,
    "oldPrice": 26.29,
    "discount": 5,
    "rating": 4.8,
    "reviews": 142,
    "image": "/products/kit_60072.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Higiene Dental Azul Kuka. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60072",
    "size": "Kit"
  },
  {
    "id": 60073,
    "name": "Kit 6x Bebida L\xE1ctea Morango",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 31.39,
    "oldPrice": 33.04,
    "discount": 5,
    "rating": 4.9,
    "reviews": 143,
    "image": "/products/kit_60073.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 6x Bebida L\xE1ctea Morango. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60073",
    "size": "Kit"
  },
  {
    "id": 60074,
    "name": "Kit Digest\xE3o -formulados Farma",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 22.75,
    "oldPrice": 23.95,
    "discount": 5,
    "rating": 5,
    "reviews": 144,
    "image": "/products/kit_60074.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Digest\xE3o -formulados Farma. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60074",
    "size": "Kit"
  },
  {
    "id": 60075,
    "name": "Kit 12x Bebida L\xE1ctea Morango",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 55,
    "oldPrice": 57.89,
    "discount": 5,
    "rating": 4.8,
    "reviews": 145,
    "image": "/products/kit_60075.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 12x Bebida L\xE1ctea Morango. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60075",
    "size": "Kit"
  },
  {
    "id": 60076,
    "name": "Kit 6x Bebida L\xE1ctea Baunilha",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 25.93,
    "oldPrice": 27.3,
    "discount": 5,
    "rating": 4.9,
    "reviews": 146,
    "image": "/products/kit_60076.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 6x Bebida L\xE1ctea Baunilha. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60076",
    "size": "Kit"
  },
  {
    "id": 60077,
    "name": "Kit 12x Bebida L\xE1ctea Baunilha",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 45.45,
    "oldPrice": 47.84,
    "discount": 5,
    "rating": 5,
    "reviews": 147,
    "image": "/products/kit_60077.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 12x Bebida L\xE1ctea Baunilha. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60077",
    "size": "Kit"
  },
  {
    "id": 60078,
    "name": "Kit 6x Bebida L\xE1ctea Chocolate",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 28.53,
    "oldPrice": 30.03,
    "discount": 5,
    "rating": 4.8,
    "reviews": 148,
    "image": "/products/kit_60078.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 6x Bebida L\xE1ctea Chocolate. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60078",
    "size": "Kit"
  },
  {
    "id": 60079,
    "name": "Kit Creatina Monohidratada 1kg",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 94.51,
    "oldPrice": 99.48,
    "discount": 5,
    "rating": 4.9,
    "reviews": 149,
    "image": "/products/kit_60079.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Creatina Monohidratada 1kg. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60079",
    "size": "1kg"
  },
  {
    "id": 60080,
    "name": "Kit Bra\xE9 Divine Duo (2 Produtos)",
    "brand": "Bra\xE9",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 47.34,
    "oldPrice": 49.83,
    "discount": 5,
    "rating": 5,
    "reviews": 150,
    "image": "/products/kit_60080.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Bra\xE9 Divine Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60080",
    "size": "2 Produtos"
  },
  {
    "id": 60081,
    "name": "Kit TRUSS Color Duo (2 Produtos)",
    "brand": "TRUSS",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 45.31,
    "oldPrice": 47.69,
    "discount": 5,
    "rating": 4.8,
    "reviews": 151,
    "image": "/products/kit_60081.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRUSS Color Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60081",
    "size": "2 Produtos"
  },
  {
    "id": 60082,
    "name": "Kit TRUSS Blond Duo (2 Produtos)",
    "brand": "TRUSS",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 43.32,
    "oldPrice": 45.6,
    "discount": 5,
    "rating": 4.9,
    "reviews": 152,
    "image": "/products/kit_60082.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRUSS Blond Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60082",
    "size": "2 Produtos"
  },
  {
    "id": 60083,
    "name": "Kit 12x Bebida L\xE1ctea Chocolate",
    "brand": "Droga Raia",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 49.99,
    "oldPrice": 52.62,
    "discount": 5,
    "rating": 5,
    "reviews": 153,
    "image": "/products/kit_60083.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 12x Bebida L\xE1ctea Chocolate. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60083",
    "size": "Kit"
  },
  {
    "id": 60084,
    "name": "Kit For\xE7a Feminina: Purple Berry",
    "brand": "Droga Raia",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 130.97,
    "oldPrice": 137.86,
    "discount": 5,
    "rating": 4.8,
    "reviews": 154,
    "image": "/products/kit_60084.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit For\xE7a Feminina: Purple Berry. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60084",
    "size": "Kit"
  },
  {
    "id": 60085,
    "name": "Kit 4 Fresubin Lp Baunilha 200ml",
    "brand": "Fresubin",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 47.88,
    "oldPrice": 50.4,
    "discount": 5,
    "rating": 4.9,
    "reviews": 155,
    "image": "/products/kit_60085.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 4 Fresubin Lp Baunilha 200ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60085",
    "size": "200ml"
  },
  {
    "id": 60086,
    "name": "Kit Essencial Avancado Principia",
    "brand": "Principia",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 122.83,
    "oldPrice": 129.29,
    "discount": 5,
    "rating": 5,
    "reviews": 156,
    "image": "/products/kit_60086.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Essencial Avancado Principia. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60086",
    "size": "Kit"
  },
  {
    "id": 60087,
    "name": "Kit TRUSS Miracle Duo (2 Produtos)",
    "brand": "TRUSS",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 41.07,
    "oldPrice": 43.23,
    "discount": 5,
    "rating": 4.8,
    "reviews": 157,
    "image": "/products/kit_60087.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit TRUSS Miracle Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60087",
    "size": "2 Produtos"
  },
  {
    "id": 60088,
    "name": "Kit C/ 2 Epidrat L\xE1bios Fps - 30 5,5g",
    "brand": "Mantecorp Skincare",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 161.31,
    "oldPrice": 169.8,
    "discount": 5,
    "rating": 4.9,
    "reviews": 158,
    "image": "/products/kit_60088.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit C/ 2 Epidrat L\xE1bios Fps - 30 5,5g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60088",
    "size": "5g"
  },
  {
    "id": 60089,
    "name": "Kit 4 Fresubin Creme Baunilha 125g",
    "brand": "Fresubin",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 43.41,
    "oldPrice": 45.7,
    "discount": 5,
    "rating": 5,
    "reviews": 159,
    "image": "/products/kit_60089.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 4 Fresubin Creme Baunilha 125g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60089",
    "size": "125g"
  },
  {
    "id": 60090,
    "name": "Kit 5X L-Glutamine \u2013 120G \u2013 Probi\xF3tica",
    "brand": "Probi\xF3tica",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 74.8,
    "oldPrice": 78.74,
    "discount": 5,
    "rating": 4.8,
    "reviews": 160,
    "image": "/products/kit_60090.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 5X L-Glutamine \u2013 120G \u2013 Probi\xF3tica. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60090",
    "size": "120G"
  },
  {
    "id": 60091,
    "name": "Kit C/ 3 Lip Oil - Epidrat Hyalu Berry",
    "brand": "Mantecorp Skincare",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 152.56,
    "oldPrice": 160.59,
    "discount": 5,
    "rating": 4.9,
    "reviews": 161,
    "image": "/products/kit_60091.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit C/ 3 Lip Oil - Epidrat Hyalu Berry. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60091",
    "size": "Kit"
  },
  {
    "id": 60092,
    "name": "Kit C/ 3 Lip Oil - Epidrat Hyalu Choco",
    "brand": "Mantecorp Skincare",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 152.56,
    "oldPrice": 160.59,
    "discount": 5,
    "rating": 5,
    "reviews": 162,
    "image": "/products/kit_60092.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit C/ 3 Lip Oil - Epidrat Hyalu Choco. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60092",
    "size": "Kit"
  },
  {
    "id": 60093,
    "name": "Kit Needs 1 Pincel Kabuki + 1 Esponja",
    "brand": "Needs",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 37.9,
    "oldPrice": 39.9,
    "discount": 5,
    "rating": 4.8,
    "reviews": 163,
    "image": "/products/kit_60093.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Needs 1 Pincel Kabuki + 1 Esponja. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60093",
    "size": "Kit"
  },
  {
    "id": 60094,
    "name": "Kit T\xE9cnica Loc Dedoliss \u2013 Soul Power",
    "brand": "Soul Power",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 19.93,
    "oldPrice": 20.98,
    "discount": 5,
    "rating": 4.9,
    "reviews": 164,
    "image": "/products/kit_60094.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit T\xE9cnica Loc Dedoliss \u2013 Soul Power. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60094",
    "size": "Kit"
  },
  {
    "id": 60095,
    "name": "Kit 2 Osso Pro Km \u2013 30 Cpr \u2013 Kley Hertz",
    "brand": "Kley Hertz",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 23.75,
    "oldPrice": 25,
    "discount": 5,
    "rating": 5,
    "reviews": 165,
    "image": "/products/kit_60095.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 2 Osso Pro Km \u2013 30 Cpr \u2013 Kley Hertz. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60095",
    "size": "30 Cpr"
  },
  {
    "id": 60096,
    "name": "Kit Antissinais Intensivo Principia",
    "brand": "Principia",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 146.23,
    "oldPrice": 153.93,
    "discount": 5,
    "rating": 4.8,
    "reviews": 166,
    "image": "/products/kit_60096.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Antissinais Intensivo Principia. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60096",
    "size": "Kit"
  },
  {
    "id": 60097,
    "name": "Kit Para Nebulizador Infantil Omron",
    "brand": "Omron",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 8.24,
    "oldPrice": 8.67,
    "discount": 5,
    "rating": 4.9,
    "reviews": 167,
    "image": "/products/kit_60097.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Para Nebulizador Infantil Omron. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60097",
    "size": "Kit"
  },
  {
    "id": 60098,
    "name": "Kit Pente de Cabelo Needs 2 Unidades",
    "brand": "Needs",
    "category": "Higiene Pessoal",
    "subcategory": "Cuidados Pessoais",
    "price": 8.41,
    "oldPrice": 8.85,
    "discount": 5,
    "rating": 5,
    "reviews": 168,
    "image": "/products/kit_60098.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Pente de Cabelo Needs 2 Unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60098",
    "size": "2 Unidades"
  },
  {
    "id": 60099,
    "name": "Kit Dia a Dia Labotrat P\xEAssego C/2un",
    "brand": "Labotrat",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 21.82,
    "oldPrice": 22.97,
    "discount": 5,
    "rating": 4.8,
    "reviews": 169,
    "image": "/products/kit_60099.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Dia a Dia Labotrat P\xEAssego C/2un. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60099",
    "size": "Kit"
  },
  {
    "id": 60100,
    "name": "Kit Para Nebulizador Infantil G-tech",
    "brand": "G-Tech",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 14.23,
    "oldPrice": 14.98,
    "discount": 5,
    "rating": 4.9,
    "reviews": 170,
    "image": "/products/kit_60100.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Para Nebulizador Infantil G-tech. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60100",
    "size": "Kit"
  },
  {
    "id": 60101,
    "name": "Kit Para Nebulizador Infantil Nevoni",
    "brand": "Nevoni",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 10.62,
    "oldPrice": 11.18,
    "discount": 5,
    "rating": 5,
    "reviews": 171,
    "image": "/products/kit_60101.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Para Nebulizador Infantil Nevoni. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60101",
    "size": "Kit"
  },
  {
    "id": 60102,
    "name": "Kit Prote\xE7\xE3o Completa Ps03 + Ps01 + Cm-01",
    "brand": "Droga Raia",
    "category": "Dermocosm\xE9ticos",
    "subcategory": "Cuidados Faciais",
    "price": 126.92,
    "oldPrice": 133.6,
    "discount": 5,
    "rating": 4.8,
    "reviews": 172,
    "image": "/products/kit_60102.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Prote\xE7\xE3o Completa Ps03 + Ps01 + Cm-01. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60102",
    "size": "Kit"
  },
  {
    "id": 60103,
    "name": "Kit C/ 3 Lip Oil - Epidrat Hyalu sem Cor",
    "brand": "Mantecorp Skincare",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 152.56,
    "oldPrice": 160.59,
    "discount": 5,
    "rating": 4.9,
    "reviews": 173,
    "image": "/products/kit_60103.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit C/ 3 Lip Oil - Epidrat Hyalu sem Cor. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60103",
    "size": "Kit"
  },
  {
    "id": 60104,
    "name": "Kit. 06Un - Ov Sucupira 20Ml - (Amazonleve)",
    "brand": "Amazonleve",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 72.11,
    "oldPrice": 75.9,
    "discount": 5,
    "rating": 5,
    "reviews": 174,
    "image": "/products/kit_60104.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit. 06Un - Ov Sucupira 20Ml - (Amazonleve). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60104",
    "size": "20Ml"
  },
  {
    "id": 60105,
    "name": "Kit K\xE9rastase Genesis Duo (2 Produtos)",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 221.93,
    "oldPrice": 233.61,
    "discount": 5,
    "rating": 4.8,
    "reviews": 175,
    "image": "/products/kit_60105.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit K\xE9rastase Genesis Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60105",
    "size": "2 Produtos"
  },
  {
    "id": 60106,
    "name": "Kit Redken All Soft Heavy (3 Produtos)",
    "brand": "Redken",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 239.48,
    "oldPrice": 252.08,
    "discount": 5,
    "rating": 4.9,
    "reviews": 176,
    "image": "/products/kit_60106.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Redken All Soft Heavy (3 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60106",
    "size": "3 Produtos"
  },
  {
    "id": 60107,
    "name": "Kit. 10Un \u2013 Ov Sucupira 20Ml \u2013 (Amazonleve)",
    "brand": "Amazonleve",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 30.86,
    "oldPrice": 32.48,
    "discount": 5,
    "rating": 5,
    "reviews": 177,
    "image": "/products/kit_60107.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit. 10Un \u2013 Ov Sucupira 20Ml \u2013 (Amazonleve). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60107",
    "size": "20Ml"
  },
  {
    "id": 60108,
    "name": "Kit. 08Un \u2013 Ov Sucupira 20Ml (Amazonleve)",
    "brand": "Amazonleve",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 25.16,
    "oldPrice": 26.48,
    "discount": 5,
    "rating": 4.8,
    "reviews": 178,
    "image": "/products/kit_60108.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit. 08Un \u2013 Ov Sucupira 20Ml (Amazonleve). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60108",
    "size": "20Ml"
  },
  {
    "id": 60109,
    "name": "Kit T\xE9cnica Loc Curl Clump \u2013 Soul Power",
    "brand": "Soul Power",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 19.93,
    "oldPrice": 20.98,
    "discount": 5,
    "rating": 4.9,
    "reviews": 179,
    "image": "/products/kit_60109.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit T\xE9cnica Loc Curl Clump \u2013 Soul Power. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60109",
    "size": "Kit"
  },
  {
    "id": 60110,
    "name": "Kit 3 Vitamina A + e 100Ml Bio Extratus",
    "brand": "Bio Extratus",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 29.19,
    "oldPrice": 30.73,
    "discount": 5,
    "rating": 5,
    "reviews": 180,
    "image": "/products/kit_60110.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 3 Vitamina A + e 100Ml Bio Extratus. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60110",
    "size": "100Ml"
  },
  {
    "id": 60111,
    "name": "Kit K\xE9rastase Genesis Trio (3 Produtos)",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 381.83,
    "oldPrice": 401.93,
    "discount": 5,
    "rating": 4.8,
    "reviews": 181,
    "image": "/products/kit_60111.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit K\xE9rastase Genesis Trio (3 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60111",
    "size": "3 Produtos"
  },
  {
    "id": 60112,
    "name": "Kit K\xE9rastase Genesis Deux (2 Produtos)",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 210.4,
    "oldPrice": 221.47,
    "discount": 5,
    "rating": 4.9,
    "reviews": 182,
    "image": "/products/kit_60112.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit K\xE9rastase Genesis Deux (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60112",
    "size": "2 Produtos"
  },
  {
    "id": 60113,
    "name": "Kit Cutelaria Mundial Alicate + Esp\xE1tula",
    "brand": "Mundial",
    "category": "Higiene Pessoal",
    "subcategory": "Cuidados Pessoais",
    "price": 8.19,
    "oldPrice": 8.62,
    "discount": 5,
    "rating": 5,
    "reviews": 183,
    "image": "/products/kit_60113.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Cutelaria Mundial Alicate + Esp\xE1tula. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60113",
    "size": "Kit"
  },
  {
    "id": 60114,
    "name": "Kit K\xE9rastase Genesis Trois (3 Produtos)",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 381.62,
    "oldPrice": 401.71,
    "discount": 5,
    "rating": 4.8,
    "reviews": 184,
    "image": "/products/kit_60114.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit K\xE9rastase Genesis Trois (3 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60114",
    "size": "3 Produtos"
  },
  {
    "id": 60115,
    "name": "Kit 3x: Psyllium Sem Gl\xFAten Vitalin 100g",
    "brand": "Vitalin",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 22.06,
    "oldPrice": 23.22,
    "discount": 5,
    "rating": 4.9,
    "reviews": 185,
    "image": "/products/kit_60115.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 3x: Psyllium Sem Gl\xFAten Vitalin 100g. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60115",
    "size": "100g"
  },
  {
    "id": 60116,
    "name": "Kit Pin\xE7as Belliz Enox Ponta Dourada C/3",
    "brand": "Belliz",
    "category": "Higiene Pessoal",
    "subcategory": "Cuidados Pessoais",
    "price": 78.75,
    "oldPrice": 82.9,
    "discount": 5,
    "rating": 5,
    "reviews": 186,
    "image": "/products/kit_60116.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Pin\xE7as Belliz Enox Ponta Dourada C/3. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60116",
    "size": "Kit"
  },
  {
    "id": 60117,
    "name": "Kit Sebastian Penetraitt Duo (2 Produtos)",
    "brand": "Sebastian Professional",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 159.25,
    "oldPrice": 167.63,
    "discount": 5,
    "rating": 4.8,
    "reviews": 187,
    "image": "/products/kit_60117.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Sebastian Penetraitt Duo (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60117",
    "size": "2 Produtos"
  },
  {
    "id": 60118,
    "name": "Kit K\xE9rastase Curl Manifesto (2 Produtos)",
    "brand": "K\xE9rastase",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 226.89,
    "oldPrice": 238.83,
    "discount": 5,
    "rating": 4.9,
    "reviews": 188,
    "image": "/products/kit_60118.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit K\xE9rastase Curl Manifesto (2 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60118",
    "size": "2 Produtos"
  },
  {
    "id": 60119,
    "name": "Kit Lowell Cacho M\xE1gico Full (6 Produtos)",
    "brand": "Lowell",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 279.05,
    "oldPrice": 293.74,
    "discount": 5,
    "rating": 5,
    "reviews": 189,
    "image": "/products/kit_60119.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Lowell Cacho M\xE1gico Full (6 Produtos). Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60119",
    "size": "6 Produtos"
  },
  {
    "id": 60120,
    "name": "Kit Len\xE7o Umedecido Huggies Rec\xE9m Nascido 192 unidades em 4 pacotes",
    "brand": "Huggies",
    "category": "Mam\xE3e e Beb\xEA",
    "subcategory": "Cuidados com o Beb\xEA",
    "price": 25.01,
    "oldPrice": 26.33,
    "discount": 5,
    "rating": 4.8,
    "reviews": 190,
    "image": "/products/kit_60120.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Len\xE7o Umedecido Huggies Rec\xE9m Nascido 192 unidades em 4 pacotes. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60120",
    "size": "192 unidades"
  },
  {
    "id": 60121,
    "name": "Inoar Cicatrifios Kit com Shampoo 1L + Condicionador 1L",
    "brand": "Inoar",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 30.77,
    "oldPrice": 32.39,
    "discount": 5,
    "rating": 4.9,
    "reviews": 191,
    "image": "/products/kit_60121.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Inoar Cicatrifios Kit com Shampoo 1L + Condicionador 1L. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60121",
    "size": "Kit"
  },
  {
    "id": 60122,
    "name": "Kit de Escovas De Dentes Colgate Slim Soft Black Com 4 Unidades",
    "brand": "Colgate",
    "category": "Higiene Pessoal",
    "subcategory": "Higiene Bucal",
    "price": 23.08,
    "oldPrice": 24.29,
    "discount": 5,
    "rating": 5,
    "reviews": 192,
    "image": "/products/kit_60122.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit de Escovas De Dentes Colgate Slim Soft Black Com 4 Unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60122",
    "size": "4 Unidades"
  },
  {
    "id": 60123,
    "name": "Kit Sabonete em Barra Nivea Creme Care 90g com 6 unidades",
    "brand": "Nivea",
    "category": "Higiene Pessoal",
    "subcategory": "Cuidados Pessoais",
    "price": 15.38,
    "oldPrice": 16.19,
    "discount": 5,
    "rating": 4.8,
    "reviews": 193,
    "image": "/products/kit_60123.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Sabonete em Barra Nivea Creme Care 90g com 6 unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60123",
    "size": "90g"
  },
  {
    "id": 60124,
    "name": "Kit 2x Hipercal\xF3rico 6 Six Bulking Baunilha 6kg \u2013 Bodybuilders",
    "brand": "Bodybuilders",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 127.85,
    "oldPrice": 134.58,
    "discount": 5,
    "rating": 4.9,
    "reviews": 194,
    "image": "/products/kit_60124.jpeg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 2x Hipercal\xF3rico 6 Six Bulking Baunilha 6kg \u2013 Bodybuilders. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60124",
    "size": "6kg"
  },
  {
    "id": 60125,
    "name": "Kit Wella Professionals Invigo Nutri Enrich \u2013 Shampoo 1000ml + Condicionador 1000ml",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 180.49,
    "oldPrice": 189.99,
    "discount": 5,
    "rating": 5,
    "reviews": 195,
    "image": "/products/kit_60125.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Invigo Nutri Enrich \u2013 Shampoo 1000ml + Condicionador 1000ml. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60125",
    "size": "1000ml"
  },
  {
    "id": 60126,
    "name": "Kit Imecap Hair Max Cabelos E Unhas 90 C\xE1psulas",
    "brand": "Imecap Hair",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 75.14,
    "oldPrice": 79.1,
    "discount": 5,
    "rating": 4.8,
    "reviews": 196,
    "image": "/products/kit_60126.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Imecap Hair Max Cabelos E Unhas 90 C\xE1psulas. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60126",
    "size": "Kit"
  },
  {
    "id": 60127,
    "name": "Kit 2 Ora-Pro-N\xF3bis + C\xFArcuma + Gengibre 240C\xE1ps 500mg Status Verde",
    "brand": "Status Verde",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 72.98,
    "oldPrice": 76.82,
    "discount": 5,
    "rating": 4.9,
    "reviews": 197,
    "image": "/products/kit_60127.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit 2 Ora-Pro-N\xF3bis + C\xFArcuma + Gengibre 240C\xE1ps 500mg Status Verde. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60127",
    "size": "Kit"
  },
  {
    "id": 60128,
    "name": "Kit Wella Professionals Invigo Nutri Enrich Salon Trio 3 Produtos",
    "brand": "Wella Professionals",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 256.49,
    "oldPrice": 269.99,
    "discount": 5,
    "rating": 5,
    "reviews": 198,
    "image": "/products/kit_60128.png",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Wella Professionals Invigo Nutri Enrich Salon Trio 3 Produtos. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60128",
    "size": "3 Produtos"
  },
  {
    "id": 60134,
    "name": "KITS NUDE NATURAL LIPS-FOUNDERS MINI LIP",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 112.34,
    "oldPrice": 118.25,
    "discount": 5,
    "rating": 5,
    "reviews": 204,
    "image": "/products/kit_60134.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KITS NUDE NATURAL LIPS-FOUNDERS MINI LIP. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60134",
    "size": "Kit"
  },
  {
    "id": 60135,
    "name": "KIT DE BLUSH NARS ORGASM MATTE & GLOW",
    "brand": "NARS",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 254.04,
    "oldPrice": 267.41,
    "discount": 5,
    "rating": 4.8,
    "reviews": 205,
    "image": "/products/kit_60135.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT DE BLUSH NARS ORGASM MATTE & GLOW. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60135",
    "size": "Kit"
  },
  {
    "id": 60136,
    "name": "KIT BENEFIT THE POREFESSIONAL MATTE MAKERS",
    "brand": "Benefit",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 183.4,
    "oldPrice": 193.05,
    "discount": 5,
    "rating": 4.9,
    "reviews": 206,
    "image": "/products/kit_60136.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT BENEFIT THE POREFESSIONAL MATTE MAKERS. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60136",
    "size": "Kit"
  },
  {
    "id": 60137,
    "name": "THAT GIRL KITTEN EYES 1UNID",
    "brand": "That Girl",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 11.49,
    "oldPrice": 12.1,
    "discount": 5,
    "rating": 5,
    "reviews": 207,
    "image": "/products/kit_60137.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "THAT GIRL KITTEN EYES 1UNID. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60137",
    "size": "1UNID"
  },
  {
    "id": 60139,
    "name": "KIT M\xC1SCARA DE CILIOS E BLUSH RARE BEAUTY",
    "brand": "Rare Beauty",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 80.1,
    "oldPrice": 84.32,
    "discount": 5,
    "rating": 4.9,
    "reviews": 209,
    "image": "/products/kit_60139.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT M\xC1SCARA DE CILIOS E BLUSH RARE BEAUTY. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60139",
    "size": "Kit"
  },
  {
    "id": 60140,
    "name": "KIT FANFEST BOOSTER 12",
    "brand": "Droga Raia",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 140.55,
    "oldPrice": 147.95,
    "discount": 5,
    "rating": 5,
    "reviews": 210,
    "image": "/products/kit_60140.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT FANFEST BOOSTER 12. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60140",
    "size": "Kit"
  },
  {
    "id": 60141,
    "name": "KIT PRESENTE\xC1VEL SEPHORA COLLECTION CRUSH ON YOU",
    "brand": "Sephora Collection",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 204.82,
    "oldPrice": 215.6,
    "discount": 5,
    "rating": 4.8,
    "reviews": 211,
    "image": "/products/kit_60141.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT PRESENTE\xC1VEL SEPHORA COLLECTION CRUSH ON YOU. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60141",
    "size": "Kit"
  },
  {
    "id": 60142,
    "name": "KIT MASCARA DE CILIOS E LAPIS CHOCOEYES",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 49.64,
    "oldPrice": 52.25,
    "discount": 5,
    "rating": 4.9,
    "reviews": 212,
    "image": "/products/kit_60142.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT MASCARA DE CILIOS E LAPIS CHOCOEYES. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60142",
    "size": "Kit"
  },
  {
    "id": 60143,
    "name": "KIT PARA OS OLHOS EST\xC9E LAUDER",
    "brand": "Est\xE9e Lauder",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 234.08,
    "oldPrice": 246.4,
    "discount": 5,
    "rating": 5,
    "reviews": 213,
    "image": "/products/kit_60143.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT PARA OS OLHOS EST\xC9E LAUDER. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60143",
    "size": "Kit"
  },
  {
    "id": 60144,
    "name": "KITS NUDE BEACH 6PC EYE PENCIL PALETTE",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 248.19,
    "oldPrice": 261.25,
    "discount": 5,
    "rating": 4.8,
    "reviews": 214,
    "image": "/products/kit_60144.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KITS NUDE BEACH 6PC EYE PENCIL PALETTE. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60144",
    "size": "Kit"
  },
  {
    "id": 60145,
    "name": "Kit Essenciais de Skincare e Maquiagem Clinique",
    "brand": "Clinique",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 333.2,
    "oldPrice": 350.74,
    "discount": 5,
    "rating": 4.9,
    "reviews": 215,
    "image": "/products/kit_60145.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Essenciais de Skincare e Maquiagem Clinique. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60145",
    "size": "Kit"
  },
  {
    "id": 60146,
    "name": "KIT DELINEADOR + M\xC1SCARA DE C\xCDLIOS MAC METAMORPHOSIS",
    "brand": "MAC",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 147.55,
    "oldPrice": 155.32,
    "discount": 5,
    "rating": 5,
    "reviews": 216,
    "image": "/products/kit_60146.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT DELINEADOR + M\xC1SCARA DE C\xCDLIOS MAC METAMORPHOSIS. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60146",
    "size": "Kit"
  },
  {
    "id": 60147,
    "name": "KIT BENEFIT GET ROLLIN",
    "brand": "Benefit",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 133.24,
    "oldPrice": 140.25,
    "discount": 5,
    "rating": 4.8,
    "reviews": 217,
    "image": "/products/kit_60147.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT BENEFIT GET ROLLIN. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60147",
    "size": "Kit"
  },
  {
    "id": 60148,
    "name": "KIT BENEFIT POP, LOCK & LASH IT",
    "brand": "Benefit",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 98.75,
    "oldPrice": 103.95,
    "discount": 5,
    "rating": 4.9,
    "reviews": 218,
    "image": "/products/kit_60148.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT BENEFIT POP, LOCK & LASH IT. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60148",
    "size": "Kit"
  },
  {
    "id": 60149,
    "name": "KIT BENEFIT BAD & BOUNCY",
    "brand": "Benefit",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 133.24,
    "oldPrice": 140.25,
    "discount": 5,
    "rating": 5,
    "reviews": 219,
    "image": "/products/kit_60149.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "KIT BENEFIT BAD & BOUNCY. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60149",
    "size": "Kit"
  },
  {
    "id": 60150,
    "name": "Kit Nutren Senior Baunilha 740g com 2 Unidades",
    "brand": "Nutren",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 159.59,
    "oldPrice": 167.99,
    "discount": 5,
    "rating": 4.8,
    "reviews": 220,
    "image": "/products/kit_60150.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Kit Nutren Senior Baunilha 740g com 2 Unidades. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60150",
    "size": "740g"
  },
  {
    "id": 60154,
    "name": "Nutren a-z Multi Vitam\xEDnico E Mineral 60 Caps. Gel \u2013 Nestl\xE9",
    "brand": "Nutren",
    "category": "Vitaminas e Suplementos",
    "subcategory": "Suplementos Alimentares",
    "price": 35.28,
    "oldPrice": 37.14,
    "discount": 5,
    "rating": 4.9,
    "reviews": 224,
    "image": "/products/kit_60154.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Nutren a-z Multi Vitam\xEDnico E Mineral 60 Caps. Gel \u2013 Nestl\xE9. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60154",
    "size": "60 Caps"
  },
  {
    "id": 60155,
    "name": "SOFT PINCH MINI LIP AND CHEEK SET",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 140.55,
    "oldPrice": 147.95,
    "discount": 5,
    "rating": 5,
    "reviews": 225,
    "image": "/products/kit_60155.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "SOFT PINCH MINI LIP AND CHEEK SET. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60155",
    "size": "Kit"
  },
  {
    "id": 60156,
    "name": "RAMADAN SETS PINK LINK 7.20G + 20.6ML",
    "brand": "Droga Raia",
    "category": "Beleza e Perfumaria",
    "subcategory": "Kits Especiais",
    "price": 196.98,
    "oldPrice": 207.35,
    "discount": 5,
    "rating": 4.8,
    "reviews": 226,
    "image": "/products/kit_60156.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "RAMADAN SETS PINK LINK 7.20G + 20.6ML. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60156",
    "size": "20G"
  },
  {
    "id": 60157,
    "name": "POREFESSIONAL PRIME E HOLD SET 52ML",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 149.96,
    "oldPrice": 157.85,
    "discount": 5,
    "rating": 4.9,
    "reviews": 227,
    "image": "/products/kit_60157.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "POREFESSIONAL PRIME E HOLD SET 52ML. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60157",
    "size": "52ML"
  },
  {
    "id": 60158,
    "name": "MAKEUP BAG MVP\u2019S 22ML + 1",
    "brand": "Droga Raia",
    "category": "Beleza",
    "subcategory": "Maquiagem",
    "price": 187.16,
    "oldPrice": 197.01,
    "discount": 5,
    "rating": 5,
    "reviews": 228,
    "image": "/products/kit_60158.jpg",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "MAKEUP BAG MVP\u2019S 22ML + 1. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60158",
    "size": "22ML"
  },
  {
    "id": 60159,
    "name": "Imecap Hair Cabelos e Unhas com 90 C\xE1psulas",
    "brand": "Imecap Hair",
    "category": "Cabelos",
    "subcategory": "Kits de Tratamento",
    "price": 33.61,
    "oldPrice": 35.38,
    "discount": 5,
    "rating": 4.8,
    "reviews": 229,
    "image": "/products/kit_60159.webp",
    "badges": [
      "Oferta",
      "Destaque"
    ],
    "description": "Imecap Hair Cabelos e Unhas com 90 C\xE1psulas. Produto aut\xEAntico de proced\xEAncia garantida. Ideal para cuidados completos e resultados profissionais com a garantia e pontualidade Droga Raia.",
    "bullets": [
      "F\xF3rmula de alta performance e proced\xEAncia original comprovada.",
      "Kit completo com excelente custo-benef\xEDcio.",
      "Entrega r\xE1pida e segura garantida pela Droga Raia."
    ],
    "productCode": "60159",
    "size": "Kit"
  }
];

// src/data/montaOffers.ts
var montaProducts = [
  // --- PRINCIPIA ---
  {
    id: 5054901,
    name: "S\xE9rum Facial Niacinamida 10% + Zinco PCA Principia",
    size: "30ml",
    brand: "Principia",
    category: "Dermocosm\xE9ticos",
    subcategory: "Cuidados com a Pele",
    oldPrice: 59.9,
    price: 54,
    discount: 10,
    rating: 4.9,
    reviews: 342,
    image: "/products/principia_serum.jpg",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Reduz a oleosidade e apar\xEAncia de poros dilatados.",
      "Melhora a textura e o vi\xE7o natural da pele.",
      "Uniformiza o tom e clareia manchas suaves.",
      "F\xF3rmula vegana, sem fragr\xE2ncia e livre de parabenos."
    ],
    description: "O S\xE9rum de Niacinamida 10% com Zinco PCA da Principia melhora a hidrata\xE7\xE3o, reduz manchas e controla o excesso de sebo cut\xE2neo.",
    howToUse: "Aplique 3 a 5 gotas na face limpa e seca pela manh\xE3 e \xE0 noite antes do hidratante.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  {
    id: 5054902,
    name: "Gel de Limpeza Facial Principia GL-01 \xC1cido Salic\xEDlico",
    size: "200ml",
    brand: "Principia",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial",
    oldPrice: 49.9,
    price: 44,
    discount: 12,
    rating: 4.8,
    reviews: 215,
    image: "/products/principia_gel.jpg",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Limpeza profunda antioleosidade sem ressecar.",
      "Cont\xE9m 2% de \xC1cido Salic\xEDlico e Glicerina.",
      "Desobstrui poros e reduz cravos e espinhas.",
      "Ideal para peles mistas, oleosas e com tend\xEAncia a acne."
    ],
    description: "O Gel de Limpeza GL-01 limpa suavemente enquanto atua diretamente no controle de oleosidade e na preven\xE7\xE3o de les\xF5es acneicas.",
    howToUse: "Aplique sobre a pele \xFAmida, massageie suavemente em movimentos circulares e enx\xE1gue com \xE1gua abundante.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  {
    id: 5054903,
    name: "Protetor Solar Facial Fluido FPS 60 Principia PS-01",
    size: "50ml",
    brand: "Principia",
    category: "Dermocosm\xE9ticos",
    subcategory: "Prote\xE7\xE3o Solar",
    oldPrice: 65,
    price: 59,
    discount: 9,
    rating: 4.9,
    reviews: 189,
    image: "/monta/principia_banner.png",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Ampla prote\xE7\xE3o UVA/UVB com FPS 60 e toque seco.",
      "Enriquecido com 5% de Niacinamida e Vitamina E.",
      "Prote\xE7\xE3o eficaz contra luz vis\xEDvel e luz azul.",
      "N\xE3o escorre nos olhos e resistente \xE0 \xE1gua."
    ],
    description: "Protetor solar fluido dermatol\xF3gico de r\xE1pida absor\xE7\xE3o, sem efeito esbranqui\xE7ado e com toque aveludado para o dia a dia.",
    howToUse: "Aplique abundantemente sobre a face e pesco\xE7o 15 minutos antes da exposi\xE7\xE3o solar.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  // --- CETAPHIL ---
  {
    id: 5250301,
    name: "Lo\xE7\xE3o Hidratante Cetaphil Pele Sens\xEDvel e Seca 473ml",
    size: "473ml",
    brand: "Cetaphil",
    category: "Dermocosm\xE9ticos",
    subcategory: "Hidratantes Corporais",
    oldPrice: 119.9,
    price: 99.9,
    discount: 17,
    rating: 4.9,
    reviews: 580,
    image: "/products/cetaphil_lotion.jpg",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Hidrata\xE7\xE3o profunda e cont\xEDnua por 48 horas.",
      "F\xF3rmula com Niacinamida, Pantenol e Glicerina hidratante.",
      "Restaura a barreira cut\xE2nea em apenas 1 semana de uso.",
      "Sem fragr\xE2ncia, hipoalerg\xEAnico e n\xE3o obstrui os poros."
    ],
    description: "A Lo\xE7\xE3o Hidratante Cetaphil \xE9 dermatologicamente desenvolvida para hidratar e restaurar peles normais, secas e sens\xEDveis com m\xE1xima toler\xE2ncia.",
    howToUse: "Aplicar diariamente ap\xF3s o banho ou sempre que sentir a pele ressecada.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  {
    id: 5250302,
    name: "Creme Hidratante Corporal Cetaphil Pote 453g",
    size: "453g",
    brand: "Cetaphil",
    category: "Dermocosm\xE9ticos",
    subcategory: "Hidratantes Corporais",
    oldPrice: 129.9,
    price: 109.9,
    discount: 15,
    rating: 5,
    reviews: 420,
    image: "/products/cetaphil_pote.jpg",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Ideal para peles extremamente secas e \xE1reas \xE1speras (joelhos, cotovelos).",
      "Textura rica e cremosa com \xF3leo de am\xEAndoas doces.",
      "Bloqueia a perda de umidade e acalma o ressecamento intenso.",
      "Aprovado e recomendado por dermatologistas no mundo inteiro."
    ],
    description: "O Creme Hidratante Cetaphil entrega nutri\xE7\xE3o intensa e reconfortante para peles muito secas ou sensibilizadas.",
    howToUse: "Espalhe suavemente sobre o corpo limpo, massageando at\xE9 completa absor\xE7\xE3o.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  {
    id: 5250303,
    name: "Gel de Limpeza Suave Cetaphil Facial 300ml",
    size: "300ml",
    brand: "Cetaphil",
    category: "Dermocosm\xE9ticos",
    subcategory: "Limpeza Facial",
    oldPrice: 84.9,
    price: 69.9,
    discount: 18,
    rating: 4.8,
    reviews: 265,
    image: "/monta/cetaphil_banner.png",
    badges: ["Monta que Desconta", "2+ ganhe 20%"],
    bullets: [
      "Limpeza di\xE1ria ultra-suave com pH balanceado.",
      "Remove impurezas, polui\xE7\xE3o e maquiagem leve.",
      "N\xE3o repuxa nem agride a barreira de hidrata\xE7\xE3o natural.",
      "Recomendado para peles normais a oleosas e sens\xEDveis."
    ],
    description: "O Gel de Limpeza Suave Cetaphil limpa sem agredir, deixando a pele revigorada, macia e equilibrada.",
    howToUse: "Aplique sobre o rosto \xFAmido com \xE1gua, massageie levemente e enx\xE1gue.",
    tierText: "a partir de 2 itens: 20% OFF"
  },
  // --- PURAVIDA ---
  {
    id: 9870101,
    name: "Whey Protein Isolado Grassfed Puravida Vanilla Bean 900g",
    size: "900g",
    brand: "Puravida",
    category: "Nutri\xE7\xE3o e Suplementos",
    subcategory: "Prote\xEDnas e Whey",
    oldPrice: 259.9,
    price: 229.9,
    discount: 12,
    rating: 4.9,
    reviews: 310,
    image: "/products/puravida_combo.jpg",
    badges: ["Monta que Desconta", "3+ ganhe 30%"],
    bullets: [
      "Prote\xEDna isolada do soro de leite proveniente de gado alimentado a pasto (Grassfed).",
      "22g de pura prote\xEDna de alto valor biol\xF3gico por por\xE7\xE3o.",
      "Ado\xE7ado naturalmente com st\xE9via pura e aroma natural de baunilha.",
      "Livre de aditivos sint\xE9ticos, sem gl\xFAten e de digest\xE3o leve."
    ],
    description: "O Whey Protein Grassfed da Puravida oferece pureza inigual\xE1vel e m\xE1xima biodisponibilidade para recupera\xE7\xE3o e s\xEDntese muscular.",
    howToUse: "Dilua 30g (1 medidor) em 200ml de \xE1gua ou sua bebida favorita ap\xF3s o treino ou entre refei\xE7\xF5es.",
    tierText: "a partir de 3 itens: 30% OFF"
  },
  {
    id: 9870102,
    name: "Bio Trimag Complexo de Magn\xE9sio Puravida 60 C\xE1psulas",
    size: "60 C\xE1psulas",
    brand: "Puravida",
    category: "Nutri\xE7\xE3o e Suplementos",
    subcategory: "Vitaminas e Minerais",
    oldPrice: 115,
    price: 99.9,
    discount: 13,
    rating: 4.9,
    reviews: 480,
    image: "/products/puravida_biotrimag.jpg",
    badges: ["Monta que Desconta", "3+ ganhe 30%"],
    bullets: [
      "Combina\xE7\xE3o de 3 formas nobres de Magn\xE9sio: Malato, Bisglicinato e Taurato.",
      "Alta absor\xE7\xE3o celular sem desconforto digestivo.",
      "Auxilia no relaxamento muscular, s\xEDntese de energia e clareza mental.",
      "C\xE1psulas veganas puras, sem corantes e sem conservantes artificiais."
    ],
    description: "O Bio Trimag re\xFAne tr\xEAs mol\xE9culas de magn\xE9sio quelato biodispon\xEDveis para suprir necessidades neuromusculares e celulares di\xE1rias.",
    howToUse: "Ingerir 2 c\xE1psulas ao dia, preferencialmente junto \xE0s refei\xE7\xF5es ou antes de dormir.",
    tierText: "a partir de 3 itens: 30% OFF"
  },
  {
    id: 9870103,
    name: "Blue Calm Puravida Bebida Noturna Relaxante 150g",
    size: "150g",
    brand: "Puravida",
    category: "Nutri\xE7\xE3o e Suplementos",
    subcategory: "Bem-Estar e Sono",
    oldPrice: 99.9,
    price: 89.9,
    discount: 10,
    rating: 4.8,
    reviews: 295,
    image: "/monta/puravida_banner.png",
    badges: ["Monta que Desconta", "3+ ganhe 30%"],
    bullets: [
      "Bebida relaxante \xE0 base de Spirulina Azul, L-Triptofano, Magn\xE9sio e Camomila.",
      "Auxilia na indu\xE7\xE3o do sono reparador e no al\xEDvio das tens\xF5es di\xE1rias.",
      "Sabor delicioso e natural de lim\xE3o suave.",
      "Sem a\xE7\xFAcar, sem aditivos qu\xEDmicos e 100% \xE0 base de plantas."
    ],
    description: "Blue Calm \xE9 a f\xF3rmula inteligente da Puravida para acalmar a mente agitada e preparar o corpo para uma noite de sono profundo.",
    howToUse: "Misture 1 colher-medida em 150ml de \xE1gua fria ou quente 30 a 60 minutos antes de dormir.",
    tierText: "a partir de 3 itens: 30% OFF"
  }
];

// scripts/get_all_products.ts
var allItems = [];
for (const key of Object.keys(products_exports)) {
  const val = products_exports[key];
  if (Array.isArray(val)) {
    for (const item of val) {
      if (item && typeof item === "object" && "id" in item && "name" in item && "price" in item) {
        allItems.push(item);
      }
    }
  } else if (val && typeof val === "object" && "id" in val && "name" in val && "price" in val) {
    allItems.push(val);
  }
}
if (Array.isArray(todosProdutosExpandidos)) {
  for (const item of todosProdutosExpandidos) {
    if (item && item.id) allItems.push(item);
  }
}
if (Array.isArray(novosProdutosCatalogo)) {
  for (const item of novosProdutosCatalogo) {
    if (item && item.id) allItems.push(item);
  }
}
if (Array.isArray(ultraBrasilProducts)) {
  for (const item of ultraBrasilProducts) {
    if (item && item.id) allItems.push(item);
  }
}
if (Array.isArray(novosKitsCarvalhoUltra)) {
  for (const item of novosKitsCarvalhoUltra) {
    if (item && item.id) allItems.push(item);
  }
}
if (Array.isArray(montaProducts)) {
  for (const item of montaProducts) {
    if (item && item.id) allItems.push(item);
  }
}
function isRemedio(p) {
  if (!p) return false;
  const cat = (p.category || "").toLowerCase().trim();
  const subcat = (p.subcategory || "").toLowerCase().trim();
  const name = (p.name || "").toLowerCase().trim();
  if (cat === "medicamentos" || cat === "rem\xE9dios" || cat === "remedios" || cat.includes("medicamento")) {
    return true;
  }
  const medSubcats = [
    "analg\xE9sicos",
    "analgesicos",
    "anti-inflamat\xF3rios",
    "anti-inflamatorios",
    "antibi\xF3ticos",
    "antibioticos",
    "antit\xE9rmicos",
    "antitermicos",
    "gastrointestinais",
    "antigripais",
    "antial\xE9rgicos",
    "antialergicos",
    "relaxantes musculares",
    "antif\xFAngicos",
    "antifungicos",
    "press\xE3o alta",
    "diabetes e controle",
    "dor e febre",
    "dores musculares",
    "dores abdominais",
    "gen\xE9ricos",
    "genericos",
    "cardiovascular",
    "gripes e resfriados",
    "oftalmol\xF3gicos",
    "primeiros socorros"
  ];
  if (medSubcats.some((s) => subcat.includes(s))) {
    return true;
  }
  const safeCats = [
    "mam\xE3e",
    "mamae",
    "beb\xEA",
    "bebe",
    "dermo",
    "cabelo",
    "higiene",
    "beleza",
    "maquiag",
    "vitamina",
    "suplemento",
    "vida saud\xE1vel",
    "pet",
    "homem"
  ];
  if (safeCats.some((sc) => cat.includes(sc))) {
    const isDrug = name.includes("dipirona") || name.includes("paracetamol 750mg") || name.includes("ibuprofeno 600mg");
    if (isDrug) return true;
    return false;
  }
  if (p.activeIngredient) {
    return true;
  }
  return false;
}
var map = /* @__PURE__ */ new Map();
for (const p of allItems) {
  if (p && p.id && !map.has(p.id)) {
    if (!isRemedio(p)) {
      map.set(p.id, p);
    }
  }
}
var uniqueProducts = Array.from(map.values());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  uniqueProducts
});
