import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import userActions from '../actions/user';

class AuthContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    username: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  render() {
    const { children,
      username, isAuthenticated,
      signup, login } = this.props;

    return (
      <div>

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
