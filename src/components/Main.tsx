import React, { useEffect, useState } from 'react';
import { CoordsProvider } from '../context/coordsContext';
import { ICoords, INotification } from '../interfaces/utils';
import ModalComponent from './Modal';
import NewObForm from './NewObForm';
import Map from './Map';
import { IServerOb } from '../interfaces/observation';
import Observation from './Observation';

type MainProps = {
  obModalOpen: boolean;
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
  showForm: boolean;
  setShowForm: (val: boolean) => void;
};

function Main({
  obModalOpen,
  setNotification,
  setObModalOpen,
  setShowForm,
  showForm,
}: MainProps) {
  const [coords, setCoords] = useState<ICoords | null>(null);

  const [data, setData] = useState<IServerOb[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ob') as string);
    console.log('data:');
    console.log(data);

    setData(data);

    //localStorage.setItem('ob', JSON.stringify(data.data));
  }, []);

  return (
    <CoordsProvider value={{ coords, setCoords }}>
      <Map
        modalOpen={obModalOpen}
        setModalOpen={setObModalOpen}
        data={data}
        setShowForm={setShowForm}
      />
      <ModalComponent $open={obModalOpen}>
        {showForm ? (
          <NewObForm
            setNotification={setNotification}
            setObModalOpen={setObModalOpen}
          />
        ) : (
          <Observation ob={data[0]} />
        )}
      </ModalComponent>
    </CoordsProvider>
  );
}

export default Main;
