import { combineReducers } from "redux";
import auth from "./authReducer";
import recipe from "./recipeReducer";
import alert from "./alertReducer";

export default combineReducers({
  auth,
  recipe,
  alert,
});
