import React from 'react';
import { useMapEvents } from 'react-leaflet';
import { useCoords } from '../context/coordsContext';

type GetCoordsProps = {
  children: (val: {
    latitude: number;
    longitude: number;
  }) => JSX.Element | null;
};

const GetCoords = ({ children }: GetCoordsProps) => {
  const { coords, setCoords } = useCoords();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      setCoords({
        latitude: lat,
        longitude: lng,
      });
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return coords && children(coords);
};

export default GetCoords;
