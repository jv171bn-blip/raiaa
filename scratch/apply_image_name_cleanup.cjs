const fs = require('fs');

console.log('=== Starting catalog image and name cleanup ===');

// 1. UPDATE ultraBrasilProducts.ts
{
  const idsToDelete = new Set([
    // Pampers Confort Sec mismatches (used M 70 image)
    50301, 50297, 50300, 50296,
    // Duplicates of G 98 and M 70
    50294, 50298,
    // Pampers Premium Care mismatches (used XXG 56 image)
    50304, 50305, 50306, 50307, 50309, 50310, 50311, 50313, 50314, 50315,
    // Huggies mismatches (used M 80 image)
    50273, 50288, 50289, 50290, 50291, 50292,
    // MamyPoko mismatches (used XG 52 image)
    50275, 50276, 50277, 50278, 50280, 50283, 50284, 50285,
    // Pom Pom mismatches (used M 86 image)
    50316, 50318, 50319, 50320
  ]);

  const imageFixes = {
    50302: '/products/pampers_confort_sec_p.webp', // P 50 Fraldas
    50293: '/products/pampers_confort_sec_g.webp', // G 60 Fraldas
  };

  const ubContent = fs.readFileSync('src/data/ultraBrasilProducts.ts', 'utf8');
  const lines = ubContent.split('\n');
  const newLines = [];
  let currentBlock = [];
  let inBlock = false;
  let deletedCount = 0;
  let fixedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('{')) {
      inBlock = true;
      currentBlock = [line];
    } else if (inBlock) {
      currentBlock.push(line);
      if (line.trim().startsWith('}') || line.trim().startsWith('},')) {
        inBlock = false;
        const blockText = currentBlock.join('\n');
        const idMatch = blockText.match(/"id":\s*(\d+)/);
        const id = idMatch ? parseInt(idMatch[1]) : null;

        if (id && idsToDelete.has(id)) {
          deletedCount++;
          continue;
        }

        if (id && imageFixes[id]) {
          fixedCount++;
          const fixedBlock = blockText.replace(/"image":\s*"[^"]*"/, `"image": "${imageFixes[id]}"`);
          newLines.push(fixedBlock);
        } else {
          newLines.push(blockText);
        }
      }
    } else {
      newLines.push(line);
    }
  }

  let result = newLines.join('\n');
  // Clean trailing commas before closing array
  result = result.replace(/,\s*(\n\s*\];)/g, '$1');
  fs.writeFileSync('src/data/ultraBrasilProducts.ts', result, 'utf8');
  console.log(`[ultraBrasilProducts.ts] Deleted: ${deletedCount}, Images fixed: ${fixedCount}`);
}

// 2. UPDATE catalogExpanded.ts
{
  const idsToDelete = new Set([2038, 2039, 2043, 20491]);
  const content = fs.readFileSync('src/data/catalogExpanded.ts', 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let currentBlock = [];
  let inBlock = false;
  let deletedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('{')) {
      inBlock = true;
      currentBlock = [line];
    } else if (inBlock) {
      currentBlock.push(line);
      if (line.trim().startsWith('}') || line.trim().startsWith('},')) {
        inBlock = false;
        const blockText = currentBlock.join('\n');
        const idMatch = blockText.match(/id:\s*(\d+)/);
        const id = idMatch ? parseInt(idMatch[1]) : null;

        if (id && idsToDelete.has(id)) {
          deletedCount++;
          continue;
        }
        newLines.push(blockText);
      }
    } else {
      newLines.push(line);
    }
  }

  let result = newLines.join('\n');
  result = result.replace(/,\s*(\n\s*\];)/g, '$1');
  fs.writeFileSync('src/data/catalogExpanded.ts', result, 'utf8');
  console.log(`[catalogExpanded.ts] Deleted: ${deletedCount}`);
}

