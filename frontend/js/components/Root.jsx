import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
