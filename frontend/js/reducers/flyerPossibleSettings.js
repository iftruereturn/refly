// import * as flyerActions from '../constants/Flyer';

const initialState = {
  themes: [
    'default',
  ],

  backgrounds: [
    {
      name: 'black',
      value: '#000000',
    },
    {
      name: 'white',
      value: '#FFFFFF',
    },
  ],

  colors: [
    {
      name: 'black',
      value: 'black',
    },
    {
      name: 'white',
      value: 'white',
    },
    {
      name: 'gray',
      value: 'gray',
    },
  ],

  fonts: [
    {
      name: 'Sans Serif',
      value: 'sansSerif',
    },
    {
      name: 'Serif',
      value: 'serif',
    },
    {
      name: 'Monospace',
      value: 'monospace',
    },
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
