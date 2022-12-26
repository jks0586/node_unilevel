import {
    getDataApi,
    postDataApi, 
    putDataApi,
    deleteDataApiRole,
  } from "../../config/fetchData";
 
  
  export const addRole = (data, router) => async (dispatch) => {
    const response = await postDataApi("add/role", data);
  };
  
  export const findSingleRole = (id) => async (dispatch) => {
    const response = await getDataApi("role/" + id);
  };
  
  export const getRole = () => async (dispatch) => {
    const response = await getDataApi("role");
  };
  
  export const deleteRole = (id) => async (dispatch) => {
    const response = await deleteDataApiRole(id);
  };
  
  export const editRole = (id, data, router) => async (dispatch) => {
    let media = [];
    console.log(data);
  
    const response = await putDataApi(`role/${id}`, data);
  };
  