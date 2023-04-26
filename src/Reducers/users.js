import { FETCH_ALL_USERS } from "../Constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      console.log("hello");
      return {
        ...state,
        users: action.payload,
        totalUsers: action.payload.total,
      }; //returning the users
    default:
      return state;
  }
 
};
export default reducer;
