import * as FlyerActions from '../constants/Flyer';

// temporary variable
let id = 0;

export const addWidget = () => {
  id += 1;

  return {
    type: FlyerActions.ADD_WIDGET,
    payload: {
      id,
      type: 'TextWidget',
      title: `New text widget ${id}`,
      text: 'Sample text',
    },
  };
};

export const deleteWidget = widgetId => ({
  type: FlyerActions.DELETE_WIDGET,
  payload: {
    widgetId,
  },
});

export const moveWidget = (dragIndex, hoverIndex) => ({
  type: FlyerActions.MOVE_WIDGET,
  payload: {
    dragIndex,
    hoverIndex,
  },
});

export const openWidgetEdit = widgetId => ({
  type: FlyerActions.OPEN_WIDGET_EDIT,
  payload: {
    widgetId,
  },
});

export const closeWidgetEdit = widgetId => ({
  type: FlyerActions.CLOSE_WIDGET_EDIT,
  payload: {
    widgetId,
  },
});
