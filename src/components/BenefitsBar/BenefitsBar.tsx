import React from 'react';
import { Zap, Gift, Store, Tag, FlaskConical } from 'lucide-react';
import './BenefitsBar.css';

const benefits = [
  {
    icon: Zap,
    title: 'Tempo médio para entrega: de 3h a 5h',
    sub: 'com a Entrega Expressa!',
  },
  {
    icon: Gift,
    title: 'Ganhe pontos stix',
    sub: 'em suas compras.',
  },
  {
    icon: Store,
    title: 'Retire na farmácia em até 30min, grátis!',
    sub: '',
  },
  {
    icon: Tag,
    title: 'Descontos e benefícios',
    sub: 'em medicamentos.',
  },
  {
    icon: FlaskConical,
    title: 'Exames, testes, vacinas',
    sub: 'e muito mais.',
  },
];

const BenefitsBar: React.FC = () => {
  return (
    <div className="benefits" id="benefits-bar">
      {benefits.map((b, i) => {
        const Icon = b.icon;
        return (
          <div key={i} className="benefit-card" id={`benefit-card-${i}`}>
            <div className="benefit-card__icon-wrap">
              <Icon size={20} className="benefit-card__icon" />
            </div>
            <div className="benefit-card__text">
              <span className="benefit-card__title">{b.title}</span>
              {b.sub && <span className="benefit-card__sub">{b.sub}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsBar;
