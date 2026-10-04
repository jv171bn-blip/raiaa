import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Toast.css';

const Toast: React.FC = () => {
  const { toast, hideToast, openCart, isCartPage, activeModal } = useCart();

  // ONLY show this toast if an actual product is being added to cart,
  // and NEVER show it during checkout!
  if (!toast || !toast.show || !toast.product || isCartPage || activeModal === 'checkout') {
    return null;
  }

  return (
    <div className="toast-container" id="toast-notification">
      <div className="toast">
        <div className="toast__icon">
          <CheckCircle2 size={20} color="#008a5b" />
        </div>
        {toast.product?.image && (
          <img
            src={toast.product.image}
            alt={toast.product.name}
            className="toast__product-img"
          />
        )}
        <div className="toast__body">
          <span className="toast__title">Adicionado com sucesso!</span>
          <p className="toast__message">{toast.message.replace('Adicionado à cesta: ', '')}</p>
        </div>
        <button
          className="toast__action-btn"
          onClick={() => {
            hideToast();
            openCart();
          }}
          id="toast-open-cart-btn"
        >
          <ShoppingBag size={14} />
          <span>Ver Cesta</span>
        </button>
        <button
          className="toast__close"
          onClick={hideToast}
          aria-label="Fechar notificação"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
