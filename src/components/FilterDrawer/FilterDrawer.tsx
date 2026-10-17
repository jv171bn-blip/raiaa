import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollLock } from '../../utils/scrollLock';
import './FilterDrawer.css';

export interface FilterState {
  sortBy: 'relevance' | 'price-asc' | 'price-desc';
  seller: string | null;
  highlight: string | null;
  priceRange: string | null;
  brand: string | null;
  exclusiveBrand: string | null;
  category: string | null;
  manufacturer: string | null;
  quantity: string | null;
  dosageForm: string | null;
  dosage: string | null;
  route: string | null;
  flavor: string | null;
  isKit: string | null;
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (newFilters: Partial<FilterState>) => void;
  onClearFilters: () => void;
  onApply: () => void;
  totalFound: number;
  availableBrands?: string[];
  availableCategories?: string[];
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onClearFilters,
  onApply,
  totalFound,
  availableBrands = ['Prati Donaduzzi', 'Cimed', 'EMS', 'Eurofarma', 'Dorflex', 'Novalgina', 'Pampers', 'Huggies'],
  availableCategories = ['Medicamentos', 'Dermocosméticos', 'Mamãe & Bebê', 'Vida Saudável', 'Cabelos', 'Beleza & Higiene'],
}) => {
  // Accordion open/close state matching images 2, 3, and 4
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    vendidoPor: true,
    destaques: true,
    ordenarPor: true,
    preco: false,
    marca: false,
    marcasExclusivas: false,
    categoria: false,
    fabricante: false,
    quantidade: false,
    formaFarmaceutica: false,
    dosagem: false,
    viaAdministracao: false,
    sabor: false,
    kit: false,
  });

  useScrollLock(isOpen);

  if (!isOpen) return null;

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSellerToggle = (val: string) => {
    onUpdateFilters({ seller: filters.seller === val ? null : val });
  };

  const handleHighlightToggle = (val: string) => {
    onUpdateFilters({ highlight: filters.highlight === val ? null : val });
  };

  const handleSortChange = (val: 'relevance' | 'price-asc' | 'price-desc') => {
    onUpdateFilters({ sortBy: val });
  };

  const handlePriceRangeToggle = (val: string) => {
    onUpdateFilters({ priceRange: filters.priceRange === val ? null : val });
  };

  const handleBrandToggle = (val: string) => {
    onUpdateFilters({ brand: filters.brand === val ? null : val });
  };

  const handleExclusiveToggle = (val: string) => {
    onUpdateFilters({ exclusiveBrand: filters.exclusiveBrand === val ? null : val });
  };

  const handleCategoryToggle = (val: string) => {
    onUpdateFilters({ category: filters.category === val ? null : val });
  };

  const handleFormToggle = (val: string) => {
    onUpdateFilters({ dosageForm: filters.dosageForm === val ? null : val });
  };

  const handleDosageToggle = (val: string) => {
    onUpdateFilters({ dosage: filters.dosage === val ? null : val });
  };

  const handleRouteToggle = (val: string) => {
    onUpdateFilters({ route: filters.route === val ? null : val });
  };

  const handleFlavorToggle = (val: string) => {
    onUpdateFilters({ flavor: filters.flavor === val ? null : val });
  };

  const handleKitToggle = (val: string) => {
    onUpdateFilters({ isKit: filters.isKit === val ? null : val });
  };

  return (
    <div className="filter-drawer-overlay" onClick={onClose}>
      <aside
        className="filter-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-drawer-title"
      >
        {/* Mobile handle indicator */}
        <div className="filter-drawer__handle" />

        {/* Header */}
        <header className="filter-drawer__header">
          <h2 id="filter-drawer-title" className="filter-drawer__title">Filtros</h2>
          <button
            type="button"
            className="filter-drawer__close-btn"
            onClick={onClose}
            aria-label="Fechar filtros"
          >
            <X size={22} />
          </button>
        </header>

        {/* Scrollable Accordions Body */}
        <div className="filter-drawer__body">
          {/* 1. Vendido por */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('vendidoPor')}
            >
              <span>Vendido por</span>
              {openSections.vendidoPor ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.vendidoPor && (
              <div className="filter-drawer__accordion-content">
                <button
                  type="button"
                  className={`filter-drawer__pill ${filters.seller === 'Raia' ? 'filter-drawer__pill--active' : ''}`}
                  onClick={() => handleSellerToggle('Raia')}
                >
                  Raia
                </button>
              </div>
            )}
          </section>

          {/* 2. Destaques */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('destaques')}
            >
              <span>Destaques</span>
              {openSections.destaques ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.destaques && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                <button
                  type="button"
                  className={`filter-drawer__pill ${filters.highlight === 'Cupom NEO15' ? 'filter-drawer__pill--active' : ''}`}
                  onClick={() => handleHighlightToggle('Cupom NEO15')}
                >
                  Cupom NEO15
                </button>
                <button
                  type="button"
                  className={`filter-drawer__pill ${filters.highlight === 'Black do Dia' ? 'filter-drawer__pill--active' : ''}`}
                  onClick={() => handleHighlightToggle('Black do Dia')}
                >
                  Black do Dia
                </button>
              </div>
            )}
          </section>

          {/* 3. Ordenar por */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('ordenarPor')}
            >
              <span>Ordenar por</span>
              {openSections.ordenarPor ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.ordenarPor && (
              <div className="filter-drawer__accordion-content filter-drawer__radio-group">
                <label className="filter-drawer__radio-label" onClick={() => handleSortChange('relevance')}>
                  <span className={`filter-drawer__radio-circle ${filters.sortBy === 'relevance' ? 'filter-drawer__radio-circle--active' : ''}`}>
                    {filters.sortBy === 'relevance' && <span className="filter-drawer__radio-dot" />}
                  </span>
                  <span className="filter-drawer__radio-text">Relevância</span>
                </label>

                <label className="filter-drawer__radio-label" onClick={() => handleSortChange('price-asc')}>
                  <span className={`filter-drawer__radio-circle ${filters.sortBy === 'price-asc' ? 'filter-drawer__radio-circle--active' : ''}`}>
                    {filters.sortBy === 'price-asc' && <span className="filter-drawer__radio-dot" />}
                  </span>
                  <span className="filter-drawer__radio-text">Menor preço</span>
                </label>

                <label className="filter-drawer__radio-label" onClick={() => handleSortChange('price-desc')}>
                  <span className={`filter-drawer__radio-circle ${filters.sortBy === 'price-desc' ? 'filter-drawer__radio-circle--active' : ''}`}>
                    {filters.sortBy === 'price-desc' && <span className="filter-drawer__radio-dot" />}
                  </span>
                  <span className="filter-drawer__radio-text">Maior preço</span>
                </label>
              </div>
            )}
          </section>

          {/* 4. Preço */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('preco')}
            >
              <span>Preço</span>
              {openSections.preco ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.preco && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Até R$ 20', 'R$ 20 a R$ 50', 'R$ 50 a R$ 100', 'Acima de R$ 100'].map(p => (
                  <button
                    key={p}
                    type="button"
                    className={`filter-drawer__pill ${filters.priceRange === p ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handlePriceRangeToggle(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 5. Marca */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('marca')}
            >
              <span>Marca</span>
              {openSections.marca ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.marca && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {availableBrands.map(b => (
                  <button
                    key={b}
                    type="button"
                    className={`filter-drawer__pill ${filters.brand === b ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleBrandToggle(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 6. Marcas Exclusivas */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('marcasExclusivas')}
            >
              <span>Marcas Exclusivas</span>
              {openSections.marcasExclusivas ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.marcasExclusivas && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Needs', 'bwell', 'Nutriex'].map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`filter-drawer__pill ${filters.exclusiveBrand === m ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleExclusiveToggle(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 7. Categoria */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('categoria')}
            >
              <span>Categoria</span>
              {openSections.categoria ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.categoria && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {availableCategories.map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`filter-drawer__pill ${filters.category === c ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleCategoryToggle(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 8. Fabricante */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('fabricante')}
            >
              <span>Fabricante</span>
              {openSections.fabricante ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.fabricante && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Prati Donaduzzi', 'Cimed', 'EMS', 'Eurofarma', 'Sanofi', 'L\'Oréal', 'Procter & Gamble'].map(fab => (
                  <button
                    key={fab}
                    type="button"
                    className={`filter-drawer__pill ${filters.manufacturer === fab ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => onUpdateFilters({ manufacturer: filters.manufacturer === fab ? null : fab })}
                  >
                    {fab}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 9. Quantidade */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('quantidade')}
            >
              <span>Quantidade</span>
              {openSections.quantidade ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.quantidade && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['10 comprimidos', '20 comprimidos', '30 comprimidos', '36 comprimidos', '60 comprimidos', '70un', '80un'].map(q => (
                  <button
                    key={q}
                    type="button"
                    className={`filter-drawer__pill ${filters.quantity === q ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => onUpdateFilters({ quantity: filters.quantity === q ? null : q })}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 10. Forma farmacêutica */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('formaFarmaceutica')}
            >
              <span>Forma farmacêutica</span>
              {openSections.formaFarmaceutica ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.formaFarmaceutica && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Comprimido', 'Drágea', 'Cápsula', 'Gel', 'Creme', 'Gotas', 'Flaconete'].map(form => (
                  <button
                    key={form}
                    type="button"
                    className={`filter-drawer__pill ${filters.dosageForm === form ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleFormToggle(form)}
                  >
                    {form}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 11. Dosagem */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('dosagem')}
            >
              <span>Dosagem</span>
              {openSections.dosagem ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.dosagem && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['500mg', '1g', '750mg', '100mg', '125mg', '20mg'].map(d => (
                  <button
                    key={d}
                    type="button"
                    className={`filter-drawer__pill ${filters.dosage === d ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleDosageToggle(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 12. Via de administração */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('viaAdministracao')}
            >
              <span>Via de administração</span>
              {openSections.viaAdministracao ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.viaAdministracao && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Oral', 'Tópica', 'Oftálmica', 'Nasal'].map(r => (
                  <button
                    key={r}
                    type="button"
                    className={`filter-drawer__pill ${filters.route === r ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleRouteToggle(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 13. Sabor */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('sabor')}
            >
              <span>Sabor</span>
              {openSections.sabor ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.sabor && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Sem sabor', 'Menta', 'Abacaxi', 'Baunilha'].map(s => (
                  <button
                    key={s}
                    type="button"
                    className={`filter-drawer__pill ${filters.flavor === s ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleFlavorToggle(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* 14. Kit */}
          <section className="filter-drawer__section">
            <button
              type="button"
              className="filter-drawer__accordion-header"
              onClick={() => toggleSection('kit')}
            >
              <span>Kit</span>
              {openSections.kit ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openSections.kit && (
              <div className="filter-drawer__accordion-content filter-drawer__pills-group">
                {['Sim', 'Não'].map(k => (
                  <button
                    key={k}
                    type="button"
                    className={`filter-drawer__pill ${filters.isKit === k ? 'filter-drawer__pill--active' : ''}`}
                    onClick={() => handleKitToggle(k)}
                  >
                    {k}
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Sticky Footer matching image 2, 3, 4 */}
        <footer className="filter-drawer__footer">
          <div className="filter-drawer__count-text">
            <strong>{totalFound}</strong> resultados encontrados
          </div>

          <div className="filter-drawer__footer-actions">
            <button
              type="button"
              className="filter-drawer__btn-clear"
              onClick={onClearFilters}
            >
              Limpar filtros
            </button>

            <button
              type="button"
              className="filter-drawer__btn-apply"
              onClick={() => {
                onApply();
                onClose();
              }}
            >
              Aplicar
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default FilterDrawer;
