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
  const [token, setToken] = useState<string>('');

  const { getAccessTokenSilently } = useAuth0();

  const { data } = useQuery(['obs'], fetchObs);

  useEffect(() => {
    //const data = JSON.parse(localStorage.getItem('ob') as string);
    console.log('data:');
    console.log(data);
    if (!data) return;
    setObs(data.data);

    //localStorage.setItem('ob', JSON.stringify(data.data));
  }, [data]);

  useEffect(() => {
    getAccessTokenSilently()
      .then(res => setToken(res))
      .catch(() => console.log('not logged in'));
  }, []);

  return (
    <CoordsProvider value={{ coords, setCoords }}>
      <Map
        setModalOpen={setObModalOpen}
        data={obs}
        setShowForm={setShowForm}
        setSelectedOb={setSelectedOb}
      />
      <ModalComponent $open={obModalOpen}>
        {showForm ? (
          <NewObForm
            token={token}
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
