import { allProducts } from '../src/data/allProducts';
import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { Product } from '../src/data/products';
import fs from 'fs';

// Find any pairs inside the entire allProducts list that have high token overlap
interface DuplicatePair {
  pA: Product;
  pB: Product;
  score: number;
  reason: string;
}

function cleanTokens(name: string): string[] {
  return (name || '')
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
    .replace(/\bprodutos?\b/g, '')
    .replace(/\bkit\b/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2 && !['para', 'com', 'dos', 'das'].includes(t));
}

const pairs: DuplicatePair[] = [];

for (let i = 0; i < allProducts.length; i++) {
  const pA = allProducts[i];
  const tA = cleanTokens(pA.name);
  const setA = new Set(tA);

  for (let j = i + 1; j < allProducts.length; j++) {
    const pB = allProducts[j];
    const tB = cleanTokens(pB.name);
    const setB = new Set(tB);

    let common = 0;
    for (const t of setA) {
      if (setB.has(t)) common++;
    }

    const minSize = Math.min(setA.size, setB.size);
    const maxSize = Math.max(setA.size, setB.size);
    const overlapMin = common / minSize;
    const overlapMax = common / maxSize;

    // Brand matching
    const bA = (pA.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const bB = (pB.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const sameBrand = bA.includes(bB) || bB.includes(bA) || bA === bB;

    if (sameBrand && overlapMin >= 0.75 && common >= 3) {
      pairs.push({
        pA,
        pB,
        score: overlapMin,
        reason: `${common} palavras em comum (${Math.round(overlapMin * 100)}% de sobreposição)`,
      });
    }
  }
}

// Cluster pairs
const clusterMap = new Map<number, Set<number>>();
for (const pair of pairs) {
  if (!clusterMap.has(pair.pA.id)) clusterMap.set(pair.pA.id, new Set([pair.pA.id]));
  if (!clusterMap.has(pair.pB.id)) clusterMap.set(pair.pB.id, new Set([pair.pB.id]));
  const merged = new Set([...clusterMap.get(pair.pA.id)!, ...clusterMap.get(pair.pB.id)!]);
  for (const id of merged) {
    clusterMap.set(id, merged);
  }
}

const seenSets = new Set<string>();
const clusters: Product[][] = [];

for (const [, set] of clusterMap.entries()) {
  const key = Array.from(set).sort((a, b) => a - b).join(',');
  if (!seenSets.has(key)) {
    seenSets.add(key);
    clusters.push(Array.from(set).map(id => allProducts.find(p => p.id === id)!));
  }
}

console.log(`ENCONTRADOS ${clusters.length} GRUPOS DE PRODUTOS EQUIVALENTES NO CATÁLOGO TOTAL:`);

const formattedOutput = clusters.map((c, idx) => ({
  clusterId: idx + 1,
  totalItems: c.length,
  items: c.map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    oldPrice: p.oldPrice,
    image: p.image,
    reviews: p.reviews,
  }))
}));

fs.writeFileSync('scripts/comprehensive_duplicate_clusters.json', JSON.stringify(formattedOutput, null, 2), 'utf-8');

formattedOutput.forEach(c => {
  console.log(`\n===============================================================`);
  console.log(`GRUPO #${c.clusterId} (${c.totalItems} variações com preços e títulos diferentes)`);
  console.log(`===============================================================`);
  c.items.forEach(p => {
    console.log(`  [ID: ${p.id}] "${p.name}"`);
    console.log(`    Preço: R$ ${p.price.toFixed(2)} (De: R$ ${(p.oldPrice || p.price).toFixed(2)}) | Imagem: ${p.image}`);
  });
});
