import * as AuthActions from '../constants/auth';

const initialState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,

  username: '',
  userId: '',
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActions.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case AuthActions.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case AuthActions.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case AuthActions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
      };

    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
        userId: payload.userId,
      };

    case AuthActions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
      };

    case AuthActions.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
      };

    case AuthActions.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
        userId: payload.userId,
      };

    case AuthActions.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
      };

    default:
      return state;
  }
};

export default auth;
