import React from 'react';
import { ChevronRight, ArrowLeft, Clock, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import FlashOfferBanner from '../FlashOfferBanner/FlashOfferBanner';
import './OffersPage.css';

const OffersPage: React.FC = () => {
  const { goToHome } = useCart();

  return (
    <div className="offers-page container">
      {/* Breadcrumb Navigation */}
      <nav className="offers-page__breadcrumb" aria-label="Navegação estrutural">
        <button
          onClick={goToHome}
          className="offers-page__breadcrumb-btn"
          id="offers-breadcrumb-home"
        >
          Início
        </button>
        <ChevronRight size={14} className="offers-page__breadcrumb-sep" />
        <span className="offers-page__breadcrumb-current">Ofertas Relâmpago</span>
      </nav>

      {/* Offers Page Header Card with Timer */}
      <div className="offers-page__header-banner">
        <FlashOfferBanner className="offers-page__banner-embed" />
      </div>

      {/* Empty State / Notice Container */}
      <div className="offers-page__empty-container" id="offers-empty-state">
        <div className="offers-page__empty-icon-wrap">
          <div className="offers-page__empty-icon-halo">
            <ShoppingBag size={48} className="offers-page__empty-icon" />
          </div>
          <span className="offers-page__empty-badge">
            <Clock size={14} /> Temporizador Ativo
          </span>
        </div>

        <h1 className="offers-page__empty-title">Nenhum produto cadastrado no momento</h1>

        <p className="offers-page__empty-description">
          Esta seção está temporariamente sem produtos. As ofertas relâmpago serão adicionadas
          assim que o site estiver completo.
        </p>

        <div className="offers-page__notice-box">
          <Sparkles size={20} className="offers-page__notice-sparkle" />
          <div>
            <strong>Fique atento ao cronômetro de 10 horas!</strong>
            <p>
              Preços promocionais com descontos imperdíveis serão liberados em breve para você
              aproveitar.
            </p>
          </div>
        </div>

        <div className="offers-page__actions">
          <button
            onClick={goToHome}
            className="offers-page__btn-primary"
            id="offers-back-to-home-btn"
          >
            <ArrowLeft size={18} />
            Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
