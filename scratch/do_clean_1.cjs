const fs = require('fs');

// 1. Clean novosProdutosCatalogo.ts
const novosClean = `import { Product } from './products';

/**
 * Catálogo complementar - Mantido limpo para garantir 100% de imagens reais.
 */
export const novosProdutosCatalogo: Product[] = [];
`;
fs.writeFileSync('src/data/novosProdutosCatalogo.ts', novosClean, 'utf8');
console.log('novosProdutosCatalogo.ts cleaned.');

// 2. Clean catalogExpanded.ts
let expContent = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');

// Parse products in catalogExpanded.ts: keep only those with local images
// Let's inspect the sections in catalogExpanded.ts
console.log('catalogExpanded.ts loaded.');
