import fs from 'fs';
import { allProducts } from '../src/data/allProducts';

// Load our comprehensive duplicate clusters or exact matches
const clusters = JSON.parse(fs.readFileSync('scripts/exact_semantic_duplicates.json', 'utf8'));

interface GroupAnalysis {
  groupId: number;
  name: string;
  count: number;
  prices: number[];
  items: Array<{ id: number; name: string; price: number; oldPrice?: number; sourceFile?: string }>;
  action: 'DELETE_OUTLIER' | 'KEEP_CLOSE_PAIR' | 'SEND_FOR_USER_ANALYSIS';
  outlierToDelete?: { id: number; name: string; price: number };
  priceDiffRatio?: number;
}

const analysisResults: GroupAnalysis[] = [];

for (let idx = 0; idx < clusters.length; idx++) {
  const cluster = clusters[idx];
  const items = cluster.map((p: any) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    oldPrice: p.oldPrice
  }));

  const prices = items.map((it: any) => it.price).sort((a: number, b: number) => a - b);
  
  if (items.length >= 3) {
    // Check if 2 prices are close and 1 is an outlier
    // e.g. [94.98, 180.49, 185.68]
    // Distance between p0 and p1 vs distance between p1 and p2
    const diff01 = Math.abs(prices[1] - prices[0]) / Math.min(prices[0], prices[1]);
    const diff12 = Math.abs(prices[2] - prices[1]) / Math.min(prices[1], prices[2]);

    let outlierItem: any = null;
    if (diff01 > 0.4 && diff12 < 0.15) {
      // prices[0] is the low outlier!
      outlierItem = items.find((it: any) => it.price === prices[0]);
    } else if (diff12 > 0.4 && diff01 < 0.15) {
      // prices[2] is the high outlier!
      outlierItem = items.find((it: any) => it.price === prices[2]);
    }

    if (outlierItem) {
      analysisResults.push({
        groupId: idx + 1,
        name: cluster[0].name,
        count: items.length,
        prices,
        items,
        action: 'DELETE_OUTLIER',
        outlierToDelete: outlierItem
      });
    } else {
      // Other 3+ item groups
      analysisResults.push({
        groupId: idx + 1,
        name: cluster[0].name,
        count: items.length,
        prices,
        items,
        action: 'SEND_FOR_USER_ANALYSIS'
      });
    }
  } else if (items.length === 2) {
    const minP = Math.min(prices[0], prices[1]);
    const maxP = Math.max(prices[0], prices[1]);
    const ratio = (maxP - minP) / minP; // relative percentage difference

    // If difference is small (e.g. <= 20% or less than R$ 5)
    if (ratio <= 0.20 || Math.abs(maxP - minP) <= 5.0) {
      analysisResults.push({
        groupId: idx + 1,
        name: cluster[0].name,
        count: 2,
        prices,
        items,
        action: 'KEEP_CLOSE_PAIR',
        priceDiffRatio: ratio
      });
    } else {
      // Very different prices!
      analysisResults.push({
        groupId: idx + 1,
        name: cluster[0].name,
        count: 2,
        prices,
        items,
        action: 'SEND_FOR_USER_ANALYSIS',
        priceDiffRatio: ratio
      });
    }
  }
}

fs.writeFileSync('scripts/analysis_results.json', JSON.stringify(analysisResults, null, 2), 'utf8');

console.log('--- RESULTADO DA ANÁLISE ---');
console.log('1. GRUPOS COM 3 OFERTAS E 1 OUTLIER (PARA APAGAR):');
analysisResults.filter(r => r.action === 'DELETE_OUTLIER').forEach(r => {
  console.log(`- ${r.name}`);
  console.log(`  Preços: ${r.prices.map(p => 'R$ ' + p.toFixed(2)).join(', ')}`);
  console.log(`  APAGAR: [ID ${r.outlierToDelete?.id}] "${r.outlierToDelete?.name}" (R$ ${r.outlierToDelete?.price.toFixed(2)})\n`);
});

console.log('2. GRUPOS COM 2 OFERTAS DE PREÇOS PRÓXIMOS (NÃO PRECISA APAGAR):');
analysisResults.filter(r => r.action === 'KEEP_CLOSE_PAIR').forEach(r => {
  console.log(`- ${r.name}`);
  console.log(`  Preços: ${r.prices.map(p => 'R$ ' + p.toFixed(2)).join(' vs ')} (Diferença: ${(r.priceDiffRatio! * 100).toFixed(1)}%)\n`);
});

console.log('3. GRUPOS COM 2 OFERTAS DE PREÇOS MUITO DIFERENTES (ENVIAR PARA ANÁLISE):');
analysisResults.filter(r => r.action === 'SEND_FOR_USER_ANALYSIS').forEach(r => {
  console.log(`- ${r.name}`);
  r.items.forEach(it => {
    console.log(`  [ID ${it.id}] "${it.name}" ➔ R$ ${it.price.toFixed(2)}`);
  });
  console.log('');
});
