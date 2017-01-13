import * as UserActions from '../constants/user';

export const signup = (email, password, username) => (dispatch) => {
  dispatch({
    type: UserActions.SIGNUP_REQUEST,
    payload: {
      isSigningUp: true,
    },
  });


};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: UserActions.LOGIN_REQUEST,
    payload: {
      isLoggingIn: true,
    },
  });


};

export const logout = () => (dispatch) => {
  dispatch({
    type: UserActions.LOGOUT_REQUEST,
    payload: {
      isLoggingOut: true,
    },
  });


};
