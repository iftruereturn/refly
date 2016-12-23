import { combineReducers } from 'redux';

import flyerInfo from './flyerInfo';
import flyerStack from './flyerStack';
import flyerPossibleSettings from './flyerPossibleSettings';
import user from './user';

const reflyApp = combineReducers({
  flyerInfo,
  flyerStack,
  flyerPossibleSettings,
  user,
});

export default reflyApp;
