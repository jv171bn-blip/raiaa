const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf-8');
  const res = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const m = { exports: {} };
  new Function('exports', 'module', 'require', res.outputText)(m.exports, m, (mod) => {});
  return m.exports;
}

const novosMod = loadTs('src/data/novosProdutosCatalogo.ts');
const prods = novosMod.novosProdutosCatalogo || [];

const badList = [];
prods.forEach(p => {
  const name = (p.name || '').toLowerCase();
  const brand = (p.brand || '').toLowerCase();
  const img = (p.image || '').toLowerCase();

  // Flag suspicious / mismatched images:
  let issue = null;

  if (img.includes('curativo_bandaid') && !name.includes('curativo') && !name.includes('band-aid') && !name.includes('bandaid')) {
    issue = 'Band-Aid on non-Band-Aid';
  } else if ((img.includes('cialis') || img.includes('tadalafila')) && !name.includes('cialis') && !name.includes('tadalafila')) {
    issue = 'Cialis/Tadalafila on non-erectile product';
  } else if (img.includes('skinceuticals') && !name.includes('skinceuticals') && !brand.includes('skinceuticals')) {
    issue = 'SkinCeuticals on non-SkinCeuticals';
  } else if (img.includes('principia') && !name.includes('principia') && !brand.includes('principia')) {
    issue = 'Principia on non-Principia';
  } else if (img.includes('mascara_elseve') && !name.includes('máscara') && !name.includes('mascara') && !name.includes('creme de tratamento')) {
    issue = 'Hair mask on non-mask';
  } else if (img.includes('condicionador_pantene') && !name.includes('condicionador')) {
    issue = 'Conditioner on non-conditioner';
  } else if (img.includes('allegra') && !name.includes('allegra')) {
    issue = 'Allegra on non-Allegra';
  } else if (img.includes('omeprazol') && !name.includes('omeprazol')) {
    issue = 'Omeprazol on non-Omeprazol';
  } else if (img.includes('aptamil') && !name.includes('aptamil')) {
    issue = 'Aptamil formula on non-Aptamil';
  } else if (img.includes('nan_supreme') && !name.includes('nan supreme') && !name.includes('nan')) {
    issue = 'NAN formula on non-NAN';
  } else if (img.includes('termometro_digital') && !name.includes('termômetro') && !name.includes('termometro')) {
    issue = 'Thermometer on non-thermometer';
  } else if (img.includes('aparelho_pressao') && !name.includes('pressão') && !name.includes('pressao')) {
    issue = 'Blood pressure monitor on non-monitor';
  } else if (img.includes('glicosimetro') && !name.includes('glic')) {
    issue = 'Glucometer on non-glucometer';
  } else if (img.includes('18684359.webp') && !name.includes('doctar')) { // 18684359 is Doctar Plus
    issue = 'Doctar Plus on non-Doctar';
  } else if (img.includes('17546030.webp') && !name.includes('lipikar')) { // 17546030 is Lipikar Surgras
    issue = 'Lipikar Surgras soap on non-Lipikar';
  } else if (img.includes('3474545.webp') && !name.includes('needs')) { // 3474545 is Needs FPS 70
    issue = 'Needs FPS 70 on non-Needs';
  }

  if (issue) {
    badList.push({ id: p.id, name: p.name, brand: p.brand, img: p.image, issue });
  }
});

console.log('Total flagged mismatched products in novosProdutosCatalogo:', badList.length);
badList.forEach((b, i) => {
  console.log(`${i+1}. [${b.id}] (${b.brand}) ${b.name} -> ${b.issue} [${b.img}]`);
});
