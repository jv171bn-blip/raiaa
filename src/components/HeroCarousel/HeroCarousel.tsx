import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './HeroCarousel.css';

export interface HeroSlide {
  id: number;
  title: string;
  image: string;
  mobileImage?: string;
  alt: string;
  targetSection?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'A Primavera Chegou',
    image: '/banners/hero_03_primavera.webp',
    mobileImage: '/banners/mobile/banner_01_primavera.webp',
    alt: 'A Primavera Chegou - Renove os cuidados com a sua pele com R$ 35 OFF em compras acima de R$ 300. Use o cupom PRIMAVERA35',
    targetSection: 'section-cuidados',
  },
  {
    id: 2,
    title: 'Genéricos Leve + por menos',
    image: '/banners/hero_01_genericos.webp',
    mobileImage: '/banners/mobile/banner_02_genericos.webp',
    alt: 'Genéricos Leve + por menos - com descontos de até 95% OFF + frete grátis',
    targetSection: 'section-mais-comprados',
  },
  {
    id: 3,
    title: 'Black do Dia',
    image: '/banners/hero_04_black_do_dia.webp',
    mobileImage: '/banners/mobile/banner_03_black_do_dia.webp',
    alt: 'Black do Dia - Pra levar hoje - Ofertas para manter o cuidado em dia com até 70% OFF',
    targetSection: 'section-black-do-dia',
  },
  {
    id: 4,
    title: 'Aniversário Raia',
    image: '/banners/hero_02_aniversario.webp',
    mobileImage: '/banners/mobile/banner_04_nova_estacao.webp',
    alt: 'Aniversário Raia - Uma vida inteira de cuidado - Concorra a R$ 200 mil em compras na Raia e prêmios todos os dias de até R$ 300',
    targetSection: 'section-destaque-semana',
  },
  {
    id: 5,
    title: 'Raia Conceito',
    image: '/banners/hero_08_raia_conceito.webp',
    mobileImage: '/banners/mobile/banner_05_raia_conceito.webp',
    alt: 'Raia Conceito - Sua beleza ganhou um espaço premium - Experiências, marcas e cuidados para uma rotina ainda mais especial',
    targetSection: 'section-beleza-asiatica',
  },
  {
    id: 6,
    title: 'Semavy / Ozivy®',
    image: '/banners/hero_07_semavy.webp',
    mobileImage: '/banners/mobile/banner_06_ozivy.webp',
    alt: 'Semavy chegou na Raia - Nova opção de semaglutida para o seu tratamento em até 5x sem juros',
    targetSection: 'section-destaque-semana',
  },
  {
    id: 7,
    title: 'Saúde Mental em Foco',
    image: '/banners/hero_06_saude_mental.webp',
    mobileImage: '/banners/mobile/banner_07_nutriweek.webp',
    alt: 'Saúde mental em foco - Cuidado em cada passo - Leve Mais Por Menos com até 60% de desconto',
    targetSection: 'section-mais-comprados',
  },
  {
    id: 8,
    title: 'Festival do Banho',
    image: '/banners/hero_05_festival_banho.webp',
    mobileImage: '/banners/mobile/banner_08_cuidado_diario.webp',
    alt: 'Festival do Banho - Seu momento de cuidado começa aqui - com até 30% de desconto',
    targetSection: 'section-cuidados',
  },
  {
    id: 9,
    title: 'Esquenta Medley',
    image: '/banners/hero_09_esquenta_medley.webp',
    mobileImage: '/banners/mobile/banner_09_respirar_melhor.webp',
    alt: 'Esquenta Medley - Leve Mais Por Menos com até 85% de desconto',
    targetSection: 'section-mais-comprados',
  },
  {
    id: 10,
    title: 'Outubro Rosa',
    image: '/banners/hero_10_outubro_rosa.webp',
    mobileImage: '/banners/mobile/banner_10_viralizou.webp',
    alt: 'Outubro Rosa - Cuidado que inspira com até 35% de desconto',
    targetSection: 'section-marcas-favoritas',
  },
];

// Cloned buffers at both ends for seamless infinite horizontal slide loop
const extendedSlides: HeroSlide[] = [
  ...heroSlides.slice(-2),
  ...heroSlides,
  ...heroSlides.slice(0, 2),
];

