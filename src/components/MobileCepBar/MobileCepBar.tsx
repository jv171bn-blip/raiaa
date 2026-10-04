import React from 'react';
import { MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './MobileCepBar.css';

const MobileCepBar: React.FC = () => {
  const { setActiveModal, addressDisplay } = useCart();

  return (
    <div
      className="mobile-cep-bar"
      id="mobile-cep-btn"
      onClick={() => setActiveModal('cep')}
      role="button"
      tabIndex={0}
      title={addressDisplay ? `${addressDisplay.street} ${addressDisplay.cep}` : 'Inserir CEP para entrega'}
    >
      <div className="mobile-cep-bar__inner container">
        <MapPin size={16} color="#1c1c1c" strokeWidth={1.8} className="mobile-cep-bar__pin" />
        <span className="mobile-cep-bar__text">
          {addressDisplay ? (
            <>
              <span className="mobile-cep-bar__street">{addressDisplay.street}</span>{' '}
              <u>{addressDisplay.cep}</u>
            </>
          ) : (
            <u>Inserir CEP</u>
          )}
        </span>
      </div>
    </div>
  );
};

export default MobileCepBar;
