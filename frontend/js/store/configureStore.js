/* eslint no-underscore-dangle: [0]*/

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reflyApp from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reflyApp,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  );
};

export default configureStore;
