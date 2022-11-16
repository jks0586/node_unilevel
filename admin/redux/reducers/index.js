import { combineReducers } from "redux";
import auth from "./authReducer";
import posts from "./postReducer";
import alert from "./alertReducer";

export default combineReducers({
  auth,
  posts,
  alert,
});
