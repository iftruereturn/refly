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

export const deleteWidget = () => ({
  type: FlyerActions.DELETE_WIDGET,
});

export const moveWidget = (dragIndex, hoverIndex) => ({
  type: FlyerActions.MOVE_WIDGET,
  payload: {
    dragIndex,
    hoverIndex,
  },
});
