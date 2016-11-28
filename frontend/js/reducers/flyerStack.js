import * as flyerActions from '../constants/Flyer';

const initialState = [];

const flyerStack = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case flyerActions.ADD_WIDGET:
      return [
        ...state,
        {
          ...payload,
        },
      ];

    case flyerActions.MOVE_WIDGET:
      return state.map((widget, index, arr) => {
        const { hoverIndex, dragIndex } = payload;

        if (index === dragIndex) {
          return arr[hoverIndex];
        } else if (index === hoverIndex) {
          return arr[dragIndex];
        }
        return widget;
      });

    case flyerActions.OPEN_WIDGET_EDIT:
      return state.map((widget) => {
        const { widgetId } = payload;

        if (widget.id === widgetId) {
          return {
            ...widget,
            editing: true,
          };
        }
        return widget;
      });

    case flyerActions.CLOSE_WIDGET_EDIT:
      return state.map((widget) => {
        const { widgetId } = payload;

        if (widget.id === widgetId) {
          return {
            ...widget,
            editing: false,
          };
        }
        return widget;
      });

    default:
      return state;
  }
};

export default flyerStack;
