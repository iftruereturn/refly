import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Main from './pages/Main';
import Editor from './pages/Editor';
import EditorNewFlyer from './pages/EditorNewFlyer';
import NotFound from './pages/NotFound';

// Router goes here
const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="editor" component={EditorNewFlyer} />
        <Route path="editor/:id" component={Editor} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

};

export default Root;
