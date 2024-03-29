import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { getUser } from './oidcService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const authenticate = async () => {
      const user = await getUser();
      setIsAuthenticated(!!user);
      setIsLoading(false);
    };

    authenticate();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
