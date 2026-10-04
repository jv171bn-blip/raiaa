import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './FlashOfferBanner.css';

interface FlashOfferBannerProps {
  className?: string;
  onClick?: () => void;
}

const FlashOfferBanner: React.FC<FlashOfferBannerProps> = ({ className = '', onClick }) => {
  const { goToOffersPage } = useCart();

  // 10-hour persistent countdown timer
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>(() => {
    const TEN_HOURS_MS = 10 * 60 * 60 * 1000;
    try {
      const storedEnd = localStorage.getItem('drogaraia_flash_deal_end');
      const now = Date.now();
      if (storedEnd) {
        const end = parseInt(storedEnd, 10);
        if (end > now && end - now <= TEN_HOURS_MS) {
          const diff = end - now;
          return {
            hours: Math.floor(diff / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000),
          };
        }
      }
      // Initialize with ~9h 46m 04s matching reference or full 10h
      // To match the reference image closely while ticking down from 10h:
      const initialDiff = 9 * 3600 * 1000 + 46 * 60 * 1000 + 4 * 1000;
      const endTimestamp = now + initialDiff;
      localStorage.setItem('drogaraia_flash_deal_end', String(endTimestamp));
      return {
        hours: 9,
        minutes: 46,
        seconds: 4,
      };
    } catch {
      return { hours: 9, minutes: 46, seconds: 4 };
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const TEN_HOURS_MS = 10 * 60 * 60 * 1000;
      const now = Date.now();
      let storedEnd = 0;
      try {
        storedEnd = parseInt(localStorage.getItem('drogaraia_flash_deal_end') || '0', 10);
      } catch {
        storedEnd = 0;
      }

      if (!storedEnd || storedEnd <= now) {
        // Reset 10h cycle
        storedEnd = now + TEN_HOURS_MS;
        try {
          localStorage.setItem('drogaraia_flash_deal_end', String(storedEnd));
        } catch {
          // ignore
        }
      }

      const diff = Math.max(0, storedEnd - now);
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatUnit = (num: number) => String(num).padStart(2, '0');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      goToOffersPage();
    }
  };

  return (
    <section className={`flash-offer-section ${className}`}>
      <div
        className="flash-offer-card"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Ver ofertas relâmpago"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Top Accent / Progress Stripe */}
        <div className="flash-offer-card__top-bar" />

        {/* Left Side: Lightning Icon + Texts */}
        <div className="flash-offer-card__left">
          <div className="flash-offer-card__icon" aria-hidden="true">
            <svg
              width="22"
              height="26"
              viewBox="0 0 24 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 1.5L2 16.5H11.5L9.5 26.5L22 11.5H12.5L14.5 1.5Z" />
            </svg>
          </div>
          <div className="flash-offer-card__texts">
            <span className="flash-offer-card__title">Oferta Relâmpago</span>
            <span className="flash-offer-card__subtitle">
              Aproveite <strong>agora!</strong>
            </span>
          </div>
        </div>

        {/* Right Side: Red Timer Pill + Arrow */}
        <div className="flash-offer-card__right">
          <div className="flash-offer-card__timer-pill">
            <span>
              {formatUnit(timeLeft.hours)}h {formatUnit(timeLeft.minutes)}m {formatUnit(timeLeft.seconds)}s
            </span>
          </div>
          <div className="flash-offer-card__arrow">
            <ChevronRight size={20} strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashOfferBanner;
