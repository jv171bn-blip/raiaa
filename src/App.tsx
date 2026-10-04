import React, { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import TopBar from './components/TopBar/TopBar';
import MobileAppBanner from './components/MobileAppBanner/MobileAppBanner';
import Header from './components/Header/Header';
import MobileCepBar from './components/MobileCepBar/MobileCepBar';
import CategoryNavigation from './components/CategoryNavigation/CategoryNavigation';
import OrderTrackingCard from './components/OrderTrackingCard/OrderTrackingCard';
import ShortcutMenu from './components/ShortcutMenu/ShortcutMenu';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import ProductCarousel from './components/ProductCarousel/ProductCarousel';
import ProductCard from './components/ProductCard/ProductCard';
import EditorialCarousel from './components/EditorialCarousel/EditorialCarousel';
import MontaQueDesconta from './components/MontaQueDesconta/MontaQueDesconta';
import DiscountBlocks from './components/DiscountBlocks/DiscountBlocks';
import HealthSpaceCarousel from './components/HealthSpaceCarousel/HealthSpaceCarousel';
import TrendingSearches from './components/TrendingSearches/TrendingSearches';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Toast from './components/Toast/Toast';
import Modals from './components/Modals/Modals';
import CookieBanner from './components/CookieBanner/CookieBanner';
import ProductPage from './components/ProductPage/ProductPage';
import FlashOfferBanner from './components/FlashOfferBanner/FlashOfferBanner';
import OffersPage from './components/OffersPage/OffersPage';
import MontaQueDescontaPage from './components/MontaQueDescontaPage/MontaQueDescontaPage';
import { suggestionProducts } from './components/SuggestionsCarousel/SuggestionsCarousel';
import SearchResultsPage from './components/SearchResultsPage/SearchResultsPage';
import CheckoutFlow, { AddedToCartModal } from './components/CheckoutFlow/CheckoutFlow';

import {
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
  healthSpace,
  Product,
  viterganZincoProduct,
  flexoneProduct,
  quemComprouTambem,
  similaresVocePode,
  hairCareProducts,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  getPersonalizedRecommendations,
  deduplicateProducts,
} from './data/products';
import { montaProducts } from './data/montaOffers';
import { todosProdutosExpandidos } from './data/catalogExpanded';
import { generateHomepageRotatingData, HomepageRotatingData, isAllowedOnHomepage } from './data/trendingProducts';

import { X } from 'lucide-react';
import './App.css';


const allProducts: Product[] = deduplicateProducts([
  ...mostBought,
  ...blackDayProducts,
  ...weekHighlights,
  ...favoriteBrands,
  ...fraldasProducts,
  ...remediosProducts,
  ...dermocosmeticosProducts,
  ...vitaminasSuplementosProducts,
  ...higieneBucalPersonalProducts,
  ...asianBeauty,
  ...montaProducts,
  ...quemComprouTambem,
  ...similaresVocePode,
  ...hairCareProducts,
  ...suggestionProducts,
  ...todosProdutosExpandidos,
  viterganZincoProduct,
  flexoneProduct,
]);

const editorialCards = [
  {
    id: 1,
    title: 'Produtos Asiáticos',
    image: '/editorial/produtos_asiaticos.webp',
  },
  {
    id: 2,
    title: 'Cuidados com a Pele',
    image: '/editorial/cuidados_pele.webp',
  },
  {
    id: 3,
    title: 'Cuidados no Inverno',
    image: '/editorial/cuidados_inverno.webp',
  },
  {
    id: 4,
    title: 'Perfumes',
    image: '/editorial/perfumes.webp',
  },
  {
    id: 5,
    title: 'Cabelos',
    image: '/editorial/cuidados_cabelos.webp',
  },
  {
    id: 6,
    title: 'Unhas & Manicure',
    image: '/editorial/produtos_unhas.webp',
  },
];

const MainContent: React.FC = () => {
  const { viewedProducts, userAddress, setActiveModal, showToast } = useCart();

  // Curated authentic Droga Raia homepage sections data
  const [rotatingData] = useState<HomepageRotatingData>(() =>
    generateHomepageRotatingData(allProducts, asianBeauty)
  );

  const personalizedBrands = useMemo(() => {
    const recs = getPersonalizedRecommendations(viewedProducts, allProducts, rotatingData.marcasFavoritas);
    return recs.filter(isAllowedOnHomepage);
  }, [viewedProducts, rotatingData.marcasFavoritas]);

  return (
    <main className="main">
      <div className="container">
        {/* Acompanhe seus pedidos card */}
        <OrderTrackingCard />

        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Oferta Relâmpago */}
        <FlashOfferBanner />

        {/* Shortcuts (Pills) */}
        <ShortcutMenu />


        {/* Mais Comprados */}
        <ProductCarousel
          key="mais-comprados"
          id="section-mais-comprados"
          title="Mais comprados"
          products={rotatingData.maisComprados}
        />

        {/* Black do Dia Com até 70% */}
        <ProductCarousel
          key="black-do-dia"
          id="section-black-do-dia"
          title="Black do Dia Com até 70%"
          products={rotatingData.blackDoDia}
        />

        {/* Destaques da semana */}
        <ProductCarousel
          key="destaque-semana"
          id="section-destaque-semana"
          title="Destaques da semana"
          products={rotatingData.destaquesSemana}
        />

        {/* Monta que desconta */}
        <MontaQueDesconta />

        {/* Cuidados que você merece */}
        <EditorialCarousel
          id="section-cuidados"
          title="Cuidados que você merece"
          cards={editorialCards}
        />

        {/* Mais das suas marcas favoritas */}
        <ProductCarousel
          key="marcas-favoritas"
          id="section-marcas-favoritas"
          title="Mais das suas marcas favoritas"
          products={personalizedBrands}
        />

        {/* Desconto laboratório + Cupons */}
        <DiscountBlocks />

        {/* Espaço Mais Saúde */}
        <HealthSpaceCarousel cards={healthSpace} />

        {/* Beleza Asiática */}
        <ProductCarousel
          key="beleza-asiatica"
          id="section-beleza-asiatica"
          title="Beleza Asiática"
          products={rotatingData.belezaAsiatica}
        />

        {/* Buscas em alta */}
        <TrendingSearches />
      </div>
    </main>
  );
};

