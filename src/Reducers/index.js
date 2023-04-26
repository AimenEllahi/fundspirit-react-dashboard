import { combineReducers } from "redux";
// import Packages from "./packages";
// import Auth from "./auth";
import Users from "./users";
import Campaigns from "./campaigns";
import NPOs from "./npos";
import Auth from "./auth";

export default combineReducers({
  Users,
  Campaigns,
  NPOs,
  Auth,
});
