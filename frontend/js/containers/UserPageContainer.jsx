import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/user';

const UserPageContainer = ({
  username,
  logout, // eslint-disable-line no-shadow
}) => (
  <div>
    <div>
      {username}
    </div>
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  </div>
);

UserPageContainer.propTypes = {
  username: PropTypes.string.isRequired,

  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    username: state.user.username,
  }
);

export default connect(mapStateToProps, { logout })(UserPageContainer);