const PageContent: React.FC = () => {
  const {
    selectedProduct,
    isOffersPage,
    isMontaPage,
    isSearchPage,
    isCartPage,
    searchQuery,
    activeModal,
    setActiveModal,
    openCart,
  } = useCart();

  const isCartActive = isCartPage || activeModal === 'checkout';

  // Se o carrinho estiver ativo, renderiza exclusivamente a página do carrinho
  // eliminando qualquer conteúdo de fundo para que o usuário role apenas o carrinho
  if (isCartActive) {
    return (
      <div className="page checkout-page-layout">
        <CheckoutFlow />
        <Modals />
      </div>
    );
  }

  const showSearchPage = isSearchPage || Boolean(searchQuery && searchQuery.trim());

  return (
    <div className="page">
      {/* Sticky Header Group */}
      <div className="sticky-header" id="sticky-header">
        {/* Top Bar */}
        <TopBar />

        {/* Mobile App Banner */}
        <MobileAppBanner />

        {/* Header */}
        <Header />
      </div>

      {/* Mobile CEP Bar (scrolls naturally with page content so OrderTrackingCard never goes behind it) */}
      <MobileCepBar />

      {/* Category Navigation */}
      <CategoryNavigation />

      {/* Main Content (Homepage, Product Detail Page, Offers Page, Monta que Desconta Page, or Search Results Page) */}
      {selectedProduct ? (
        <ProductPage product={selectedProduct} allProducts={allProducts} />
      ) : isOffersPage ? (
        <OffersPage />
      ) : isMontaPage ? (
        <MontaQueDescontaPage />
      ) : showSearchPage ? (
        <SearchResultsPage allProducts={allProducts} />
      ) : (
        <MainContent />
      )}

      {/* Footer em todas as páginas */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer />

      {/* Added to Cart mini modal */}
      {activeModal === 'added-to-cart' && (
        <AddedToCartModal
          onClose={() => setActiveModal(null)}
          onGoToCart={() => {
            setActiveModal(null);
            openCart();
          }}
          onContinue={() => setActiveModal(null)}
        />
      )}

      {/* Toast Notifications */}
      <Toast />

      {/* Global Modals Manager (CEP, Login, Orders, Prescriptions, Coupons, PBM, QuickView, Checkout) */}
      <Modals />

      {/* Official Droga Raia Cookies Consent Banner */}
      <CookieBanner />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <PageContent />
    </CartProvider>
  );
}

export default App;
