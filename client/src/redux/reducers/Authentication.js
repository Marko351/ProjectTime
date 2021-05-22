import { SET_CURRENT_USER } from '../types';

const initialState = {
  isAuth: true,
  user: {},
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuth: !!Object.keys(action.payload).length,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
