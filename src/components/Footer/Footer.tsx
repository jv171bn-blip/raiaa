import React from 'react';
import { Headphones, Smartphone, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Footer.css';

const Footer: React.FC = () => {
  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Rounded Support Box with Light Gray Background */}
        <div className="footer__support-box">
          <div className="footer__support-grid">
            {/* Card 1: Central de Atendimento */}
            <div
              className="footer-support-card"
              id="footer-support-center"
              onClick={handleSupportClick}
              role="button"
              tabIndex={0}
            >
              <div className="footer-support-card__top">
                <Headphones size={24} color="#1a1a1a" strokeWidth={1.8} />
                <ChevronRight size={18} color="#1a1a1a" strokeWidth={2} />
              </div>
              <h3 className="footer-support-card__title">Central de atendimento</h3>
              <p className="footer-support-card__sub">
                Confira as dúvidas mais frequentes ou fale com a gente.
              </p>
            </div>

            {/* Card 2: Baixe o nosso aplicativo */}
            <div
              className="footer-support-card"
              id="footer-download-app"
              onClick={handleAppClick}
              role="button"
              tabIndex={0}
            >
              <div className="footer-support-card__top">
                <div className="footer-support-card__phone-icon-wrap">
                  <Smartphone size={24} color="#1a1a1a" strokeWidth={1.8} />
                  <svg
                    className="footer-support-card__phone-badge"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </div>
                <ChevronRight size={18} color="#1a1a1a" strokeWidth={2} />
              </div>
              <h3 className="footer-support-card__title">Baixe o nosso aplicativo</h3>
              <p className="footer-support-card__sub">
                E tenha descontos e benefícios exclusivos!
              </p>
            </div>
          </div>

          {/* Uma empresa RDsaúde */}
          <div className="footer__rdsaude">
            <span className="footer__rd-label">Uma empresa</span>
            <div className="footer__rd-logo">
              <img src="/raia-symbol.png" alt="RD" className="footer__rd-symbol" />
              <strong className="footer__rd-text-main">RD</strong>
              <span className="footer__rd-text-sub">saúde</span>
            </div>
          </div>

          {/* Voltar ao topo button */}
          <div className="footer__btn-wrap">
            <button
              type="button"
              className="footer__back-to-top"
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
            >
              Voltar ao topo
            </button>
          </div>
        </div>

        {/* Anvisa Compliance Section */}
        <div className="footer__anvisa-section">
          <span className="footer__anvisa-text">A Raia segue as determinações da</span>
          <img src="/anvisa-logo.svg" alt="ANVISA" className="footer__anvisa-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
