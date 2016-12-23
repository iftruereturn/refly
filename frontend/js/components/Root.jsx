import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Index from './pages/Index';
import FlyerEditor from './pages/FlyerEditor';
import NotFound from './pages/NotFound';

// Router goes here
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="editor" component={FlyerEditor} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
