import {AUTH_DATA} from '../../action/auth/action-types';

const initialState = {authData: null};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_DATA:
      return {
        ...state,
        authData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
