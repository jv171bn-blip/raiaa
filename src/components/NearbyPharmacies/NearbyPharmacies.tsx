import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ChevronUp,
  AlertCircle,
  AlertTriangle,
  Store,
  ChevronRight,
  MapPin,
} from 'lucide-react';

const DrogasilIcon: React.FC = () => (
  <svg
    viewBox="0 0 81 81"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    className="nearby-pharmacy-card__drogasil-symbol"
    aria-hidden="true"
  >
    <path
      fill="#eb3c4d"
      d="m34.591 1.3134-33.726 33.98c-1.5225 1.5301-0.948 3.4355 1.0342 3.3489l20.052-1.1547c9.1352-0.49083 14.335-5.8317 14.823-14.983l1.1491-20.151c0.0861-2.0209-1.8099-2.6848-3.3324-1.0393zm2.1832 57.19c-0.4884-9.1805-5.688-14.521-14.823-14.983l-20.052-1.1547c-1.9822-0.08668-2.5567 1.8188-1.0342 3.3489l33.726 33.98c1.5225 1.6166 3.4185 0.95258 3.3324-1.0394zm41.799-16.138-20.052 1.1547c-9.1352 0.49083-14.335 5.8317-14.823 14.983l-1.1491 20.151c-0.0861 1.992 1.8099 2.685 3.3324 1.0394l33.726-33.98c1.5513-1.6456 0.97665-3.4643-1.0342-3.3489zm-32.663-41.054c-1.5225-1.6168-3.4185-0.95272-3.3322 1.0393l1.149 20.151c0.4884 9.1517 5.688 14.521 14.823 14.983l20.052 1.1549c1.9822 0.08653 2.5567-1.7322 1.0342-3.349z"
    />
  </svg>
);

const RaiaIcon: React.FC = () => (
  <img
    src="/raia-symbol.png"
    alt="Raia"
    className="nearby-pharmacy-card__raia-symbol-img"
  />
);

function formatHoursStatus(hours?: string[]): string {
  if (!hours || hours.length === 0) return 'Aberta de 07h até 23h';
  const first = hours[0];
  if (first.includes('24')) return 'Aberta 24h';
  const match = first.match(/(\d{1,2}):(\d{2}).*?(\d{1,2}):(\d{2})/);
  if (match) {
    const start = `${parseInt(match[1], 10).toString().padStart(2, '0')}h`;
    const end = `${parseInt(match[3], 10).toString().padStart(2, '0')}h`;
    return `Aberta de ${start} até ${end}`;
  }
  return 'Aberta de 07h até 23h';
}
import {
  UserAddress,
  Pharmacy,
  GeocodedLocation,
  geocodeUserAddress,
  findNearbyPharmacies,
} from '../../services/pharmacyLocationService';
import { NearbyPharmaciesMap } from './NearbyPharmaciesMap';
import './NearbyPharmacies.css';

export interface NearbyPharmaciesProps {
  address?: UserAddress;
  selectedPharmacyId?: string;
  onSelectPharmacy?: (pharmacy: Pharmacy) => void;
  onAlterAddress?: () => void;
  showHeader?: boolean;
  showMap?: boolean;
  embedded?: boolean;
  initialVisibleCount?: number;
}

