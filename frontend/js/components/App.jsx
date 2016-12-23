import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <ul>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/editor">Editor</Link></li>
    </ul>
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
