import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import userActions from '../actions/user';

import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

class AuthContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    username: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,

    isSigningUp: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    isLoggingOut: PropTypes.bool.isRequired,

    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  render() {
    const { children,
      username, isAuthenticated,
      signup, login,
      isSigningUp, isLoggingIn, isLoggingOut, } = this.props;

    return (
      <div>
        { (isSigningUp || isLoggingIn || isLoggingOut) ?
          <div>Wait...</div> :
            <div>
              <LoginForm login={login} />
              <SignupForm signup={signup} />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.user,
  }
);

export default connect(mapStateToProps, userActions)(AuthContainer);
