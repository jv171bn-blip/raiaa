import React from 'react';
import { Product, isCosmeticOrPersonalCare } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { handleImageError } from '../../utils/imageFallback';
import './ProductCard.css';

interface Props {
  product: Product;
}

const StarRating: React.FC<{ rating?: number; reviews?: number }> = ({ rating, reviews }) => {
  const hasReviews = reviews !== undefined && reviews > 0;
  if (!hasReviews || !rating) return null;

  const numStars = Math.min(5, Math.max(0, rating));
  const fullStars = Math.floor(numStars);
  const hasHalf = numStars % 1 >= 0.5;

  return (
    <div className="product-card__stars">
      {Array.from({ length: 5 }, (_, i) => {
        const isFilled = i < fullStars || (i === fullStars && hasHalf);
        return (
          <svg
            key={i}
            width="12.5"
            height="12.5"
            viewBox="0 0 24 24"
            fill={isFilled ? '#ffa100' : '#e8e8e8'}
            style={{ flexShrink: 0 }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
      <span className="product-card__reviews">({reviews})</span>
    </div>
  );
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { goToProductPage } = useCart();

  const isDiaper = (product.name || '').toLowerCase().includes('fralda') || (product.subcategory || '').toLowerCase().includes('fraldas');
  const displayOptions = isDiaper ? 5 : product.options;

  return (
    <div
      className="product-card"
      id={`product-card-${product.id}`}
      onClick={() => goToProductPage(product)}
      role="button"
      tabIndex={0}
      title={`Ver página do produto ${product.name}`}
    >
      {/* 1. Imagem no topo */}
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
          onError={(e) => handleImageError(e, product)}
        />
      </div>

      {/* 2. Badges e Opções empilhadas abaixo da imagem */}
      <div className="product-card__meta-tags">
        {displayOptions ? (
          <span className="product-card__badge-options">{displayOptions} opções</span>
        ) : null}

        {product.discount ? (
          <span className="product-card__badge-discount">↓ {product.discount}%</span>
        ) : null}

        {product.badges?.map((badge, i) => {
          if (badge === 'Patrocinado') return null;
          const isSorte = badge.includes('nº da sorte');
          const isBlack = badge === 'Black do Dia';
          const isExclusivo = badge === 'Exclusivo';
          if (!isSorte && !isBlack && !isExclusivo) return null;
          return (
            <span
              key={i}
              className={`product-card__badge ${
                isSorte
                  ? 'product-card__badge--sorte'
                  : isBlack
                  ? 'product-card__badge--black'
                  : 'product-card__badge--exclusivo'
              }`}
            >
              {badge}
            </span>
          );
        })}
      </div>

      {/* 3. Título do Produto */}
      <p className="product-card__name">{product.name}</p>

      {/* 4. Tamanho / Quantidade (ex: 82un, 84un, 40ml) */}
      {product.size && (
        <span className="product-card__size">{product.size}</span>
      )}

      {/* 5. Avaliação por estrelas (Oculto para medicamentos e itens de saúde - ANVISA / Droga Raia) */}
      {isCosmeticOrPersonalCare(product) ? (
        <StarRating rating={product.rating || 4.8} reviews={product.reviews || 626} />
      ) : null}

      {/* 6. Preços e condições */}
      <div className="product-card__pricing">
        {product.consultStock ? (
          <div className="product-card__stock-consult">
            <span className="product-card__stock-title">Consulte o estoque</span>
            <span className="product-card__stock-subtitle">Disponibilidade vinculada ao seu CEP</span>
          </div>
        ) : (
          <>
            {product.oldPrice && (
              <span className="product-card__old-price">
                R$ {product.oldPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="product-card__price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.tierText && (
              <span className="product-card__tier-text">{product.tierText}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
