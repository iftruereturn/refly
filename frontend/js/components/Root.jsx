import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
