import { createStore } from 'redux';
import reducers from './reducers/reducers';

const defaultState = {
  user: {
    username: '',
    loggedIn: false,
  },
};

export const store = createStore(reducers, defaultState);
