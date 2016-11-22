import * as FlyerActions from '../constants/Flyer';

export const addWidget = () => ({
  type: FlyerActions.ADD_WIDGET,
  payload: {
    type: 'TextWidget',
    title: 'New text widget',
    text: 'Sample text',
  },
});

export const deleteWidget = () => ({
  type: FlyerActions.DELETE_WIDGET,
});
