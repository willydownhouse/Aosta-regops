import React, { useEffect, useState } from 'react';
import { SMap } from '../styles/map';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from 'react-leaflet';
import { streetMap } from '../utils/map';
import GetCoords from './GetCoords';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useQuery } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchObs } from '../api';
import { IObservation, IServerOb } from '../interfaces/observation';
import Observation from './Observation';
import ModalComponent from './Modal';

type MapProps = {
  modalOpen: boolean;
  setModalOpen: (val: boolean) => void;
  setShowForm: (val: boolean) => void;
  data: IServerOb[];
  setSelectedOb: (val: IServerOb) => void;
};

function Map({
  modalOpen,
  setModalOpen,
  data,
  setShowForm,
  setSelectedOb,
}: MapProps) {
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
        zoom={10}
        scrollWheelZoom
      >
        {/* <GetCoords>
          {position => (
            <Marker position={[position.latitude, position.longitude]}>
              <Popup>
                <p>tere</p>
              </Popup> 
            </Marker>
          )}
        </GetCoords> */}

        {data.map(ob => {
          return (
            <Marker
              key={ob.id}
              position={[ob.coords.lat, ob.coords.long]}
              eventHandlers={{
                click: e => {
                  console.log(ob.id);
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
