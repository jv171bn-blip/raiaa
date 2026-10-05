const fs = require('fs');

const files = fs.readdirSync('public/products');
files.sort();

console.log('Total local product images in public/products:', files.length);

// Group by category/prefix
const groups = {};
for (const f of files) {
  const prefix = f.split('_')[0];
  groups[prefix] = (groups[prefix] || 0) + 1;
}

console.log('Prefixes:', groups);

// Let's write full list to scratch/local_images_list.json
fs.writeFileSync('scratch/local_images_list.json', JSON.stringify(files, null, 2));
console.log('Saved to scratch/local_images_list.json');
