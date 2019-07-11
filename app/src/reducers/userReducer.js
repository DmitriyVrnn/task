import {CHANGE_ACTIVE_USER, FETCH_USER} from "../constants";

const initialState = {
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        userList: action.users
      };
    case CHANGE_ACTIVE_USER:
      return {
          ...state,
        activeUser: action.id
      };
    default:
      return state;
  }
};