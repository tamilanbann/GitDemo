import { UserManager } from 'oidc-client';
import oidcConfig from './oidcConfig';

const userManager = new UserManager(oidcConfig);

const getUser = async () => {
  const user = await userManager.getUser();
  if (!user || user.expired) {
    try {
      await userManager.signinRedirect();
    } catch (error) {
      console.error('Error in sign-in redirect:', error);
    }
  }
  return user;
};

const signout = () => {
  userManager.signoutRedirect();
};

export { userManager, getUser, signout };
