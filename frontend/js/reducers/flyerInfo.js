import * as FlyerActions from '../constants/flyer';

const initialState = {
  addingPanelPosition: 0,
  isAddingPanelHidden: true,
  isCreating: false,
  isFetching: false,
  isSaving: false,

  id: null,
  createdAt: '',
  updatedAt: '',
  owner: '',
  background: 'bg-black',
  color: 'black',
  font: 'monospace',
  theme: 'default',
};

const flyerInfo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FlyerActions.SHOW_ADDING_PANEL:
      return {
        ...state,
        addingPanelPosition: payload.addingPanelPosition,
        isAddingPanelHidden: payload.isAddingPanelHidden,
      };

    case FlyerActions.HIDE_ADDING_PANEL:
      return {
        ...state,
        isAddingPanelHidden: payload.isAddingPanelHidden,
      };

    case FlyerActions.CHANGE_FLYER_BACKGROUND:
      return {
        ...state,
        background: payload.background,
      };

    case FlyerActions.CHANGE_FLYER_COLOR:
      return {
        ...state,
        color: payload.color,
      };

    case FlyerActions.CHANGE_FLYER_FONT:
      return {
        ...state,
        font: payload.font,
      };

    case FlyerActions.CHANGE_FLYER_THEME:
      return {
        ...state,
        theme: payload.theme,
      };

    case FlyerActions.CREATE_NEW_FLYER_REQUEST:
      return {
        ...state,
        isCreating: payload.isCreating,
      };

    case FlyerActions.CREATE_NEW_FLYER_SUCCESS:
      return {
        ...state,
        isCreating: payload.isCreating,
      };

    case FlyerActions.CREATE_NEW_FLYER_FAILURE:
      return {
        ...state,
        isCreating: payload.isCreating,
      };

    case FlyerActions.FETCH_FLYER_REQUEST:
      return {
        ...state,
        isFetching: payload.isFetching,
        id: payload.id,
      };

    case FlyerActions.FETCH_FLYER_SUCCESS:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case FlyerActions.FETCH_FLYER_FAILURE:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case FlyerActions.SAVE_FLYER_REQUEST:
      return {
        ...state,
        isSaving: payload.isSaving,
      };

    case FlyerActions.SAVE_FLYER_SUCCESS:
      return {
        ...state,
        isSaving: payload.isSaving,
      };

    case FlyerActions.SAVE_FLYER_FAILURE:
      return {
        ...state,
        isSaving: payload.isSaving,
      };

    default:
      return state;
  }
};

export default flyerInfo;
