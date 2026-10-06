import { novosKitsCarvalhoUltra } from '../src/data/novosKitsCarvalhoUltra';

console.log('Kits in novosKitsCarvalhoUltra:', novosKitsCarvalhoUltra.length);

// Compare every kit against all other kits in novosKitsCarvalhoUltra
const sameKitPairs: Array<{
  kitA: { id: number; name: string; price: number };
  kitB: { id: number; name: string; price: number };
  ratio: number;
}> = [];

for (let i = 0; i < novosKitsCarvalhoUltra.length; i++) {
  const a = novosKitsCarvalhoUltra[i];
  const wordsA = a.name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2);
  const setA = new Set(wordsA);

  for (let j = i + 1; j < novosKitsCarvalhoUltra.length; j++) {
    const b = novosKitsCarvalhoUltra[j];
    const wordsB = b.name.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 2);
    const setB = new Set(wordsB);

    let matchCount = 0;
    for (const w of setA) {
      if (setB.has(w)) matchCount++;
    }

    const ratio = matchCount / Math.max(setA.size, setB.size);
    if (ratio >= 0.60) {
      sameKitPairs.push({
        kitA: { id: a.id, name: a.name, price: a.price },
        kitB: { id: b.id, name: b.name, price: b.price },
        ratio
      });
    }
  }
}

console.log(`Encontrados ${sameKitPairs.length} pares com alta sobreposição nos kits:`);
sameKitPairs.forEach(p => {
  console.log(`----------------------------------------`);
  console.log(`Ratio: ${p.ratio.toFixed(2)}`);
  console.log(`A: [${p.kitA.id}] "${p.kitA.name}" -> R$ ${p.kitA.price}`);
  console.log(`B: [${p.kitB.id}] "${p.kitB.name}" -> R$ ${p.kitB.price}`);
});
