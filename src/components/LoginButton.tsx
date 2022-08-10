import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { INotification } from '../interfaces/notification';
import {
  displayErrorNotification,
  displayNotification,
} from '../utils/displayNotifications';
import { Button } from '../styles/buttons';

type LoginButtonProps = {
  setNotification: (val: INotification) => void;
};

const LoginButton = ({ setNotification }: LoginButtonProps) => {
  const { logout, isAuthenticated, loginWithPopup } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();

      displayNotification('You succesfully logged in', setNotification);
    } catch (err) {
      displayErrorNotification(err, setNotification);
    }
  };
  const handleLogout = () => {
    logout();
    displayNotification('You logged out', setNotification);
  };

  return (
    <Button
      $bgColor="transparent"
      onClick={() => (isAuthenticated ? handleLogout() : handleLogin())}
    >
      {isAuthenticated ? 'sign out' : 'sign in/up'}
    </Button>
  );
};

export default LoginButton;
