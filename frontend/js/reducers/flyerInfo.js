import * as flyerActions from '../constants/Flyer';

const initialState = {
  id: null,
  owner: '',
  createdAt: '',
  updatedAt: '',
  addingPanelPosition: 0,
  isAddingPanelHidden: true,
  background: '',
  color: '',
  font: '',
  theme: '',
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

    case flyerActions.CHANGE_FLYER_BACKGROUND:
      return {
        ...state,
        background: payload.background,
      };

    case flyerActions.CHANGE_FLYER_COLOR:
      return {
        ...state,
        color: payload.color,
      };

    case flyerActions.CHANGE_FLYER_FONT:
      return {
        ...state,
        font: payload.font,
      };

    case flyerActions.CHANGE_FLYER_THEME:
      return {
        ...state,
        theme: payload.theme,
      };

    default:
      return state;
  }
};

export default flyerInfo;
