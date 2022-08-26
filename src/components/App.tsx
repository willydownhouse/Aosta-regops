import React, { useEffect, useState } from 'react';
import GlobalStyles from '../styles/global';
import Notification from './Notification';
import { Container } from '../styles/utils';
import Footer from './Footer';
import Navbar from './Navbar';
import { INotification } from '../interfaces/utils';
import { useAuth0 } from '@auth0/auth0-react';
import Theme from './Theme';
import Main from './Main';

function App() {
  const [notification, setNotification] = useState<INotification>({
    message: '',
    type: 'notif',
  });
  const [obModalOpen, setObModalOpen] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(true);

  //const { user } = useAuth0();

  // useEffect(() => {
  //   console.log('user');
  //   console.log(user);
  // }, [user]);

  useEffect(() => {
    function displayModal(e: MouseEvent) {
      if (!(e.target as HTMLElement).classList.contains('overlay')) return;

      setObModalOpen(false);
      setShowForm(true);
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
        <Main
          setShowForm={setShowForm}
          showForm={showForm}
          obModalOpen={obModalOpen}
          setNotification={setNotification}
          setObModalOpen={setObModalOpen}
        />
        <Footer />
      </Container>
    </Theme>
  );
}

export default App;
