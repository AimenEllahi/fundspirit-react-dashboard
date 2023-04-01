import {
  FETCH_ALL_NPOS,
  FETCH_ALL_NPO_REQUESTS,
} from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_NPOS:
      return {
        ...state,
        npos: action.payload,
      };
    case FETCH_ALL_NPO_REQUESTS:
      return {
        ...state,
        npoRequests: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
