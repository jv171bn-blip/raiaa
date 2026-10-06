import * as productsModule from '../src/data/products';
import { todosProdutosExpandidos } from '../src/data/catalogExpanded';
import { novosProdutosCatalogo } from '../src/data/novosProdutosCatalogo';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';
import { montaProducts } from '../src/data/montaOffers';

const allItems: any[] = [];

// 1. Coleta produtos do módulo products.ts
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

// 2. Coleta produtos expandidos
if (Array.isArray(todosProdutosExpandidos)) {
  for (const item of todosProdutosExpandidos) {
    if (item && item.id) allItems.push(item);
  }
}

// 3. Coleta catálogo complementar
if (Array.isArray(novosProdutosCatalogo)) {
  for (const item of novosProdutosCatalogo) {
    if (item && item.id) allItems.push(item);
  }
}

// 4. Coleta catálogo Ultra Brasil
if (Array.isArray(ultraBrasilProducts)) {
  for (const item of ultraBrasilProducts) {
    if (item && item.id) allItems.push(item);
  }
}

// 5. Coleta novos kits Carvalho & Ultra (com imagens reais e 5% desconto)
if (Array.isArray(novosKitsCarvalhoUltra)) {
  for (const item of novosKitsCarvalhoUltra) {
    if (item && item.id) allItems.push(item);
  }
}

// 6. Coleta ofertas montaProducts
if (Array.isArray(montaProducts)) {
  for (const item of montaProducts) {
    if (item && item.id) allItems.push(item);
  }
}

// 7. Filtro estrito: REMOVER REMÉDIOS E MEDICAMENTOS (Regra Google Merchant)
function isRemedio(p: any): boolean {
  if (!p) return false;
  const cat = (p.category || '').toLowerCase().trim();
  const subcat = (p.subcategory || '').toLowerCase().trim();
  const name = (p.name || '').toLowerCase().trim();

  // Categorias diretas de remédios
  if (cat === 'medicamentos' || cat === 'remédios' || cat === 'remedios' || cat.includes('medicamento')) {
    return true;
  }

  // Subcategorias específicas de remédios/fármacos
  const medSubcats = [
    'analgésicos', 'analgesicos', 'anti-inflamatórios', 'anti-inflamatorios',
    'antibióticos', 'antibioticos', 'antitérmicos', 'antitermicos',
    'gastrointestinais', 'antigripais', 'antialérgicos', 'antialergicos',
    'relaxantes musculares', 'antifúngicos', 'antifungicos', 'pressão alta',
    'diabetes e controle', 'dor e febre', 'dores musculares', 'dores abdominais',
    'genéricos', 'genericos', 'cardiovascular', 'gripes e resfriados',
    'oftalmológicos', 'primeiros socorros'
  ];
  if (medSubcats.some(s => subcat.includes(s))) {
    return true;
  }

  // Se estiver em categorias seguras (Cosméticos, Bebê, Cabelos, Suplementos, Higiene, Maquiagem)
  const safeCats = [
    'mamãe', 'mamae', 'bebê', 'bebe', 'dermo', 'cabelo', 'higiene',
    'beleza', 'maquiag', 'vitamina', 'suplemento', 'vida saudável', 'pet', 'homem'
  ];
  if (safeCats.some(sc => cat.includes(sc))) {
    // Apenas exceções se for explicitamente um medicamento oral com dosagem
    const isDrug = name.includes('dipirona') || name.includes('paracetamol 750mg') || name.includes('ibuprofeno 600mg');
    if (isDrug) return true;
    return false;
  }

  // Fármaco com princípio ativo fora de cosméticos/vitaminas
  if (p.activeIngredient) {
    return true;
  }

  return false;
}

// Deduplicação por ID e exclusão de remédios
const map = new Map<number, any>();
for (const p of allItems) {
  if (p && p.id && !map.has(p.id)) {
    if (!isRemedio(p)) {
      map.set(p.id, p);
    }
  }
}

export const uniqueProducts = Array.from(map.values());
