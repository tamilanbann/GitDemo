import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { userManager } from './oidcService';
import Login from './Login'; // Your login component
import Dashboard from './Dashboard'; // Your protected component

const App = () => {
  const handleLogout = () => {
    userManager.signoutRedirect();
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
