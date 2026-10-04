import React from 'react';
import { Pill, Sparkles, Heart, Baby, Apple, ShieldAlert, ArrowRight, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './MegaMenu.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    title: 'Medicamentos',
    icon: Pill,
    items: ['Genéricos', 'Analgésicos e Antitérmicos', 'Anti-inflamatórios', 'Gripe e Resfriado', 'Estômago e Digestão', 'Pressão e Coração', 'Diabetes'],
    anchor: 'section-mais-comprados',
  },
  {
    title: 'Beleza & Dermocosméticos',
    icon: Sparkles,
    items: ['Protetor Solar', 'Anti-idade e Séruns', 'Hidratantes Faciais', 'Limpeza de Pele', 'Maquiagem', 'Água Termal'],
    anchor: 'section-marcas-favoritas',
  },
  {
    title: 'Cabelos & Cuidados Diários',
    icon: Heart,
    items: ['Shampoos e Condicionadores', 'Tratamentos Capilares', 'Desodorantes', 'Sabonetes', 'Higiene Bucal'],
    anchor: 'section-cuidados',
  },
  {
    title: 'Mamãe e Bebê',
    icon: Baby,
    items: ['Fraldas Descartáveis', 'Lenços Umedecidos', 'Fórmulas Infantis', 'Acessórios e Chupetas', 'Pomadas para Assadura'],
    anchor: 'section-black-do-dia',
  },
  {
    title: 'Vitaminas & Suplementos',
    icon: Apple,
    items: ['Vitamina C e Zinco', 'Ômega 3 e Óleos', 'Colágeno e Cabelo', 'Whey Protein e Creatina', 'Multivitamínicos'],
    anchor: 'section-destaque-semana',
  },
  {
    title: 'Serviços de Saúde Raia',
    icon: ShieldAlert,
    items: ['Aplicação de Vacinas', 'Testes Rápidos Covid/Gripe', 'Aferição de Pressão', 'Bioimpedância', 'Programa Parar de Fumar'],
    anchor: 'service-section',
  },
];

const MegaMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { showToast } = useCart();

  if (!isOpen) return null;

  const handleCategoryClick = (anchor: string, name: string) => {
    onClose();
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mega-menu-overlay" onClick={onClose}>
      <div className="mega-menu" onClick={e => e.stopPropagation()} id="mega-menu">
        <div className="mega-menu__header">
          <h3 className="mega-menu__title">Todas as Categorias e Departamentos</h3>
          <button className="mega-menu__close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="mega-menu__grid">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="mega-menu__col">
                <div
                  className="mega-menu__col-title"
                  onClick={() => handleCategoryClick(cat.anchor, cat.title)}
                >
                  <Icon size={18} color="#007f91" />
                  <span>{cat.title}</span>
                  <ArrowRight size={14} className="mega-menu__arrow" />
                </div>
                <ul className="mega-menu__list">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href={`#${cat.anchor}`}
                        className="mega-menu__link"
                        onClick={e => {
                          e.preventDefault();
                          handleCategoryClick(cat.anchor, item);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
