import React, { useEffect } from 'react';
import {
  X,
  ChevronRight,
  HeartPulse,
  ClipboardList,
  Store,
  BadgePercent,
  Smartphone,
  Newspaper,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useScrollLock } from '../../utils/scrollLock';
import './MobileMenuSheet.css';

interface MobileMenuSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

const MobileMenuSheet: React.FC<MobileMenuSheetProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
}) => {
  const { setActiveModal, setSearchQuery, showToast, goToSearchPage } = useCart();

  useScrollLock(isOpen);

  if (!isOpen) return null;

  const handleCategoryClick = (categoryName: string) => {
    onClose();
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    } else {
      setSearchQuery(categoryName);
      goToSearchPage(categoryName);
    }
  };

  const handleLinkClick = (action: string, toastMsg?: string) => {
    onClose();
    if (action === 'servicos') {
      const el = document.getElementById('service-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else showToast('Conheça os Serviços de Saúde da Droga Raia!');
    } else if (action === 'descontos') {
      setActiveModal('coupons');
    } else if (action === 'lojas-parceiras') {
      const el = document.getElementById('monta-que-desconta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else showToast('Confira as Lojas Parceiras e Ofertas!');
    } else if (action === 'ofertas-app' || action === 'baixe-app') {
      showToast('Baixe o App Droga Raia na Google Play ou App Store e ganhe benefícios exclusivos!');
    } else if (action === 'blog') {
      const el = document.getElementById('section-cuidados');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else showToast('Acesse o Blog Droga Raia para dicas de saúde e bem-estar!');
    } else if (action === 'farmacias') {
      showToast('Encontre a Droga Raia mais próxima no nosso localizador de lojas!');
    } else if (action === 'sac') {
      showToast('Central de Atendimento Droga Raia: (11) 3003-7242');
    } else if (action === 'trabalhe') {
      showToast('Venha fazer parte da RD Saúde! Acesse nossas oportunidades em trabalheconosco.vagas.com.br/rd');
    } else if (action === 'historia') {
      showToast('Droga Raia: Cuidando da saúde e bem-estar dos brasileiros desde 1905.');
    } else if (action === 'seguranca') {
      showToast('Segurança digital: Seus dados estão 100% protegidos pela LGPD.');
    } else if (toastMsg) {
      showToast(toastMsg);
    }
  };

  return (
    <div className="mobile-sheet__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="mobile-sheet__container" onClick={e => e.stopPropagation()}>
        {/* 1. Drag Handle Bar */}
        <div className="mobile-sheet__handle-wrap">
          <div className="mobile-sheet__handle-bar" />
        </div>

        {/* 2. Top Header Bar (Raia Green Symbol on Left, X Close Button on Right) */}
        <div className="mobile-sheet__top-bar">
          <div className="mobile-sheet__logo-wrap">
            <img
              src="/raia-symbol.png"
              alt="Droga Raia"
              className="mobile-sheet__logo"
            />
          </div>
          <button
            type="button"
            className="mobile-sheet__close-btn"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X size={24} color="#1c1c1c" strokeWidth={1.9} />
          </button>
        </div>

        {/* 3. Scrollable Menu Body (EXACT structure from screenshots without login/register) */}
        <div className="mobile-sheet__scrollable-body">
          {/* Group 1: Serviços, Benefícios, Parceiras, App, Blog */}
          <div className="mobile-sheet__group">
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('servicos')}
            >
              <div className="mobile-sheet__item-left">
                <HeartPulse size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Serviços de saúde</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('descontos')}
            >
              <div className="mobile-sheet__item-left">
                <ClipboardList size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Descontos e benefícios</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('lojas-parceiras')}
            >
              <div className="mobile-sheet__item-left">
                <div className="mobile-sheet__icon-with-badge">
                  <Store size={21} className="mobile-sheet__item-icon" />
                  <span className="mobile-sheet__badge-check">✓</span>
                </div>
                <span className="mobile-sheet__item-label">Lojas parceiras</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            <button
              type="button"
              className="mobile-sheet__item mobile-sheet__item--no-chevron"
              onClick={() => handleLinkClick('ofertas-app')}
            >
              <div className="mobile-sheet__item-left">
                <BadgePercent size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Ofertas no app</span>
              </div>
            </button>

            <button
              type="button"
              className="mobile-sheet__item mobile-sheet__item--no-chevron"
              onClick={() => handleLinkClick('baixe-app')}
            >
              <div className="mobile-sheet__item-left">
                <Smartphone size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Baixe o app</span>
              </div>
            </button>

            <button
              type="button"
              className="mobile-sheet__item mobile-sheet__item--no-chevron"
              onClick={() => handleLinkClick('blog')}
            >
              <div className="mobile-sheet__item-left">
                <Newspaper size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Blog</span>
              </div>
            </button>
          </div>

          <div className="mobile-sheet__divider" />

          {/* Group 2: Categorias */}
          <div className="mobile-sheet__group">
            <div className="mobile-sheet__section-title">Categorias</div>

            {[
              'Medicamentos',
              'Vida Saudável',
              'Mamãe e bebê',
              'Beleza',
              'Cabelo',
              'Beleza Premium',
              'Higiene pessoal',
              'Pet',
              'Marcas Exclusivas',
            ].map(cat => (
              <button
                key={cat}
                type="button"
                className="mobile-sheet__item"
                onClick={() => handleCategoryClick(cat)}
              >
                <div className="mobile-sheet__item-left">
                  <span className="mobile-sheet__item-label">{cat}</span>
                </div>
                <ChevronRight size={19} className="mobile-sheet__item-chevron" />
              </button>
            ))}

            {/* General Direct Links (Image 2) */}
            {[
              'Mais Buscados',
              'Bulas de A a Z',
              'Todas as Categorias',
              'Todas as Classes Terapêuticas',
              'Todos os Princípios Ativos',
              'Todas as Lojas Parceiras',
              'Todas as Marcas',
              'Todas as Campanhas',
            ].map(item => (
              <button
                key={item}
                type="button"
                className="mobile-sheet__item mobile-sheet__item--plain"
                onClick={() => handleCategoryClick(item)}
              >
                <div className="mobile-sheet__item-left">
                  <span className="mobile-sheet__item-label mobile-sheet__item-label--regular">
                    {item}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Group 3: Institutional & Support Section (Image 2 & 3) */}
          <div className="mobile-sheet__group mobile-sheet__group--institutional">
            {/* Encontre uma farmácia */}
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('farmacias')}
            >
              <div className="mobile-sheet__item-left">
                {/* Pharmacy Store Icon with awning and cross */}
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#262626"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mobile-sheet__item-icon"
                >
                  <path d="M3 21h18M5 21V10l7-5 7 5v11" />
                  <path d="M12 9v6M9 12h6" />
                </svg>
                <span className="mobile-sheet__item-label">Encontre uma farmácia</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            {/* Central de Atendimento */}
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('sac')}
            >
              <div className="mobile-sheet__item-left">
                <HelpCircle size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Central de Atendimento</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            {/* Trabalhe Conosco (Raia Symbol Dark) */}
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('trabalhe')}
            >
              <div className="mobile-sheet__item-left">
                <img
                  src="/raia-symbol.png"
                  alt=""
                  className="mobile-sheet__raia-icon-dark"
                />
                <span className="mobile-sheet__item-label">Trabalhe Conosco</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            {/* Nossa História (Raia Symbol Dark) */}
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('historia')}
            >
              <div className="mobile-sheet__item-left">
                <img
                  src="/raia-symbol.png"
                  alt=""
                  className="mobile-sheet__raia-icon-dark"
                />
                <span className="mobile-sheet__item-label">Nossa História</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>

            {/* Segurança digital */}
            <button
              type="button"
              className="mobile-sheet__item"
              onClick={() => handleLinkClick('seguranca')}
            >
              <div className="mobile-sheet__item-left">
                <ShieldAlert size={21} className="mobile-sheet__item-icon" />
                <span className="mobile-sheet__item-label">Segurança digital</span>
              </div>
              <ChevronRight size={19} className="mobile-sheet__item-chevron" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuSheet;
