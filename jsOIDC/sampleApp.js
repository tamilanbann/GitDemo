import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import userManager from './userManager';
import Login from './Login'; // Your login component
import Dashboard from './Dashboard'; // Your protected component

const App = () => {
  const isAuthenticated = !!userManager.getUser() && !userManager.getUser().expired;

  const handleLogin = () => {
    userManager.signinRedirect();
  };

  const handleLogout = () => {
    userManager.signoutRedirect();
  };

  return (
    <Router>
      <Route
        path="/login"
        render={() => (isAuthenticated ? <Redirect to="/dashboard" /> : <Login />)}
      />
      <Route
        path="/dashboard"
        render={() => (isAuthenticated ? <Dashboard /> : <Redirect to="/login" />)}
      />
    </Router>
  );
};

export default App;
