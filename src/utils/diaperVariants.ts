import { Product } from '../data/products';

export interface DiaperOffer {
  id: number;
  product: Product;
  units: number;
  unitsLabel: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  unitPrice: number;
  unitPriceFormatted: string;
  badge?: string;
  isBestValue?: boolean;
}

export interface DiaperFamilyInfo {
  isDiaper: boolean;
  familyKey: string;
  availableSizes: string[];
  sizesMap: Record<string, DiaperOffer[]>;
  currentSize: string;
  currentUnits: number;
  currentOffers: DiaperOffer[];
}

export const parseDiaperSize = (name: string, sizeStr?: string): string => {
  const u = (name + ' ' + (sizeStr || '')).toUpperCase();
  if (/\bXXXG\b/.test(u)) return 'XXXG';
  if (/\bXXG\b/.test(u)) return 'XXG';
  if (/\bXG\b/.test(u)) return 'XG';
  if (/\bG\b/.test(u)) return 'G';
  if (/\bM\b/.test(u)) return 'M';
  if (/\bP\b/.test(u)) return 'P';
  if (/\bRN\b/.test(u)) return 'RN';
  return 'G';
};

export const parseDiaperUnits = (name: string, sizeStr?: string): number => {
  const m = (name + ' ' + (sizeStr || '')).match(/(\d+)\s*(?:unidades?|un|fraldas?)/i);
  return m ? parseInt(m[1], 10) : 0;
};

export function getDiaperFamilyInfo(product: Product, allProducts: Product[]): DiaperFamilyInfo | null {
  if (!product || !product.name) return null;
  const pName = product.name.toLowerCase();
  const isDiaper = pName.includes('fralda') || (product.subcategory || '').toLowerCase().includes('fraldas');
  if (!isDiaper) return null;

  let familyKey = '';
  if (pName.includes('pampers') && pName.includes('confort sec')) familyKey = 'pampers_confort_sec';
  else if (pName.includes('pampers') && (pName.includes('pants') || pName.includes('calça'))) familyKey = 'pampers_pants';
  else if (pName.includes('pampers') && pName.includes('premium care')) familyKey = 'pampers_premium_care';
  else if (pName.includes('huggies') && pName.includes('natural care')) familyKey = 'huggies_natural_care';
  else if (pName.includes('huggies')) familyKey = 'huggies_other';
  else if (pName.includes('babysec')) familyKey = 'babysec';
  else if (pName.includes('pom pom') || pName.includes('pompom')) familyKey = 'pompom';
  else if (pName.includes('mamypoko') || pName.includes('mamy poko')) familyKey = 'mamypoko';
  else if (product.brand) familyKey = product.brand.toLowerCase().replace(/\s+/g, '_');
  else familyKey = 'other_diapers';

  // Filter all products matching this diaper family
  const familyProducts = allProducts.filter(p => {
    if (!p || !p.name) return false;
    const n = p.name.toLowerCase();
    if (!n.includes('fralda') && !(p.subcategory || '').toLowerCase().includes('fraldas')) return false;

    if (familyKey === 'pampers_confort_sec') return n.includes('pampers') && n.includes('confort sec');
    if (familyKey === 'pampers_pants') return n.includes('pampers') && (n.includes('pants') || n.includes('calça'));
    if (familyKey === 'pampers_premium_care') return n.includes('pampers') && n.includes('premium care');
    if (familyKey === 'huggies_natural_care') return n.includes('huggies') && n.includes('natural care');
    if (familyKey === 'huggies_other') return n.includes('huggies') && !n.includes('natural care');
    if (familyKey === 'babysec') return n.includes('babysec');
    if (familyKey === 'pompom') return n.includes('pom pom') || n.includes('pompom');
    if (familyKey === 'mamypoko') return n.includes('mamypoko') || n.includes('mamy poko');
    return (p.brand || '').toLowerCase() === (product.brand || '').toLowerCase();
  });

  const sizeOrder = ['RN', 'P', 'M', 'G', 'XG', 'XXG', 'XXXG'];
  const rawSizesMap: Record<string, { product: Product; units: number; price: number }[]> = {};

  familyProducts.forEach(prod => {
    const size = parseDiaperSize(prod.name, prod.size);
    const units = parseDiaperUnits(prod.name, prod.size);
    if (!rawSizesMap[size]) rawSizesMap[size] = [];
    rawSizesMap[size].push({
      product: prod,
      units,
      price: prod.price
    });
  });

  const sizesMap: Record<string, DiaperOffer[]> = {};

  for (const s of Object.keys(rawSizesMap)) {
    // Deduplicate by package units, keeping lowest price or the currently viewed product if it matches units
    const byUnits: Record<number, Product> = {};
    rawSizesMap[s].forEach(item => {
      const u = item.units;
      if (!byUnits[u]) {
        byUnits[u] = item.product;
      } else {
        // If current product matches, keep current product
        if (item.product.id === product.id) {
          byUnits[u] = item.product;
        } else if (byUnits[u].id !== product.id && item.product.price < byUnits[u].price) {
          byUnits[u] = item.product;
        }
      }
    });

    const offers: DiaperOffer[] = Object.values(byUnits).map(prod => {
      const units = parseDiaperUnits(prod.name, prod.size);
      const unitPrice = units > 0 ? prod.price / units : prod.price;
      return {
        id: prod.id,
        product: prod,
        units,
        unitsLabel: units > 0 ? `${units} unidades` : (prod.size || 'Pacote'),
        price: prod.price,
        oldPrice: prod.oldPrice,
        discount: prod.discount,
        image: prod.image,
        unitPrice,
        unitPriceFormatted: `R$ ${unitPrice.toFixed(2).replace('.', ',')}/tira`,
        badge: prod.badges?.[0] || (prod.discount ? `-${prod.discount}%` : '')
      };
    });

    // Sort by units ascending
    offers.sort((a, b) => a.units - b.units);

    // If more than 1 offer, mark the lowest unitPrice as "Mais Econômico"
    if (offers.length > 1) {
      let minUnit = Infinity;
      offers.forEach(o => {
        if (o.unitPrice < minUnit) minUnit = o.unitPrice;
      });
      offers.forEach(o => {
        if (Math.abs(o.unitPrice - minUnit) < 0.001) {
          o.badge = o.badge || 'Mais Econômico';
          o.isBestValue = true;
        }
      });
    }

    sizesMap[s] = offers;
  }

  const availableSizes = sizeOrder.filter(s => sizesMap[s] && sizesMap[s].length > 0);
  const currentSize = parseDiaperSize(product.name, product.size);
  const currentUnits = parseDiaperUnits(product.name, product.size);

  return {
    isDiaper: true,
    familyKey,
    availableSizes,
    sizesMap,
    currentSize,
    currentUnits,
    currentOffers: sizesMap[currentSize] || []
  };
}
