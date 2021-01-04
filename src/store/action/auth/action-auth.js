import {AUTH_DATA} from './action-types';

export const authData = (data) => {
  return {type: AUTH_DATA, payload: data};
};
