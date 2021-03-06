import { browserHistory } from 'react-router';

import * as FlyerActions from '../constants/flyer';
import * as auth from '../lib/auth';

let widgetId = 0; // temporary variable
// Should I generate flyer\widget IDs on the server or on the client?

export const hideAddingPanel = () => ({
  type: FlyerActions.HIDE_ADDING_PANEL,
  payload: {
    isAddingPanelHidden: true,
  },
});

export const showAddingPanel = position => (dispatch) => {
  dispatch(hideAddingPanel());

  dispatch({
    type: FlyerActions.SHOW_ADDING_PANEL,
    payload: {
      addingPanelPosition: position,
      isAddingPanelHidden: false,
    },
  });
};

export const addWidget = (type, position) => (dispatch) => {
  dispatch(hideAddingPanel());

  widgetId += 1; // temporary variable

  switch (type) {
    case 'text':
      dispatch({
        type: FlyerActions.ADD_WIDGET,
        payload: {
          position,
          _id: `${widgetId}`,
          type: 'TextWidget',
          title: `New text widget ${widgetId}`,
          text: 'Sample text',
        },
      });
      return;

    case 'image':
      dispatch({
        type: FlyerActions.ADD_WIDGET,
        payload: {
          position,
          _id: `${widgetId}`,
          type: 'ImageWidget',
          title: `New image widget ${widgetId}`,
          image: 'Random image',
        },
      });
      return;

    case 'header':
      dispatch({
        type: FlyerActions.ADD_WIDGET,
        payload: {
          position,
          _id: `${widgetId}`,
          type: 'HeaderWidget',
          title: `New header widget ${widgetId}`,
          text: 'Sample text',
        },
      });
      return;

    case 'video':
      dispatch({
        type: FlyerActions.ADD_WIDGET,
        payload: {
          position,
          _id: `${widgetId}`,
          type: 'VideoWidget',
          title: `New video widget ${widgetId}`,
          videoUrl: '',
        },
      });
      return;

    default:
      return;
  }
};

export const deleteWidget = id => ({
  type: FlyerActions.DELETE_WIDGET,
  payload: {
    id,
  },
});

// onSortEnd actually
export const moveWidget = ({ oldIndex, newIndex }) => ({
  type: FlyerActions.MOVE_WIDGET,
  payload: {
    oldIndex,
    newIndex,
  },
});

export const openWidgetEdit = id => ({
  type: FlyerActions.OPEN_WIDGET_EDIT,
  payload: {
    id,
    editing: true,
  },
});

export const closeWidgetEdit = id => ({
  type: FlyerActions.CLOSE_WIDGET_EDIT,
  payload: {
    id,
    editing: false,
  },
});

export const saveWidget = (id, fieldsObj) => (dispatch) => {
  dispatch(({
    type: FlyerActions.SAVE_WIDGET,
    payload: {
      id,
      ...fieldsObj,
    },
  }));

  dispatch(closeWidgetEdit(id));
};

// Flyer settings

export const changeFlyerBackground = background => ({
  type: FlyerActions.CHANGE_FLYER_BACKGROUND,
  payload: {
    background,
  },
});

export const changeFlyerColor = color => ({
  type: FlyerActions.CHANGE_FLYER_COLOR,
  payload: {
    color,
  },
});

export const changeFlyerFont = font => ({
  type: FlyerActions.CHANGE_FLYER_FONT,
  payload: {
    font,
  },
});

export const changeFlyerTheme = theme => ({
  type: FlyerActions.CHANGE_FLYER_THEME,
  payload: {
    theme,
  },
});

export const createFlyer = (/* template */) => (dispatch, getState) => {
  dispatch({
    type: FlyerActions.CREATE_NEW_FLYER_REQUEST,
    payload: {
      isCreating: true,
    },
  });

  const { userId } = getState().auth;

  return fetch(`/api/users/${userId}/flyers`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `bearer ${auth.getToken()}`,
    },
    body: JSON.stringify({}),
    credentials: 'same-origin',
  }).then(response => response.headers.get('location'))
    .then((location) => {
      dispatch({
        type: FlyerActions.CREATE_NEW_FLYER_SUCCESS,
        payload: {
          isCreating: false,
        },
      });
      const path = `editor${location.slice(7)}`;
      // console.log(path);
      browserHistory.push(path);
    }).catch(() => {
      dispatch({
        type: FlyerActions.CREATE_NEW_FLYER_FAILURE,
        payload: {
          isCreating: false,
        },
      });
    });
};

export const fetchFlyer = id => (dispatch, getState) => {
  dispatch({
    type: FlyerActions.FETCH_FLYER_REQUEST,
    payload: {
      isFetching: true,
      id,
    },
  });

  const { userId } = getState().auth;

  return fetch(`/api/users/${userId}/flyers/${id}`, {
    credentials: 'same-origin',
    headers: {
      Authorization: `bearer ${auth.getToken()}`,
    },
  }).then(response => response.json())
    .then((flyer) => {
      // console.log(flyer);

      // Just for 'key'
      flyer.stack.forEach((widget) => {
        widget._id = flyer._id + widgetId; // eslint-disable-line no-param-reassign
        widgetId += 1;
      });

      dispatch({
        type: FlyerActions.FETCH_FLYER_SUCCESS,
        payload: {
          isFetching: false,
          flyer,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: FlyerActions.FETCH_FLYER_FAILURE,
        payload: {
          isFetching: false,
        },
      });
    });
};

export const saveFlyer = () => (dispatch, getState) => {
  const { flyerInfo, flyerStack } = getState();
  const flyer = {
    _id: flyerInfo._id,
    background: flyerInfo.background,
    color: flyerInfo.color,
    font: flyerInfo.font,
    theme: flyerInfo.theme,
    stack: flyerStack,
  };
  const flyerId = flyerInfo._id;

  dispatch({
    type: FlyerActions.SAVE_FLYER_REQUEST,
    payload: {
      isSaving: true,
    },
  });

  const { userId } = getState().auth;

  return fetch(`/api/users/${userId}/flyers/${flyerId}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
      Authorization: `bearer ${auth.getToken()}`,
    },
    body: JSON.stringify(flyer),
    credentials: 'same-origin',
  }).then(() => {
    dispatch({
      type: FlyerActions.SAVE_FLYER_SUCCESS,
      payload: {
        isSaving: false,
      },
    });
  }).catch(() => {
    dispatch({
      type: FlyerActions.SAVE_FLYER_FAILURE,
      payload: {
        isSaving: false,
      },
    });
  });
};
