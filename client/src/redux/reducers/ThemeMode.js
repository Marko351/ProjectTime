import { CHANGE_THEME_MODE } from '../types';

const initialState = {
  mode: 'light-mode',
};

const ThemeModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_MODE:
      return {
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default ThemeModeReducer;
