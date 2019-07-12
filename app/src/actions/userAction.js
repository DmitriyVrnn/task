import axios from 'axios';
import {FETCH_USERS, API, CHANGE_ACTIVE_USER, GET_USER_FROM_API, ADD_COMMENT} from "../constants";

//Убрать
export const changeActiveUser = (id) => {
  return {
    type: CHANGE_ACTIVE_USER,
    id
  };
};

export const addComment = () => {

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