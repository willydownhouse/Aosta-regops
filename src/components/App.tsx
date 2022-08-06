import React, { useState } from 'react';
import GlobalStyles from '../styles/global';
import Notification from './Notification';
import { Container } from '../styles/utils';
import Footer from './Footer';
import Map from './Map';
import Navbar from './Navbar';
import { INotification } from '../interfaces/notification';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [notification, setNotification] = useState<INotification>({
    message: '',
    type: 'notif',
  });
  const [showStreetMap, setShowStreetMap] = useState<boolean>(true);
  const { user, isAuthenticated } = useAuth0();

  console.log('user', user);
  console.log('isLoggedIn:', isAuthenticated);

  return (
    <Container>
      <GlobalStyles />
      <Notification message={notification.message} type={notification.type} />
      <Navbar
        setShowStreetMap={setShowStreetMap}
        showStreetMap={showStreetMap}
        setNotification={setNotification}
      />
      <Map isStreetMap={showStreetMap} />
      <Footer />
    </Container>
  );
}

export default App;
