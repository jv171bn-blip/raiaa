import React from 'react';

export const RaiaLoadingBasket: React.FC = () => {
  return (
    <div className="order-processing__circle-stage" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="order-processing__basket-svg"
      >
        <defs>
          <clipPath id="op-circle-clip">
            <circle cx="100" cy="100" r="95" />
          </clipPath>
        </defs>

        {/* Soft cream background circle matching Drogaraia app */}
        <circle cx="100" cy="100" r="95" fill="#F4EFE6" />

        {/* Clipped content so nothing bleeds outside the circle */}
        <g clipPath="url(#op-circle-clip)">
          {/* Animated basket and items group */}
          <g className="op-basket-animated-group" transform="translate(0, 4)">
            {/* Yellow Box (Left) */}
            <rect x="42" y="68" width="30" height="54" rx="4" fill="#F5A623" />
            <polygon points="42,68 57,56 72,68" fill="#E08A10" />
            <rect x="46" y="80" width="22" height="14" rx="2" fill="#FFFFFF" opacity="0.9" />
            <line x1="49" y1="85" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />

            {/* Droga Raia Medicine / Care Box (Teal & White) */}
            <rect x="66" y="66" width="34" height="54" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="66" y="66" width="34" height="13" rx="3" fill="#007F91" />
            {/* Raia Cross */}
            <path d="M83 91 v9 M78.5 95.5 h9" stroke="#007F91" strokeWidth="2.5" strokeLinecap="round" />

            {/* French Baguette Bread */}
            <g className="op-item-baguette" transform="rotate(22 118 64)">
              <rect x="108" y="24" width="22" height="82" rx="11" fill="#E5A138" />
              <path d="M111 40 Q119 38 127 40" stroke="#FFF2D6" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M111 54 Q119 52 127 54" stroke="#FFF2D6" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M111 68 Q119 66 127 68" stroke="#FFF2D6" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M111 82 Q119 80 127 82" stroke="#FFF2D6" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Olive Green Bottle (Right) */}
            <rect x="133" y="58" width="25" height="64" rx="4" fill="#246A44" />
            <rect x="141" y="46" width="9" height="13" fill="#1B5134" />
            <rect x="139" y="42" width="13" height="6" rx="2" fill="#E2E8F0" />
            <rect x="136" y="74" width="19" height="28" rx="2" fill="#FFFFFF" />
            <line x1="139" y1="82" x2="152" y2="82" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="139" y1="87" x2="149" y2="87" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="139" y1="92" x2="151" y2="92" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />

            {/* Small Orange Fruit */}
            <circle cx="68" cy="110" r="14" fill="#F97316" />
            <circle cx="64" cy="106" r="2.5" fill="#FED7AA" />

            {/* Red Apple / Tomato (Center Front) */}
            <g className="op-item-apple">
              <circle cx="98" cy="102" r="19" fill="#DE2E38" />
              <ellipse cx="92" cy="95" rx="4.5" ry="2.5" fill="#FFA5A9" transform="rotate(-30 92 95)" />
              {/* Leaf and Stem */}
              <path d="M98 83 Q100 76 104 74" stroke="#5C3B1E" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M100 78 Q111 74 109 82 Q103 83 100 78" fill="#38A169" />
            </g>

            {/* Two Basket Handles (resting/folded outwards along the rim) */}
            <path d="M42 110 C42 92 65 82 86 86 C88 86 90 94 88 110" stroke="#1B5134" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M112 110 C110 94 112 86 114 86 C135 82 158 92 158 110" stroke="#1B5134" strokeWidth="4.5" strokeLinecap="round" fill="none" />

            {/* Basket Body (Trapezoid, rich forest green) */}
            <path d="M34 114 L46 166 C47 170 50 173 55 173 L145 173 C150 173 153 170 154 166 L166 114 Z" fill="#2E7D52" />

            {/* Basket Front Rim */}
            <rect x="28" y="108" width="144" height="12" rx="6" fill="#246A44" />
            <rect x="32" y="110" width="136" height="3" rx="1.5" fill="#48BB78" opacity="0.6" />

            {/* 5 Basket Slats (Characteristic Drogaraia supermarket basket slots) */}
            <rect x="52" y="124" width="8" height="38" rx="4" fill="#1A4B31" />
            <rect x="71" y="124" width="8" height="38" rx="4" fill="#1A4B31" />
            <rect x="96" y="124" width="8" height="38" rx="4" fill="#1A4B31" />
            <rect x="121" y="124" width="8" height="38" rx="4" fill="#1A4B31" />
            <rect x="140" y="124" width="8" height="38" rx="4" fill="#1A4B31" />

            {/* Horizontal shadow accent along bottom inner edge */}
            <path d="M49 165 L151 165" stroke="#17422B" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RaiaLoadingBasket;
