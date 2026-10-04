import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './RDSaudeServices.css';

export interface RDService {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  ctaText: string;
  link?: string;
}

export const rdServicesData: RDService[] = [
  {
    id: '4bio',
    title: '4Bio',
    description:
      'Atua há mais de 18 anos com credibilidade e experiência na comercialização de medicamentos especiais de alto custo.',
    image: '/services/4bio.png',
    alt: 'mulher-segurando-queixo',
    ctaText: 'Conhecer',
  },
  {
    id: 'blog',
    title: 'Blog',
    description:
      'Conteúdos, dicas e informações sobre saúde, maternidade, alimentação saudável e beleza.',
    image: '/services/blog.png',
    alt: 'mulher-em-pose-de-yoga',
    ctaText: 'Conhecer',
  },
  {
    id: 'manipulacao',
    title: 'Manipulação',
    description:
      'Farmácia de manipulação fácil e prática, envie a receita, confira o orçamento, compre online e receba onde quiser.',
    image: '/services/manipulacao.png',
    alt: 'mulher-caminhando-sorridente',
    ctaText: 'Conhecer',
  },
  {
    id: 'dose-certa',
    title: 'Dose Certa',
    description:
      'Compre e receba seus medicamentos organizados em sachês individuais separados por dia e horário.',
    image: '/services/dose_certa.png',
    alt: 'mulher-de-óculos-sorrindo',
    ctaText: 'Conhecer',
  },
];

const RDSaudeServices: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.75;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleServiceClick = (service: RDService) => {
    // Interactive action for user feedback
    alert(`Você clicou em Conhecer o serviço: ${service.title}`);
  };

  return (
    <section className="rd-services-section" id="section-rd-servicos" aria-label="Conheça mais serviços RD saúde">
      <div className="rd-services-container">
        {/* Header with Title and Carousel Arrows */}
        <div className="rd-services-header">
          <h2 className="rd-services-title">Conheça mais serviços RD saúde</h2>
          <div className="rd-services-nav">
            <button
              className={`rd-services-nav-btn ${!canScrollLeft ? 'rd-services-nav-btn--disabled' : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Rolar para esquerda"
              title="Anterior"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              className={`rd-services-nav-btn ${!canScrollRight ? 'rd-services-nav-btn--disabled' : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Rolar para direita"
              title="Próximo"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* 4 Cards Track */}
        <div className="rd-services-track" ref={trackRef} onScroll={checkScroll}>
          {rdServicesData.map(service => (
            <div key={service.id} className="rd-service-card" id={`rd-service-${service.id}`}>
              <div className="rd-service-card__img-wrap">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="rd-service-card__img"
                  loading="lazy"
                />
              </div>

              <div className="rd-service-card__content">
                <h3 className="rd-service-card__title">{service.title}</h3>
                <p className="rd-service-card__desc" title={service.description}>
                  {service.description}
                </p>
                <button
                  className="rd-service-card__btn"
                  onClick={() => handleServiceClick(service)}
                  id={`btn-conhecer-${service.id}`}
                >
                  {service.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RDSaudeServices;
