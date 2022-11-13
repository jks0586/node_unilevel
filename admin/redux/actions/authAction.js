import {
  GLOBAL_CONSTANT,
  LOADING_END,
  LOADING_START,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from "../../config/GlobalConstant";
import axios from "axios";

export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await axios.post(
    GLOBAL_CONSTANT.APP_URL + "auth/login",
    data
  );
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

export const register = (data, router) => async (dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await axios.post(
    GLOBAL_CONSTANT.APP_URL + "auth/register",
    data
  );
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
