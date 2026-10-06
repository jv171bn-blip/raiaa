import fs from 'fs';

// 1. Process novosKitsCarvalhoUltra.ts
const kitsPath = 'src/data/novosKitsCarvalhoUltra.ts';
let kitsContent = fs.readFileSync(kitsPath, 'utf8');

const kitIdsToRemove = [
  60020, // Wella 1L R$ 185.68 (kept 60051 at R$ 94.98)
  60125, // Wella 1L R$ 180.49 (kept 60051 at R$ 94.98)
  60030, // Dove Bond R$ 28.49 (kept 60004 at R$ 17.91)
  60034, // Siage Plastia R$ 82.64 (kept 60037 at R$ 20.41)
  60039, // Dolce Pet R$ 154.87 (kept 60011 at R$ 154.87)
  60045, // Siage DermoHair R$ 56.75 (kept 60014 at R$ 39.90)
  60080, // Brae Divine R$ 47.34 (kept 60001 at R$ 40.70)
  60105, // Kerastase Genesis Duo R$ 221.93 (kept 60112 at R$ 210.40)
  60111, // Kerastase Genesis Trio R$ 381.83 (kept 60114 at R$ 381.62)
  60033, // Elseve Reparação Total 5 R$ 19.82 (kept 60056 at R$ 17.05)
  60126, // Imecap Hair R$ 75.14 (kept 60159 at R$ 33.61)
  60024, // Goot Wood R$ 79.70 (kept 60043 at R$ 48.35)
  60017, // Goot Wood R$ 83.50 (kept 60043 at R$ 48.35)
  60104, // Sucupira 6un R$ 72.11 (kept 60108 at R$ 25.16)
];

console.log('Original kits size:', kitsContent.length);

// Also update 60051 title to full title
kitsContent = kitsContent.replace(
  '"name": "Kit Wella Professionals Invigo Nutri-enrich – Shampoo 1l (2 Produtos)",',
  '"name": "Kit Wella Professionals Invigo Nutri Enrich – Shampoo 1000ml + Condicionador 1000ml",'
);
kitsContent = kitsContent.replace(
  '"description": "Kit Wella Professionals Invigo Nutri-enrich – Shampoo 1l (2 Produtos).',
  '"description": "Kit Wella Professionals Invigo Nutri Enrich – Shampoo 1000ml + Condicionador 1000ml.'
);

// Remove kit items by ID
for (const id of kitIdsToRemove) {
  // Regex to match the object with this id
  const regex = new RegExp(`\\s*\\{[\\s\\r\\n]*"id":\\s*${id},[\\s\\S]*?\\}(?:,)?`, 'g');
  kitsContent = kitsContent.replace(regex, '');
}

// Clean up trailing commas before closing bracket ]
kitsContent = kitsContent.replace(/,(\s*\];?\s*)$/, '$1');
fs.writeFileSync(kitsPath, kitsContent, 'utf8');
console.log('Updated novosKitsCarvalhoUltra.ts successfully!');

// 2. Process ultraBrasilProducts.ts
const ultraPath = 'src/data/ultraBrasilProducts.ts';
let ultraContent = fs.readFileSync(ultraPath, 'utf8');

const ultraIdsToRemove = [
  50110, // CeraVe Loção 473ml (kept 1305 at R$ 89.90)
  50192, // Bepantol Derma R$ 45.58 (kept 50191 at R$ 35.99)
  50271, // Babysec G R$ 47.94 (kept 50270 at R$ 47.61)
  50099, // Too Faced R$ 175.45 (kept 50096 at R$ 162.80)
  50251, // Eximia Fortalize R$ 198.29 (kept 50247 at R$ 76.44)
  50149, // Sephora Corretivo Micro R$ 63.25 (kept 50146 at R$ 63.25)
];

for (const id of ultraIdsToRemove) {
  const regex = new RegExp(`\\s*\\{[\\s\\r\\n]*"id":\\s*${id},[\\s\\S]*?\\}(?:,)?`, 'g');
  ultraContent = ultraContent.replace(regex, '');
}
ultraContent = ultraContent.replace(/,(\s*\];?\s*)$/, '$1');
fs.writeFileSync(ultraPath, ultraContent, 'utf8');
console.log('Updated ultraBrasilProducts.ts successfully!');
