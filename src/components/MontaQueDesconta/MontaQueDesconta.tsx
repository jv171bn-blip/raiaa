import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { montaBrandOffers, MontaBrandOffer } from '../../data/montaOffers';
import './MontaQueDesconta.css';

const MontaQueDesconta: React.FC = () => {
  const { showToast, goToMontaPage } = useCart();
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
    setHasOverflow(el.scrollWidth > el.clientWidth + 10);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = 280;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    setTimeout(updateArrows, 350);
  };

  const handleCardClick = (e: React.MouseEvent, offer: MontaBrandOffer) => {
    e.preventDefault();
    showToast(`Abrindo página do combo ${offer.brand}: ${offer.condition} ${offer.discount}!`);
    goToMontaPage(offer.id);
  };

  return (
    <section className="monta" id="monta-que-desconta" aria-label="Monta que desconta">
      <div className="monta__header">
        <div
          className="monta__header-texts"
          onClick={() => goToMontaPage()}
          style={{ cursor: 'pointer' }}
          title="Ver página completa do Monta que Desconta"
        >
          <h2 className="monta__title">Monta que desconta</h2>
          <p className="monta__sub">
            Combine produtos na sua compra e ganhe mais descontos
          </p>
        </div>

        {hasOverflow && (
          <div className="monta__arrows">
            <button
              className={`monta-arrow${atStart ? ' monta-arrow--disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={atStart}
              aria-label="Ofertas anteriores"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className={`monta-arrow${atEnd ? ' monta-arrow--disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={atEnd}
              aria-label="Próximas ofertas"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="monta__track" ref={trackRef} onScroll={updateArrows}>
        {montaBrandOffers.map(offer => (
          <a
            key={offer.id}
            href={`#monta-que-desconta-${offer.id}`}
            className="monta-card"
            id={`monta-card-${offer.id}`}
            onClick={(e) => handleCardClick(e, offer)}
            title={`${offer.brand} - ${offer.condition} ${offer.discount}`}
          >
            <div className="monta-card__top">
              <img
                src={offer.banner}
                alt={`${offer.brand} - ${offer.condition} ${offer.discount}`}
                className="monta-card__img"
                loading="lazy"
              />
            </div>

            <div className="monta-card__pill">
              <span className="monta-card__condition">{offer.condition}</span>
              <span className="monta-card__discount">{offer.discount}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MontaQueDesconta;
