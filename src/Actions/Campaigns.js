import { FETCH_ALL_CAMPAIGNS } from "../Constants/actionTypes.js";
import * as API from "../api";

export const getCampaigns = () => async (dispatch) => {
  try {
    const { data } = await API.fetchCampaigns();

    dispatch({ type: FETCH_ALL_CAMPAIGNS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
