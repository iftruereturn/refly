import React, { PropTypes } from 'react';

const UserInfo = ({
  username,
  logout,
  isCurrentAuthenticatedUser,
}) => (
  <div>
    <div>
      {username}
    </div>
    { isCurrentAuthenticatedUser ?
      <div>
        <button onClick={logout}>Logout</button>
      </div> :
        null
    }
  </div>
);

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  isCurrentAuthenticatedUser: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserInfo;
