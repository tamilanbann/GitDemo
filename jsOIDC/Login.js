import React, { useEffect } from 'react';
import { userManager } from './oidcService';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const completeLogin = async () => {
      await userManager.signinRedirectCallback();
      const { state } = location;
      const redirectPath = state?.from || '/'; // Default redirect path if state.from is undefined

      history.push(redirectPath);
    };

    completeLogin();
  }, [history, location]);

  return <div>Logging in...</div>;
};

export default Login;
