import { FETCH_ALL } from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        campaigns: action.payload,
      }; //returning the users
    default:
      return state;
  }
};
export default reducer;
