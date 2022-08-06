import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './utils/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    clientId={AUTH0_CLIENT_ID as string}
    domain={AUTH0_DOMAIN as string}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
