import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Product,
  flexoneProduct,
  mostBought,
  blackDayProducts,
  weekHighlights,
  favoriteBrands,
  asianBeauty,
  fraldasProducts,
  remediosProducts,
  dermocosmeticosProducts,
  vitaminasSuplementosProducts,
  higieneBucalPersonalProducts,
  hairCareProducts,
  quemComprouTambem,
  similaresVocePode,
  todosProdutosExpandidos,
} from '../data/products';
import { ultraBrasilProducts } from '../data/ultraBrasilProducts';
import { montaProducts } from '../data/montaOffers';
import { UserAddress } from '../services/pharmacyLocationService';

export interface AddressDisplay {
  street: string;
  cep: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  cpf?: string;
}

export type ActiveModalType =
  | 'login'
  | 'cep'
  | 'prescription'
  | 'orders'
  | 'coupons'
  | 'pbm'
  | 'quickview'
  | 'checkout-success'
  | 'checkout'
  | 'added-to-cart'
  | null;

interface CartContextType {
  items: CartItem[];
  total: number;
  subtotal: number;
  couponDiscount: number;
  appliedCoupon: string | null;
  montaDiscount: number;
  shipping: number;
  finalTotal: number;
  totalItemsCount: number;
  lastAddedProduct: Product | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  // Cart Drawer
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;

  // Toast
  toast: { show: boolean; message: string; product?: Product } | null;
  showToast: (message: string, product?: Product) => void;
  hideToast: () => void;

  // User State
  user: UserProfile | null;
  loginUser: (name: string, email: string, cpf?: string) => void;
  logoutUser: () => void;

  // CEP Address State
  cepAddress: string | null;
  setCepAddress: (address: string | null) => void;

  // Registered User Address
  userAddress: UserAddress | null;
  setUserAddress: (address: UserAddress | null) => void;

  // Formatted Address Display (Street with CEP beside it, e.g. RUA MANOEL PEREIRA 02324-210)
  addressDisplay: AddressDisplay | null;

  // Modals
  activeModal: ActiveModalType;
  setActiveModal: (modal: ActiveModalType) => void;
  closeModal: () => void;

  // Quick View Product
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Dedicated Product Page (PDP) Navigation
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  goToProductPage: (product: Product) => void;
  goToHome: () => void;

  // Offers Page Navigation
  isOffersPage: boolean;
  setIsOffersPage: (isOffers: boolean) => void;
  goToOffersPage: () => void;

  // All Products Page Navigation
  isAllProductsPage: boolean;
  setIsAllProductsPage: (isAll: boolean) => void;
  goToAllProductsPage: () => void;

  // Search Results Page Navigation
  isSearchPage: boolean;
  setIsSearchPage: (isSearch: boolean) => void;
  goToSearchPage: (query: string) => void;

  // Dedicated Cart Page Navigation
  isCartPage: boolean;
  setIsCartPage: (isCart: boolean) => void;
  goToCartPage: () => void;

  // Monta que Desconta Navigation
  isMontaPage: boolean;
  setIsMontaPage: (isMonta: boolean) => void;
  selectedMontaBrand: string | null;
  setSelectedMontaBrand: (brand: string | null) => void;
  goToMontaPage: (brandId?: string) => void;

  // Search Query & Category Filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;

