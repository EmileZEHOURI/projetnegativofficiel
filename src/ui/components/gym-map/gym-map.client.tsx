import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import { GYMNASES } from "./gym-data"; // (recommandé si tu as séparé)

export default function GymMapClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const leafletIcon = useMemo(() => {
    if (!mounted) return null;

    return L.divIcon({
      html: `
      <div style="
        width:25px;
        height:25px;
        background-color:#f35f37; /* remplace par ta vraie couleur primary */
        border-radius:50%;
        border:3px solid white;
        box-shadow:0 0 6px rgba(0,0,0,0.25);
      "></div>
    `,
      className: "", // IMPORTANT sinon leaflet ajoute un style par défaut
      iconSize: [15, 15],
      iconAnchor: [9, 9],
    });
  }, [mounted]);

  // Évite les erreurs pendant l’hydratation / mount
  if (!mounted || !leafletIcon) return null;

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={12}
      scrollWheelZoom={false}
      className="h-[700px] w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {GYMNASES.map((gym) => (
        <Marker
          key={gym.name}
          position={[gym.lat, gym.lng]}
          icon={leafletIcon} // ✅ icon explicite
        >
          <Popup>
            <strong>{gym.name}</strong>
            <br />
            {gym.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
