import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './OrderTrackingCard.css';

const OrderTrackingCard: React.FC = () => {
  const { setActiveModal } = useCart();

  return (
    <div className="order-tracking-card-wrap">
      <button
        type="button"
        className="order-tracking-card"
        onClick={() => setActiveModal('orders')}
        id="btn-order-tracking"
        title="Acompanhe seus pedidos"
      >
        <div className="order-tracking-card__left">
          <div className="order-tracking-card__icon-box">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222222"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
          </div>
          <span className="order-tracking-card__title">Acompanhe seus pedidos</span>
        </div>
        <ChevronRight size={22} className="order-tracking-card__chevron" />
      </button>
    </div>
  );
};

export default OrderTrackingCard;
