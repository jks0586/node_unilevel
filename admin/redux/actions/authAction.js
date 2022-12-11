import axios from "axios";
import { postDataApi } from "../../config/fetchData";
import { 
  GLOBAL_CONSTANT,
  LOADING_END,
  LOADING_START,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from "../../config/GlobalConstant";

// export const register = (data, router) => async (dispatch) => {
//   dispatch({
//     type: LOADING_START,
//   });

//   const response = await axios.post(
//     GLOBAL_CONSTANT.APP_URL + "auth/register",
//     data
//   );
//   const res = await response.data;

//   dispatch({
//     type: LOADING_END,
//   });

//   if (res.status == true) {
//     dispatch({
//       type: REQUEST_SUCCESS,
//       payload: res.message,
//     });
//     console.log(res);

//     router.push("/login");
//   } else {
//     dispatch({
//       type: REQUEST_ERROR,
//       payload: res.message,
//     });
//   }
// };

export const register = (data) => async (dispatch) => {
  dispatch({
    type: GLOBAL_CONSTANT.ALERT,
    payload: { loading: true },
  });

  const response = await postDataApi("register", data);
  dispatch({
    type: GLOBAL_CONSTANT.ALERT,
    payload: { loading: false },
  });
  if (response && response.status) {
    dispatch({
      type: GLOBAL_CONSTANT.ALERT,
      payload: { success: response.message },
    });
  } else {
    dispatch({
      type: GLOBAL_CONSTANT.ALERT,
      payload: { error: response.message },
    });
  }
};

//LOGIN METHOD
export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await axios.post(
    GLOBAL_CONSTANT.APP_URL + "login",
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

export const authentication = () => async (dispatch) => {
  const response = await postDataApi("/authentication", {});
  if (response && response.status) {
    dispatch({
      type: GLOBAL_CONSTANT.AUTH,
      payload: { token: response.token, user: response.data },
    });
    localStorage.setItem(GLOBAL_CONSTANT.TOKEN, response.token);
  }
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
