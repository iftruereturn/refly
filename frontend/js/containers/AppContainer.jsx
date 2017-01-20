import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { checkAuthentication } from '../actions/user';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,

    username: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

    checkAuthentication: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.checkAuthentication();
  }

  render() {
    const { children,
      username, isAuthenticated } = this.props;

    return (
      <div>
        <ul>
          {
            isAuthenticated ?
              <li>
                {username}
                <Link activeClassName="active-link" to="/user">View Profile</Link>
              </li> :
              <li>
                <Link activeClassName="active-link" to="/auth">Sign up / Log In</Link>
              </li>
          }
          <li>
            <Link activeClassName="active-link" onlyActiveOnIndex to="/">Index</Link>
          </li>
          {
            isAuthenticated ?
              <li>
                <Link activeClassName="active-link" to="/editor">Editor</Link>
              </li> :
              null
          }
        </ul>
        { children }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.user,
  }
);

export default connect(mapStateToProps, { checkAuthentication })(AppContainer);
