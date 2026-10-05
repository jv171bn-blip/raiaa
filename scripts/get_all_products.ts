import * as productsModule from '../src/data/products';
import { todosProdutosExpandidos } from '../src/data/catalogExpanded';
import { novosProdutosCatalogo } from '../src/data/novosProdutosCatalogo';

const allItems: any[] = [];

// Iterate through exports of productsModule
for (const key of Object.keys(productsModule)) {
  const val = (productsModule as any)[key];
  if (Array.isArray(val)) {
    for (const item of val) {
      if (item && typeof item === 'object' && 'id' in item && 'name' in item && 'price' in item) {
        allItems.push(item);
      }
    }
  } else if (val && typeof val === 'object' && 'id' in val && 'name' in val && 'price' in val) {
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

// Deduplicate by ID
const map = new Map<number, any>();
for (const p of allItems) {
  if (!map.has(p.id)) {
    map.set(p.id, p);
  }
}

export const uniqueProducts = Array.from(map.values());

