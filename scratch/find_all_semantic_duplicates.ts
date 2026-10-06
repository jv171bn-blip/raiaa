import { allProducts } from '../src/data/allProducts';
import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import * as productsModule from '../src/data/products';

// Collect all unique products across all sources
const allProductsMap = new Map<number, any>();

function addProducts(arr: any[]) {
  if (!Array.isArray(arr)) return;
  for (const p of arr) {
    if (p && p.id && p.name && !allProductsMap.has(p.id)) {
      allProductsMap.set(p.id, p);
    }
  }
}

addProducts(allProducts);
addProducts(novosKitsCarvalhoUltra);
addProducts(ultraBrasilProducts);

for (const [key, val] of Object.entries(productsModule)) {
  if (Array.isArray(val)) {
    addProducts(val);
  } else if (val && (val as any).id) {
    addProducts([val]);
  }
}

const products = Array.from(allProductsMap.values());
console.log(`Total unique SKUs analyzed: ${products.length}`);

// Function to normalize product name for comparison
function cleanTokens(name: string): string[] {
  let s = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // normalize volume/units: 1l -> 1000ml, 1.5l -> 1500ml, etc.
    .replace(/\b1\s*l\b/g, '1000ml')
    .replace(/\b1l\b/g, '1000ml')
    .replace(/\b1,5\s*l\b/g, '1500ml')
    .replace(/\b2\s*l\b/g, '2000ml')
    .replace(/\b2l\b/g, '2000ml')
    .replace(/\b(\d+)\s*(ml|g|kg|caps|capsulas|un|unidades|comprimidos|tabletes)\b/g, '$1$2')
    // common fillers
    .replace(/\b(kit|de|do|da|dos|das|para|com|em|e|ou|o|a|os|as|por|sem|un|unidades|produtos|produto)\b/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return s.split(' ').filter(w => w.length > 1);
}

// Check pairs
const clusters: any[][] = [];
const visited = new Set<number>();

for (let i = 0; i < products.length; i++) {
  const p1 = products[i];
  if (visited.has(p1.id)) continue;

  const group = [p1];
  const t1 = cleanTokens(p1.name);
  const s1 = new Set(t1);

  for (let j = i + 1; j < products.length; j++) {
    const p2 = products[j];
    if (visited.has(p2.id)) continue;

    const t2 = cleanTokens(p2.name);
    const s2 = new Set(t2);

    // Calculate Jaccard similarity & subset containment
    const intersection = t1.filter(x => s2.has(x));
    const union = new Set([...t1, ...t2]);
    const jaccard = intersection.length / union.size;

    // Check overlap ratio relative to the shorter text
    const minLen = Math.min(t1.length, t2.length);
    const overlapRatio = intersection.length / minLen;

    // Check volume/size tokens if present (e.g. 1000ml, 250ml, 473ml, 100ml, 300g, etc.)
    const sizeTokens1 = t1.filter(t => /\d+(ml|g|kg|caps)/.test(t));
    const sizeTokens2 = t2.filter(t => /\d+(ml|g|kg|caps)/.test(t));

    const sameSizes = (sizeTokens1.length === 0 && sizeTokens2.length === 0) ||
      (sizeTokens1.length > 0 && sizeTokens2.length > 0 && sizeTokens1.some(s => sizeTokens2.includes(s)));

    // Strict criteria for potential duplicate
    let isCandidate = false;

    // If both have size tokens and they differ, they are different sizes! (e.g., 250ml vs 1000ml)
    const conflictingSizes = sizeTokens1.length > 0 && sizeTokens2.length > 0 &&
      !sizeTokens1.some(s => sizeTokens2.includes(s));

    if (!conflictingSizes) {
      if (jaccard >= 0.55 || (overlapRatio >= 0.75 && minLen >= 4)) {
        isCandidate = true;
      }
    }

    if (isCandidate) {
      group.push(p2);
    }
  }

  if (group.length > 1) {
    for (const g of group) visited.add(g.id);
    clusters.push(group);
  }
}

console.log(`\nFound ${clusters.length} potential duplicate clusters:\n`);

clusters.forEach((cluster, idx) => {
  console.log(`--- Cluster #${idx + 1} (${cluster.length} items) ---`);
  cluster.sort((a, b) => a.price - b.price);
  cluster.forEach(p => {
    console.log(`  [ID: ${p.id}] R$ ${p.price.toFixed(2)} | "${p.name}"`);
  });
});
