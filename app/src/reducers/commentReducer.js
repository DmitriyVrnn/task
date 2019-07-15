import { ADD_COMMENT, DEFAULT_STATE } from '../constants';

const comment = [];

export default (state = comment, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DEFAULT_STATE:
      return comment;
    default:
      return state;
  }
};
