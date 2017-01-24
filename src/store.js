import { compose, createStore, applyMiddleWare } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import reducers from './reducers/reducers';

const defaultState = {
  user: {
    username: '',
    loggedIn: false,
  },
};

const routes = {
  '/': {
    title: 'Home',
  },
  '/podcasts': {
    title: 'All Podcasts',
  },
  '/podcasts/:user': {
    title: 'Users Podcasts',
  },
};

const {
  routerEnhancer,
  routerMiddleware,
} = routerForBrowser({
  // The configured routes. Required.
  routes,
  // The basename for all routes. Optional.
  basename: '/',
});


const store = createStore(
  reducers,
  defaultState,
  compose(
    routerEnhancer,
    applyMiddleWare(routerMiddleware)
  )
);

export default store;
