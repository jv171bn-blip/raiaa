const fs = require('fs');

function inspect() {
  const novos = fs.readFileSync('src/data/novosProdutosCatalogo.ts', 'utf8');
  const prods = fs.readFileSync('src/data/products.ts', 'utf8');

  console.log('novosProdutosCatalogo length:', novos.length);
  console.log('products.ts length:', prods.length);

  // Let's check some specific products to see if they were already updated or still have old paths
  const samples = [
    '30001', '30002', '30010', '30020', '30030', '30041', '30050',
    '30100', '30120', '30140', '30166', '30200', '30228', '30252',
    '30287', '30296', '30400', '30405'
  ];

  for (const id of samples) {
    const regex = new RegExp(`id:\\s*['"]${id}['"][\\s\\S]*?name:\\s*['"]([^'"]+)['"][\\s\\S]*?image:\\s*['"]([^'"]+)['"]`);
    const m = novos.match(regex);
    if (m) {
      console.log(`[novos] ${id}: ${m[1].substring(0, 30)} -> ${m[2]}`);
    }
  }

  // Check the 5 flagged in products.ts
  const prodIds = ['2049', '103', '1502', '1306', '1405'];
  for (const id of prodIds) {
    const regex = new RegExp(`id:\\s*['"]?${id}['"]?[\\s\\S]*?name:\\s*['"]([^'"]+)['"][\\s\\S]*?image:\\s*['"]([^'"]+)['"]`);
    const m = prods.match(regex);
    if (m) {
      console.log(`[prods] ${id}: ${m[1].substring(0, 30)} -> ${m[2]}`);
    }
  }
}

inspect();
