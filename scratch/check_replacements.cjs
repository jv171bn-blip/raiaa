const fs = require('fs');

const pContent = fs.readFileSync('src/data/products.ts', 'utf8');

// List of arrays we care about:
// mostBought, blackDayProducts, weekHighlights, favoriteBrands, asianBeauty,
// quemComprouTambem, similaresVocePode, hairCareProducts, fraldasProducts,
// remediosProducts, dermocosmeticosProducts, vitaminasSuplementosProducts,
// higieneBucalPersonalProducts

const publicFiles = new Set(fs.readdirSync('public/products'));

// Let's see which products with raiadrogasil images can be replaced by real local images from public/products
// or if they should just be removed.
