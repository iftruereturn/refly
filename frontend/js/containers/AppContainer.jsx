import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { checkAuthentication } from '../actions/auth';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,

    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

    checkAuthentication: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.checkAuthentication();
  }

  render() {
    const { children,
      username, isAuthenticated, userId } = this.props;

    return (
      <div className={'app-container'}>
        <ul className={'app-container-menu'}>
          {
            isAuthenticated ?
              <li className={'app-container-menu-item'}>
                <div className={'app-container-menu-item-username'}>
                  {username}
                </div>
                <Link activeClassName="active-link" to={`/user/${userId}`}>View Profile</Link>
              </li> :
              <li className={'app-container-menu-item'}>
                <Link activeClassName="active-link" to="/auth">Sign up / Log In</Link>
              </li>
          }
          <li className={'app-container-menu-item'}>
            <Link activeClassName="active-link" onlyActiveOnIndex to="/">Main</Link>
          </li>
          {
            isAuthenticated ?
              <li className={'app-container-menu-item'}>
                <Link activeClassName="active-link" to="/editor">Editor</Link>
              </li> :
              null
          }
        </ul>
        <div className={'app-container-content'}>
          { children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.auth,
  }
);

export default connect(mapStateToProps, { checkAuthentication })(AppContainer);
