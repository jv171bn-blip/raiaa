import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HealthSpaceCarousel.css';

interface HealthCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

interface Props {
  cards: HealthCard[];
}

const HealthSpaceCarousel: React.FC<Props> = ({ cards }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -700 : 700, behavior: 'smooth' });
  };

  return (
    <section className="health-space" id="health-space">
      <div className="health-space__header">
        <h2 className="health-space__title">Espaço Mais Saúde</h2>
        <div className="health-space__arrows">
          <button className="carousel-arrow" onClick={() => scroll('left')} aria-label="Anterior">
            <ChevronLeft size={18} />
          </button>
          <button className="carousel-arrow" onClick={() => scroll('right')} aria-label="Próximo">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="health-space__track" ref={trackRef}>
        {cards.map(card => (
          <div key={card.id} className="health-card" id={`health-card-${card.id}`}>
            <div className="health-card__img-wrap">
              <img src={card.image} alt={card.title} className="health-card__img" loading="lazy" />
              <span className="health-card__tag">{card.tag}</span>
            </div>
            <div className="health-card__body">
              <h3 className="health-card__title">{card.title}</h3>
              <p className="health-card__desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthSpaceCarousel;
