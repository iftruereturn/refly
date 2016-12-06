import * as flyerActions from '../constants/Flyer';

const initialState = {
  id: null,
  owner: '',
  createdAt: '',
  updatedAt: '',
  addingPanelPosition: 0,
  isAddingPanelHidden: true,
};

const flyerInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case flyerActions.SHOW_ADDING_PANEL:
      return {
        ...state,
        addingPanelPosition: payload.addingPanelPosition,
        isAddingPanelHidden: payload.isAddingPanelHidden,
      };

    case flyerActions.HIDE_ADDING_PANEL:
      return {
        ...state,
        isAddingPanelHidden: payload.isAddingPanelHidden,
      };

    default:
      return state;
  }
};

export default flyerInfo;
