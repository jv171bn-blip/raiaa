import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useScrollLock } from '../../utils/scrollLock';
import './CartDrawer.css';

const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    couponDiscount,
    appliedCoupon,
    montaDiscount,
    shipping,
    finalTotal,
    totalItemsCount,
    applyCoupon,
    removeCoupon,
    setActiveModal,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ text: string; error?: boolean } | null>(null);

  useScrollLock(isCartOpen);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    setCouponMsg({ text: res.message, error: !res.success });
    if (res.success) {
      setCouponCode('');
    }
  };

  const freeShippingThreshold = 149.90;
  const missingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    closeCart();
    setActiveModal('checkout');
  };

  return (
    <div className="cart-drawer-overlay" onClick={closeCart}>
      <aside
        className="cart-drawer"
        id="cart-drawer"
        onClick={e => e.stopPropagation()}
        aria-label="Cesta de compras"
      >
        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title-wrap">
            <ShoppingBag size={22} className="cart-drawer__header-icon" />
            <h2 className="cart-drawer__title">Sua Cesta</h2>
            <span className="cart-drawer__badge">{totalItemsCount}</span>
          </div>
          <button
            className="cart-drawer__close"
            onClick={closeCart}
            id="close-cart-btn"
            aria-label="Fechar cesta"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="cart-drawer__shipping-meter">
          <div className="cart-drawer__shipping-text">
            <Truck size={16} />
            {missingForFree > 0 ? (
              <span>
                Faltam <strong>R$ {missingForFree.toFixed(2).replace('.', ',')}</strong> para{' '}
                <strong>Frete Grátis</strong>
              </span>
            ) : (
              <span className="cart-drawer__free-shipping-tag">
                🎉 Parabéns! Você ganhou <strong>Frete Grátis</strong>!
              </span>
            )}
          </div>
          <div className="cart-drawer__progress-bar">
            <div
              className="cart-drawer__progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="cart-drawer__empty" id="cart-empty-state">
            <div className="cart-drawer__empty-icon">
              <ShoppingBag size={48} />
            </div>
            <h3 className="cart-drawer__empty-title">Sua cesta está vazia</h3>
            <p className="cart-drawer__empty-desc">
              Navegue pelos nossos produtos e encontre as melhores ofertas para sua saúde e bem-estar!
            </p>
            <button
              className="cart-drawer__empty-btn"
              onClick={closeCart}
              id="start-shopping-btn"
            >
              Começar a comprar
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="cart-drawer__items" id="cart-items-list">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="cart-item" id={`cart-item-${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item__img"
                  />
                  <div className="cart-item__info">
                    <p className="cart-item__name">{product.name}</p>
                    <span className="cart-item__size">{product.size}</span>
                    <div className="cart-item__price-row">
                      <span className="cart-item__price">
                        R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                      </span>
                      {quantity > 1 && (
                        <span className="cart-item__unit-price">
                          (R$ {product.price.toFixed(2).replace('.', ',')} cada)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="cart-item__actions">
                    <div className="cart-item__qty-controls">
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(product.id, -1)}
                        id={`cart-decrease-${product.id}`}
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="cart-item__qty-val">{quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(product.id, 1)}
                        id={`cart-increase-${product.id}`}
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      className="cart-item__remove-btn"
                      onClick={() => removeFromCart(product.id)}
                      id={`cart-remove-${product.id}`}
                      aria-label="Remover item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="cart-drawer__footer">
              {/* Coupon section */}
              <div className="cart-drawer__coupon-box">
                {appliedCoupon ? (
                  <div className="cart-drawer__coupon-applied">
                    <div className="cart-drawer__coupon-info">
                      <CheckCircle2 size={16} color="#008a5b" />
                      <span>Cupom <strong>{appliedCoupon}</strong> ativo</span>
                    </div>
                    <button
                      className="cart-drawer__coupon-remove"
                      onClick={removeCoupon}
                      id="remove-coupon-btn"
                    >
                      Remover
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="cart-drawer__coupon-form">
                    <Tag size={16} className="cart-drawer__coupon-icon" />
                    <input
                      type="text"
                      placeholder="Cupom de desconto (ex: RAIA10)"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value.toUpperCase())}
                      className="cart-drawer__coupon-input"
                      id="cart-coupon-input"
                    />
                    <button
                      type="submit"
                      className="cart-drawer__coupon-btn"
                      id="apply-coupon-btn"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
                {couponMsg && (
                  <span
                    className={`cart-drawer__coupon-msg ${
                      couponMsg.error ? 'cart-drawer__coupon-msg--error' : 'cart-drawer__coupon-msg--success'
                    }`}
                  >
                    {couponMsg.text}
                  </span>
                )}
              </div>

              {/* Price rows */}
              <div className="cart-drawer__summary">
                <div className="cart-drawer__summary-row">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="cart-drawer__summary-row cart-drawer__summary-row--discount">
                    <span>Desconto do cupom</span>
                    <span>- R$ {couponDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                {montaDiscount > 0 && (
                  <div className="cart-drawer__summary-row cart-drawer__summary-row--discount" style={{ color: '#008a5b' }}>
                    <span>Monta que Desconta</span>
                    <span>- R$ {montaDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="cart-drawer__summary-row">
                  <span>Frete</span>
                  <span>{shipping === 0 ? <strong style={{ color: '#008a5b' }}>Grátis</strong> : `R$ ${shipping.toFixed(2).replace('.', ',')}`}</span>
                </div>
                <div className="cart-drawer__summary-row cart-drawer__summary-row--total">
                  <span>Total</span>
                  <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <span className="cart-drawer__installments">
                  ou até 3x de R$ {(finalTotal / 3).toFixed(2).replace('.', ',')} sem juros
                </span>
              </div>

              {/* Checkout button */}
              <button
                className="cart-drawer__checkout-btn"
                onClick={handleCheckout}
                id="cart-checkout-button"
              >
                <span>Finalizar Compra</span>
                <ArrowRight size={18} />
              </button>

              <div className="cart-drawer__security">
                <ShieldCheck size={16} />
                <span>Compra 100% segura e garantida pela Droga Raia</span>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
