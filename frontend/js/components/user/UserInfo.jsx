import React, { PropTypes } from 'react';

const UserInfo = ({
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

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,

  logout: PropTypes.func.isRequired,
};

export default UserInfo;
