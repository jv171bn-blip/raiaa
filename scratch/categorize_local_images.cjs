const fs = require('fs');

const files = JSON.parse(fs.readFileSync('scratch/local_images_list.json', 'utf8'));

function findFiles(keywords) {
  return files.filter(f => keywords.some(k => f.toLowerCase().includes(k.toLowerCase())));
}

console.log('--- MEDICAMENTOS TOP ---');
console.log(findFiles(['dorflex', 'neosaldina', 'novalgina', 'dipirona', 'tylenol', 'buscopan', 'torsilax', 'benegrip', 'omeprazol', 'losartana', 'vick', 'enterogermina', 'luftal', 'coristina', 'resfenol', 'aspirina', 'allegra', 'floratil', 'simeticona']));

console.log('--- HOMEM TOP ---');
console.log(findFiles(['gillette', 'rexona', 'tadalafila', 'cialis', 'minoxidil', 'clear', 'doctar', 'cetoconazol', 'herbissimo', 'bozzano', 'old_spice', 'centrum']));

console.log('--- MULHER / DERMO / CABELOS TOP ---');
console.log(findFiles(['cerave', 'principia', 'laroche', 'anthelios', 'cicaplast', 'effaclar', 'eucerin', 'isdin', 'biore', 'bioderma', 'cetaphil', 'nivea', 'elseve', 'pantene', 'dove', 'wella', 'truss', 'dermacyd', 'always', 'intimus', 'neosil', 'carmed', 'medicube', 'skin1004', 'curel', 'hada']));

console.log('--- BEBÊ TOP ---');
console.log(findFiles(['pampers', 'huggies', 'babysec', 'mamypoko', 'aptamil', 'nan', 'ninho', 'mucilon', 'desitin', 'hipoglos', 'bepantol', 'chupeta', 'mamadeira', 'lencos']));

console.log('--- SAÚDE / EQUIPAMENTOS TOP ---');
console.log(findFiles(['omron', 'accuchek', 'freestyle', 'gtech', 'clearblue', 'termometro', 'bandaid', 'curativo', 'creatina', 'addera']));
