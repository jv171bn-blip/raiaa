import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './DiscountBlocks.css';

const DiscountBlocks: React.FC = () => {
  const { setActiveModal } = useCart();

  return (
    <section className="discount-blocks-section" aria-label="Benefícios e Cupons">
      <div className="discount-blocks" id="discount-blocks">
        {/* Block 1: Desconto laboratório */}
        <div
          className="discount-block"
          id="discount-block-lab"
          onClick={() => setActiveModal('pbm')}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveModal('pbm');
            }
          }}
        >
          <div className="discount-block__img-wrap">
            <img
              src="/illustrations/desconto_laboratorio.png"
              alt="Desconto laboratório"
              className="discount-block__img"
            />
          </div>
          <div className="discount-block__content">
            <div className="discount-block__header">
              <h3 className="discount-block__title">
                Desconto<br />laboratório
              </h3>
              <ChevronRight className="discount-block__arrow" size={20} />
            </div>
            <p className="discount-block__desc">
              Conheça os benefícios oferecidos pelos programas parceiros para você economizar ainda mais.
            </p>
          </div>
        </div>

        {/* Block 2: Cupons de desconto */}
        <div
          className="discount-block"
          id="discount-block-coupon"
          onClick={() => setActiveModal('coupons')}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveModal('coupons');
            }
          }}
        >
          <div className="discount-block__img-wrap">
            <img
              src="/illustrations/cupons_desconto.png"
              alt="Cupons de desconto"
              className="discount-block__img"
            />
          </div>
          <div className="discount-block__content">
            <div className="discount-block__header">
              <h3 className="discount-block__title">
                Cupons de<br />desconto
              </h3>
              <ChevronRight className="discount-block__arrow" size={20} />
            </div>
            <p className="discount-block__desc">
              Economize nas suas compras com cupons exclusivos. Aproveite os melhores descontos agora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBlocks;
