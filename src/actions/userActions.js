import * as types from './actionTypes';

export function addUser(usr) {
  return {
    type: types.ADD_USER,
    usr,
  };
}

export function verifyUser(usr) {
  return {
    type: types.VERIFY_USER,
    usr,
  };
}
