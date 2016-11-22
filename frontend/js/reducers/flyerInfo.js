// import * as flyerActions from '../constants/Flyer';

const initialState = {
  id: null,
  owner: '',
  createdAt: '',
  updatedAt: '',
};

const flyerInfo = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default flyerInfo;
