import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  FileText,
  User,
  Package,
  ShoppingBasket,
  X,
  TrendingUp,
  Plus,
  Camera,
  Menu,
  MapPin,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import {
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  hairCareProducts,
  Product,
  deduplicateProducts,
  todosProdutosExpandidos,
} from '../../data/products';
import { montaProducts } from '../../data/montaOffers';
import MobileMenuSheet from '../MobileMenuSheet/MobileMenuSheet';
import './Header.css';

// Combine all products for live search
const allProducts: Product[] = deduplicateProducts([
  ...mostBought,
  ...blackDayProducts,
  ...weekHighlights,
  ...favoriteBrands,
  ...fraldasProducts,
  ...remediosProducts,
  ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts,
  ...higieneBucalPersonalProducts,
  ...hairCareProducts,
  ...asianBeauty,
  ...montaProducts,
  ...todosProdutosExpandidos,
]);

const popularSearches = [
  'Dipirona 500mg',
  'Protetor Solar Anthelios',
  'Vitamina C 1g',
  'Fralda Pampers Confort',
  'Colágeno Hidrolisado',
  'Neosaldina Gotas',
  'Centrum Adulto',
];

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartBadgeBump, setCartBadgeBump] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const {
    total,
    totalItemsCount,
    openCart,
    setActiveModal,
    user,
    addToCart,
    goToProductPage,
    goToHome,
    searchQuery,
    setSearchQuery,
    goToSearchPage,
    cepAddress,
    addressDisplay,
    isSearchPage,
  } = useCart();

  // Sync input value with searchQuery when navigating to search
  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }, [searchQuery]);

  // Bump animation on cart update
  useEffect(() => {
    if (totalItemsCount > 0) {
      setCartBadgeBump(true);
      const timer = setTimeout(() => setCartBadgeBump(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItemsCount]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedDesktop = searchRef.current && searchRef.current.contains(e.target as Node);
      const clickedMobile = mobileSearchRef.current && mobileSearchRef.current.contains(e.target as Node);
      if (!clickedDesktop && !clickedMobile) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults = searchValue.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(searchValue.toLowerCase())) ||
        (p.category && p.category.toLowerCase().includes(searchValue.toLowerCase())) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(searchValue.toLowerCase())) ||
        (p.badges && p.badges.some(b => b.toLowerCase().includes(searchValue.toLowerCase())))
      ).slice(0, 6)
    : [];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchValue.trim()) return;
    setIsSearchOpen(false);
    goToSearchPage(searchValue.trim());
  };

  const handleSelectPopular = (term: string) => {
    setSearchValue(term);
    setIsSearchOpen(false);
    goToSearchPage(term);
  };

  const renderSearchDropdown = (isMobile = false) => (
    <div className={`header__search-dropdown ${isMobile ? 'header__search-dropdown--mobile' : ''}`} id={isMobile ? 'mobile-search-dropdown' : 'search-dropdown'}>
      {searchValue.trim() ? (
        searchResults.length > 0 ? (
          <div className="search-results-list">
            <span className="search-dropdown__header">Produtos encontrados:</span>
            {searchResults.map(p => (
              <div
                key={p.id}
                className="search-result-item"
                onClick={() => {
                  goToProductPage(p);
                  setIsSearchOpen(false);
                }}
              >
                <img src={p.image} alt={p.name} className="search-result-img" />
                <div className="search-result-info">
                  <span className="search-result-name">{p.name}</span>
                  <span className="search-result-size">{p.size}</span>
                  <span className="search-result-price">
                    R$ {p.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <button
                  className="search-result-add"
                  onClick={e => {
                    e.stopPropagation();
                    addToCart(p);
                  }}
                  title="Adicionar à cesta"
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <div
              className="search-view-all-item"
              onClick={() => {
                setIsSearchOpen(false);
                goToSearchPage(searchValue.trim());
              }}
              style={{
                padding: '10px 14px',
                textAlign: 'center',
                backgroundColor: '#f0fdfa',
                color: '#007189',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                borderTop: '1px solid #e2e8f0',
                borderRadius: '0 0 12px 12px',
              }}
            >
              Ver todos os resultados para &ldquo;{searchValue}&rdquo; &rarr;
            </div>
          </div>
        ) : (
          <div className="search-no-results">
            <span>Nenhum resultado para "{searchValue}"</span>
          </div>
        )
      ) : (
        <div className="search-suggestions">
          <span className="search-dropdown__header">
            <TrendingUp size={14} /> Buscas populares
          </span>
          <div className="search-tags">
            {popularSearches.map((term, i) => (
              <button
                key={i}
                type="button"
                className="search-tag"
                onClick={() => handleSelectPopular(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="header">
      <div className="header__inner container">
        {/* Top Row: Logo + Desktop Search + Desktop Actions + Mobile Icons */}
        <div className="header__top-row">
          {/* Logo */}
          <a
            href="/"
            className="header__logo"
            id="header-logo"
            title="Droga Raia"
            onClick={e => {
              e.preventDefault();
              goToHome();
            }}
          >
            <img
              src="/raia-logo.png"
              alt="Raia"
              className="header__logo-img"
            />
          </a>

          {/* Desktop Live Search */}
          <div className="header__search header__search--desktop" ref={searchRef} id="header-search">
            <form onSubmit={handleSearchSubmit} className="header__search-form">
              <input
                type="text"
                className="header__search-input"
                placeholder="Buscar na Raia"
                value={searchValue}
                onChange={e => {
                  setSearchValue(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                id="search-input"
                autoComplete="off"
              />
              {searchValue && (
                <button
                  type="button"
                  className="header__search-clear-circle"
                  onClick={() => {
                    setSearchValue('');
                    setSearchQuery('');
                  }}
                  aria-label="Limpar busca"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </button>
              )}
              <button
                type="button"
                className="header__search-camera"
                id="search-camera-btn"
                onClick={() => setActiveModal('prescription')}
                aria-label="Buscar por foto ou receita médica"
                title="Buscar por foto ou receita médica"
              >
                <Camera size={21} strokeWidth={1.8} color="#1c1c1c" />
              </button>
              <button type="submit" className="header__search-btn" id="search-button" aria-label="Buscar">
                <Search size={20} color="#007f91" />
              </button>
            </form>

            {/* Autocomplete Dropdown (Desktop) */}
            {isSearchOpen && renderSearchDropdown(false)}
          </div>

          {/* Desktop Actions */}
          <div className="header__actions header__actions--desktop-group">
            {/* Prescription Quick Buy */}
            <button
              className="header__action header__action--desktop"
              id="action-prescription"
              onClick={() => setActiveModal('prescription')}
              title="Enviar receita médica"
            >
              <FileText size={26} className="header__action-icon" />
              <div className="header__action-text">
                <span className="header__action-main">Compra rápida</span>
                <span className="header__action-sub">com receita</span>
              </div>
            </button>

            {/* User Auth */}
            <button
              className="header__action header__action--desktop"
              id="action-login"
              onClick={() => setActiveModal('login')}
              title={user ? `Logado como ${user.name}` : 'Entrar ou cadastrar'}
            >
              <User size={26} className="header__action-icon" />
              <div className="header__action-text">
                <span className="header__action-main">
                  {user ? `Olá, ${user.name.split(' ')[0]}!` : 'Boas-vindas!'}
                </span>
                <span className="header__action-sub">
                  {user ? 'Minha conta' : 'Entrar ou cadastrar'}
                </span>
              </div>
            </button>

            {/* Orders Tracking */}
            <button
              className="header__action header__action--desktop"
              id="action-orders"
              onClick={() => setActiveModal('orders')}
              title="Acompanhar pedidos"
            >
              <Package size={26} className="header__action-icon" />
              <div className="header__action-text">
                <span className="header__action-main">Acompanhar</span>
                <span className="header__action-sub">pedidos</span>
              </div>
            </button>

            {/* Cart with count badge & drawer trigger */}
            <button
              className={`header__action header__action--cart ${cartBadgeBump ? 'header__action--bump' : ''}`}
              id="action-cart"
              onClick={openCart}
              title="Abrir cesta de compras"
            >
              <div className="header__cart-icon-wrap">
                <ShoppingBasket size={26} className="header__action-icon" />
                {totalItemsCount > 0 && (
                  <span className="header__cart-badge">{totalItemsCount}</span>
                )}
              </div>
              <div className="header__action-text">
                <span className="header__action-main">Cesta</span>
                <span className="header__action-sub">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Actions: Basket, Hamburger Menu */}
          <div className="header__mobile-actions">
            {/* Cart Basket */}
            <button
              type="button"
              className={`header__mobile-icon-btn header__mobile-icon-btn--cart ${cartBadgeBump ? 'header__action--bump' : ''}`}
              id="mobile-cart-btn"
              onClick={openCart}
              aria-label="Cesta de compras"
              title="Cesta"
            >
              <div className="header__cart-icon-wrap">
                <ShoppingBasket size={23} color="#1c1c1c" strokeWidth={1.8} />
                {totalItemsCount > 0 && (
                  <span className="header__cart-badge">{totalItemsCount}</span>
                )}
              </div>
            </button>

            {/* Hamburger Menu */}
            <button
              type="button"
              className="header__mobile-icon-btn"
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Menu principal"
              title="Menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} color="#1c1c1c" strokeWidth={1.8} />
              ) : (
                <Menu size={24} color="#1c1c1c" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (permanently visible, stable header height, zero blink) */}
        <div className="header__mobile-search-bar" ref={mobileSearchRef}>
          <form onSubmit={handleSearchSubmit} className="header__search-form header__search-form--mobile">
            <input
              ref={mobileSearchInputRef}
              type="text"
              className="header__search-input"
              placeholder="Buscar na Raia"
              value={searchValue}
              onChange={e => {
                setSearchValue(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              autoComplete="off"
            />
            {searchValue && (
              <button
                type="button"
                className="header__search-clear-circle"
                onClick={() => {
                  setSearchValue('');
                  setSearchQuery('');
                }}
                aria-label="Limpar busca"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </button>
            )}
            <button
              type="button"
              className="header__search-camera"
              onClick={() => setActiveModal('prescription')}
              aria-label="Buscar por foto ou receita médica"
            >
              <Camera size={21} strokeWidth={1.8} color="#1c1c1c" />
            </button>
          </form>
          {isSearchOpen && renderSearchDropdown(true)}
        </div>

        {/* Mobile CEP Row: Pin + Street and CEP or Inserir CEP */}
        <div
          className="header__mobile-cep"
          id="mobile-cep-btn"
          onClick={() => setActiveModal('cep')}
          role="button"
          tabIndex={0}
          title={addressDisplay ? `${addressDisplay.street} ${addressDisplay.cep}` : 'Inserir CEP para entrega'}
        >
          <MapPin size={16} color="#1c1c1c" strokeWidth={1.8} className="header__mobile-cep-pin" />
          <span className="header__mobile-cep-text">
            {addressDisplay ? (
              <>
                <span className="header__mobile-cep-street">{addressDisplay.street}</span>{' '}
                <u>{addressDisplay.cep}</u>
              </>
            ) : (
              <u>Inserir CEP</u>
            )}
          </span>
        </div>
      </div>

      {/* Mobile Menu Bottom Sheet (matching Droga Raia official app without login/register) */}
      <MobileMenuSheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectCategory={(cat) => {
          setSearchQuery(cat);
          goToSearchPage(cat);
        }}
      />
    </header>
  );
};

export default Header;
