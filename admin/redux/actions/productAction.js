import { deleteDataApi, deleteDataApi1, deleteDataApiProduct, getDataApi, postDataApi, putDataApi } from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addProduct = (data, router) => async (dispatch) => {
    const response = await postDataApi("add/product", data);
  };
  
  export const findSingleProduct = (id) => async (dispatch) => {
    const response = await getDataApi("product/" + id);
    // console.log(response);
    if (response && response.status) {
      // return response;
      dispatch({
        type: GLOBAL_CONSTANT.PRODUCT,
        payload: response.data,
      });
    } else {
    }
  };
  
  export const getProduct = () => async (dispatch) => {
    const response = await getDataApi("product");
    //console.log(response);
    if (response && response.status) {
      dispatch({
        type: GLOBAL_CONSTANT.PRODUCT,
        payload: response.data,
      });
    } else {
    }
  };
  
  export const deleteProduct = (id) => async (dispatch) => {
    // console.log(id);
    const response = await deleteDataApiProduct(id);
  };
  
  export const editProduct = (id, data, router) => async (dispatch) => {
    let media = [];
    console.log(data);
  
    const response = await putDataApi(`product/${id}`, data);
  };
  