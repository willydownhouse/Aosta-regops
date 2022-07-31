import React, { useEffect, useState } from 'react';
import { SMap } from '../styles/map';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Notification from './Notification';

type MapProps = {
  isStreetMap: boolean;
};

function Map({ isStreetMap }: MapProps) {
  useEffect(() => {
    console.log('show street map:', isStreetMap);
  });

  return (
    <SMap id="map">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[45.73378, 7.31233]}
        zoom={10}
        scrollWheelZoom
      >
        <TileLayer
          attribution={isStreetMap ? streetMap.attribute : terrainMap.attribute}
          url={isStreetMap ? streetMap.url : terrainMap.url}
        />
      </MapContainer>
    </SMap>
  );
}

export default Map;

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
