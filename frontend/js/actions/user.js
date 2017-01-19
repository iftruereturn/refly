import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

import * as UserActions from '../constants/user';
import * as auth from '../lib/auth';

export const signup = (email, password, username) => (dispatch) => {
  dispatch({
    type: UserActions.SIGNUP_REQUEST,
    payload: {
      isSigningUp: true,
    },
  });

  const emailEncoded = encodeURIComponent(email);
  const passwordEncoded = encodeURIComponent(password);
  const usernameEncoded = encodeURIComponent(username);
  const formData = `username=${usernameEncoded}&email=${emailEncoded}&password=${passwordEncoded}`;

  return fetch('/auth/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
    credentials: 'same-origin',
  }).then((response) => {
    // Because CORS
    if (response.status === 401
        || response.status === 404
        || response.status === 502) {
      throw new Error();
    }

    dispatch({
      type: UserActions.SIGNUP_SUCCESS,
      payload: {
        isSigningUp: false,
      },
    });
  }).catch(() => {
    dispatch({
      type: UserActions.SIGNUP_FAILURE,
      payload: {
        isSigningUp: false,
      },
    });
  });
};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: UserActions.LOGIN_REQUEST,
    payload: {
      isLoggingIn: true,
    },
  });

  const emailEncoded = encodeURIComponent(email);
  const passwordEncoded = encodeURIComponent(password);
  const formData = `email=${emailEncoded}&password=${passwordEncoded}`;

  return fetch('/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
    credentials: 'same-origin',
  }).then(response => response.json()
  ).then((responseData) => {
    // Because CORS
    if (responseData.status === 401
        || responseData.status === 404
        || responseData.status === 502) {
      throw new Error();
    }

    const {
      // success,
      // message,
      token,
      user,
    } = responseData;

    auth.authenticateUser(token);

    dispatch({
      type: UserActions.LOGIN_SUCCESS,
      payload: {
        isLoggingIn: false,
        isAuthenticated: true,
        username: user.username,
      },
    });


    browserHistory.push('/');
  }).catch(() => {
    dispatch({
      type: UserActions.LOGIN_FAILURE,
      payload: {
        isLoggingIn: false,
      },
    });
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: UserActions.LOGOUT_REQUEST,
    payload: {
      isLoggingOut: true,
    },
  });

  auth.deauthenticateUser();

  dispatch({
    type: UserActions.LOGOUT_SUCCESS,
    payload: {
      isLoggingOut: false,
      isAuthenticated: false,
      username: '',
    },
  });
};

export const checkAuthentication = () => {
  if (auth.isUserAuthenticated()) {
    const token = auth.getToken();

    let decoded;
    try {
      decoded = jwtDecode(token);
      console.log(decoded);
    } catch (err) {
      return {
        type: UserActions.LOGIN_FAILURE,
        payload: {
          isLoggingIn: false,
        },
      };
    }

    if (decoded && decoded.username) {
      return {
        type: UserActions.LOGIN_SUCCESS,
        payload: {
          isLoggingIn: false,
          isAuthenticated: true,
          username: decoded.username,
        },
      };
    }
  }

  return {
    type: UserActions.LOGIN_FAILURE,
    payload: {
      isLoggingIn: false,
    },
  };
};
