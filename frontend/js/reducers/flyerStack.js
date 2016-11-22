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

    default:
      return state;
  }
};

export default flyerStack;
