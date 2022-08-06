import React from 'react';
import { SNavBar, StyledA } from '../styles/navbar';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { INotification } from '../interfaces/notification';
import { displayErrorNotification } from '../utils/displayNotifications';
import { REACT_APP_OFFLINE_API_KEY } from '../utils/config';

type NavbarProps = {
  setShowStreetMap: (val: boolean) => void;
  showStreetMap: boolean;
  setNotification: (val: INotification) => void;
};

function Navbar({
  setShowStreetMap,
  showStreetMap,
  setNotification,
}: NavbarProps) {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const testHealthRoute = async () => {
    try {
      console.log('tere');

      const token = await getAccessTokenSilently();

      const res = await fetch('http://localhost:3001/dev/health', {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-api-key': `${REACT_APP_OFFLINE_API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();

      console.log(data);
    } catch (err) {
      displayErrorNotification(err, setNotification);
    }
  };
  return (
    <SNavBar>
      <h4>
        <StyledA>A</StyledA> RegObs
      </h4>
      {/* <div>
        <label>Terrain map</label>
        <input
          type="checkbox"
          onChange={() => setShowStreetMap(!showStreetMap)}
        />
      </div> */}
      {isAuthenticated ? (
        <button onClick={testHealthRoute}>Test health route</button>
      ) : null}
      {isAuthenticated ? <h4>Ciao {user?.nickname}</h4> : null}
      <div>
        <LoginButton setNotification={setNotification} />
      </div>
    </SNavBar>
  );
}

export default Navbar;
