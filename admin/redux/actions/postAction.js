import { deleteDataApi, getDataApi, postDataApi, putDataApi } from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addPost = (data, router) => async (dispatch) => {
    //let media = [];
    
    // console.log(data);
    // console.log(router);
    // alert('aaaaa');
    // if (data.img) {
    //   media = await imageUpload(data.img);
    // }
    // data = { ...data, ["img"]: media };
    // data = { ...data, ["lat"]: "00.00" };
    // data = { ...data, ["lng"]: "00.00" };
    // console.log(data);
    const response = await postDataApi("posts/create", data);
  
    if (response && response.status) {
      dispatch({
        type: GLOBAL_CONSTANT.POST_CREATE,
        payload: response.data,
      });
      dispatch({
        type: GLOBAL_CONSTANT.ALERT,
        payload: { success: response.message },
      });
      router.back();
    } else {
      dispatch({
        type: GLOBAL_CONSTANT.ALERT,
        payload: { error: response.message },
      });
    }
  };
  
  export const getPost = () => async (dispatch) => {
    const response = await getDataApi("posts");
    //console.log(response);
    if (response && response.status) {
      dispatch({
        type: GLOBAL_CONSTANT.POSTS,
        payload: response.data,
      });
    } else {
    }
  };
  
  export const deletePost = (id) => async (dispatch) => {
    // dispatch({
    //   type: GLOBAL_CONSTANT.DELETE_POSTS,
    //   payload: id,
    // });
  // console.log(id);
    const response = await deleteDataApi(id);
  
    // if (response && response.status) {
    //   dispatch({
    //     type: GLOBAL_CONSTANT.ALERT,
    //     payload: { success: response.message },
    //   });
    // } else {
    //   dispatch({
    //     type: GLOBAL_CONSTANT.ALERT,
    //     payload: { error: response.message },
    //   });
    // }
  };
  
  export const editPost = (data, router) => async (dispatch) => {
    let media = [];
    dispatch({
      type: GLOBAL_CONSTANT.ALERT,
      payload: {
        loading: true,
      },
    });
  
    // if (data.img) {
    //   let imageData = data.img.filter((file) => file.public_id == null);
    //   media = await imageUpload(imageData);
    // }
    // data = {
    //   ...data,
    //   ["img"]: [...data.img.filter((file) => file.public_id != null), ...media],
    // };
    // data = { ...data, ["lat"]: "00.00" };
    // data = { ...data, ["lng"]: "00.00" };
  
    const response = await putDataApi(`Update/${data._id}/Posts`, data);
  
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
  