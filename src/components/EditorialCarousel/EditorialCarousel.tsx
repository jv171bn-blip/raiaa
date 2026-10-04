import React from 'react';
import './EditorialCarousel.css';

interface EditorialCard {
  id: number;
  title: string;
  image: string;
}

interface Props {
  title: string;
  cards: EditorialCard[];
  id?: string;
}

const EditorialCarousel: React.FC<Props> = ({ title, cards, id }) => {
  return (
    <section className="editorial-carousel" id={id}>
      <div className="editorial-carousel__header">
        <h2 className="editorial-carousel__title">{title}</h2>
      </div>

      <div className="editorial-carousel__track">
        {cards.map(card => (
          <div key={card.id} className="editorial-card" id={`editorial-card-${card.id}`}>
            <div className="editorial-card__img-wrap">
              <img
                src={card.image}
                alt={card.title}
                className="editorial-card__img"
                loading="lazy"
              />
            </div>
            <div className="editorial-card__footer">
              <span className="editorial-card__label">{card.title}</span>
              <svg
                className="editorial-card__arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorialCarousel;
