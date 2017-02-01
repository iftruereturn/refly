import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';

import UserInfo from '../components/user/UserInfo';

const UserPageContainer = ({
  username,
  logout, // eslint-disable-line no-shadow
}) => (
  <div>
    <UserInfo username={username} logout={logout} />
  </div>
);

UserPageContainer.propTypes = {
  username: PropTypes.string.isRequired,

  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    username: state.auth.username,
  }
);

export default connect(mapStateToProps, { logout })(UserPageContainer);
