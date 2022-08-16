import React, { MutableRefObject, useEffect, useState, useRef } from 'react';
import GlobalStyles from '../styles/global';
import Notification from './Notification';
import { Container } from '../styles/utils';
import Footer from './Footer';
import Map from './Map';
import Navbar from './Navbar';
import { INotification } from '../interfaces/notification';
import { useAuth0 } from '@auth0/auth0-react';
import Theme from './Theme';

import ModalComponent from './Modal';
import NewObForm from './NewObForm';

function App() {
  const [notification, setNotification] = useState<INotification>({
    message: '',
    type: 'notif',
  });
  const [obModalOpen, setObModalOpen] = useState<boolean>(false);

  const { user, isAuthenticated } = useAuth0();

  /*  const ref = useRef() as MutableRefObject<HTMLDivElement>; */

  useEffect(() => {
    console.log('user', user);
    console.log('isLoggedIn:', isAuthenticated);
  }, [user]);

  useEffect(() => {
    function displayModal(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('.modal')) return;

      setObModalOpen(false);
    }

    if (!obModalOpen) return;

    document.body.addEventListener('click', displayModal, { capture: true });

    return () => {
      document.body.removeEventListener('click', displayModal, {
        capture: true,
      });
    };
  }, [obModalOpen]);

  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Notification message={notification.message} type={notification.type} />
        <Navbar
          obModalOpen={obModalOpen}
          setObModalOpen={setObModalOpen}
          setNotification={setNotification}
        />
        <Map modalOpen={obModalOpen} />
        <Footer />
        <ModalComponent $open={obModalOpen}>
          <NewObForm
            setNotification={setNotification}
            setObModalOpen={setObModalOpen}
          />
        </ModalComponent>
      </Container>
    </Theme>
  );
}

export default App;
