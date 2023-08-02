// msalConfig.js
const msalConfig2 = {
    auth: {
      clientId: 'a731a9eb-9d55-4157-9b9a-31b757643645', // Replace this with your actual App ID (Client ID)
      authority: 'https://login.microsoftonline.com/organizations',
      redirectUri: 'http://localhost:3000/',
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
    },
  };
  
  export default msalConfig2;
  