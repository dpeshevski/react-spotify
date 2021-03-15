import config from '../config';

export default () => {
  const { clientId, clientSecret, authUrl } = config.api;
  const auth = `${clientId}:${clientSecret}`;

  const encodedAuth = btoa(auth);

  let payload = new URLSearchParams();
  payload.set('grant_type', 'client_credentials');

  return new Promise((resolve, reject) => {
    fetch(`${authUrl}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedAuth}`
      },
      method: 'POST',
      body: payload
    })
    .then(response => {
      if (response.ok) {
        return response.json()
          .then(data => resolve(data))
          .catch(error => resolve({}));
      } else {
        return response.text().then((text = 'Unknown error.') => reject(new Error(text)));
      }
    })
    .catch(error => reject(error));
  });
};
