const fs = require('fs');

if (fs.existsSync('scratch/aredeultrabrasil_all_products.json')) {
  const data = JSON.parse(fs.readFileSync('scratch/aredeultrabrasil_all_products.json', 'utf8'));
  console.log('Total products in aredeultrabrasil_all_products:', data.length);
  const pDiapers = data.filter(p => {
    const n = (p.name || '').toLowerCase();
    return n.includes('fralda') && (n.includes(' p ') || n.endsWith(' p') || n.includes('tamanho p'));
  });
  console.log('Found P diapers:', pDiapers.length);
  pDiapers.forEach(d => console.log(`  [id ${d.id}] ${d.name} -> ${d.images?.[0]?.src}`));
} else {
  console.log('File does not exist');
}
