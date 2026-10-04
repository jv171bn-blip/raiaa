import React from 'react';
import { useCart } from '../../context/CartContext';
import './TrendingSearches.css';

const terms = [
  'Desodorante',
  'Fralda',
  'Absorvente',
  'Shampoo',
  'Sabonete',
  'Principia',
  'Cerave',
  'Eucerin',
  'Protetor-solar',
  'Protetor+solar+facial',
  'Lenço+umedecido',
  'Hidratante+facial',
  'Sabonete+facial',
  'Escova de dente',
  'Sabonete-liquido',
  'Rexona+clinical',
  'Esmalte',
  'Algodao',
  'Hidratante',
  'Fio dental',
  'Isdin',
  'Creatina',
  'Rexona',
  'Nivea',
  'Lubrificante',
  'Creamy',
  'Cetaphil',
  'Dove',
  'Needs',
  'Sabonete+intimo',
];

const TrendingSearches: React.FC = () => {
  const { goToSearchPage } = useCart();

  const handleTermClick = (e: React.MouseEvent, rawTerm: string) => {
    e.preventDefault();
    // Normalize pluses/hyphens when searching so the search engine finds results accurately
    const cleanSearchQuery = rawTerm.replace(/[+]/g, ' ');
    goToSearchPage(cleanSearchQuery);
  };

  return (
    <section className="trending" id="trending-searches">
      <h2 className="trending__title">Buscas em alta</h2>
      <div className="trending__list">
        {terms.map((term, i) => (
          <React.Fragment key={i}>
            <a
              href="#"
              className="trending__term"
              id={`trending-term-${i}`}
              onClick={e => handleTermClick(e, term)}
            >
              {term}
            </a>
            {i < terms.length - 1 && (
              <span className="trending__separator">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TrendingSearches;
