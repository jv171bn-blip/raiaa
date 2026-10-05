import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronRight,
  Search,
  X,
  ArrowDownUp,
  Package,
  ArrowUp,
} from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../ProductCard/ProductCard';
import './AllProductsPage.css';

interface AllProductsPageProps {
  allProducts: Product[];
}

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'discount' | 'rating' | 'name-asc';

const PAGE_SIZE = 32;

const normalize = (text: string = '') =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const AllProductsPage: React.FC<AllProductsPageProps> = ({ allProducts }) => {
  const { goToHome } = useCart();
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products by search input
  const filteredProducts = useMemo(() => {
    if (!searchFilter.trim()) return allProducts;

    const query = normalize(searchFilter.trim());
    return allProducts.filter((product) => {
      const name = normalize(product.name);
      const brand = normalize(product.brand);
      const cat = normalize(product.category || '');
      const sub = normalize(product.subcategory || '');
      return (
        name.includes(query) ||
        brand.includes(query) ||
        cat.includes(query) ||
        sub.includes(query)
      );
    });
  }, [allProducts, searchFilter]);

  // Sort products - Default 'relevance' places newly added (ultraId) products FIRST!
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];

    switch (sortBy) {
      case 'relevance':
        return list.sort((a, b) => {
          const aIsNew = Boolean(a.ultraId);
          const bIsNew = Boolean(b.ultraId);
          if (aIsNew && !bIsNew) return -1;
          if (!aIsNew && bIsNew) return 1;
          if (aIsNew && bIsNew) {
            return (b.ultraId || 0) - (a.ultraId || 0);
          }
          return 0;
        });

      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);

      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);

      case 'discount':
        return list.sort((a, b) => (b.discount || 0) - (a.discount || 0));

      case 'rating':
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));

      case 'name-asc':
        return list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

      default:
        return list;
    }
  }, [filteredProducts, sortBy]);

  const displayedProducts = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sortedProducts.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(sortedProducts.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="all-products-page container" id="all-products-page">
      {/* Breadcrumb Navigation */}
      <nav className="all-products-page__breadcrumb" aria-label="Navegação">
        <button onClick={goToHome} className="all-products-page__breadcrumb-btn" id="breadcrumb-home">
          Início
        </button>
        <ChevronRight size={14} className="all-products-page__breadcrumb-sep" />
        <span className="all-products-page__breadcrumb-current">Todos os Produtos</span>
      </nav>

      {/* Controls: Busca e Ordenação */}
      <div className="all-products-page__controls">
        <div className="all-products-page__search-wrap">
          <Search size={16} className="all-products-page__search-icon" />
          <input
            type="text"
            className="all-products-page__search-input"
            placeholder="Buscar por produto, marca ou categoria..."
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
          {searchFilter && (
            <button
              type="button"
              className="all-products-page__search-clear"
              onClick={() => setSearchFilter('')}
              aria-label="Limpar busca"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="all-products-page__sort-wrap">
          <label htmlFor="all-products-sort" className="all-products-page__sort-label">
            <ArrowDownUp size={15} />
            <span>Ordenar por:</span>
          </label>
          <select
            id="all-products-sort"
            className="all-products-page__sort-select"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortOption);
              setVisibleCount(PAGE_SIZE);
            }}
          >
            <option value="relevance">Mais Relevantes</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="discount">Maior Desconto (%)</option>
            <option value="rating">Melhores Avaliações</option>
            <option value="name-asc">Ordem Alfabética (A - Z)</option>
          </select>
        </div>
      </div>

      {/* Products Grid Unificado */}
      {displayedProducts.length > 0 ? (
        <div className="all-products-page__grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="all-products-page__empty">
          <Package size={44} className="all-products-page__empty-icon" />
          <h2 className="all-products-page__empty-title">Nenhum produto encontrado</h2>
          <p className="all-products-page__empty-desc">
            Não encontramos nenhum produto que coincida com a busca <strong>"{searchFilter}"</strong>.
          </p>
          <button
            type="button"
            className="all-products-page__empty-btn"
            onClick={() => {
              setSearchFilter('');
              setVisibleCount(PAGE_SIZE);
            }}
          >
            Ver todos os produtos
          </button>
        </div>
      )}

      {/* Carregamento Progressivo / Paginação */}
      {visibleCount < sortedProducts.length && (
        <div className="all-products-page__load-more-wrap">
          <div className="all-products-page__progress-bar-bg">
            <div
              className="all-products-page__progress-bar-fill"
              style={{
                width: `${Math.min(100, (displayedProducts.length / sortedProducts.length) * 100)}%`,
              }}
            />
          </div>
          <span className="all-products-page__progress-text">
            Exibindo {displayedProducts.length} de {sortedProducts.length} produtos
          </span>

          <div className="all-products-page__load-actions">
            <button
              type="button"
              className="all-products-page__load-more-btn"
              onClick={handleLoadMore}
              id="load-more-products-btn"
            >
              Carregar mais produtos (+{Math.min(PAGE_SIZE, sortedProducts.length - visibleCount)})
            </button>

            {sortedProducts.length - visibleCount > PAGE_SIZE && (
              <button
                type="button"
                className="all-products-page__load-all-btn"
                onClick={handleLoadAll}
              >
                Carregar todos ({sortedProducts.length})
              </button>
            )}
          </div>
        </div>
      )}

      {/* Botão Flutuante Voltar ao Topo */}
      {showBackToTop && (
        <button
          type="button"
          className="all-products-page__back-to-top"
          onClick={scrollToTop}
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
          <span>Topo</span>
        </button>
      )}
    </div>
  );
};

export default AllProductsPage;
