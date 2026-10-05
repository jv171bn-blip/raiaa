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
var novosProdutosCatalogo = [];

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
    "retinol"
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
  return scored;
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
  return uniqueRecs;
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
  const seenIds = /* @__PURE__ */ new Set();
  const seenNormalizedKeys = /* @__PURE__ */ new Set();
  const result = [];
  for (const p of products) {
    if (!p || !p.id) continue;
    if (seenIds.has(p.id)) continue;
    const normKey = (p.name || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\btamanho\b/g, "").replace(/\bdescartavel\b/g, "").replace(/\bcom\b/g, "").replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim();
    if (normKey && seenNormalizedKeys.has(normKey)) {
      continue;
    }
    seenIds.add(p.id);
    if (normKey) seenNormalizedKeys.add(normKey);
    result.push(p);
  }
  return result;
};

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
var map = /* @__PURE__ */ new Map();
for (const p of allItems) {
  if (!map.has(p.id)) {
    map.set(p.id, p);
  }
}
var uniqueProducts = Array.from(map.values());
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  uniqueProducts
});
