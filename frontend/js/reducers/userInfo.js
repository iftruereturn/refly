import * as UserActions from '../constants/user';

const initialState = {
  username: '',

  isFetching: false,
};

const userInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case UserActions.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: payload.isFetching,
        username: payload.username,
      };

    case UserActions.FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    default:
      return state;
  }
};

export default userInfo;
