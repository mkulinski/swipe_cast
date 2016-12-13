import * as types from '../actions/actionTypes';

const initialState = {
  username: '',
  loggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_USER: {
      return Object.assign({}, state, { username: action.usr.username, loggedIn: true });
    }
    default:
      return state;
  }
}

export default userReducer;
