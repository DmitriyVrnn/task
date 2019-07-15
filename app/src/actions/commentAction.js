import uuid from 'uuid';
import {ADD_COMMENT, DEFAULT_STATE} from "../constants";

export const addComment = data => {
  return {
    type: ADD_COMMENT,
    payload: {
      id: uuid(),
      title: data.title,
      body: data.body,
      phone: data.phone,
    },
  }
};

export const clearCommentFromStore = () => ({
  type: DEFAULT_STATE
});