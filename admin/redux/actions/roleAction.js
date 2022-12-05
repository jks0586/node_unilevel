import {
    getDataApi,
    postDataApi, 
    putDataApi,
    findSinglePost,
    deleteDataApiRole,
  } from "../../config/fetchData";
  import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";
  
  export const addRole = (data, router) => async (dispatch) => {
    const response = await postDataApi("add/role", data);
  };
  
  export const findSingleRole = (id) => async (dispatch) => {
    const response = await getDataApi("role/" + id);
    // console.log(response);
    if (response && response.status) {
      // return response;
      dispatch({
        type: GLOBAL_CONSTANT.ROLE,
        payload: response.data,
      });
    } else {
    }
  };
  
  export const getRole = () => async (dispatch) => {
    const response = await getDataApi("role");
    //console.log(response);
    if (response && response.status) {
      dispatch({
        type: GLOBAL_CONSTANT.ROLE,
        payload: response.data,
      });
    } else {
    }
  };
  
  export const deleteRole = (id) => async (dispatch) => {
    // console.log(id);
    const response = await deleteDataApiRole(id);
  };
  
  export const editRole = (id, data, router) => async (dispatch) => {
    let media = [];
    console.log(data);
  
    const response = await putDataApi(`role/${id}`, data);
  };
  