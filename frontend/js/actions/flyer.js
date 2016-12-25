import * as FlyerActions from '../constants/flyer';


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
          id: widgetId,
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
          id: widgetId,
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
          id: widgetId,
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
          id: widgetId,
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

// eslint-disable-next-line no-unused-vars
export const createFlyer = template => (dispatch) => {

};
