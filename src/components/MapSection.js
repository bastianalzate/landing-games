import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
    ssr: false,
  });

  const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
    ssr: false,
  });

  const Marker = dynamic(() => import("react-leaflet").then((module) => module.Marker), {
    ssr: false,
  });

  const Popup = dynamic(() => import("react-leaflet").then((module) => module.Popup), {
    ssr: false,
  });

  const position = [51.505, -0.09]; // Latitud y longitud de la ubicación del marcador

  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    const L = require('leaflet');

    setCustomIcon(
      new L.Icon({
        iconUrl: '/marker-icon.png',
        iconRetinaUrl: '/marker-icon.png',
        iconAnchor: [20, 20],
        popupAnchor: [-3, -76],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [40, 40],
        // className: 'leaflet-div-icon'
      })
    );
  }, []);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "50vh" }} className="w-full">

      <TileLayer
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {customIcon && <Marker position={position} icon={customIcon}>
        <Popup>Ubicación de mi sitio web</Popup>
      </Marker>}
    </MapContainer>
  );
};

export default LeafletMap;
