const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const res = esbuild.transformSync(code, { loader: 'ts', format: 'cjs', target: 'node18' });
  const m = { exports: {} };
  const customRequire = (mod) => {
    if (mod.startsWith('.')) {
      const target = path.resolve(path.dirname(file), mod);
      const full = fs.existsSync(target) ? target : target + '.ts';
      return loadTs(full);
    }
    return require(mod);
  };
  new Function('module', 'exports', 'require', res.code)(m, m.exports, customRequire);
  return m.exports;
}

const catMod = loadTs('src/data/catalogExpanded.ts');
const todos = catMod.todosProdutosExpandidos || [];

const imgMap = {};
for (const it of todos) {
  if (!imgMap[it.image]) imgMap[it.image] = [];
  imgMap[it.image].push(it);
}

console.log('=== ALL DUPLICATE GROUPS IN catalogExpanded.ts (todosProdutosExpandidos) ===');
let groupIdx = 0;
for (const [img, list] of Object.entries(imgMap)) {
  if (list.length > 1) {
    groupIdx++;
    console.log(`\nGroup ${groupIdx} (${list.length}x): ${img}`);
    list.forEach(i => console.log(`   ID ${i.id} | ${i.brand || ''} | ${i.name}`));
  }
}
