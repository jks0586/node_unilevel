import axios from "axios";
import {
  GLOBAL_CONSTANT,
  LOADING_END,
  LOADING_START,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from "../../config/GlobalConstant";

export const signin = (data) => async (dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "signin", data);
  const res = await response.data;

  dispatch({
    type: LOADING_END,
  });

  if (res.status == true) {
    dispatch({
      type: REQUEST_SUCCESS,
      payload: res.message,
    });

    dispatch({
      type: GLOBAL_CONSTANT.AUTH,
      payload: { user: res.data, token: res.token },
    });
    localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
  } else {
    dispatch({
      type: REQUEST_ERROR,
      payload: res.message,
    });
  }
};

export const signup = (data, router) => async (dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await axios.post(GLOBAL_CONSTANT.APP_URL + "signup", data);
  const res = await response.data;

  dispatch({
    type: LOADING_END,
  });

  if (res.status == true) {
    dispatch({
      type: REQUEST_SUCCESS,
      payload: res.message,
    });

    dispatch({
      type: GLOBAL_CONSTANT.AUTH,
      payload: { user: res.data, token: res.token },
    });
    localStorage.setItem(GLOBAL_CONSTANT.TOKEN, res.token);
    router.push("/login");
  } else {
    dispatch({
      type: REQUEST_ERROR,
      payload: res.message,
    });
  }
};