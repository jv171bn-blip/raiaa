import fs from 'fs';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { isAllowedOnHomepage, shuffleArray } from '../src/data/trendingProducts';

console.log('Total ultraBrasilProducts:', ultraBrasilProducts.length);

const allowed = ultraBrasilProducts.filter(isAllowedOnHomepage);
console.log('Total allowed on homepage (diapers filtered to M/G only):', allowed.length);

const discounted = allowed.filter(p => (p.discount && p.discount > 0) || (p.oldPrice && p.oldPrice > p.price));
console.log('Discounted items:', discounted.length);

// Check categories
const cats: { [k: string]: number } = {};
allowed.forEach(p => {
  const c = p.category || 'Outros';
  cats[c] = (cats[c] || 0) + 1;
});
console.log('Categories distribution:', cats);
