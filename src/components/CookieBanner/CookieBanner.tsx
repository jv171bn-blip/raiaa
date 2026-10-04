import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import './CookieBanner.css';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({
    essential: true, // Always true
    performance: true,
    functional: true,
    advertising: true,
  });

  useEffect(() => {
    // Check if user already accepted or dismissed cookies
    const consent = localStorage.getItem('raia_cookies_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('raia_cookies_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('raia_cookies_consent', 'rejected_optional');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('raia_cookies_consent', JSON.stringify(cookiePrefs));
    setShowSettingsModal(false);
    setIsVisible(false);
  };

  if (!isVisible && !showSettingsModal) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {isVisible && (
        <aside className="cookie-banner" id="cookie-consent-banner" aria-label="Aviso de Privacidade e Cookies">
          <div className="cookie-banner__inner">
            <p className="cookie-banner__text">
              Durante sua navegação, podemos utilizar cookies para: confirmar sua identidade; personalizar seu acesso; e acompanhar a utilização de nossos websites, visando o aprimoramento de sua funcionalidade. Alguns cookies são essenciais para nossos serviços, outros opcionais. Você poderá gerenciar os cookies que utilizamos de acordo com suas preferências.{' '}
              <a
                href="https://rdsaude.com.br/wp-content/uploads/2025/10/Politica-de-Cookies.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cookie-banner__link"
              >
                Nossa Política de Privacidade e Cookies
              </a>
            </p>

            <div className="cookie-banner__actions">
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--outline"
                id="btn-cookie-settings"
                onClick={() => setShowSettingsModal(true)}
              >
                Definições de cookies
              </button>

              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--solid"
                id="btn-cookie-reject"
                onClick={handleRejectAll}
              >
                Rejeitar todos os cookies
              </button>

              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--solid"
                id="btn-cookie-accept"
                onClick={handleAcceptAll}
              >
                Aceitar todos os cookies
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Cookie Settings Preference Modal */}
      {showSettingsModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowSettingsModal(false)}>
          <div className="cookie-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="cookie-modal__header">
              <h3 className="cookie-modal__title">Centro de Preferências de Cookies</h3>
              <button
                type="button"
                className="cookie-modal__close"
                onClick={() => setShowSettingsModal(false)}
                aria-label="Fechar definições"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cookie-modal__body">
              <p className="cookie-modal__intro">
                Ao navegar no site da Droga Raia, dados sobre o uso dos nossos serviços podem ser armazenados em cookies para proporcionar a melhor experiência possível.
              </p>

              {/* Essential */}
              <div className="cookie-group">
                <div className="cookie-group__header">
                  <div className="cookie-group__info">
                    <span className="cookie-group__name">Cookies estritamente necessários</span>
                    <span className="cookie-group__status">Sempre ativos</span>
                  </div>
                  <span className="cookie-group__locked" title="Estes cookies são necessários para o funcionamento do site">
                    <Check size={18} color="#007380" />
                  </span>
                </div>
                <p className="cookie-group__desc">
                  Essenciais para autenticação na conta, segurança contra fraudes e funcionamento da cesta de compras.
                </p>
              </div>

              {/* Performance */}
              <div className="cookie-group">
                <div className="cookie-group__header">
                  <div className="cookie-group__info">
                    <span className="cookie-group__name">Cookies de desempenho e análise</span>
                  </div>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePrefs.performance}
                      onChange={e =>
                        setCookiePrefs(prev => ({ ...prev, performance: e.target.checked }))
                      }
                    />
                    <span className="cookie-toggle__slider" />
                  </label>
                </div>
                <p className="cookie-group__desc">
                  Permitem mensurar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho da nossa farmácia digital.
                </p>
              </div>

              {/* Advertising */}
              <div className="cookie-group">
                <div className="cookie-group__header">
                  <div className="cookie-group__info">
                    <span className="cookie-group__name">Cookies de publicidade personalizada</span>
                  </div>
                  <label className="cookie-toggle">
                    <input
                      type="checkbox"
                      checked={cookiePrefs.advertising}
                      onChange={e =>
                        setCookiePrefs(prev => ({ ...prev, advertising: e.target.checked }))
                      }
                    />
                    <span className="cookie-toggle__slider" />
                  </label>
                </div>
                <p className="cookie-group__desc">
                  Utilizados para exibir ofertas e promoções de saúde personalizadas de acordo com o seu perfil.
                </p>
              </div>
            </div>

            <div className="cookie-modal__footer">
              <button
                type="button"
                className="cookie-modal__btn-secondary"
                onClick={handleRejectAll}
              >
                Rejeitar todos
              </button>
              <button
                type="button"
                className="cookie-modal__btn-primary"
                onClick={handleSavePreferences}
              >
                Confirmar minhas escolhas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
