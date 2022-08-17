import { createContext, useContext } from 'react';
import { ICoords } from '../interfaces/utils';

const coordsContext = createContext<{
  coords: ICoords | null;
  setCoords: (val: ICoords | null) => void;
}>({
  coords: null,
  setCoords: () => 1,
});

export const CoordsProvider = coordsContext.Provider;

export const useCoords = () => useContext(coordsContext);
