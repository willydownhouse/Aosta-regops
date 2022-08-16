import React, { useEffect, useState } from 'react';
import { SMap } from '../styles/map';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Notification from './Notification';

type MapProps = {
  modalOpen: boolean;
};

function Map({ modalOpen }: MapProps) {
  return (
    <SMap id="map">
      <MapContainer
        style={{
          height: '100%',
          width: '100%',
          /* zIndex: 1, */
          isolation: 'isolate',
        }}
        center={[45.73378, 7.31233]}
        zoom={10}
        scrollWheelZoom
      >
        <GetCoords modalOpen={modalOpen} />

        <TileLayer attribution={streetMap.attribute} url={streetMap.url} />
      </MapContainer>
    </SMap>
  );
}

export default Map;

type GetCoordsProps = {
  modalOpen: boolean;
};

const GetCoords = ({ modalOpen }: GetCoordsProps) => {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      console.log('lat:', lat, 'lng:', lng, 'modal open', modalOpen);

      setPosition({
        latitude: lat,
        longitude: lng,
      });
      // map.mouseEventToLatLng(e)
      // map.locate();
      map.flyTo(e.latlng, map.getZoom());
    },

    /* locationfound(e) {
        const { lat, lng } = e.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
        map.flyTo(e.latlng, map.getZoom());
      }, */
  });

  if (modalOpen) return null;

  return (
    position && (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
      />
    )
  );
};

const terrainMap = {
  attribute:
    'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
};
const streetMap = {
  attribute:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
};
