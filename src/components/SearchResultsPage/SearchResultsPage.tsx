import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import FilterDrawer, { FilterState } from '../FilterDrawer/FilterDrawer';
import './SearchResultsPage.css';

interface SearchResultsPageProps {
  allProducts: Product[];
}

const initialFilters: FilterState = {
  sortBy: 'relevance',
  seller: null,
  highlight: null,
  priceRange: null,
  brand: null,
  exclusiveBrand: null,
  category: null,
  manufacturer: null,
  quantity: null,
  dosageForm: null,
  dosage: null,
  route: null,
  flavor: null,
  isKit: null,
};

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const isMedicineQuery = (query: string): boolean => {
  const norm = normalizeText(query.trim());

  const medicineKeywords = [
    'dipirona', 'dorflex', 'paracetamol', 'neosaldina', 'novalgina', 'torsilax',
    'ibuprofeno', 'losartana', 'antigripal', 'analgesico', 'antialergico',
    'anti-inflamatorio', 'remedio', 'medicamento', 'antibiotico', 'omeprazol',
    'aspirina', 'tylenol', 'benegrip', 'allegra', 'loratadina', 'claritin',
    'buscopan', 'dramin', 'simeticona', 'luftal', 'glifage', 'metformina',
    'atenolol', 'anlodipino', 'sinvastatina', 'rivotril', 'clonazepam',
    'diazepam', 'lexotan', 'decongex', 'coristina', 'resfenol', 'nimesulida',
    'cataflam', 'voltaren', 'diclofenaco', 'amoxicilina', 'azitromicina'
  ];
  return medicineKeywords.some(med => norm.includes(med));
};

