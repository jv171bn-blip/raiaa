import React, { useRef } from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../data/products';
import './SuggestionsCarousel.css';

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

const SuggestionsCarousel: React.FC = () => {
  const { addToCart, goToProductPage } = useCart();
  const trackRef = useRef<HTMLDivElement>(null);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleCardClick = (item: SuggestionItem) => {
    // Map to a Product object so product page works
    const prod: Product = {
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
    };
    goToProductPage(prod);
  };

  const handleAddClick = (e: React.MouseEvent, item: SuggestionItem) => {
    e.stopPropagation();
    if (!item.inStock) return;
    const prod: Product = {
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
    };
    addToCart(prod, 1);
  };

  return (
    <section className="suggestions-section" id="section-sugestoes" aria-label="Sugestões para você">
      <div className="suggestions-container">
        <h2 className="suggestions-title">Sugestões para você</h2>
        <div className="suggestions-track" ref={trackRef}>
          {suggestionsData.map(item => (
            <div
              key={item.id}
              className="suggestion-card"
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              id={`suggestion-card-${item.id}`}
            >
              {/* Top Discount Badge */}
              <div className="suggestion-card__badge-wrap">
                {typeof item.discount === 'number' && (
                  <span className="suggestion-card__badge">
                    ↓ {item.discount}%
                  </span>
                )}
              </div>

              {/* Product Image & Floating Add Button */}
              <div className="suggestion-card__img-area">
                <img
                  src={item.image}
                  alt={item.name}
                  className="suggestion-card__img"
                  loading="lazy"
                />
                {item.inStock && (
                  <button
                    className="suggestion-card__add-btn"
                    onClick={(e) => handleAddClick(e, item)}
                    title={`Adicionar ${item.name} ao carrinho`}
                    aria-label={`Adicionar ${item.name} ao carrinho`}
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </button>
                )}
              </div>

              {/* Title & Partner */}
              <h3 className="suggestion-card__name" title={item.name}>
                {item.name}
              </h3>
              <p className="suggestion-card__partner">{item.partner}</p>

              {/* Rating */}
              <div className="suggestion-card__rating">
                {item.reviews && item.reviews > 0 ? (
                  <>
                    <div className="suggestion-card__stars suggestion-card__stars--active">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          size={13}
                          fill={star <= (item.rating || 4) ? '#f59e0b' : 'none'}
                          stroke={star <= (item.rating || 4) ? '#f59e0b' : '#d1d5db'}
                        />
                      ))}
                    </div>
                    <span className="suggestion-card__review-count">({item.reviews})</span>
                  </>
                ) : (
                  <div className="suggestion-card__stars suggestion-card__stars--empty">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={13} fill="none" stroke="#d1d5db" />
                    ))}
                  </div>
                )}
              </div>

              {/* Price Area */}
              <div className="suggestion-card__price-area">
                {item.inStock ? (
                  <>
                    {item.oldPrice && (
                      <span className="suggestion-card__old-price">
                        R$ {formatPrice(item.oldPrice)}
                      </span>
                    )}
                    <span className="suggestion-card__price">
                      R$ {formatPrice(item.price)}
                    </span>
                  </>
                ) : (
                  <div className="suggestion-card__out-of-stock-box">
                    <span className="suggestion-card__out-of-stock">Sem estoque</span>
                    <button
                      className="suggestion-card__notify-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Você será avisado assim que o produto estiver disponível!');
                      }}
                    >
                      Receber aviso quando disponível?
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestionsCarousel;
