import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_AUDIENCE } from './utils/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    clientId={AUTH0_CLIENT_ID as string}
    domain={AUTH0_DOMAIN as string}
    scope="openid email"
    redirectUri={window.location.origin}
    audience={AUTH0_AUDIENCE}
  >
    <App />
  </Auth0Provider>
);
