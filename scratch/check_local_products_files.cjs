const fs = require('fs');
const path = require('path');

const publicProductsDir = 'public/products';
const files = fs.readdirSync(publicProductsDir);
console.log('Total files in public/products:', files.length);

// Let's see some sample filenames
console.log('Sample files in public/products:', files.slice(0, 30));
