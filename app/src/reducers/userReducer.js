import {ADD_USER, CHANGE_ACTIVE_USER, FETCH_USERS, GET_USER_FROM_API} from "../constants";

const initialState = {
  userList: [],
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        userList: action.users
      };
    case GET_USER_FROM_API:
      return {
        ...state,
        user: action.data
      };
    case ADD_USER:
      let users = state.userList;
      return {
          ...state,
        userList: [...users, action.payload]
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