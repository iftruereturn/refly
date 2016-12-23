import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <ul>
      <li>
        <Link activeClassName="active-link" onlyActiveOnIndex to="/">Index</Link>
      </li>
      <li>
        <Link activeClassName="active-link" to="/editor">Editor</Link>
      </li>
    </ul>
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
