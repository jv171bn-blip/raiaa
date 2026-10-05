import React from 'react';
import './ShortcutMenu.css';

// Exact SVG icons matching the reference screenshot

// 1 & 3: Medal with Star Ribbon (Mais Buscados, Dose Certa)
const IconMedal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8.5" r="5" />
    <path d="m12 5.5.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3z" fill="#007380" stroke="none" />
    <path d="m8.5 13-1.5 7 5-2.5 5 2.5-1.5-7" />
  </svg>
);

// 2: Heart (Produtos Salvos)
const IconHeart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// 4: Beaker / Erlenmeyer Flask (Manipulação)
const IconFlask = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v6L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 8V2" />
    <line x1="8" y1="2" x2="16" y2="2" />
  </svg>
);

// 5: Pill with top-right half solid teal (Seu tratamento com desconto)
const IconPillHalfFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
    <path d="m15.5 15.5 5-5a4.95 4.95 0 0 0-7-7l-5 5 7 7Z" fill="#007380" />
  </svg>
);

// 6: Ticket / Coupon with % (Cupons)
const IconCouponPercent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a3 3 0 0 1 0-6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3z" />
    <line x1="9.5" y1="14.5" x2="14.5" y2="9.5" strokeWidth="1.8" />
    <circle cx="10" cy="10" r="1.2" fill="#007380" stroke="none" />
    <circle cx="14" cy="14" r="1.2" fill="#007380" stroke="none" />
  </svg>
);

// 7: Price Tag simple with hole (Ofertas do dia)
const IconTagSimple = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" fill="#007380" stroke="none" />
  </svg>
);

// 8: Price Tag with % (Suas ofertas)
const IconTagPercent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="10" y1="14" x2="14" y2="10" strokeWidth="1.6" />
    <circle cx="10.5" cy="10.5" r="0.9" fill="#007380" stroke="none" />
    <circle cx="13.5" cy="13.5" r="0.9" fill="#007380" stroke="none" />
  </svg>
);

// 9: Perfume Dispenser Bottle (Perfumes)
const IconPerfumeBottle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="12" height="12" rx="3" />
    <path d="M10 10V6h4v4" />
    <path d="M9 6h6" />
    <path d="M12 6V3" />
    <path d="M10 3h4" />
  </svg>
);

// 10: Medical Kit Briefcase with + (Serviços e Vacinas)
const IconMedicalKit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="15" rx="3" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="10.5" x2="12" y2="16.5" />
    <line x1="9" y1="13.5" x2="15" y2="13.5" />
  </svg>
);

interface ShortcutDef {
  label: string;
  icon: React.ComponentType;
  anchor?: string;
}

// Exactly the 10 items in the exact order shown in the reference image
const shortcuts: ShortcutDef[] = [
  { label: 'Mais Buscados', icon: IconMedal, anchor: 'section-mais-comprados' },
  { label: 'Produtos Salvos', icon: IconHeart },
  { label: 'Dose Certa', icon: IconMedal },
  { label: 'Manipulação', icon: IconFlask },
  { label: 'Seu tratamento com desconto', icon: IconPillHalfFilled },
  { label: 'Cupons', icon: IconCouponPercent },
  { label: 'Ofertas do dia', icon: IconTagSimple },
  { label: 'Suas ofertas', icon: IconTagPercent },
  { label: 'Perfumes', icon: IconPerfumeBottle },
  { label: 'Serviços e Vacinas', icon: IconMedicalKit },
];

const ShortcutMenu: React.FC = () => {
  const handleShortcutClick = (item: ShortcutDef) => {
    if (item.label === 'Mais Buscados' && item.anchor) {
      const el = document.getElementById(item.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Todos os outros botões não têm função
  };

  return (
    <section className="shortcuts" id="shortcut-menu">
      <div className="shortcuts__inner container">
        {shortcuts.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              className="shortcut-item"
              id={`shortcut-${i}`}
              onClick={() => handleShortcutClick(item)}
              title={item.label}
            >
              <div className="shortcut-item__icon-box">
                <Icon />
              </div>
              <span className="shortcut-item__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ShortcutMenu;
