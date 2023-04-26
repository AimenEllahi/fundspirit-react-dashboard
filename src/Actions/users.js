import { FETCH_ALL_USERS } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await API.fetchUsers();
    console.log(data);
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
