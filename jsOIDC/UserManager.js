import { UserManager, WebStorageStateStore } from 'oidc-client';
import oidcConfig from './oidcConfig';

const userManager = new UserManager({
  ...oidcConfig,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

export default userManager;
