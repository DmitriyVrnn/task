import axios from 'axios';
import uuid from 'uuid';

import {
  FETCH_USERS, API, CHANGE_ACTIVE_USER,
  GET_USER_FROM_API, ADD_COMMENT, DEFAULT_STATE, ADD_USER
} from "../constants";

export const changeActiveUser = (id) => {
  return {
    type: CHANGE_ACTIVE_USER,
    id
  };
};

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

export const addUser = data => {
  console.log(data)
  return {
    type: ADD_USER,
    payload: {
      id: uuid(),
      name: data.name
    }
  }
};

export const clearStore = () => ({
  type: DEFAULT_STATE
});

export const fetchAllUsers = () => async (dispatch) => {
  const fetchUsers = (users) => {
    dispatch({
      type: FETCH_USERS,
      users
    });
    return users
  };
  try {
    const users = await axios.get(`${API}/users`);
    return fetchUsers(users.data);
  } catch (e) {
    throw (e);
  }
};

export const getUser = (id) => async (dispatch) => {
  const fetchUser = (data) => {
    dispatch({
      type: GET_USER_FROM_API,
      data
    });
    return data
  };
  try {
    const user = await axios.get(`${API}/users/${id}`);
    return fetchUser(user.data);
  } catch (e) {
    throw (e);
  }
};