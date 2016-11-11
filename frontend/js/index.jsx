/* eslint global-require: [0]*/

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root
      store={store}
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const RootContainer = require('./components/Root').default;

    ReactDOM.render(
      <AppContainer>
        <RootContainer
          store={store}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
