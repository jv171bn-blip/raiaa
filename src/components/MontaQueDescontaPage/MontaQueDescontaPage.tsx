import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, ShoppingBag, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { montaBrandOffers, montaProducts, MontaBrandOffer } from '../../data/montaOffers';
import ProductCard from '../ProductCard/ProductCard';
import './MontaQueDescontaPage.css';

const MontaQueDescontaPage: React.FC = () => {
  const {
    goToHome,
    selectedMontaBrand,
    setSelectedMontaBrand,
    items,
    openCart,
    montaDiscount,
  } = useCart();

  const [activeTab, setActiveTab] = useState<string>(selectedMontaBrand || 'all');

  useEffect(() => {
    if (selectedMontaBrand) {
      setActiveTab(selectedMontaBrand);
    }
  }, [selectedMontaBrand]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedMontaBrand(tabId === 'all' ? null : tabId);
    try {
      const hash = tabId === 'all' ? '#monta-que-desconta' : `#monta-que-desconta-${tabId}`;
      window.history.pushState({ page: 'monta', brandId: tabId === 'all' ? null : tabId }, '', hash);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  // Filter products based on active tab
  const displayedProducts = activeTab === 'all'
    ? montaProducts
    : montaProducts.filter(p => (p.brand || '').toLowerCase().includes(activeTab));

  // Cart counts for each brand
  const getBrandCartCount = (brandName: string) => {
    return items
      .filter(i => (i.product.brand || '').toLowerCase().includes(brandName.toLowerCase()))
      .reduce((sum, i) => sum + i.quantity, 0);
  };

  const principiaCount = getBrandCartCount('principia');
  const cetaphilCount = getBrandCartCount('cetaphil');
  const puravidaCount = getBrandCartCount('puravida');

  return (
    <div className="monta-page container">
      {/* Breadcrumb Navigation */}
      <nav className="monta-page__breadcrumb" aria-label="Navegação estrutural">
        <button
          onClick={goToHome}
          className="monta-page__breadcrumb-btn"
          id="monta-breadcrumb-home"
        >
          Início
        </button>
        <ChevronRight size={14} className="monta-page__breadcrumb-sep" />
        <span className="monta-page__breadcrumb-current">Monta que desconta</span>
      </nav>

      {/* Hero Header */}
      <header className="monta-page__hero">
        <div className="monta-page__hero-content">
          <span className="monta-page__hero-badge">
            <Sparkles size={14} /> Oferta Especial
          </span>
          <h1 className="monta-page__hero-title">Monta que desconta</h1>
          <p className="monta-page__hero-subtitle">
            Combine produtos na sua compra e ganhe mais descontos automáticos! Adicione a quantidade indicada
            de itens da mesma marca para desbloquear até 30% OFF direto no carrinho.
          </p>
        </div>

        {/* Brand Combo Overview Cards */}
        <div className="monta-page__brand-cards">
          {montaBrandOffers.map(offer => {
            const count = getBrandCartCount(offer.id);
            const isUnlocked = count >= offer.minItems;
            const isSelected = activeTab === offer.id;

            return (
              <div
                key={offer.id}
                className={`monta-page__brand-card ${isSelected ? 'monta-page__brand-card--selected' : ''}`}
                onClick={() => handleTabChange(offer.id)}
                role="button"
                tabIndex={0}
                title={`Filtrar produtos ${offer.brand}`}
              >
                <div className="monta-page__brand-img-wrap">
                  <img src={offer.banner} alt={offer.brand} className="monta-page__brand-img" />
                </div>
                <div className="monta-page__brand-info">
                  <span className="monta-page__brand-condition">{offer.condition}</span>
                  <strong className="monta-page__brand-discount">{offer.discount}</strong>
                  <div className="monta-page__brand-status">
                    {isUnlocked ? (
                      <span className="monta-page__status-badge monta-page__status-badge--unlocked">
                        <CheckCircle2 size={13} /> {offer.discount} ATIVADO ({count}/{offer.minItems})
                      </span>
                    ) : (
                      <span className="monta-page__status-badge">
                        {count > 0 ? `Falta ${offer.minItems - count} item (${count}/${offer.minItems})` : `0/${offer.minItems} adicionados`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </header>

      {/* Real-time Combo Tracker Notice */}
      <div className="monta-page__tracker-bar">
        <div className="monta-page__tracker-info">
          <div className="monta-page__tracker-icon-box">
            <Zap size={22} className="monta-page__tracker-icon" />
          </div>
          <div>
            <h3 className="monta-page__tracker-title">Simulador de Desconto Ativo</h3>
            <p className="monta-page__tracker-desc">
              {montaDiscount > 0 ? (
                <>Você já está economizando <strong style={{ color: '#008a5b' }}>R$ {montaDiscount.toFixed(2).replace('.', ',')}</strong> com o Monta que Desconta!</>
              ) : (
                <>Monte seu kit com 2 produtos Principia ou Cetaphil (20% OFF) ou 3 produtos Puravida (30% OFF).</>
              )}
            </p>
          </div>
        </div>
        <button onClick={openCart} className="monta-page__tracker-cart-btn" id="monta-open-cart-btn">
          <ShoppingBag size={18} />
          Ver Cesta
        </button>
      </div>

      {/* Tabs Filter */}
      <div className="monta-page__tabs">
        <button
          className={`monta-page__tab-btn ${activeTab === 'all' ? 'monta-page__tab-btn--active' : ''}`}
          onClick={() => handleTabChange('all')}
          id="tab-monta-all"
        >
          Todas as Ofertas ({montaProducts.length})
        </button>
        {montaBrandOffers.map(offer => {
          const brandItemCount = montaProducts.filter(p => (p.brand || '').toLowerCase().includes(offer.id)).length;
          return (
            <button
              key={offer.id}
              className={`monta-page__tab-btn ${activeTab === offer.id ? 'monta-page__tab-btn--active' : ''}`}
              onClick={() => handleTabChange(offer.id)}
              id={`tab-monta-${offer.id}`}
            >
              {offer.brand} ({brandItemCount}) - {offer.badgeText}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <section className="monta-page__catalog" aria-label="Catálogo de produtos da promoção">
        <div className="monta-page__grid">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits / FAQ Banner */}
      <div className="monta-page__benefits">
        <div className="monta-page__benefit-item">
          <CheckCircle2 size={24} className="monta-page__benefit-icon" />
          <div>
            <strong>Desconto Instantâneo</strong>
            <p>O desconto de 20% ou 30% é calculado diretamente na sua cesta ao atingir o combo.</p>
          </div>
        </div>
        <div className="monta-page__benefit-item">
          <ShieldCheck size={24} className="monta-page__benefit-icon" />
          <div>
            <strong>Produtos 100% Originais</strong>
            <p>Garantia e procedência direta dos laboratórios oficiais com nota fiscal.</p>
          </div>
        </div>
        <div className="monta-page__benefit-item">
          <Zap size={24} className="monta-page__benefit-icon" />
          <div>
            <strong>Frete Grátis</strong>
            <p>Frete grátis em pedidos acima de R$ 149,90 ou retire na Droga Raia mais próxima.</p>
          </div>
        </div>
      </div>

      {/* Return to Home button */}
      <div className="monta-page__footer-nav">
        <button
          onClick={goToHome}
          className="monta-page__back-btn"
          id="monta-back-home-bottom"
        >
          <ArrowLeft size={18} />
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default MontaQueDescontaPage;
