import { allProducts } from '../src/data/allProducts';
import { Product } from '../src/data/products';
import fs from 'fs';

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
    .filter(t => t.length > 2 && !['para', 'com', 'dos', 'das', 'que', 'mais', 'menos'].includes(t));
}

// Map each product to canonical key or token set
interface CandidateGroup {
  clusterKey: string;
  products: Product[];
}

const groups: CandidateGroup[] = [];
const assigned = new Set<number>();

for (let i = 0; i < allProducts.length; i++) {
  const pA = allProducts[i];
  if (assigned.has(pA.id)) continue;

  const tA = cleanTokens(pA.name);
  const setA = new Set(tA);
  const currentCluster: Product[] = [pA];

  for (let j = i + 1; j < allProducts.length; j++) {
    const pB = allProducts[j];
    if (assigned.has(pB.id)) continue;

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

    const bA = (pA.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const bB = (pB.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const sameBrand = bA.includes(bB) || bB.includes(bA) || bA === bB;

    // Must be same brand, high overlap, and check size/unit equivalence
    if (sameBrand && overlapMin >= 0.75 && common >= 3) {
      // Avoid grouping different sizes like 250g vs 600g or 30comp vs 60comp
      const numA = (pA.name + ' ' + (pA.size || '')).match(/\b(\d+)\s*(?:g|kg|ml|l|caps|comp|un)\b/i);
      const numB = (pB.name + ' ' + (pB.size || '')).match(/\b(\d+)\s*(?:g|kg|ml|l|caps|comp|un)\b/i);

      let sizeConflict = false;
      if (numA && numB) {
        const valA = numA[0].toLowerCase().replace('1000ml', '1l').replace('1000g', '1kg').replace(/\s+/g, '');
        const valB = numB[0].toLowerCase().replace('1000ml', '1l').replace('1000g', '1kg').replace(/\s+/g, '');
        if (valA !== valB) {
          // If one is 250 and other is 600, that's not the same product
          const intA = parseInt(numA[1]);
          const intB = parseInt(numB[1]);
          if (intA !== intB && Math.abs(intA - intB) > 5 && !(intA === 1 && intB === 1000) && !(intA === 1000 && intB === 1)) {
            sizeConflict = true;
          }
        }
      }

      if (!sizeConflict) {
        currentCluster.push(pB);
      }
    }
  }

  if (currentCluster.length > 1) {
    currentCluster.forEach(p => assigned.add(p.id));
    groups.push({
      clusterKey: pA.name,
      products: currentCluster
    });
  }
}

console.log(`TOTAL DE GRUPOS IDENTIFICADOS: ${groups.length}`);

// For each group, find:
// 1. The product with the lowest price
// 2. The products to remove
const removalIds = new Set<number>();
const keepDetails: Array<{ keep: Product; removed: Product[] }> = [];

groups.forEach((g, idx) => {
  // Sort products by price ascending
  const sorted = [...g.products].sort((a, b) => a.price - b.price);
  const lowest = sorted[0];
  const others = sorted.slice(1);

  others.forEach(p => removalIds.add(p.id));
  keepDetails.push({ keep: lowest, removed: others });

  console.log(`\nGRUPO #${idx + 1}:`);
  console.log(`  MANTER (MENOR PREÇO): [${lowest.id}] "${lowest.name}" -> R$ ${lowest.price.toFixed(2)}`);
  others.forEach(p => {
    console.log(`  REMOVER (PREÇO MAIOR): [${p.id}] "${p.name}" -> R$ ${p.price.toFixed(2)}`);
  });
});

console.log(`\nTotal de IDs a remover da base de dados: ${removalIds.size}`);
fs.writeFileSync('scripts/removal_ids.json', JSON.stringify(Array.from(removalIds), null, 2), 'utf-8');
