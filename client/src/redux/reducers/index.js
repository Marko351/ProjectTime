import { combineReducers } from 'redux';

import ThemeModeReducer from './ThemeMode';

export default combineReducers({
  ThemeMode: ThemeModeReducer,
});
