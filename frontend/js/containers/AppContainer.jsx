import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AppContainer = ({ children, username, isAuthenticated }) => (
  <div>
    { isAuthenticated ?
      <span>{username}</span> :
        null }
    <ul>
      <li>
        <Link activeClassName="active-link" onlyActiveOnIndex to="/">Index</Link>
      </li>
      <li>
        <Link activeClassName="active-link" to="/editor">Editor</Link>
      </li>
      <li>
        <Link activeClassName="active-link" to="/auth">Sign up / Log In</Link>
      </li>
    </ul>
    { children }
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    ...state.user,
  }
);

export default connect(mapStateToProps)(AppContainer);
