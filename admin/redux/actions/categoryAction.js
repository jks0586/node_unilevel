import {
  deleteDataApi,
  getDataApi,
  postDataApi,
  putDataApi,
  findSinglePost,
} from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addCategory = (data, router) => async (dispatch) => {
  const response = await postDataApi("add/category", data);
};

export const findSingleCategory = (id) => async (dispatch) => {
  const response = await getDataApi("category/" + id);
  // // console.log(response);
  // if (response && response.status) {
  //   // return response;
  //   dispatch({
  //     type: GLOBAL_CONSTANT.CATEGORY,
  //     payload: response.data,
  //   });
  // } else {
  // }
};

export const getCategory = () => async (dispatch) => {
  const response = await getDataApi("category");
  //console.log(response);
  // if (response && response.status) {
  //   dispatch({
  //     type: GLOBAL_CONSTANT.CATEGORY,
  //     payload: response.data,
  //   });
  // } else {
  // }
};

export const deleteCategory = (id) => async (dispatch) => {
  const response = await deleteDataApi(id);
};

export const editCategory = (id, data, router) => async (dispatch) => {
  let media = [];
  console.log(data);

  const response = await putDataApi(`category/${id}`, data);
};
