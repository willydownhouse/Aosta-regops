import React from 'react';
import { SNavBar, StyledA } from '../styles/navbar';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { INotification } from '../interfaces/notification';
import { displayErrorNotification } from '../utils/displayNotifications';
import {
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  REACT_APP_OFFLINE_API_KEY,
} from '../utils/config';
import { FlexWrapper } from '../styles/utils';
import { Button } from '../styles/buttons';

type NavbarProps = {
  setShowStreetMap: (val: boolean) => void;
  showStreetMap: boolean;
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
  obModalOpen: boolean;
};

function Navbar({
  setShowStreetMap,
  showStreetMap,
  setNotification,
  setObModalOpen,
  obModalOpen,
}: NavbarProps) {
  const { isAuthenticated, user } = useAuth0();

  return (
    <SNavBar>
      <h5>
        <StyledA>A</StyledA> RegObs
      </h5>
      {isAuthenticated ? (
        <div>
          <Button
            onClick={() => setObModalOpen(!obModalOpen)}
            $bgColor="transparent"
          >
            New observation
          </Button>
        </div>
      ) : null}

      <div>
        <LoginButton setNotification={setNotification} />
      </div>
    </SNavBar>
  );
}

export default Navbar;

// const testHealthRoute = async () => {
//   try {
//     const token = await getAccessTokenSilently({});

//     const res = await fetch('http://localhost:3001/dev/health', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'x-api-key': `${REACT_APP_OFFLINE_API_KEY}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     const data = await res.json();
//     console.log('data from request');
//     console.log(data);
//   } catch (err) {
//     displayErrorNotification(err, setNotification);
//   }
// };
