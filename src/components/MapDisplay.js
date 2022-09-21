import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import PopupPoint from './PopupPoint';
const MapDisplay = () => {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/farmacias')
      .then((res) => res.json())
      .then((data) => setFarmacias(data));
  }, []);

  return (
    <main className="container py-3">
      <h5 className="mt-2">Mapa de Farmácias</h5>
      <MapContainer
        center={[-27.670662768652303, -50.09056702154762]}
        zoom={7.4}
        scrollWheelZoom={true}
        style={{ minHeight: '600px', maxWidth: '90vw' }}
        className="mb-3"
      >
        {farmacias.map((farmacia, index) => {
          if (index !== 0) {
            const {
              informacoes: {
                razaoSocial,
                CNPJ,
                nomeFantasia,
                email,
                telefone,
                celular,
              },
              geoLoc,
            } = farmacia;
            return (
              <div key={farmacia.id}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={geoLoc} className="bg-main">
                  <PopupPoint
                    razaoSocial={razaoSocial}
                    CNPJ={CNPJ}
                    nomeFantasia={nomeFantasia}
                    email={email}
                    telefone={telefone}
                    celular={celular}
                  />
                </Marker>
              </div>
            );
          }
          return null;
        })}
      </MapContainer>
    </main>
  );
};

export default MapDisplay;
