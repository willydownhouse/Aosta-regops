import React from 'react';
import { SMap } from '../styles/map';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { streetMap } from '../utils/map';
import GetCoords from './GetCoords';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  modalOpen: boolean;
};

function Map() {
  return (
    <SMap id="map">
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
          isolation: 'isolate',
        }}
        center={[45.73378, 7.31233]}
        zoom={10}
        scrollWheelZoom
      >
        <GetCoords>
          {position => (
            <Marker position={[position.latitude, position.longitude]}>
              <Popup>
                <p>tere</p>
              </Popup>
            </Marker>
          )}
        </GetCoords>

        <TileLayer attribution={streetMap.attribute} url={streetMap.url} />
      </MapContainer>
    </SMap>
  );
}

export default Map;
