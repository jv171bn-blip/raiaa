import { allProducts } from '../src/data/allProducts';
import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import * as productsModule from '../src/data/products';

console.log('allProducts count:', allProducts.length);
console.log('novosKitsCarvalhoUltra count:', novosKitsCarvalhoUltra.length);
console.log('ultraBrasilProducts count:', ultraBrasilProducts.length);

// Let's collect ALL products from all raw sources before any deduplication
const allRaw: any[] = [];
for (const [key, val] of Object.entries(productsModule)) {
  if (Array.isArray(val)) {
    for (const item of val) {
      if (item && item.id && item.name) allRaw.push({ ...item, _source: key });
    }
  } else if (val && typeof val === 'object' && (val as any).id && (val as any).name) {
    allRaw.push({ ...(val as any), _source: key });
  }
}
for (const item of novosKitsCarvalhoUltra) allRaw.push({ ...item, _source: 'novosKitsCarvalhoUltra' });
for (const item of ultraBrasilProducts) allRaw.push({ ...item, _source: 'ultraBrasilProducts' });

console.log('Total raw products collected:', allRaw.length);

// Let's search for "wella" or "nutri enrich" or "nutri-enrich"
const wella = allRaw.filter(p => p.name.toLowerCase().includes('nutri'));
console.log('\nWella Nutri matches:');
wella.forEach(p => {
  console.log(`[${p.id}] [${p._source}] Price: ${p.price} (original: ${p.originalPrice}) | Name: ${p.name}`);
});
