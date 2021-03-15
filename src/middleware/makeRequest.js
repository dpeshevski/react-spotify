export default (path, requestOptions) => {
  let appSpotify = window.__APP_SPOTIFY__;

  return new Promise((resolve, reject) => {
    let options = {};

    if (requestOptions.method === 'GET') {
      options = {
        ...options,
        method: 'GET'
      }
    }

    if (requestOptions.method === 'POST') {
      options = {
        ...options,
        method: 'POST',
        body: JSON.stringify(requestOptions.data)
      };
    }

    fetch(`${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appSpotify.access_token}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
          .then(data => resolve(data))
          .catch(error => resolve({}));
      } else {
        return response.text().then((text = ' Unknown error.') => reject(new Error(text)));
      }
    })
    .catch(error => reject(error));
  });
};
