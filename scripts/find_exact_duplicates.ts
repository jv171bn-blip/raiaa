import fs from 'fs';
import { allProducts } from '../src/data/allProducts';
import { Product } from '../src/data/products';

interface ExactDuplicateMatch {
  titleDescription: string;
  items: Array<{
    id: number;
    name: string;
    brand?: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    rating?: number;
    reviews?: number;
    image: string;
  }>;
}

const matches: ExactDuplicateMatch[] = [];

// Helper to extract numeric volumes / units
function extractUnit(str: string): string {
  const s = str.toLowerCase();
  const m = s.match(/(\d+(?:[.,]\d+)?\s*(?:ml|l|litro|g|kg|caps|comprimidos|comp|unidades|un))/i);
  return m ? m[1].replace(/\s+/g, '').replace('1000ml', '1l').replace('1litro', '1l').replace('comprimidos', 'comp') : '';
}

// Group candidates that have the same core product identity
const pairs: [Product, Product][] = [];
const seenIdsInGroup = new Set<number>();

for (let i = 0; i < allProducts.length; i++) {
  const pA = allProducts[i];
  const nA = pA.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  for (let j = i + 1; j < allProducts.length; j++) {
    const pB = allProducts[j];
    const nB = pB.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Skip if identical ID (already deduplicated)
    if (pA.id === pB.id) continue;

    // Check specific known equivalences:
    let isSame = false;

    // 1. Wella Invigo Nutri-Enrich 1L Dupla
    if (
      nA.includes('wella') && nB.includes('wella') &&
      nA.includes('invigo') && nB.includes('invigo') &&
      (nA.includes('nutri') || nA.includes('enrich')) && (nB.includes('nutri') || nB.includes('enrich')) &&
      (nA.includes('1l') || nA.includes('1000ml')) && (nB.includes('1l') || nB.includes('1000ml')) &&
      !nA.includes('250ml') && !nB.includes('250ml') &&
      !nA.includes('trio') && !nB.includes('trio') &&
      !nA.includes('3 produtos') && !nB.includes('3 produtos')
    ) {
      isSame = true;
    }

    // 2. CeraVe Loção Hidratante 473ml
    else if (
      nA.includes('cerave') && nB.includes('cerave') &&
      nA.includes('locao') && nB.includes('locao') &&
      (nA.includes('473') || nA.includes('corpo')) && (nB.includes('473') || nB.includes('corpo')) &&
      !nA.includes('limpeza') && !nB.includes('limpeza')
    ) {
      isSame = true;
    }

    // 3. Cicaplast Baume B5+ 40ml
    else if (
      nA.includes('cicaplast') && nB.includes('cicaplast') &&
      (nA.includes('40ml') || nA.includes('baume')) && (nB.includes('40ml') || nB.includes('baume')) &&
      !nA.includes('labial') && !nB.includes('labial')
    ) {
      isSame = true;
    }

    // 4. Dorflex 36 Comprimidos
    else if (
      nA.includes('dorflex') && nB.includes('dorflex') &&
      nA.includes('36') && nB.includes('36')
    ) {
      isSame = true;
    }

    // 5. Novalgina Dipirona 1g 20 Comprimidos
    else if (
      nA.includes('novalgina') && nB.includes('novalgina') &&
      nA.includes('20') && nB.includes('20')
    ) {
      isSame = true;
    }

    // 6. Eucerin Anti-Pigment Dual Sérum 30ml
    else if (
      nA.includes('eucerin') && nB.includes('eucerin') &&
      nA.includes('dual') && nB.includes('dual') &&
      nA.includes('anti') && nB.includes('anti')
    ) {
      isSame = true;
    }

    // 7. Imecap Hair 90 Cápsulas
    else if (
      nA.includes('imecap') && nB.includes('imecap') &&
      nA.includes('90') && nB.includes('90')
    ) {
      isSame = true;
    }

    // 8. Dove Bond Intense Repair 350ml + 150ml
    else if (
      nA.includes('dove') && nB.includes('dove') &&
      nA.includes('bond') && nB.includes('bond') &&
      nA.includes('350') && nB.includes('350')
    ) {
      isSame = true;
    }

    // 9. Ninho Fases 1+ 800g
    else if (
      nA.includes('ninho') && nB.includes('ninho') &&
      nA.includes('fases 1') && nB.includes('fases 1') &&
      nA.includes('800') && nB.includes('800')
    ) {
      isSame = true;
    }

    // 10. Darrow Actine 400g
    else if (
      nA.includes('actine') && nB.includes('actine') &&
      nA.includes('400') && nB.includes('400')
    ) {
      isSame = true;
    }

    // 11. SkinCeuticals P-tiox 30ml
    else if (
      nA.includes('p-tiox') && nB.includes('p-tiox')
    ) {
      isSame = true;
    }

    // 12. Dolce Pet Cereja e Avelã 500ml
    else if (
      nA.includes('dolce pet') && nB.includes('dolce pet') &&
      nA.includes('500') && nB.includes('500')
    ) {
      isSame = true;
    }

    // 13. Eudora Siàge Hair Plastia Shampoo + Condicionador
    else if (
      nA.includes('siage') && nB.includes('siage') &&
      nA.includes('plastia') && nB.includes('plastia') &&
      nA.includes('shampoo') && nB.includes('shampoo')
    ) {
      isSame = true;
    }

    // 14. Eudora Siàge DermoHair Shampoo 300ml + Máscara 250g
    else if (
      nA.includes('siage') && nB.includes('siage') &&
      nA.includes('dermohair') && nB.includes('dermohair')
    ) {
      isSame = true;
    }

    // 15. Too Faced Chocolate Soleil
    else if (
      nA.includes('too faced') && nB.includes('too faced') &&
      nA.includes('chocolate soleil') && nB.includes('chocolate soleil')
    ) {
      isSame = true;
    }

    // 16. Eximia Fortalize 30 Comprimidos
    else if (
      nA.includes('eximia') && nB.includes('eximia') &&
      nA.includes('fortalize') && nB.includes('fortalize') &&
      nA.includes('30') && nB.includes('30')
    ) {
      isSame = true;
    }

    // 17. Bepantol Derma 40g
    else if (
      nA.includes('bepantol') && nB.includes('bepantol') &&
      nA.includes('derma') && nB.includes('derma') &&
      nA.includes('40g') && nB.includes('40g')
    ) {
      isSame = true;
    }

    // 18. Babysec Galinha Pintadinha G 60 Unidades
    else if (
      nA.includes('babysec') && nB.includes('babysec') &&
      nA.includes('60') && nB.includes('60') &&
      /\bg\b/.test(nA) && /\bg\b/.test(nB)
    ) {
      isSame = true;
    }

    // 19. Wella Fusion Double Salon / Shampoo Duplo
    else if (
      nA.includes('wella') && nB.includes('wella') &&
      nA.includes('fusion') && nB.includes('fusion') &&
      (nA.includes('double') || nA.includes('2') || nA.includes('duplo')) && (nB.includes('double') || nB.includes('2') || nB.includes('duplo'))
    ) {
      isSame = true;
    }

    // 20. Wella Oil Reflections 1L Duplo
    else if (
      nA.includes('wella') && nB.includes('wella') &&
      nA.includes('oil reflections') && nB.includes('oil reflections') &&
      (nA.includes('1l') || nA.includes('1000ml')) && (nB.includes('1l') || nB.includes('1000ml'))
    ) {
      isSame = true;
    }

    // 21. Braé Divine Duo
    else if (
      nA.includes('brae') && nB.includes('brae') &&
      nA.includes('divine') && nB.includes('divine')
    ) {
      isSame = true;
    }

    if (isSame) {
      pairs.push([pA, pB]);
    }
  }
}

