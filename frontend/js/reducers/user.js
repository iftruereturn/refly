import * as userActions from '../constants/User';

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
    case userActions.SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case userActions.SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case userActions.SIGNUP_FAIL:
      return {
        ...state,
        signingUp: payload.signingUp,
      };

    case userActions.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: payload.loggingIn,
      };

    case userActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: payload.loggingIn,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
      };

    case userActions.LOGIN_FAIL:
      return {
        ...state,
        loggingIn: payload.loggingIn,
      };

    case userActions.LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: payload.loggingOut,
      };

    case userActions.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: payload.loggingOut,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
      };

    case userActions.LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: payload.loggingOut,
      };

    default:
      return state;
  }
};

export default user;
