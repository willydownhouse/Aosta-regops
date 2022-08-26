import React from 'react';
import { SMap } from '../styles/map';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { streetMap } from '../utils/map';
import GetCoords from './GetCoords';
import 'leaflet/dist/leaflet.css';
import { useAuth0 } from '@auth0/auth0-react';
import { IServerOb } from '../interfaces/observation';
import { useTheme } from 'styled-components';

type MapProps = {
  setModalOpen: (val: boolean) => void;
  setShowForm: (val: boolean) => void;
  data: IServerOb[];
  setSelectedOb: (val: IServerOb) => void;
};

L.Icon.Default.imagePath = 'img/';

function Map({ setModalOpen, data, setShowForm, setSelectedOb }: MapProps) {
  const { isAuthenticated } = useAuth0();
  const theme = useTheme();

  if (!data) return null;
  return (
    <SMap id="map">
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
          isolation: 'isolate',
        }}
        center={[45.73378, 7.31233]}
        zoom={theme.screenWidth < 600 ? 8 : 10}
        scrollWheelZoom
      >
        {isAuthenticated ? (
          <GetCoords>
            {position => (
              <Marker position={[position.latitude, position.longitude]}>
                <Popup>
                  <p>tere</p>
                </Popup>
              </Marker>
            )}
          </GetCoords>
        ) : null}

        {data.map(ob => {
          return (
            <Marker
              key={ob.id}
              position={[ob.coords.lat, ob.coords.long]}
              eventHandlers={{
                click: () => {
                  setModalOpen(true);
                  setShowForm(false);
                  setSelectedOb(ob);
                },
              }}
            />
          );
        })}

        <TileLayer attribution={streetMap.attribute} url={streetMap.url} />
      </MapContainer>
    </SMap>
  );
}

export default Map;
