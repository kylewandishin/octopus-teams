// src/ProtectedRoute.js
import React from 'react';
import { useEffect } from 'react';
// import { Route, Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { instance, accounts } = useMsal();

    // useEffect(() => {
    //   if (!accounts.length) {
    //     instance.loginRedirect();
    //   }
    // }, [instance, accounts]);
  return (
    <></>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     accounts.length ? <Component {...props} /> : <Navigate to="/" />
    //   }
    // />
  );
};

export default ProtectedRoute;
