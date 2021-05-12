import { CHANGE_THEME_MODE } from '../types';

export const changeThemeMode = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_THEME_MODE,
    payload: value,
  });
};
