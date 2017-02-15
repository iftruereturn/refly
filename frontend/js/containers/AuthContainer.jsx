import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as userActions from '../actions/auth';

import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

// eslint-disable-next-line react/prefer-stateless-function
class AuthContainer extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

    isSigningUp: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    isLoggingOut: PropTypes.bool.isRequired,

    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }

  render() {
    const { username, isAuthenticated,
      signup, login, logout,
      isSigningUp, isLoggingIn, isLoggingOut } = this.props;

    const loggedInMarkup = (
      <div className={'auth-container-logged-in'}>
        Already logged in as {username}.
        <button onClick={logout}>Log out</button>
        <Link to="/">Go to main page</Link>
      </div>
    );

    const loggedOutMarkup = (
      <div className={'auth-container-logged-out'}>
        { (isSigningUp || isLoggingIn || isLoggingOut) ?
          <div>Wait...</div> :
          <div className={'auth-container-logged-out-forms'}>
            <LoginForm login={login} />
            <SignupForm signup={signup} />
          </div>
        }
      </div>
    );

    return (
      <div className={'auth-container'}>
        { isAuthenticated ?
          loggedInMarkup :
            loggedOutMarkup
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.auth,
  }
);

export default connect(mapStateToProps, userActions)(AuthContainer);
