const fs = require('fs');

// Let's inspect FlashOfferBanner
const flashBanner = fs.readFileSync('src/components/FlashOfferBanner/FlashOfferBanner.tsx', 'utf8');
console.log('--- FlashOfferBanner ---');
const fbMatches = flashBanner.match(/name|image|price/g);
console.log(flashBanner.slice(0, 500));

// Let's inspect MontaQueDesconta
const monta = fs.readFileSync('src/components/MontaQueDesconta/MontaQueDesconta.tsx', 'utf8');
console.log('--- MontaQueDesconta ---');
console.log(monta.slice(0, 500));
