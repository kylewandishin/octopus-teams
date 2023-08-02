// src/ProtectedRoute.js
import React from 'react';
import { Route,Link } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { accounts } = useMsal();

  return (
    <Route
      {...rest}
      render={(props) =>
        accounts.length ? <Component {...props} /> : <Link to="/" />
      }
    />
  );
};

export default ProtectedRoute;
