import axios from 'axios';
import {FETCH_USER, API, CHANGE_ACTIVE_USER} from "../constants";

export const changeActiveUser = (id) => {
  return {
    type: CHANGE_ACTIVE_USER,
    id
  };
};

export const fetchAllUsers = () => async (dispatch) => {
  const fetchUsers = (users) => {
    dispatch({
      type: FETCH_USER,
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