// 3. UPDATE products.ts
{
  const idsToDelete = new Set([2043, 1096085, 21107, 21114]);
  let content = fs.readFileSync('src/data/products.ts', 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let currentBlock = [];
  let inBlock = false;
  let deletedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('{')) {
      inBlock = true;
      currentBlock = [line];
    } else if (inBlock) {
      currentBlock.push(line);
      if (line.trim().startsWith('}') || line.trim().startsWith('},')) {
        inBlock = false;
        const blockText = currentBlock.join('\n');
        const idMatch = blockText.match(/id:\s*(\d+)/);
        const id = idMatch ? parseInt(idMatch[1]) : null;

        if (id && idsToDelete.has(id)) {
          deletedCount++;
          continue;
        }
        newLines.push(blockText);
      }
    } else {
      newLines.push(line);
    }
  }

  let result = newLines.join('\n');
  result = result.replace(/,\s*(\n\s*\];)/g, '$1');

  // Now apply specific name and size corrections to ensure 100% match with authentic packaging images:

  // Pampers Confort Sec XXG (image says XXG 88)
  result = result.replace(
    'name: "Fralda Pampers Confort Sec Tamanho XXG 84 Unidades",\n    size: "Tam XXG (84un)",',
    'name: "Fralda Pampers Confort Sec Tamanho XXG 88 Unidades",\n    size: "Tam XXG (88un)",'
  );
  result = result.replace(
    'Tamanho XXG indicado para bebês acima de 14kg com 84 unidades no pacote econômico.',
    'Tamanho XXG indicado para bebês acima de 14kg com 88 unidades no pacote econômico.'
  );

  // Pampers Pants XG (image says XG 64)
  result = result.replace(
    'name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XG 60 Unidades",\n    size: "Tam XG (60un)",',
    'name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XG 64 Unidades",\n    size: "Tam XG (64un)",'
  );
  result = result.replace(
    'Tamanho XG indicado para bebês de 12 a 15kg com 60 unidades.',
    'Tamanho XG indicado para bebês de 12 a 15kg com 64 unidades.'
  );

  // Pampers Pants XXG (image says XXG 74)
  result = result.replace(
    'name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XXG 54 Unidades",\n    size: "Tam XXG (54un)",',
    'name: "Fralda-Calça Pampers Pants Ajuste Total Tamanho XXG 74 Unidades",\n    size: "Tam XXG (74un)",'
  );
  result = result.replace(
    'Tamanho XXG indicado para bebês acima de 14kg com 54 unidades.',
    'Tamanho XXG indicado para bebês acima de 14kg com 74 unidades.'
  );

  // Huggies Natural Care P (image says 36 P)
  result = result.replace(
    'name: "Fralda Huggies Natural Care Tamanho P 48 Unidades",\n    size: "Tam P (48un)",',
    'name: "Fralda Huggies Natural Care Tamanho P 36 Unidades",\n    size: "Tam P (36un)",'
  );

  // Huggies Natural Care G (image says 66 G)
  result = result.replace(
    'name: "Fralda Huggies Natural Care Tamanho G 68 Unidades",\n    size: "Tam G (68un)",',
    'name: "Fralda Huggies Natural Care Tamanho G 66 Unidades",\n    size: "Tam G (66un)",'
  );
  result = result.replace(
    'Tamanho G para 9 a 12,5kg com 68 unidades.',
    'Tamanho G para 9 a 12,5kg com 66 unidades.'
  );

  // Huggies Natural Care XXG (image says 54 XXG)
  result = result.replace(
    'name: "Fralda Huggies Natural Care Tamanho XXG 52 Unidades",\n    size: "Tam XXG (52un)",',
    'name: "Fralda Huggies Natural Care Tamanho XXG 54 Unidades",\n    size: "Tam XXG (54un)",'
  );
  result = result.replace(
    'Tamanho XXG para bebês acima de 14kg com 52 unidades.',
    'Tamanho XXG para bebês acima de 14kg com 54 unidades.'
  );

  // Huggies Máxima Proteção (images are huggies_pants_m.jpg -> M 104, huggies_pants_g.jpg -> G 136, huggies_pants_xg.jpg -> XG 82, huggies_pants_xxg.jpg -> XXG 80)
  result = result.replace(
    'name: "Fralda Calça Huggies Proteção Acolchoada Tamanho M 68 Unidades",\n    size: "Tam M (68un)",',
    'name: "Fralda Huggies Máxima Proteção Tamanho M 104 Unidades",\n    size: "Tam M (104un)",'
  );
  result = result.replace(
    'Tamanho M para 7 a 10kg com 68 unidades.',
    'Tamanho M para 5,5 a 9,5kg com 104 unidades.'
  );

  result = result.replace(
    'name: "Fralda Calça Huggies Proteção Acolchoada Tamanho G 60 Unidades",\n    size: "Tam G (60un)",',
    'name: "Fralda Huggies Máxima Proteção Tamanho G 136 Unidades",\n    size: "Tam G (136un)",'
  );
  result = result.replace(
    'Tamanho G para 9 a 12,5kg com 60 fraldas no pacote econômico.',
    'Tamanho G para 9 a 12,5kg com 136 fraldas no pacote econômico.'
  );

  result = result.replace(
    'name: "Fralda Calça Huggies Proteção Acolchoada Tamanho XG 80 Unidades",\n    size: "Tam XG (80un)",',
    'name: "Fralda Huggies Máxima Proteção Tamanho XG 82 Unidades",\n    size: "Tam XG (82un)",'
  );
  result = result.replace(
    'Tamanho XG para 12 a 15kg com 80 fraldas no pacote econômico.',
    'Tamanho XG para 12 a 15kg com 82 fraldas no pacote econômico.'
  );

  result = result.replace(
    'name: "Fralda Calça Huggies Proteção Acolchoada Tamanho XXG 72 Unidades",\n    size: "Tam XXG (72un)",',
    'name: "Fralda Huggies Máxima Proteção Tamanho XXG 80 Unidades",\n    size: "Tam XXG (80un)",'
  );
  result = result.replace(
    'Tamanho XXG para bebês acima de 14kg com 72 unidades.',
    'Tamanho XXG para bebês de 14 a 20kg com 80 unidades no pacote econômico.'
  );

  // Babysec XG (image says 56 XG)
  result = result.replace(
    'name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XG 52 Unidades",\n    size: "52un (XG)",',
    'name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XG 56 Unidades",\n    size: "56un (XG)",'
  );
  result = result.replace(
    'Tamanho XG indicado para 11 a 14kg com 52 unidades.',
    'Tamanho XG indicado para 11 a 14kg com 56 unidades.'
  );

  // Babysec XXG (image says 48 XXG)
  result = result.replace(
    'name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XXG 46 Unidades",\n    size: "46un (XXG)",',
    'name: "Fralda Babysec Ultrasec Galinha Pintadinha Hiper XXG 48 Unidades",\n    size: "48un (XXG)",'
  );
  result = result.replace(
    'Tamanho XXG indicado para bebês acima de 13kg com 46 unidades.',
    'Tamanho XXG indicado para bebês acima de 13kg com 48 unidades.'
  );

  // Pom Pom M (image says M 28)
  result = result.replace(
    'name: "Fralda Pom Pom Protek Proteção de Mãe M 48 Unidades",\n    size: "48un (M)",',
    'name: "Fralda Pom Pom Protek Proteção de Mãe M 28 Unidades",\n    size: "28un (M)",'
  );
  result = result.replace(
    'Tamanho M indicado para 4 a 9kg com 48 unidades.',
    'Tamanho M indicado para 4 a 9kg com 28 unidades.'
  );

  // Pom Pom G (image says G 24)
  result = result.replace(
    'name: "Fralda Pom Pom Protek Proteção de Mãe G 42 Unidades",\n    size: "42un (G)",',
    'name: "Fralda Pom Pom Protek Proteção de Mãe G 24 Unidades",\n    size: "24un (G)",'
  );

  // Pom Pom XG (image says XG 20)
  result = result.replace(
    'name: "Fralda Pom Pom Protek Proteção de Mãe XG 38 Unidades",\n    size: "38un (XG)",',
    'name: "Fralda Pom Pom Protek Proteção de Mãe XG 20 Unidades",\n    size: "20un (XG)",'
  );
  result = result.replace(
    'Tamanho XG indicado para 12 a 15kg com 38 unidades.',
    'Tamanho XG indicado para 12 a 15kg com 20 unidades.'
  );

  // Pom Pom XXG (image says XXG 18)
  result = result.replace(
    'name: "Fralda Pom Pom Protek Proteção de Mãe XXG 32 Unidades",\n    size: "32un (XXG)",',
    'name: "Fralda Pom Pom Protek Proteção de Mãe XXG 18 Unidades",\n    size: "18un (XXG)",'
  );
  result = result.replace(
    'Tamanho XXG indicado para bebês acima de 14kg com 32 unidades.',
    'Tamanho XXG indicado para bebês de 14 a 18kg com 18 unidades.'
  );

  // MamyPoko P (image says P 22)
  result = result.replace(
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite P 50 Unidades",\n    size: "50un (P)",',
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite P 22 Unidades",\n    size: "22un (P)",'
  );
  result = result.replace(
    'Tamanho P indicado para 4 a 8kg com 50 unidades.',
    'Tamanho P indicado para 3 a 9kg com 22 unidades.'
  );

  // MamyPoko M (image says M 18)
  result = result.replace(
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite M 68 Unidades",\n    size: "68un (M)",',
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite M 18 Unidades",\n    size: "18un (M)",'
  );
  result = result.replace(
    'Tamanho M indicado para 6 a 11kg com 68 unidades.',
    'Tamanho M indicado para 7 a 10kg com 18 unidades.'
  );

  // MamyPoko G (image says G 30)
  result = result.replace(
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite Giga G 60 Unidades",\n    size: "60un (G)",',
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite G 30 Unidades",\n    size: "30un (G)",'
  );

  // MamyPoko XG (image says XG 26)
  result = result.replace(
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite XG 50 Unidades",\n    size: "50un (XG)",',
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite XG 26 Unidades",\n    size: "26un (XG)",'
  );
  result = result.replace(
    'Tamanho XG indicado para 12 a 17kg com 50 unidades.',
    'Tamanho XG indicado para 12 a 17kg com 26 unidades.'
  );

  // MamyPoko XXG (image says XXG 22)
  result = result.replace(
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite XXG 42 Unidades",\n    size: "42un (XXG)",',
    'name: "Fralda MamyPoko Fralda-Calça Dia e Noite XXG 22 Unidades",\n    size: "22un (XXG)",'
  );
  result = result.replace(
    'Tamanho XXG indicado para bebês de 15 a 26kg com 42 unidades.',
    'Tamanho XXG indicado para bebês de 15 a 26kg com 22 unidades.'
  );

  fs.writeFileSync('src/data/products.ts', result, 'utf8');
  console.log(`[products.ts] Deleted: ${deletedCount}, text and size fixes applied`);
}

