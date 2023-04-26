import { ERROR, SIGNIN, LOGOUT } from "../Constants/actionTypes";
const token = localStorage.getItem("FundSpiritSecurityTokenAdmin");
const user = JSON.parse(localStorage.getItem("FundSpiritAdmin"));
const initialState = token ? { token, user } : {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      console.log(action.payload.user, "Here");
      if (action?.payload.user.role === "admin") {
        console.log(action.payload.token);
        localStorage.setItem(
          "FundSpiritSecurityTokenAdmin",
          action?.payload.token
        );
        localStorage.setItem(
          "FundSpiritAdmin",
          JSON.stringify(action?.payload.user)
        );
        window.location.href = "/";
        return { ...state, user: action?.payload.user };
      } else {
        return { ...state, error: "Login failed, You are not an Admin" };
      }
    case LOGOUT:
      localStorage.removeItem("FundSpiritSecurityTokenAdmin");
      localStorage.removeItem("FundSpiritAdmin");
      window.location.href = "/";
      return state;
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default reducer;
