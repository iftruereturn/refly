import * as UserActions from '../constants/user';

const initialState = {
  signingUp: false,
  loggingIn: false,
  loggingOut: false,

  username: '',
  isAuthenticated: false,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case UserActions.SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case UserActions.SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case UserActions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: payload.loggingIn,
      };

    case UserActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: payload.loggingIn,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
      };

    case UserActions.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: payload.loggingIn,
      };

    case UserActions.LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: payload.loggingOut,
      };

    case UserActions.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: payload.loggingOut,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
      };

    case UserActions.LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: payload.loggingOut,
      };

    default:
      return state;
  }
};

export default user;
