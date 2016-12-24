import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import flyerInfo from './flyerInfo';
import flyerStack from './flyerStack';
import flyerPossibleSettings from './flyerPossibleSettings';
import user from './user';

const reflyApp = combineReducers({
  routing: routerReducer,
  flyerInfo,
  flyerStack,
  flyerPossibleSettings,
  user,
});

export default reflyApp;
