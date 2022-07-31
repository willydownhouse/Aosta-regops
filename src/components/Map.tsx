import React, { useEffect, useState } from 'react';
import { SMap } from '../styles/map';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 45.73378,
    longitude: 7.31233,
  });
  useEffect(() => {
    console.log('coords');
    console.log(coords);
  });
  useEffect(() => {
    getYourPosition()
      .then(position => {
        const { latitude, longitude } = checkPositionObject(position);

        setCoords({
          latitude,
          longitude,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <SMap id="map">
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[coords.latitude, coords.longitude]}
        zoom={11}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </SMap>
  );
}

export default Map;

function getYourPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function checkPositionObject(position: unknown) {
  if (!(position instanceof GeolocationPosition)) {
    throw new Error('Not a valid position object');
  }

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
}
