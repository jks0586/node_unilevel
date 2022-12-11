import axios from "axios";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";
 
export const signin = (data) => async (dispatch) => {
  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "signin", data);
  const res = await response.data;
  dispatch({
    type: GLOBAL_CONSTANT.AUTH,
    payload: { user: res.data, token: res.token },
  });
  localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
};


export const signup = (data, router) => async (dispatch) => {
  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "signup", data);
  const res = await response.data;
  dispatch({
    type: GLOBAL_CONSTANT.AUTH,
    payload: { user: res.data, token: res.token },
  });
  localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
  router.push("/login");
};
