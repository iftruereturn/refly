import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

import AppContainer from '../containers/AppContainer';
import CreateNewFlyerContainer from '../containers/CreateNewFlyerContainer';
import EditorContainer from '../containers/EditorContainer';
import AuthContainer from '../containers/AuthContainer';
import UserPageContainer from '../containers/UserPageContainer';

// Router goes here
const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Main} />
        <Route path="editor" component={CreateNewFlyerContainer} />
        <Route path="editor/(:flyerId)" component={EditorContainer} />
        <Route path="auth" component={AuthContainer} />
        <Route path="user" component={UserPageContainer} />
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
