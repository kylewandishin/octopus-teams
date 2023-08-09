import React, { useEffect, useState } from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { Box } from '@mui/material';
import {Loader} from 'react-loaders';
import "../../../loaders.scss"
import { useNavigate } from 'react-router-dom';
function Signin() {
  const { instance, accounts } = useMsal();
  const history = useNavigate();

  useEffect(()=>{
    const checkAuthenticatedAndRedirect = async () => {
      try {
        // Check if there's an ongoing interaction
        const accounts = instance.getAllAccounts();
        console.log(accounts)
        if (accounts.length === 0) {
          // User is not authenticated, initiate the login process
          await instance.loginRedirect();
        } else {
          // User is already authenticated, redirect to dashboard
          console.warn(accounts)
          history(-1); // Redirect to the dashboard route
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    checkAuthenticatedAndRedirect();
  },[instance])


  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Loader type="pacman" /> 
      <h2>Redirecting to Microsoft authentication...</h2>
    </Box>
  );
}

export default Signin;
