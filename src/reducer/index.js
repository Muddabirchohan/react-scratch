import { combineReducers } from "redux";
import global from "./global";
import user from "./users";
import post from "./post";

export default combineReducers({
  global,
  user,
  post,
});
