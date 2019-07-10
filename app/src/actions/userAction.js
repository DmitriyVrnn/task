import axios from 'axios';
import {FETCH_USER, API} from "../constants";

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