import * as FlyerActions from '../constants/Flyer';

// temporary variable
let widgetId = 0;

export const addWidget = (type) => {
  widgetId += 1;

  switch (type) {
    case 'text':
      return {
        type: FlyerActions.ADD_WIDGET,
        payload: {
          id: widgetId,
          type: 'TextWidget',
          title: `New text widget ${widgetId}`,
          text: 'Sample text',
        },
      };

    default:
      return null;
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
