import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';
import fetchUserInfo from '../actions/user';

import UserInfo from '../components/user/UserInfo';
import UserFlyersList from '../components/user/UserFlyersList';

class UserPageContainer extends Component {
  static propTypes = {
    authUserId: PropTypes.string.isRequired,

    userId: PropTypes.string.isRequired,

    userFlyersList: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

    username: React.PropTypes.string.isRequired,
    isFetching: React.PropTypes.bool.isRequired,

    logout: PropTypes.func.isRequired,
    fetchUserInfo: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchUserInfo(this.props.userId);
  }

  render() {
    const { authUserId,
      userId,
      userFlyersList,
      username,
      isFetching,
      logout } = this.props; // eslint-disable-line no-shadow

    return (
      <div>
        {
          isFetching ?
            <div>
              Loading...
            </div> :
            <div>
              <UserInfo
                username={username}
                isCurrentAuthenticatedUser={authUserId === userId}
                logout={logout}
              />
              <UserFlyersList userFlyersList={userFlyersList} />
            </div>
        }
      </div>
    );
  }

}

const mapStateToProps = (state, { params }) => (
  {
    userId: params.userId,
    authUserId: state.auth.userId,
    userFlyersList: state.userFlyersList,
    username: state.userInfo.username,
    isFetching: state.userInfo.isFetching,
  }
);

export default connect(mapStateToProps, { logout, fetchUserInfo })(UserPageContainer);
