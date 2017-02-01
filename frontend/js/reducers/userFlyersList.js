import * as UserActions from '../constants/user';

const initialState = [
];

const userFlyersList = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.FETCH_USER_INFO_REQUEST:
      return state;

    case UserActions.FETCH_USER_INFO_SUCCESS:
      return payload.flyerIds;

    case UserActions.FETCH_USER_INFO_FAILURE:
      return state;

    default:
      return state;
  }
};

export default userFlyersList;
