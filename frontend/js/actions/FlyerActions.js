import * as FlyerActions from '../constants/Flyer';

// temporary variable
let widgetId = 0;

export const addWidget = () => {
  widgetId += 1;

  return {
    type: FlyerActions.ADD_WIDGET,
    payload: {
      id: widgetId,
      type: 'TextWidget',
      title: `New text widget ${widgetId}`,
      text: 'Sample text',
    },
  };
};

export const deleteWidget = id => ({
  type: FlyerActions.DELETE_WIDGET,
  payload: {
    id,
  },
});

export const moveWidget = (dragIndex, hoverIndex) => ({
  type: FlyerActions.MOVE_WIDGET,
  payload: {
    dragIndex,
    hoverIndex,
  },
});

export const openWidgetEdit = id => ({
  type: FlyerActions.OPEN_WIDGET_EDIT,
  payload: {
    id,
  },
});

export const closeWidgetEdit = id => ({
  type: FlyerActions.CLOSE_WIDGET_EDIT,
  payload: {
    id,
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
