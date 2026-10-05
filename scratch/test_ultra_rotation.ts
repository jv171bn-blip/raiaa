import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { isAllowedOnHomepage, shuffleArray } from '../src/data/trendingProducts';

const allowed = ultraBrasilProducts.filter(isAllowedOnHomepage);

// Helper to pick items by category without duplicates across a section
function pickCategoryItems(pool: typeof allowed, categoryMatch: (c: string, n: string) => boolean, count: number, usedIds: Set<number>) {
  const matches = pool.filter(p => !usedIds.has(p.id) && categoryMatch((p.category || '').toLowerCase(), (p.name || '').toLowerCase()));
  const shuffled = shuffleArray(matches);
  const picked = shuffled.slice(0, count);
  picked.forEach(p => usedIds.add(p.id));
  return picked;
}

// 1. Mais Comprados (16 items)
const usedMais = new Set<number>();
const maisComprados = [
  ...pickCategoryItems(allowed, (c, n) => n.includes('whey') || n.includes('creatina'), 3, usedMais),
  ...pickCategoryItems(allowed, (c, n) => n.includes('fralda') || n.includes('bepantol'), 3, usedMais),
  ...pickCategoryItems(allowed, (c, n) => c.includes('dermo') || n.includes('micelar') || n.includes('hidratante'), 3, usedMais),
  ...pickCategoryItems(allowed, (c, n) => n.includes('gillette') || n.includes('oneblade') || n.includes('dental') || n.includes('desodorante'), 3, usedMais),
  ...pickCategoryItems(allowed, (c, n) => c.includes('maquiag') || n.includes('base') || n.includes('blush'), 4, usedMais),
];
// Fill if < 16
for (const p of shuffleArray(allowed)) {
  if (maisComprados.length >= 16) break;
  if (!usedMais.has(p.id)) {
    maisComprados.push(p);
    usedMais.add(p.id);
  }
}

console.log('Mais Comprados count:', maisComprados.length);
console.log('Sample Mais Comprados:');
maisComprados.forEach((p, i) => console.log(`  ${i + 1}. [${p.id}] ${p.name} - R$ ${p.price} (${p.image})`));

// 2. Black do Dia (14 items - discounted)
const discounted = allowed.filter(p => (p.discount && p.discount > 0) || (p.oldPrice && p.oldPrice > p.price));
const blackDoDia = shuffleArray(discounted).slice(0, 14);
console.log('\nBlack do Dia count:', blackDoDia.length);
console.log('Sample Black do Dia:');
blackDoDia.forEach((p, i) => console.log(`  ${i + 1}. [${p.id}] -${p.discount}% ${p.name} - R$ ${p.price} (de R$ ${p.oldPrice})`));
