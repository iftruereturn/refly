import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import auth from './auth';
import flyerInfo from './flyerInfo';
import flyerStack from './flyerStack';
import flyerPossibleSettings from './flyerPossibleSettings';
import userInfo from './userInfo';
import userFlyersList from './userFlyersList';

const reflyApp = combineReducers({
  routing: routerReducer,
  auth,
  flyerInfo,
  flyerStack,
  flyerPossibleSettings,
  userInfo,
  userFlyersList,
});

export default reflyApp;
