import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Pharmacy, GeocodedLocation } from '../../services/pharmacyLocationService';

interface NearbyPharmaciesMapProps {
  userLocation: GeocodedLocation;
  pharmacies: Pharmacy[];
  selectedPharmacyId?: string;
  onSelectPharmacy?: (pharmacy: Pharmacy) => void;
}

export const NearbyPharmaciesMap: React.FC<NearbyPharmaciesMapProps> = ({
  userLocation,
  pharmacies,
  selectedPharmacyId,
  onSelectPharmacy,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: [userLocation.latitude, userLocation.longitude],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: false,
    });
    mapInstanceRef.current = map;

    // Add high-resolution OpenStreetMap TileLayer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // 1. Add User Location Marker (Pulse + Pin)
    const userPinIcon = L.divIcon({
      className: 'custom-user-leaflet-pin',
      html: `
        <div class="user-map-pin-pulse"></div>
        <div class="user-map-pin-core" title="Seu endereço cadastrado">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" stroke="#1c1c1c" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5" fill="#1c1c1c"/>
          </svg>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });

    const userMarker = L.marker([userLocation.latitude, userLocation.longitude], {
      icon: userPinIcon,
      zIndexOffset: 1000,
      title: `Seu endereço: ${userLocation.displayName}`,
    }).addTo(map);

    // 2. Add Pharmacy Markers
    markersRef.current = {};
    const bounds = L.latLngBounds([[userLocation.latitude, userLocation.longitude]]);

    pharmacies.forEach((pharmacy) => {
      bounds.extend([pharmacy.latitude, pharmacy.longitude]);
      const isRaia = pharmacy.brand === 'Droga Raia';
      const bgColor = isRaia ? '#006877' : '#d91438';
      const isSelected = pharmacy.id === selectedPharmacyId;

      const storeIcon = L.divIcon({
        className: `custom-pharmacy-leaflet-pin ${isSelected ? 'custom-pharmacy-leaflet-pin--selected' : ''}`,
        html: `
          <div class="store-map-pin-wrap" style="background-color: ${bgColor}; border: 2.5px solid #ffffff;">
            <span class="store-map-pin-symbol">❖</span>
          </div>
        `,
        iconSize: isSelected ? [38, 38] : [32, 32],
        iconAnchor: isSelected ? [19, 38] : [16, 32],
      });

      const marker = L.marker([pharmacy.latitude, pharmacy.longitude], {
        icon: storeIcon,
        title: `${pharmacy.name} - ${pharmacy.formattedDistance}${!pharmacy.isAvailable ? ' (Indisponível)' : ''}`,
      }).addTo(map);

      marker.on('click', () => {
        if (pharmacy.isAvailable !== false && onSelectPharmacy) {
          onSelectPharmacy(pharmacy);
        }
      });

      markersRef.current[pharmacy.id] = marker;
    });

    // Fit map bounds to show both user and nearby pharmacies nicely
    if (pharmacies.length > 0) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [userLocation, pharmacies]);

  // Handle selected store changes (center and open popup)
  useEffect(() => {
    if (!selectedPharmacyId || !mapInstanceRef.current) return;
    const marker = markersRef.current[selectedPharmacyId];
    if (marker) {
      const latLng = marker.getLatLng();
      mapInstanceRef.current.setView(latLng, 15, { animate: true });
      marker.openPopup();
    }
  }, [selectedPharmacyId]);

  return (
    <div className="nearby-pharmacies-map-wrap">
      <div ref={mapContainerRef} className="nearby-pharmacies-map-canvas" id="pharmacies-map-canvas" />
      <div className="nearby-pharmacies-map-legend">
        <div className="map-legend-item">
          <span className="map-legend-dot map-legend-dot--user"></span>
          <span>Seu endereço</span>
        </div>
        <div className="map-legend-item">
          <span className="map-legend-dot map-legend-dot--raia"></span>
          <span>Droga Raia</span>
        </div>
        <div className="map-legend-item">
          <span className="map-legend-dot map-legend-dot--drogasil"></span>
          <span>Drogasil</span>
        </div>
      </div>
    </div>
  );
};
