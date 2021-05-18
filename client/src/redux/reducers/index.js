import { combineReducers } from 'redux';

import ThemeModeReducer from './ThemeMode';
import AuthenticationReducer from './Authentication';

export default combineReducers({
  ThemeMode: ThemeModeReducer,
  Authentication: AuthenticationReducer,
});
