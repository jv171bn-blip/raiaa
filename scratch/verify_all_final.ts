import fs from 'fs';
import { ultraBrasilProducts } from '../src/data/ultraBrasilProducts';
import { generateHomepageRotatingData } from '../src/data/trendingProducts';
import { Product } from '../src/data/products';

console.log('========================================================');
console.log('1. VERIFICANDO ITENS ADICIONADOS');
console.log('========================================================');
console.log(`Total de produtos Ultra Brasil no catálogo: ${ultraBrasilProducts.length}`);

// 2. Verificar imagens no disco
let missingImages = 0;
let validImages = 0;
ultraBrasilProducts.forEach(p => {
  if (p.image && fs.existsSync('public' + p.image)) {
    const sz = fs.statSync('public' + p.image).size;
    if (sz > 1000) validImages++;
    else missingImages++;
  } else {
    missingImages++;
  }
});
console.log(`Imagens locais válidas no disco: ${validImages} / ${ultraBrasilProducts.length}`);
console.log(`Imagens faltando ou corrompidas: ${missingImages}`);

// 3. Simulação de rotação da página inicial
console.log('\n========================================================');
console.log('2. VERIFICANDO SEÇÕES DA PÁGINA INICIAL (SOMENTE NOVOS PRODUTOS)');
console.log('========================================================');

const homeData = generateHomepageRotatingData([], []);

const ultraIdSet = new Set(ultraBrasilProducts.map(p => p.id));

function auditSection(name: string, list: Product[]) {
  let allFromUltra = true;
  let nonAllowedDiapers = 0;
  let mismatches = 0;

  list.forEach(p => {
    if (!ultraIdSet.has(p.id)) {
      allFromUltra = false;
      console.log(`[ALERTA] Produto fora da lista Ultra: ${p.name} (id: ${p.id})`);
    }
    const n = p.name.toLowerCase();
    const img = p.image.toLowerCase();
    if (n.includes('fralda') || n.includes('pants')) {
      if (img.includes('creme') || img.includes('locao') || img.includes('cetaphil')) {
        mismatches++;
      }
      if (n.includes('tam xg') || n.includes('tam xxg') || n.includes('tam p')) {
        nonAllowedDiapers++;
      }
    }
  });

  console.log(`Seção "${name}": ${list.length} produtos | 100% da lista Ultra: ${allFromUltra} | Fraldas M/G válidas: ${nonAllowedDiapers === 0} | Erros de imagem: ${mismatches}`);
}

auditSection('Mais Comprados', homeData.maisComprados);
auditSection('Black do Dia', homeData.blackDoDia);
auditSection('Destaques da Semana', homeData.destaquesSemana);
auditSection('Marcas Favoritas', homeData.marcasFavoritas);
auditSection('Beleza Asiática / Premium', homeData.belezaAsiatica);

console.log('\n========================================================');
console.log('3. AMOSTRA DOS PRODUTOS RENDERIZADOS NA HOME');
console.log('========================================================');
console.log('--- MAIS COMPRADOS ---');
homeData.maisComprados.slice(0, 5).forEach((p, i) => console.log(`  ${i + 1}. ${p.name} - R$ ${p.price} [${p.image}]`));

console.log('--- BLACK DO DIA (COM DESCONTO) ---');
homeData.blackDoDia.slice(0, 5).forEach((p, i) => console.log(`  ${i + 1}. ${p.name} - R$ ${p.price} (de R$ ${p.oldPrice}) [${p.image}]`));

console.log('--- DESTAQUES DA SEMANA ---');
homeData.destaquesSemana.slice(0, 5).forEach((p, i) => console.log(`  ${i + 1}. ${p.name} - R$ ${p.price} [${p.image}]`));

console.log('--- MARCAS FAVORITAS ---');
homeData.marcasFavoritas.slice(0, 5).forEach((p, i) => console.log(`  ${i + 1}. ${p.name} - R$ ${p.price} [${p.image}]`));

console.log('--- BELEZA & MAQUIAGEM ---');
homeData.belezaAsiatica.slice(0, 5).forEach((p, i) => console.log(`  ${i + 1}. ${p.name} - R$ ${p.price} [${p.image}]`));

console.log('\nAUDITORIA COMPLETA CONCLUÍDA COM SUCESSO!');