const HeroCarousel: React.FC = () => {
  // Start at index 2 (which is the real slide 0)
  const [currentIndex, setCurrentIndex] = useState(2);
  const [withTransition, setWithTransition] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioningRef = useRef(false);
  const touchStartXRef = useRef(0);
  const currentDragOffsetRef = useRef(0);

  const { showToast } = useCart();

  const goNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex(prev => prev + 1);
  };

  const goPrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex(prev => prev - 1);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setWithTransition(true);
    setCurrentIndex(slideIndex + 2);
  };

  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (currentIndex >= heroSlides.length + 2) {
      // Reached or passed clone at end -> snap back to real first slide
      setWithTransition(false);
      setCurrentIndex(2);
    } else if (currentIndex <= 1) {
      // Reached or passed clone at start -> snap back to real last slide
      setWithTransition(false);
      setCurrentIndex(heroSlides.length + 1);
    }
  };

  // Re-enable CSS transition on next frame after snap jump
  useEffect(() => {
    if (!withTransition) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setWithTransition(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    }
  }, [withTransition]);

  // Autoplay rotation every 5 seconds
  useEffect(() => {
    if (paused || isDragging) return;
    timerRef.current = setTimeout(() => {
      goNext();
    }, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, paused, isDragging, withTransition]);

  // Touch handlers for mobile swipe & dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    currentDragOffsetRef.current = 0;
    setIsDragging(true);
    setWithTransition(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientX - touchStartXRef.current;
    currentDragOffsetRef.current = delta;
    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    const delta = currentDragOffsetRef.current;
    setIsDragging(false);
    setWithTransition(true);
    setDragOffset(0);

    if (delta < -45) {
      goNext();
    } else if (delta > 45) {
      goPrev();
    }
  };

  // Active dot calculation (0 to 14)
  const activeDot = ((currentIndex - 2) % heroSlides.length + heroSlides.length) % heroSlides.length;

  const handleSlideClick = (targetSection?: string) => {
    if (Math.abs(currentDragOffsetRef.current) > 8) return;
    const currentSlide = heroSlides[activeDot];
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <section
      className="hero"
      id="hero-carousel"
      aria-label="Carrossel de Banners Promocionais"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero__viewport">
        <div
          className={`hero__slider-track ${withTransition && !isDragging ? 'hero__slider-track--animated' : ''}`}
          style={{
            transform: dragOffset !== 0
              ? `translateX(calc(-${currentIndex} * var(--hero-slide-step) + ${dragOffset}px))`
              : `translateX(calc(-${currentIndex} * var(--hero-slide-step)))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, idx) => {
            const isClone = idx < 2 || idx >= heroSlides.length + 2;
            return (
              <div
                key={`${slide.id}-${idx}`}
                className="hero__slide"
                onClick={() => handleSlideClick(slide.targetSection)}
                role="button"
                tabIndex={isClone ? -1 : 0}
                aria-hidden={isClone}
                aria-label={slide.title}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSlideClick(slide.targetSection);
                  }
                }}
              >
                <picture style={{ width: '100%', height: '100%', display: 'block' }}>
                  {slide.mobileImage && (
                    <source media="(max-width: 899px)" srcSet={slide.mobileImage} />
                  )}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero__banner-img"
                    loading={idx >= 2 && idx <= 5 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </picture>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Navigation Arrows */}
      <button
        className="hero__arrow hero__arrow--left"
        onClick={goPrev}
        id="hero-prev"
        aria-label="Banner anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="hero__arrow hero__arrow--right"
        onClick={goNext}
        id="hero-next"
        aria-label="Próximo banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* 15 Indicator Dots */}
      <div className="hero__indicators" role="tablist" aria-label="Navegação de banners">
        {heroSlides.map((s, i) => {
          const isActive = i === activeDot;
          return (
            <button
              key={s.id}
              className={`hero__dot ${isActive ? 'hero__dot--active' : ''}`}
              onClick={() => goToSlide(i)}
              id={`hero-dot-${i}`}
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para banner ${i + 1}: ${s.title}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroCarousel;
