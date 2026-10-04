import React from 'react';
import './CampaignBanners.css';

const campaigns = [
  {
    id: 1,
    title: 'O cuidado que faz você respirar melhor',
    image: '/banners/banner_09_respirar_melhor.png',
    alt: 'O cuidado que faz você respirar melhor - com até 65% de desconto',
    targetSection: 'section-mais-comprados',
  },
  {
    id: 2,
    title: 'Nutriweek - Leve mais por menos',
    image: '/banners/banner_07_nutriweek.png',
    alt: 'Nutriweek - Nutrição para todos os dias leve mais por menos - com até 50% de desconto',
    targetSection: 'section-destaque-semana',
  },
  {
    id: 3,
    title: 'Produtos para barba, cabelo e corpo',
    image: '/banners/banner_11_barba_cabelo_corpo.png',
    alt: 'Produtos para barba, cabelo e corpo - com até 40% de desconto',
    targetSection: 'section-marcas-favoritas',
  },
  {
    id: 4,
    title: 'Needs Baby - Jornada completa',
    image: '/banners/banner_14_needs_baby.png',
    alt: 'Jornada completa para o seu bebê - Needs Baby - com 25% de desconto',
    targetSection: 'section-destaque-semana',
  },
];

const CampaignBanners: React.FC = () => {
  const handleClick = (targetSection: string) => {
    const el = document.getElementById(targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="campaign-banners-section" aria-label="Banners Promocionais">
      <div className="campaign-banners" id="campaign-banners">
        {campaigns.map(c => (
          <div
            key={c.id}
            className="campaign-card"
            id={`campaign-card-${c.id}`}
            onClick={() => handleClick(c.targetSection)}
            role="button"
            tabIndex={0}
            aria-label={c.title}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick(c.targetSection);
              }
            }}
          >
            <img
              src={c.image}
              alt={c.alt}
              className="campaign-card__img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignBanners;
