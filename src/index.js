import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="490238507255-ukv5vvh2u1s2e7371n19t8275out06la.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
 </React.StrictMode>
);
