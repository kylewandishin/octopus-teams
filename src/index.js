import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
// import { msalConfig2 } from './msalConfig';
const msalConfig2 = {
  auth: {
    clientId: 'a731a9eb-9d55-4157-9b9a-31b757643645', // Replace this with your actual App ID (Client ID)
    authority: 'https://login.microsoftonline.com/organizations',
    redirectUri: 'http://localhost:3000/',
    extraQueryParameters: {
      prompt: 'login', // Optional: To force password prompt, if needed
    },
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig2);
// msalConfig.js


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
