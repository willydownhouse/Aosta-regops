import React, { useState } from 'react';
import { CoordsProvider } from '../context/coordsContext';
import { ICoords, INotification } from '../interfaces/utils';
import ModalComponent from './Modal';
import NewObForm from './NewObForm';
import Map from './Map';

type MainProps = {
  obModalOpen: boolean;
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
};

function Main({ obModalOpen, setNotification, setObModalOpen }: MainProps) {
  const [coords, setCoords] = useState<ICoords | null>(null);

  return (
    <CoordsProvider value={{ coords, setCoords }}>
      <Map />
      <ModalComponent $open={obModalOpen}>
        <NewObForm
          setNotification={setNotification}
          setObModalOpen={setObModalOpen}
        />
      </ModalComponent>
    </CoordsProvider>
  );
}

export default Main;
