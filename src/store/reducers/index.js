import appReducer from './app';
import albumsReducer from './albums';

function stateForKey(state, key) {
  if (state) {
    return state[key];
  }

  return undefined;
}

export default (state, action) => {
  return {
    app: appReducer(stateForKey(state, 'app'), action),
    albums: albumsReducer(stateForKey(state, 'albums'), action),
  };
};
