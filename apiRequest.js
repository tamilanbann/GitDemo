// Inside a React component or a function
const getToken = async () => {
  const clientId = 'your_client_id';
  const clientSecret = 'your_client_secret';
  const tokenEndpoint = 'https://oauth.example.com/token';

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const accessToken = data.access_token;
      // Use the access token to make API requests
      return accessToken;
    } else {
      throw new Error('Failed to obtain access token');
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
    // Handle errors
  }
};

// Call getToken to get the access token
getToken().then(accessToken => {
  // Use the accessToken to make API requests
  // For example:
  fetch('https://api.example.com/protectedData', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      // Handle the protected data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching protected data:', error);
    });
});
