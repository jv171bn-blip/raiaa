const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function loadModule(filePath) {
  let actualPath = filePath;
  if (!fs.existsSync(actualPath)) {
    if (fs.existsSync(actualPath + '.ts')) actualPath = actualPath + '.ts';
    else if (fs.existsSync(actualPath + '.tsx')) actualPath = actualPath + '.tsx';
    else if (fs.existsSync(actualPath + '.js')) actualPath = actualPath + '.js';
  }

  const tsCode = fs.readFileSync(actualPath, 'utf8');
  const result = esbuild.transformSync(tsCode, {
    loader: 'ts',
    format: 'cjs',
    target: 'node18'
  });
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(m, m.exports, (mod) => {
    if (mod.startsWith('./') || mod.startsWith('../')) {
      const dir = path.dirname(actualPath);
      const target = path.join(dir, mod);
      return loadModule(target);
    }
    return require(mod);
  });
  return m.exports;
}

try {
  const prodsMod = loadModule(path.resolve('src/data/products.ts'));
  console.log('products.ts loaded! Products count:', prodsMod.products ? prodsMod.products.length : 'unknown');
  
  const novosMod = loadModule(path.resolve('src/data/novosProdutosCatalogo.ts'));
  console.log('novosProdutosCatalogo.ts loaded! Count:', novosMod.novosProdutosCatalogo ? novosMod.novosProdutosCatalogo.length : 'unknown');

  module.exports = {
    products: prodsMod.products,
    novosProdutosCatalogo: novosMod.novosProdutosCatalogo
  };
} catch (e) {
  console.error('Error loading:', e);
}
