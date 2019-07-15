import axios from 'axios';
import uuid from 'uuid';

import {
  FETCH_USERS, API, CHANGE_ACTIVE_USER,
  GET_USER_FROM_API, ADD_USER
} from "../constants";

export const changeActiveUser = (id) => {
  return {
    type: CHANGE_ACTIVE_USER,
    id
  };
};

export const addUser = data => {
  return {
    type: ADD_USER,
    payload: {
      id: uuid(),
      name: data.name,
      avatar: "https://www.gravatar.com/userimage/160584717/d4dffbc5c602fd15c4b4ffe1d27c0fc5?size=120",
    }
  }
};

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