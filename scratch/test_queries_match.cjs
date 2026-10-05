const fs = require('fs');

// Let's run a test script by loading the actual compiled or source files
const trendingCode = fs.readFileSync('src/data/trendingProducts.ts', 'utf8');
const productsCode = fs.readFileSync('src/data/products.ts', 'utf8');

// Let's inspect which curatedQueries actually MATCH a product in allProducts
const queries = [
  // Mais comprados
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
  'cialis diário 5mg',
  // Black do dia
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
  'centrum de a a zinco',
  // Destaques semana
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
  'addera d3',
  // Marcas favoritas
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

// Extract all products from products.ts
const pRegex = /{\s*id:\s*(\d+)[\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
let m;
const allP = [];
while ((m = pRegex.exec(productsCode)) !== null) {
  allP.push({ id: m[1], name: m[2], image: m[3] });
}

console.log('Total extracted products:', allP.length);

for (const q of queries) {
  const match = allP.find(p => p.name.toLowerCase().includes(q.toLowerCase()));
  if (match) {
    console.log(`FOUND: "${q}" => [${match.id}] ${match.name} | IMG: ${match.image}`);
  } else {
    console.log(`NOT FOUND: "${q}"`);
  }
}
