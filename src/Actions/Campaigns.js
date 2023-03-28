import { FETCH_ALL } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getCampaigns = () => async (dispatch) => {
  try {
    const { data } = await API.fetchCampaigns();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
