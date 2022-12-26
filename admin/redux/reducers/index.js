import { combineReducers } from "redux";
import auth from "./authReducer";
import posts from "./postReducer";
import alert from "./alertReducer";
import category from "./categoryReducer";

export default combineReducers({ 
  auth,
  posts,
  alert,
  category
});
