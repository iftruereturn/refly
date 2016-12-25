// import * as FlyerActions from '../constants/flyer';

const initialState = {
  themes: [
    {
      name: 'default',
      value: 'default',
    },
    {
      name: 'other',
      value: 'other',
    },
  ],

  backgrounds: [
    {
      name: 'black',
      value: 'bg-black',
    },
    {
      name: 'white',
      value: 'bg-white',
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
      value: 'sans-serif',
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
