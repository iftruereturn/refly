import * as AuthActions from '../constants/auth';

const initialState = {
};

const flyerPossibleSettings = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...payload.possibleSettings,
      };

    case AuthActions.LOGOUT_SUCCESS:
      return {};

    default:
      return state;
  }
};

export default flyerPossibleSettings;
