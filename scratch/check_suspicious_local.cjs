const fs = require('fs');

function checkLocalImages(catalogPath, isJson = false) {
  const content = fs.readFileSync(catalogPath, 'utf8');
  const prods = [];
  
  if (isJson) {
    const eqIdx = content.indexOf('= [');
    const startIdx = eqIdx + 2;
    const endIdx = content.lastIndexOf(']');
    const list = JSON.parse(content.slice(startIdx, endIdx + 1));
    list.forEach(p => prods.push({ id: p.id, name: p.name, image: p.image, brand: p.brand }));
  } else {
    // regex
    const matches = content.split(/\{\s*(?:id|"id"):\s*(\d+)/g);
    for (let i = 1; i < matches.length; i += 2) {
      const id = parseInt(matches[i], 10);
      const body = matches[i + 1];
      const nameM = body.match(/(?:"name"|name):\s*"([^"]+)"/);
      const imgM = body.match(/(?:"image"|image):\s*"([^"]+)"/);
      const brandM = body.match(/(?:"brand"|brand):\s*"([^"]+)"/);
      if (nameM && imgM) {
        prods.push({ id, name: nameM[1], image: imgM[1], brand: brandM ? brandM[1] : '' });
      }
    }
  }

  const suspicious = [];
  prods.forEach(p => {
    if (!p.image.startsWith('/products/')) return;
    const imgName = p.image.replace('/products/', '').toLowerCase();
    
    // For ultra_ images, they are numbered IDs from aredeultrabrasil
    if (imgName.startsWith('ultra_')) return;

    // Check keyword correspondence between p.name/p.brand and imgName
    const nameLower = (p.name + ' ' + (p.brand || '')).toLowerCase();
    
    // Remove extensions
    const baseImg = imgName.replace(/\.(jpg|jpeg|png|webp)$/, '');
    const tokens = baseImg.split('_').filter(t => t.length > 2 && isNaN(t));

    // Check if at least 1 significant token is in the product name
    const matchesAny = tokens.some(t => nameLower.includes(t));
    if (!matchesAny) {
      suspicious.push({ id: p.id, name: p.name, image: p.image, tokens });
    }
  });

  console.log(`\n=== Catalog: ${catalogPath} ===`);
  console.log(`Suspicious local images: ${suspicious.length}`);
  suspicious.forEach(s => {
    console.log(`  [${s.id}] "${s.name}" -> ${s.image} (tokens: ${s.tokens.join(', ')})`);
  });
  return suspicious;
}

checkLocalImages('src/data/products.ts', false);
checkLocalImages('src/data/catalogExpanded.ts', false);
checkLocalImages('src/data/novosProdutosCatalogo.ts', true);
checkLocalImages('src/data/ultraBrasilProducts.ts', false);
