import config from '../config';

import makeRequest from '../middleware/makeRequest';

const {
  api: { baseUrl },
  endpoints: {
    newReleased: newReleasedPath,
    featuredPlaylists: featuredPlaylistsPath,
    categories: categoriesPath
  }
} = config;

function newReleased() {
  return makeRequest(`${baseUrl}/browse/${newReleasedPath}`, { method: 'GET' });
}

function featuredPlaylists() {
  return makeRequest(`${baseUrl}/browse/${featuredPlaylistsPath}`, { method: 'GET' });
}

function categories() {
  return makeRequest(`${baseUrl}/browse/${categoriesPath}`, { method: 'GET' });
}

export {
  newReleased,
  featuredPlaylists,
  categories
};