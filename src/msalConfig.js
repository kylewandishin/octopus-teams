import { LogLevel } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '{CLIENT_ID}', // Replace this with your actual App ID (Client ID)
    authority: 'https://login.microsoftonline.com/{TENANT_ID}/',
    redirectUri: 'http://localhost:3000/dashboard',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  // system: {
  //   loggerOptions: {
  //     loggerCallback: (level, message, containsPii) => {
  //       if (containsPii) {
  //         return;
  //       }
  //       switch (level) {
  //         case LogLevel.Error:
  //           console.error(message);
  //           return;
  //         case LogLevel.Info:
  //           console.info(message);
  //           return;
  //         case LogLevel.Verbose:
  //           console.debug(message);
  //           return;
  //         case LogLevel.Warning:
  //           console.warn(message);
  //           return;
  //         default:
  //           return;
  //       }
  //     },
  //   },
  // },
};

export default msalConfig;
