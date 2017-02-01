import * as UserActions from '../constants/user';
import * as auth from '../lib/auth';

export const fetchUserInfo = (userId) => (dispatch) => {
  dispatch({
    type: UserActions.FETCH_USER_INFO_REQUEST,
    payload: {
      isFetching: true,
    },
  });

  return fetch(`/api/users/${userId}`, {
    credentials: 'same-origin',
    headers: {
      Authorization: `bearer ${auth.getToken()}`,
    },
  }).then(response => response.json())
    .then((data) => {

      dispatch({
        type: UserActions.FETCH_USER_INFO_SUCCESS,
        payload: {
          isFetching: false,
          username: data.user.username,
          flyerIds: data.flyerIds,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: UserActions.FETCH_USER_INFO_FAILURE,
        payload: {
          isFetching: false,
        },
      });
    });
};
