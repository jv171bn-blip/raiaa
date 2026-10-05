import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductCarousel.css';

interface Props {
  title: string;
  products: Product[];
  id?: string;
}

const ProductCarousel: React.FC<Props> = ({ title, products, id }) => {
  const { goToAllProductsPage } = useCart();
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const CARD_WIDTH = 207; // 195px card + 12px gap

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [products]);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = CARD_WIDTH * 2.5;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  return (
    <section className="product-carousel" id={id}>
      <div className="product-carousel__header">
        <h2 className="product-carousel__title">{title}</h2>
        <div className="product-carousel__arrows">
          <button
            className={`carousel-arrow${atStart ? ' carousel-arrow--disabled' : ''}`}
            onClick={() => scroll('left')}
            disabled={atStart}
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className={`carousel-arrow${atEnd ? ' carousel-arrow--disabled' : ''}`}
            onClick={() => scroll('right')}
            disabled={atEnd}
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        className="product-carousel__track"
        ref={trackRef}
        onScroll={updateArrows}
      >
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}

        {/* Botão circular ao lado direito - Ver mais (sem cor verde e sem Ver tudo) */}
        <div
          className="carousel-circle-btn"
          onClick={goToAllProductsPage}
          role="button"
          tabIndex={0}
          title="Ver mais produtos"
          aria-label="Ver mais produtos"
        >
          <div className="carousel-circle-btn__circle">
            <ChevronRight size={24} className="carousel-circle-btn__arrow" />
          </div>
          <span className="carousel-circle-btn__main">Ver mais</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

