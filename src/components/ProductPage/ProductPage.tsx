import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Heart,
  Share2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  Truck,
  Store,
  Award,
  Package,
  Headphones,
  Smartphone,
} from 'lucide-react';
import { Product, quemComprouTambem, getSimilarProducts, isCosmeticOrPersonalCare, fraldasProducts } from '../../data/products';
import { getProductReviewsData } from '../../data/productReviewsData';
import { useCart } from '../../context/CartContext';
import { handleImageError } from '../../utils/imageFallback';
import ProductCard from '../ProductCard/ProductCard';
import ProductReviews from '../ProductReviews/ProductReviews';
import './ProductPage.css';

interface Props {
  product: Product;
  allProducts: Product[];
}

const ProductPage: React.FC<Props> = ({ product, allProducts }) => {
  const { addToCart, openCart, showToast, goToHome, goToProductPage } = useCart();

  // Dynamically compute similar products based on category / subcategory / name keywords
  const similarProducts = getSimilarProducts(product, allProducts);

  const [selectedOption, setSelectedOption] = useState<'oferta-raia' | 'leve-pague'>('oferta-raia');
  const [ofertaQty, setOfertaQty] = useState(1);
  const [promoQty, setPromoQty] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cepInput, setCepInput] = useState('');
  const [cepCalculated, setCepCalculated] = useState(false);
  const [isQtyModalOpen, setIsQtyModalOpen] = useState(false);
  const [showCustomQtyInput, setShowCustomQtyInput] = useState(false);
  const [customQtyValue, setCustomQtyValue] = useState('6');

  // Size Selection State (Matches exact user screenshot)
  const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
  const [tempSelectedOption, setTempSelectedOption] = useState<{
    sizeCode: string;
    label: string;
    product: Product;
  } | null>(null);

  // Size options resolution for current product family (All 7 Diaper lines: P, M, G, XG, XXG)
  const { sizeOptions, currentSizeCode } = useMemo(() => {
    const pName = (product.name || '').toLowerCase();
    const isDiaper = pName.includes('fralda') || (product.subcategory || '').toLowerCase().includes('fraldas');

    if (!isDiaper) {
      return { sizeOptions: [], currentSizeCode: product.size || '' };
    }

    let familySizes: { code: string; id: number; label: string }[] | null = null;

    // 1. Pampers Confort Sec
    if (pName.includes('pampers') && pName.includes('confort sec')) {
      familySizes = [
        { code: 'P', id: 1101, label: 'P' },
        { code: 'M', id: 1250308, label: 'M' },
        { code: 'G', id: 1250294, label: 'G' },
        { code: 'XG', id: 1250309, label: 'XG' },
        { code: 'XXG', id: 1250310, label: 'XXG' },
      ];
    }
    // 2. Pampers Pants (Fralda-Calça)
    else if (pName.includes('pampers') && (pName.includes('pants') || pName.includes('calça'))) {
      familySizes = [
        { code: 'P', id: 1104, label: 'P' },
        { code: 'M', id: 501, label: 'M' },
        { code: 'G', id: 2040, label: 'G' },
        { code: 'XG', id: 20404, label: 'XG' },
        { code: 'XXG', id: 20405, label: 'XXG' },
      ];
    }
    // 3. Huggies Calça Proteção Acolchoada (Roupinha)
    else if (pName.includes('huggies') && (pName.includes('calça') || pName.includes('roupinha') || pName.includes('acolchoada'))) {
      familySizes = [
        { code: 'P', id: 1096085, label: 'P' },
        { code: 'M', id: 1096086, label: 'M' },
        { code: 'G', id: 1096087, label: 'G' },
        { code: 'XG', id: 1096088, label: 'XG' },
        { code: 'XXG', id: 1096089, label: 'XXG' },
      ];
    }
    // 4. Huggies Natural Care
    else if (pName.includes('huggies')) {
      familySizes = [
        { code: 'P', id: 20390, label: 'P' },
        { code: 'M', id: 20391, label: 'M' },
        { code: 'G', id: 20392, label: 'G' },
        { code: 'XG', id: 20393, label: 'XG' },
        { code: 'XXG', id: 20394, label: 'XXG' },
      ];
    }
    // 5. Babysec Ultrasec Galinha Pintadinha
    else if (pName.includes('babysec')) {
      familySizes = [
        { code: 'P', id: 21107, label: 'P' },
        { code: 'M', id: 21108, label: 'M' },
        { code: 'G', id: 1109, label: 'G' },
        { code: 'XG', id: 21112, label: 'XG' },
        { code: 'XXG', id: 21113, label: 'XXG' },
      ];
    }
    // 6. Pom Pom Protek
    else if (pName.includes('pom pom') || pName.includes('pompom')) {
      familySizes = [
        { code: 'P', id: 21114, label: 'P' },
        { code: 'M', id: 21115, label: 'M' },
        { code: 'G', id: 1110, label: 'G' },
        { code: 'XG', id: 21116, label: 'XG' },
        { code: 'XXG', id: 21117, label: 'XXG' },
      ];
    }
    // 7. MamyPoko Fralda-Calça
    else if (pName.includes('mamypoko') || pName.includes('mamy poko')) {
      familySizes = [
        { code: 'P', id: 21118, label: 'P' },
        { code: 'M', id: 21119, label: 'M' },
        { code: 'G', id: 1111, label: 'G' },
        { code: 'XG', id: 21120, label: 'XG' },
        { code: 'XXG', id: 21121, label: 'XXG' },
      ];
    }

    if (!familySizes) {
      return { sizeOptions: [], currentSizeCode: product.size || '' };
    }

    const resolved = familySizes
      .map(s => {
        const target = allProducts.find(p => p.id === s.id) || fraldasProducts.find(p => p.id === s.id);
        return target ? { sizeCode: s.code, label: s.label, product: target } : null;
      })
      .filter(Boolean) as { sizeCode: string; label: string; product: Product }[];

    // Detect current size code
    let curCode = 'G';
    const matchById = familySizes.find(s => s.id === product.id);
    if (matchById) {
      curCode = matchById.code;
    } else if (/\bxxg\b/i.test(pName) || (product.size && /\bxxg\b/i.test(product.size))) {
      curCode = 'XXG';
    } else if (/\bxg\b/i.test(pName) || (product.size && /\bxg\b/i.test(product.size))) {
      curCode = 'XG';
    } else if (/\bg\b/i.test(pName) || (product.size && /\bg\b/i.test(product.size))) {
      curCode = 'G';
    } else if (/\bm\b/i.test(pName) || (product.size && /\bm\b/i.test(product.size))) {
      curCode = 'M';
    } else if (/\bp\b/i.test(pName) || (product.size && /\bp\b/i.test(product.size))) {
      curCode = 'P';
    }

    return { sizeOptions: resolved, currentSizeCode: curCode };
  }, [product, allProducts]);

  useEffect(() => {
    if (sizeOptions.length > 0) {
      const cur = sizeOptions.find(o => o.product.id === product.id) || sizeOptions[0];
      setTempSelectedOption(cur);
    }
  }, [product, sizeOptions]);

  // Lock scroll when size modal is open
  useEffect(() => {
    if (isSizeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isQtyModalOpen) {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSizeModalOpen, isQtyModalOpen]);

  const handleApplySize = () => {
    setIsSizeModalOpen(false);
    if (tempSelectedOption && tempSelectedOption.product.id !== product.id) {
      goToProductPage(tempSelectedOption.product);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Exact screenshot model state
  const reviewsData = useMemo(() => getProductReviewsData(product), [product]);
  const highlightTag = reviewsData?.highlightTags?.[0] || 'Gentil com pele sensível';
  const reviewsCount = product.reviews || reviewsData?.reviewsCount || 623;
  const luckyBadge = product.badges?.find(b => b.toLowerCase().includes('sorte'));
  const [activeNavTab, setActiveNavTab] = useState<'ofertas' | 'sobre' | 'avaliacoes'>('ofertas');
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const scrollToSection = (sectionId: 'ofertas' | 'sobre' | 'avaliacoes') => {
    setActiveNavTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sobreEl = document.getElementById('sobre');
      const avaliacoesEl = document.getElementById('avaliacoes');
      const scrollY = window.scrollY + 160;

      if (avaliacoesEl && scrollY >= avaliacoesEl.offsetTop) {
        setActiveNavTab('avaliacoes');
      } else if (sobreEl && scrollY >= sobreEl.offsetTop) {
        setActiveNavTab('sobre');
      } else {
        setActiveNavTab('ofertas');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when quantity sheet modal is open
  useEffect(() => {
    if (isQtyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isQtyModalOpen]);

  // Recommendations carousel scroll refs
  const boughtTrackRef = useRef<HTMLDivElement>(null);
  const similarTrackRef = useRef<HTMLDivElement>(null);

  // Track visibility of the buy options section ("Oferta Raia" / "Leve + Pague -")
  const buyOptionsRef = useRef<HTMLDivElement>(null);
  const [isBuyOptionsVisible, setIsBuyOptionsVisible] = useState(false);

  useEffect(() => {
    const el = buyOptionsRef.current;
    if (!el) return;

    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // It is visible if top is inside the viewport window and bottom is above bottom
      const visible = rect.top < windowHeight - 50 && rect.bottom > 50;
      setIsBuyOptionsVisible(visible);
    };

    checkVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBuyOptionsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
        rootMargin: '-20px 0px -20px 0px',
      }
    );
    observer.observe(el);

    const handleScroll = () => checkVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Price calculations
  const unitPrice = product.price;
  const formattedPrice = unitPrice.toFixed(2).replace('.', ',');
  const installmentPrice = (unitPrice / 3).toFixed(2).replace('.', ',');

  // Leve + Pague discount calculation (30% discount per unit for 2+ units)
  const levePagueUnitPrice = unitPrice * 0.70;
  const levePaguePriceFormatted = levePagueUnitPrice.toFixed(2).replace('.', ',');

  // Active price and quantity for buying
  const activeUnitPrice = selectedOption === 'leve-pague' ? levePagueUnitPrice : unitPrice;
  const activePriceFormatted = activeUnitPrice.toFixed(2).replace('.', ',');
  const activeQuantity = selectedOption === 'leve-pague' ? promoQty : ofertaQty;

  const handleBuy = () => {
    const productToAdd = {
      ...product,
      price: activeUnitPrice,
    };
    addToCart(productToAdd, activeQuantity);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    showToast(
      !isFavorite
        ? `${product.name} adicionado aos seus favoritos!`
        : `${product.name} removido dos favoritos.`
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link do produto copiado para a área de transferência!');
    } else {
      showToast('Link compartilhado com sucesso!');
    }
  };

  const handleCepCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = cepInput.replace(/\D/g, '');
    if (clean.length === 8) {
      setCepCalculated(true);
    } else {
      showToast('Por favor, informe um CEP válido com 8 dígitos.');
    }
  };

  // Fallbacks for product specs & details (matching screenshots with perfection)
  const brandName = product.brand || 'Vitergan Zinco';
  const code = product.productCode || '140081';
  const dosage = product.dosage || '1.';
  const ean = product.ean || '7896226109350';

  const descriptionText =
    product.description ||
    `O ${product.name} é um suplemento vitamínico e mineral antioxidante, composto por vitaminas e minerais que atuam contra radicais livres, moléculas que podem prejudicar o funcionamento adequado dos órgãos.`;

  const bullets = product.bullets || [
    'Suplemento vitamínico e mineral com ação antioxidante.',
    'Combate os radicais livres que podem prejudicar o funcionamento dos órgãos.',
    'Auxilia na proteção celular e no bem-estar geral.',
  ];

  const howToUseList = product.howToUse
    ? [product.howToUse]
    : [
        'Tomar 1 comprimido revestido ao dia.',
        'Ingerir o comprimido junto às refeições.',
      ];

  const warningsList = product.warnings || [
    'Não exceder a recomendação diária de consumo indicada na embalagem.',
    'Este produto não é um medicamento.',
    'Mantenha fora do alcance de crianças.',
  ];

  return (
    <div className="pdp-page" id="product-detail-page">
      {/* 1. Breadcrumbs (Image 1) */}
      <nav className="pdp-breadcrumb" aria-label="Navegação estrutural">
        <button onClick={goToHome} className="pdp-breadcrumb__link">
          Página Inicial
        </button>
        <span className="pdp-breadcrumb__sep">&gt;</span>
        <span className="pdp-breadcrumb__link">{product.category || 'Vida Saudável'}</span>
        <span className="pdp-breadcrumb__sep">&gt;</span>
        <span className="pdp-breadcrumb__link">{product.subcategory || 'Vitaminas'}</span>
        <span className="pdp-breadcrumb__sep">&gt;</span>
        <span className="pdp-breadcrumb__current">Multivitamínicos</span>
      </nav>

      <div className="pdp-content-container">
        {/* Left Side on Desktop / Linear flow on Mobile */}
        <div className="pdp-main-content">
          {/* 2. Title, Rating & Tag, Brand/Size & Action Buttons (EXACT Screenshot Model) */}
          <div className="pdp-header">
            <h1 className="pdp-title">{product.name}</h1>

            {/* Line 2: Rating Stars, Count in parenthesis, and Highlight Tag */}
            {isCosmeticOrPersonalCare(product) && (
              <div
                className="pdp-rating-row"
                onClick={() => scrollToSection('avaliacoes')}
                role="button"
                tabIndex={0}
                title="Ver avaliações deste produto"
              >
                <div className="pdp-rating-stars-group">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="#ffa100"
                      stroke="#ffa100"
                      strokeWidth="0.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="pdp-rating-count-amber">({reviewsCount})</span>
                </div>
                <span className="pdp-rating-tag-highlight">{highlightTag}</span>
              </div>
            )}

            {/* Line 3: Brand • Size on left, Heart and Share circular buttons on right */}
            <div className="pdp-meta-action-row">
              <div className="pdp-brand-size">
                <span className="pdp-brand">{brandName}</span>
                <span className="pdp-dot">•</span>
                <span className="pdp-size">{product.size}</span>
              </div>

              <div className="pdp-action-buttons">
                <button
                  className={`pdp-circle-btn ${isFavorite ? 'pdp-circle-btn--active' : ''}`}
                  onClick={handleFavoriteToggle}
                  aria-label="Adicionar aos favoritos"
                  title="Favoritar produto"
                >
                  <Heart
                    size={20}
                    fill={isFavorite ? '#d32f2f' : 'none'}
                    color={isFavorite ? '#d32f2f' : '#222'}
                    strokeWidth={1.75}
                  />
                </button>
                <button
                  className="pdp-circle-btn"
                  onClick={handleShare}
                  aria-label="Compartilhar produto"
                  title="Compartilhar produto"
                >
                  <Share2 size={20} color="#222" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Product Image Area with optional "+1 nº da sorte" badge and 10 indicator dots */}
          <div className="pdp-image-container">
            {luckyBadge && (
              <div className="pdp-lucky-badge">
                {luckyBadge}
              </div>
            )}

            <div className="pdp-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="pdp-main-img"
                onError={(e) => handleImageError(e, product)}
              />
            </div>

            {/* 10 Carousel Pagination Indicator Dots */}
            <div className="pdp-dots-indicator" aria-hidden="true">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={`pdp-dot-circle ${i === activeDotIndex ? 'pdp-dot-circle--active' : ''}`}
                  onClick={() => setActiveDotIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* 4. Sticky Navigation Tabs Bar (Ofertas, Sobre, Avaliações) */}
          <div className="pdp-nav-tabs-bar" id="pdp-nav-tabs">
            <button
              type="button"
              className={`pdp-nav-tab ${activeNavTab === 'ofertas' ? 'pdp-nav-tab--active' : ''}`}
              onClick={() => scrollToSection('ofertas')}
            >
              <span className="pdp-nav-tab__pill">Ofertas</span>
              {activeNavTab === 'ofertas' && <span className="pdp-nav-tab__indicator" />}
            </button>

            <button
              type="button"
              className={`pdp-nav-tab ${activeNavTab === 'sobre' ? 'pdp-nav-tab--active' : ''}`}
              onClick={() => scrollToSection('sobre')}
            >
              <span className="pdp-nav-tab__pill">Sobre</span>
              {activeNavTab === 'sobre' && <span className="pdp-nav-tab__indicator" />}
            </button>

            {isCosmeticOrPersonalCare(product) && (
              <button
                type="button"
                className={`pdp-nav-tab ${activeNavTab === 'avaliacoes' ? 'pdp-nav-tab--active' : ''}`}
                onClick={() => scrollToSection('avaliacoes')}
              >
                <span className="pdp-nav-tab__pill">Avaliações</span>
                {activeNavTab === 'avaliacoes' && <span className="pdp-nav-tab__indicator" />}
              </button>
            )}
          </div>

          {/* 5. "Vendido e entregue por Raia" (Image 1 & 2) */}
          <div className="pdp-seller-line">
            <span>Vendido e entregue por </span>
            <strong className="pdp-seller-raia">Raia</strong>
          </div>

          {/* 5.1 Size Selection Card (Matches exact user screenshot) */}
          {sizeOptions.length > 0 && (
            <div
              className="pdp-size-trigger-card"
              onClick={() => {
                const cur = sizeOptions.find(o => o.product.id === product.id) || sizeOptions[0];
                setTempSelectedOption(cur);
                setIsSizeModalOpen(true);
              }}
              role="button"
              tabIndex={0}
              id="pdp-size-trigger-btn"
              title="Escolher outro tamanho"
            >
              <div className="pdp-size-trigger-left">
                <img
                  src={product.image}
                  alt={product.name}
                  className="pdp-size-trigger-thumb"
                  onError={(e) => handleImageError(e, product)}
                />
                <span className="pdp-size-trigger-text">
                  Tamanho: <strong>{currentSizeCode}</strong>
                </span>
              </div>
              <ChevronRight size={20} color="#1c1c1c" className="pdp-size-trigger-chevron" />
            </div>
          )}

          {/* 6. Buy Box Option Cards (Image 2) */}
          <div className="pdp-buy-options" id="ofertas" ref={buyOptionsRef}>
            {/* Option 1: Oferta Raia (Default Selected) */}
            <div
              className={`pdp-option-card ${selectedOption === 'oferta-raia' ? 'pdp-option-card--selected' : 'pdp-option-card--unselected'}`}
              onClick={() => setSelectedOption('oferta-raia')}
              role="button"
              tabIndex={0}
            >
              <div className="pdp-option-card__header">
                <div className="pdp-radio">
                  <div className={`pdp-radio__outer ${selectedOption === 'oferta-raia' ? 'pdp-radio__outer--checked' : ''}`}>
                    {selectedOption === 'oferta-raia' && <div className="pdp-radio__inner" />}
                  </div>
                  <span className="pdp-option-card__title">Oferta Raia</span>
                </div>
              </div>

              <div className="pdp-option-card__body">
                <div className="pdp-price-row">
                  <span className="pdp-price-value">R$ {formattedPrice}</span>
                  <button
                    type="button"
                    className={`pdp-qty-btn ${isQtyModalOpen && selectedOption === 'oferta-raia' ? 'pdp-qty-btn--open' : ''}`}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedOption('oferta-raia');
                      setShowCustomQtyInput(false);
                      setIsQtyModalOpen(true);
                    }}
                    id="pdp-qty-btn"
                    aria-label="Selecionar quantidade"
                  >
                    <span>{ofertaQty}</span>
                    {isQtyModalOpen && selectedOption === 'oferta-raia' ? (
                      <ChevronUp size={16} className="pdp-qty-arrow" />
                    ) : (
                      <ChevronDown size={16} className="pdp-qty-arrow" />
                    )}
                  </button>
                </div>

                <div className="pdp-installment-badge">
                  Até 3x de R$ {installmentPrice} sem juros
                </div>

                <button
                  type="button"
                  className="pdp-payment-methods-link"
                  onClick={e => {
                    e.stopPropagation();
                    showToast('Aceitamos Pix, Boleto e Cartões em até 3x sem juros!');
                  }}
                >
                  <u>Formas de pagamento</u>
                </button>

                {selectedOption === 'oferta-raia' && (
                  <button
                    type="button"
                    className="pdp-card-buy-btn"
                    onClick={e => {
                      e.stopPropagation();
                      handleBuy();
                    }}
                    id="pdp-card-buy-btn"
                  >
                    Comprar
                  </button>
                )}
              </div>
            </div>

            {/* Option 2: Leve + Pague - (Image 2) */}
            <div
              className={`pdp-option-card pdp-option-card--promo ${selectedOption === 'leve-pague' ? 'pdp-option-card--selected' : 'pdp-option-card--unselected'}`}
              onClick={() => setSelectedOption('leve-pague')}
              role="button"
              tabIndex={0}
            >
              <div className="pdp-option-card__header">
                <div className="pdp-radio">
                  <div className={`pdp-radio__outer ${selectedOption === 'leve-pague' ? 'pdp-radio__outer--checked' : ''}`}>
                    {selectedOption === 'leve-pague' && <div className="pdp-radio__inner" />}
                  </div>
                  <span className="pdp-option-card__title">Leve + Pague -</span>
                </div>
              </div>

              <div className="pdp-option-card__body">
                <span className="pdp-promo-sub">A partir de 2 unidades, pague</span>
                <div className="pdp-promo-price-row">
                  <div className="pdp-promo-price-info">
                    <strong className="pdp-promo-price">R$ {levePaguePriceFormatted}</strong>
                    <span className="pdp-promo-each"> cada</span>
                  </div>
                  <button
                    type="button"
                    className={`pdp-qty-btn ${isQtyModalOpen && selectedOption === 'leve-pague' ? 'pdp-qty-btn--open' : ''}`}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedOption('leve-pague');
                      setShowCustomQtyInput(false);
                      setIsQtyModalOpen(true);
                    }}
                    id="pdp-qty-btn-promo"
                    aria-label="Selecionar quantidade"
                  >
                    <span>{promoQty}</span>
                    {isQtyModalOpen && selectedOption === 'leve-pague' ? (
                      <ChevronUp size={16} className="pdp-qty-arrow" />
                    ) : (
                      <ChevronDown size={16} className="pdp-qty-arrow" />
                    )}
                  </button>
                </div>

                {selectedOption === 'leve-pague' && (
                  <button
                    type="button"
                    className="pdp-card-buy-btn"
                    onClick={e => {
                      e.stopPropagation();
                      handleBuy();
                    }}
                    id="pdp-card-buy-btn-promo"
                  >
                    Comprar kit
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="pdp-divider" />

          {/* 6. Consultar formas de entrega (Image 2) */}
          <div className="pdp-delivery-section">
            <h3 className="pdp-delivery-title">Consultar formas de entrega</h3>
            <label className="pdp-delivery-label" htmlFor="pdp-cep-input">
              Insira seu CEP
            </label>
            <form onSubmit={handleCepCalculate} className="pdp-delivery-form">
              <input
                id="pdp-cep-input"
                type="text"
                placeholder="Ex.: 00000-000"
                maxLength={9}
                value={cepInput}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  const formatted = val.length > 5 ? `${val.slice(0, 5)}-${val.slice(5)}` : val;
                  setCepInput(formatted);
                  if (val.length === 8) {
                    setCepCalculated(true);
                  }
                }}
                className="pdp-delivery-input"
              />
            </form>

            <span className="pdp-delivery-helper">Ex.: 00000-000</span>

            {cepCalculated && (
              <div className="pdp-shipping-results">
                <div className="pdp-shipping-option">
                  <Clock size={16} color="#007f91" />
                  <div className="pdp-shipping-opt-info">
                    <strong>Entrega Expressa</strong>
                    <span>Tempo médio para entrega: de 3h a 5h</span>
                  </div>
                  <span className="pdp-shipping-opt-price">R$ 7,90</span>
                </div>

                <div className="pdp-shipping-option">
                  <Truck size={16} color="#008a5b" />
                  <div className="pdp-shipping-opt-info">
                    <strong>Entrega Normal</strong>
                    <span>Grátis para compras acima de R$ 50</span>
                  </div>
                  <span className="pdp-shipping-opt-price pdp-shipping-opt-price--free">Grátis</span>
                </div>

                <div className="pdp-shipping-option">
                  <Store size={16} color="#007f91" />
                  <div className="pdp-shipping-opt-info">
                    <strong>Retire na Loja Raia</strong>
                    <span>Pronto em 30 minutos</span>
                  </div>
                  <span className="pdp-shipping-opt-price pdp-shipping-opt-price--free">Grátis</span>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="pdp-divider" />

          {/* 7. Specs Box: Marca & Quantidade (Image 3) */}
          <div className="pdp-quick-specs">
            <div className="pdp-quick-spec-item">
              <Award size={18} className="pdp-quick-spec-icon" />
              <span className="pdp-quick-spec-label">Marca</span>
              <strong className="pdp-quick-spec-val">{brandName}</strong>
            </div>
            <div className="pdp-quick-spec-item">
              <Package size={18} className="pdp-quick-spec-icon" />
              <span className="pdp-quick-spec-label">Quantidade</span>
              <strong className="pdp-quick-spec-val">{product.size}</strong>
            </div>
          </div>

          {/* 8. Descrição do produto Card (Image 3 & 4) */}
          <div className="pdp-desc-card" id="sobre">
            <h3 className="pdp-desc-main-title">Descrição do produto</h3>

            <div className="pdp-desc-section">
              <h4 className="pdp-desc-subtitle">O que é e para que serve o {product.name}?</h4>
              <p className="pdp-desc-paragraph">{descriptionText}</p>
            </div>

            <div className="pdp-desc-section">
              <h4 className="pdp-desc-subtitle">Benefícios</h4>
              <ul className="pdp-desc-bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b.replace(/^[•\s]+/, '')}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-desc-section">
              <h4 className="pdp-desc-subtitle">Como usar o {product.name}?</h4>
              <ul className="pdp-desc-bullets">
                {howToUseList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pdp-desc-section">
              <h4 className="pdp-desc-subtitle">Advertências</h4>
              <ul className="pdp-desc-bullets">
                {warningsList.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>

            {/* Características Table (Image 4) */}
            <div className="pdp-features-section">
              <h4 className="pdp-features-title">Características</h4>
              <div className="pdp-features-table">
                <div className="pdp-feature-row">
                  <span className="pdp-feature-key">Código do produto</span>
                  <span className="pdp-feature-val">{code}</span>
                </div>
                <div className="pdp-feature-row">
                  <span className="pdp-feature-key">Dosagem</span>
                  <span className="pdp-feature-val">{dosage}</span>
                </div>
                <div className="pdp-feature-row">
                  <span className="pdp-feature-key">EAN</span>
                  <span className="pdp-feature-val">{ean}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="pdp-divider" />

          {/* 9. Carousel: Quem comprou, também se interessou (Image 4) */}
          <section className="pdp-carousel-section">
            <h3 className="pdp-carousel-heading">Quem comprou, também se interessou</h3>
            <div className="pdp-cards-scroll-track" ref={boughtTrackRef}>
              {quemComprouTambem.map(item => (
                <div key={item.id} className="pdp-carousel-card-wrap">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </section>

          {/* 10. Carousel: Similares que você pode se interessar */}
          {similarProducts.length > 0 && (
            <section className="pdp-carousel-section">
              <h3 className="pdp-carousel-heading">Similares que você pode se interessar</h3>
              <div className="pdp-cards-scroll-track" ref={similarTrackRef}>
                {similarProducts.map(item => (
                  <div key={item.id} className="pdp-carousel-card-wrap">
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 10.5. Customer Reviews Section (Images 1, 2, 3, 4) */}
          {isCosmeticOrPersonalCare(product) && (
            <ProductReviews product={product} />
          )}
        </div>
      </div>

      {/* Floating Back to Top Button (Images 1, 2, 3, 4) */}
      <button
        type="button"
        className="pdp-floating-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1c1c1c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>

      {/* 12. Fixed Sticky Bottom Bar on Mobile (only when "Oferta Raia" or "Leve + Pague -" is NOT visible) */}
      <div
        className={`pdp-sticky-bar ${!isBuyOptionsVisible ? 'pdp-sticky-bar--visible' : ''}`}
        id="pdp-sticky-bar"
      >
        <div className="pdp-sticky-bar__info">
          {selectedOption === 'leve-pague' ? (
            <>
              <span className="pdp-sticky-bar__title">Leve + Pague -</span>
              <span className="pdp-sticky-bar__sub">A partir de 2 unidades, pague</span>
              <div className="pdp-sticky-bar__price-row">
                <strong className="pdp-sticky-bar__price">R$ {levePaguePriceFormatted}</strong>
                <span className="pdp-sticky-bar__each"> cada</span>
              </div>
            </>
          ) : (
            <>
              <span className="pdp-sticky-bar__title">Oferta Raia</span>
              <span className="pdp-sticky-bar__sub">Até 3x de R$ {installmentPrice} sem juros</span>
              <div className="pdp-sticky-bar__price-row">
                <strong className="pdp-sticky-bar__price">R$ {formattedPrice}</strong>
              </div>
            </>
          )}
        </div>
        <button
          type="button"
          className="pdp-sticky-bar__btn"
          onClick={handleBuy}
          id="pdp-sticky-buy-btn"
        >
          {selectedOption === 'leve-pague' ? 'Comprar kit' : 'Comprar'}
        </button>
      </div>

      {/* 13. Quantity Selection Bottom Sheet Modal */}
      {isQtyModalOpen && (
        <div
          className="pdp-qty-sheet-overlay"
          onClick={() => {
            setIsQtyModalOpen(false);
            setShowCustomQtyInput(false);
          }}
          aria-hidden="true"
        >
          <div
            className="pdp-qty-sheet"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pdp-qty-sheet-title"
          >
            <div className="pdp-qty-sheet__handle" />
            <div className="pdp-qty-sheet__header">
              <h3 id="pdp-qty-sheet-title" className="pdp-qty-sheet__title">Quantidade</h3>
              <button
                type="button"
                className="pdp-qty-sheet__close"
                onClick={() => {
                  setIsQtyModalOpen(false);
                  setShowCustomQtyInput(false);
                }}
                aria-label="Fechar"
              >
                <X size={22} />
              </button>
            </div>

            <div className="pdp-qty-sheet__list">
              {(selectedOption === 'leve-pague' ? [2, 3, 4, 5] : [1, 2, 3, 4, 5]).map(n => (
                <button
                  key={n}
                  type="button"
                  className={`pdp-qty-sheet__item ${activeQuantity === n && !showCustomQtyInput ? 'pdp-qty-sheet__item--selected' : ''}`}
                  onClick={() => {
                    if (selectedOption === 'leve-pague') {
                      setPromoQty(n);
                    } else {
                      setOfertaQty(n);
                    }
                    setShowCustomQtyInput(false);
                    setIsQtyModalOpen(false);
                  }}
                >
                  <span>{n === 1 ? '1 unidade' : `${n} unidades`}</span>
                </button>
              ))}

              {!showCustomQtyInput ? (
                <button
                  type="button"
                  className={`pdp-qty-sheet__item ${activeQuantity > 5 ? 'pdp-qty-sheet__item--selected' : ''}`}
                  onClick={() => setShowCustomQtyInput(true)}
                >
                  <span>Mais de 5 unidades</span>
                </button>
              ) : (
                <div className="pdp-qty-sheet__custom-wrap">
                  <span className="pdp-qty-sheet__custom-label">Informe a quantidade:</span>
                  <div className="pdp-qty-sheet__custom-row">
                    <input
                      type="number"
                      min={selectedOption === 'leve-pague' ? 2 : 1}
                      max={99}
                      value={customQtyValue}
                      onChange={e => setCustomQtyValue(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') {
                          const val = parseInt(customQtyValue, 10);
                          const minVal = selectedOption === 'leve-pague' ? 2 : 1;
                          if (val && val >= minVal) {
                            if (selectedOption === 'leve-pague') {
                              setPromoQty(val);
                            } else {
                              setOfertaQty(val);
                            }
                            setIsQtyModalOpen(false);
                            setShowCustomQtyInput(false);
                          }
                        }
                      }}
                      className="pdp-qty-sheet__custom-input"
                      placeholder="Ex: 6"
                      autoFocus
                    />
                    <button
                      type="button"
                      className="pdp-qty-sheet__custom-btn"
                      onClick={() => {
                        const val = parseInt(customQtyValue, 10);
                        const minVal = selectedOption === 'leve-pague' ? 2 : 1;
                        if (val && val >= minVal) {
                          if (selectedOption === 'leve-pague') {
                            setPromoQty(val);
                          } else {
                            setOfertaQty(val);
                          }
                          setIsQtyModalOpen(false);
                          setShowCustomQtyInput(false);
                        }
                      }}
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 8. Size Selection Modal Sheet (Matches exact user screenshot) */}
      {isSizeModalOpen && (
        <div
          className="pdp-size-modal__overlay"
          onClick={() => setIsSizeModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="pdp-size-modal__container" onClick={e => e.stopPropagation()}>
            {/* Drag Handle Bar */}
            <div className="pdp-size-modal__handle-wrap">
              <div className="pdp-size-modal__handle-bar" />
            </div>

            {/* Header: Escolha uma opção + X Close Button */}
            <div className="pdp-size-modal__header">
              <span className="pdp-size-modal__title">Escolha uma opção</span>
              <button
                type="button"
                className="pdp-size-modal__close-btn"
                onClick={() => setIsSizeModalOpen(false)}
                aria-label="Fechar modal"
              >
                <X size={22} color="#1c1c1c" />
              </button>
            </div>

            {/* Sub-header: Tamanho: {selectedSize} + Chevron Up ^ */}
            <div className="pdp-size-modal__subheader">
              <span className="pdp-size-modal__sublabel">
                Tamanho: <strong>{tempSelectedOption?.sizeCode || currentSizeCode}</strong>
              </span>
              <ChevronUp size={20} color="#1c1c1c" />
            </div>

            {/* Options List with Rounded Buttons */}
            <div className="pdp-size-modal__options-list">
              {sizeOptions.map(opt => {
                const isSelected = (tempSelectedOption?.product.id || product.id) === opt.product.id;
                return (
                  <button
                    key={opt.product.id}
                    type="button"
                    className={`pdp-size-modal__option-item ${
                      isSelected ? 'pdp-size-modal__option-item--selected' : ''
                    }`}
                    onClick={() => setTempSelectedOption(opt)}
                  >
                    <span>{opt.sizeCode}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer with Aplicar Button */}
            <div className="pdp-size-modal__footer">
              <button
                type="button"
                className="pdp-size-modal__apply-btn"
                onClick={handleApplySize}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
