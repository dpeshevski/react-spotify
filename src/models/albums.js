import config from '../config';

import makeRequest from '../middleware/makeRequest';

function newReleased() {
  const {
    api: { baseUrl },
    endpoints: { newReleased }
  } = config;
  return makeRequest(`${baseUrl}/browse/${newReleased}`, { method: 'GET' });
}

function featuredPlaylists() {
  const {
    api: { baseUrl },
    endpoints: { featuredPlaylists }
  } = config;

  return makeRequest(`${baseUrl}/browse/${featuredPlaylists}`, { method: 'GET' });
}

function categories() {
  const {
    api: { baseUrl },
    endpoints: { categories }
  } = config;

  return makeRequest(`${baseUrl}/browse/${categories}`, { method: 'GET' });
}

export {
  newReleased,
  featuredPlaylists,
  categories
};