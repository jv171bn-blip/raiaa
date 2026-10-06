import { Product } from './products';

export interface SuggestionItem {
  id: number;
  name: string;
  partner: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
  image: string;
  inStock: boolean;
  link?: string;
}

export const suggestionsData: SuggestionItem[] = [
  {
    id: 1318855,
    name: 'Skinceuticals P-tiox Sérum Antirrugas 30ml',
    partner: 'Loja parceira Raia',
    discount: 11,
    oldPrice: 525.50,
    price: 469.90,
    rating: 4.5,
    reviews: 6,
    image: 'https://product-data.raiadrogasil.io/images/15416030.webp',
    inStock: true,
  },
  {
    id: 841965,
    name: 'Papel Depilatório Santa Clara 10fls',
    partner: 'Loja parceira Raia',
    price: 3.77,
    rating: 0,
    reviews: 0,
    image: 'https://product-data.raiadrogasil.io/images/4644087.webp',
    inStock: true,
  },
  {
    id: 1207394,
    name: 'Hidratante Labotrat Rosto e Corpo Capim-limão Dia a Dia 190ml',
    partner: 'Loja parceira Raia',
    price: 0,
    rating: 0,
    reviews: 0,
    image: '/suggestions/labotrat_capim_limao.jpg',
    inStock: false,
  },
  {
    id: 1246579,
    name: 'Água Micelar Prebiótica + Mousse Micelar Limpa E Demaquila',
    partner: 'Loja parceira Raia',
    discount: 0,
    oldPrice: 118.81,
    price: 118.80,
    rating: 4.5,
    reviews: 19,
    image: '/suggestions/agua_micelar_prebiotica.jpg',
    inStock: true,
  },
  {
    id: 1481580,
    name: 'Victorias Secret Cashmere Fleur - Body Splash 250Ml',
    partner: 'Loja parceira Raia',
    discount: 17,
    oldPrice: 209.00,
    price: 174.00,
    rating: 0,
    reviews: 0,
    image: '/suggestions/victorias_secret_cashmere.jpg',
    inStock: true,
  },
  {
    id: 1356794,
    name: 'Kit Lonkoom Beauty Edp 100ml + Body Splash Beauty 250ml',
    partner: 'Loja parceira Raia',
    discount: 7,
    oldPrice: 239.97,
    price: 223.17,
    rating: 0,
    reviews: 0,
    image: '/suggestions/kit_lonkoom_beauty.jpg',
    inStock: true,
  },
];

export const suggestionProducts: Product[] = suggestionsData.map(item => ({
  id: item.id,
  name: item.name,
  size: '1 unidade',
  price: item.price,
  oldPrice: item.oldPrice,
  discount: item.discount,
  rating: item.rating,
  reviews: item.reviews,
  image: item.image,
  brand: item.partner,
  consultStock: !item.inStock,
}));
