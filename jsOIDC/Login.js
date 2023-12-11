import React, { useEffect } from 'react';
import userManager from './userManager';

const Login = () => {
  useEffect(() => {
    const login = async () => {
      try {
        await userManager.signinRedirect();
      } catch (error) {
        console.error('Error during login redirect:', error);
      }
    };

    login();
  }, []);

  return (
    <div>
      <p>Redirecting to login...</p>
      {/* You can add a loading spinner or other UI elements here */}
    </div>
  );
};

export default Login;
