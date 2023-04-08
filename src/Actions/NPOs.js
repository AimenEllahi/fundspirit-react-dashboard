import {
  FETCH_ALL_NPOS,
  FETCH_ALL_NPO_REQUESTS,
} from "../Constants/actionTypes.js";
import * as API from "../api";

export const getNPOs = () => async (dispatch) => {
  try {
    const { data } = await API.fetchNPOs();

    console.log("requesting NPOs");

    dispatch({ type: FETCH_ALL_NPOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getNPORequets = () => async (dispatch) => {
  try {
    const { data } = await API.fetchNPORequests();

    console.log("requesting NPO Requests");
    
    dispatch({ type: FETCH_ALL_NPO_REQUESTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