// 4. UPDATE ProductPage.tsx
{
  let content = fs.readFileSync('src/components/ProductPage/ProductPage.tsx', 'utf8');

  // Huggies variants (remove P)
  content = content.replace(
    `      familySizes = [
        { code: 'P', id: 1096085, label: 'P' },
        { code: 'M', id: 1096086, label: 'M' },
        { code: 'G', id: 1096087, label: 'G' },
        { code: 'XG', id: 1096088, label: 'XG' },
        { code: 'XXG', id: 1096089, label: 'XXG' },
      ];`,
    `      familySizes = [
        { code: 'M', id: 1096086, label: 'M' },
        { code: 'G', id: 1096087, label: 'G' },
        { code: 'XG', id: 1096088, label: 'XG' },
        { code: 'XXG', id: 1096089, label: 'XXG' },
      ];`
  );

  // Babysec variants (remove P)
  content = content.replace(
    `      familySizes = [
        { code: 'P', id: 21107, label: 'P' },
        { code: 'M', id: 21108, label: 'M' },
        { code: 'G', id: 1109, label: 'G' },
        { code: 'XG', id: 21112, label: 'XG' },
        { code: 'XXG', id: 21113, label: 'XXG' },
      ];`,
    `      familySizes = [
        { code: 'M', id: 21108, label: 'M' },
        { code: 'G', id: 1109, label: 'G' },
        { code: 'XG', id: 21112, label: 'XG' },
        { code: 'XXG', id: 21113, label: 'XXG' },
      ];`
  );

  // Pom Pom variants (remove P)
  content = content.replace(
    `      familySizes = [
        { code: 'P', id: 21114, label: 'P' },
        { code: 'M', id: 21115, label: 'M' },
        { code: 'G', id: 1110, label: 'G' },
        { code: 'XG', id: 21116, label: 'XG' },
        { code: 'XXG', id: 21117, label: 'XXG' },
      ];`,
    `      familySizes = [
        { code: 'M', id: 21115, label: 'M' },
        { code: 'G', id: 1110, label: 'G' },
        { code: 'XG', id: 21116, label: 'XG' },
        { code: 'XXG', id: 21117, label: 'XXG' },
      ];`
  );

  fs.writeFileSync('src/components/ProductPage/ProductPage.tsx', content, 'utf8');
  console.log('[ProductPage.tsx] Updated size variant lists');
}

console.log('=== All files updated successfully ===');
