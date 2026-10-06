import fs from 'fs';
import { allProducts } from '../src/data/allProducts';
import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { Product } from '../src/data/products';

console.log('--- DETAILED BRAND & LINE ANALYSIS ---');

// Let's inspect all products by brand/family
interface DuplicateCluster {
  canonicalName: string;
  brand: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    size: string;
    image: string;
  }>;
}

const clusters: DuplicateCluster[] = [];

// Helper to normalize strings for comparison
function clean(s: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\b1000\s*ml\b/g, '1l')
    .replace(/\b1000ml\b/g, '1l')
    .replace(/\b1\s*l\b/g, '1l')
    .replace(/\b1\s*litro\b/g, '1l')
    .replace(/\bprofessionals\b/g, '')
    .replace(/\bprofessional\b/g, '')
    .replace(/\bprofessionnel\b/g, '')
    .replace(/\bparis\b/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. Group by major brand product lines
const lines = [
  { brand: 'Wella', line: 'Invigo Nutri Enrich 1L', match: (n: string) => n.includes('wella') && n.includes('invigo') && (n.includes('nutri') || n.includes('enrich')) && (n.includes('1l') || n.includes('1000ml') || n.includes('1 litro')) },
  { brand: 'Wella', line: 'Invigo Nutri Enrich 250ml', match: (n: string) => n.includes('wella') && n.includes('invigo') && (n.includes('nutri') || n.includes('enrich')) && (n.includes('250ml') || n.includes('150ml') || n.includes('mascara') || n.includes('shampoo')) && !(n.includes('1l') || n.includes('1000ml')) },
  { brand: 'Wella', line: 'Fusion Double Salon / Shampoo', match: (n: string) => n.includes('wella') && n.includes('fusion') },
  { brand: 'Wella', line: 'Oil Reflections', match: (n: string) => n.includes('wella') && n.includes('oil reflections') },
  { brand: 'Wella', line: 'Color Motion', match: (n: string) => n.includes('wella') && n.includes('color motion') },
  
  { brand: "L'Oréal", line: 'Absolut Repair 1.5L / 1500ml', match: (n: string) => n.includes('absolut') && n.includes('repair') && (n.includes('1500') || n.includes('1 5') || n.includes('1,5')) },
  { brand: "L'Oréal", line: 'Absolut Repair Molecular', match: (n: string) => n.includes('absolut') && n.includes('repair') && n.includes('molecular') },
  { brand: "L'Oréal", line: 'Absolut Repair Standard / Trio / Dupla', match: (n: string) => n.includes('absolut') && n.includes('repair') && !(n.includes('1500') || n.includes('molecular')) },
  { brand: "L'Oréal", line: 'Metal Detox', match: (n: string) => n.includes('metal detox') },
  { brand: "L'Oréal", line: 'Pro Longer', match: (n: string) => n.includes('pro longer') },
  { brand: "L'Oréal", line: 'Inforcer', match: (n: string) => n.includes('inforcer') },
  { brand: "L'Oréal", line: 'Vitamino Color', match: (n: string) => n.includes('vitamino color') },
  
  { brand: 'Truss', line: 'Miracle', match: (n: string) => n.includes('truss') && n.includes('miracle') },
  { brand: 'Truss', line: 'Infusion / Uso Obrigatório', match: (n: string) => n.includes('truss') && (n.includes('infusion') || n.includes('obrigatorio')) },
  
  { brand: 'Braé', line: 'Stages / Revival / Soul Color', match: (n: string) => n.includes('brae') },
  
  { brand: 'Kérastase', line: 'Nutritive / Genesis / Resistance / Chronologiste', match: (n: string) => n.includes('kerastase') },
  
  { brand: 'Eudora Siàge', line: 'Hair Plastia', match: (n: string) => n.includes('siage') && n.includes('plastia') },
  { brand: 'Eudora Siàge', line: 'DermoHair', match: (n: string) => n.includes('siage') && n.includes('dermohair') },
  { brand: 'Eudora Siàge', line: 'Cauterização dos Fios / Nutri Rose / Acelera o Crescimento', match: (n: string) => n.includes('siage') && !(n.includes('plastia') || n.includes('dermohair')) },
  
  { brand: 'Dove', line: 'Bond Intense Repair', match: (n: string) => n.includes('dove') && n.includes('bond') },
  { brand: 'Pantene', line: 'Bambu / Colágeno / Miracles', match: (n: string) => n.includes('pantene') && (n.includes('bambu') || n.includes('colageno') || n.includes('miracles')) },
  
  { brand: 'Imecap Hair', line: 'Cabelos e Unhas', match: (n: string) => n.includes('imecap') },
  { brand: 'Lavitan', line: 'Cabelos e Unhas / Vitaminas', match: (n: string) => n.includes('lavitan') },
  
  { brand: 'CeraVe', line: 'Loção Hidratante Corporal', match: (n: string) => n.includes('cerave') && n.includes('locao') },
  { brand: 'CeraVe', line: 'Gel de Limpeza Facial', match: (n: string) => n.includes('cerave') && (n.includes('gel de limpeza') || n.includes('espuma')) },
  { brand: 'CeraVe', line: 'Creme Hidratante Pote', match: (n: string) => n.includes('cerave') && n.includes('creme') && !n.includes('locao') },
  
  { brand: 'Cetaphil', line: 'Loção / Sabonete / Creme Hidratante', match: (n: string) => n.includes('cetaphil') },
  
  { brand: 'La Roche-Posay', line: 'Cicaplast Baume B5+', match: (n: string) => n.includes('cicaplast') },
  { brand: 'La Roche-Posay', line: 'Effaclar', match: (n: string) => n.includes('effaclar') },
  { brand: 'La Roche-Posay', line: 'Anthelios', match: (n: string) => n.includes('anthelios') },
  
  { brand: 'Eucerin', line: 'Anti-Pigment Dual Sérum', match: (n: string) => n.includes('eucerin') && n.includes('anti pigment') },
  { brand: 'Eucerin', line: 'Oil Control', match: (n: string) => n.includes('eucerin') && n.includes('oil control') },
  
  { brand: 'SkinCeuticals', line: 'P-tiox / C E Ferulic / Silymarin / Discoloration', match: (n: string) => n.includes('skinceuticals') },
  
  { brand: 'Avène', line: 'Água Termal', match: (n: string) => n.includes('avene') && n.includes('agua termal') },
  { brand: 'Bioderma', line: 'Sébium Gel Moussant', match: (n: string) => n.includes('bioderma') && n.includes('sebium') },
  { brand: 'Darrow', line: 'Actine Gel de Limpeza', match: (n: string) => n.includes('actine') },
  
  { brand: 'Bepantol', line: 'Baby Pomada de Assaduras', match: (n: string) => n.includes('bepantol') && n.includes('baby') },
  { brand: 'Bepantol', line: 'Derma Creme / Spray', match: (n: string) => n.includes('bepantol') && n.includes('derma') },
  { brand: 'Desitin', line: 'Roxa Maximum Strength', match: (n: string) => n.includes('desitin') },
  { brand: 'Hipoglós', line: 'Amêndoas / Tradicional', match: (n: string) => n.includes('hipoglos') },
  
  { brand: 'Pampers', line: 'Pampers Confort Sec P', match: (n: string) => n.includes('pampers') && n.includes('confort sec') && /\bp\b/.test(n) },
  { brand: 'Pampers', line: 'Pampers Confort Sec M', match: (n: string) => n.includes('pampers') && n.includes('confort sec') && /\bm\b/.test(n) },
  { brand: 'Pampers', line: 'Pampers Confort Sec G', match: (n: string) => n.includes('pampers') && n.includes('confort sec') && /\bg\b/.test(n) },
  { brand: 'Pampers', line: 'Pampers Pants Ajuste Total P/M/G', match: (n: string) => n.includes('pampers') && n.includes('pants') },
  
  { brand: 'Huggies', line: 'Lenço Umedecido', match: (n: string) => n.includes('huggies') && (n.includes('lenco') || n.includes('lencos')) },
  
  { brand: 'Nestlé', line: 'Ninho Fases 1+', match: (n: string) => n.includes('ninho') && n.includes('fases') },
  { brand: 'Nestlé', line: 'Mucilon Milho / Arroz', match: (n: string) => n.includes('mucilon') },
  { brand: 'Aptamil', line: 'Profutura 1', match: (n: string) => n.includes('aptamil') && n.includes('profutura') },
  { brand: 'NAN', line: 'NAN Supreme 1', match: (n: string) => n.includes('nan') && n.includes('supreme') },
  
  { brand: 'Soldiers Nutrition', line: 'Creatina 100% Pura', match: (n: string) => n.includes('soldiers') && n.includes('creatina') },
  { brand: 'Max Titanium', line: 'Creatina / Whey', match: (n: string) => n.includes('max titanium') },
  { brand: 'Dux Nutrition', line: 'Creatina Creapure / Whey', match: (n: string) => n.includes('dux') },
  
  { brand: 'Novalgina', line: 'Dipirona 1g Comprimidos', match: (n: string) => n.includes('novalgina') },
  { brand: 'Dorflex', line: '36 Comprimidos', match: (n: string) => n.includes('dorflex') },
  { brand: 'Neosoro', line: 'Solução Nasal 30ml', match: (n: string) => n.includes('neosoro') },
  { brand: 'Torsilax', line: '30 Comprimidos', match: (n: string) => n.includes('torsilax') },
  { brand: 'Glifage XR', line: '500mg 30 Comprimidos', match: (n: string) => n.includes('glifage') },
  { brand: 'Losartana Potássica', line: '50mg 30 Comprimidos', match: (n: string) => n.includes('losartana') },
  { brand: 'Cimegripe', line: '20 Cápsulas', match: (n: string) => n.includes('cimegripe') },
  { brand: 'Benegrip', line: '20 Comprimidos', match: (n: string) => n.includes('benegrip') },
  
  { brand: 'Too Faced', line: 'Chocolate Soleil Bronzer', match: (n: string) => n.includes('too faced') && n.includes('chocolate soleil') },
  { brand: 'Sephora Collection', line: 'Best Skin Ever Base / Corretivo', match: (n: string) => n.includes('sephora') && n.includes('best skin ever') },
  { brand: 'Laura Mercier', line: 'Tinted Moisturizer Blush', match: (n: string) => n.includes('laura mercier') && n.includes('blush') },
  { brand: 'Rare Beauty', line: 'Soft Pinch Blush Líquido', match: (n: string) => n.includes('rare beauty') && n.includes('soft pinch') },
  { brand: 'Fenty Beauty', line: 'Gloss Bomb / Contorno Match Stix', match: (n: string) => n.includes('fenty') },
  { brand: 'Dior', line: 'Backstage Rosy Glow / Lip Glow Oil', match: (n: string) => n.includes('dior') && (n.includes('rosy glow') || n.includes('lip glow')) },
  
  { brand: 'Xerjoff', line: 'Erba Pura 100ml', match: (n: string) => n.includes('erba pura') },
];

for (const lineDef of lines) {
  const matches = allProducts.filter(p => lineDef.match(clean(p.name)));
  if (matches.length > 1) {
    clusters.push({
      canonicalName: `${lineDef.brand} - ${lineDef.line}`,
      brand: lineDef.brand,
      items: matches.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price,
        oldPrice: p.oldPrice,
        size: p.size,
        image: p.image,
      }))
    });
  }
}

fs.writeFileSync('scripts/clusters_report.json', JSON.stringify(clusters, null, 2), 'utf-8');

console.log(`Encontrados ${clusters.length} clusters de produtos que representam o mesmo produto / linha com nomes e preços diferentes:`);
clusters.forEach((c, i) => {
  console.log(`\n========================================`);
  console.log(`CLUSTER #${i + 1}: ${c.canonicalName} (${c.items.length} itens concorrentes)`);
  console.log(`========================================`);
  c.items.forEach(item => {
    console.log(`  [ID ${item.id}] "${item.name}"`);
    console.log(`    Preço: R$ ${item.price.toFixed(2)} | Imagem: ${item.image}`);
  });
});
