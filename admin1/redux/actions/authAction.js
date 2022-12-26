import axios from "axios";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

//for Register
export const register = (data, router) => async (dispatch) => {
  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "register", data);
  const res = await response.data;

  dispatch({
    type: GLOBAL_CONSTANT.AUTH,
    payload: { user: res.data, token: res.token },
  });
  localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
  router.push("/login");
};

//LOGIN METHOD
export const login = (data) => async (dispatch) => {
  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "login", data);
  const res = await response.data;

  dispatch({
    type: GLOBAL_CONSTANT.AUTH,
    payload: { user: res.data, token: res.token },
  });
  localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
};

//LOGOUT METHOD
export const logout = (router) => async (dispatch) => {
  localStorage.removeItem(GLOBAL_CONSTANT.TOKEN);
  dispatch({
    type: GLOBAL_CONSTANT.AUTH,
    payload: {},
  });
  router.push("/login");
};
