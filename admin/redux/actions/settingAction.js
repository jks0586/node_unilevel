import {
  deleteDataApi,
  getDataApi,
  postDataApiSetting,
  putDataApi,
} from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const getSetting = (data, router) => async (dispatch) => {

  const response = await postDataApiSetting("setting/getsetting", data);

};


export const addSetting = (data, router) => async (dispatch) => {
  const response = await postDataApiSetting("setting/create", data);
};

export const findSingle1Setting = (id) => async (dispatch) => {
  const response = await getDataApi("setting/" + id);
  // console.log(response);
  if (response && response.status) {
    // return response;
    dispatch({
      type: GLOBAL_CONSTANT.SETTING,
      payload: response.data,
    });
  } else {
  }
};

export const getPost = () => async (dispatch) => {
  const response = await getDataApi("setting");
  //console.log(response);
  if (response && response.status) {
    dispatch({
      type: GLOBAL_CONSTANT.SETTING,
      payload: response.data,
    });
  } else {
  }
};

export const deletePost = (id) => async (dispatch) => {
  const response = await deleteDataApi(id);
};

export const editSetting = (id, data, router) => async (dispatch) => {
  let media = [];
  console.log(data);

  const response = await putDataApi(`setting/${id}`, data);
};
