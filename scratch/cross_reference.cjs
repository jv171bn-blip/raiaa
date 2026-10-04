const fs = require('fs');
const files = fs.readdirSync('public/products');
console.log('Total files in public/products:', files.length);

const targets = JSON.parse(fs.readFileSync('scratch/master_remaining_targets.json', 'utf8'));

// Filter only items that NEED a new image (item > 0 in group, or if group 27 where all need local images)
console.log('Searching existing files for remaining targets:');

const matched = [];
const stillMissing = [];

for (const t of targets) {
  if (t.isPrimary && t.groupId !== 27) continue; // Primary item already has an image, unless group 27
  
  // Try to find a file in public/products that matches the product
  const foundFile = files.find(f => {
    const fLower = f.toLowerCase();
    const brandLower = t.brand.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nameWords = t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\s+/).filter(w => w.length > 3);
    
    // Check specific known matches
    if (t.id === 30115 && fLower.includes('dove_original')) return true;
    if (t.id === 30116 && fLower.includes('protex')) return true;
    if (t.id === 30118 && fLower.includes('phebo')) return true;
    if (t.id === 30119 && fLower.includes('soapex')) return true;
    
    return false;
  });

  if (foundFile) {
    matched.push({ id: t.id, name: t.name, file: foundFile });
  } else {
    stillMissing.push(t);
  }
}

console.log(`Matched with existing local files: ${matched.length}`);
matched.forEach(m => console.log(`   ID ${m.id} -> ${m.file} (${m.name})`));

console.log(`Still needing image download: ${stillMissing.length}`);
fs.writeFileSync('scratch/still_missing_to_download.json', JSON.stringify(stillMissing, null, 2), 'utf8');
