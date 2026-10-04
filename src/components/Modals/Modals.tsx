import React, { useState } from 'react';
import {
  X,
  MapPin,
  Search,
  CheckCircle2,
  Upload,
  FileText,
  Clock,
  Truck,
  ShieldCheck,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Copy,
  Check,
  Package,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { isCosmeticOrPersonalCare } from '../../data/products';
import { fetchAddressByCep } from '../../utils/cepService';
import { useScrollLock } from '../../utils/scrollLock';
import './Modals.css';

const Modals: React.FC = () => {
  const {
    activeModal,
    closeModal,
    setCepAddress,
    loginUser,
    user,
    logoutUser,
    quickViewProduct,
    addToCart,
    openCart,
    applyCoupon,
    showToast,
    clearCart,
    items,
    finalTotal,
    setUserAddress,
    userAddress,
  } = useCart();

  // CEP State
  const [cepInput, setCepInput] = useState('');
  const [cepLoading, setCepLoading] = useState(false);
  const [foundAddress, setFoundAddress] = useState<{
    logradouro?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    cep?: string;
  } | null>(null);
  const [cepError, setCepError] = useState('');

  // Login State
  const [loginTab, setLoginTab] = useState<'login' | 'register'>('login');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [cpfInput, setCpfInput] = useState('');

  // Prescription State
  const [prescriptionFile, setPrescriptionFile] = useState<string | null>(null);
  const [prescriptionSent, setPrescriptionSent] = useState(false);

  // QuickView Quantity
  const [quickQty, setQuickQty] = useState(1);

  // Copied coupon index
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const SUPPORTED_MODALS = [
    'login',
    'cep',
    'prescription',
    'orders',
    'coupons',
    'pbm',
    'quickview',
    'checkout-success',
  ];

  const isModalOpen = Boolean(activeModal && SUPPORTED_MODALS.includes(activeModal));
  useScrollLock(isModalOpen);

  if (!isModalOpen) return null;

  // Handler for CEP lookup
  const handleCepSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = cepInput.replace(/\D/g, '');
    if (cleanCep.length !== 8) {
      setCepError('Por favor, informe um CEP válido com 8 dígitos.');
      return;
    }
    setCepLoading(true);
    setCepError('');

    try {
      const data = await fetchAddressByCep(cleanCep);
      if (data) {
        setFoundAddress({
          logradouro: data.street,
          bairro: data.neighborhood,
          localidade: data.city,
          uf: data.uf,
          cep: data.cep,
        });
      } else {
        setFoundAddress(null);
        setCepError('CEP não encontrado. Por favor, confira o número digitado.');
      }
    } catch {
      setFoundAddress(null);
      setCepError('Não foi possível consultar o CEP no momento. Verifique sua conexão.');
    } finally {
      setCepLoading(false);
    }
  };

  const handleConfirmAddress = () => {
    if (foundAddress) {
      const street = foundAddress.logradouro || (foundAddress.bairro ? `Bairro ${foundAddress.bairro}` : 'Endereço');
      const cleanCep = foundAddress.cep || cepInput;
      setCepAddress(cleanCep);
      if (setUserAddress) {
        setUserAddress({
          cep: cleanCep,
          street: foundAddress.logradouro || '',
          number: '',
          neighborhood: foundAddress.bairro || '',
          city: foundAddress.localidade || 'São Paulo',
          state: foundAddress.uf || 'SP',
          country: 'Brasil',
        });
      }
      showToast(`Endereço atualizado: ${street.toUpperCase()} ${cleanCep}`);
      closeModal();
    }
  };

  // Quick Demo Login
  const handleDemoLogin = () => {
    loginUser('Carlos Eduardo Silva', 'carlos.silva@email.com', '123.456.789-00');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginTab === 'login') {
      const name = emailInput.split('@')[0] || 'Cliente Raia';
      loginUser(name, emailInput || 'cliente@raia.com.br');
    } else {
      loginUser(nameInput || 'Novo Cliente', emailInput, cpfInput);
    }
  };

  // Handle Prescription Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0].name);
      setTimeout(() => {
        setPrescriptionSent(true);
      }, 1000);
    }
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCoupon(code);
    applyCoupon(code);
    showToast(`Cupom ${code} copiado e aplicado!`);
    setTimeout(() => setCopiedCoupon(null), 3000);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-card"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close-btn" onClick={closeModal} aria-label="Fechar modal">
          <X size={20} />
        </button>

        {/* 1. CEP MODAL */}
        {activeModal === 'cep' && (
          <div className="modal-content modal-cep">
            <div className="modal-header-icon">
              <MapPin size={32} color="#007f91" />
            </div>
            <h2 className="modal-title">Onde você quer receber suas compras?</h2>
            <p className="modal-desc">
              Informe seu CEP para vermos os prazos de entrega e promoções exclusivas para sua região.
            </p>

            <form onSubmit={handleCepSearch} className="modal-form">
              <div className="modal-input-group">
                <input
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  value={cepInput}
                  onChange={e => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 8) {
                      setCepInput(val.length > 5 ? `${val.slice(0, 5)}-${val.slice(5)}` : val);
                    }
                  }}
                  className="modal-input"
                  autoFocus
                />
                <button type="submit" className="modal-submit-btn" disabled={cepLoading}>
                  {cepLoading ? 'Buscando...' : 'Buscar'}
                </button>
              </div>
            </form>

            {cepError && <span className="modal-error-msg">{cepError}</span>}

            {foundAddress && (
              <div className="cep-results">
                <div className="cep-address-card">
                  <CheckCircle2 size={20} color="#008a5b" />
                  <div className="cep-address-info">
                    <strong>{foundAddress.logradouro || 'Endereço encontrado'}</strong>
                    <span>
                      {foundAddress.bairro} • {foundAddress.localidade} - {foundAddress.uf}
                    </span>
                    <span className="cep-code">CEP: {foundAddress.cep}</span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-option">
                    <Clock size={16} color="#007f91" />
                    <div>
                      <strong>Entrega Expressa</strong>
                      <span>Tempo médio para entrega: de 3h a 5h</span>
                    </div>
                    <span className="delivery-price">R$ 7,90</span>
                  </div>

                  <div className="delivery-option">
                    <Truck size={16} color="#008a5b" />
                    <div>
                      <strong>Entrega Normal</strong>
                      <span>Grátis acima de R$ 50</span>
                    </div>
                    <span className="delivery-price delivery-price--free">Grátis</span>
                  </div>
                </div>

                <button
                  className="modal-primary-btn"
                  onClick={handleConfirmAddress}
                  id="confirm-cep-btn"
                >
                  Confirmar este endereço
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. LOGIN / REGISTER MODAL */}
        {activeModal === 'login' && (
          <div className="modal-content modal-login">
            {user ? (
              <div className="user-profile-view">
                <div className="modal-header-icon">
                  <ShieldCheck size={36} color="#008a5b" />
                </div>
                <h2 className="modal-title">Olá, {user.name}!</h2>
                <p className="modal-desc">{user.email}</p>
                {user.cpf && <span className="user-cpf">CPF: {user.cpf}</span>}

                <div className="user-profile-actions">
                  <button
                    className="modal-secondary-btn"
                    onClick={() => {
                      closeModal();
                      // open orders
                      setTimeout(() => {
                        useCart().setActiveModal('orders');
                      }, 100);
                    }}
                  >
                    Meus Pedidos
                  </button>
                  <button className="modal-danger-btn" onClick={logoutUser}>
                    Sair da conta
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="login-tabs">
                  <button
                    className={`login-tab ${loginTab === 'login' ? 'login-tab--active' : ''}`}
                    onClick={() => setLoginTab('login')}
                  >
                    Já sou cadastrado
                  </button>
                  <button
                    className={`login-tab ${loginTab === 'register' ? 'login-tab--active' : ''}`}
                    onClick={() => setLoginTab('register')}
                  >
                    Criar nova conta
                  </button>
                </div>

                <form onSubmit={handleLoginSubmit} className="modal-form">
                  {loginTab === 'register' && (
                    <>
                      <label className="modal-label">Nome Completo</label>
                      <input
                        type="text"
                        placeholder="Ex: Maria Oliveira"
                        value={nameInput}
                        onChange={e => setNameInput(e.target.value)}
                        className="modal-input-full"
                        required
                      />
                      <label className="modal-label">CPF</label>
                      <input
                        type="text"
                        placeholder="000.000.000-00"
                        value={cpfInput}
                        onChange={e => setCpfInput(e.target.value)}
                        className="modal-input-full"
                        required
                      />
                    </>
                  )}

                  <label className="modal-label">E-mail ou CPF</label>
                  <input
                    type="text"
                    placeholder="seuemail@exemplo.com"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    className="modal-input-full"
                    required
                  />

                  <label className="modal-label">Senha</label>
                  <input
                    type="password"
                    placeholder="Sua senha secreta"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    className="modal-input-full"
                    required
                  />

                  <button type="submit" className="modal-primary-btn" style={{ marginTop: '14px' }}>
                    {loginTab === 'login' ? 'Entrar' : 'Concluir cadastro'}
                  </button>
                </form>

                <div className="login-divider">
                  <span>ou para testar rápido</span>
                </div>

                <button
                  type="button"
                  className="modal-demo-btn"
                  onClick={handleDemoLogin}
                  id="demo-login-btn"
                >
                  <Sparkles size={16} />
                  <span>Acessar com Perfil de Demonstração</span>
                </button>
              </>
            )}
          </div>
        )}

        {/* 3. PRESCRIPTION MODAL */}
        {activeModal === 'prescription' && (
          <div className="modal-content modal-prescription">
            <div className="modal-header-icon">
              <FileText size={32} color="#007f91" />
            </div>
            <h2 className="modal-title">Compra rápida com receita</h2>
            <p className="modal-desc">
              Envie uma foto ou arquivo da sua receita médica (PDF, PNG ou JPG). Nossos farmacêuticos
              farão a conferência e separarão os medicamentos para você.
            </p>

            {prescriptionSent ? (
              <div className="prescription-success">
                <CheckCircle2 size={48} color="#008a5b" />
                <h3>Receita enviada com sucesso!</h3>
                <p>
                  Protocolo <strong>#RAIA-REC-{Math.floor(100000 + Math.random() * 900000)}</strong>
                </p>
                <span className="prescription-tip">
                  Um de nossos farmacêuticos entrará em contato via WhatsApp em até 15 minutos com o
                  link dos seus medicamentos separados!
                </span>
                <button className="modal-primary-btn" onClick={closeModal} style={{ marginTop: '16px' }}>
                  Entendido
                </button>
              </div>
            ) : (
              <div className="prescription-upload-area">
                <label className="prescription-dropzone" htmlFor="prescription-file-input">
                  <Upload size={36} color="#007f91" />
                  <span className="dropzone-title">Clique para selecionar sua receita</span>
                  <span className="dropzone-subtitle">Suporta fotos de celular, PDF ou imagens escaneadas</span>
                  <input
                    type="file"
                    id="prescription-file-input"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </label>

                {prescriptionFile && (
                  <div className="uploaded-file-row">
                    <FileText size={18} />
                    <span>{prescriptionFile}</span>
                    <span className="uploading-badge">Processando...</span>
                  </div>
                )}

                <div className="prescription-security-note">
                  <ShieldCheck size={16} color="#008a5b" />
                  <span>Seus dados de saúde são protegidos com sigilo médico pela Droga Raia</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. ORDERS MODAL */}
        {activeModal === 'orders' && (
          <div className="modal-content modal-orders">
            <div className="modal-header-icon">
              <Package size={32} color="#007f91" />
            </div>
            <h2 className="modal-title">Acompanhar Pedidos</h2>
            <p className="modal-desc">Veja o status em tempo real do seu pedido recente</p>

            <div className="order-card-demo">
              <div className="order-card-top">
                <div>
                  <span className="order-number">Pedido #RAIA-89241</span>
                  <span className="order-date">Hoje às 11:20</span>
                </div>
                <span className="order-status-badge">A caminho 🛵</span>
              </div>

              {/* Stepper */}
              <div className="order-stepper">
                <div className="step-item step-item--completed">
                  <div className="step-circle">✓</div>
                  <span className="step-text">Pedido recebido</span>
                </div>
                <div className="step-line step-line--completed" />
                <div className="step-item step-item--completed">
                  <div className="step-circle">✓</div>
                  <span className="step-text">Farmacêutico validou</span>
                </div>
                <div className="step-line step-line--completed" />
                <div className="step-item step-item--active">
                  <div className="step-circle">🛵</div>
                  <span className="step-text">Em rota de entrega</span>
                </div>
                <div className="step-line" />
                <div className="step-item">
                  <div className="step-circle">🏠</div>
                  <span className="step-text">Entregue</span>
                </div>
              </div>

              <div className="order-details-box">
                <span className="order-delivery-est">
                  Previsão de entrega: <strong>Hoje até as 13:00</strong>
                </span>
                <span className="order-address">
                  Entregar em: {userAddress && userAddress.street ? `${userAddress.street}${userAddress.number ? `, ${userAddress.number}` : ''} - ${userAddress.neighborhood || ''}, ${userAddress.city || 'São Paulo'} - ${userAddress.state || 'SP'}` : 'Endereço cadastrado no pedido'}
                </span>
              </div>

              <button className="modal-primary-btn" onClick={closeModal} style={{ marginTop: '16px' }}>
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* 5. COUPONS MODAL */}
        {activeModal === 'coupons' && (
          <div className="modal-content modal-coupons">
            <div className="modal-header-icon">
              <Sparkles size={32} color="#007f91" />
            </div>
            <h2 className="modal-title">Cupons de Desconto Ativos</h2>
            <p className="modal-desc">Clique no cupom para copiar e aplicar automaticamente na sua cesta!</p>

            <div className="coupons-grid">
              {[
                {
                  code: 'RAIA10',
                  discount: '10% OFF',
                  desc: 'Válido em todo o site sem valor mínimo',
                  tag: 'Mais Popular',
                },
                {
                  code: 'PRIMEIRACOMPRA',
                  discount: 'R$ 15 OFF',
                  desc: 'Para compras acima de R$ 50 no primeiro pedido',
                  tag: 'Novos Clientes',
                },
                {
                  code: 'BLACK20',
                  discount: '20% OFF',
                  desc: 'Em produtos selecionados de cuidados diários',
                  tag: 'Oferta Especial',
                },
                {
                  code: 'BEMVINDO',
                  discount: '15% OFF',
                  desc: 'Desconto de boas-vindas Raia',
                  tag: 'Imperdível',
                },
              ].map(coupon => (
                <div key={coupon.code} className="coupon-item-card">
                  <div className="coupon-left">
                    <span className="coupon-tag">{coupon.tag}</span>
                    <span className="coupon-value">{coupon.discount}</span>
                    <span className="coupon-desc">{coupon.desc}</span>
                  </div>
                  <button
                    className={`coupon-copy-btn ${copiedCoupon === coupon.code ? 'coupon-copy-btn--copied' : ''}`}
                    onClick={() => handleCopyCoupon(coupon.code)}
                  >
                    {copiedCoupon === coupon.code ? (
                      <>
                        <Check size={14} />
                        <span>Aplicado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{coupon.code}</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <button
              className="modal-primary-btn"
              onClick={() => {
                closeModal();
                openCart();
              }}
              style={{ marginTop: '16px' }}
            >
              Ver Minha Cesta
            </button>
          </div>
        )}

        {/* 6. PBM / UNIVERS MODAL */}
        {activeModal === 'pbm' && (
          <div className="modal-content modal-pbm">
            <div className="modal-header-icon">
              <ShieldCheck size={36} color="#007f91" />
            </div>
            <h2 className="modal-title">Descontos Univers & Convênios de Saúde</h2>
            <p className="modal-desc">
              A Droga Raia possui parceria com centenas de empresas e operadoras de saúde (SulAmérica,
              Bradesco Saúde, Amil, Unimed, etc.) para você economizar até 60% em medicamentos contínuos!
            </p>

            <div className="pbm-form-box">
              <label className="modal-label">Digite seu CPF para consultar descontos:</label>
              <div className="modal-input-group">
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="modal-input"
                  defaultValue="123.456.789-00"
                />
                <button
                  className="modal-submit-btn"
                  onClick={() => {
                    showToast('Convênio Ativado: Descontos de até 60% aplicados no seu carrinho!');
                    closeModal();
                  }}
                >
                  Consultar
                </button>
              </div>
            </div>

            <div className="pbm-benefits-list">
              <div className="pbm-benefit">
                <CheckCircle2 size={16} color="#008a5b" />
                <span>Descontos diretos na nota fiscal</span>
              </div>
              <div className="pbm-benefit">
                <CheckCircle2 size={16} color="#008a5b" />
                <span>Mais de 3.000 medicamentos cobertos</span>
              </div>
              <div className="pbm-benefit">
                <CheckCircle2 size={16} color="#008a5b" />
                <span>Válido em todas as lojas físicas e no site Raia</span>
              </div>
            </div>
          </div>
        )}

        {/* 7. QUICKVIEW MODAL */}
        {activeModal === 'quickview' && quickViewProduct && (
          <div className="modal-content modal-quickview">
            <div className="quickview-grid">
              <div className="quickview-img-col">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="quickview-img"
                />
                {quickViewProduct.discount && (
                  <span className="badge badge--discount quickview-discount">
                    ↓ {quickViewProduct.discount}%
                  </span>
                )}
              </div>

              <div className="quickview-info-col">
                <span className="quickview-brand">Droga Raia Oficial</span>
                <h2 className="quickview-title">{quickViewProduct.name}</h2>
                <span className="quickview-size">{quickViewProduct.size}</span>

                {isCosmeticOrPersonalCare(quickViewProduct) && quickViewProduct.rating && (
                  <div className="quickview-rating">
                    <div className="quickview-stars">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(quickViewProduct.rating || 5) ? '#ffb800' : 'none'}
                          color="#ffb800"
                        />
                      ))}
                    </div>
                    <span className="quickview-reviews">({quickViewProduct.reviews} avaliações)</span>
                  </div>
                )}

                <div className="quickview-pricing">
                  {quickViewProduct.oldPrice && (
                    <span className="quickview-old-price">
                      De R$ {quickViewProduct.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                  <span className="quickview-price">
                    R$ {quickViewProduct.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="quickview-installments">
                    ou até 2x de R$ {(quickViewProduct.price / 2).toFixed(2).replace('.', ',')} sem juros
                  </span>
                </div>

                <div className="quickview-actions">
                  <div className="quickview-qty-control">
                    <button
                      className="quickview-qty-btn"
                      onClick={() => setQuickQty(Math.max(1, quickQty - 1))}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="quickview-qty-val">{quickQty}</span>
                    <button
                      className="quickview-qty-btn"
                      onClick={() => setQuickQty(quickQty + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    className="quickview-add-btn"
                    onClick={() => {
                      addToCart(quickViewProduct, quickQty);
                      closeModal();
                    }}
                    id="quickview-add-to-cart-btn"
                  >
                    <ShoppingBag size={18} />
                    <span>Adicionar à Cesta</span>
                  </button>
                </div>

                <div className="quickview-benefits">
                  <div className="quickview-benefit-item">
                    <Truck size={14} color="#008a5b" />
                    <span>Tempo médio para entrega: de 3h a 5h ou retire na loja grátis</span>
                  </div>
                  <div className="quickview-benefit-item">
                    <ShieldCheck size={14} color="#008a5b" />
                    <span>Garantia de procedência com nota fiscal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. CHECKOUT SUCCESS MODAL */}
        {activeModal === 'checkout-success' && (
          <div className="modal-content modal-checkout-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} color="#008a5b" />
            </div>
            <h2 className="modal-title">Pedido Confirmado! 🎉</h2>
            <p className="modal-desc">
              Obrigado por comprar na Droga Raia. Seu pedido foi enviado para a farmácia mais próxima!
            </p>

            <div className="success-order-box">
              <div className="success-row">
                <span>Número do Pedido:</span>
                <strong>#RAIA-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </div>
              <div className="success-row">
                <span>Total Pago:</span>
                <strong style={{ color: '#007f91' }}>
                  R$ {finalTotal.toFixed(2).replace('.', ',')}
                </strong>
              </div>
              <div className="success-row">
                <span>Previsão de Entrega:</span>
                <strong style={{ color: '#008a5b' }}>Hoje em até 45 minutos ⚡</strong>
              </div>
              <div className="success-row">
                <span>Forma de Pagamento:</span>
                <strong>PIX / Cartão Aprovado</strong>
              </div>
            </div>

            <button
              className="modal-primary-btn"
              onClick={() => {
                clearCart();
                closeModal();
              }}
              id="success-finish-btn"
              style={{ marginTop: '20px' }}
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modals;
