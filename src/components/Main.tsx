import React, { useEffect, useState } from 'react';
import { CoordsProvider } from '../context/coordsContext';
import { ICoords, INotification } from '../interfaces/utils';
import ModalComponent from './Modal';
import NewObForm from './NewObForm';
import Map from './Map';
import { IServerOb } from '../interfaces/observation';
import Observation from './Observation';
import { useQuery } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchObs } from '../api';

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
  const [selectedOb, setSelectedOb] = useState<IServerOb | null>(null);
  const [obs, setObs] = useState<IServerOb[]>([]);

  //const { data } = useQuery(['obs'], fetchObs);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ob') as string);
    console.log('data:');
    console.log(data);
    if (!data) return;
    setObs(data);

    //localStorage.setItem('ob', JSON.stringify(data.data));
  }, []);

  return (
    <CoordsProvider value={{ coords, setCoords }}>
      <Map
        modalOpen={obModalOpen}
        setModalOpen={setObModalOpen}
        data={obs}
        setShowForm={setShowForm}
        setSelectedOb={setSelectedOb}
      />
      <ModalComponent $open={obModalOpen}>
        {showForm ? (
          <NewObForm
            setNotification={setNotification}
            setObModalOpen={setObModalOpen}
          />
        ) : (
          <Observation
            ob={selectedOb}
            setModalOpen={setObModalOpen}
            setShowForm={setShowForm}
          />
        )}
      </ModalComponent>
    </CoordsProvider>
  );
}

export default Main;
