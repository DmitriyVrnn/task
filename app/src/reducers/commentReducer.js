import {ADD_COMMENT} from "../constants";

const comment = [];

export default (state = comment, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};