const oidcConfig = {
  authority: 'YOUR_OIDC_AUTHORITY_URL',
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://localhost:3000/callback', // Callback URL after authentication
  response_type: 'code',
  scope: 'openid profile email', // Define required scopes
  post_logout_redirect_uri: 'http://localhost:3000/',
};

export default oidcConfig;
