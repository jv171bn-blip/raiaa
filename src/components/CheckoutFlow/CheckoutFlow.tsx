import React, { useState, useEffect, useRef } from 'react';
import {
  X, Check, Truck, Store, ChevronDown, ChevronUp, ChevronLeft, Trash2, MapPin,
  Clock, Calendar, ChevronRight, Headphones, Smartphone, AlertCircle, CreditCard,
  Search, Menu, ShoppingBasket, SlidersHorizontal, RefreshCw, CheckCircle2,
  Sparkles, Star, Gift, Tag,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Footer from '../Footer/Footer';
import ProductCard from '../ProductCard/ProductCard';
import {
  Product,
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  asianBeauty,
  hairCareProducts,
  quemComprouTambem,
  similaresVocePode,
  viterganZincoProduct,
  flexoneProduct,
  deduplicateProducts,
  getSimilarProducts,
} from '../../data/products';
import { todosProdutosExpandidos } from '../../data/catalogExpanded';
import './CheckoutFlow.css';
import { RaiaLoadingBasket } from './RaiaLoadingBasket';
import { fetchAddressByCep, PharmacyStore, getNearbyPharmacies } from '../../utils/cepService';
import { useScrollLock } from '../../utils/scrollLock';
import { NearbyPharmacies } from '../NearbyPharmacies/NearbyPharmacies';
import { Pharmacy, UserAddress } from '../../services/pharmacyLocationService';
import {
  createFlevoPixTransaction,
  checkFlevoPixStatus,
  FlevoTransactionResponse,
} from '../../services/flevoPayService';

const allCandidateProducts: Product[] = deduplicateProducts([
  ...mostBought,
  ...blackDayProducts,
  ...weekHighlights,
  ...favoriteBrands,
  ...fraldasProducts,
  ...remediosProducts,
  ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts,
  ...higieneBucalPersonalProducts,
  ...asianBeauty,
  ...quemComprouTambem,
  ...similaresVocePode,
  ...hairCareProducts,
  ...todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
]);


type CheckoutStep = 'cart' | 'step1' | 'step2' | 'step3';
type DeliveryMode = 'address' | 'pickup';
type DeliveryType = 'express' | 'scheduled' | 'normal' | null;
type PaymentMethod = 'pix' | 'googlepay' | 'nupay' | 'credit' | null;

const fmt = (v: number) => 'R$ ' + v.toFixed(2).replace('.', ',');
const PIX_DISCOUNT_RATE = 0.1;

export const getShippingRates = (subtotal: number) => {
  const isFreeShipping = subtotal >= 149.90;

  if (isFreeShipping) {
    return {
      expressPrice: 0,
      scheduledPrice: 0,
      normalPrice: 0,
      isFreeShipping: true,
    };
  }

  let mainShippingFee = 10.99;
  if (subtotal >= 112.43) {
    mainShippingFee = 7.99;
  } else if (subtotal >= 74.95) {
    mainShippingFee = 8.99;
  } else if (subtotal >= 37.48) {
    mainShippingFee = 9.99;
  } else {
    mainShippingFee = 10.99;
  }

  // "Receba em até 1 dia útil": sempre R$ 2,00 mais barato que o valor do frete
  const normalShippingFee = Math.max(0, mainShippingFee - 2);

  return {
    expressPrice: mainShippingFee,
    scheduledPrice: mainShippingFee,
    normalPrice: normalShippingFee,
    isFreeShipping: false,
  };
};

/* ── AddedToCartModal (Exact Raia Bottom Sheet Pop-Up) ── */
export const AddedToCartModal: React.FC<{
  onClose: () => void;
  onGoToCart: () => void;
  onContinue: () => void;
}> = ({ onClose, onGoToCart, onContinue }) => {
  useScrollLock(true);
  const { items, subtotal, totalItemsCount, lastAddedProduct } = useCart();
  const displayProduct =
    lastAddedProduct || (items.length > 0 ? items[items.length - 1].product : null);

  // Compute up to 3 thumbnails to display stacked cards in cart summary row
  const cartThumbnails = React.useMemo(() => {
    const list: { id: string; image: string; name: string }[] = [];
    if (items.length > 1) {
      // Multiple distinct products
      for (const item of items) {
        if (list.length < 3) {
          list.push({
            id: `item-${item.product.id}`,
            image: item.product.image,
            name: item.product.name,
          });
        }
      }
    } else if (items.length === 1) {
      // Single product, expand up to 3 if quantity > 1 (e.g. 3 units in cart)
      const qty = Math.min(items[0].quantity, 3);
      for (let i = 0; i < qty; i++) {
        list.push({
          id: `item-${items[0].product.id}-${i}`,
          image: items[0].product.image,
          name: items[0].product.name,
        });
      }
    }
    return list;
  }, [items]);

  return (
    <div className="atc-overlay" onClick={onClose}>
      <div className="atc-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* Mobile drag handle bar */}
        <div className="atc-drag-handle" />

        {/* Header */}
        <div className="atc-header">
          <h3 className="atc-title">Você adicionou a sua cesta:</h3>
          <button className="atc-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        {/* Product row */}
        {displayProduct && (
          <div className="atc-added-item">
            <div className="atc-added-item__img-wrap">
              <img
                src={displayProduct.image}
                alt={displayProduct.name}
                className="atc-added-item__img"
              />
              <div className="atc-added-item__badge" aria-label="Adicionado">
                <Check size={12} strokeWidth={3.5} color="#fff" />
              </div>
            </div>
            <div className="atc-added-item__info">
              <p className="atc-added-item__name">{displayProduct.name}</p>
              <p className="atc-added-item__price">{fmt(displayProduct.price)}</p>
            </div>
          </div>
        )}

        {/* Cart summary row with overlapping product stack */}
        <div className="atc-summary-row">
          <div className="atc-summary-thumbs-wrap">
            {cartThumbnails.length <= 1 ? (
              <div className="atc-summary-img-wrap">
                <img
                  src={cartThumbnails[0]?.image || displayProduct?.image || ''}
                  alt=""
                  className="atc-summary-img"
                />
              </div>
            ) : (
              <div className="atc-summary-thumbs-stack">
                {cartThumbnails.map((thumb, idx) => (
                  <div
                    key={thumb.id}
                    className="atc-summary-stacked-thumb"
                    style={{
                      zIndex: idx + 1,
                      marginLeft: idx === 0 ? 0 : '-26px',
                    }}
                    title={thumb.name}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.name}
                      className="atc-summary-img"
                    />
                  </div>
                ))}
                {totalItemsCount > 3 && (
                  <div
                    className="atc-summary-stacked-more"
                    style={{ zIndex: 10, marginLeft: '-18px' }}
                  >
                    +{totalItemsCount - 3}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="atc-summary-info">
            <span className="atc-summary-count">
              {totalItemsCount} {totalItemsCount === 1 ? 'produto' : 'produtos'} em sua cesta
            </span>
            <span className="atc-summary-price">{fmt(subtotal)}</span>
          </div>
        </div>

        {/* Action buttons (full pill design) */}
        <div className="atc-actions">
          <button
            type="button"
            className="atc-btn-primary"
            onClick={onGoToCart}
            id="atc-go-to-cart-btn"
          >
            Ir para cesta
          </button>
          <button
            type="button"
            className="atc-btn-secondary"
            onClick={onContinue}
            id="atc-continue-btn"
          >
            Continuar comprando
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── ShippingRulesModal (Modal Central Compacto - Tabela Limpa) ── */
const ShippingRulesModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  subtotal: number;
}> = ({ isOpen, onClose, subtotal }) => {
  useScrollLock(isOpen);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tiers = [
    { range: 'Até R$ 37,50', price: 'Frete normal', min: 0, max: 37.48, isFree: false },
    { range: 'De R$ 37,50 a R$ 75,00', price: 'R$ 9,99', min: 37.48, max: 74.95, isFree: false },
    { range: 'De R$ 75,00 a R$ 112,50', price: 'R$ 8,99', min: 74.95, max: 112.43, isFree: false },
    { range: 'De R$ 112,50 a R$ 149,90', price: 'R$ 7,99', min: 112.43, max: 149.90, isFree: false },
    { range: 'A partir de R$ 149,90', price: 'Grátis', min: 149.90, max: Infinity, isFree: true },
  ];

  return (
    <div className="shipping-rules-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="shipping-rules-compact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="shipping-rules-compact-header">
          <div className="shipping-rules-compact-title-wrap">
            <Truck size={17} className="shipping-rules-compact-icon" />
            <h3 className="shipping-rules-compact-title">Níveis de desconto no frete</h3>
          </div>
          <button className="shipping-rules-compact-close" onClick={onClose} aria-label="Fechar" type="button">
            <X size={16} />
          </button>
        </div>

        <table className="shipping-rules-compact-table">
          <thead>
            <tr>
              <th className="th-left">VALOR DA COMPRA</th>
              <th className="th-right">VALOR DO FRETE</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t, idx) => {
              const isCurrent = subtotal >= t.min && subtotal < t.max;
              return (
                <tr key={idx} className={isCurrent ? 'tr-current' : ''}>
                  <td className="td-left">
                    <span className="td-range">{t.range}</span>
                    {isCurrent && <span className="td-current-tag">Atual</span>}
                  </td>
                  <td className={`td-right ${t.isFree ? 'td-free' : ''}`}>
                    {t.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="shipping-rules-compact-footer">
          <button className="shipping-rules-compact-btn" type="button" onClick={onClose}>
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── ShippingBar ── */
const ShippingBar: React.FC<{ subtotal: number }> = ({ subtotal }) => {
  const [showRulesModal, setShowRulesModal] = useState(false);

  const freeAt = 149.90;
  const t799 = 112.43;
  const t899 = 74.95;
  const t999 = 37.48;

  // Total continuous progress (0% to 100%) across full purchase towards R$ 149,90
  const totalProgress = Math.min(100, Math.max(0, (subtotal / freeAt) * 100));

  // 4 equal 25% segments growing linearly and smoothly cent-by-cent
  const seg1 = Math.min(100, Math.max(0, (totalProgress / 25) * 100));
  const seg2 = Math.min(100, Math.max(0, ((totalProgress - 25) / 25) * 100));
  const seg3 = Math.min(100, Math.max(0, ((totalProgress - 50) / 25) * 100));
  const seg4 = Math.min(100, Math.max(0, ((totalProgress - 75) / 25) * 100));

  // Determine current reached tier and next target discount
  let currentTier: 'none' | '9.99' | '8.99' | '7.99' | 'gratis' = 'none';
  let nextTierLabel = '';
  let missing = 0;

  if (subtotal >= freeAt) {
    currentTier = 'gratis';
    nextTierLabel = '';
    missing = 0;
  } else if (subtotal >= t799) {
    currentTier = '7.99';
    nextTierLabel = 'Grátis';
    missing = Math.max(0, freeAt - subtotal);
  } else if (subtotal >= t899) {
    currentTier = '8.99';
    nextTierLabel = 'R$ 7,99';
    missing = Math.max(0, t799 - subtotal);
  } else if (subtotal >= t999) {
    currentTier = '9.99';
    nextTierLabel = 'R$ 8,99';
    missing = Math.max(0, t899 - subtotal);
  } else {
    currentTier = 'none';
    nextTierLabel = 'R$ 9,99';
    missing = Math.max(0, t999 - subtotal);
  }

  const reached999 = subtotal >= t999;
  const reached899 = subtotal >= t899;
  const reached799 = subtotal >= t799;
  const reachedFree = subtotal >= freeAt;

  return (
    <div className="cart-page__shipping-bar">
      {/* Top Row: Next discount message & (?) tooltip button */}
      <div className="cart-page__shipping-top">
        <div className="cart-page__shipping-text">
          {currentTier === 'gratis' ? (
            <span className="cart-page__shipping-free">
              Você tem <strong>Frete Grátis</strong>!
            </span>
          ) : nextTierLabel === 'Grátis' ? (
            <span>
              Adicione <strong>{fmt(missing)}</strong> para entrega <strong>Grátis</strong>
            </span>
          ) : (
            <span>
              Adicione <strong>{fmt(missing)}</strong> para entrega por <strong>{nextTierLabel}</strong>
            </span>
          )}
        </div>
        <button
          className="cart-page__shipping-help"
          title="Ver níveis de desconto no frete"
          type="button"
          onClick={() => setShowRulesModal(true)}
        >
          ?
        </button>
      </div>

      {/* Bottom Row: Delivery Truck + 4 Segments and Labels */}
      <div className="cart-page__shipping-bottom">
        <div className="cart-page__shipping-truck-wrap">
          <svg
            width="22"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            stroke="#168846"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cart-page__shipping-truck"
          >
            <path d="M1 4h4M1 8h2" />
            <rect x="5" y="2" width="11" height="10" rx="1" />
            <path d="M16 6h3.5l2.5 3.5V12h-6V6z" />
            <circle cx="8.5" cy="14.5" r="2" />
            <circle cx="18.5" cy="14.5" r="2" />
          </svg>
        </div>

        <div className="cart-page__shipping-progress-area">
          {/* Segmented Track with Cent-by-Cent Dynamic Fill */}
          <div className="cart-page__shipping-track-segmented">
            <div className="cart-page__shipping-segment">
              <div
                className="cart-page__shipping-segment-fill"
                style={{ width: `${seg1.toFixed(2)}%` }}
              />
            </div>
            <div className="cart-page__shipping-segment">
              <div
                className="cart-page__shipping-segment-fill"
                style={{ width: `${seg2.toFixed(2)}%` }}
              />
            </div>
            <div className="cart-page__shipping-segment">
              <div
                className="cart-page__shipping-segment-fill"
                style={{ width: `${seg3.toFixed(2)}%` }}
              />
            </div>
            <div className="cart-page__shipping-segment">
              <div
                className="cart-page__shipping-segment-fill"
                style={{ width: `${seg4.toFixed(2)}%` }}
              />
            </div>
          </div>

          {/* Labels aligned under segments */}
          <div className="cart-page__shipping-labels">
            <div className={`cart-page__shipping-col ${reached999 ? 'cart-page__shipping-col--reached' : ''}`}>
              <span>9,99</span>
              {currentTier === '9.99' && (
                <span className="cart-page__shipping-check-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#168846" />
                    <path d="M3.5 6.2L5.2 7.9L8.5 4.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>

            <div className={`cart-page__shipping-col ${reached899 ? 'cart-page__shipping-col--reached' : ''}`}>
              <span>8,99</span>
              {currentTier === '8.99' && (
                <span className="cart-page__shipping-check-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#168846" />
                    <path d="M3.5 6.2L5.2 7.9L8.5 4.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>

            <div className={`cart-page__shipping-col ${reached799 ? 'cart-page__shipping-col--reached' : ''}`}>
              <span>7,99</span>
              {currentTier === '7.99' && (
                <span className="cart-page__shipping-check-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#168846" />
                    <path d="M3.5 6.2L5.2 7.9L8.5 4.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>

            <div className={`cart-page__shipping-col ${reachedFree ? 'cart-page__shipping-col--reached' : ''}`}>
              <span>Grátis</span>
              {currentTier === 'gratis' && (
                <span className="cart-page__shipping-check-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="6" fill="#168846" />
                    <path d="M3.5 6.2L5.2 7.9L8.5 4.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal de Níveis de Desconto no Frete */}
      <ShippingRulesModal
        isOpen={showRulesModal}
        onClose={() => setShowRulesModal(false)}
        subtotal={subtotal}
      />
    </div>
  );
};

/* ── Scheduled Delivery Models & Helpers ── */
interface ScheduledSlotData {
  day: 'hoje' | 'amanha';
  dateFormatted: string;
  slot: string;
  fullLabel: string;
}

interface ScheduledTimeSlot {
  id: string;
  startHour: number;
  label: string;
}

const SCHEDULED_TIME_SLOTS: ScheduledTimeSlot[] = Array.from({ length: 24 }, (_, i) => {
  const start = String(i).padStart(2, '0');
  const end = String((i + 1) % 24).padStart(2, '0');
  return {
    id: `${start}-${end}`,
    startHour: i,
    label: `${start}:00 - ${end}:00`,
  };
});

const getScheduledDateLabels = () => {
  const now = new Date();
  const formatDM = (d: Date) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  };
  const todayStr = formatDM(now);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = formatDM(tomorrow);
  return { todayStr, tomorrowStr };
};

const getAvailableScheduledSlots = (day: 'hoje' | 'amanha') => {
  const now = new Date();
  const currentHour = now.getHours();
  // Regra: entrega 24h com agendamento de no mínimo 5 horas depois
  // Exemplo: comprando agora às 15h, só pode agendar a partir das 20h
  const minAllowedHour = currentHour + 5;

  if (day === 'hoje') {
    return SCHEDULED_TIME_SLOTS.filter((s) => s.startHour >= minAllowedHour);
  }

  // day === 'amanha'
  if (minAllowedHour >= 24) {
    const minTomorrowHour = minAllowedHour - 24;
    return SCHEDULED_TIME_SLOTS.filter((s) => s.startHour >= minTomorrowHour);
  }

  return SCHEDULED_TIME_SLOTS;
};

const getNextAvailableScheduledDesc = () => {
  const todaySlots = getAvailableScheduledSlots('hoje');
  if (todaySlots.length > 0) {
    return `A partir de hoje, ${todaySlots[0].label}`;
  }
  const tomorrowSlots = getAvailableScheduledSlots('amanha');
  if (tomorrowSlots.length > 0) {
    return `A partir de amanhã, ${tomorrowSlots[0].label}`;
  }
  return 'Entrega agendada 24h';
};

/* ── DeliveryModal (Exact match to Image 1: "Confira o endereço") ── */
const DeliveryModal: React.FC<{
  onClose: () => void;
  onSelect: (t: DeliveryType) => void;
  onSelectScheduled?: () => void;
  onAlterAddress?: () => void;
  subtotal?: number;
  savedAddress?: AddressData | null;
  cepAddress?: string | null;
  scheduledSlot?: ScheduledSlotData | null;
}> = ({
  onClose,
  onSelect,
  onSelectScheduled,
  onAlterAddress,
  subtotal = 0,
  savedAddress,
  cepAddress,
  scheduledSlot,
}) => {
  useScrollLock(true);
  const rates = getShippingRates(subtotal);
  const opts = [
    {
      id: 'express' as DeliveryType,
      label: 'Entrega Expressa',
      desc: 'Tempo médio para entrega: de 3h a 5h',
      price: rates.isFreeShipping || rates.expressPrice === 0 ? 'Grátis' : fmt(rates.expressPrice),
      orange: true,
    },
    {
      id: 'scheduled' as DeliveryType,
      label: 'Entrega agendada',
      desc: scheduledSlot ? scheduledSlot.fullLabel : getNextAvailableScheduledDesc(),
      price: rates.isFreeShipping || rates.scheduledPrice === 0 ? 'Grátis' : fmt(rates.scheduledPrice),
    },
    {
      id: 'normal' as DeliveryType,
      label: 'Normal',
      desc: 'Receba em até 1 dia útil',
      price: rates.isFreeShipping || rates.normalPrice === 0 ? 'Grátis' : fmt(rates.normalPrice),
    },
  ];

  return (
    <div
      className="checkout-sub-overlay"
      onClick={onClose}
      onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}
    >
      <div className="checkout-sub-modal" onClick={(e) => e.stopPropagation()}>
        {/* Drag pill handle */}
        <div className="checkout-sub-modal__drag-handle" />

        {/* Header */}
        <div className="checkout-sub-modal__header">
          <h3 className="checkout-sub-modal__title">Confira o endereço</h3>
          <button
            type="button"
            className="checkout-sub-modal__close-btn"
            onClick={onClose}
            aria-label="Fechar"
            id="delivery-modal-close-btn"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* Address Card matching Image 1 */}
        {savedAddress && (savedAddress.endereco || savedAddress.cep) ? (
          <div className="checkout-sub-modal__address-card">
            <div className="checkout-sub-modal__address-info">
              {savedAddress.nomeEndereco && (
                <strong className="checkout-sub-modal__address-nickname">
                  {savedAddress.nomeEndereco}
                </strong>
              )}
              <p className="checkout-sub-modal__address-line">
                {savedAddress.endereco}{savedAddress.numero ? `, ${savedAddress.numero}` : ''}
                {savedAddress.complemento ? ` - ${savedAddress.complemento}` : ''}
              </p>
              <p className="checkout-sub-modal__address-sub">
                {[savedAddress.bairro, savedAddress.cidade ? `${savedAddress.cidade}${savedAddress.uf ? ` - ${savedAddress.uf}` : ''}` : ''].filter(Boolean).join(', ')}
                {savedAddress.cep ? ` • CEP ${savedAddress.cep}` : ''}
              </p>
            </div>
            <button
              type="button"
              className="checkout-sub-modal__alterar-btn"
              onClick={onAlterAddress}
              id="delivery-modal-alterar-btn"
            >
              Alterar
            </button>
          </div>
        ) : (
          <div className="checkout-sub-modal__address-card" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="checkout-sub-modal__address-info">
              <p className="checkout-sub-modal__address-line" style={{ fontWeight: 600 }}>
                Nenhum endereço cadastrado
              </p>
              <p className="checkout-sub-modal__address-sub">
                Cadastre um endereço para calcular o frete e prazos.
              </p>
            </div>
            <button
              type="button"
              className="checkout-sub-modal__alterar-btn"
              onClick={onAlterAddress}
              id="delivery-modal-alterar-btn"
            >
              Cadastrar
            </button>
          </div>
        )}

        {/* Select prompt */}
        <h4 className="checkout-sub-modal__select-heading">Selecione o tipo de entrega:</h4>

        {/* 3 Delivery Options matching Image 1 */}
        <div className="checkout-sub-modal__options-list">
          {opts.map((opt) => (
            <button
              key={opt.id as string}
              type="button"
              className="checkout-delivery-card-btn"
              onClick={() => {
                if (opt.id === 'scheduled' && onSelectScheduled) {
                  onSelectScheduled();
                } else {
                  onSelect(opt.id);
                }
              }}
              id={`delivery-${opt.id}-btn`}
            >
              <div className="checkout-delivery-card-btn__left">
                {opt.orange ? (
                  <div className="checkout-delivery-card-btn__icon checkout-delivery-card-btn__icon--orange">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8" />
                      <polyline points="12 8 12 12 14.5 13.5" />
                      <path d="M2 8h3" />
                      <path d="M1 12h4" />
                      <path d="M2 16h3" />
                    </svg>
                  </div>
                ) : opt.id === 'scheduled' ? (
                  <div className="checkout-delivery-card-btn__icon checkout-delivery-card-btn__icon--neutral">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <circle cx="12" cy="15" r="3" />
                      <polyline points="12 14 12 15 13 15" />
                    </svg>
                  </div>
                ) : null}

                <div className="checkout-delivery-card-btn__text">
                  <strong className={`checkout-delivery-card-btn__title ${opt.orange ? 'checkout-delivery-card-btn__title--orange' : ''}`}>
                    {opt.label}
                  </strong>
                  <span className="checkout-delivery-card-btn__desc">{opt.desc}</span>
                </div>
              </div>

              <div className="checkout-delivery-card-btn__right">
                <span className="checkout-delivery-card-btn__price">{opt.price}</span>
                <ChevronRight size={18} color="#9ca3af" strokeWidth={2} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── ScheduledDeliverySheet (Exact match to Droga Raia "Entrega agendada" screenshots) ── */
const ScheduledDeliverySheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (data: ScheduledSlotData) => void;
  subtotal?: number;
  initialSlot?: ScheduledSlotData | null;
}> = ({
  isOpen,
  onClose,
  onBack,
  onConfirm,
  subtotal = 0,
  initialSlot,
}) => {
  useScrollLock(isOpen);

  const { todayStr, tomorrowStr } = React.useMemo(() => getScheduledDateLabels(), []);
  const todaySlots = React.useMemo(() => getAvailableScheduledSlots('hoje'), []);
  const tomorrowSlots = React.useMemo(() => getAvailableScheduledSlots('amanha'), []);

  const [selectedDay, setSelectedDay] = useState<'hoje' | 'amanha'>(() => {
    if (initialSlot?.day) return initialSlot.day;
    return todaySlots.length > 0 ? 'hoje' : 'amanha';
  });

  const currentSlots = selectedDay === 'hoje' ? todaySlots : tomorrowSlots;

  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(() => {
    if (initialSlot?.slot) {
      const match = SCHEDULED_TIME_SLOTS.find((s) => s.label === initialSlot.slot);
      if (match) return match.id;
    }
    return null;
  });

  const rates = getShippingRates(subtotal);
  const slotPrice = rates.isFreeShipping || rates.scheduledPrice === 0 ? 'R$ 0,00' : fmt(rates.scheduledPrice);

  const handleSelectDay = (day: 'hoje' | 'amanha') => {
    setSelectedDay(day);
    if (day === 'hoje') {
      if (selectedSlotId && !todaySlots.some((s) => s.id === selectedSlotId)) {
        setSelectedSlotId(null);
      }
    }
  };

  const handleConfirm = () => {
    const chosen = currentSlots.find((s) => s.id === selectedSlotId);
    if (!chosen) return;

    const dateFormatted = selectedDay === 'hoje' ? todayStr : tomorrowStr;
    const dayLabel = selectedDay === 'hoje' ? 'Hoje' : 'Amanhã';
    const fullLabel = `${dayLabel}, ${chosen.label}`;

    onConfirm({
      day: selectedDay,
      dateFormatted,
      slot: chosen.label,
      fullLabel,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="scheduled-sheet-overlay"
      onClick={onClose}
      onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}
    >
      <div className="scheduled-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Drag pill handle */}
        <div className="scheduled-sheet__drag-handle" />

        {/* Header matching Image 1: < Entrega agendada */}
        <div className="scheduled-sheet__header">
          <button
            type="button"
            className="scheduled-sheet__back-btn"
            onClick={onBack}
            aria-label="Voltar"
            id="scheduled-back-btn"
          >
            <ChevronLeft size={24} strokeWidth={2.4} />
          </button>
          <h3 className="scheduled-sheet__title">Entrega agendada</h3>
        </div>

        {/* 2 Date Cards: Hoje vs Amanhã */}
        <div className="scheduled-sheet__dates-row">
          <button
            type="button"
            className={`scheduled-sheet__date-card ${selectedDay === 'hoje' ? 'scheduled-sheet__date-card--active' : ''}`}
            onClick={() => handleSelectDay('hoje')}
            id="scheduled-date-hoje"
          >
            <span className="scheduled-sheet__date-num">{todayStr}</span>
            <span className="scheduled-sheet__date-sub">Hoje</span>
          </button>

          <button
            type="button"
            className={`scheduled-sheet__date-card ${selectedDay === 'amanha' ? 'scheduled-sheet__date-card--active' : ''}`}
            onClick={() => handleSelectDay('amanha')}
            id="scheduled-date-amanha"
          >
            <span className="scheduled-sheet__date-num">{tomorrowStr}</span>
            <span className="scheduled-sheet__date-sub">Amanhã</span>
          </button>
        </div>

        {/* Section title */}
        <h4 className="scheduled-sheet__heading">Escolha o horário:</h4>

        {/* Slots List */}
        <div className="scheduled-sheet__slots-list">
          {currentSlots.length === 0 ? (
            <div className="scheduled-sheet__empty">
              <p className="scheduled-sheet__empty-text">
                Não há horários disponíveis para hoje respeitando o mínimo de 5 horas de antecedência.
              </p>
              <button
                type="button"
                className="scheduled-sheet__empty-btn"
                onClick={() => handleSelectDay('amanha')}
              >
                Ver horários de amanhã ({tomorrowStr})
              </button>
            </div>
          ) : (
            currentSlots.map((slot) => {
              const isSelected = selectedSlotId === slot.id;
              return (
                <div
                  key={slot.id}
                  className={`scheduled-sheet__slot-card ${isSelected ? 'scheduled-sheet__slot-card--selected' : ''}`}
                  onClick={() => setSelectedSlotId(slot.id)}
                  role="button"
                  tabIndex={0}
                  id={`scheduled-slot-${slot.id}`}
                >
                  <div className="scheduled-sheet__slot-left">
                    <div className={`scheduled-sheet__radio ${isSelected ? 'scheduled-sheet__radio--checked' : ''}`}>
                      {isSelected && <div className="scheduled-sheet__radio-inner" />}
                    </div>
                    <span className="scheduled-sheet__slot-label">{slot.label}</span>
                  </div>
                  <span className="scheduled-sheet__slot-price">{slotPrice}</span>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Agendar entrega button matching screenshots */}
        <div className="scheduled-sheet__footer">
          <button
            type="button"
            className="scheduled-sheet__submit-btn"
            disabled={!selectedSlotId}
            onClick={handleConfirm}
            id="scheduled-confirm-btn"
          >
            Agendar entrega
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── CadastrarEnderecoSheet (Bottom sheet modal matching exact user screenshot) ── */
interface AddressData {
  cep: string;
  nomeEndereco: string;
  nomeCompleto?: string;
  endereco: string;
  bairro: string;
  complemento: string;
  numero: string;
  telefone: string;
  cidade?: string;
  uf?: string;
}

const CadastrarEnderecoSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (cep: string, addressData?: AddressData, store?: PharmacyStore) => void;
  initialCep?: string;
  targetMode?: DeliveryMode;
  initialStep?: 'form' | 'pharmacies';
}> = ({ isOpen, onClose, onConfirm, initialCep = '', targetMode = 'address', initialStep = 'form' }) => {
  const { showToast, setUserAddress } = useCart();
  const [sheetStep, setSheetStep] = useState<'form' | 'pharmacies'>(initialStep || 'form');
  const [selectedPharmacyObj, setSelectedPharmacyObj] = useState<PharmacyStore | null>(null);
  const [cep, setCep] = useState(initialCep || '');
  const [isManual, setIsManual] = useState(false);
  const [nomeEndereco, setNomeEndereco] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState(() => {
    try { return localStorage.getItem('drogaraia_recipient_name') || ''; } catch { return ''; }
  });
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('São Paulo');
  const [uf, setUf] = useState('SP');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [resolvedAddress, setResolvedAddress] = useState<{
    street: string;
    neighborhood: string;
    city: string;
    uf: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState('');
  const [brandFilter, setBrandFilter] = useState<'all' | 'raia' | 'drogasil'>('all');

  const inputRef = useRef<HTMLInputElement>(null);
  const numeroInputRef = useRef<HTMLInputElement>(null);

  // Dynamic nearby real Droga Raia and Drogasil pharmacies based on user's address
  const nearbyStores = React.useMemo(() => {
    const neigh = bairro || resolvedAddress?.neighborhood || '';
    const cit = cidade || resolvedAddress?.city || 'São Paulo';
    const state = uf || resolvedAddress?.uf || 'SP';
    return getNearbyPharmacies(neigh, cit, state);
  }, [bairro, resolvedAddress, cidade, uf]);

  useEffect(() => {
    if (nearbyStores.length > 0 && (!selectedStoreId || !nearbyStores.some(s => s.id === selectedStoreId))) {
      setSelectedStoreId(nearbyStores[0].id);
    }
  }, [nearbyStores, selectedStoreId]);

  const filteredStores = React.useMemo(() => {
    if (brandFilter === 'raia') return nearbyStores.filter(s => s.brand === 'raia');
    if (brandFilter === 'drogasil') return nearbyStores.filter(s => s.brand === 'drogasil');
    return nearbyStores;
  }, [nearbyStores, brandFilter]);

  const selectedStore = nearbyStores.find(s => s.id === selectedStoreId) || nearbyStores[0];

  useEffect(() => {
    if (isOpen) {
      setSheetStep(initialStep || 'form');
      if (initialCep) {
        setCep(initialCep);
        const clean = initialCep.replace(/\D/g, '');
        if (clean.length === 8 && !endereco) {
          lookupCep(clean);
        }
      }
      const timer = setTimeout(() => {
        if ((initialStep || 'form') === 'form') {
          inputRef.current?.focus();
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialCep, initialStep]);

  useScrollLock(isOpen);

  if (!isOpen) return null;

  const rawCep = cep.replace(/\D/g, '');
  const isCepValid = rawCep.length === 8;

  // Auto-search CEP using best multi-API provider (ViaCEP + AwesomeAPI + BrasilAPI)
  const lookupCep = async (cleanCep: string) => {
    setIsLoadingCep(true);
    try {
      const data = await fetchAddressByCep(cleanCep);
      if (data) {
        setResolvedAddress({
          street: data.street,
          neighborhood: data.neighborhood,
          city: data.city,
          uf: data.uf,
        });
        if (data.street) setEndereco(data.street);
        if (data.neighborhood) setBairro(data.neighborhood);
        if (data.city) setCidade(data.city);
        if (data.uf) setUf(data.uf);
        setIsManual(true);
        showToast(
          `Endereço localizado: ${data.street ? data.street + ', ' : ''}${data.neighborhood ? data.neighborhood + ', ' : ''}${data.city} - ${data.uf}`
        );
        setTimeout(() => {
          numeroInputRef.current?.focus();
        }, 180);
      } else {
        // CEP not found in database: allow user to type their real address
        setIsManual(true);
        setResolvedAddress(null);
        showToast('CEP não encontrado. Por favor, preencha os dados do seu endereço abaixo.');
      }
    } catch {
      // In case of network error, allow manual entry without fictitious overwrite
      setIsManual(true);
      setResolvedAddress(null);
      showToast('Não foi possível buscar o CEP automaticamente. Por favor, preencha os campos abaixo.');
    } finally {
      setIsLoadingCep(false);
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 8);
    if (val.length > 5) {
      val = `${val.slice(0, 5)}-${val.slice(5)}`;
    }
    setCep(val);
    const cleanDigits = val.replace(/\D/g, '');
    if (cleanDigits.length === 8) {
      lookupCep(cleanDigits);
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length <= 2) {
      formatted = raw.length ? `(${raw}` : '';
    } else if (raw.length <= 6) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    } else if (raw.length <= 10) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    } else {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    }
    setTelefone(formatted);
  };

  const handleManualClick = () => {
    setIsManual(true);
    setResolvedAddress(null);
  };

  // Button disabled logic:
  // If in manual mode (user clicked "não sei o cep" or form expanded):
  // Required: nomeEndereco, endereco, bairro, numero, telefone
  const rawTel = telefone.replace(/\D/g, '');
  const isFormValid = isManual
    ? (nomeCompleto.trim().length > 0 &&
       nomeEndereco.trim().length > 0 &&
       endereco.trim().length > 0 &&
       bairro.trim().length > 0 &&
       numero.trim().length > 0 &&
       rawTel.length >= 10)
    : isCepValid;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    if (!isManual && isCepValid) {
      lookupCep(rawCep);
      return;
    }

    if (targetMode === 'address') {
      const finalAddress: AddressData = {
        cep: cep || '',
        nomeEndereco: nomeEndereco.trim() || 'casa',
        nomeCompleto: nomeCompleto.trim(),
        endereco: endereco.trim(),
        bairro: bairro.trim(),
        cidade: cidade.trim() || 'São Paulo',
        uf: uf.trim() || 'SP',
        complemento: complemento.trim(),
        numero: numero.trim(),
        telefone: telefone.trim(),
      };
      try {
        if (finalAddress.nomeCompleto) {
          localStorage.setItem('drogaraia_recipient_name', finalAddress.nomeCompleto);
        }
        if (finalAddress.nomeEndereco) {
          localStorage.setItem('drogaraia_address_name', finalAddress.nomeEndereco);
        }
        const fullToSave = {
          ...finalAddress,
          street: finalAddress.endereco,
          number: finalAddress.numero,
          complement: finalAddress.complemento,
          neighborhood: finalAddress.bairro,
          city: finalAddress.cidade,
          state: finalAddress.uf,
          name: finalAddress.nomeEndereco,
          phone: finalAddress.telefone,
        };
        localStorage.setItem('drogaraia_user_address', JSON.stringify(fullToSave));
        if (finalAddress.cep) {
          localStorage.setItem('drogaraia_cep', finalAddress.cep);
        }
      } catch {}
      if (setUserAddress) {
        setUserAddress({
          cep: finalAddress.cep,
          street: finalAddress.endereco,
          number: finalAddress.numero,
          complement: finalAddress.complemento,
          neighborhood: finalAddress.bairro,
          city: finalAddress.cidade || 'São Paulo',
          state: finalAddress.uf || 'SP',
          country: 'Brasil',
          name: finalAddress.nomeEndereco,
          phone: finalAddress.telefone,
        });
      }
      onConfirm(cep || '', finalAddress);
      return;
    }

    // User requested: "quero que apareça somente quando o usuario clicar em cadastrar"
    setSheetStep('pharmacies');
  };

  const handleConfirmStore = () => {
    setIsSubmitting(true);
    const storeToConfirm = selectedPharmacyObj || selectedStore;
    const finalAddress: AddressData = {
      cep: cep || '',
      nomeEndereco: nomeEndereco.trim() || 'Meu Endereço',
      nomeCompleto: nomeCompleto.trim(),
      endereco: endereco.trim(),
      bairro: bairro.trim(),
      cidade: cidade.trim() || 'São Paulo',
      uf: uf.trim() || 'SP',
      complemento: complemento.trim(),
      numero: numero.trim(),
      telefone: telefone.trim(),
    };
    try {
      if (finalAddress.nomeCompleto) {
        localStorage.setItem('drogaraia_recipient_name', finalAddress.nomeCompleto);
      }
      if (finalAddress.nomeEndereco) {
        localStorage.setItem('drogaraia_address_name', finalAddress.nomeEndereco);
      }
      const fullToSave = {
        ...finalAddress,
        street: finalAddress.endereco,
        number: finalAddress.numero,
        complement: finalAddress.complemento,
        neighborhood: finalAddress.bairro,
        city: finalAddress.cidade,
        state: finalAddress.uf,
        name: finalAddress.nomeEndereco,
        phone: finalAddress.telefone,
      };
      localStorage.setItem('drogaraia_user_address', JSON.stringify(fullToSave));
      if (finalAddress.cep) {
        localStorage.setItem('drogaraia_cep', finalAddress.cep);
      }
    } catch {}

    if (setUserAddress) {
      setUserAddress({
        cep: finalAddress.cep,
        street: finalAddress.endereco,
        number: finalAddress.numero,
        complement: finalAddress.complemento,
        neighborhood: finalAddress.bairro,
        city: finalAddress.cidade || 'São Paulo',
        state: finalAddress.uf || 'SP',
        country: 'Brasil',
        name: finalAddress.nomeEndereco,
        phone: finalAddress.telefone,
      });
    }

    onConfirm(cep || '', finalAddress, storeToConfirm);
    setIsSubmitting(false);
  };

  return (
    <div
      className="cadastrar-cep-overlay"
      onClick={onClose}
      onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}
    >
      <div className="cadastrar-cep-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top drag pill handle */}
        <div className="cadastrar-cep-drag-handle" />

        {sheetStep === 'form' ? (
          <>
            {/* Header: Title and X button */}
            <div className="cadastrar-cep-header">
              <h3 className="cadastrar-cep-title">Cadastrar endereço</h3>
              <button
                type="button"
                className="cadastrar-cep-close-btn"
                onClick={onClose}
                aria-label="Fechar"
                id="cadastrar-cep-close-btn"
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* Subtitle */}
            <p className="cadastrar-cep-sub">
              Digite um CEP para buscar o endereço.
            </p>

            {/* Form matching user's exact screenshot */}
            <form onSubmit={handleSubmit} className="cadastrar-cep-form">
              {/* Field: CEP* */}
              <div className="cadastrar-cep-field">
                <label htmlFor="cadastrar-cep-input" className="cadastrar-cep-label">
                  CEP*
                </label>
                <div className="cadastrar-cep-input-wrap">
                  <input
                    ref={inputRef}
                    id="cadastrar-cep-input"
                    type="text"
                    inputMode="numeric"
                    placeholder=""
                    value={cep}
                    onChange={handleCepChange}
                    className={`cadastrar-cep-input ${cep ? 'cadastrar-cep-input--filled' : ''}`}
                    autoComplete="postal-code"
                    maxLength={9}
                  />
                  {isLoadingCep && (
                    <div className="cadastrar-cep-input-loading" title="Buscando endereço...">
                      <span className="cadastrar-cep-spinner" />
                    </div>
                  )}
                </div>
              </div>

              {/* If address was resolved via CEP, show the location row matching the screenshot */}
              {resolvedAddress && resolvedAddress.street && (
                <div className="cadastrar-cep-resolved-row">
                  <MapPin size={22} className="cadastrar-cep-resolved-pin" strokeWidth={1.8} />
                  <div className="cadastrar-cep-resolved-info">
                    <span className="cadastrar-cep-resolved-street">{resolvedAddress.street}</span>
                    <span className="cadastrar-cep-resolved-sub">
                      {resolvedAddress.neighborhood ? `${resolvedAddress.neighborhood}, ` : ''}{resolvedAddress.city} - {resolvedAddress.uf}
                    </span>
                  </div>
                </div>
              )}

              {/* Compact View Link: Não sei o CEP (when NOT in manual mode) */}
              {!isManual && (
                <div className="cadastrar-cep-link-wrap">
                  <button
                    type="button"
                    className="cadastrar-cep-link-btn"
                    onClick={handleManualClick}
                    id="cadastrar-cep-nao-sei-link"
                  >
                    <span>Não sei o CEP</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginLeft: 4, flexShrink: 0 }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Manual / Expanded Address Fields (Exactly matching user screenshot) */}
              {isManual && (
                <div className="cadastrar-cep-manual-fields">
                  {/* Nome completo* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-nome-completo" className="cadastrar-cep-label">
                      Seu nome completo*
                    </label>
                    <input
                      id="cep-nome-completo"
                      type="text"
                      placeholder=""
                      autoComplete="name"
                      value={nomeCompleto}
                      onChange={(e) => setNomeCompleto(e.target.value)}
                      className={`cadastrar-cep-input ${nomeCompleto ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>

                  {/* Nome do endereço* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-nome-endereco" className="cadastrar-cep-label">
                      Nome do endereço*
                    </label>
                    <input
                      id="cep-nome-endereco"
                      type="text"
                      placeholder=""
                      value={nomeEndereco}
                      onChange={(e) => setNomeEndereco(e.target.value)}
                      className={`cadastrar-cep-input ${nomeEndereco ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>

                  {/* Endereço* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-endereco" className="cadastrar-cep-label">
                      Endereço*
                    </label>
                    <input
                      id="cep-endereco"
                      type="text"
                      placeholder=""
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      className={`cadastrar-cep-input ${endereco ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>

                  {/* Bairro* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-bairro" className="cadastrar-cep-label">
                      Bairro*
                    </label>
                    <input
                      id="cep-bairro"
                      type="text"
                      placeholder=""
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      className={`cadastrar-cep-input ${bairro ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>

                  {/* Complemento (no asterisk) */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-complemento" className="cadastrar-cep-label">
                      Complemento
                    </label>
                    <input
                      id="cep-complemento"
                      type="text"
                      placeholder=""
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      className={`cadastrar-cep-input ${complemento ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                    <span className="cadastrar-cep-helper">
                      Conjunto, quadra, lote, bloco, apartamento...
                    </span>
                  </div>

                  {/* Número* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-numero" className="cadastrar-cep-label">
                      Número*
                    </label>
                    <input
                      ref={numeroInputRef}
                      id="cep-numero"
                      type="text"
                      placeholder=""
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      className={`cadastrar-cep-input ${numero ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>

                  {/* Telefone celular* */}
                  <div className="cadastrar-cep-field">
                    <label htmlFor="cep-telefone" className="cadastrar-cep-label">
                      Telefone celular*
                    </label>
                    <input
                      id="cep-telefone"
                      type="tel"
                      inputMode="tel"
                      placeholder=""
                      value={telefone}
                      onChange={handleTelefoneChange}
                      className={`cadastrar-cep-input ${telefone ? 'cadastrar-cep-input--filled' : ''}`}
                    />
                  </div>
                </div>
              )}

              {/* Button: Cadastrar (Only upon clicking will the pharmacies appear) */}
              <button
                type="submit"
                className={`cadastrar-cep-submit-btn ${isFormValid ? 'cadastrar-cep-submit-btn--active' : ''}`}
                disabled={!isFormValid || isSubmitting}
                id="cadastrar-cep-submit-btn"
              >
                Cadastrar
              </button>
            </form>
          </>
        ) : (
          /* STEP 2: PHARMACIES SELECTION - ONLY APPEARS AFTER CLICKING CADASTRAR */
          <div className="cadastrar-cep-pharmacies-step">
            {/* Header without back button */}
            <div className="cadastrar-cep-header">
              <h3 className="cadastrar-cep-title">Farmácias mais próximas</h3>
              <button
                type="button"
                className="cadastrar-cep-close-btn"
                onClick={onClose}
                aria-label="Fechar"
                id="cadastrar-cep-close-btn"
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {/* Complete Nearby Pharmacies System with Map, Real Stores & Distance */}
            <NearbyPharmacies
              address={{
                cep: cep || '',
                street: endereco || '',
                number: numero || '',
                complement: complemento,
                neighborhood: bairro || '',
                city: cidade || 'São Paulo',
                state: uf || 'SP',
                country: 'Brasil',
                name: nomeEndereco,
                phone: telefone,
              }}
              selectedPharmacyId={selectedStoreId}
              onSelectPharmacy={(pharmacy) => {
                setSelectedStoreId(pharmacy.id);
                setSelectedPharmacyObj({
                  id: pharmacy.id,
                  brand: pharmacy.brand === 'Droga Raia' ? 'raia' : 'drogasil',
                  name: pharmacy.name,
                  address: pharmacy.address,
                  neighborhood: pharmacy.neighborhood || '',
                  city: pharmacy.city || '',
                  uf: pharmacy.state || '',
                  distance: pharmacy.formattedDistance,
                  openingHours: pharmacy.openingHours ? pharmacy.openingHours[0] : 'Aberta até 23h',
                  pickupTime: pharmacy.pickupReadyTime || 'Pronto em até 1h',
                  badge: pharmacy.badge,
                  latitude: pharmacy.latitude,
                  longitude: pharmacy.longitude,
                  phone: pharmacy.phone,
                  mapsUrl: pharmacy.mapsUrl,
                });
              }}
              onAlterAddress={() => setSheetStep('form')}
              showHeader={false}
              showMap={true}
              embedded={true}
            />

            {/* Bottom Button to Confirm Pharmacy */}
            <div className="cadastrar-cep-pharmacies-action-wrap">
              <button
                type="button"
                className="cadastrar-cep-confirm-store-btn"
                onClick={handleConfirmStore}
                id="cadastrar-cep-confirm-store-btn"
              >
                Confirmar farmácia e continuar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── TelefoneContatoSheet (Bottom sheet modal matching exact user screenshot) ── */
export interface TelefoneContatoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPhone: string, saveForNextPurchases: boolean) => void;
  initialPhone?: string;
}

export const TelefoneContatoSheet: React.FC<TelefoneContatoSheetProps> = ({
  isOpen,
  onClose,
  onSave,
  initialPhone = '',
}) => {
  const [phone, setPhone] = useState(initialPhone);
  const [touched, setTouched] = useState(() => !initialPhone);
  const [saveForNext, setSaveForNext] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPhone(initialPhone);
      setTouched(!initialPhone);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, initialPhone]);

  useScrollLock(isOpen);

  if (!isOpen) return null;

  const rawDigits = phone.replace(/\D/g, '');
  const isValid = rawDigits.length >= 10;
  const showError = (touched || phone.length === 0) && !isValid;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formatted = '';
    if (digits.length === 0) {
      formatted = '';
    } else if (digits.length <= 2) {
      formatted = `(${digits}`;
    } else if (digits.length <= 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)} - ${digits.slice(7)}`;
    }
    setPhone(formatted);
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    onSave(phone, saveForNext);
    onClose();
  };

  return (
    <div
      className="telefone-sheet-overlay"
      onClick={onClose}
      onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}
    >
      <div className="telefone-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top drag handle indicator */}
        <div className="telefone-sheet-drag-handle" />

        {/* Header: Title & Close X */}
        <div className="telefone-sheet-header">
          <h3 className="telefone-sheet-title">Telefone de contato</h3>
          <button
            type="button"
            className="telefone-sheet-close-btn"
            onClick={onClose}
            aria-label="Fechar"
            id="telefone-sheet-close-btn"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* Subtitle */}
        <p className="telefone-sheet-sub">
          Atualizar o número de celular vinculado ao seu endereço. Ele será usado para acompanhar seu pedido e, se necessário, entraremos em contato.
        </p>

        {/* Form */}
        <form onSubmit={handleSave} className="telefone-sheet-form">
          <div className="telefone-sheet-field">
            <label htmlFor="telefone-sheet-input" className="telefone-sheet-label">
              Celular
            </label>
            <input
              ref={inputRef}
              id="telefone-sheet-input"
              type="tel"
              inputMode="numeric"
              className={`telefone-sheet-input ${showError ? 'telefone-sheet-input--error' : ''}`}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => setTouched(true)}
              placeholder=""
              autoComplete="tel"
            />
            {showError && (
              <div className="telefone-sheet-error-msg">
                <AlertCircle size={14} className="telefone-sheet-error-icon" />
                <span>Este é um campo obrigatório.</span>
              </div>
            )}
          </div>

          {/* Checkbox: Salvar este número para próximas compras. */}
          <label className="telefone-sheet-checkbox-label">
            <input
              type="checkbox"
              className="telefone-sheet-checkbox"
              checked={saveForNext}
              onChange={(e) => setSaveForNext(e.target.checked)}
            />
            <span>Salvar este número para próximas compras.</span>
          </label>

          {/* Action button: Salvar */}
          <button
            type="submit"
            className={`telefone-sheet-save-btn ${!isValid ? 'telefone-sheet-save-btn--disabled' : ''}`}
            disabled={!isValid}
            id="telefone-sheet-salvar-btn"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};


/* ── CartProductRecommendations (Exact PDP sections from chosen product) ── */
const CartProductRecommendations: React.FC = () => {
  const { items, lastAddedProduct, selectedProduct } = useCart();
  const boughtTrackRef = useRef<HTMLDivElement>(null);
  const similarTrackRef = useRef<HTMLDivElement>(null);

  // Identify chosen product: last added product, or currently selected PDP product, or latest item in cart
  const chosenProduct =
    lastAddedProduct ||
    selectedProduct ||
    (items.length > 0 ? items[items.length - 1].product : null) ||
    flexoneProduct;

  const cartProductIds = React.useMemo(
    () => new Set(items.map(i => i.product.id)),
    [items]
  );

  // 1. Quem comprou, também se interessou (Exact PDP Section, excluding already added items)
  const quemComprouList = React.useMemo(() => {
    const filtered = quemComprouTambem.filter(p => !cartProductIds.has(p.id));
    return filtered.length >= 4 ? filtered : quemComprouTambem;
  }, [cartProductIds]);

  // 2. Similares que você pode se interessar (Exact PDP Section, dynamically computed for chosen product)
  const similarProducts = React.useMemo(() => {
    if (chosenProduct) {
      const computed = getSimilarProducts(chosenProduct, allCandidateProducts, 12);
      const filtered = computed.filter(
        p => !cartProductIds.has(p.id) && p.id !== chosenProduct.id
      );
      if (filtered.length >= 3) return filtered;
    }
    const fallbackFiltered = similaresVocePode.filter(p => !cartProductIds.has(p.id));
    return fallbackFiltered.length >= 3 ? fallbackFiltered : similaresVocePode;
  }, [chosenProduct, cartProductIds]);

  return (
    <div className="cart-page__recommendations-group">
      {/* Divider */}
      <div className="pdp-divider" />

      {/* 1. Carousel: Quem comprou, também se interessou (Exact reproduction from PDP) */}
      <section className="pdp-carousel-section cart-page__carousel-section">
        <h3 className="pdp-carousel-heading cart-page__carousel-heading">
          Quem comprou, também se interessou
        </h3>
        <div className="pdp-cards-scroll-track cart-page__cards-track" ref={boughtTrackRef}>
          {quemComprouList.map(item => (
            <div key={item.id} className="pdp-carousel-card-wrap cart-page__carousel-card-wrap">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>

      {/* 2. Carousel: Similares que você pode se interessar (Exact reproduction from PDP) */}
      {similarProducts.length > 0 && (
        <section className="pdp-carousel-section cart-page__carousel-section">
          <h3 className="pdp-carousel-heading cart-page__carousel-heading">
            Similares que você pode se interessar
          </h3>
          <div className="pdp-cards-scroll-track cart-page__cards-track" ref={similarTrackRef}>
            {similarProducts.map(item => (
              <div key={item.id} className="pdp-carousel-card-wrap cart-page__carousel-card-wrap">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};


/* ── CartQuantitySelector (Custom Dropdown matching Raia design) ── */
const CartQuantitySelector: React.FC<{
  quantity: number;
  productId: number;
  onSelect: (newQty: number) => void;
}> = ({ quantity, productId, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (n: number) => {
    onSelect(n);
    setIsOpen(false);
  };

  return (
    <div
      className={`cart-page__item-qty-box ${isOpen ? 'cart-page__item-qty-box--open' : ''}`}
      ref={dropdownRef}
      id={`cart-qty-box-${productId}`}
    >
      <button
        type="button"
        className="cart-page__qty-trigger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Quantidade: ${quantity}`}
      >
        <span className="cart-page__qty-current-val">{quantity}</span>
        <ChevronDown
          size={14}
          className={`cart-page__qty-chevron ${isOpen ? 'cart-page__qty-chevron--open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="cart-page__qty-dropdown" role="listbox" aria-label="Opções de quantidade">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
            const isSelected = n === quantity;
            return (
              <button
                key={n}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`cart-page__qty-option ${isSelected ? 'cart-page__qty-option--selected' : ''}`}
                onClick={() => handleSelect(n)}
              >
                <span className="cart-page__qty-option-num">{n}</span>
                {isSelected && <Check size={13} className="cart-page__qty-check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ── EmptyBasketIllustration (Exact match to Droga Raia empty cart basket) ── */
const EmptyBasketIllustration: React.FC = () => (
  <svg
    width="160"
    height="140"
    viewBox="0 0 160 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cart-empty-svg"
    aria-hidden="true"
  >
    {/* Soft ground shadow */}
    <ellipse cx="80" cy="135" rx="50" ry="5.5" fill="#f0f2f5" />

    {/* Light dome / rounded cushion inside */}
    <path
      d="M38 68 C38 27 57 15 80 15 C103 15 122 27 122 68 Z"
      fill="#f4f1e9"
    />

    {/* Left Handle angled down */}
    <path
      d="M48 62 L28 88 C24 93 29 99 35 95 L54 70"
      fill="none"
      stroke="#2c3642"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right Handle angled down */}
    <path
      d="M112 62 L132 88 C136 93 131 99 125 95 L106 70"
      fill="none"
      stroke="#2c3642"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Basket Body */}
    <path
      d="M33 58 H127 L117 115 C115 125 107 131 96 131 H64 C53 131 45 125 43 115 Z"
      fill="#a3b1be"
    />

    {/* Top Rim */}
    <rect x="29" y="55" width="102" height="9.5" rx="4.75" fill="#8898a7" />

    {/* Front Vertical Slits */}
    <rect x="66" y="76" width="8" height="30" rx="4" fill="#475569" />
    <rect x="86" y="76" width="8" height="30" rx="4" fill="#475569" />

    {/* Handle Hinges */}
    <rect x="43" y="60" width="7.5" height="8.5" rx="1.5" fill="#1e293b" />
    <rect x="109.5" y="60" width="7.5" height="8.5" rx="1.5" fill="#1e293b" />
  </svg>
);

/* ── CartPage ── */
const CartPage: React.FC<{ onProceed: () => void; onClose: () => void }> = ({ onProceed, onClose }) => {
  const {
    items,
    subtotal,
    removeFromCart,
    updateQuantity,
    cepAddress,
    addressDisplay,
    setActiveModal,
    totalItemsCount,
    goToOffersPage,
  } = useCart();

  const isEmpty = items.length === 0;

  const totalOrig = items.reduce(
    (s, i) => s + (i.product.oldPrice || i.product.price) * i.quantity,
    0
  );
  const savings = Math.max(0, totalOrig - subtotal);
  const shippingRates = getShippingRates(subtotal);

  const produtosSelecionados = React.useMemo(() => {
    return deduplicateProducts([...mostBought, ...weekHighlights]).slice(0, 10);
  }, []);

  const clientesTambemCompraram = React.useMemo(() => {
    return deduplicateProducts([...quemComprouTambem, ...dermocosmeticosProducts, ...remediosProducts]).slice(0, 10);
  }, []);

  return (
    <div className="checkout-flow-page">
      {/* 0. Black Banner: Frete grátis nas compras acima de R$149,90 */}
      <div className="co-black-topbar">
        <div className="co-black-topbar__content">
          <span className="co-black-topbar__text">Frete grátis nas compras acima de R$149,90</span>
        </div>
      </div>

      {/* 1. Top bar: Use o app e economize */}
      <div className="co-topbar">
        <button className="co-topbar__x" onClick={onClose} aria-label="Fechar" type="button">
          <X size={18} />
        </button>
        <div className="co-topbar__content">
          <div className="co-topbar__app">
            <div className="co-topbar__app-icon-wrap">
              <img src="/raia-symbol.png" alt="App Raia" className="co-topbar__app-icon" />
            </div>
            <div className="co-topbar__app-text">
              <p className="co-topbar__app-title">Use o app e economize</p>
              <p className="co-topbar__app-sub">Descontos exclusivos</p>
            </div>
          </div>
          <button className="co-topbar__baixar" type="button">Baixar</button>
        </div>
      </div>

      {/* 2. Header row: Logo Raia + Icons */}
      <div className="co-header">
        <div className="co-logo" onClick={onClose} role="button" tabIndex={0} style={{ cursor: 'pointer' }} title="Droga Raia">
          <img src="/raia-logo.png" alt="Raia" className="co-logo__img" />
        </div>
        <div className="co-header__icons">
          <button className="co-header__icon-btn" aria-label="Cesta" type="button">
            <div className="co-header__cart-wrap">
              <ShoppingBasket size={23} color="#212529" strokeWidth={1.8} />
              {totalItemsCount > 0 && (
                <span className="co-header__badge">{totalItemsCount}</span>
              )}
            </div>
          </button>
          <button className="co-header__icon-btn" aria-label="Menu" type="button">
            <Menu size={23} color="#212529" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* 3. Search Bar: Buscar na Raia (conforme screenshot oficial) */}
      <div className="co-search-bar-wrap" onClick={onClose} role="button" tabIndex={0} title="Buscar produtos">
        <div className="co-search-bar">
          <span className="co-search-placeholder">Buscar na Raia</span>
          <Search size={18} className="co-search-icon" />
        </div>
      </div>

      {/* 4. Address Bar */}
      <div
        className="co-address-bar"
        onClick={() => setActiveModal('cep')}
        role="button"
        tabIndex={0}
        title="Inserir ou alterar CEP"
      >
        <MapPin size={15} className="co-address-bar__pin" />
        <span className="co-address-bar__text">
          {addressDisplay ? (
            <span className="co-address-bar__insira">
              {addressDisplay.street} <u>{addressDisplay.cep}</u>
            </span>
          ) : (
            <span className="co-address-bar__insira">
              <u>Inserir CEP</u>
            </span>
          )}
        </span>
      </div>

      {/* 5. Breadcrumb: Página inicial > Cesta de compras */}
      <div className="co-breadcrumb">
        <span className="co-breadcrumb__link" onClick={onClose}>Página inicial</span>
        <span className="co-breadcrumb__sep"> › </span>
        <span className="co-breadcrumb__current">Cesta de compras</span>
      </div>

      {/* 6. Body: Vazia vs Com Itens */}
      {isEmpty ? (
        <div className="checkout-flow-body cart-page__body cart-page__body--empty">
          {/* Ilustração e aviso de Cesta Vazia (idêntico ao screenshot) */}
          <div className="cart-empty-section">
            <div className="cart-empty-illustration">
              <EmptyBasketIllustration />
            </div>
            <h1 className="cart-empty-title">Sua cesta está vazia</h1>
            <p className="cart-empty-sub">Que tal aproveitar nossas ofertas do dia?</p>
            <button
              type="button"
              className="cart-empty-btn"
              onClick={onClose}
              id="cart-empty-continue-btn"
            >
              Continuar comprando
            </button>
          </div>

          <div className="cart-empty-divider" />

          {/* Seção 1: Produtos selecionados para você */}
          <section className="cart-page__carousel-section">
            <h2 className="cart-page__carousel-heading">
              Produtos selecionados para você
            </h2>
            <div className="cart-page__cards-track">
              {produtosSelecionados.map((item) => (
                <div key={item.id} className="cart-page__carousel-card-wrap">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Seção 2: Clientes também compraram */}
          <section className="cart-page__carousel-section">
            <h2 className="cart-page__carousel-heading">
              Clientes também compraram
            </h2>
            <div className="cart-page__cards-track">
              {clientesTambemCompraram.map((item) => (
                <div key={item.id} className="cart-page__carousel-card-wrap">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </section>

          {/* Footer oficial idêntico a todo o restante do site */}
          <Footer />
        </div>
      ) : (
        <>
          <div className="checkout-flow-body cart-page__body">
            <h2 className="cart-page__entrega-title">Entrega 1</h2>
            <p className="cart-page__entrega-sub">Vendido e entregue por <strong>Raia</strong></p>

            {/* Free Shipping Bar */}
            <ShippingBar subtotal={subtotal} />

            {/* Products */}
            {items.map(({ product, quantity }) => {
              const bulkPrice = product.price * 0.875;
              const isBulk = quantity >= 3;
              const unitPrice = isBulk ? bulkPrice : product.price;
              const lineTotal = unitPrice * quantity;
              const lineOldTotal = (product.oldPrice || (isBulk ? product.price : 0)) * quantity;

              return (
                <div key={product.id} className="cart-page__item" id={'cart-pg-item-' + product.id}>
                  <div className="cart-page__item-img-wrap">
                    <img src={product.image} alt={product.name} className="cart-page__item-img" />
                  </div>
                  <div className="cart-page__item-info">
                    <p className="cart-page__item-name">{product.name}</p>
                    {product.brand && <p className="cart-page__item-brand">{product.brand}</p>}
                    {product.size && <p className="cart-page__item-size">Tamanho: {product.size}</p>}
                    {lineOldTotal > lineTotal && (
                      <p className="cart-page__item-old">{fmt(lineOldTotal)}</p>
                    )}
                    <p className="cart-page__item-price">{fmt(lineTotal)}</p>
                    <p className="cart-page__item-bulk">
                      A partir de <strong>3</strong> un. pague <strong className="cart-page__item-bulk-price">{fmt(bulkPrice)}/un</strong>
                    </p>
                  </div>
                  <div className="cart-page__item-actions">
                    <button
                      className="cart-page__item-remove"
                      onClick={() => removeFromCart(product.id)}
                      id={'cart-pg-remove-' + product.id}
                      aria-label="Remover produto"
                    >
                      <Trash2 size={18} />
                    </button>
                    <CartQuantitySelector
                      quantity={quantity}
                      productId={product.id}
                      onSelect={(newQty) => updateQuantity(product.id, newQty - quantity)}
                    />
                  </div>
                </div>
              );
            })}

            {/* Pickup in Pharmacy */}
            <div
              className="cart-page__pickup-card"
              onClick={() => {
                onProceed();
              }}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
            >
              <p className="cart-page__pickup-title">Retirar na farmácia</p>
              <p className="cart-page__pickup-desc">
                <strong className="cart-page__pickup-free">Grátis</strong> na farmácia a partir de 30 minutos após aprovação de pagamento.
              </p>
            </div>

            {/* Receber no endereço */}
            <div
              className="cart-page__delivery-card"
              onClick={() => {
                try {
                  localStorage.setItem('drogaraia_delivery_mode', 'address');
                } catch {}
                onProceed();
              }}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
            >
              <h3 className="cart-page__delivery-title">Receber no endereço</h3>

              <div className="cart-page__delivery-item">
                <div className="cart-page__delivery-item-left">
                  <div className="cart-page__delivery-fast-row">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e65100"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cart-page__delivery-fast-icon"
                    >
                      <path d="M12 6v6l4 2" />
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.8 1.03 6.44 2.7L21 8" />
                      <polyline points="21 3 21 8 16 8" />
                    </svg>
                    <span className="cart-page__delivery-fast-title">Entrega Expressa</span>
                  </div>
                  <span className="cart-page__delivery-fast-sub">Tempo médio para entrega: de 3h a 5h</span>
                </div>
                <span className="cart-page__delivery-price">
                  {shippingRates.isFreeShipping || shippingRates.expressPrice === 0 ? 'Grátis' : fmt(shippingRates.expressPrice)}
                </span>
              </div>

              <div className="cart-page__delivery-item">
                <div className="cart-page__delivery-item-left">
                  <span className="cart-page__delivery-text">{getNextAvailableScheduledDesc()}</span>
                </div>
                <span className="cart-page__delivery-price">
                  {shippingRates.isFreeShipping || shippingRates.scheduledPrice === 0 ? 'Grátis' : fmt(shippingRates.scheduledPrice)}
                </span>
              </div>

              <div className="cart-page__delivery-item">
                <div className="cart-page__delivery-item-left">
                  <span className="cart-page__delivery-text">Receba em até 1 dia útil</span>
                </div>
                <span className="cart-page__delivery-price">
                  {shippingRates.isFreeShipping || shippingRates.normalPrice === 0 ? 'Grátis' : fmt(shippingRates.normalPrice)}
                </span>
              </div>
            </div>

            {/* Recomendações idênticas à página do produto escolhido */}
            <CartProductRecommendations />
            <Footer />
          </div>

          {/* 7. Fixed Bottom Summary & Action Bar */}
          <div className="cart-page__bottom-bar">
            <div className="cart-page__bottom-summary">
              <div className="cart-page__bottom-summary-row">
                <span>Subtotal ({totalItemsCount})</span>
                <span>{fmt(totalOrig)}</span>
              </div>
              {savings > 0.01 && (
                <div className="cart-page__bottom-summary-row cart-page__bottom-summary-row--green">
                  <span>Você está economizando</span>
                  <span>- {fmt(savings)}</span>
                </div>
              )}
            </div>
            <div className="cart-page__bottom-action">
              <div className="cart-page__bottom-pricing">
                <span className="cart-page__bottom-price">{fmt(subtotal)}</span>
                <span className="cart-page__bottom-installment">1x s/ juros de {fmt(subtotal)}</span>
              </div>
              <button
                className="cart-page__prosseguir-btn"
                onClick={() => {
                  try {
                    localStorage.setItem('drogaraia_delivery_mode', 'address');
                  } catch {}
                  onProceed();
                }}
                id="cart-prosseguir-btn"
              >
                Prosseguir
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* ── Step1 (Exact match to Droga Raia official screenshot) ── */
const Step1: React.FC<{
  initialMode?: DeliveryMode;
  onBack: () => void;
  onContinue: (m: DeliveryMode, t: DeliveryType) => void;
}> = ({ initialMode = 'address', onBack, onContinue }) => {
  const { items, subtotal, couponDiscount, montaDiscount, showToast, cepAddress, setCepAddress, userAddress, setUserAddress } = useCart();
  const displayItems = items.length > 0 ? items : [{ product: fraldasProducts[0], quantity: 1 }];
  const currentSubtotal = subtotal > 0 ? subtotal : 125.90;
  const rates = getShippingRates(currentSubtotal);
  const [mode, setMode] = useState<DeliveryMode>('address');

  useEffect(() => {
    setMode('address');
    setTargetMode('address');
    try {
      localStorage.setItem('drogaraia_delivery_mode', 'address');
    } catch {}
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showCepSheet, setShowCepSheet] = useState(false);
  const [targetMode, setTargetMode] = useState<DeliveryMode>('address');
  const [sheetInitialStep, setSheetInitialStep] = useState<'form' | 'pharmacies'>('form');
  const [type, setType] = useState<DeliveryType>('express');
  const [showScheduledSheet, setShowScheduledSheet] = useState(false);
  const [scheduledSlot, setScheduledSlot] = useState<ScheduledSlotData | null>(() => {
    try {
      const raw = localStorage.getItem('drogaraia_scheduled_slot');
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  });
  const [showDetails, setShowDetails] = useState(false);
  const [showSummaryDetails, setShowSummaryDetails] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState<PharmacyStore | null>(() => {
    try {
      const hasAddress = Boolean(
        localStorage.getItem('drogaraia_user_address') || localStorage.getItem('drogaraia_cep')
      );
      const saved = localStorage.getItem('drogaraia_selected_pharmacy');
      if (saved) {
        if (hasAddress) return JSON.parse(saved);
        // Stale auto-selected pharmacy without any user address: discard it.
        localStorage.removeItem('drogaraia_selected_pharmacy');
      }
    } catch {}
    return null;
  });
  const [savedAddress, setSavedAddress] = useState<AddressData | null>(() => {
    try {
      const raw = localStorage.getItem('drogaraia_user_address');
      if (raw) {
        const p = JSON.parse(raw);
        if (p && (p.endereco || p.street || p.cep)) {
          return {
            cep: p.cep || '',
            nomeEndereco: p.nomeEndereco || p.name || 'casa',
            nomeCompleto: p.nomeCompleto || '',
            endereco: p.endereco || p.street || '',
            bairro: p.bairro || p.neighborhood || '',
            complemento: p.complemento || p.complement || '',
            numero: p.numero || p.number || '',
            telefone: p.telefone || p.phone || '',
            cidade: p.cidade || p.city || 'São Paulo',
            uf: p.uf || p.state || 'SP',
          };
        }
      }
    } catch {}
    return null;
  });

  useEffect(() => {
    if (userAddress && (userAddress.street || userAddress.cep)) {
      setSavedAddress({
        cep: userAddress.cep || '',
        nomeEndereco: userAddress.name || 'casa',
        endereco: userAddress.street || '',
        bairro: userAddress.neighborhood || '',
        complemento: userAddress.complement || '',
        numero: userAddress.number || '',
        telefone: userAddress.phone || '',
        cidade: userAddress.city || 'São Paulo',
        uf: userAddress.state || 'SP',
      });
    }
  }, [userAddress]);

  const typeInfo: Record<string, { label: string; desc: string; price: number; orange?: boolean }> = {
    express: { label: 'Entrega Expressa', desc: 'Tempo médio para entrega: de 3h a 5h', price: rates.expressPrice, orange: true },
    scheduled: {
      label: 'Entrega agendada',
      desc: scheduledSlot ? scheduledSlot.fullLabel : getNextAvailableScheduledDesc(),
      price: rates.scheduledPrice,
    },
    normal: { label: 'Normal', desc: 'Receba em até 1 dia útil', price: rates.normalPrice },
  };

  const fee = mode === 'pickup' ? 0 : (type ? typeInfo[type].price : rates.expressPrice);
  const itemCount = displayItems.reduce((acc, i) => acc + i.quantity, 0);

  const itemDiscounts = displayItems.reduce((acc, i) => {
    if (i.product.oldPrice && i.product.oldPrice > i.product.price) {
      return acc + (i.product.oldPrice - i.product.price) * i.quantity;
    }
    return acc;
  }, 0);
  const directSavings = (couponDiscount || 0) + (montaDiscount || 0) + itemDiscounts;
  const savings = directSavings > 0
    ? directSavings
    : (currentSubtotal > 0 ? (currentSubtotal >= 200 ? 10.91 : Number((currentSubtotal * 0.05).toFixed(2))) : 10.91);

  let displaySubtotal = currentSubtotal;
  let total = 0;
  if ((couponDiscount || 0) > 0 || (montaDiscount || 0) > 0) {
    displaySubtotal = currentSubtotal;
    total = Math.max(0, currentSubtotal - (couponDiscount || 0) - (montaDiscount || 0) + fee);
  } else if (itemDiscounts > 0) {
    displaySubtotal = Number((currentSubtotal + itemDiscounts).toFixed(2));
    total = Math.max(0, currentSubtotal + fee);
  } else {
    displaySubtotal = Number((currentSubtotal + savings).toFixed(2));
    total = Math.max(0, currentSubtotal + fee);
  }
  const canGo = mode === 'pickup' || mode === 'address';

  const [contactPhone, setContactPhone] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_contact_phone');
      if (saved) return saved;
    } catch {}
    return savedAddress?.telefone || '(11) 92829 - 0992';
  });
  const [showPhoneSheet, setShowPhoneSheet] = useState(false);

  const handleOpenPhoneSheet = () => {
    setShowPhoneSheet(true);
  };

  const handleSavePhone = (newPhone: string, saveForNext: boolean) => {
    setContactPhone(newPhone);
    try {
      localStorage.setItem('drogaraia_contact_phone', newPhone);
      if (saveForNext) {
        localStorage.setItem('drogaraia_saved_phone', newPhone);
        if (savedAddress) {
          const updated = { ...savedAddress, telefone: newPhone };
          setSavedAddress(updated);
          localStorage.setItem('drogaraia_user_address', JSON.stringify(updated));
        }
      }
    } catch {}
    showToast('Telefone de contato atualizado com sucesso!');
  };

  const pickType = (t: DeliveryType) => {
    if (t === 'scheduled' && !scheduledSlot) {
      setShowModal(false);
      setShowScheduledSheet(true);
      return;
    }
    setType(t);
    setShowModal(false);
    setMode('address');
    try {
      localStorage.setItem('drogaraia_delivery_mode', 'address');
    } catch {}
  };

  const isRaia = !selectedPharmacy?.brand || selectedPharmacy.brand.toLowerCase().includes('raia');

  const displayAddress = React.useMemo(() => {
    if (!selectedPharmacy) return '';
    const addr = (selectedPharmacy.address || '').trim();
    const neigh = (selectedPharmacy.neighborhood || '').trim();
    if (neigh && !addr.toLowerCase().includes(neigh.toLowerCase())) {
      return `${addr} ${neigh}`;
    }
    return addr || selectedPharmacy.name;
  }, [selectedPharmacy]);

  const displayHours = React.useMemo(() => {
    if (!selectedPharmacy) return '';
    const raw = selectedPharmacy.openingHours || '';
    if (raw.toLowerCase().includes('24')) return '24 horas';
    const match = raw.match(/(\d{1,2})(:00|h)?\s*(?:às|até|-)\s*(\d{1,2})(:00|h)?/i);
    if (match) {
      const start = match[1].padStart(2, '0');
      const end = match[3].padStart(2, '0');
      return `de ${start}h até ${end}h`;
    }
    if (raw.toLowerCase().includes('até')) {
      const atMatch = raw.match(/(\d{1,2})h/i);
      if (atMatch) {
        return `de 07h até ${atMatch[1].padStart(2, '0')}h`;
      }
    }
    return '24 horas';
  }, [selectedPharmacy]);

  const displayDistance = React.useMemo(() => {
    if (!selectedPharmacy?.distance) return '';
    const dist = selectedPharmacy.distance.trim();
    return dist.toLowerCase().includes('km') ? dist : `${dist} km`;
  }, [selectedPharmacy]);

  const handleCepSuccess = (cep: string, addressData?: AddressData, store?: PharmacyStore) => {
    setCepAddress(cep);
    if (addressData) {
      setSavedAddress(addressData);
      try {
        const fullToSave = {
          ...addressData,
          street: addressData.endereco,
          number: addressData.numero,
          complement: addressData.complemento,
          neighborhood: addressData.bairro,
          city: addressData.cidade || 'São Paulo',
          state: addressData.uf || 'SP',
          name: addressData.nomeEndereco,
          phone: addressData.telefone,
        };
        localStorage.setItem('drogaraia_user_address', JSON.stringify(fullToSave));
        localStorage.setItem('drogaraia_address_name', addressData.nomeEndereco);
        if (addressData.cep) {
          localStorage.setItem('drogaraia_cep', addressData.cep);
        }
      } catch {}
      if (setUserAddress) {
        setUserAddress({
          cep: addressData.cep,
          street: addressData.endereco,
          number: addressData.numero,
          complement: addressData.complemento,
          neighborhood: addressData.bairro,
          city: addressData.cidade || 'São Paulo',
          state: addressData.uf || 'SP',
          country: 'Brasil',
          name: addressData.nomeEndereco,
          phone: addressData.telefone,
        });
      }
    }
    if (store) {
      setSelectedPharmacy(store);
      try {
        localStorage.setItem('drogaraia_selected_pharmacy', JSON.stringify(store));
      } catch {}
    }

    if (targetMode === 'address') {
      setMode('address');
      try {
        localStorage.setItem('drogaraia_delivery_mode', 'address');
      } catch {}
      setShowCepSheet(false);
      setShowModal(true);
    } else {
      setMode('pickup');
      setType(null);
      try {
        localStorage.setItem('drogaraia_delivery_mode', 'pickup');
      } catch {}
      setShowCepSheet(false);
      showToast(`Retirada em ${store?.name || 'Droga Raia'} confirmada!`);
    }
    setShowCepSheet(false);
  };

  return (
    <div className="checkout-flow-page checkout-step1-page">
      {/* 1. Header with Centered Raia Logo */}
      <div className="checkout-step__top-header">
        <div className="co-logo">
          <img src="/raia-logo.png" alt="Raia" className="co-logo__img" />
        </div>
      </div>

      {/* 2. Step Progress Bar */}
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 1 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-empty" />
          <div className="checkout-step__progress-bar-empty" />
        </div>
      </div>

      {/* 3. Main Step Body */}
      <div className="checkout-flow-body checkout-step1-body">
        <h2 className="checkout-step__page-title">Como deseja a entrega?</h2>
        <p className="checkout-step__page-sub">
          Vendido e entregue por <strong>Raia</strong>
        </p>

        {/* Delivery Mode Grid (2 Columns, left-aligned text & icons) */}
        <div className="checkout-step__mode-grid">
          {/* Card 1: Receber no endereço */}
          <button
            type="button"
            className={`checkout-step__mode-card ${mode === 'address' ? 'checkout-step__mode-card--active' : ''}`}
            onClick={() => {
              setTargetMode('address');
              setMode('address');
              if (!type) setType('express');
              try {
                localStorage.setItem('drogaraia_delivery_mode', 'address');
              } catch {}
              if (!savedAddress && !cepAddress) {
                setSheetInitialStep('form');
                setShowCepSheet(true);
              } else {
                setShowModal(true);
              }
            }}
            id="mode-address-btn"
          >
            <div className="checkout-step__mode-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1c1c1c"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="14" height="12" rx="2" />
                <path d="M15 8h4.5l3.5 4.5V16h-8V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="17.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="checkout-step__mode-card-text">
              <span>Receber</span>
              <span>no endereço</span>
            </div>
          </button>

          {/* Card 2: Retirar na farmácia */}
          <button
            type="button"
            className={`checkout-step__mode-card ${mode === 'pickup' ? 'checkout-step__mode-card--active' : ''}`}
            onClick={() => {
              setTargetMode('pickup');
              setMode('pickup');
              setType(null);
              try {
                localStorage.setItem('drogaraia_delivery_mode', 'pickup');
              } catch {}
              // No pharmacy is chosen until the user types a CEP/address.
              if (!selectedPharmacy) {
                setSheetInitialStep('form');
                setShowCepSheet(true);
              }
            }}
            id="mode-pickup-btn"
          >
            <div className="checkout-step__mode-card-top-row">
              <div className="checkout-step__mode-card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c1c1c"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <path d="M3 7l3-4h12l3 4" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <line x1="9" y1="14" x2="15" y2="14" />
                </svg>
              </div>
              <span className="checkout-step__gratis-pill">Grátis</span>
            </div>
            <div className="checkout-step__mode-card-text">
              <span>Retirar</span>
              <span>na farmácia</span>
            </div>
          </button>
        </div>

        {/* Pickup mode without a chosen pharmacy: ask for CEP/address first (no API call yet) */}
        {mode === 'pickup' && !selectedPharmacy && (
          <div className="checkout-step__pickup-container">
            <h3 className="checkout-step__pickup-heading">Farmácia para retirada:</h3>
            <div className="checkout-step__pickup-card">
              <div className="checkout-step__pickup-addr-row">
                <span className="checkout-step__pickup-address-text">
                  Informe seu CEP ou endereço para ver as farmácias próximas
                </span>
                <button
                  type="button"
                  className="checkout-step__pickup-alterar-btn"
                  onClick={() => {
                    setTargetMode('pickup');
                    setSheetInitialStep('form');
                    setShowCepSheet(true);
                  }}
                  id="checkout-step-escolher-farmacia-btn"
                >
                  Informar CEP
                </button>
              </div>
            </div>
          </div>
        )}

        {/* If pickup mode is selected: show exact official selected pharmacy card */}
        {mode === 'pickup' && selectedPharmacy && (
          <div className="checkout-step__pickup-container">
            <h3 className="checkout-step__pickup-heading">Farmácia para retirada:</h3>
            
            <div className="checkout-step__pickup-card">
              <div className="checkout-step__pickup-brand-row">
                {isRaia ? (
                  <div className="checkout-step__pickup-brand-left">
                    <img src="/raia-symbol.png" alt="Raia" className="checkout-step__pickup-brand-logo-raia" />
                    <span className="checkout-step__pickup-brand-name">Raia</span>
                  </div>
                ) : (
                  <div className="checkout-step__pickup-brand-left">
                    <img src="/drogasil-logo.svg" alt="Drogasil" className="checkout-step__pickup-brand-logo-drogasil" />
                  </div>
                )}
                <span className="checkout-step__pickup-badge-nearest">Mais próxima</span>
              </div>

              <div className="checkout-step__pickup-addr-row">
                <span className="checkout-step__pickup-address-text">{displayAddress}</span>
                <button
                  type="button"
                  className="checkout-step__pickup-alterar-btn"
                  onClick={() => {
                    setTargetMode('pickup');
                    setSheetInitialStep(cepAddress || savedAddress ? 'pharmacies' : 'form');
                    setShowCepSheet(true);
                  }}
                  id="checkout-step-alterar-farmacia-btn"
                >
                  Alterar
                </button>
              </div>

              <div className="checkout-step__pickup-meta-row">
                <span className="checkout-step__pickup-status-hours">
                  Aberta <span className="checkout-step__pickup-bullet">•</span> {displayHours}
                </span>
                <span className="checkout-step__pickup-dist-wrap">
                  <svg width="12" height="15" viewBox="0 0 24 24" fill="#111827" style={{ flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{displayDistance}</span>
                </span>
              </div>
            </div>

            {/* Informational security box matching screenshot */}
            <div className="checkout-step__pickup-security-box">
              <strong className="checkout-step__pickup-security-title">Mais segurança na retirada</strong>
              <p className="checkout-step__pickup-security-desc">
                A retirada do pedido pode ser feita com o código que será exibido após pagamento aprovado.
              </p>
            </div>
          </div>
        )}

        {/* If address mode is selected: show exact card container matching Image 2 */}
        {mode === 'address' && (
          <div className="checkout-step__opcao-section">
            <h3 className="checkout-step__opcao-heading">Opção de entrega:</h3>

            <div className="checkout-step__opcao-card">
              {/* Top part: Address details + Alterar */}
              <div className="checkout-step__opcao-addr-row">
                {savedAddress && (savedAddress.endereco || savedAddress.cep) ? (
                  <>
                    <div className="checkout-step__opcao-addr-info">
                      {savedAddress.nomeEndereco && (
                        <strong className="checkout-step__opcao-addr-name">
                          {savedAddress.nomeEndereco}
                        </strong>
                      )}
                      <p className="checkout-step__opcao-addr-street">
                        {savedAddress.endereco}{savedAddress.numero ? `, ${savedAddress.numero}` : ''}
                        {savedAddress.complemento ? ` - ${savedAddress.complemento}` : ''}
                      </p>
                      <p className="checkout-step__opcao-addr-sub">
                        {[savedAddress.bairro, savedAddress.cidade ? `${savedAddress.cidade}${savedAddress.uf ? ` - ${savedAddress.uf}` : ''}` : ''].filter(Boolean).join(', ')}
                        {savedAddress.cep ? ` • CEP ${savedAddress.cep}` : ''}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="checkout-step__opcao-alterar-btn"
                      onClick={() => setShowModal(true)}
                      id="checkout-step-alterar-endereco-btn"
                    >
                      Alterar
                    </button>
                  </>
                ) : (
                  <>
                    <div className="checkout-step__opcao-addr-info">
                      <strong className="checkout-step__opcao-addr-name">
                        Nenhum endereço cadastrado
                      </strong>
                      <p className="checkout-step__opcao-addr-sub">
                        Cadastre ou selecione um endereço de entrega
                      </p>
                    </div>
                    <button
                      type="button"
                      className="checkout-step__opcao-alterar-btn"
                      onClick={() => setShowModal(true)}
                      id="checkout-step-cadastrar-endereco-btn"
                    >
                      Cadastrar
                    </button>
                  </>
                )}
              </div>

              {/* Divider */}
              <div className="checkout-step__opcao-divider" />

              {/* Bottom part: Selected delivery type + Price (Clicking opens DeliveryModal or ScheduledDeliverySheet) */}
              <div
                className="checkout-step__opcao-type-row"
                onClick={() => {
                  if (type === 'scheduled') {
                    setShowScheduledSheet(true);
                  } else {
                    setShowModal(true);
                  }
                }}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
              >
                <div className="checkout-step__opcao-type-left">
                  {(!type || type === 'express') ? (
                    <div className="checkout-step__opcao-icon-wrap checkout-step__opcao-icon-wrap--orange">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8" />
                        <polyline points="12 8 12 12 14.5 13.5" />
                        <path d="M2 8h3" />
                        <path d="M1 12h4" />
                        <path d="M2 16h3" />
                      </svg>
                    </div>
                  ) : type === 'scheduled' ? (
                    <div className="checkout-step__opcao-icon-wrap checkout-step__opcao-icon-wrap--neutral">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <circle cx="12" cy="15" r="3" />
                        <polyline points="12 14 12 15 13 15" />
                      </svg>
                    </div>
                  ) : (
                    <div className="checkout-step__opcao-icon-wrap checkout-step__opcao-icon-wrap--truck">
                      <Truck size={20} color="#374151" />
                    </div>
                  )}

                  <div className="checkout-step__opcao-type-text">
                    <strong className={`checkout-step__opcao-type-title ${(!type || type === 'express') ? 'checkout-step__opcao-type-title--orange' : ''}`}>
                      {type ? typeInfo[type].label : 'Entrega Expressa'}
                    </strong>
                    <span className="checkout-step__opcao-type-desc">
                      {type ? typeInfo[type].desc : 'Tempo médio para entrega: de 3h a 5h'}
                    </span>
                  </div>
                </div>

                <div className="checkout-step__opcao-type-right">
                  <span className="checkout-step__opcao-type-price">
                    {(() => {
                      const currentPrice = type ? typeInfo[type].price : rates.expressPrice;
                      return (rates.isFreeShipping || currentPrice === 0) ? 'Grátis' : fmt(currentPrice);
                    })()}
                  </span>
                </div>
              </div>
            </div>

            {/* Informational security box matching Image 2 */}
            <div className="checkout-step__opcao-security-box">
              <strong className="checkout-step__opcao-security-title">Mais segurança na entrega</strong>
              <p className="checkout-step__opcao-security-desc">
                Para receber seu pedido, pode ser necessário informar o código exibido após pagamento aprovado
              </p>
            </div>
          </div>
        )}

        {/* 4. Products Section (Collapsed by default, matching exact user screenshot) */}
        <div className="checkout-step__products-section">
          <div className="checkout-step__products-header">
            <span className="checkout-step__products-label">Produtos:</span>
            <button
              type="button"
              className="checkout-step__detalhes-toggle-btn"
              onClick={() => setShowDetails(!showDetails)}
              id="checkout-step-produtos-detalhes-btn"
            >
              <span>{showDetails ? 'Ocultar detalhes' : 'Exibir detalhes'}</span>
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Collapsed state: thumbnail preview card(s) matching exact official screenshot */}
          {!showDetails && (
            <div className="checkout-step__thumbs-track">
              {displayItems.map(({ product, quantity }) => (
                <div key={product.id} className="checkout-step__thumb-card-wrap">
                  <div className="checkout-step__thumb-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="checkout-step__thumb-img"
                    />
                  </div>
                  <span className="checkout-step__thumb-qty-pill">{quantity} un.</span>
                </div>
              ))}
            </div>
          )}

          {/* Expanded product list when opened */}
          {showDetails && (
            <div className="checkout-step__expanded-products">
              {displayItems.map(({ product, quantity }) => (
                <div key={product.id} className="checkout-step__product-row">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="checkout-step__product-img"
                  />
                  <div className="checkout-step__product-info">
                    <p className="checkout-step__product-name">{product.name}</p>
                    {product.brand && <p className="checkout-step__product-brand">{product.brand}</p>}
                    {product.size && <p className="checkout-step__product-size">Tamanho: {product.size}</p>}
                    <p className="checkout-step__product-qty">{quantity} unidade{quantity > 1 ? 's' : ''}</p>
                    <p className="checkout-step__product-price">{fmt(product.price * quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. Contact Phone Card (Matching exact user screenshot) */}
        <div
          className="checkout-step__phone-card"
          onClick={handleOpenPhoneSheet}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <div className="checkout-step__phone-left">
            <div className="checkout-step__phone-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 12v10" />
                <circle cx="18" cy="18" r="4" fill="#f4f5f6" stroke="#1f2937" strokeWidth="1.6" />
                <polyline points="18 16 18 18 19.5 18" stroke="#1f2937" strokeWidth="1.6" />
              </svg>
            </div>
            <div className="checkout-step__phone-info">
              <span className="checkout-step__phone-label">Telefone de contato</span>
              <span className="checkout-step__phone-val">{contactPhone}</span>
            </div>
          </div>
          <button
            type="button"
            className="checkout-step__phone-alterar-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenPhoneSheet();
            }}
            id="checkout-step-alterar-telefone-btn"
          >
            Alterar
          </button>
        </div>

        {/* 6. Support Cards (Central de atendimento & Baixe o nosso aplicativo) + RD Saúde + Voltar ao topo */}
        <div className="checkout-step__support-box">
          <div className="checkout-step__support-grid">
            <div
              className="checkout-step__support-card"
              onClick={() => showToast('Central de Atendimento: ligue para 3003-7242')}
              role="button"
              tabIndex={0}
            >
              <div className="checkout-step__support-card-top">
                <Headphones size={22} color="#111827" strokeWidth={1.8} />
                <ChevronRight size={18} color="#111827" strokeWidth={2} />
              </div>
              <strong className="checkout-step__support-title">Central de atendimento</strong>
              <span className="checkout-step__support-desc">
                Confira as dúvidas mais frequentes ou fale com a gente.
              </span>
            </div>

            <div
              className="checkout-step__support-card"
              onClick={() => showToast('Abra o app Raia para ofertas exclusivas!')}
              role="button"
              tabIndex={0}
            >
              <div className="checkout-step__support-card-top">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                  <path d="M17 14a3 3 0 1 0-3 3" />
                  <path d="M17 17v-3h-3" />
                </svg>
                <ChevronRight size={18} color="#111827" strokeWidth={2} />
              </div>
              <strong className="checkout-step__support-title">Baixe o nosso aplicativo</strong>
              <span className="checkout-step__support-desc">
                E tenha descontos e benefícios exclusivos!
              </span>
            </div>
          </div>

          {/* Uma empresa RD saúde */}
          <div className="checkout-step__rdsaude-row">
            <span className="checkout-step__rd-label">Uma empresa</span>
            <div className="checkout-step__rd-logo">
              <img src="/raia-symbol.png" alt="RD Saúde" className="checkout-step__rd-symbol" />
              <strong className="checkout-step__rd-bold">RD</strong>
              <span className="checkout-step__rd-light">saúde</span>
            </div>
          </div>

          {/* Voltar ao topo button */}
          <div className="checkout-step__back-to-top-wrap">
            <button
              type="button"
              className="checkout-step__back-to-top-btn"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                const root = document.querySelector('.checkout-flow-root');
                if (root) root.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="step1-back-to-top-btn"
            >
              Voltar ao topo
            </button>
          </div>
        </div>

        {/* 7. ANVISA Compliance Section (Matching user screenshot) */}
        <div className="checkout-step__anvisa-section">
          <span className="checkout-step__anvisa-text">A Raia segue as determinações da</span>
          <img src="/anvisa-logo.svg" alt="ANVISA" className="checkout-step__anvisa-logo" />
        </div>
      </div>

      {/* 6. Fixed Bottom Bar */}
      <div className="checkout-step__bottom">
        <div className="checkout-step__bottom-summary-row">
          <span className="checkout-step__bottom-resumo">Resumo do pedido</span>
          <button
            type="button"
            className="checkout-step__bottom-detalhes"
            onClick={() => setShowSummaryDetails(!showSummaryDetails)}
          >
            <span>Detalhes</span>
            {showSummaryDetails ? (
              <ChevronDown size={16} color="#007f91" strokeWidth={2.5} />
            ) : (
              <ChevronUp size={16} color="#007f91" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {showSummaryDetails && (
          <div className="checkout-step__summary-drawer">
            <div className="checkout-step__summary-line">
              <span>Subtotal ({itemCount})</span>
              <span>{fmt(displaySubtotal)}</span>
            </div>
            <div className="checkout-step__summary-line">
              <span>{mode === 'pickup' ? 'Retirada - Raia' : 'Entrega - Raia'}</span>
              <span>{fee === 0 ? 'Grátis' : fmt(fee)}</span>
            </div>
            <div className="checkout-step__summary-line checkout-step__summary-line--savings">
              <span>Você está economizando</span>
              <span>- {fmt(savings)}</span>
            </div>
          </div>
        )}

        <div className="checkout-step__bottom-total">
          <span className="checkout-step__bottom-total-label">Total a pagar</span>
          <span className="checkout-step__bottom-total-value">{fmt(total)}</span>
        </div>

        <div className="checkout-step__bottom-actions">
          <button
            type="button"
            className="checkout-step__voltar-btn"
            onClick={onBack}
            id="step1-back-btn"
          >
            Voltar
          </button>
          <button
            type="button"
            className="checkout-step__continuar-btn"
            onClick={() => {
              if (mode === 'pickup' && !selectedPharmacy) {
                setTargetMode('pickup');
                setSheetInitialStep('form');
                setShowCepSheet(true);
                return;
              }
              if (mode === 'address' && !(savedAddress?.endereco || userAddress?.street)) {
                setShowModal(true);
                return;
              }
              onContinue(mode!, type || 'express');
            }}
            id="step1-continue-btn"
          >
            Continuar
          </button>
        </div>
      </div>

      {showCepSheet && (
        <CadastrarEnderecoSheet
          isOpen={showCepSheet}
          onClose={() => setShowCepSheet(false)}
          onConfirm={handleCepSuccess}
          initialCep={cepAddress || ''}
          targetMode={targetMode}
          initialStep={sheetInitialStep}
        />
      )}

      {showModal && (
        <DeliveryModal
          onClose={() => setShowModal(false)}
          onSelect={pickType}
          onSelectScheduled={() => {
            setShowModal(false);
            setShowScheduledSheet(true);
          }}
          onAlterAddress={() => {
            setShowModal(false);
            setTargetMode('address');
            setSheetInitialStep('form');
            setShowCepSheet(true);
          }}
          subtotal={currentSubtotal}
          savedAddress={savedAddress}
          cepAddress={cepAddress}
          scheduledSlot={scheduledSlot}
        />
      )}

      {showScheduledSheet && (
        <ScheduledDeliverySheet
          isOpen={showScheduledSheet}
          onClose={() => setShowScheduledSheet(false)}
          onBack={() => {
            setShowScheduledSheet(false);
            setShowModal(true);
          }}
          onConfirm={(slotData) => {
            setScheduledSlot(slotData);
            try {
              localStorage.setItem('drogaraia_scheduled_slot', JSON.stringify(slotData));
              localStorage.setItem('drogaraia_delivery_mode', 'address');
            } catch {}
            setType('scheduled');
            setMode('address');
            setShowScheduledSheet(false);
            showToast(`Entrega agendada para ${slotData.fullLabel}`);
          }}
          subtotal={currentSubtotal}
          initialSlot={scheduledSlot}
        />
      )}

      {showPhoneSheet && (
        <TelefoneContatoSheet
          isOpen={showPhoneSheet}
          onClose={() => setShowPhoneSheet(false)}
          onSave={handleSavePhone}
          initialPhone={contactPhone}
        />
      )}
    </div>
  );
};

/* ── Step2 (Matching Exact Screenshot of Payment Step) ── */
const PixIcon: React.FC = () => (
  <img
    src="/payment-logos/pix.png"
    alt="Pix"
    style={{ width: '22px', height: '22px', objectFit: 'contain', display: 'block' }}
  />
);

const GooglePayIcon: React.FC = () => (
  <div
    style={{
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      padding: '2px 3px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      height: '22px',
      width: '36px',
      boxSizing: 'border-box'
    }}
  >
    <img
      src="/payment-logos/gpay.png"
      alt="Google Pay"
      style={{ height: '11px', maxWidth: '30px', width: 'auto', display: 'block', objectFit: 'contain' }}
    />
  </div>
);

const NuPayIcon: React.FC = () => (
  <img
    src="/payment-logos/nu-icon.png"
    alt="NuPay"
    style={{ height: '16px', maxWidth: '28px', width: 'auto', display: 'block', objectFit: 'contain' }}
  />
);

interface SavedCardData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

const CvvInfoSheet: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useScrollLock(true);

  return (
    <div className="cvv-info-sheet-overlay" onClick={onBack}>
      <div className="cvv-info-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="add-card-sheet-drag-handle" />

        <div className="cvv-info-sheet-top">
          <button
            type="button"
            className="cvv-info-sheet-back-btn"
            onClick={onBack}
            aria-label="Voltar"
            id="cvv-back-btn"
          >
            <ChevronLeft size={24} color="#111827" />
          </button>
        </div>

        <div className="cvv-info-sheet-illustration">
          <img
            src="/payment-logos/cvv-illustration.png"
            alt="CVV Cartão"
            className="cvv-info-sheet-img"
          />
        </div>

        <h3 className="cvv-info-sheet-title">O que é o CVV?</h3>

        <p className="cvv-info-sheet-desc">
          É um código de segurança de 3 ou 4 dígitos encontrado no verso dos cartões de crédito ou débito, usado para verificar a autenticidade do cartão em transações online.
        </p>

        <div className="cvv-info-sheet-section">
          <strong className="cvv-info-sheet-brand">Discover, MasterCard, Visa, Elo</strong>
          <p className="cvv-info-sheet-subtext">Número de verificação do cartão de 3 dígitos</p>
        </div>

        <div className="cvv-info-sheet-section">
          <strong className="cvv-info-sheet-brand">American Express</strong>
          <p className="cvv-info-sheet-subtext">Número de verificação do cartão de 4 dígitos</p>
        </div>

        <button
          type="button"
          className="cvv-info-sheet-btn"
          onClick={onBack}
          id="cvv-entendi-btn"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};

const AddCardSheet: React.FC<{
  onClose: () => void;
  onSave: (card: SavedCardData) => void;
}> = ({ onClose, onSave }) => {
  const { showToast } = useCart();
  useScrollLock(true);

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [showCvvInfo, setShowCvvInfo] = useState(false);

  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(' ') : digits;
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry(formatExpiry(e.target.value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCardCvv(digits);
  };

  const isValid =
    cardNumber.replace(/\s/g, '').length === 16 &&
    cardName.trim().length >= 3 &&
    cardExpiry.length === 5 &&
    cardCvv.length >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const cardData: SavedCardData = {
      number: cardNumber,
      name: cardName.trim().toUpperCase(),
      expiry: cardExpiry,
      cvv: cardCvv
    };
    try {
      localStorage.setItem('drogaraia_saved_card', JSON.stringify(cardData));
    } catch {}
    onSave(cardData);
  };

  return (
    <div className="add-card-sheet-overlay" onClick={onClose}>
      <div className="add-card-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="add-card-sheet-drag-handle" />

        <div className="add-card-sheet-header">
          <h3 className="add-card-sheet-title">Adicionar novo cartão</h3>
          <button
            type="button"
            className="add-card-sheet-close-btn"
            onClick={onClose}
            aria-label="Fechar"
            id="add-card-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-card-sheet-form">
          {/* 1. Número do cartão* */}
          <div className="add-card-sheet-field">
            <label className="add-card-sheet-label" htmlFor="card-number-input">
              Número do cartão*
            </label>
            <div className="add-card-sheet-input-wrap">
              <div className="add-card-sheet-card-icon">
                <div className="add-card-sheet-card-mini">
                  <div className="add-card-sheet-card-chip" />
                  <div className="add-card-sheet-card-line" />
                </div>
              </div>
              <input
                id="card-number-input"
                type="tel"
                inputMode="numeric"
                className="add-card-sheet-input add-card-sheet-input--with-icon"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder=""
                autoComplete="cc-number"
              />
            </div>
          </div>

          {/* 2. Nome do titular* */}
          <div className="add-card-sheet-field">
            <label className="add-card-sheet-label" htmlFor="card-name-input">
              Nome do titular*
            </label>
            <input
              id="card-name-input"
              type="text"
              className="add-card-sheet-input"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              placeholder=""
              autoComplete="cc-name"
            />
            <p className="add-card-sheet-helper">Digite o nome como aparece no cartão</p>
          </div>

          {/* 3. Data de vencimento (MM/AA)* */}
          <div className="add-card-sheet-field">
            <label className="add-card-sheet-label" htmlFor="card-expiry-input">
              Data de vencimento (MM/AA)*
            </label>
            <input
              id="card-expiry-input"
              type="tel"
              inputMode="numeric"
              className="add-card-sheet-input"
              value={cardExpiry}
              onChange={handleExpiryChange}
              placeholder=""
              autoComplete="cc-exp"
            />
          </div>

          {/* 4. CVV* */}
          <div className="add-card-sheet-field">
            <label className="add-card-sheet-label" htmlFor="card-cvv-input">
              CVV*
            </label>
            <div className="add-card-sheet-cvv-row">
              <input
                id="card-cvv-input"
                type="tel"
                inputMode="numeric"
                className="add-card-sheet-cvv-input"
                value={cardCvv}
                onChange={handleCvvChange}
                placeholder=""
                maxLength={4}
                autoComplete="cc-csc"
              />
              <button
                type="button"
                className="add-card-sheet-cvv-link"
                onClick={() => setShowCvvInfo(true)}
                id="add-card-cvv-help-btn"
              >
                O que é isso?
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="add-card-sheet-info-box">
            <p>Você pode editar ou excluir seu cartão em</p>
            <strong>Perfil &gt; Gerenciar perfil &gt; Cartões</strong>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`add-card-sheet-submit-btn ${!isValid ? 'add-card-sheet-submit-btn--disabled' : ''}`}
            disabled={!isValid}
            id="add-card-submit-btn"
          >
            Adicionar
          </button>
        </form>

        {showCvvInfo && <CvvInfoSheet onBack={() => setShowCvvInfo(false)} />}
      </div>
    </div>
  );
};

/* ── getRegisteredAddressName helper ── */
export const getRegisteredAddressName = (): string => {
  try {
    const rawDirect = localStorage.getItem('drogaraia_address_name');
    if (rawDirect && rawDirect.trim()) {
      const trimmed = rawDirect.trim();
      const withoutPrefix = trimmed.replace(/^(?:casa|apto|apartamento|trabalho|endere[çc]o|minha\s+casa)\s*(?:de|do|da)?\s*/i, '');
      const candidate = (withoutPrefix || trimmed).trim().split(/\s+/)[0];
      const lower = candidate.toLowerCase();
      const ignored = ['casa', 'trabalho', 'principal', 'meu', 'minha', 'endereço', 'endereco', 'apto', 'apartamento', 'home'];
      if (!ignored.includes(lower) && candidate.length > 0) {
        return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
      }
      if (candidate && candidate.length > 0 && lower !== 'casa' && lower !== 'principal') {
        return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
      }
    }
    const rawAddr = localStorage.getItem('drogaraia_user_address');
    if (rawAddr) {
      const parsed = JSON.parse(rawAddr);
      const val = parsed.name || parsed.nomeEndereco || parsed.destinatario;
      if (val && typeof val === 'string' && val.trim()) {
        const trimmed = val.trim();
        const withoutPrefix = trimmed.replace(/^(?:casa|apto|apartamento|trabalho|endere[çc]o|minha\s+casa)\s*(?:de|do|da)?\s*/i, '');
        const candidate = (withoutPrefix || trimmed).trim().split(/\s+/)[0];
        const lower = candidate.toLowerCase();
        const ignored = ['casa', 'trabalho', 'principal', 'meu', 'minha', 'endereço', 'endereco', 'apto', 'apartamento', 'home'];
        if (!ignored.includes(lower) && candidate.length > 0) {
          return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
        }
      }
    }
    const rawCard = localStorage.getItem('drogaraia_saved_card');
    if (rawCard) {
      const parsedCard = JSON.parse(rawCard);
      if (parsedCard?.name && parsedCard.name.trim()) {
        const candidate = parsedCard.name.trim().split(/\s+/)[0];
        if (candidate) {
          return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
        }
      }
    }
  } catch {}
  return 'João';
};

/* ── CuponsSheet (Matching exact user screenshot) ── */
export const CuponsSheet: React.FC<{
  onClose: () => void;
  onCouponApplied?: (code: string) => void;
}> = ({ onClose, onCouponApplied }) => {
  useScrollLock(true);
  const { applyCoupon, appliedCoupon, removeCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [activeTab, setActiveTab] = useState<'meus' | 'outros'>('meus');
  const [selectedFilter, setSelectedFilter] = useState<'validade' | 'desconto' | null>(null);

  const registeredName = getRegisteredAddressName();

  const handleApply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode.trim());
    if (res.success) {
      const code = couponCode.trim();
      setCouponCode('');
      if (onCouponApplied) {
        onCouponApplied(code);
      } else {
        onClose();
      }
    }
  };

  const availableCoupons = [
    {
      code: 'RAIA10',
      badge: 'Melhor opção',
      badgeType: 'best' as const,
      tag: '10% OFF',
      desc: '10% de desconto em todo o site',
      val: 'Válido até 31/12',
      savingsText: 'Maior desconto no seu pedido',
    },
    {
      code: 'PRIMEIRACOMPRA',
      badge: 'Melhor escolha',
      badgeType: 'choice' as const,
      tag: 'R$ 15 OFF',
      desc: 'R$ 15 OFF na primeira compra acima de R$ 90',
      val: 'Válido para novos clientes',
      savingsText: 'Economia imediata',
    },
  ];

  const filteredCoupons = React.useMemo(() => {
    const list = [...availableCoupons];
    if (selectedFilter === 'desconto') {
      list.sort((a, b) => (a.badgeType === 'best' ? -1 : 1));
    }
    return list;
  }, [selectedFilter]);

  return (
    <div
      className="cupons-sheet-overlay"
      onClick={onClose}
      onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}
    >
      <div className="cupons-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Row with centered drag bar and right X button */}
        <div className="cupons-sheet-top-row">
          <div style={{ width: 28 }} />
          <div className="cadastrar-cep-drag-handle" style={{ margin: '0 auto', width: 44, height: 4 }} />
          <button
            type="button"
            className="add-card-sheet-close-btn"
            onClick={onClose}
            aria-label="Fechar"
            style={{ position: 'static' }}
            id="cupons-sheet-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Input section: Tem cupom? Digite aqui! */}
        <div className="cupons-sheet-input-section">
          <label htmlFor="sheet-coupon-input" className="cupons-sheet-input-label">
            Tem cupom? Digite aqui!
          </label>
          <form onSubmit={handleApply} className="cupons-sheet-form-row">
            <input
              id="sheet-coupon-input"
              type="text"
              className="cupons-sheet-input"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!couponCode.trim()}
              className={`cupons-sheet-adicionar-btn ${couponCode.trim() ? 'cupons-sheet-adicionar-btn--active' : ''}`}
              id="cupons-sheet-add-btn"
            >
              Adicionar
            </button>
          </form>
        </div>

        {/* Banner card with greeting and illustration */}
        <div className="cupons-sheet-banner">
          <div className="cupons-sheet-banner-left">
            <h3 className="cupons-sheet-banner-title">Olá, {registeredName}!</h3>
            <p className="cupons-sheet-banner-sub">
              {appliedCoupon ? `Cupom ${appliedCoupon} ativado!` : 'Você tem cupons disponíveis para ativar!'}
            </p>
          </div>
          <div className="cupons-sheet-banner-right">
            <img
              src="/payment-logos/coupon-person.png"
              alt="Cupons Droga Raia"
              className="cupons-sheet-banner-img"
            />
          </div>
        </div>

        {/* Tabs: Meus Cupons & Outros */}
        <div className="cupons-sheet-tabs-container">
          <div className="cupons-sheet-tabs-row">
            <div className="cupons-sheet-tab-wrap">
              <button
                type="button"
                className={`cupons-sheet-tab ${activeTab === 'meus' ? 'cupons-sheet-tab--active' : ''}`}
                onClick={() => setActiveTab('meus')}
                id="cupons-tab-meus"
              >
                Meus Cupons
              </button>
              {activeTab === 'meus' && <div className="cupons-sheet-tab-underline" />}
            </div>

            <div className="cupons-sheet-tab-wrap">
              <button
                type="button"
                className={`cupons-sheet-tab ${activeTab === 'outros' ? 'cupons-sheet-tab--active' : ''}`}
                onClick={() => setActiveTab('outros')}
                id="cupons-tab-outros"
              >
                Outros
              </button>
              {activeTab === 'outros' && <div className="cupons-sheet-tab-underline" />}
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="cupons-sheet-filters-row">
          <span className="cupons-sheet-filter-label">
            <SlidersHorizontal size={15} color="#4b5563" />
            Filtros
          </span>
          <button
            type="button"
            className={`cupons-sheet-filter-pill ${selectedFilter === 'validade' ? 'cupons-sheet-filter-pill--active' : ''}`}
            onClick={() => setSelectedFilter(selectedFilter === 'validade' ? null : 'validade')}
            id="cupons-filter-validade"
          >
            Validade
          </button>
          <button
            type="button"
            className={`cupons-sheet-filter-pill ${selectedFilter === 'desconto' ? 'cupons-sheet-filter-pill--active' : ''}`}
            onClick={() => setSelectedFilter(selectedFilter === 'desconto' ? null : 'desconto')}
            id="cupons-filter-desconto"
          >
            Maior desconto
          </button>
        </div>

        {/* Section Heading & Description */}
        <h4 className="cupons-sheet-body-title">
          {activeTab === 'meus' ? 'Meus Cupons' : 'Outros Cupons'}
        </h4>
        <p className="cupons-sheet-body-desc">
          {activeTab === 'meus'
            ? 'Aqui estão seus cupons exclusivos prontos para você aproveitar. Você pode ativar um cupom por vez!'
            : 'Cupons e benefícios disponíveis para aproveitar na Droga Raia.'}
        </p>

        {/* Active Applied Coupon Card (if present) */}
        {appliedCoupon && (
          <div className="cupons-sheet-active-card">
            <div className="cupons-sheet-active-info">
              <span className="cupons-sheet-active-badge">ATIVADO</span>
              <span className="cupons-sheet-active-code">{appliedCoupon}</span>
              <span className="cupons-sheet-active-desc">Desconto aplicado no seu pedido</span>
            </div>
            <button
              type="button"
              className="cupons-sheet-remove-btn"
              onClick={() => {
                removeCoupon();
              }}
              id="cupons-sheet-remove-btn"
            >
              Remover
            </button>
          </div>
        )}

        {/* Available coupons in 'Meus Cupons' tab */}
        {activeTab === 'meus' && (
          <div className="cupons-sheet-cards-list">
            {filteredCoupons.map((c) => {
              const isCurrent = appliedCoupon === c.code;
              return (
                <div
                  key={c.code}
                  className={`cupons-sheet-coupon-card ${
                    c.badgeType === 'best'
                      ? 'cupons-sheet-coupon-card--best'
                      : c.badgeType === 'choice'
                      ? 'cupons-sheet-coupon-card--choice'
                      : ''
                  }`}
                >
                  {/* Top highlight badge: "Melhor opção" or "Melhor escolha" */}
                  {c.badge && (
                    <div className="cupons-sheet-badge-wrap">
                      <span
                        className={`cupons-sheet-highlight-badge cupons-sheet-highlight-badge--${c.badgeType}`}
                      >
                        {c.badgeType === 'best' && <Sparkles size={13} className="cupons-sheet-badge-icon" />}
                        {c.badgeType === 'choice' && <Star size={13} className="cupons-sheet-badge-icon" />}
                        {c.badge}
                      </span>
                    </div>
                  )}

                  <div className="cupons-sheet-coupon-body">
                    <div className="cupons-sheet-coupon-info">
                      <div className="cupons-sheet-coupon-tag-row">
                        <span className="cupons-sheet-coupon-tag">{c.tag}</span>
                        <span className="cupons-sheet-coupon-name">{c.code}</span>
                      </div>
                      <p className="cupons-sheet-coupon-text">{c.desc}</p>
                      <div className="cupons-sheet-coupon-meta">
                        <span className="cupons-sheet-coupon-val">{c.val}</span>
                        {c.savingsText && (
                          <span className="cupons-sheet-coupon-savings">
                            • {c.savingsText}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`cupons-sheet-activate-btn ${
                        isCurrent ? 'cupons-sheet-activate-btn--applied' : ''
                      } ${c.badgeType === 'best' ? 'cupons-sheet-activate-btn--best' : ''}`}
                      disabled={isCurrent}
                      onClick={() => {
                        const res = applyCoupon(c.code);
                        if (res.success) {
                          if (onCouponApplied) {
                            onCouponApplied(c.code);
                          } else {
                            onClose();
                          }
                        }
                      }}
                    >
                      {isCurrent ? (
                        <>
                          <Check size={14} style={{ marginRight: 4 }} />
                          Ativado
                        </>
                      ) : (
                        'Ativar'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 'Outros' Tab */}
        {activeTab === 'outros' && (
          <div className="cupons-sheet-cards-list">
            <div className="cupons-sheet-outros-empty">
              <Gift size={32} color="#007f91" style={{ marginBottom: 8 }} />
              <p style={{ fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                Seus cupons de desconto estão em "Meus Cupons"!
              </p>
              <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 14px 0', lineHeight: 1.4 }}>
                Aproveite cupons como <strong>RAIA10 (Melhor opção)</strong> e <strong>PRIMEIRACOMPRA (Melhor escolha)</strong> já liberados para sua conta na aba Meus Cupons.
              </p>
              <button
                type="button"
                className="cupons-sheet-go-meus-btn"
                onClick={() => setActiveTab('meus')}
              >
                Ver Meus Cupons (3)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Step2: React.FC<{ deliveryMode: DeliveryMode; deliveryType: DeliveryType; onBack: () => void; onConfirm: (m: PaymentMethod) => void }> = ({ deliveryMode, deliveryType, onBack, onConfirm }) => {
  const { subtotal, appliedCoupon, couponDiscount, montaDiscount, items } = useCart();
  const [method, setMethod] = useState<PaymentMethod>('pix');
  const [showSummaryDetails, setShowSummaryDetails] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [savedCard, setSavedCard] = useState<SavedCardData | null>(() => {
    try {
      const raw = localStorage.getItem('drogaraia_saved_card');
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  });
  const rates = getShippingRates(subtotal);
  const fee = deliveryMode === 'pickup' ? 0 : (deliveryType === 'normal' ? rates.normalPrice : deliveryType === 'scheduled' ? rates.scheduledPrice : rates.expressPrice);
  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  const itemDiscounts = items.reduce((acc, i) => {
    if (i.product.oldPrice && i.product.oldPrice > i.product.price) {
      return acc + (i.product.oldPrice - i.product.price) * i.quantity;
    }
    return acc;
  }, 0);
  const directSavings = (couponDiscount || 0) + (montaDiscount || 0) + itemDiscounts;
  const savings = directSavings > 0
    ? directSavings
    : (subtotal > 0 ? (subtotal >= 200 ? 10.91 : Number((subtotal * 0.05).toFixed(2))) : 10.91);

  let displaySubtotal = subtotal;
  let total = 0;
  if ((couponDiscount || 0) > 0 || (montaDiscount || 0) > 0) {
    displaySubtotal = subtotal;
    total = Math.max(0, subtotal - (couponDiscount || 0) - (montaDiscount || 0) + fee);
  } else if (itemDiscounts > 0) {
    displaySubtotal = Number((subtotal + itemDiscounts).toFixed(2));
    total = Math.max(0, subtotal + fee);
  } else {
    displaySubtotal = Number((subtotal + savings).toFixed(2));
    total = Math.max(0, subtotal + fee);
  }
  const pixDiscount = Number((total * PIX_DISCOUNT_RATE).toFixed(2));

  const handleCouponApplied = (_code: string) => {
    setShowCouponModal(false);
    setShowSummaryDetails(true);
  };

  return (
    <div className="checkout-flow-page">
      {/* Top Header */}
      <div className="checkout-step__top-header">
        <div className="co-logo">
          <img src="/raia-logo.png" alt="Raia" className="co-logo__img" />
        </div>
      </div>

      {/* Progress Bar (Passo 2 de 3: 2 active segments, 1 empty) */}
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 2 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-empty" />
        </div>
      </div>

      <div className="checkout-flow-body">
        {/* Title */}
        <h2 className="checkout-step__page-title">Como deseja pagar?</h2>
        <p className="checkout-step__page-sub">
          Escolha uma das <strong>formas disponíveis:</strong>
        </p>

        {/* Cupom de desconto ticket card */}
        <div
          className="checkout-payment__coupon-row"
          onClick={() => setShowCouponModal(true)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <div className="checkout-payment__coupon-left">
            <p className="checkout-payment__coupon-title">Cupom de desconto</p>
            <p className="checkout-payment__coupon-sub">
              {appliedCoupon ? `Cupom ${appliedCoupon} ativado!` : 'Tem cupom? Ative aqui!'}
            </p>
          </div>
          <div className="checkout-payment__coupon-divider" />
          <button
            type="button"
            className="checkout-payment__coupon-inserir"
            onClick={(e) => {
              e.stopPropagation();
              setShowCouponModal(true);
            }}
            id="payment-coupon-btn"
          >
            {appliedCoupon ? 'Alterar' : 'Inserir'}
          </button>
        </div>

        {/* Payment Methods List */}
        <div className="checkout-payment__methods-list">
          {/* 1. Pix (Selected by default) */}
          <div
            className={`checkout-payment__card ${method === 'pix' ? 'checkout-payment__card--selected' : ''}`}
            onClick={() => setMethod('pix')}
            id="payment-pix-btn"
            role="button"
            tabIndex={0}
          >
            <div className="checkout-payment__card-header">
              <div className="checkout-payment__card-left">
                <span className="checkout-payment__card-icon">
                  <PixIcon />
                </span>
                <span className="checkout-payment__card-name">Pix</span>
                <span className="checkout-payment__card-badge checkout-payment__card-badge--neutral">
                  Aprovação imediata
                </span>
              </div>
              <div className="checkout-payment__radio">
                {method === 'pix' && <div className="checkout-payment__radio-dot" />}
              </div>
            </div>

            {method === 'pix' && (
              <div className="checkout-payment__pix-promo-box checkout-payment__pix-promo-box--green">
                Ganhe 10% de desconto no PIX e economize +{fmt(pixDiscount)}
              </div>
            )}
          </div>

          {/* 2. Cartão de Crédito */}
          <div
            className={`checkout-payment__card ${method === 'credit' ? 'checkout-payment__card--selected' : ''}`}
            onClick={() => setShowAddCardModal(true)}
            id="payment-credit-btn"
            role="button"
            tabIndex={0}
          >
            <div className="checkout-payment__card-header">
              <div className="checkout-payment__card-left">
                <span className="checkout-payment__card-icon">
                  <CreditCard size={20} color="#111827" strokeWidth={1.8} />
                </span>
                <span className="checkout-payment__card-name">
                  Cartão de Crédito
                  {savedCard && (
                    <span style={{ display: 'block', fontSize: 11.5, fontWeight: 500, color: '#6b7280' }}>
                      Final {savedCard.number.replace(/\s/g, '').slice(-4)}
                    </span>
                  )}
                </span>
              </div>
              <div className="checkout-payment__radio">
                {method === 'credit' && <div className="checkout-payment__radio-dot" />}
              </div>
            </div>
          </div>

          {/* 3. Google Pay (INDISPONÍVEL) */}
          <div
            className="checkout-payment__card checkout-payment__card--disabled"
            id="payment-googlepay-btn"
            role="button"
            tabIndex={-1}
            aria-disabled="true"
          >
            <div className="checkout-payment__card-header">
              <div className="checkout-payment__card-left">
                <span className="checkout-payment__card-icon">
                  <GooglePayIcon />
                </span>
                <span className="checkout-payment__card-name">Google Pay</span>
                <span className="checkout-payment__card-badge checkout-payment__card-badge--dark">
                  Novo
                </span>
              </div>
              <div className="checkout-payment__radio checkout-payment__radio--disabled" />
            </div>
          </div>

          {/* 4. NuPay (INDISPONÍVEL) */}
          <div
            className="checkout-payment__card checkout-payment__card--disabled"
            id="payment-nupay-btn"
            role="button"
            tabIndex={-1}
            aria-disabled="true"
          >
            <div className="checkout-payment__card-header">
              <div className="checkout-payment__card-left">
                <span className="checkout-payment__card-icon">
                  <NuPayIcon />
                </span>
                <span className="checkout-payment__card-name">NuPay</span>
                <span className="checkout-payment__card-badge checkout-payment__card-badge--neutral">
                  Parcele em até 24x
                </span>
              </div>
              <div className="checkout-payment__radio checkout-payment__radio--disabled" />
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Sticky Bottom Bar */}
      <div className="checkout-step__bottom">
        <div className="checkout-step__bottom-summary-row">
          <span className="checkout-step__bottom-resumo">Resumo do pedido</span>
          <button
            type="button"
            className="checkout-step__bottom-detalhes"
            onClick={() => setShowSummaryDetails(!showSummaryDetails)}
            id="checkout-step2-detalhes-btn"
          >
            <span>Detalhes</span>
            {showSummaryDetails ? (
              <ChevronDown size={16} color="#007f91" strokeWidth={2.5} />
            ) : (
              <ChevronUp size={16} color="#007f91" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {showSummaryDetails && (
          <div className="checkout-step__summary-drawer">
            <div className="checkout-step__summary-line">
              <span>Subtotal ({itemCount})</span>
              <span>{fmt(displaySubtotal)}</span>
            </div>
            <div className="checkout-step__summary-line">
              <span>{deliveryMode === 'pickup' ? 'Retirada - Raia' : (deliveryType === 'scheduled' ? 'Entrega Agendada - Raia' : 'Entrega - Raia')}</span>
              <span>{fee === 0 ? 'Grátis' : fmt(fee)}</span>
            </div>
            <div className="checkout-step__summary-line checkout-step__summary-line--savings">
              <span>Você está economizando</span>
              <span>- {fmt(savings)}</span>
            </div>
          </div>
        )}

        {method === 'pix' && pixDiscount > 0 && (
          <div className="checkout-step__summary-line checkout-step__summary-line--savings" style={{ marginBottom: 6 }}>
            <span>Desconto Pix (10%)</span>
            <span>- {fmt(pixDiscount)}</span>
          </div>
        )}

        <div className="checkout-step__bottom-total">
          <span className="checkout-step__bottom-total-label">Total a pagar</span>
          <span className="checkout-step__bottom-total-value">{fmt(method === 'pix' ? total - pixDiscount : total)}</span>
        </div>

        <div className="checkout-step__bottom-actions">
          <button type="button" className="checkout-step__voltar-btn" onClick={onBack} id="step2-back-btn">
            Voltar
          </button>
          <button
            type="button"
            className="checkout-step__continuar-btn checkout-step__continuar-btn--confirm"
            onClick={() => onConfirm(method)}
            id="step2-confirm-btn"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>

      {showAddCardModal && (
        <AddCardSheet
          onClose={() => setShowAddCardModal(false)}
          onSave={(card) => {
            setSavedCard(card);
            setMethod('credit');
            setShowAddCardModal(false);
          }}
        />
      )}

      {showCouponModal && (
        <CuponsSheet
          onClose={() => setShowCouponModal(false)}
          onCouponApplied={handleCouponApplied}
        />
      )}
    </div>
  );
};

/* ── OrderProcessingScreen (Loading exibido após "Confirmar Pedido" – idêntico ao vídeo oficial) ── */
const PROCESSING_PHRASES = [
  'Aguarde, isso pode levar alguns instantes...',
  'Não saia da página nem atualize a tela...',
  'Estamos processando seu pedido...',
];

const OrderProcessingScreen: React.FC<{ onDone: () => void; duration?: number }> = ({
  onDone,
  duration = 6200,
}) => {
  useScrollLock(true);
  const { showToast } = useCart();
  const [phraseIdx, setPhraseIdx] = useState(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // 3 phrases across 6200ms -> changes at 2000ms and 4100ms
    const timer1 = setTimeout(() => setPhraseIdx(1), 2000);
    const timer2 = setTimeout(() => setPhraseIdx(2), 4100);
    const doneTimer = setTimeout(() => onDoneRef.current(), duration);

    const beforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(doneTimer);
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, [duration]);

  return (
    <div
      className="order-processing"
      role="alert"
      aria-live="polite"
      aria-busy="true"
      id="order-processing-screen"
    >
      {/* Top Header */}
      <div className="order-processing__top-header">
        <div className="co-logo">
          <img src="/raia-logo.png" alt="Raia" className="co-logo__img" />
        </div>
      </div>

      {/* Progress Bar (Passo 2 de 3: 2 active segments, 1 empty) */}
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 2 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-empty" />
        </div>
      </div>

      {/* Main Body */}
      <div className="order-processing__body">
        {/* Center Stage: Circle with Animated Grocery Basket + Rotating Phrases */}
        <div className="order-processing__center">
          <RaiaLoadingBasket />
          <p key={phraseIdx} className="order-processing__phrase">
            {PROCESSING_PHRASES[phraseIdx]}
          </p>
        </div>

        {/* Bottom Section: Support Cards + RD Saúde */}
        <div className="order-processing__footer-section">
          <div className="order-processing__support-cards-grid">
            <div
              className="order-processing__support-card"
              onClick={() => showToast('Central de Atendimento: ligue para 3003-7242')}
              role="button"
              tabIndex={0}
              id="op-support-central"
            >
              <div className="order-processing__support-card-top">
                <Headphones size={22} color="#111827" strokeWidth={1.8} />
                <ChevronRight size={18} color="#9ca3af" strokeWidth={2} />
              </div>
              <strong className="order-processing__support-title">Central de atendimento</strong>
              <span className="order-processing__support-desc">
                Confira as dúvidas mais frequentes ou fale com a gente.
              </span>
            </div>

            <div
              className="order-processing__support-card"
              onClick={() => showToast('Abra o app Raia para ofertas exclusivas!')}
              role="button"
              tabIndex={0}
              id="op-support-app"
            >
              <div className="order-processing__support-card-top">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                  <path d="M17 14a3 3 0 1 0-3 3" />
                  <path d="M17 17v-3h-3" />
                </svg>
                <ChevronRight size={18} color="#9ca3af" strokeWidth={2} />
              </div>
              <strong className="order-processing__support-title">Baixe o nosso aplicativo</strong>
              <span className="order-processing__support-desc">
                E tenha descontos e benefícios exclusivos!
              </span>
            </div>
          </div>

          <div className="checkout-step__rdsaude-row order-processing__rdsaude">
            <span className="checkout-step__rd-label">Uma empresa</span>
            <div className="checkout-step__rd-logo">
              <img src="/raia-symbol.png" alt="RD Saúde" className="checkout-step__rd-symbol" />
              <strong className="checkout-step__rd-bold">RD</strong>
              <span className="checkout-step__rd-light">saúde</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Step3 (Pedido aguardando pagamento – idêntico ao app oficial) ── */
const PixIllustration: React.FC = () => (
  <svg width="150" height="118" viewBox="0 0 150 118" fill="none" aria-hidden="true">
    {/* Braço / mão */}
    <path d="M22 118 C18 96 20 74 34 58 C40 51 48 48 54 50 L58 118 Z" fill="#6b4329" />
    <path d="M28 118 C27 100 30 84 40 70" stroke="#563420" strokeWidth="2" strokeLinecap="round" />
    {/* Celular */}
    <g transform="rotate(-9 78 62)">
      <rect x="48" y="10" width="58" height="100" rx="11" fill="#ffffff" stroke="#1c1c1c" strokeWidth="5" />
      <image href="/payment-logos/pix.png" x="61" y="44" width="32" height="32" />
    </g>
    {/* Dedos sobre a borda do celular */}
    <rect x="98" y="58" width="14" height="9" rx="4.5" fill="#6b4329" transform="rotate(-9 105 62)" />
    <rect x="99" y="70" width="14" height="9" rx="4.5" fill="#6b4329" transform="rotate(-9 106 74)" />
    <rect x="100" y="82" width="13" height="9" rx="4.5" fill="#6b4329" transform="rotate(-9 106 86)" />
    {/* Relógio */}
    <circle cx="118" cy="30" r="24" fill="#fde4d0" stroke="#1f9d55" strokeWidth="6" />
    <path d="M118 17 V31 H128" stroke="#1f9d55" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Step3: React.FC<{
  paymentMethod: PaymentMethod;
  deliveryMode: DeliveryMode;
  deliveryType: DeliveryType;
  pixTransactionData?: FlevoTransactionResponse | null;
  onFinish: () => void;
}> = ({ paymentMethod, deliveryMode, deliveryType, pixTransactionData, onFinish }) => {
  const { subtotal, couponDiscount, montaDiscount, appliedCoupon, showToast, user, items } = useCart();
  const TOTAL_SECONDS = 30 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS - 22);
  const [pixTab, setPixTab] = useState<'copy' | 'qr'>('copy');
  const [copied, setCopied] = useState(false);
  const isPix = !paymentMethod || paymentMethod === 'pix';

  const rates = getShippingRates(subtotal);
  const fee = deliveryMode === 'pickup'
    ? 0
    : (deliveryType === 'normal' ? rates.normalPrice : deliveryType === 'scheduled' ? rates.scheduledPrice : rates.expressPrice);
  const discounts = (couponDiscount || 0) + (montaDiscount || 0);
  const baseTotal = Math.max(0, subtotal - discounts + fee);
  const pixDiscount = isPix ? Number((baseTotal * PIX_DISCOUNT_RATE).toFixed(2)) : 0;
  const total = Math.max(0, baseTotal - pixDiscount);

  const [activePix, setActivePix] = useState<FlevoTransactionResponse | null>(() => {
    if (pixTransactionData) return pixTransactionData;
    try {
      const saved = sessionStorage.getItem('drogaraia_flevo_pix');
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });
  const [pixError, setPixError] = useState<string | null>(null);
  const [pixAttempt, setPixAttempt] = useState(0);

  useEffect(() => {
    if (pixTransactionData) {
      setActivePix(pixTransactionData);
    }
  }, [pixTransactionData]);

  // Se por ventura activePix ainda for nulo e for Pix, cria automaticamente
  useEffect(() => {
    if (!activePix && isPix) {
      let addressObj: any = undefined;
      try {
        const rawAddr = localStorage.getItem('drogaraia_user_address');
        if (rawAddr) {
          const parsed = JSON.parse(rawAddr);
          if (parsed.endereco || parsed.street) {
            addressObj = {
              street: parsed.endereco || parsed.street,
              number: parsed.numero || parsed.number || '',
              complement: parsed.complemento || parsed.complement || '',
              neighborhood: parsed.bairro || parsed.neighborhood || '',
              city: parsed.cidade || parsed.city || 'São Paulo',
              state: parsed.uf || parsed.state || 'SP',
              zipcode: parsed.cep ? parsed.cep.replace(/\D/g, '') : '',
              telefone: parsed.telefone || parsed.phone,
            };
          }
        }
      } catch {}

      const amountCents = Math.round(total * 100);
      if (amountCents <= 0) return;
      const desc = items.length > 0 && items[0]?.product?.name
        ? items[0].product.name.slice(0, 80)
        : 'Droga Raia - Pedido Online';

      let recipientName = '';
      try { recipientName = localStorage.getItem('drogaraia_recipient_name') || ''; } catch {}

      let cancelled = false;
      createFlevoPixTransaction({
        amount: amountCents,
        description: desc,
        customer: {
          name: user?.name || recipientName,
          email: user?.email,
          phone: addressObj?.telefone,
          document: user?.cpf,
        },
        address: addressObj,
      }).then((res) => {
        if (cancelled) return;
        if (res && res.success && res.qr_code) {
          setActivePix(res);
          setPixError(null);
          try {
            sessionStorage.setItem('drogaraia_flevo_pix', JSON.stringify(res));
          } catch {}
        } else {
          setPixError(res?.error || 'Não foi possível gerar o código Pix. Tente novamente.');
        }
      });
      return () => { cancelled = true; };
    }
  }, [activePix, isPix, total, pixAttempt]);

  const pixCode = activePix?.qr_code || '';
  const qrCodeBase64 = activePix?.qr_code_base64;
  const transactionId = activePix?.transaction_id;

  const [deadline] = useState(() => {
    const d = new Date(Date.now() + (TOTAL_SECONDS - 22) * 1000);
    return `${d.getHours().toString().padStart(2, '0')}h${d.getMinutes().toString().padStart(2, '0')}`;
  });

  const [paymentStatus, setPaymentStatus] = useState<'waiting' | 'checking' | 'approved'>('waiting');
  const [showUnpaidAlert, setShowUnpaidAlert] = useState(false);
  const [showHowtoModal, setShowHowtoModal] = useState(false);
  useScrollLock(showHowtoModal);

  const handleCheckPayment = async () => {
    if (paymentStatus === 'approved') {
      onFinish();
      return;
    }
    setPaymentStatus('checking');
    setShowUnpaidAlert(false);

    try {
      if (transactionId) {
        const res = await checkFlevoPixStatus(transactionId);
        if (res.status === 'approved' || res.status === 'paid') {
          setPaymentStatus('approved');
          setShowUnpaidAlert(false);
          showToast('Pagamento Pix identificado e aprovado com sucesso!');
          return;
        }
      }
      setTimeout(() => {
        setPaymentStatus('waiting');
        setShowUnpaidAlert(true);
      }, 900);
    } catch {
      setPaymentStatus('waiting');
      setShowUnpaidAlert(true);
    }
  };

  // Polling automático a cada 8 segundos para atualizar assim que for pago
  useEffect(() => {
    if (!transactionId || paymentStatus === 'approved') return;

    const interval = setInterval(async () => {
      try {
        const res = await checkFlevoPixStatus(transactionId);
        if (res.status === 'approved' || res.status === 'paid') {
          setPaymentStatus('approved');
          setShowUnpaidAlert(false);
          showToast('Pagamento Pix identificado e aprovado com sucesso!');
        }
      } catch (e) {
        // silencioso em oscilações momentâneas
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [transactionId, paymentStatus]);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const fmtTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
  const timerPct = (timeLeft / TOTAL_SECONDS) * 100;

  const handleCopy = async () => {
    if (!pixCode) return;
    try {
      await navigator.clipboard.writeText(pixCode);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = pixCode;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    showToast('Código Pix Copia e Cola copiado com sucesso!');
    setTimeout(() => setCopied(false), 2500);
  };


  return (
    <div className="checkout-flow-page co-success">
      <div className="checkout-step__top-header">
        <div className="co-logo"><img src="/raia-logo.png" alt="Raia" className="co-logo__img" /></div>
      </div>
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 3 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-fill" />
          <div className="checkout-step__progress-bar-fill" />
        </div>
      </div>

      <div className="checkout-flow-body co-success__body">
        {isPix ? (
          <>
            <div className="co-success__illustration">
              {paymentStatus === 'approved' ? (
                <div className="co-success__approved-badge">
                  <Check size={44} color="#ffffff" strokeWidth={3} />
                </div>
              ) : (
                <PixIllustration />
              )}
            </div>
            <h1 className="co-success__title">
              {paymentStatus === 'approved' ? 'Pagamento confirmado com sucesso!' : 'Pedido aguardando pagamento'}
            </h1>
            <p className="co-success__subtitle">
              {paymentStatus === 'approved' ? 'Seu Pix foi compensado. O pedido já está sendo preparado!' : 'Agora é só pagar o seu Pix.'}
            </p>

            {paymentStatus === 'approved' ? (
              <div className="co-success__timer-card co-success__timer-card--approved">
                <div className="co-success__timer-row">
                  <CheckCircle2 size={20} color="#168846" strokeWidth={2.4} />
                  <span className="co-success__timer-text">
                    <strong>Pagamento Pix confirmado!</strong> Seu pedido já foi aprovado e encaminhado para a farmácia.
                  </span>
                  <span className="co-success__timer-badge-approved">Compensado</span>
                </div>
              </div>
            ) : (
              <div className="co-success__timer-card">
                <div className="co-success__timer-row">
                  <svg className="co-success__timer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9c2b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2.5 1.5" />
                    <path d="M10 2h4" />
                  </svg>
                  <span className="co-success__timer-text">
                    Evite o <strong>cancelamento do pedido.</strong> Tempo restante para pagar
                  </span>
                  <span className="co-success__timer-value">{fmtTime(timeLeft)}</span>
                </div>
                <div className="co-success__timer-track">
                  <div className="co-success__timer-fill" style={{ width: `${timerPct}%` }} />
                </div>
              </div>
            )}

            <h2 className="co-success__section-title">Forma de Pagamento</h2>
            <div className="co-success__pix-card">
              <div className="co-success__pix-top">
                <span className="co-success__pix-name">
                  <img src="/payment-logos/pix.png" alt="" className="co-success__pix-icon" />
                  Pix
                </span>
                <button
                  type="button"
                  className="co-success__pix-howto"
                  onClick={() => setShowHowtoModal(true)}
                  id="step3-pix-howto-btn"
                >
                  Como funciona?
                </button>
              </div>
              <p className="co-success__pix-deadline">Finalize o pagamento até às {deadline}</p>

              <div className="co-success__pix-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={pixTab === 'copy'}
                  className={`co-success__pix-tab ${pixTab === 'copy' ? 'co-success__pix-tab--active' : ''}`}
                  onClick={() => setPixTab('copy')}
                  id="pix-copy-tab-btn"
                >
                  Copia e Cola
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={pixTab === 'qr'}
                  className={`co-success__pix-tab ${pixTab === 'qr' ? 'co-success__pix-tab--active' : ''}`}
                  onClick={() => setPixTab('qr')}
                  id="pix-qr-tab-btn"
                >
                  QR Code
                </button>
              </div>

              {pixTab === 'copy' ? (
                pixCode ? (
                  <div className="co-success__pix-code">{pixCode}</div>
                ) : pixError ? (
                  <div className="co-success__pix-code" role="alert">
                    {pixError}
                    <button
                      type="button"
                      onClick={() => { setPixError(null); setPixAttempt((n) => n + 1); }}
                      id="step3-retry-pix-btn"
                      style={{ display: 'block', margin: '10px auto 0', padding: '8px 16px', borderRadius: 8, border: '1px solid #1f9d55', background: '#fff', color: '#1f9d55', fontWeight: 600, cursor: 'pointer' }}
                    >
                      Tentar novamente
                    </button>
                  </div>
                ) : (
                  <div className="co-success__pix-code">Gerando código Pix...</div>
                )
              ) : (
                <div className="co-success__qr-wrap">
                  <div className="co-success__qr-img-box">
                    {qrCodeBase64 ? (
                      <img
                        src={qrCodeBase64.startsWith('data:') ? qrCodeBase64 : `data:image/png;base64,${qrCodeBase64}`}
                        alt="QR Code Pix Oficial"
                        className="co-success__qr-real-img"
                        id="step3-pix-qr-img"
                      />
                    ) : (
                      <div className="co-success__qr-loading-spinner">
                        <RefreshCw size={26} className="co-spinner-spin" />
                        <span>Gerando QR Code Pix...</span>
                      </div>
                    )}
                  </div>
                  <p className="co-success__qr-hint">Escaneie o QR Code com o app do seu banco</p>
                </div>
              )}


              <button
                type="button"
                className={`co-success__copy-btn ${copied ? 'co-success__copy-btn--done' : ''}`}
                onClick={handleCopy}
                id="step3-copy-pix-btn"
              >
                {copied ? (
                  <Check size={18} strokeWidth={2.4} />
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                    <rect x="8" y="8" width="13" height="13" rx="1.5" />
                    <path d="M16 8V4.5A1.5 1.5 0 0 0 14.5 3h-10A1.5 1.5 0 0 0 3 4.5v10A1.5 1.5 0 0 0 4.5 16H8" />
                  </svg>
                )}
                {copied ? 'Código copiado!' : 'Copiar código do PIX'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="co-success__illustration">
              <div className="co-success__approved-badge">
                <Check size={44} color="#ffffff" strokeWidth={3} />
              </div>
            </div>
            <h1 className="co-success__title">Pedido realizado com sucesso!</h1>
            <p className="co-success__subtitle">Seu pagamento está sendo processado.</p>
            <h2 className="co-success__section-title">Forma de Pagamento</h2>
            <div className="co-success__pix-card">
              <div className="co-success__pix-top">
                <span className="co-success__pix-name">
                  <CreditCard size={18} color="#1c1c1c" />
                  Cartão de crédito
                </span>
              </div>
              <p className="co-success__pix-deadline" style={{ marginBottom: 0 }}>1x sem juros de {fmt(total)}</p>
            </div>
          </>
        )}

        <h2 className="co-success__section-title">Resumo de valores</h2>
        <div className="co-success__values-card">
          <div className="co-success__values-row">
            <span>Subtotal dos produtos</span>
            <strong>{fmt(subtotal)}</strong>
          </div>
          <div className="co-success__values-row">
            <span>Frete</span>
            {fee === 0 ? <strong className="co-success__green">Grátis</strong> : <strong>{fmt(fee)}</strong>}
          </div>
          {discounts > 0.009 && (
            <div className="co-success__values-row">
              <span className="co-success__green">{appliedCoupon ? `Cupom ${appliedCoupon}` : 'Descontos'}</span>
              <strong className="co-success__green">- {fmt(discounts)}</strong>
            </div>
          )}
          {pixDiscount > 0 && (
            <div className="co-success__values-row">
              <span className="co-success__green">Desconto Pix (10%)</span>
              <strong className="co-success__green">- {fmt(pixDiscount)}</strong>
            </div>
          )}
          <div className="co-success__values-row co-success__values-row--total">
            <span>Total pago</span>
            <strong>{fmt(total)}</strong>
          </div>
        </div>

        <div className="checkout-step__support-box co-success__support">
          <div className="checkout-step__support-grid">
            <div
              className="checkout-step__support-card"
              onClick={() => showToast('Central de Atendimento: ligue para 3003-7242')}
              role="button"
              tabIndex={0}
              id="step3-support-central"
            >
              <div className="checkout-step__support-card-top">
                <Headphones size={22} color="#111827" strokeWidth={1.8} />
                <ChevronRight size={18} color="#111827" strokeWidth={2} />
              </div>
              <strong className="checkout-step__support-title">Central de atendimento</strong>
              <span className="checkout-step__support-desc">
                Confira as dúvidas mais frequentes ou fale com a gente.
              </span>
            </div>
            <div
              className="checkout-step__support-card"
              onClick={() => showToast('Abra o app Raia para ofertas exclusivas!')}
              role="button"
              tabIndex={0}
              id="step3-support-app"
            >
              <div className="checkout-step__support-card-top">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                  <path d="M17 14a3 3 0 1 0-3 3" />
                  <path d="M17 17v-3h-3" />
                </svg>
                <ChevronRight size={18} color="#111827" strokeWidth={2} />
              </div>
              <strong className="checkout-step__support-title">Baixe o nosso aplicativo</strong>
              <span className="checkout-step__support-desc">
                E tenha descontos e benefícios exclusivos!
              </span>
            </div>
          </div>
          <div className="checkout-step__rdsaude-row">
            <span className="checkout-step__rd-label">Uma empresa</span>
            <div className="checkout-step__rd-logo">
              <img src="/raia-symbol.png" alt="RD Saúde" className="checkout-step__rd-symbol" />
              <strong className="checkout-step__rd-bold">RD</strong>
              <span className="checkout-step__rd-light">saúde</span>
            </div>
          </div>
        </div>
      </div>

      <div className="co-success__bottom-bar">
        {showUnpaidAlert && paymentStatus !== 'approved' && (
          <div className="co-unpaid-notice" role="alert" id="step3-unpaid-alert">
            <div className="co-unpaid-notice__main">
              <div className="co-unpaid-notice__icon-circle">
                <AlertCircle size={15} color="#ffffff" strokeWidth={2.6} />
              </div>
              <div className="co-unpaid-notice__content">
                <span className="co-unpaid-notice__title">Pagamento não identificado</span>
                <p className="co-unpaid-notice__desc">
                  Não encontramos o recebimento do Pix pelo seu banco. Se você já concluiu o pagamento, aguarde até 1 minuto para a compensação e clique em verificar novamente.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="co-unpaid-notice__close"
              onClick={() => setShowUnpaidAlert(false)}
              aria-label="Fechar aviso"
              id="step3-unpaid-alert-close"
            >
              <X size={15} />
            </button>
          </div>
        )}


        {paymentStatus === 'approved' ? (
          <button
            type="button"
            className="co-success__detalhes-btn co-success__detalhes-btn--approved"
            onClick={onFinish}
            id="step3-concluir-btn"
          >
            <Check size={18} strokeWidth={2.4} />
            <span>Concluir pedido</span>
          </button>
        ) : (
          <button
            type="button"
            className={`co-success__detalhes-btn ${paymentStatus === 'checking' ? 'co-success__detalhes-btn--checking' : ''}`}
            onClick={handleCheckPayment}
            disabled={paymentStatus === 'checking'}
            id="step3-ja-paguei-btn"
          >
            {paymentStatus === 'checking' ? (
              <>
                <RefreshCw size={17} className="co-spinner-spin" />
                <span>Verificando status do pagamento...</span>
              </>
            ) : (
              'Já realizei o pagamento'
            )}
          </button>
        )}
      </div>

      {showHowtoModal && (
        <div
          className="pix-howto-overlay"
          onClick={() => setShowHowtoModal(false)}
          role="dialog"
          aria-modal="true"
          id="pix-howto-modal-overlay"
        >
          <div className="pix-howto-sheet" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pix-howto-sheet__close"
              onClick={() => setShowHowtoModal(false)}
              aria-label="Fechar"
              id="pix-howto-close-btn"
            >
              <X size={22} color="#1f2937" strokeWidth={1.8} />
            </button>

            <div className="pix-howto-sheet__content">
              {/* Section 1: Pix Copia e Cola */}
              <div className="pix-howto-section">
                <h4 className="pix-howto-section__title">Pix Copia e Cola</h4>

                <div className="pix-howto-step">
                  <span className="pix-howto-step__badge">1</span>
                  <p className="pix-howto-step__text">
                    Copie o código de pagamento e vá até o aplicativo do seu banco. Na área Pix escolha a opção &quot;Pix Copia e Cola&quot;.
                  </p>
                </div>

                <div className="pix-howto-step">
                  <span className="pix-howto-step__badge">2</span>
                  <p className="pix-howto-step__text">
                    Cole o código, confira as informações e finalize o pagamento.
                  </p>
                </div>
              </div>

              <div className="pix-howto-divider" />

              {/* Section 2: Pix QR Code */}
              <div className="pix-howto-section">
                <h4 className="pix-howto-section__title">Pix QR Code</h4>

                <div className="pix-howto-step">
                  <span className="pix-howto-step__badge">1</span>
                  <p className="pix-howto-step__text">
                    Abra o aplicativo do seu banco e na área Pix selecione a opção &quot;Pix QR Code&quot;.
                  </p>
                </div>

                <div className="pix-howto-step">
                  <span className="pix-howto-step__badge">2</span>
                  <p className="pix-howto-step__text">
                    Aponte a câmera do seu celular para o código QR Code exibido na tela, confira as informações e finalize o pagamento.
                  </p>
                </div>
              </div>

              {/* Note banner at bottom */}
              <div className="pix-howto-banner">
                <p className="pix-howto-banner__text">
                  Depois de pagar, acompanhe seu pedido aqui no aplicativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Main ── */
const CheckoutFlow: React.FC = () => {
  const {
    setActiveModal,
    clearCart,
    setIsCartPage,
    subtotal,
    couponDiscount,
    montaDiscount,
    items,
    user,
  } = useCart();

  const [step, setStep] = useState<CheckoutStep>('cart');
  const [dMode, setDMode] = useState<DeliveryMode>('address');
  const [dType, setDType] = useState<DeliveryType>(null);
  const [pMethod, setPMethod] = useState<PaymentMethod>(null);
  const [processing, setProcessing] = useState(false);
  const [flevoPixData, setFlevoPixData] = useState<FlevoTransactionResponse | null>(() => {
    try {
      const saved = sessionStorage.getItem('drogaraia_flevo_pix');
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    ref.current?.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [step]);

  const close = () => {
    setIsCartPage(false);
    setActiveModal(null);
    setStep('cart');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try {
      window.history.pushState({}, '', window.location.pathname);
    } catch {}
  };

  const finish = () => {
    try {
      sessionStorage.removeItem('drogaraia_flevo_pix');
    } catch {}
    setFlevoPixData(null);
    clearCart();
    setIsCartPage(false);
    setActiveModal(null);
    setStep('cart');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try {
      window.history.pushState({}, '', window.location.pathname);
    } catch {}
  };

  const handleConfirmOrder = (method: PaymentMethod) => {
    setPMethod(method);
    setProcessing(true);

    if (!method || method === 'pix') {
      const rates = getShippingRates(subtotal);
      const fee = dMode === 'pickup'
        ? 0
        : (dType === 'normal' ? rates.normalPrice : dType === 'scheduled' ? rates.scheduledPrice : rates.expressPrice);
      const discounts = (couponDiscount || 0) + (montaDiscount || 0);
      const baseTotal = Math.max(0, subtotal - discounts + fee);
      const total = Math.max(0, baseTotal - Number((baseTotal * PIX_DISCOUNT_RATE).toFixed(2)));
      const amountCents = Math.round(total * 100);

      let addressObj: any = undefined;
      try {
        const rawAddr = localStorage.getItem('drogaraia_user_address');
        if (rawAddr) {
          const parsed = JSON.parse(rawAddr);
          if (parsed.endereco || parsed.street) {
            addressObj = {
              street: parsed.endereco || parsed.street,
              number: parsed.numero || parsed.number || '',
              complement: parsed.complemento || parsed.complement || '',
              neighborhood: parsed.bairro || parsed.neighborhood || '',
              city: parsed.cidade || parsed.city || 'São Paulo',
              state: parsed.uf || parsed.state || 'SP',
              zipcode: parsed.cep ? parsed.cep.replace(/\D/g, '') : '',
              telefone: parsed.telefone || parsed.phone,
            };
          }
        }
      } catch {}

      const firstItemName = items.length > 0 && items[0]?.product?.name
        ? items[0].product.name.slice(0, 80)
        : 'Droga Raia - Pedido Online';

      createFlevoPixTransaction({
        amount: amountCents,
        description: firstItemName,
        customer: {
          name: user?.name || (() => { try { return localStorage.getItem('drogaraia_recipient_name') || undefined; } catch { return undefined; } })(),
          email: user?.email,
          phone: addressObj?.telefone,
          document: user?.cpf,
        },
        address: addressObj,
      })
        .then((res) => {
          if (res && res.success) {
            setFlevoPixData(res);
            try {
              sessionStorage.setItem('drogaraia_flevo_pix', JSON.stringify(res));
            } catch {}
          }
        })
        .catch((err) => {
          console.error('Erro ao gerar cobrança FlevoPay:', err);
        });
    }
  };

  return (
    <div className="checkout-flow-root" ref={ref}>
      {step === 'cart' && (
        <CartPage
          onProceed={() => {
            setDMode('address');
            try {
              localStorage.setItem('drogaraia_delivery_mode', 'address');
            } catch {}
            setStep('step1');
          }}
          onClose={close}
        />
      )}
      {step === 'step1' && (
        <Step1
          initialMode="address"
          onBack={() => setStep('cart')}
          onContinue={(m, t) => {
            setDMode(m);
            setDType(t);
            setStep('step2');
          }}
        />
      )}
      {step === 'step2' && (
        <Step2
          deliveryMode={dMode}
          deliveryType={dType}
          onBack={() => setStep('step1')}
          onConfirm={handleConfirmOrder}
        />
      )}
      {processing && (
        <OrderProcessingScreen
          onDone={() => {
            setProcessing(false);
            setStep('step3');
          }}
        />
      )}
      {step === 'step3' && (
        <Step3
          paymentMethod={pMethod}
          deliveryMode={dMode}
          deliveryType={dType}
          pixTransactionData={flevoPixData}
          onFinish={finish}
        />
      )}
    </div>
  );
};

export default CheckoutFlow;

