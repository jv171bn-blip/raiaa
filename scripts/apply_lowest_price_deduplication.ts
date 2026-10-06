import fs from 'fs';

// Let's load the source files and see which ones contain the IDs to remove
const redundantItemsToRemove = [
  // Wella Invigo Nutri-Enrich 1L: keep 60051 (R$ 94.98), remove 60020 (R$ 185.68) and 60125 (R$ 180.49)
  60020,
  60125,

  // Dove Bond Intense Repair: keep 60004 (R$ 17.91), remove 60030 (R$ 28.49)
  60030,

  // Eudora Siàge Hair Plastia: keep 60037 (R$ 20.41), remove 60034 (R$ 82.64)
  60034,

  // Dolce Pet: keep 60011 (R$ 154.87), remove 60039 (R$ 154.87)
  60039,

  // Siàge DermoHair: keep 60014 (R$ 39.90), remove 60045 (R$ 56.75)
  60045,

  // Braé Divine Duo: keep 60001 (R$ 40.70), remove 60080 (R$ 47.34)
  60080,

  // Kérastase Genesis Deux / Duo: keep 60112 (R$ 210.40), remove 60105 (R$ 221.93)
  60105,

  // Kérastase Genesis Trois / Trio: keep 60114 (R$ 381.62), remove 60111 (R$ 381.83)
  60111,

  // Elseve Reparação Total 5: keep 60056 (R$ 17.05), remove 60033 (R$ 19.82)
  60033,

  // Imecap Hair: keep 60159 (R$ 33.61), remove 60126 (R$ 75.14)
  60126,

  // Goot Wood Barba: keep 60043 (R$ 48.35), remove 60024 (R$ 79.70) and 60017 (R$ 83.50)
  60024,
  60017,

  // Sucupira Amazonleve: keep 60108 (R$ 25.16), remove 60104 (R$ 72.11)
  60104,

  // CeraVe Loção 473ml: keep 1305 (R$ 89.90), remove 11013 (R$ 99.90) and 50110 (R$ 89.90)
  11013,
  50110,

  // Cicaplast Baume B5+ 40ml: keep 1303 (R$ 36.00), remove 11012 (R$ 79.90)
  11012,

  // Dorflex 36 comprimidos: keep 1201 (R$ 25.99), remove 2016 (R$ 36.90)
  2016,

  // Novalgina 20 comprimidos: keep 1204 (R$ 34.90), remove 11003 (R$ 34.99)
  11003,

  // Buscopan Composto 20 comp: keep 1208 (R$ 23.90), remove 11005 (R$ 23.90)
  11005,

  // Enterogermina 10x 5ml: keep 1212 (R$ 49.90), remove 11006 (R$ 51.99)
  11006,

  // Hyabak 10ml: keep 1213 (R$ 59.90), remove 14951 (R$ 74.50)
  14951,

  // Eucerin Dual Sérum 30ml: keep 1308 (R$ 219.90), remove 11016 (R$ 260.61)
  11016,

  // Ninho Fases 1+ 800g: keep 11015 (R$ 42.99), remove 1112 (R$ 44.90) and 20490 (R$ 44.90)
  1112,
  20490,

  // Vitergan Zinco 30 comp: keep 603 (R$ 110.00), remove 140081 (R$ 119.90)
  140081,

  // Listerine Cool Mint 500ml: keep 116 (R$ 21.90), remove 1501 (R$ 22.90)
  1501,

  // Needs FPS 70 40g: keep 109 (R$ 31.49), remove 2031 (R$ 42.90)
  2031,

  // Actine 400g: keep 115 (R$ 48.59), remove 2028 (R$ 74.90)
  2028,

  // SkinCeuticals P-tiox 30ml: keep 1307 (R$ 469.90), remove 1318855 (R$ 469.90)
  1318855,

  // Bepantol Derma 40g: keep 50191 (R$ 35.99), remove 50192 (R$ 45.58)
  50192,

  // Babysec G 60un: keep 50270 (R$ 47.61), remove 50271 (R$ 47.94) and 1109 (R$ 69.90)
  50271,
  1109,

  // Too Faced Chocolate Soleil: keep 50096 (R$ 162.80), remove 50099 (R$ 175.45)
  50099,

  // Eximia Fortalize 30 comp: keep 50247 (R$ 76.44), remove 50251 (R$ 198.29)
  50251,

  // Sephora Best Skin Ever corretivo: keep 50146 (R$ 63.25), remove 50149 (R$ 63.25)
  50149,
];

console.log('Total IDs to remove:', redundantItemsToRemove.length);

// Also update 60051 title to be the full, clean title:
// "Kit Wella Professionals Invigo Nutri Enrich – Shampoo 1000ml + Condicionador 1000ml"
// so it is complete, with its lowest price R$ 94.98 preserved!
console.log('Update planned for ID 60051 (Wella Invigo Nutri Enrich 1L kit at lowest price R$ 94.98)');
