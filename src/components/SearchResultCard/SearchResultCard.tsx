import React, { useState } from 'react';
import { MoreVertical, Check } from 'lucide-react';
import { Product, isCosmeticOrPersonalCare } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { handleImageError } from '../../utils/imageFallback';
import './SearchResultCard.css';

interface SearchResultCardProps {
  product: Product;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ product }) => {
  const { addToCart, goToProductPage, openQuickView } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  // Determine subtitle: active ingredient if available, or first token of composition, or brand
  const subtitle = product.activeIngredient || (
    product.composition ? product.composition.split(',')[0].split('.')[0] : product.brand
  );
  const isDiaper = (product.name || '').toLowerCase().includes('fralda') || (product.subcategory || '').toLowerCase().includes('fraldas');
  const displayOptions = isDiaper ? 5 : product.options;

  return (
    <article
      className="search-card"
      onClick={() => goToProductPage(product)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          goToProductPage(product);
        }
      }}
    >
      {/* Left Column: 3 dots, Green discount pill, Image, Options button */}
      <div className="search-card__left">
        <div className="search-card__top-bar">
          <button
            type="button"
            className="search-card__more-btn"
            onClick={handleMoreClick}
            aria-label="Mais opções"
            title="Mais opções"
          >
            <MoreVertical size={18} />
          </button>

          {product.discount && product.discount > 0 ? (
            <span className="search-card__discount-badge">
              <span className="search-card__arrow">↓</span> {product.discount}%
            </span>
          ) : (
            <span className="search-card__badge-spacer" />
          )}
        </div>

        <div className="search-card__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="search-card__image"
            loading="lazy"
            onError={(e) => handleImageError(e, product)}
          />
        </div>

        {displayOptions && displayOptions > 1 ? (
          <div className="search-card__options-badge">
            {displayOptions} opções
          </div>
        ) : (
          <div className="search-card__options-placeholder" />
        )}
      </div>

      {/* Right Column: Title, Subtitle, Size, Old Price, Current Price, Comprar */}
      <div className="search-card__right">
        <div className="search-card__info-group">
          <h2 className="search-card__title" title={product.name}>
            {product.name}
          </h2>

          {subtitle && (
            <p className="search-card__substance">
              {subtitle}
            </p>
          )}

          {product.size && (
            <p className="search-card__size">
              {product.size}
            </p>
          )}

          {isCosmeticOrPersonalCare(product) && (
            <div className="search-card__stars-row">
              <div className="search-card__stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#ffa100" style={{ flexShrink: 0 }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="search-card__reviews-count">({product.reviews || 626})</span>
            </div>
          )}
        </div>

        <div className="search-card__price-group">
          {product.oldPrice && product.oldPrice > product.price && (
            <span className="search-card__old-price">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          )}

          <div className="search-card__current-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </div>

          <button
            type="button"
            className={`search-card__buy-btn ${isAdded ? 'search-card__buy-btn--added' : ''}`}
            onClick={handleBuy}
          >
            {isAdded ? (
              <>
                <Check size={16} /> Adicionado
              </>
            ) : (
              'Comprar'
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SearchResultCard;