const getCategoryPillsForQuery = (query: string): string[] => {
  const norm = normalizeText(query.trim());
  if (!norm) return [];

  // Medicine rule: Row 2 is completely hidden!
  if (isMedicineQuery(norm)) {
    return [];
  }

  // Diapers / Fraldas (Matches Image 1 exactly!)
  if (norm.includes('fralda') || norm.includes('pampers') || norm.includes('huggies') || norm.includes('babysec')) {
    return ['Fralda Infantil', 'Loja Pampers', 'Fralda Juvenil'];
  }

  // Sunscreen / Protetor Solar
  if (norm.includes('solar') || norm.includes('protetor') || norm.includes('anthelios')) {
    return ['Protetor Facial', 'Loja La Roche-Posay', 'Protetor Corporal'];
  }

  // Hair care / Shampoo
  if (norm.includes('shampoo') || norm.includes('cabelo') || norm.includes('condicionador') || norm.includes('darrow')) {
    return ['Anticaspa', 'Loja Darrow', 'Cabelos Cacheados'];
  }

  // Skincare / Dermocosméticos / Hidratante
  if (norm.includes('cerave') || norm.includes('hidratante') || norm.includes('serum') || norm.includes('pele')) {
    return ['Loja CeraVe', 'Hidratante Facial', 'Hidratante Corporal'];
  }

  // Oral Care
  if (norm.includes('dente') || norm.includes('pasta') || norm.includes('escova') || norm.includes('colgate') || norm.includes('oral-b')) {
    return ['Creme Dental', 'Loja Colgate', 'Escova de Dente'];
  }

  // Vitamins & Supplements
  if (norm.includes('vitamina') || norm.includes('whey') || norm.includes('colageno') || norm.includes('omega') || norm.includes('creatina')) {
    return ['Vitamina C', 'Loja Centrum', 'Colágeno'];
  }

  // Asian Beauty
  if (norm.includes('asiatica') || norm.includes('coreana') || norm.includes('hada labo')) {
    return ['Loja Hada Labo', 'Hidratante Facial', 'Protetor Facial'];
  }

  // Perfumaria
  if (norm.includes('perfum') || norm.includes('fragr') || norm.includes('erba') || norm.includes('lattafa') || norm.includes('armaf') || norm.includes('aventus') || norm.includes('million') || norm.includes('chanel')) {
    return ['Perfumes Importados', 'Perfumes Masculinos', 'Perfumes Femininos'];
  }

  return [];
};

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ allProducts }) => {
  const { searchQuery, goToHome, goToSearchPage } = useCart();
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  // 1. Text search across all fields
  const textFiltered = useMemo(() => {
    const raw = searchQuery.trim();
    if (!raw) return allProducts;

    const queryTokens = normalize(raw).split(/\s+/).filter(Boolean);

    return allProducts.filter(p => {
      const pName = normalize(p.name || '');
      const pBrand = normalize(p.brand || '');
      const pCat = normalize(p.category || '');
      const pSub = normalize(p.subcategory || '');
      const pActive = normalize(p.activeIngredient || '');
      const pBadges = (p.badges || []).map(b => normalize(b)).join(' ');
      const pDesc = normalize(p.description || '');

      const fullHaystack = `${pName} ${pBrand} ${pCat} ${pSub} ${pActive} ${pBadges} ${pDesc}`;

      return queryTokens.every(token => fullHaystack.includes(token));
    });
  }, [searchQuery, allProducts]);

  // Extract available brands and categories from the search result set
  const availableBrands = useMemo(() => {
    const set = new Set<string>();
    textFiltered.forEach(p => {
      if (p.brand) set.add(p.brand);
    });
    return Array.from(set).slice(0, 12);
  }, [textFiltered]);

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    textFiltered.forEach(p => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [textFiltered]);

  // 2. Apply advanced filters from FilterDrawer
  const filteredProducts = useMemo(() => {
    return textFiltered.filter(p => {
      // Seller
      if (filters.seller && filters.seller === 'Raia') {
        // All Drogaraia products qualify as Raia
      }

      // Highlight
      if (filters.highlight) {
        if (filters.highlight === 'Black do Dia') {
          const hasBadge = (p.badges || []).some(b => b.toLowerCase().includes('black'));
          if (!hasBadge && (p.discount || 0) < 20) return false;
        }
        if (filters.highlight === 'Cupom NEO15') {
          // Cupom NEO15 applies to general items
        }
      }

      // Price range
      if (filters.priceRange) {
        if (filters.priceRange === 'Até R$ 20' && p.price > 20) return false;
        if (filters.priceRange === 'R$ 20 a R$ 50' && (p.price < 20 || p.price > 50)) return false;
        if (filters.priceRange === 'R$ 50 a R$ 100' && (p.price < 50 || p.price > 100)) return false;
        if (filters.priceRange === 'Acima de R$ 100' && p.price <= 100) return false;
      }

      // Brand
      if (filters.brand && p.brand && !p.brand.toLowerCase().includes(filters.brand.toLowerCase())) {
        return false;
      }

      // Exclusive brand
      if (filters.exclusiveBrand) {
        const br = (p.brand || '').toLowerCase();
        if (!br.includes(filters.exclusiveBrand.toLowerCase())) return false;
      }

      // Category
      if (filters.category && p.category !== filters.category) {
        return false;
      }

      // Manufacturer
      if (filters.manufacturer) {
        const hay = `${p.brand || ''} ${p.name || ''}`.toLowerCase();
        if (!hay.includes(filters.manufacturer.toLowerCase())) return false;
      }

      // Dosage form (Forma farmacêutica)
      if (filters.dosageForm) {
        const formLow = filters.dosageForm.toLowerCase();
        const hay = `${p.name || ''} ${p.size || ''}`.toLowerCase();
        if (!hay.includes(formLow.slice(0, 4))) return false;
      }

      // Dosage
      if (filters.dosage) {
        const hay = `${p.name || ''} ${p.dosage || ''}`.toLowerCase();
        if (!hay.includes(filters.dosage.toLowerCase())) return false;
      }

      // Flavor
      if (filters.flavor) {
        const hay = `${p.name || ''} ${p.description || ''}`.toLowerCase();
        if (!hay.includes(filters.flavor.toLowerCase())) return false;
      }

      // Kit
      if (filters.isKit) {
        const isProductKit = (p.name || '').toLowerCase().includes('kit');
        if (filters.isKit === 'Sim' && !isProductKit) return false;
        if (filters.isKit === 'Não' && isProductKit) return false;
      }

      return true;
    });
  }, [textFiltered, filters]);

  // 3. Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (filters.sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'relevance':
      default: {
        const rawNorm = normalize(searchQuery.trim());
        const isDiaperQuery = ['fralda', 'pampers', 'huggies'].some(term => rawNorm.includes(term));

        return list.sort((a, b) => {
          if (isDiaperQuery) {
            const hasExplicitXG = rawNorm.includes('xg') || rawNorm.includes('xxg');
            if (!hasExplicitXG) {
              const isTargetSize = (p: Product) => {
                const str = ` ${p.name} ${p.size || ''} `.toUpperCase();
                const isExcluded = str.includes('XXG') || str.includes('XG');
                if (isExcluded) return false;
                const hasM = str.includes(' M ') || str.includes(' TAM M') || str.includes('(M)') || str.includes('TAMANHO M');
                const hasG = str.includes(' G ') || str.includes(' TAM G') || str.includes('(G)') || str.includes('TAMANHO G');
                return hasM || hasG;
              };

              const aTarget = isTargetSize(a) ? 1 : 0;
              const bTarget = isTargetSize(b) ? 1 : 0;
              if (bTarget !== aTarget) return bTarget - aTarget;
            }
          }

          const aHas = normalize(a.name).includes(rawNorm) ? 1 : 0;
          const bHas = normalize(b.name).includes(rawNorm) ? 1 : 0;
          return bHas - aHas;
        });
      }
    }
  }, [filteredProducts, filters.sortBy, searchQuery]);

  // Check if any non-default filter is applied
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.sortBy !== 'relevance') count++;
    if (filters.seller) count++;
    if (filters.highlight) count++;
    if (filters.priceRange) count++;
    if (filters.brand) count++;
    if (filters.exclusiveBrand) count++;
    if (filters.category) count++;
    if (filters.manufacturer) count++;
    if (filters.quantity) count++;
    if (filters.dosageForm) count++;
    if (filters.dosage) count++;
    if (filters.route) count++;
    if (filters.flavor) count++;
    if (filters.isKit) count++;
    return count;
  }, [filters]);

  const handleUpdateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  const categoryPills = useMemo(() => getCategoryPillsForQuery(searchQuery), [searchQuery]);

  const quickSearchSuggestions = [
    'Dipirona',
    'Dorflex',
    'Fralda',
    'Protetor Solar',
    'Novalgina',
    'Whey Protein',
    'CeraVe',
    'Neosaldina',
  ];

  return (
    <div className="search-page">
      {/* Pills Container (Row 1: Delivery/Filter, Row 2: Contextual Categories/Stores) */}
      <div className="search-pills-container">
        {/* Row 1: Delivery & Filter Pills */}
        <div className="search-pills__row search-pills__row--delivery">
          {/* Oval Filter Funnel Button (Image 1 & 2) */}
          <button
            type="button"
            className={`search-pills__btn search-pills__btn--funnel ${activeFiltersCount > 0 ? 'search-pills__btn--active' : ''}`}
            onClick={() => setIsFilterDrawerOpen(true)}
            aria-label="Abrir filtros"
            title="Filtrar e ordenar resultados"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {activeFiltersCount > 0 && (
              <span className="search-pills__badge">{activeFiltersCount}</span>
            )}
          </button>

          {/* Receber Agora Button (Clock with speed lines) */}
          <button
            type="button"
            className={`search-pills__btn ${filters.highlight === 'Receber Agora' ? 'search-pills__btn--active' : ''}`}
            onClick={() => handleUpdateFilters({ highlight: filters.highlight === 'Receber Agora' ? null : 'Receber Agora' })}
            title="Receber Agora"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="search-pills__icon">
              <line x1="2" y1="9" x2="6" y2="9" />
              <line x1="2" y1="15" x2="5" y2="15" />
              <circle cx="14" cy="12" r="8" />
              <polyline points="14 8 14 12 17 14" />
            </svg>
            <span>Receber Agora</span>
          </button>

          {/* Retirar na Farmácia Button (Store with medical cross) */}
          <button
            type="button"
            className={`search-pills__btn ${filters.seller === 'Farmácia' ? 'search-pills__btn--active' : ''}`}
            onClick={() => handleUpdateFilters({ seller: filters.seller === 'Farmácia' ? null : 'Farmácia' })}
            title="Retirar na Farmácia"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="search-pills__icon">
              <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
              <line x1="12" y1="9" x2="12" y2="11" />
              <line x1="11" y1="10" x2="13" y2="10" />
              <path d="M5 13v7h14v-7" />
              <path d="M9 20v-4h6v4" />
            </svg>
            <span>Retirar na Farmácia</span>
          </button>
        </div>

        {/* Row 2: Contextual Category & Store Pills (THE RULE: hidden for medicines like dipirona!) */}
        {categoryPills.length > 0 && (
          <div className="search-pills__row search-pills__row--categories">
            {categoryPills.map((pill, idx) => {
              const isSelected =
                (pill.startsWith('Loja ') && filters.brand?.toLowerCase() === pill.replace('Loja ', '').toLowerCase()) ||
                filters.category?.toLowerCase() === pill.toLowerCase();

              return (
                <button
                  key={idx}
                  type="button"
                  className={`search-pills__btn search-pills__btn--category ${isSelected ? 'search-pills__btn--active' : ''}`}
                  onClick={() => {
                    if (pill.startsWith('Loja ')) {
                      const brandName = pill.replace('Loja ', '');
                      handleUpdateFilters({ brand: filters.brand === brandName ? null : brandName });
                    } else {
                      handleUpdateFilters({ category: filters.category === pill ? null : pill });
                    }
                  }}
                >
                  <span>{pill}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Full-width Gray Breadcrumb Strip (Image 1 & 2) */}
      <nav className="search-breadcrumb-strip" aria-label="Navegação estrutural">
        <div className="search-breadcrumb-strip__inner container">
          <button type="button" onClick={goToHome} className="search-breadcrumb-strip__link">
            Página inicial
          </button>
          <span className="search-breadcrumb-strip__sep">&gt;</span>
          <span className="search-breadcrumb-strip__link search-breadcrumb-strip__link--static">
            Busca
          </span>
          <span className="search-breadcrumb-strip__sep">&gt;</span>
          <span className="search-breadcrumb-strip__current">
            {searchQuery}
          </span>
        </div>
      </nav>

      {/* Main Results Container */}
      <div className="container">
        {/* Results Grid or Empty State */}
        {sortedProducts.length > 0 ? (
          <main className="search-page__grid" id="search-results-grid">
            {sortedProducts.map(p => (
              <SearchResultCard key={p.id} product={p} />
            ))}
          </main>
        ) : (
          <section className="search-page__empty">
            <div className="search-page__empty-icon">
              <Search size={48} />
            </div>
            <h2 className="search-page__empty-title">
              Nenhum produto encontrado para &ldquo;{searchQuery}&rdquo;
            </h2>
            <p className="search-page__empty-desc">
              Tente redefinir os filtros aplicados ou buscar por termos mais genéricos.
            </p>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                className="search-page__clear-filters-btn"
                onClick={handleClearFilters}
              >
                Limpar todos os filtros ({activeFiltersCount})
              </button>
            )}

            <div className="search-page__suggestions">
              <span className="search-page__suggestions-label">Termos sugeridos:</span>
              <div className="search-page__suggestions-list">
                {quickSearchSuggestions.map(term => (
                  <button
                    key={term}
                    type="button"
                    className="search-page__suggestion-pill"
                    onClick={() => {
                      handleClearFilters();
                      goToSearchPage(term);
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="search-page__home-btn"
              onClick={goToHome}
            >
              Voltar para a página inicial
            </button>
          </section>
        )}
      </div>

      {/* Filter Drawer Modal (Images 2, 3, 4) */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        onUpdateFilters={handleUpdateFilters}
        onClearFilters={handleClearFilters}
        onApply={() => setIsFilterDrawerOpen(false)}
        totalFound={sortedProducts.length}
        availableBrands={availableBrands}
        availableCategories={availableCategories}
      />
    </div>
  );
};

export default SearchResultsPage;
