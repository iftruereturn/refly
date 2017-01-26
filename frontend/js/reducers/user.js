import * as UserActions from '../constants/user';

const initialState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,

  username: '',
  userId: '',
  isAuthenticated: false,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActions.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case UserActions.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case UserActions.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: payload.isSigningUp,
      };

    case UserActions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
      };

    case UserActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
        userId: payload.userId,
      };

    case UserActions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: payload.isLoggingIn,
      };

    case UserActions.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
      };

    case UserActions.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
        isAuthenticated: payload.isAuthenticated,
        username: payload.username,
        userId: payload.userId,
      };

    case UserActions.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
      };

    default:
      return state;
  }
};

export default user;
