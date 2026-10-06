import React from 'react';
import {
  Headphones,
  Smartphone,
  ChevronRight,
  Shield,
  ShieldCheck,
  Lock,
  CreditCard,
  CheckCircle,
  Truck,
  Heart,
  ShoppingBag,
  User,
  ExternalLink,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Footer.css';

const Footer: React.FC = () => {
  const {
    openCart,
    setActiveModal,
    showToast,
    goToPrivacyPage,
    isPrivacyPage,
    goToHome,
  } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    goToPrivacyPage('sobre');
  };

  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('Aplicativo Drogaria Portal: Disponível em breve na Google Play e App Store!');
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        {/* Rounded Support Box with Light Gray Background - only on main site */}
        {!isPrivacyPage && (
          <div className="footer__support-box">
            <div className="footer__support-grid">
              {/* Card 1: Central de Atendimento */}
              <div
                className="footer-support-card"
                id="footer-support-center"
                onClick={handleSupportClick}
                role="button"
                tabIndex={0}
              >
                <div className="footer-support-card__top">
                  <Headphones size={24} color="#1a1a1a" strokeWidth={1.8} />
                  <ChevronRight size={18} color="#1a1a1a" strokeWidth={2} />
                </div>
                <h3 className="footer-support-card__title">Central de atendimento</h3>
                <p className="footer-support-card__sub">
                  Confira as dúvidas mais frequentes ou fale com a gente.
                </p>
              </div>

              {/* Card 2: Baixe o nosso aplicativo */}
              <div
                className="footer-support-card"
                id="footer-download-app"
                onClick={handleAppClick}
                role="button"
                tabIndex={0}
              >
                <div className="footer-support-card__top">
                  <div className="footer-support-card__phone-icon-wrap">
                    <Smartphone size={24} color="#1a1a1a" strokeWidth={1.8} />
                    <svg
                      className="footer-support-card__phone-badge"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                  </div>
                  <ChevronRight size={18} color="#1a1a1a" strokeWidth={2} />
                </div>
                <h3 className="footer-support-card__title">Baixe o nosso aplicativo</h3>
                <p className="footer-support-card__sub">
                  E tenha descontos e benefícios exclusivos!
                </p>
              </div>
            </div>

            {/* Uma empresa RDsaúde */}
            <div className="footer__rdsaude">
              <span className="footer__rd-label">Uma empresa</span>
              <div className="footer__rd-logo">
                <img src="/raia-symbol.png" alt="RD" className="footer__rd-symbol" />
                <strong className="footer__rd-text-main">RD</strong>
                <span className="footer__rd-text-sub">saúde</span>
              </div>
            </div>

            {/* Voltar ao topo button */}
            <div className="footer__btn-wrap">
              <button
                type="button"
                className="footer__back-to-top"
                onClick={scrollToTop}
                id="footer-back-to-top-btn"
              >
                Voltar ao topo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ===== PORTAL BLUE FOOTER SECTION (5 COLUNAS OFICIAIS) ===== */}
      <section className="portal-footer" id="portal-official-footer">
        <div className="portal-footer__inner">
          <div className="portal-footer__grid">
            {/* COLUNA 1: LOGO REAL DA DROGA RAIA, ENDEREÇO, TELEFONE, EMAIL, CNPJ */}
            <div className="portal-col portal-col--brand">
              <div
                className="portal-brand"
                onClick={goToHome}
                role="button"
                tabIndex={0}
                title="Droga Raia"
              >
                <img
                  src="/raia-logo.png"
                  alt="Droga Raia"
                  className="portal-logo-raia"
                />
              </div>

              <div className="portal-contact-info">
                <p className="portal-address">
                  Avenida Cupece, 1277 Bairro: Jardim Prudencia CEP: 04365-000 Município: São Paulo Estado: São Paulo
                </p>
                <p className="portal-phone">
                  Telefone: <a href="tel:11988251598">(11) 98825-1598</a>
                </p>
                <p className="portal-email">
                  E-mail: <a href="mailto:contato@drogariaportal.com.br">contato@drogariaportal.com.br</a>
                </p>
                <p className="portal-cnpj">
                  CNPJ: 35.307.743/0002-74
                </p>
                <p className="portal-legal-name">
                  Drogaria Portal LTDA
                </p>
              </div>
            </div>

            {/* COLUNA 2: INSTITUCIONAL */}
            <div className="portal-col">
              <h4 className="portal-col__title">INSTITUCIONAL</h4>
              <ul className="portal-col__links">
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('sobre')}
                    id="footer-link-quem-somos"
                  >
                    Quem somos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('trocas')}
                    id="footer-link-trocas"
                  >
                    Trocas e devoluções
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('reembolso')}
                    id="footer-link-reembolso"
                  >
                    Política de Reembolso
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn portal-link-btn--highlight"
                    onClick={() => goToPrivacyPage('privacidade')}
                    id="footer-link-privacidade"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('envio')}
                    id="footer-link-frete"
                  >
                    Política de Envio (Frete)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('termos')}
                    id="footer-link-termos"
                  >
                    Termos e Condições de Uso
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUNA 3: ÁREA DO CLIENTE */}
            <div className="portal-col">
              <h4 className="portal-col__title">ÁREA DO CLIENTE</h4>
              <ul className="portal-col__links">
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('minha-conta')}
                    id="footer-link-minha-conta"
                  >
                    Minha conta
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('carrinho')}
                    id="footer-link-carrinho"
                  >
                    Carrinho
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('lista-de-desejos')}
                    id="footer-link-desejos"
                  >
                    Lista de desejos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="portal-link-btn"
                    onClick={() => goToPrivacyPage('meus-pedidos')}
                    id="footer-link-pedidos"
                  >
                    Meus pedidos
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUNA 4: SELO DE PAGAMENTO */}
            <div className="portal-col portal-col--payments">
              <h4 className="portal-col__title">SELO DE PAGAMENTO</h4>

              {/* Compra Segura Header Badge */}
              <div className="portal-security-badge-pill">
                <ShieldCheck size={20} className="portal-shield-icon" />
                <div className="portal-security-badge-text">
                  <strong>COMPRA SEGURA</strong>
                  <span>Técnicas 100% seguras</span>
                </div>
              </div>

              {/* Payment Methods Cards */}
              <div className="portal-payment-methods">
                {/* Pix */}
                <div className="portal-pay-pill" title="Pix com aprovação imediata">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16.5 7.5L12 3L7.5 7.5L12 12L16.5 7.5ZM7.5 16.5L12 21L16.5 16.5L12 12L7.5 16.5Z"
                      fill="#32BCAD"
                    />
                  </svg>
                  <span className="portal-pay-label">pix</span>
                </div>

                {/* VISA */}
                <div className="portal-pay-pill" title="Cartão Visa">
                  <span className="portal-visa-text">VISA</span>
                </div>

                {/* Mastercard */}
                <div className="portal-pay-pill" title="Cartão MasterCard">
                  <div className="portal-mc-circles">
                    <span className="portal-mc-red" />
                    <span className="portal-mc-orange" />
                  </div>
                </div>

                {/* Mercado Pago */}
                <div className="portal-pay-pill portal-pay-pill--mp" title="Mercado Pago">
                  <svg width="22" height="14" viewBox="0 0 28 16" fill="none">
                    <path
                      d="M4 11C2.5 9 2.5 7 4 5L7 8L4 11Z"
                      fill="#009ee3"
                    />
                    <path
                      d="M24 11C25.5 9 25.5 7 24 5L21 8L24 11Z"
                      fill="#009ee3"
                    />
                    <circle cx="14" cy="8" r="3.5" fill="#009ee3" />
                  </svg>
                  <span className="portal-mp-text">pago</span>
                </div>

                {/* Boleto */}
                <div className="portal-pay-pill" title="Boleto Bancário">
                  <svg width="18" height="13" viewBox="0 0 20 14" fill="none">
                    <rect x="1" y="1" width="2" height="12" fill="#1e293b" />
                    <rect x="5" y="1" width="3" height="12" fill="#1e293b" />
                    <rect x="10" y="1" width="1.5" height="12" fill="#1e293b" />
                    <rect x="13.5" y="1" width="2.5" height="12" fill="#1e293b" />
                    <rect x="17.5" y="1" width="1.5" height="12" fill="#1e293b" />
                  </svg>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="portal-guarantees-card">
                <div className="portal-guarantee-row">
                  <ShieldCheck size={18} className="portal-icon-cyan" />
                  <div>
                    <strong>SITE 100% SEGURO</strong>
                    <span>Tecnologia de ponta e dados criptografados</span>
                  </div>
                </div>
                <div className="portal-guarantee-row">
                  <CreditCard size={18} className="portal-icon-cyan" />
                  <div>
                    <strong>PAGAMENTO SEGURO</strong>
                    <span>Suas informações protegidas e checkout certificado</span>
                  </div>
                </div>
                <div className="portal-guarantee-row">
                  <CheckCircle size={18} className="portal-icon-cyan" />
                  <div>
                    <strong>SATISFAÇÃO GARANTIDA</strong>
                    <span>Compra protegida e entrega garantida</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA 5: SELO DE SEGURANÇA */}
            <div className="portal-col portal-col--security">
              <h4 className="portal-col__title">SELO DE SEGURANÇA</h4>

              {/* Big Official Security Badge (Exact reproduction of reference) */}
              <div className="portal-security-box">
                <div className="portal-security-box__shield">
                  <svg
                    width="62"
                    height="72"
                    viewBox="0 0 64 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer Shield */}
                    <path
                      d="M32 2L4 12V34C4 54 16 68 32 72C48 68 60 54 60 34V12L32 2Z"
                      fill="#0284c7"
                    />
                    {/* Inner Shield Accent */}
                    <path
                      d="M32 6L8 15V34C8 51.5 18.5 64 32 67.5C45.5 64 56 51.5 56 34V15L32 6Z"
                      fill="#0369a1"
                    />
                    {/* Lock Body */}
                    <rect x="23" y="34" width="18" height="15" rx="3" fill="#ffffff" />
                    {/* Lock Shackle */}
                    <path
                      d="M26 34V28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28V34"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Keyhole */}
                    <circle cx="32" cy="40" r="1.8" fill="#0369a1" />
                    <path d="M32 41.5V45" stroke="#0369a1" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Security Checkmark Circle in Corner */}
                    <circle cx="48" cy="54" r="9" fill="#10b981" />
                    <path
                      d="M44.5 54L47 56.5L51.5 51.5"
                      stroke="#ffffff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="portal-security-box__text">
                  <strong className="portal-security-box__headline">SITE 100% SEGURO</strong>
                  <div className="portal-security-box__badges">
                    <span className="portal-micro-badge">
                      <Lock size={11} /> SSL
                    </span>
                    <span className="portal-micro-badge">
                      <ShieldCheck size={11} /> COMPRA
                    </span>
                    <span className="portal-micro-badge">
                      <CheckCircle size={11} /> DADOS
                    </span>
                    <span className="portal-micro-badge">
                      <CreditCard size={11} /> PAGAMENTO
                    </span>
                  </div>
                  <span className="portal-security-verified">Criptografia de 256 bits</span>
                </div>
              </div>

              {/* Anvisa Compliance Badge in Column 5 */}
              <div className="portal-anvisa-badge">
                <span className="portal-anvisa-text">A Raia segue as determinações da</span>
                <img
                  src="/anvisa-logo.svg"
                  alt="ANVISA"
                  className="portal-anvisa-logo"
                />
              </div>
            </div>
          </div>

          {/* RODAPÉ INFERIOR / COPYRIGHT OFICIAL */}
          <div className="portal-footer__bottom">
            <div className="portal-footer__copyright">
              <p className="portal-copyright-main">
                &copy; {new Date().getFullYear()} <strong>Drogaria Portal LTDA</strong> - CNPJ:{' '}
                <strong>35.307.743/0002-74</strong> - Todos os direitos reservados.
              </p>
              <p className="portal-copyright-sub">
                Preços e condições de pagamento exclusivos para compras via internet. Ofertas válidas
                até o término de nossos estoques para internet. Vendas sujeitas à análise e confirmação
                de dados.
              </p>
              <p className="portal-copyright-address">
                Avenida Cupece, 1277 - Bairro Jardim Prudencia - CEP: 04365-000 - São Paulo/SP |
                Telefone: (11) 98825-1598 | contato@drogariaportal.com.br
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
