import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import './MobileAppBanner.css';

const MobileAppBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setShowErrorPopup(true);
  };

  return (
    <>
      <div className="mobile-app-banner" id="mobile-app-banner">
        <div className="mobile-app-banner__inner">
          {/* Close Button */}
          <button
            className="mobile-app-banner__close"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar aviso do aplicativo"
          >
            <X size={18} strokeWidth={2.2} />
          </button>

          {/* Raia App Icon */}
          <div className="mobile-app-banner__icon-box">
            <img
              src="/raia-symbol.png"
              alt="Droga Raia"
              className="mobile-app-banner__icon-img"
            />
          </div>

          {/* Text */}
          <div className="mobile-app-banner__text">
            <span className="mobile-app-banner__title">Use o app e economize</span>
            <span className="mobile-app-banner__sub">Descontos exclusivos</span>
          </div>

          {/* CTA Button */}
          <button
            className="mobile-app-banner__btn"
            onClick={handleDownload}
            id="btn-baixar-app"
          >
            Baixar
          </button>
        </div>
      </div>

      {/* Error Popup Modal */}
      {showErrorPopup && (
        <div
          className="mobile-app-error-overlay"
          onClick={() => setShowErrorPopup(false)}
        >
          <div
            className="mobile-app-error-popup"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="mobile-app-error-close"
              onClick={() => setShowErrorPopup(false)}
              aria-label="Fechar pop-up"
            >
              <X size={18} />
            </button>

            <div className="mobile-app-error-icon-wrap">
              <AlertTriangle size={34} color="#d32f2f" strokeWidth={2.2} />
            </div>

            <h3 className="mobile-app-error-title">Serviço temporariamente indisponível</h3>

            <p className="mobile-app-error-message">
              O servidor de distribuição do aplicativo Droga Raia está passando por uma manutenção programada de segurança no momento. Você pode continuar aproveitando todos os mesmos descontos e benefícios da semana diretamente pelo nosso site.
            </p>

            <div className="mobile-app-error-code">
              Código do erro: <span>ERR_SRV_MAINTENANCE_503</span>
            </div>

            <div className="mobile-app-error-actions">
              <button
                type="button"
                className="mobile-app-error-btn-primary"
                onClick={() => setShowErrorPopup(false)}
              >
                Continuar pelo site
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileAppBanner;
