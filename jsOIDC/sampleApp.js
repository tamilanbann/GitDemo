import React, { useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { userManager } from './oidcService';
import Login from './Login'; // Your login component
import Dashboard from './Dashboard'; // Your protected component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      const user = await userManager.getUser();
      setIsAuthenticated(!!user);
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      render={() =>
        isAuthenticated ? (
          <Route path="/dashboard" component={Dashboard} />
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

export default App;
