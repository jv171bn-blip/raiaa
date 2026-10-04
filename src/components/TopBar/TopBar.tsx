import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__content">
        <span className="top-bar__text">Frete grátis nas compras acima de R$149,90</span>
      </div>
    </div>
  );
};

export default TopBar;
