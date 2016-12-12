// import * as flyerActions from '../constants/Flyer';

const initialState = {
  themes: [
    'default',
  ],

  backgrounds: [
    { black: '#000000' },
    { white: '#FFFFFF' },
  ],

  colors: [
    { black: '#000000' },
    { white: '#FFFFFF' },
    { gray: '#AAAAAA' },
  ],

  fonts: [
    { 'Sans Serif': 'sansSerif' },
    { Serif: 'serif' },
    { Monospace: 'monospace' },
  ],

  flyerStackSize: 5,
};

const flyerPossibleSettings = (state = initialState, action) => {
  const { type /* , payload*/ } = action;

  switch (type) {
    default:
      return state;
  }
};

export default flyerPossibleSettings;
