const fs = require('fs');

// 1. Read user raw input
const userText = fs.readFileSync('scratch/user_raw_input.txt', 'utf8');

// 2. Read all 1058 products from aredeultrabrasil.com
const storeProducts = JSON.parse(fs.readFileSync('scratch/aredeultrabrasil_all_products.json', 'utf8'));

// Build index maps from storeProducts
const byPermalink = new Map();
const bySlug = new Map();
const byId = new Map();

for (const p of storeProducts) {
  // Normalize permalink without trailing slash
  const normLink = p.permalink.replace(/\/+$/, '').toLowerCase();
  byPermalink.set(normLink, p);
  if (p.slug) bySlug.set(p.slug.toLowerCase(), p);
  if (p.id) byId.set(String(p.id), p);
}

// Extract product blocks from user input
// Extract all product links
const lines = userText.split('\n').map(l => l.trim()).filter(Boolean);
const userItems = [];
const seenUrls = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\[([^\]]+)\]\((https:\/\/aredeultrabrasil\.com\/product\/([^\/]+)\/?)\)$/);
  if (m) {
    const linkText = m[1].trim();
    const url = m[2].trim();
    const slug = m[3].trim().toLowerCase();

    if (linkText.startsWith('-') || linkText.toLowerCase().includes('desconto')) {
      continue; // Discount badge
    }

    const normUrl = url.replace(/\/+$/, '').toLowerCase();
    if (!seenUrls.has(normUrl)) {
      seenUrls.add(normUrl);

      // Check next lines for price, add-to-cart ID, category
      let priceText = '';
      let addCartId = '';
      let categoryText = '';

      for (let j = i + 1; j <= Math.min(i + 7, lines.length - 1); j++) {
        const nextLine = lines[j];
        if (nextLine.match(/^\[([^\]]+)\]\(https:\/\/aredeultrabrasil\.com\/product\//)) {
          break; // Next product started
        }
        if (nextLine.includes('add-to-cart=')) {
          const mCart = nextLine.match(/add-to-cart=(\d+)/);
          if (mCart) addCartId = mCart[1];
        }
        if (nextLine.includes('R$') && !priceText) {
          priceText = nextLine;
        }
        if (nextLine.includes('/product-category/') && !categoryText) {
          categoryText = nextLine;
        }
      }

      userItems.push({
        rawName: linkText,
        url,
        normUrl,
        slug,
        priceText,
        addCartId,
        categoryText,
      });
    }
  }
}

console.log(`Total unique products extracted from user prompt: ${userItems.length}`);

// Now match each user item to storeProducts
let matchedCount = 0;
const matchedList = [];
const unmatchedList = [];

for (const item of userItems) {
  let matched = byPermalink.get(item.normUrl);
  if (!matched && item.slug) matched = bySlug.get(item.slug);
  if (!matched && item.addCartId) matched = byId.get(item.addCartId);

  if (matched) {
    matchedCount++;
    matchedList.push({
      userItem: item,
      storeProduct: matched,
    });
  } else {
    unmatchedList.push(item);
  }
}

console.log(`Successfully matched with storeProducts API: ${matchedCount} / ${userItems.length}`);
if (unmatchedList.length > 0) {
  console.log('Unmatched items:', unmatchedList);
}

fs.writeFileSync('scratch/matched_user_products.json', JSON.stringify(matchedList, null, 2));
console.log('Saved matched list to scratch/matched_user_products.json');
