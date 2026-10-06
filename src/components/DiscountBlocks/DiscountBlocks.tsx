import React from 'react';
import { ChevronRight } from 'lucide-react';
import './DiscountBlocks.css';

const DiscountBlocks: React.FC = () => {
  return (
    <section className="discount-blocks-section" aria-label="Benefícios e Cupons">
      <div className="discount-blocks" id="discount-blocks">
        {/* Block 1: Desconto laboratório */}
        <div
          className="discount-block"
          id="discount-block-lab"
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
              <ChevronRight className="discount-block__arrow" size={20} aria-hidden="true" />
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
              <ChevronRight className="discount-block__arrow" size={20} aria-hidden="true" />
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
