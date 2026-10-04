const fs = require('fs');
const path = require('path');

const publicFiles = fs.readdirSync('public/products');
console.log('Total files in public/products:', publicFiles.length);

const allDupItems = JSON.parse(fs.readFileSync('scratch/all_dup_items.json', 'utf8'));

// Check how many of allDupItems have a matching named file in public/products
const found = [];
const missing = [];

for (const item of allDupItems) {
  // Let's see if there is already an existing image file that matches the item name/brand
  // or if we already have it downloaded
  const normalized = item.name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '_');
  
  // Also check if its current image is in public/products
  const curImg = item.image.replace('/products/', '');
  
  found.push({
    id: item.id,
    brand: item.brand,
    name: item.name,
    curImg: item.image
  });
}

console.log('Total duplicated items:', found.length);