export const NearbyPharmacies: React.FC<NearbyPharmaciesProps> = ({
  address,
  selectedPharmacyId: controlledSelectedId,
  onSelectPharmacy,
  onAlterAddress,
  showHeader = true,
  showMap = true,
  embedded = false,
  initialVisibleCount = 10,
}) => {
  // Current active address
  const currentAddress: UserAddress = address || {
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
  };

  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<GeocodedLocation | null>(null);
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [selectedId, setSelectedId] = useState<string>(controlledSelectedId || '');
  const [geoError, setGeoError] = useState<string | null>(null);
  const [showOtherPharmacies, setShowOtherPharmacies] = useState(false);
  const [otherVisibleCount, setOtherVisibleCount] = useState(10);

  const mapSectionRef = useRef<HTMLDivElement>(null);

  // Sync controlled id
  useEffect(() => {
    if (controlledSelectedId) {
      setSelectedId(controlledSelectedId);
    }
  }, [controlledSelectedId]);

  // Main geocoding & nearby search effect
  // The API only runs once the user has typed a valid CEP (8 digits) or a street.
  useEffect(() => {
    let isMounted = true;
    const hasUserAddress =
      (currentAddress.cep || '').replace(/\D/g, '').length === 8 ||
      Boolean((currentAddress.street || '').trim());

    if (!hasUserAddress) {
      setPharmacies([]);
      setUserLocation(null);
      setGeoError(null);
      setIsLoading(false);
      return () => {
        isMounted = false;
      };
    }

    setIsLoading(true);
    setGeoError(null);

    async function loadPharmacies() {
      try {
        // 1. Geocode current user address
        const location = await geocodeUserAddress(currentAddress);
        if (!isMounted) return;
        setUserLocation(location);

        // 2. Locate closest Droga Raia & Drogasil units
        const { pharmacies: nearby } = await findNearbyPharmacies(location.latitude, location.longitude);
        if (!isMounted) return;

        setPharmacies(nearby);
        const available = nearby.filter((p) => p.isAvailable);
        const firstAvailable = available[0] || nearby[0];
        if (firstAvailable && !selectedId) {
          setSelectedId(firstAvailable.id);
          if (onSelectPharmacy) {
            onSelectPharmacy(firstAvailable);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        setGeoError('Não foi possível carregar as farmácias no momento. Tente novamente.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPharmacies();

    return () => {
      isMounted = false;
    };
  }, [
    currentAddress.cep,
    currentAddress.street,
    currentAddress.number,
    currentAddress.city,
    currentAddress.state,
  ]);

  const topPharmacies = pharmacies.filter((p) => p.isAvailable);
  const otherPharmacies = pharmacies.filter((p) => !p.isAvailable);

  const handleSelectStore = (pharmacy: Pharmacy) => {
    if (pharmacy.isAvailable === false) {
      return;
    }
    setSelectedId(pharmacy.id);
    const storeObj = {
      id: pharmacy.id,
      brand: pharmacy.brand === 'Droga Raia' ? 'raia' : 'drogasil',
      name: pharmacy.name,
      address: pharmacy.address,
      neighborhood: pharmacy.neighborhood || '',
      city: pharmacy.city || '',
      uf: pharmacy.state || '',
      distance: pharmacy.formattedDistance,
      openingHours: pharmacy.openingHours ? pharmacy.openingHours[0] : 'Aberta • de 07h até 23h',
      pickupTime: pharmacy.pickupReadyTime || 'Pronto em até 1h',
      badge: pharmacy.badge,
    };
    try {
      localStorage.setItem('drogaraia_selected_pharmacy', JSON.stringify(storeObj));
      localStorage.setItem('drogaraia_delivery_mode', 'pickup');
    } catch {}
    if (onSelectPharmacy) onSelectPharmacy(pharmacy);
  };

  const renderPharmacyCard = (pharmacy: Pharmacy, isAvailable: boolean, isClosest: boolean) => {
    const isSelected = isAvailable && pharmacy.id === selectedId;
    const isRaia = pharmacy.brand === 'Droga Raia';

    return (
      <div
        key={pharmacy.id}
        className={`nearby-pharmacy-card ${isSelected ? 'nearby-pharmacy-card--selected' : ''} ${
          !isAvailable ? 'nearby-pharmacy-card--unavailable' : ''
        }`}
        onClick={() => {
          if (isAvailable) {
            handleSelectStore(pharmacy);
          }
        }}
        role="button"
        tabIndex={isAvailable ? 0 : -1}
        aria-disabled={!isAvailable}
      >
        {/* Top Row: Brand Logo + Badge */}
        <div className="nearby-pharmacy-card__brand-row">
          {isRaia ? (
            <div className="nearby-pharmacy-card__raia-brand">
              <RaiaIcon />
              <span className="nearby-pharmacy-card__raia-name">Raia</span>
            </div>
          ) : (
            <div className="nearby-pharmacy-card__raia-brand">
              <DrogasilIcon />
              <span className="nearby-pharmacy-card__raia-name">Drogasil</span>
            </div>
          )}

          {isClosest && (
            <span className="nearby-pharmacy-card__badge-pill">
              Mais próxima
            </span>
          )}
        </div>

        {/* Middle Section: Neighborhood and Full Street Address */}
        <div className="nearby-pharmacy-card__address-group">
          <div className="nearby-pharmacy-card__neighborhood">
            {pharmacy.neighborhood || pharmacy.city || 'São Paulo'}
          </div>
          <div className="nearby-pharmacy-card__street">
            {pharmacy.address}
            {pharmacy.neighborhood &&
            !pharmacy.address.toLowerCase().includes(pharmacy.neighborhood.toLowerCase())
              ? ` ${pharmacy.neighborhood}`
              : ''}
          </div>
        </div>

        {/* Bottom Row: Hours status in green + Solid Pin + Distance */}
        <div className="nearby-pharmacy-card__bottom-row">
          <span className="nearby-pharmacy-card__status">
            {(() => {
              const status = formatHoursStatus(pharmacy.openingHours);
              const rest = status.replace(/^Aberta/, '');
              return (
                <>
                  <span className="nearby-pharmacy-card__status-open">Aberta</span>
                  <span className="nearby-pharmacy-card__status-hours">{rest}</span>
                </>
              );
            })()}
          </span>
          <span className="nearby-pharmacy-card__distance-tag">
            <svg
              width="11"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: 4, flexShrink: 0 }}
            >
              <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            {pharmacy.formattedDistance}
          </span>
        </div>

        {/* Unavailable Warning Banner matching screenshot */}
        {!isAvailable && (
          <div className="nearby-pharmacy-card__unavailable-banner">
            <AlertTriangle
              size={20}
              className="nearby-pharmacy-card__unavailable-icon"
              strokeWidth={2}
            />
            <span className="nearby-pharmacy-card__unavailable-text">
              Nenhum produto disponível.
            </span>
          </div>
        )}

        {/* Right Chevron Arrow */}
        <div className="nearby-pharmacy-card__arrow" aria-hidden="true">
          <ChevronRight size={18} color="#334155" strokeWidth={2} />
        </div>
      </div>
    );
  };

  return (
    <section className={`nearby-pharmacies-section ${embedded ? 'nearby-pharmacies-section--embedded' : ''}`}>
      {/* 1. Header (optional if embedded) */}
      {showHeader && (
        <div className="nearby-pharmacies-header">
          <h3 className="nearby-pharmacies-title">
            <Store size={22} color="#007f91" />
            Farmácias próximas
          </h3>
          <p className="nearby-pharmacies-sub">
            Encontramos unidades próximas ao seu endereço.
          </p>
        </div>
      )}

      {/* Geolocation feedback error banner */}
      {geoError && (
        <div className="nearby-pharmacies-empty-box" style={{ padding: '10px 14px', marginBottom: 14 }}>
          <span style={{ fontSize: 13, color: '#c2410c' }}>{geoError}</span>
        </div>
      )}

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="nearby-pharmacies-skeleton-wrap">
          <div className="nearby-pharmacies-loading-bar">
            <span className="nearby-pharmacies-spinner" />
            <span>Localizando farmácias próximas ao seu endereço...</span>
          </div>
          <div className="nearby-pharmacies-skeleton-card" />
          <div className="nearby-pharmacies-skeleton-card" />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && pharmacies.length === 0 && (
        <div className="nearby-pharmacies-empty-box">
          <AlertCircle size={32} className="nearby-pharmacies-empty-icon" />
          <h4 className="nearby-pharmacies-empty-title">
            Não encontramos unidades Droga Raia ou Drogasil próximas a este endereço.
          </h4>
          <p className="nearby-pharmacies-empty-desc">
            Tente buscar por outro CEP ou conferir o endereço digitado.
          </p>
          {onAlterAddress && (
            <button
              type="button"
              className="nearby-pharmacies-empty-btn"
              onClick={onAlterAddress}
            >
              Alterar endereço
            </button>
          )}
        </div>
      )}

      {/* Content (Map & List) */}
      {!isLoading && pharmacies.length > 0 && (
        <>
          {/* Interactive Leaflet Map */}
          {showMap && userLocation && (
            <div ref={mapSectionRef}>
              <NearbyPharmaciesMap
                userLocation={userLocation}
                pharmacies={pharmacies}
                selectedPharmacyId={selectedId}
                onSelectPharmacy={handleSelectStore}
              />
            </div>
          )}

          {/* Botão de Alterar Endereço abaixo do Mapa */}
          {onAlterAddress && (
            <div className="nearby-pharmacies-map-alterar-wrap">
              <button
                type="button"
                className="nearby-pharmacies-map-alterar-btn"
                onClick={onAlterAddress}
                id="nearby-pharmacies-map-alterar-btn"
              >
                <MapPin size={16} strokeWidth={2.2} />
                <span>Alterar endereço</span>
              </button>
            </div>
          )}

          {/* Stores List: Top 3 Available Pharmacies (>= 3.5km) */}
          <div className="nearby-pharmacies-list">
            {topPharmacies.map((pharmacy, index) =>
              renderPharmacyCard(pharmacy, true, index === 0)
            )}
          </div>

          {/* Button: Escolher outra */}
          {otherPharmacies.length > 0 && (
            <div className="nearby-pharmacies-choose-other-wrap">
              <button
                type="button"
                className={`nearby-pharmacies-btn-choose-other ${
                  showOtherPharmacies ? 'nearby-pharmacies-btn-choose-other--active' : ''
                }`}
                onClick={() => setShowOtherPharmacies((prev) => !prev)}
                id="btn-escolher-outra"
              >
                <span>Escolher outra</span>
                <ChevronDown
                  size={18}
                  className={`nearby-pharmacies-choose-arrow ${
                    showOtherPharmacies ? 'nearby-pharmacies-choose-arrow--open' : ''
                  }`}
                />
              </button>
            </div>
          )}

          {/* Expanded List: Other Pharmacies with 'Nenhum produto disponível' banner */}
          {showOtherPharmacies && otherPharmacies.length > 0 && (
            <div className="nearby-pharmacies-list nearby-pharmacies-list--other">
              {otherPharmacies.slice(0, otherVisibleCount).map((pharmacy) =>
                renderPharmacyCard(pharmacy, false, false)
              )}

              {/* Show More from other pharmacies if more than otherVisibleCount */}
              {otherPharmacies.length > otherVisibleCount && (
                <div className="nearby-pharmacies-show-more-wrap">
                  <button
                    type="button"
                    className="nearby-pharmacies-btn-show-more"
                    onClick={() => setOtherVisibleCount((prev) => prev + 10)}
                  >
                    <span>Ver mais farmácias ({otherPharmacies.length - otherVisibleCount} unidades)</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default NearbyPharmacies;
