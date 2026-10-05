const sharp = require('sharp');

// Let's crop different areas and see what text is in there
async function extractSegments() {
  // The user's screenshot shows:
  // Head with flower brain + "em foco" on the left of it!
  // In the user's screenshot:
  // "em foco" is directly to the left of the head!
  // Where is "Saúde"? It's directly to the left of "em foco"!
  // Let's locate the head:
  // Earlier we found head is around x=1300 to 1700 in hero_06_saude_mental.webp (2636x600)!
  // So "Saúde em foco" is around x=800 to 1300!
  // That means: from x=800 to x=1800 (width 1000, height 600) is the ENTIRE central graphic of Saúde Mental!
  
  await sharp('public/banners/hero_06_saude_mental.webp')
    .extract({ left: 800, top: 0, width: 1000, height: 600 })
    .toFile('scratch/saude_mental_center.png');
  console.log('Extracted scratch/saude_mental_center.png');
}

extractSegments();
