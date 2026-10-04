const m = require('./mismatches.json');
console.log('Total mismatches in list:', m.length);
m.forEach((it, idx) => {
  console.log(`${idx + 1}. [${it.id}] ${it.name} | IMG: ${it.image} | REASON: ${it.reason}`);
});
