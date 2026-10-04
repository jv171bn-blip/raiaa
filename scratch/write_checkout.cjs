const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'src', 'components', 'CheckoutFlow', 'CheckoutFlow.tsx');

const content = `import React, { useState, useEffect, useRef } from 'react';
import {
  X, Truck, Store, ChevronDown, ChevronUp, Trash2, MapPin,
  Clock, Calendar, ChevronRight, Headphones, Smartphone, AlertCircle,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CheckoutFlow.css';

type CheckoutStep = 'cart' | 'step1' | 'step2' | 'step3';
type DeliveryMode = 'address' | 'pickup';
type DeliveryType = 'express' | 'scheduled' | 'normal' | null;
type PaymentMethod = 'pix' | 'googlepay' | 'nupay' | 'credit' | null;

const fmt = (v: number) => 'R$ ' + v.toFixed(2).replace('.', ',');

/* ── AddedToCartModal ── */
export const AddedToCartModal: React.FC<{
  onClose: () => void;
  onGoToCart: () => void;
  onContinue: () => void;
}> = ({ onClose, onGoToCart, onContinue }) => {
  const { items, subtotal } = useCart();
  const last = items[items.length - 1];
  return (
    <div className="atc-overlay" onClick={onClose}>
      <div className="atc-modal" onClick={e => e.stopPropagation()}>
        <button className="atc-close" onClick={onClose} aria-label="Fechar"><X size={18} /></button>
        <p className="atc-heading">Você adicionou a sua cesta:</p>
        {last && (
          <div className="atc-added-item">
            <div className="atc-added-item__img-wrap">
              <img src={last.product.image} alt={last.product.name} className="atc-added-item__img" />
              <span className="atc-added-item__check">✓</span>
            </div>
            <div className="atc-added-item__info">
              <p className="atc-added-item__name">{last.product.name}</p>
              <p className="atc-added-item__price">{fmt(last.product.price)}</p>
            </div>
          </div>
        )}
        <div className="atc-divider" />
        <div className="atc-summary-row">
          {items.slice(-1).map(i => (
            <img key={i.product.id} src={i.product.image} alt="" className="atc-thumb-img" />
          ))}
          <div className="atc-summary-info">
            <span className="atc-summary-count">
              {items.reduce((s, i) => s + i.quantity, 0)} produto{items.length !== 1 ? 's' : ''} em sua cesta
            </span>
            <span className="atc-summary-price">{fmt(subtotal)}</span>
          </div>
        </div>
        <button className="atc-btn-primary" onClick={onGoToCart} id="atc-go-to-cart-btn">Ir para cesta</button>
        <button className="atc-btn-secondary" onClick={onContinue} id="atc-continue-btn">Continuar comprando</button>
      </div>
    </div>
  );
};

/* ── ShippingBar ── */
const ShippingBar: React.FC<{ subtotal: number }> = ({ subtotal }) => {
  const freeAt = 149.9, t799 = 119.9, t899 = 89.9;
  let missing = 0, missingFor = '', pct = 0;
  if (subtotal >= freeAt) { pct = 100; }
  else if (subtotal >= t799) { pct = 75 + ((subtotal - t799) / (freeAt - t799)) * 25; missing = freeAt - subtotal; missingFor = 'Grátis'; }
  else if (subtotal >= t899) { pct = 50 + ((subtotal - t899) / (t799 - t899)) * 25; missing = t799 - subtotal; missingFor = 'R$ 7,99'; }
  else { pct = (subtotal / t899) * 50; missing = t899 - subtotal; missingFor = 'R$ 8,99'; }
  return (
    <div className="cart-page__shipping-bar">
      <div className="cart-page__shipping-bar-top">
        <Truck size={15} />
        {missing > 0
          ? <span>Adicione <strong>{fmt(missing)}</strong> para entrega por <strong>{missingFor}</strong></span>
          : <span className="cart-page__shipping-free">Você tem <strong>Frete Grátis</strong>! 🎉</span>}
        <button className="cart-page__shipping-help">?</button>
      </div>
      <div className="cart-page__shipping-track">
        <div className="cart-page__shipping-fill" style={{ width: pct + '%' }} />
      </div>
      <div className="cart-page__shipping-labels">
        <span>9,99</span>
        <span className="cart-page__shipping-label--active">8,99 ✓</span>
        <span>7,99</span>
        <span className="cart-page__shipping-label--free">Grátis</span>
      </div>
    </div>
  );
};

/* ── DeliveryModal ── */
const DeliveryModal: React.FC<{ onClose: () => void; onSelect: (t: DeliveryType) => void }> = ({ onClose, onSelect }) => {
  const opts = [
    { id: 'express' as DeliveryType, label: 'Entrega rápida', desc: 'Receba em até 1h', price: 'R$ 8,99', orange: true },
    { id: 'scheduled' as DeliveryType, label: 'Entrega agendada', desc: 'A partir de hoje, 19h - 21h', price: 'R$ 8,99' },
    { id: 'normal' as DeliveryType, label: 'Normal', desc: 'Receba em até 1 dia útil', price: 'R$ 6,99' },
  ];
  return (
    <div className="checkout-sub-overlay" onClick={onClose}>
      <div className="checkout-sub-modal" onClick={e => e.stopPropagation()}>
        <div className="checkout-sub-modal__header">
          <h3>Confira o endereço</h3>
          <button className="checkout-sub-modal__close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="checkout-sub-modal__address-card">
          <span className="checkout-sub-modal__address-name">casa</span>
          <div className="checkout-sub-modal__address-blur" />
          <button className="checkout-sub-modal__alterar">Alterar</button>
        </div>
        <p className="checkout-sub-modal__select-label">Selecione o tipo de entrega:</p>
        {opts.map(opt => (
          <button key={opt.id as string} className="checkout-delivery-option" onClick={() => onSelect(opt.id)} id={'delivery-' + opt.id + '-btn'}>
            <div className={'checkout-delivery-option__icon' + (opt.orange ? ' checkout-delivery-option__icon--orange' : '')}>
              {opt.orange ? <Clock size={18} /> : opt.id === 'scheduled' ? <Calendar size={18} /> : <Truck size={18} />}
            </div>
            <div className="checkout-delivery-option__info">
              <span className={'checkout-delivery-option__name' + (opt.orange ? ' checkout-delivery-option__name--orange' : '')}>{opt.label}</span>
              <span className="checkout-delivery-option__desc">{opt.desc}</span>
            </div>
            <span className="checkout-delivery-option__price">{opt.price}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── ServiceLinks ── */
const ServiceLinks = () => (
  <div className="cart-page__service-links">
    <div className="cart-page__service-link">
      <Headphones size={22} className="cart-page__service-link__icon" />
      <div className="cart-page__service-link__text">
        <strong>Central de atendimento</strong>
        <span>Confira as dúvidas mais frequentes ou fale com a gente.</span>
      </div>
      <ChevronRight size={16} />
    </div>
    <div className="cart-page__service-link">
      <Smartphone size={22} className="cart-page__service-link__icon" />
      <div className="cart-page__service-link__text">
        <strong>Baixe o nosso aplicativo</strong>
        <span>E tenha descontos e benefícios exclusivos!</span>
      </div>
      <ChevronRight size={16} />
    </div>
  </div>
);

/* ── RecommendedProducts ── */
const RecommendedProducts = () => {
  const { items } = useCart();
  const base = items[0]?.product.image || 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=200';
  const recs = [
    { id: 9901, name: 'Kit Lenço Umedecido Pampers', size: '192un', badge: '+1 nº da sorte', tag: 'Patrocinado', image: base, bc: 'green' },
    { id: 9902, name: 'Dorflex MAX Analgésico e...', size: '36cp', opts: '2 opções', badge: '% ESPECIAL', tag: 'Patrocinado', image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=200', bc: 'blue' },
    { id: 9903, name: 'Neosaldina Analgésico', size: '36 drágeas', opts: '4 opções', badge: 'Black', tag: 'Patrocinado', image: 'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=200', bc: 'dark' },
  ];
  return (
    <div className="cart-page__recs">
      <h3 className="cart-page__recs-title">Produtos selecionados para você</h3>
      <div className="cart-page__recs-grid">
        {recs.map(p => (
          <div key={p.id} className="cart-page__rec-card">
            <div className="cart-page__rec-img-wrap">
              <img src={p.image} alt={p.name} className="cart-page__rec-img" />
              <button className="cart-page__rec-add">+</button>
            </div>
            <span className="cart-page__rec-tag">{p.tag}</span>
            {p.opts && <span className="cart-page__rec-options">{p.opts}</span>}
            <span className={'cart-page__rec-badge cart-page__rec-badge--' + p.bc}>{p.badge}</span>
            <p className="cart-page__rec-name">{p.name}</p>
            <p className="cart-page__rec-size">{p.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── AlsoBought ── */
const AlsoBought = () => {
  const { items } = useCart();
  const base = items[0]?.product.image || 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=200';
  const ps = [
    { id: 9911, name: 'Fralda Pampers Confort Sec XG 8...', size: '86un', price: 104.99, opts: '4 opções', badge: '+1 nº da sorte', img: base },
    { id: 9912, name: 'Fralda Pampers Confort Sec XXX...', size: '70un', price: 104.99, opts: '4 opções', img: 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { id: 9913, name: 'Fralda Pampers Confort Sec...', size: '82un', price: 112.99, opts: '4 opç', img: base },
  ];
  return (
    <div className="cart-page__also-bought">
      <h3 className="cart-page__also-title">Clientes também compraram</h3>
      <div className="cart-page__also-grid">
        {ps.map(p => (
          <div key={p.id} className="cart-page__also-card">
            <img src={p.img} alt={p.name} className="cart-page__also-img" />
            {p.opts && <span className="cart-page__also-options">{p.opts}</span>}
            {p.badge && <span className="cart-page__also-badge">{p.badge}</span>}
            <p className="cart-page__also-name">{p.name}</p>
            <p className="cart-page__also-size">{p.size}</p>
            <p className="cart-page__also-price">{fmt(p.price)}</p>
            <p className="cart-page__also-min">a partir de 3 itens</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── CartPage ── */
const CartPage: React.FC<{ onProceed: () => void; onClose: () => void }> = ({ onProceed, onClose }) => {
  const { items, subtotal, removeFromCart } = useCart();
  const totalOrig = items.reduce((s, i) => s + (i.product.oldPrice || i.product.price) * i.quantity, 0);
  const savings = totalOrig - subtotal;
  return (
    <div className="checkout-flow-page">
      <div className="co-topbar">
        <button className="co-topbar__x" onClick={onClose}><X size={20} /></button>
        <div className="co-topbar__content">
          <div className="co-topbar__app">
            <span className="co-topbar__star">✦</span>
            <div><p className="co-topbar__app-title">Use o app e economize</p><p className="co-topbar__app-sub">Descontos exclusivos</p></div>
          </div>
          <button className="co-topbar__baixar">Baixar</button>
        </div>
      </div>
      <div className="co-header">
        <div className="co-logo"><span className="co-logo__star">✦</span><span className="co-logo__name">Raia</span></div>
        <div className="co-header__icons">
          <button className="co-header__icon-btn">🔍</button>
          <button className="co-header__icon-btn">🛒<span className="co-header__badge">{items.reduce((s,i)=>s+i.quantity,0)}</span></button>
          <button className="co-header__icon-btn">☰</button>
        </div>
      </div>
      <div className="co-address-bar"><MapPin size={13} /><span>RUA MANOEL PEREIRA <span className="co-address-bar__cep">02324-210</span></span></div>
      <div className="co-breadcrumb">
        <span className="co-breadcrumb__link" onClick={onClose}>Página inicial</span>
        <span> › </span>
        <span>Cesta de compras</span>
      </div>
      <div className="checkout-flow-body">
        <h2 className="cart-page__entrega-title">Entrega 1</h2>
        <p className="cart-page__entrega-sub">Vendido e entregue por <strong>Raia</strong></p>
        <ShippingBar subtotal={subtotal} />
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="cart-page__item" id={'cart-pg-item-' + product.id}>
            <img src={product.image} alt={product.name} className="cart-page__item-img" />
            <div className="cart-page__item-info">
              <p className="cart-page__item-name">{product.name}</p>
              {product.brand && <p className="cart-page__item-brand">{product.brand}</p>}
              {product.size && <p className="cart-page__item-size">Tamanho: {product.size}</p>}
              {product.oldPrice && <p className="cart-page__item-old">{fmt(product.oldPrice)}</p>}
              <p className="cart-page__item-price">{fmt(product.price)}</p>
              {quantity >= 3 && <p className="cart-page__item-bulk">A partir de 3 un. pague <strong>{fmt(product.price * 0.875)}/un</strong></p>}
            </div>
            <div className="cart-page__item-actions">
              <button className="cart-page__item-remove" onClick={() => removeFromCart(product.id)} id={'cart-pg-remove-'+product.id}><Trash2 size={18} /></button>
              <div className="cart-page__item-qty"><span>{quantity}</span><ChevronDown size={13} /></div>
            </div>
          </div>
        ))}
        <div className="cart-page__pickup-card">
          <Store size={18} className="cart-page__pickup-icon" />
          <div><p className="cart-page__pickup-title">Retirar na farmácia</p><p className="cart-page__pickup-desc"><strong className="cart-page__pickup-free">Grátis</strong> na farmácia a partir de 30 minutos após aprovação de pagamento.</p></div>
        </div>
        <div className="cart-page__subtotal-section">
          <div className="cart-page__subtotal-row"><span>Subtotal ({items.reduce((s,i)=>s+i.quantity,0)})</span><span>{fmt(totalOrig)}</span></div>
          {savings > 0.01 && <div className="cart-page__savings-row"><span>Você está economizando</span><span className="cart-page__savings-value">- {fmt(savings)}</span></div>}
        </div>
        <RecommendedProducts />
        <div className="cart-page__delivery-options-section">
          <h3 className="cart-page__delivery-options-title">Receber no endereço</h3>
          <div className="cart-page__delivery-row cart-page__delivery-row--express">
            <div className="cart-page__delivery-row-icon cart-page__delivery-row-icon--orange"><Clock size={15} /></div>
            <div className="cart-page__delivery-row-info"><span className="cart-page__delivery-row-name cart-page__delivery-row-name--orange">Entrega rápida</span><span className="cart-page__delivery-row-desc">Receba em até 1h</span></div>
            <span className="cart-page__delivery-row-price">R$ 8,99</span>
          </div>
          <div className="cart-page__delivery-row">
            <div className="cart-page__delivery-row-icon"><Calendar size={15} /></div>
            <div className="cart-page__delivery-row-info"><span className="cart-page__delivery-row-name">A partir de hoje, 19h - 21h</span></div>
            <span className="cart-page__delivery-row-price">R$ 8,99</span>
          </div>
          <div className="cart-page__delivery-row">
            <div className="cart-page__delivery-row-icon"><Truck size={15} /></div>
            <div className="cart-page__delivery-row-info"><span className="cart-page__delivery-row-name">Receba em até 1 dia útil</span></div>
            <span className="cart-page__delivery-row-price">R$ 6,99</span>
          </div>
        </div>
        <AlsoBought />
        <ServiceLinks />
        <div className="cart-page__rd-footer"><span>Uma empresa</span><span className="cart-page__rd-logo">✦ RDsaúde</span></div>
        <p className="cart-page__anvisa">A Raia segue as determinações da ANVISA</p>
      </div>
      <div className="cart-page__bottom-bar">
        <div className="cart-page__bottom-bar-left">
          <span className="cart-page__bottom-price">{fmt(subtotal)}</span>
          <span className="cart-page__bottom-installment">1x s/ juros de {fmt(subtotal)}</span>
        </div>
        <button className="cart-page__prosseguir-btn" onClick={onProceed} id="cart-prosseguir-btn">Prosseguir</button>
      </div>
    </div>
  );
};

/* ── Step1 ── */
const Step1: React.FC<{ onBack: () => void; onContinue: (m: DeliveryMode, t: DeliveryType) => void }> = ({ onBack, onContinue }) => {
  const { items, subtotal } = useCart();
  const [mode, setMode] = useState<DeliveryMode>('address');
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState<DeliveryType>(null);
  const [showDetails, setShowDetails] = useState(true);
  const typeInfo: Record<string, { label: string; desc: string; price: number; orange?: boolean }> = {
    express: { label: 'Entrega rápida', desc: 'Receba em até 1h', price: 8.99, orange: true },
    scheduled: { label: 'Entrega agendada', desc: 'A partir de hoje, 19h - 21h', price: 8.99 },
    normal: { label: 'Normal', desc: 'Receba em até 1 dia útil', price: 6.99 },
  };
  const fee = mode === 'pickup' ? 0 : (type ? typeInfo[type].price : 0);
  const total = subtotal + fee;
  const canGo = mode === 'pickup' || type !== null;
  const pickType = (t: DeliveryType) => { setType(t); setShowModal(false); setMode('address'); };
  return (
    <div className="checkout-flow-page">
      <div className="checkout-step__top-header">
        <div className="co-logo"><span className="co-logo__star">✦</span><span className="co-logo__name">Raia</span></div>
      </div>
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 1 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-empty" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-empty" style={{ width: '34%' }} />
        </div>
      </div>
      <div className="checkout-flow-body">
        <h2 className="checkout-step__page-title">Como deseja a entrega?</h2>
        <p className="checkout-step__page-sub">Vendido e entregue por <strong>Raia</strong></p>
        <div className="checkout-step__mode-grid">
          <button className={'checkout-step__mode-card' + (mode === 'address' ? ' checkout-step__mode-card--active' : '')} onClick={() => { setMode('address'); setShowModal(true); }} id="mode-address-btn">
            <Truck size={28} /><span>Receber<br/>no endereço</span>
          </button>
          <button className={'checkout-step__mode-card' + (mode === 'pickup' ? ' checkout-step__mode-card--active' : '')} onClick={() => { setMode('pickup'); setType(null); }} id="mode-pickup-btn">
            <div className="checkout-step__mode-gratis">Grátis</div>
            <Store size={28} /><span>Retirar<br/>na farmácia</span>
          </button>
        </div>
        {mode === 'address' && type && (
          <div className="checkout-step__option-section">
            <p className="checkout-step__option-label">Opção de entrega:</p>
            <div className="checkout-step__address-card">
              <div>
                <span className="checkout-step__address-name-label">casa</span>
                <div className="checkout-step__address-blur-lines">
                  <div className="checkout-step__address-blur-line" />
                  <div className="checkout-step__address-blur-line checkout-step__address-blur-line--short" />
                </div>
              </div>
              <button className="checkout-step__alterar-btn">Alterar</button>
            </div>
            <div className="checkout-step__selected-type" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
              <div className="checkout-step__selected-type-left">
                <Clock size={16} color={typeInfo[type].orange ? '#f5821f' : '#555'} />
                <div>
                  <p className={'checkout-step__selected-type-name' + (typeInfo[type].orange ? ' checkout-step__selected-type-name--orange' : '')}>{typeInfo[type].label}</p>
                  <p className="checkout-step__selected-type-desc">{typeInfo[type].desc}</p>
                </div>
              </div>
              <span className="checkout-step__selected-type-price">{fmt(typeInfo[type].price)}</span>
            </div>
            <div className="checkout-step__security-note">
              <AlertCircle size={16} color="#f5821f" />
              <div>
                <p className="checkout-step__security-title">Mais segurança na entrega</p>
                <p className="checkout-step__security-desc">Para receber seu pedido, pode ser necessário informar o código exibido após pagamento aprovado</p>
              </div>
            </div>
          </div>
        )}
        {mode === 'address' && !type && (
          <div className="checkout-step__select-prompt" onClick={() => setShowModal(true)}>
            <Truck size={18} /><span>Selecione o tipo de entrega</span><ChevronRight size={16} />
          </div>
        )}
        <div className="checkout-step__products-box">
          <div className="checkout-step__products-header">
            <span className="checkout-step__products-label">Produtos:</span>
            <button className="checkout-step__ocultar-btn" onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? 'Ocultar detalhes' : 'Ver detalhes'} {showDetails ? <ChevronUp size={15}/> : <ChevronDown size={15}/>}
            </button>
          </div>
          {showDetails && items.map(({ product, quantity }) => (
            <div key={product.id} className="checkout-step__product-row">
              <img src={product.image} alt={product.name} className="checkout-step__product-img" />
              <div>
                <p className="checkout-step__product-name">{product.name}</p>
                {product.brand && <p className="checkout-step__product-brand">{product.brand}</p>}
                {product.size && <p className="checkout-step__product-size">Tamanho: {product.size}</p>}
                <p className="checkout-step__product-qty">{quantity} unidade{quantity > 1 ? 's' : ''}</p>
                <p className="checkout-step__product-price">{fmt(product.price * quantity)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-step__contact-card">
          <Clock size={20} className="checkout-step__contact-clock" />
          <div className="checkout-step__contact-info">
            <span className="checkout-step__contact-label">Telefone de contato</span>
            <div className="checkout-step__contact-blur" />
          </div>
          <button className="checkout-step__alterar-btn">Alterar</button>
        </div>
        <ServiceLinks />
        <div className="cart-page__rd-footer"><span>Uma empresa</span><span className="cart-page__rd-logo">✦ RDsaúde</span></div>
      </div>
      <div className="checkout-step__bottom">
        <div className="checkout-step__bottom-summary-row">
          <span className="checkout-step__bottom-resumo">Resumo do pedido</span>
          <button className="checkout-step__bottom-detalhes">Detalhes <ChevronUp size={14}/></button>
        </div>
        <div className="checkout-step__bottom-total"><span>Total a pagar</span><span className="checkout-step__bottom-total-value">{fmt(total)}</span></div>
        <div className="checkout-step__bottom-actions">
          <button className="checkout-step__voltar-btn" onClick={onBack} id="step1-back-btn">Voltar</button>
          <button className={'checkout-step__continuar-btn' + (!canGo ? ' checkout-step__continuar-btn--disabled' : '')} onClick={() => canGo && onContinue(mode, type)} disabled={!canGo} id="step1-continue-btn">Continuar</button>
        </div>
      </div>
      {showModal && <DeliveryModal onClose={() => setShowModal(false)} onSelect={pickType} />}
    </div>
  );
};

/* ── Step2 ── */
const Step2: React.FC<{ deliveryMode: DeliveryMode; deliveryType: DeliveryType; onBack: () => void; onConfirm: (m: PaymentMethod) => void }> = ({ deliveryType, onBack, onConfirm }) => {
  const { subtotal, applyCoupon } = useCart();
  const [method, setMethod] = useState<PaymentMethod>('pix');
  const fee = deliveryType === 'normal' ? 6.99 : deliveryType ? 8.99 : 0;
  const total = subtotal + fee;
  const methods = [
    { id: 'pix' as PaymentMethod, icon: '◈', name: 'Pix', badge: 'Aprovação imediata', bt: 'neutral', extra: 'A partir de R$ 75 no Pix, ganhe mais um número da sorte' },
    { id: 'googlepay' as PaymentMethod, icon: 'G', name: 'Google Pay', badge: 'Novo', bt: 'dark' },
    { id: 'nupay' as PaymentMethod, icon: 'Nu', name: 'NuPay', badge: 'Parcele em até 24x', bt: 'neutral' },
    { id: 'credit' as PaymentMethod, icon: '💳', name: 'Cartão de Crédito' },
  ];
  return (
    <div className="checkout-flow-page">
      <div className="checkout-step__top-header">
        <div className="co-logo"><span className="co-logo__star">✦</span><span className="co-logo__name">Raia</span></div>
      </div>
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 2 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-fill" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-empty" style={{ width: '34%' }} />
        </div>
      </div>
      <div className="checkout-flow-body">
        <h2 className="checkout-step__page-title">Como deseja pagar?</h2>
        <p className="checkout-step__page-sub">Escolha uma das <strong>formas disponíveis:</strong></p>
        <div className="checkout-payment__coupon-row">
          <div><p className="checkout-payment__coupon-title">Cupom de desconto</p><p className="checkout-payment__coupon-sub">Tem cupom? Ative aqui!</p></div>
          <button className="checkout-payment__coupon-inserir" id="payment-coupon-btn">Inserir</button>
        </div>
        <div className="checkout-payment__methods-list">
          {methods.map(m => (
            <div key={m.id as string} className={'checkout-payment__method-item' + (method === m.id ? ' checkout-payment__method-item--selected' : '')} onClick={() => setMethod(m.id)} id={'payment-' + m.id + '-btn'}>
              <div className="checkout-payment__method-row">
                <span className="checkout-payment__method-icon">{m.icon}</span>
                <div className="checkout-payment__method-name-wrap">
                  <span className="checkout-payment__method-name">{m.name}</span>
                  {m.badge && <span className={'checkout-payment__method-badge checkout-payment__method-badge--' + m.bt}>{m.badge}</span>}
                </div>
                <div className={'checkout-payment__radio' + (method === m.id ? ' checkout-payment__radio--selected' : '')} />
              </div>
              {m.extra && method === m.id && <div className="checkout-payment__method-extra-info">{m.extra}</div>}
            </div>
          ))}
        </div>
        <ServiceLinks />
      </div>
      <div className="checkout-step__bottom">
        <div className="checkout-step__bottom-summary-row">
          <span className="checkout-step__bottom-resumo">Resumo do pedido</span>
          <button className="checkout-step__bottom-detalhes">Detalhes <ChevronUp size={14}/></button>
        </div>
        <div className="checkout-step__bottom-total"><span>Total a pagar</span><span className="checkout-step__bottom-total-value">{fmt(total)}</span></div>
        <div className="checkout-step__bottom-actions">
          <button className="checkout-step__voltar-btn" onClick={onBack} id="step2-back-btn">Voltar</button>
          <button className="checkout-step__continuar-btn checkout-step__continuar-btn--confirm" onClick={() => onConfirm(method)} id="step2-confirm-btn">Confirmar Pedido</button>
        </div>
      </div>
    </div>
  );
};

/* ── Step3 ── */
const Step3: React.FC<{ paymentMethod: PaymentMethod; deliveryType: DeliveryType; onFinish: () => void }> = ({ deliveryType, onFinish }) => {
  const { items, subtotal, clearCart } = useCart();
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 55);
  const [pixTab, setPixTab] = useState<'copy' | 'qr'>('copy');
  const fee = deliveryType === 'normal' ? 6.99 : deliveryType ? 8.99 : 0;
  const totalOrig = items.reduce((s, i) => s + (i.product.oldPrice || i.product.price) * i.quantity, 0);
  const savings = totalOrig - subtotal;
  const total = subtotal + fee;
  const pixCode = '00020101021226900014br.gov.bcb.pix2568pix.adyen.com/pixqrcodelocation/pixloc/v1/loc/ngHgaTHkRf0kRf0khmtPg52040000530398658028R5916RAIA DROGASIL SA6009SAO PAULO62070503***630471BC';
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const fmtTime = (s: number) => Math.floor(s/60).toString().padStart(2,'0') + ':' + (s%60).toString().padStart(2,'0');
  const timerPct = (timeLeft / (29 * 60 + 55)) * 100;
  const deadline = new Date(Date.now() + timeLeft * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="checkout-flow-page">
      <div className="checkout-step__top-header">
        <div className="co-logo"><span className="co-logo__star">✦</span><span className="co-logo__name">Raia</span></div>
      </div>
      <div className="checkout-step__progress-wrap">
        <span className="checkout-step__progress-label">Passo 3 de 3</span>
        <div className="checkout-step__progress-bar-track">
          <div className="checkout-step__progress-bar-fill" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-fill" style={{ width: '33%' }} />
          <div className="checkout-step__progress-bar-fill" style={{ width: '34%' }} />
        </div>
      </div>
      <div className="checkout-flow-body">
        <div className="checkout-confirm__illustration">
          <div className="checkout-confirm__phone-outer">
            <div className="checkout-confirm__phone"><span className="checkout-confirm__phone-pix">◈</span></div>
            <div className="checkout-confirm__clock-badge"><Clock size={20} color="#fff" /></div>
          </div>
        </div>
        <h2 className="checkout-confirm__title">Pedido aguardando pagamento</h2>
        <p className="checkout-confirm__subtitle">Agora é só pagar o seu Pix.</p>
        <div className="checkout-confirm__countdown-card">
          <Clock size={16} color="#666" />
          <span className="checkout-confirm__countdown-text">Evite o <strong>cancelamento do pedido.</strong> Tempo restante para pagar</span>
          <span className="checkout-confirm__countdown-timer">{fmtTime(timeLeft)}</span>
        </div>
        <div className="checkout-confirm__countdown-track">
          <div className="checkout-confirm__countdown-fill" style={{ width: timerPct + '%' }} />
        </div>
        <div className="checkout-confirm__pix-card">
          <div className="checkout-confirm__pix-top-row">
            <span className="checkout-confirm__pix-name">◈ Pix</span>
            <button className="checkout-confirm__pix-howto">Como funciona?</button>
          </div>
          <p className="checkout-confirm__pix-deadline">Finalize o pagamento até às {deadline}</p>
          <div className="checkout-confirm__pix-tabs">
            <button className={'checkout-confirm__pix-tab' + (pixTab==='copy'?' checkout-confirm__pix-tab--active':'')} onClick={() => setPixTab('copy')} id="pix-copy-tab-btn">Copia e Cola</button>
            <button className={'checkout-confirm__pix-tab' + (pixTab==='qr'?' checkout-confirm__pix-tab--active':'')} onClick={() => setPixTab('qr')} id="pix-qr-tab-btn">QR Code</button>
          </div>
          {pixTab === 'copy'
            ? <div className="checkout-confirm__pix-code-box"><p className="checkout-confirm__pix-code-text">{pixCode}</p></div>
            : (
              <div className="checkout-confirm__qr-container">
                <div className="checkout-confirm__qr-box">
                  <div className="checkout-confirm__qr-grid">
                    {Array.from({length:81}).map((_,i) => <div key={i} className={'checkout-confirm__qr-cell' + (Math.random()>0.5?' checkout-confirm__qr-cell--on':'')} />)}
                  </div>
                </div>
                <p className="checkout-confirm__qr-hint">Escaneie com o app do seu banco</p>
              </div>
            )
          }
        </div>
        <div className="checkout-confirm__values">
          <h3 className="checkout-confirm__values-title">Resumo de valores</h3>
          <div className="checkout-confirm__values-card">
            <div className="checkout-confirm__values-row"><span>Subtotal dos produtos</span><span>{fmt(totalOrig)}</span></div>
            <div className="checkout-confirm__values-row"><span>Frete</span><span>{fmt(fee)}</span></div>
            {savings > 0.01 && <div className="checkout-confirm__values-row checkout-confirm__values-row--green"><span>Descontos</span><span>- {fmt(savings)}</span></div>}
            <div className="checkout-confirm__values-row checkout-confirm__values-row--total"><span>Total pago</span><span>{fmt(total)}</span></div>
          </div>
        </div>
        <ServiceLinks />
        <div className="cart-page__rd-footer"><span>Uma empresa</span><span className="cart-page__rd-logo">✦ RDsaúde</span></div>
        <p className="cart-page__anvisa">A Raia segue as determinações da ANVISA</p>
      </div>
      <div className="checkout-confirm__bottom-bar">
        <button className="checkout-confirm__detalhes-btn" onClick={() => { clearCart(); onFinish(); }} id="step3-detalhes-btn">Detalhes do pedido</button>
      </div>
    </div>
  );
};

/* ── Main ── */
const CheckoutFlow: React.FC = () => {
  const { closeCart, setActiveModal } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [dMode, setDMode] = useState<DeliveryMode>('address');
  const [dType, setDType] = useState<DeliveryType>(null);
  const [pMethod, setPMethod] = useState<PaymentMethod>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);
  const close = () => { closeCart(); setStep('cart'); };
  const finish = () => { close(); setActiveModal(null); };
  return (
    <div className="checkout-flow-root" ref={ref}>
      {step === 'cart' && <CartPage onProceed={() => setStep('step1')} onClose={close} />}
      {step === 'step1' && <Step1 onBack={() => setStep('cart')} onContinue={(m, t) => { setDMode(m); setDType(t); setStep('step2'); }} />}
      {step === 'step2' && <Step2 deliveryMode={dMode} deliveryType={dType} onBack={() => setStep('step1')} onConfirm={(m) => { setPMethod(m); setStep('step3'); }} />}
      {step === 'step3' && <Step3 paymentMethod={pMethod} deliveryType={dType} onFinish={finish} />}
    </div>
  );
};

export default CheckoutFlow;
`;

fs.writeFileSync(target, content, 'utf8');
console.log('Written', content.length, 'bytes to', target);
