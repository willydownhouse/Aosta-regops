import React from 'react';
import { SNavBar, StyledA } from '../styles/navbar';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { INotification } from '../interfaces/utils';
import { Button } from '../styles/buttons';

type NavbarProps = {
  setNotification: (val: INotification) => void;
  setObModalOpen: (val: boolean) => void;
  obModalOpen: boolean;
};

function Navbar({ setNotification, setObModalOpen, obModalOpen }: NavbarProps) {
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
