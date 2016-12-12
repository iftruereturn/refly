import { combineReducers } from 'redux';
import flyerInfo from './flyerInfo';
import flyerStack from './flyerStack';
import flyerPossibleSettings from './flyerPossibleSettings';

const reflyApp = combineReducers({
  flyerInfo,
  flyerStack,
  flyerPossibleSettings,
});

export default reflyApp;
