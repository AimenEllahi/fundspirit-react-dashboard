import { FETCH_ALL_CAMPAIGNS } from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
      }; //returning the users
    default:
      return state;
  }
};
export default reducer;