// Build merged clusters from pairs
const clustersMap = new Map<number, Set<number>>();
for (const [a, b] of pairs) {
  if (!clustersMap.has(a.id)) clustersMap.set(a.id, new Set([a.id]));
  if (!clustersMap.has(b.id)) clustersMap.set(b.id, new Set([b.id]));
  
  const merged = new Set([...clustersMap.get(a.id)!, ...clustersMap.get(b.id)!]);
  for (const id of merged) {
    clustersMap.set(id, merged);
  }
}

const uniqueClusterSets = new Set<string>();
const finalClusters: Product[][] = [];

for (const [, set] of clustersMap.entries()) {
  const sortedKey = Array.from(set).sort((x, y) => x - y).join(',');
  if (!uniqueClusterSets.has(sortedKey)) {
    uniqueClusterSets.add(sortedKey);
    const prods = Array.from(set).map(id => allProducts.find(p => p.id === id)!);
    finalClusters.push(prods);
  }
}

console.log(`Encontrados ${finalClusters.length} grupos de produtos EXATAMENTE IGUAIS com nomes e preços diferentes:\n`);

finalClusters.forEach((cluster, idx) => {
  console.log(`========================================================================`);
  console.log(`GRUPO #${idx + 1} (${cluster.length} produtos correspondentes)`);
  console.log(`========================================================================`);
  cluster.forEach(p => {
    console.log(`  [ID: ${p.id}] "${p.name}"`);
    console.log(`    Preço: R$ ${p.price.toFixed(2)} (De: R$ ${(p.oldPrice || p.price).toFixed(2)}) | Avaliações: (${p.reviews || 0}) | Imagem: ${p.image}`);
  });
  console.log('');
});

fs.writeFileSync('scripts/exact_semantic_duplicates.json', JSON.stringify(finalClusters, null, 2), 'utf-8');