  // View History (for personalised recommendations)
  viewedProducts: number[]; // array of product IDs, most recent first
  addViewedProduct: (productId: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

const VALID_COUPONS: Record<string, { percent?: number; fixed?: number; min?: number }> = {
  RAIA10: { percent: 0.10 },
  PRIMEIRACOMPRA: { fixed: 15, min: 50 },
  BEMVINDO: { percent: 0.15 },
  BLACK20: { percent: 0.20 },
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved cart from localStorage if available
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [toast, setToast] = useState<{ show: boolean; message: string; product?: Product } | null>(null);
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [cepAddress, setCepAddress] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_cep');
      return saved || null;
    } catch {
      return null;
    }
  });

  const [userAddress, setUserAddressState] = useState<UserAddress | null>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_user_address');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && (parsed.street || parsed.endereco || parsed.cep)) {
          return {
            cep: parsed.cep || '',
            street: parsed.street || parsed.endereco || '',
            number: parsed.number || parsed.numero || '',
            complement: parsed.complement || parsed.complemento || '',
            neighborhood: parsed.neighborhood || parsed.bairro || '',
            city: parsed.city || parsed.cidade || 'São Paulo',
            state: parsed.state || parsed.uf || 'SP',
            country: parsed.country || 'Brasil',
            name: parsed.name || parsed.nomeEndereco || parsed.nomeCompleto || 'casa',
            phone: parsed.phone || parsed.telefone || '',
          };
        }
      }
      return null;
    } catch {
      return null;
    }
  });

  const addressDisplay = useMemo((): AddressDisplay | null => {
    if (userAddress && (userAddress.street || userAddress.cep)) {
      const street = (userAddress.street || '').trim().toUpperCase();
      const rawCep = userAddress.cep || cepAddress || '';
      const digits = rawCep.replace(/\D/g, '');
      const cep = digits.length === 8 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : rawCep;
      if (!street && !cep) return null;
      return { street: street || 'ENDEREÇO', cep };
    }

    if (cepAddress && cepAddress.trim()) {
      const trimmed = cepAddress.trim();
      const digits = trimmed.replace(/\D/g, '');
      const cepMatch = trimmed.match(/\b\d{5}-?\d{3}\b/);
      const cep = cepMatch 
        ? cepMatch[0] 
        : digits.length === 8 
          ? `${digits.slice(0, 5)}-${digits.slice(5)}` 
          : trimmed;

      let street = '';
      if (trimmed.includes(',')) {
        street = trimmed.split(',')[0].trim().toUpperCase();
      } else if (trimmed.includes('-') && !trimmed.match(/^\d{5}-\d{3}$/)) {
        street = trimmed.split('-')[0].trim().toUpperCase();
      }

      if (!street && !cep) return null;
      return { street, cep };
    }

    return null;
  }, [userAddress, cepAddress]);

  const setUserAddress = (addr: UserAddress | null) => {
    if (!addr) return;
    setUserAddressState(addr);
    try {
      const fullAddr = {
        ...addr,
        street: addr.street || (addr as any).endereco || '',
        endereco: addr.street || (addr as any).endereco || '',
        number: addr.number || (addr as any).numero || '',
        numero: addr.number || (addr as any).numero || '',
        complement: addr.complement || (addr as any).complemento || '',
        complemento: addr.complement || (addr as any).complemento || '',
        neighborhood: addr.neighborhood || (addr as any).bairro || '',
        bairro: addr.neighborhood || (addr as any).bairro || '',
        city: addr.city || (addr as any).cidade || 'São Paulo',
        cidade: addr.city || (addr as any).cidade || 'São Paulo',
        state: addr.state || (addr as any).uf || 'SP',
        uf: addr.state || (addr as any).uf || 'SP',
        phone: addr.phone || (addr as any).telefone || '',
        telefone: addr.phone || (addr as any).telefone || '',
        name: addr.name || (addr as any).nomeEndereco || 'casa',
        nomeEndereco: addr.name || (addr as any).nomeEndereco || 'casa',
      };
      localStorage.setItem('drogaraia_user_address', JSON.stringify(fullAddr));
      if (fullAddr.name) {
        localStorage.setItem('drogaraia_address_name', fullAddr.name);
      }
      if (fullAddr.cep) {
        localStorage.setItem('drogaraia_cep', fullAddr.cep);
        setCepAddress(fullAddr.cep);
      }
    } catch {
      // Ignore storage errors
    }
  };
  const [activeModal, setActiveModal] = useState<ActiveModalType>(null);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOffersPage, setIsOffersPage] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.location.hash === '#ofertas';
  });
  const [isAllProductsPage, setIsAllProductsPage] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.location.hash === '#todos-os-produtos';
  });
  const [isMontaPage, setIsMontaPage] = useState<boolean>(() => {
    return typeof window !== 'undefined' && (window.location.hash.startsWith('#monta-que-desconta'));
  });
  const [selectedMontaBrand, setSelectedMontaBrand] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#monta-que-desconta-')) {
      return window.location.hash.replace('#monta-que-desconta-', '');
    }
    return null;
  });
  const [isSearchPage, setIsSearchPage] = useState<boolean>(() => {
    return typeof window !== 'undefined' && (window.location.hash.startsWith('#busca='));
  });
  const [isCartPage, setIsCartPage] = useState<boolean>(() => {
    return typeof window !== 'undefined' && (window.location.hash === '#carrinho' || window.location.hash === '#cesta');
  });
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#busca=')) {
      return decodeURIComponent(window.location.hash.replace('#busca=', ''));
    }
    return '';
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // View history – persisted in localStorage, most recent first, max 30 entries
  const [viewedProducts, setViewedProducts] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('drogaraia_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addViewedProduct = (productId: number) => {
    setViewedProducts(prev => {
      const filtered = prev.filter(id => id !== productId); // remove duplicate
      const updated = [productId, ...filtered].slice(0, 30);  // prepend, max 30
      try { localStorage.setItem('drogaraia_viewed', JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  // Automatically register product in viewed history when active
  useEffect(() => {
    if (selectedProduct?.id) {
      addViewedProduct(selectedProduct.id);
    }
  }, [selectedProduct?.id]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('drogaraia_cart', JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart', e);
    }
  }, [items]);

  // Sync user
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('drogaraia_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('drogaraia_user');
      }
    } catch (e) {
      console.warn('Could not save user', e);
    }
  }, [user]);

  // Sync CEP
  useEffect(() => {
    try {
      if (cepAddress) {
        localStorage.setItem('drogaraia_cep', cepAddress);
      } else {
        localStorage.removeItem('drogaraia_cep');
      }
    } catch (e) {
      console.warn('Could not save cep', e);
    }
  }, [cepAddress]);

  const showToast = (message: string, product?: Product) => {
    setToast({ show: true, message, product });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Toast auto-hide
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });

    // Show the "Added to cart" mini modal (Raia style)
    setLastAddedProduct(product);
    setActiveModal('added-to-cart');
  };

  const removeFromCart = (id: number) => {
    setItems(prev => prev.filter(i => i.product.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev => {
      return prev
        .map(i => {
          if (i.product.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const cleanCode = code.trim().toUpperCase();
    if (!VALID_COUPONS[cleanCode]) {
      return { success: false, message: 'Cupom inválido ou expirado.' };
    }
    const coupon = VALID_COUPONS[cleanCode];
    if (coupon.min && subtotal < coupon.min) {
      return {
        success: false,
        message: `Este cupom é válido apenas para compras acima de R$ ${coupon.min.toFixed(2).replace('.', ',')}`,
      };
    }
    setAppliedCoupon(cleanCode);
    return { success: true, message: `Cupom ${cleanCode} aplicado com sucesso!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Calculations
  const subtotal = items.reduce((sum, i) => {
    const bulkPrice = i.product.price * 0.875;
    const unitPrice = i.quantity >= 3 ? bulkPrice : i.product.price;
    return sum + unitPrice * i.quantity;
  }, 0);
  const totalItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  let couponDiscount = 0;
  if (appliedCoupon && VALID_COUPONS[appliedCoupon]) {
    const c = VALID_COUPONS[appliedCoupon];
    if (c.percent) {
      couponDiscount = subtotal * c.percent;
    } else if (c.fixed) {
      couponDiscount = Math.min(c.fixed, subtotal);
    }
  }

  // Monta que Desconta Combo Discount Logic:
  // Principia: 2+ items => 20% OFF on Principia items
  // Cetaphil: 2+ items => 20% OFF on Cetaphil items
  // Puravida: 3+ items => 30% OFF on Puravida items
  let montaDiscount = 0;

  const principiaItems = items.filter(i => (i.product.brand || '').toLowerCase().includes('principia'));
  const principiaCount = principiaItems.reduce((acc, i) => acc + i.quantity, 0);
  if (principiaCount >= 2) {
    const principiaSubtotal = principiaItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
    montaDiscount += principiaSubtotal * 0.20;
  }

  const cetaphilItems = items.filter(i => (i.product.brand || '').toLowerCase().includes('cetaphil'));
  const cetaphilCount = cetaphilItems.reduce((acc, i) => acc + i.quantity, 0);
  if (cetaphilCount >= 2) {
    const cetaphilSubtotal = cetaphilItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
    montaDiscount += cetaphilSubtotal * 0.20;
  }

  const puravidaItems = items.filter(i => (i.product.brand || '').toLowerCase().includes('puravida'));
  const puravidaCount = puravidaItems.reduce((acc, i) => acc + i.quantity, 0);
  if (puravidaCount >= 3) {
    const puravidaSubtotal = puravidaItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
    montaDiscount += puravidaSubtotal * 0.30;
  }

  // Shipping logic: free above R$ 149.90, otherwise R$ 9.90
  const isFreeShipping = subtotal >= 149.90 || items.length === 0;
  const shipping = items.length === 0 ? 0 : isFreeShipping ? 0 : 9.90;

  const finalTotal = Math.max(0, subtotal - couponDiscount - montaDiscount + shipping);
  const total = finalTotal;

  const goToCartPage = () => {
    setIsCartOpen(false);
    setIsCartPage(true);
    setActiveModal(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try {
      window.history.pushState({ page: 'cart' }, '', '#carrinho');
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const openCart = () => {
    setIsCartOpen(false);
    setIsCartPage(true);
    setActiveModal(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try {
      window.history.pushState({ page: 'cart' }, '', '#carrinho');
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setIsCartPage(false);
    if (activeModal === 'checkout') {
      setActiveModal(null);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    try {
      window.history.pushState({}, '', window.location.pathname);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };


  const loginUser = (name: string, email: string, cpf?: string) => {
    setUser({ name, email, cpf });
    setActiveModal(null);
    showToast(`Bem-vindo(a), ${name}!`);
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Você saiu da sua conta.');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setActiveModal('quickview');
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setActiveModal(null);
  };

  const goToProductPage = (product: Product) => {
    setIsOffersPage(false);
    setIsAllProductsPage(false);
    setIsMontaPage(false);
    setIsSearchPage(false);
    setIsCartPage(false);
    setActiveModal(null);
    setSelectedProduct(product);
    addViewedProduct(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({ productId: product.id }, '', `#produto-${product.id}`);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const goToOffersPage = () => {
    setSelectedProduct(null);
    setIsAllProductsPage(false);
    setIsMontaPage(false);
    setIsSearchPage(false);
    setIsOffersPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({ page: 'ofertas' }, '', '#ofertas');
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const goToAllProductsPage = () => {
    setSelectedProduct(null);
    setIsOffersPage(false);
    setIsMontaPage(false);
    setIsSearchPage(false);
    setIsCartPage(false);
    setIsAllProductsPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({ page: 'todos-os-produtos' }, '', '#todos-os-produtos');
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const goToMontaPage = (brandId?: string) => {
    setSelectedProduct(null);
    setIsOffersPage(false);
    setIsAllProductsPage(false);
    setIsSearchPage(false);
    setIsMontaPage(true);
    setSelectedMontaBrand(brandId || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const hash = brandId ? `#monta-que-desconta-${brandId}` : '#monta-que-desconta';
      window.history.pushState({ page: 'monta', brandId }, '', hash);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const goToSearchPage = (query: string) => {
    setSelectedProduct(null);
    setIsOffersPage(false);
    setIsAllProductsPage(false);
    setIsMontaPage(false);
    setIsSearchPage(true);
    setSearchQuery(query);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({ page: 'search', query }, '', `#busca=${encodeURIComponent(query)}`);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  const goToHome = () => {
    setSelectedProduct(null);
    setIsOffersPage(false);
    setIsAllProductsPage(false);
    setIsMontaPage(false);
    setIsSearchPage(false);
    setIsCartPage(false);
    setSearchQuery('');
    setSelectedMontaBrand(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState({}, '', window.location.pathname);
    } catch (e) {
      console.warn('History pushState error', e);
    }
  };

  // Support browser Back/Forward navigation & direct hash navigation
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#carrinho' || hash === '#cesta') {
        setSelectedProduct(null);
        setIsOffersPage(false);
        setIsAllProductsPage(false);
        setIsMontaPage(false);
        setIsSearchPage(false);
        setIsCartPage(true);
        return;
      }
      if (hash === '#ofertas') {
        setSelectedProduct(null);
        setIsAllProductsPage(false);
        setIsMontaPage(false);
        setIsCartPage(false);
        setIsOffersPage(true);
        return;
      }
      if (hash === '#todos-os-produtos') {
        setSelectedProduct(null);
        setIsOffersPage(false);
        setIsMontaPage(false);
        setIsCartPage(false);
        setIsSearchPage(false);
        setIsAllProductsPage(true);
        return;
      }
      if (hash === '#monta-que-desconta' || hash.startsWith('#monta-que-desconta')) {
        setSelectedProduct(null);
        setIsOffersPage(false);
        setIsAllProductsPage(false);
        setIsMontaPage(true);
        if (hash.startsWith('#monta-que-desconta-')) {
          setSelectedMontaBrand(hash.replace('#monta-que-desconta-', ''));
        }
        return;
      }
      const searchParams = new URLSearchParams(window.location.search);
      const queryProdId = searchParams.get('produto') || searchParams.get('id');
      const isProductHash = hash && hash.startsWith('#produto-');
      const targetId = queryProdId ? Number(queryProdId) : (isProductHash ? Number(hash.replace('#produto-', '')) : null);

      if (targetId) {
        const all = [
          ...ultraBrasilProducts,
          flexoneProduct,
          ...mostBought,
          ...blackDayProducts,
          ...weekHighlights,
          ...favoriteBrands,
          ...asianBeauty,
          ...fraldasProducts,
          ...remediosProducts,
          ...dermocosmeticosProducts,
          ...vitaminasSuplementosProducts,
          ...higieneBucalPersonalProducts,
          ...hairCareProducts,
          ...quemComprouTambem,
          ...similaresVocePode,
          ...montaProducts,
          ...todosProdutosExpandidos,
        ];
        const found = all.find(p => p.id === targetId);
        if (found) {
          setSelectedProduct(found);
          setIsOffersPage(false);
          setIsAllProductsPage(false);
          setIsMontaPage(false);
          return;
        }
      }
      if (hash.startsWith('#busca=')) {
        setSelectedProduct(null);
        setIsOffersPage(false);
        setIsAllProductsPage(false);
        setIsMontaPage(false);
        setIsSearchPage(true);
        setSearchQuery(decodeURIComponent(hash.replace('#busca=', '')));
        return;
      }
      if (!hash || hash === '#') {
        setSelectedProduct(null);
        setIsOffersPage(false);
        setIsAllProductsPage(false);
        setIsMontaPage(false);
        setIsSearchPage(false);
        setSearchQuery('');
      }
    };

    checkHash();
    window.addEventListener('popstate', checkHash);
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('popstate', checkHash);
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        subtotal,
        couponDiscount,
        appliedCoupon,
        montaDiscount,
        shipping,
        finalTotal,
        totalItemsCount,
        lastAddedProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        toast,
        showToast,
        hideToast,
        user,
        loginUser,
        logoutUser,
        cepAddress,
        setCepAddress,
        userAddress,
        setUserAddress,
        addressDisplay,
        activeModal,
        setActiveModal,
        closeModal,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        selectedProduct,
        setSelectedProduct,
        goToProductPage,
        goToHome,
        isOffersPage,
        setIsOffersPage,
        goToOffersPage,
        isAllProductsPage,
        setIsAllProductsPage,
        goToAllProductsPage,
        isSearchPage,
        setIsSearchPage,
        goToSearchPage,
        isCartPage,
        setIsCartPage,
        goToCartPage,
        isMontaPage,
        setIsMontaPage,
        selectedMontaBrand,
        setSelectedMontaBrand,
        goToMontaPage,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        viewedProducts,
        addViewedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

