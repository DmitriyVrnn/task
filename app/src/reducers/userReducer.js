import {FETCH_USER} from "../constants";

const initialState = {
  userList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        userList: action.users
      };
    default:
      return state;
  }
};