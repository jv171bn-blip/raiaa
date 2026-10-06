import React, { useEffect, useState } from 'react';
import {
  Truck,
  Lock,
  Headphones,
  AlertCircle,
  ShoppingBag,
  Heart,
  Search,
  User,
  Package,
  Eye,
  EyeOff,
  CheckCircle2,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './PrivacyPolicyPage.css';

interface PageSession {
  title: string;
  breadcrumb: string;
  leadText: string;
  paragraphs: string[];
}

const SESSIONS: Record<string, PageSession> = {
  sobre: {
    title: 'Quem Somos',
    breadcrumb: 'CASA / QUEM SOMOS',
    leadText:
      'A Drogaria Portal é uma loja online dedicada a oferecer produtos para saúde, bem-estar, higiene, beleza e cuidados pessoais, sempre priorizando qualidade, segurança e praticidade em cada compra.',
    paragraphs: [
      'Trabalhamos com medicamentos, vitaminas, suplementos alimentares, dermocosméticos, produtos de higiene e diversas outras categorias, reunindo marcas reconhecidas e produtos originais para atender às necessidades de nossos clientes.',
      'Nosso compromisso é proporcionar uma experiência de compra segura, com atendimento de qualidade, preços competitivos e um processo de compra simples e transparente. Buscamos oferecer soluções que contribuam para o cuidado com a saúde e o bem-estar de toda a família.',
      'Valorizamos a confiança de nossos clientes e seguimos rigorosamente a legislação brasileira e as normas dos órgãos competentes, comercializando produtos com procedência garantida e mantendo elevados padrões de qualidade em nossos processos.',
      'Acreditamos que cuidar da saúde deve ser fácil, acessível e seguro. Por isso, trabalhamos continuamente para oferecer um catálogo completo, tecnologia, agilidade na entrega e um atendimento eficiente antes, durante e após a compra.',
      'Nossa missão é conectar nossos clientes aos melhores produtos para saúde e bem-estar, proporcionando uma experiência de compra confiável, moderna e segura, fazendo parte da sua rotina de beleza e cuidados pessoais.',
    ],
  },
  privacidade: {
    title: 'Política de Privacidade',
    breadcrumb: 'CASA / POLÍTICA DE PRIVACIDADE',
    leadText:
      'A Drogaria Portal LTDA preza pela privacidade, sigilo e segurança dos dados de cada cliente, garantindo total transparência no tratamento de suas informações em conformidade com a LGPD (Lei nº 13.709/2018).',
    paragraphs: [
      'Coletamos dados cadastrais como nome completo, CPF, e-mail, telefone e endereço de entrega exclusivamente para viabilizar o faturamento, emissão de Nota Fiscal Eletrônica e entrega correta das suas compras.',
      'Todas as informações de pagamento são processadas em ambiente 100% criptografado através de certificados digitais SSL/TLS e intermediadores homologados com o padrão internacional de segurança PCI-DSS. Nós não armazenamos dados de cartões de crédito em nossos servidores.',
      'A Drogaria Portal não comercializa, não aluga e não compartilha dados pessoais de clientes com terceiros. O compartilhamento ocorre única e exclusivamente com operadores essenciais à operação (como Correios, transportadoras e gateways bancários).',
      'Em total cumprimento às exigências da ANVISA, eventuais dados de prescrições médicas enviadas para a dispensação de medicamentos controlados são arquivados sob rigoroso sigilo profissional farmacêutico pelo período determinado na legislação sanitária.',
      'Você possui o direito garantido de consultar, atualizar ou solicitar a eliminação dos seus dados a qualquer momento, bastando entrar em contato com nossa equipe pelo e-mail contato@drogariaportal.com.br.',
    ],
  },
  trocas: {
    title: 'Trocas e Devoluções',
    breadcrumb: 'CASA / TROCAS E DEVOLUÇÕES',
    leadText:
      'Nossa Política de Trocas e Devoluções é simples, rápida e transparente, seguindo rigorosamente o Código de Defesa do Consumidor (CDC) e as normas sanitárias da ANVISA.',
    paragraphs: [
      'Direito de Arrependimento: Conforme o Artigo 49 do Código de Defesa do Consumidor, em compras realizadas pela internet você pode solicitar a desistência e devolução do produto em até 7 (sete) dias corridos a contar da data de recebimento.',
      'Condições de Devolução: O produto deve ser encaminhado em sua embalagem original, sem violação do lacre do fabricante, sem indícios de uso e acompanhado de sua respectiva Nota Fiscal.',
      'Medicamentos Controlados e Termolábeis: Por determinação da ANVISA (Portaria SVS/MS nº 344/98 e RDC nº 44/2009), medicamentos sob controle especial e produtos que exigem refrigeração controlada não podem ser devolvidos ou trocados após a saída da farmácia, exceto em caso de defeito ou desvio de qualidade comprovado.',
      'Como Solicitar: Entre em contato com nosso atendimento pelo telefone ou WhatsApp (11) 98825-1598 ou pelo e-mail contato@drogariaportal.com.br com o número do seu pedido. Nossa equipe enviará o código de postagem reversa sem qualquer custo para você.',
    ],
  },
  reembolso: {
    title: 'Política de Reembolso',
    breadcrumb: 'CASA / POLÍTICA DE REEMBOLSO',
    leadText:
      'Garantimos um processo de reembolso seguro, rápido e desburocratizado para cancelamentos e devoluções aprovadas pela nossa equipe.',
    paragraphs: [
      'Assim que o produto devolvido for recebido em nosso centro de distribuição e passar pela conferência técnica, o estorno do valor será efetuado de acordo com a forma de pagamento escolhida no momento da compra:',
      'Pagamentos via Pix: O reembolso é realizado na mesma conta bancária de origem em até 24 horas úteis após a aprovação da devolução.',
      'Pagamentos via Cartão de Crédito: A solicitação de estorno é enviada à operadora do cartão em até 3 dias úteis. O crédito constará em sua fatura atual ou seguinte, de acordo com as diretrizes do banco emissor.',
      'Pagamentos via Boleto Bancário: O valor será transferido via TED ou Pix para uma conta corrente ou poupança de mesma titularidade do CPF cadastrado no pedido em até 48 horas úteis.',
      'Para acompanhar o andamento de qualquer reembolso ou tirar dúvidas, entre em contato com nosso atendimento pelo e-mail contato@drogariaportal.com.br ou WhatsApp (11) 98825-1598.',
    ],
  },
  envio: {
    title: 'Política de Envio (Frete)',
    breadcrumb: 'CASA / POLÍTICA DE ENVIO (FRETE)',
    leadText:
      'A Drogaria Portal entrega para todo o território brasileiro com rapidez, segurança e embalagens adequadas para garantir a integridade dos seus produtos.',
    paragraphs: [
      'Prazos e Modalidades: O prazo de entrega é calculado automaticamente no carrinho com base no CEP informado e na modalidade escolhida (Envio Rápido ou Frete Econômico). O prazo passa a contar no primeiro dia útil após a confirmação do pagamento.',
      'Código de Rastreamento: Assim que o seu pedido for despachado, você receberá o código de rastreamento por e-mail para acompanhar todas as etapas da entrega em tempo real.',
      'Frete Grátis: Válido para pedidos a partir de R$ 149,90 para cidades da Grande São Paulo e regiões selecionadas. Consulte as condições inserindo seu CEP antes de finalizar a compra.',
      'Tentativas de Entrega: As transportadoras parceiras e Correios realizam até 3 (três) tentativas de entrega no endereço indicado. Certifique-se de que haverá alguém responsável no local para o recebimento.',
    ],
  },
  termos: {
    title: 'Termos e Condições de Uso',
    breadcrumb: 'CASA / TERMOS E CONDIÇÕES DE USO',
    leadText:
      'Estes Termos e Condições regem a navegação e as compras realizadas na plataforma digital da Drogaria Portal LTDA, garantindo transparência e segurança jurídica para o consumidor.',
    paragraphs: [
      'Ao acessar ou comprar no site, você concorda expressamente com os termos estabelecidos e com a legislação brasileira aplicável, incluindo o Código de Defesa do Consumidor e o Marco Civil da Internet.',
      'Cadastro e Conta: As informações cadastradas devem ser exatas e verídicas. O usuário é o único responsável pela guarda e sigilo de suas credenciais e senha de acesso.',
      'Preços e Promoções: Os valores e promoções são exclusivos para compras efetuadas em nossa loja virtual e válidos durante a vigência da campanha ou enquanto durarem os estoques.',
      'Venda de Medicamentos: A dispensação de remédios sujeitos a controle especial segue rigorosamente as resoluções da ANVISA, sendo obrigatória a apresentação e retenção de receita médica válida.',
      'Propriedade Intelectual: Todo o conteúdo do site (marcas, logotipos, textos e imagens) é de propriedade exclusiva da Drogaria Portal LTDA ou de seus fornecedores licenciados, sendo proibida a reprodução sem autorização.',
    ],
  },
};

const PrivacyPolicyPage: React.FC = () => {
  const { institutionalTab, goToHome } = useCart();

  const currentKey = institutionalTab || 'privacidade';

  // State para Minha Conta
  const [accountEmail, setAccountEmail] = useState('');
  const [accountPassword, setAccountPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountLoading, setAccountLoading] = useState(false);
  const [accountError, setAccountError] = useState('');

  // State para Carrinho
  const [cartCep, setCartCep] = useState('');
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState('');

  // State para Lista de Desejos
  const [wishInput, setWishInput] = useState('');
  const [wishLoading, setWishLoading] = useState(false);
  const [wishError, setWishError] = useState('');

  // State para Meus Pedidos
  const [orderQuery, setOrderQuery] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    // Resetar erros ao mudar de página
    setAccountError('');
    setCartError('');
    setWishError('');
    setOrderError('');
  }, [currentKey]);

  // Handlers que simulam ação e SEMPRE retornam erro como solicitado
  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAccountLoading(true);
    setAccountError('');
    setTimeout(() => {
      setAccountLoading(false);
      setAccountError(
        'Erro na autenticação: Não foi possível conectar ao servidor de contas. O sistema está temporariamente indisponível. Tente novamente mais tarde. (Código: ERR_AUTH_503)'
      );
    }, 600);
  };

  const handleCartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCartLoading(true);
    setCartError('');
    setTimeout(() => {
      setCartLoading(false);
      setCartError(
        'Erro no carrinho: O serviço de finalização de compras e cálculo de frete está temporariamente fora de operação para manutenção. (Código: ERR_CHECKOUT_UNAVAILABLE)'
      );
    }, 600);
  };

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWishLoading(true);
    setWishError('');
    setTimeout(() => {
      setWishLoading(false);
      setWishError(
        'Erro na lista de desejos: Não foi possível carregar ou sincronizar seus produtos favoritos. O serviço está temporariamente indisponível. (Código: ERR_FAV_SYNC)'
      );
    }, 600);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderLoading(true);
    setOrderError('');
    setTimeout(() => {
      setOrderLoading(false);
      setOrderError(
        'Erro na consulta: Não foi possível localizar o pedido ou o sistema de rastreamento está temporariamente fora do ar. (Código: ERR_ORDERS_500)'
      );
    }, 600);
  };

  // Se for uma das 4 páginas da Área do Cliente
  const isCustomerArea = ['minha-conta', 'conta', 'carrinho', 'lista-de-desejos', 'meus-pedidos'].includes(
    currentKey
  );

  const getCustomerPageConfig = () => {
    switch (currentKey) {
      case 'minha-conta':
      case 'conta':
        return {
          title: 'Minha Conta',
          breadcrumb: 'CASA / MINHA CONTA',
        };
      case 'carrinho':
        return {
          title: 'Carrinho',
          breadcrumb: 'CASA / CARRINHO',
        };
      case 'lista-de-desejos':
        return {
          title: 'Lista de Desejos',
          breadcrumb: 'CASA / LISTA DE DESEJOS',
        };
      case 'meus-pedidos':
        return {
          title: 'Meus Pedidos',
          breadcrumb: 'CASA / MEUS PEDIDOS',
        };
      default:
        return {
          title: 'Área do Cliente',
          breadcrumb: 'CASA / ÁREA DO CLIENTE',
        };
    }
  };

  const session = SESSIONS[currentKey] || SESSIONS.privacidade;
  const customerConfig = getCustomerPageConfig();

  return (
    <div className="inst-page" id="institutional-page">
      {/* 1. Header preto conforme imagem de referência */}
      <header className="inst-header">
        <div className="inst-header__inner">
          <h1 className="inst-header__title">
            {isCustomerArea ? customerConfig.title : session.title}
          </h1>
          <nav className="inst-header__breadcrumb" aria-label="Navegação">
            <button
              type="button"
              onClick={goToHome}
              className="inst-breadcrumb-link"
              id="inst-breadcrumb-casa"
            >
              CASA
            </button>
            <span className="inst-breadcrumb-sep">/</span>
            <span className="inst-breadcrumb-current">
              {isCustomerArea ? customerConfig.title.toUpperCase() : session.title.toUpperCase()}
            </span>
          </nav>
        </div>
      </header>

      {/* 2. Conteúdo em fundo branco */}
      <main className="inst-body">
        <div className="inst-container">
          {/* PÁGINA 1: MINHA CONTA */}
          {(currentKey === 'minha-conta' || currentKey === 'conta') && (
            <div className="inst-form-card" id="form-minha-conta">
              <h2 className="inst-form-title">Acessar Minha Conta</h2>
              <p className="inst-form-subtitle">
                Informe seus dados para acessar sua conta, gerenciar pedidos e endereços.
              </p>

              {accountError && (
                <div className="inst-error-banner" role="alert">
                  <AlertCircle size={22} className="inst-error-icon" />
                  <div className="inst-error-text">
                    <strong>Falha no Acesso</strong>
                    <p>{accountError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleAccountSubmit} className="inst-form">
                <div className="inst-field">
                  <label htmlFor="inst-email">E-mail ou CPF</label>
                  <input
                    id="inst-email"
                    type="text"
                    required
                    placeholder="Digite seu e-mail ou CPF"
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                    className={accountError ? 'input-error' : ''}
                  />
                </div>

                <div className="inst-field">
                  <label htmlFor="inst-password">Senha</label>
                  <div className="inst-password-wrap">
                    <input
                      id="inst-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Digite sua senha de acesso"
                      value={accountPassword}
                      onChange={(e) => setAccountPassword(e.target.value)}
                      className={accountError ? 'input-error' : ''}
                    />
                    <button
                      type="button"
                      className="inst-toggle-pwd"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="inst-form-options">
                  <label className="inst-checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>Lembrar meu acesso</span>
                  </label>
                  <button
                    type="button"
                    className="inst-link-text"
                    onClick={() =>
                      setAccountError(
                        'Erro na recuperação: Serviço de envio de e-mail temporariamente indisponível. Tente novamente mais tarde.'
                      )
                    }
                  >
                    Esqueceu sua senha?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={accountLoading}
                  className="inst-btn-submit"
                  id="btn-entrar-conta"
                >
                  {accountLoading ? 'AUTENTICANDO...' : 'ENTRAR NA CONTA'}
                </button>

                <div className="inst-form-footer">
                  <span>Ainda não possui cadastro?</span>
                  <button
                    type="button"
                    className="inst-link-bold"
                    onClick={() =>
                      setAccountError(
                        'Erro no cadastro: O módulo de novos cadastros está em manutenção técnica. Tente novamente mais tarde.'
                      )
                    }
                  >
                    Criar nova conta
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* PÁGINA 2: CARRINHO */}
          {currentKey === 'carrinho' && (
            <div className="inst-form-card" id="form-carrinho">
              <h2 className="inst-form-title">Seu Carrinho</h2>
              <p className="inst-form-subtitle">Confira os itens selecionados para sua compra.</p>

              {cartError && (
                <div className="inst-error-banner" role="alert">
                  <AlertCircle size={22} className="inst-error-icon" />
                  <div className="inst-error-text">
                    <strong>Falha no Checkout</strong>
                    <p>{cartError}</p>
                  </div>
                </div>
              )}

              <div className="inst-cart-mock-box">
                <div className="inst-cart-item">
                  <div className="inst-cart-item-icon">
                    <Package size={28} color="#00335e" />
                  </div>
                  <div className="inst-cart-item-details">
                    <strong>Dipirona Monoidratada 500mg - 20 Comprimidos</strong>
                    <span>Código: #409281 • Quantidade: 1</span>
                  </div>
                  <div className="inst-cart-item-price">
                    <span>R$ 14,90</span>
                  </div>
                </div>

                <form onSubmit={handleCartSubmit} className="inst-cart-cep-form">
                  <label htmlFor="inst-cep-input">Calcular Frete e Prazo:</label>
                  <div className="inst-cep-row">
                    <input
                      id="inst-cep-input"
                      type="text"
                      placeholder="00000-000"
                      maxLength={9}
                      value={cartCep}
                      onChange={(e) => setCartCep(e.target.value)}
                    />
                    <button type="submit" className="inst-btn-cep">
                      CALCULAR
                    </button>
                  </div>
                </form>

                <div className="inst-cart-summary">
                  <div className="inst-cart-summary-row">
                    <span>Subtotal</span>
                    <span>R$ 14,90</span>
                  </div>
                  <div className="inst-cart-summary-row">
                    <span>Frete</span>
                    <span>A calcular</span>
                  </div>
                  <div className="inst-cart-summary-row inst-cart-summary-row--total">
                    <strong>Total Estimado</strong>
                    <strong>R$ 14,90</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCartSubmit}
                  disabled={cartLoading}
                  className="inst-btn-submit"
                  id="btn-finalizar-carrinho"
                >
                  {cartLoading ? 'PROCESSANDO...' : 'FINALIZAR COMPRA'}
                </button>
              </div>
            </div>
          )}

          {/* PÁGINA 3: LISTA DE DESEJOS */}
          {currentKey === 'lista-de-desejos' && (
            <div className="inst-form-card" id="form-desejos">
              <h2 className="inst-form-title">Lista de Desejos</h2>
              <p className="inst-form-subtitle">
                Salve e monitore os produtos que você quer comprar em breve.
              </p>

              {wishError && (
                <div className="inst-error-banner" role="alert">
                  <AlertCircle size={22} className="inst-error-icon" />
                  <div className="inst-error-text">
                    <strong>Falha na Sincronização</strong>
                    <p>{wishError}</p>
                  </div>
                </div>
              )}

              <div className="inst-empty-card">
                <div className="inst-empty-icon-wrap">
                  <Heart size={36} color="#00335e" />
                </div>
                <h3>Sua lista está vazia</h3>
                <p>
                  Adicione produtos à sua lista de desejos para acompanhar variações de preço e
                  disponibilidade.
                </p>

                <form onSubmit={handleWishSubmit} className="inst-wish-search">
                  <input
                    type="text"
                    placeholder="Digite o nome do produto para salvar..."
                    value={wishInput}
                    onChange={(e) => setWishInput(e.target.value)}
                  />
                  <button type="submit" disabled={wishLoading} className="inst-btn-submit">
                    {wishLoading ? 'SALVANDO...' : 'ADICIONAR À LISTA'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* PÁGINA 4: MEUS PEDIDOS */}
          {currentKey === 'meus-pedidos' && (
            <div className="inst-form-card" id="form-pedidos">
              <h2 className="inst-form-title">Rastrear Meus Pedidos</h2>
              <p className="inst-form-subtitle">
                Acompanhe o status e a entrega dos seus pedidos em tempo real.
              </p>

              {orderError && (
                <div className="inst-error-banner" role="alert">
                  <AlertCircle size={22} className="inst-error-icon" />
                  <div className="inst-error-text">
                    <strong>Consulta Indisponível</strong>
                    <p>{orderError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleOrderSubmit} className="inst-form">
                <div className="inst-field">
                  <label htmlFor="inst-order-id">Número do Pedido ou CPF</label>
                  <input
                    id="inst-order-id"
                    type="text"
                    required
                    placeholder="Ex: #49281 ou 000.000.000-00"
                    value={orderQuery}
                    onChange={(e) => setOrderQuery(e.target.value)}
                    className={orderError ? 'input-error' : ''}
                  />
                </div>

                <div className="inst-field">
                  <label htmlFor="inst-order-email">E-mail Cadastrado</label>
                  <input
                    id="inst-order-email"
                    type="email"
                    required
                    placeholder="Ex: seuemail@exemplo.com"
                    value={orderEmail}
                    onChange={(e) => setOrderEmail(e.target.value)}
                    className={orderError ? 'input-error' : ''}
                  />
                </div>

                <button
                  type="submit"
                  disabled={orderLoading}
                  className="inst-btn-submit"
                  id="btn-rastrear-pedido"
                >
                  {orderLoading ? 'LOCALIZANDO...' : 'CONSULTAR PEDIDO'}
                </button>
              </form>
            </div>
          )}

          {/* PÁGINAS INSTITUCIONAIS (QUEM SOMOS, POLÍTICAS, TERMOS) */}
          {!isCustomerArea && (
            <>
              <p className="inst-lead">{session.leadText}</p>

              <div className="inst-paragraphs">
                {session.paragraphs.map((p, idx) => (
                  <p key={idx} className="inst-paragraph">
                    {p}
                  </p>
                ))}
              </div>

              {/* Dados Fictícios / Oficiais da Empresa */}
              <div className="inst-company-box">
                <p>
                  <strong>Drogaria Portal LTDA</strong> - CNPJ:{' '}
                  <span className="inst-cnpj-text">35.307.743/0002-74</span>
                </p>
                <p>
                  Avenida Cupece, 1277 Bairro: Jardim Prudencia CEP: 04365-000 Município: São Paulo
                  Estado: São Paulo
                </p>
                <p>Telefone: (11) 98825-1598 | E-mail: contato@drogariaportal.com.br</p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* 3. Faixa de Benefícios idêntica à imagem de referência */}
      <section className="inst-benefits" aria-label="Benefícios Drogaria Portal">
        <div className="inst-benefits__inner">
          {/* Card 1: Envio Rápido */}
          <div className="inst-benefit-card">
            <div className="inst-benefit-icon-wrap">
              <Truck size={26} className="inst-benefit-icon" strokeWidth={1.8} />
            </div>
            <div className="inst-benefit-text">
              <strong className="inst-benefit-title">ENVIO RÁPIDO</strong>
              <span className="inst-benefit-sub">para todo o Brasil</span>
            </div>
          </div>

          {/* Card 2: Pagamento Seguro */}
          <div className="inst-benefit-card">
            <div className="inst-benefit-icon-wrap">
              <Lock size={26} className="inst-benefit-icon" strokeWidth={1.8} />
            </div>
            <div className="inst-benefit-text">
              <strong className="inst-benefit-title">PAGAMENTO SEGURO</strong>
              <span className="inst-benefit-sub">parcele em até 12x</span>
            </div>
          </div>

          {/* Card 3: Atendimento */}
          <div className="inst-benefit-card">
            <div className="inst-benefit-icon-wrap">
              <Headphones size={26} className="inst-benefit-icon" strokeWidth={1.8} />
            </div>
            <div className="inst-benefit-text">
              <strong className="inst-benefit-title">ATENDIMENTO</strong>
              <span className="inst-benefit-sub">suporte rápido e humanizado</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
