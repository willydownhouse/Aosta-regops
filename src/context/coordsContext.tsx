import { createContext, useContext } from 'react';
import { ICoords } from '../interfaces/utils';

const coordsContext = createContext<{
  coords: ICoords;
  setCoords: (val: ICoords) => void;
}>({
  coords: { latitude: 0, longitude: 0 },
  setCoords: () => 1,
});

export const CoordsProvider = coordsContext.Provider;

export const useCoords = () => useContext(coordsContext);
