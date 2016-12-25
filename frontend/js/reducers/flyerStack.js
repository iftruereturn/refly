import { arrayMove } from 'react-sortable-hoc';
import * as FlyerActions from '../constants/flyer';

const initialState = [];

const flyerStack = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FlyerActions.ADD_WIDGET: {
      const { position } = payload;

      if (position === undefined) {
        return [
          ...state,
          {
            ...payload,
          },
        ];
      }

      return [].concat(
        state.slice(0, position),
        {
          ...payload,
        },
        state.slice(position),
      );
    }

    case FlyerActions.MOVE_WIDGET:
      return arrayMove(state, payload.oldIndex, payload.newIndex);

    case FlyerActions.OPEN_WIDGET_EDIT:
      return state.map((widget) => {
        const { id, editing } = payload;

        if (widget.id === id) {
          return {
            ...widget,
            editing,
          };
        }
        return widget;
      });

    case FlyerActions.CLOSE_WIDGET_EDIT:
      return state.map((widget) => {
        const { id, editing } = payload;

        if (widget.id === id) {
          return {
            ...widget,
            editing,
          };
        }
        return widget;
      });

    case FlyerActions.DELETE_WIDGET:
      return state.filter((widget) => {
        const { id } = payload;

        return (widget.id !== id);
      });

    case FlyerActions.SAVE_WIDGET:
      return state.map((widget) => {
        const { id } = payload;

        if (widget.id === id) {
          return {
            ...widget,
            ...payload,
          };
        }
        return widget;
      });

    default:
      return state;
  }
};

export default flyerStack;
