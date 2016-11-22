import { combineReducers } from 'redux';
import flyerInfo from './flyerInfo';
import flyerStack from './flyerStack';

const reflyApp = combineReducers({
  flyerInfo,
  flyerStack,
});

export default reflyApp;
