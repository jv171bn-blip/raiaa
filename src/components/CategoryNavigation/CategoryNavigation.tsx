import React, { useState } from 'react';
import { MapPin, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import MegaMenu from '../MegaMenu/MegaMenu';
import './CategoryNavigation.css';

const navLinks = [
  { label: 'Farmácias', anchor: 'service-section' },
  { label: 'Blog', anchor: 'section-cuidados' },
  { label: 'Serviços de saúde', anchor: 'service-section' },
  { label: 'Descontos e benefícios', modal: 'coupons' },
  { label: 'Lojas parceiras', anchor: 'monta-que-desconta' },
  { label: 'Baixe o app', app: true },
];

const CategoryNavigation: React.FC = () => {
  const { setActiveModal, addressDisplay, showToast } = useCart();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.modal) {
      setActiveModal(link.modal as any);
    } else if (link.anchor) {
      const el = document.getElementById(link.anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="cat-nav" id="category-navigation">
        <div className="cat-nav__inner container">
          <div className="cat-nav__left">
            {/* CEP Location */}
            <button
              className="cat-nav__cep"
              id="cep-button"
              onClick={() => setActiveModal('cep')}
              title={addressDisplay ? `${addressDisplay.street} ${addressDisplay.cep}` : 'Informar CEP de entrega'}
            >
              <MapPin size={18} className="cat-nav__cep-icon" />
              <span className="cat-nav__cep-text">
                {addressDisplay ? (
                  <>
                    <span className="cat-nav__cep-street">{addressDisplay.street}</span>{' '}
                    <u>{addressDisplay.cep}</u>
                  </>
                ) : (
                  <u>Inserir CEP</u>
                )}
              </span>
            </button>

            {/* Todas as Categorias */}
            <button
              className={`cat-nav__categories ${isMegaMenuOpen ? 'cat-nav__categories--active' : ''}`}
              id="all-categories-button"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <Menu size={18} className="cat-nav__menu-icon" />
              <span>Todas as categorias</span>
            </button>

            {/* Links */}
            <div className="cat-nav__links">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  className="cat-nav__link"
                  id={`nav-link-${i}`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Univers CTA button */}
          <button
            className="cat-nav__cta"
            id="univers-button"
            onClick={() => setActiveModal('pbm')}
            title="Consulte seus descontos de convênio"
          >
            Exibir descontos Univers
          </button>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </>
  );
};

export default CategoryNavigation;
