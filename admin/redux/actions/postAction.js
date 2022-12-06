import { deleteDataApi, getDataApi, postDataApi, putDataApi, findSinglePost, deleteDataApipost, postDataApiPost } from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addPost = (data, router) => async (dispatch) => {
   
    const response = await postDataApiPost("posts/create", data);
  
   
  };
  
  export const findSingle1Post = (id) => async (dispatch) => {
    
    const response = await getDataApi("posts/"+id);
    // console.log(response);
    if (response && response.status) {
      // return response;
      dispatch({
        type: GLOBAL_CONSTANT.POSTS,
        payload: response.data,
      });
    } else {
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
    const response = await deleteDataApipost(id);
  
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
  
  export const editPost = (id,data, router) => async (dispatch) => {
    let media = [];
    console.log(data);
    // dispatch({
    //   type: GLOBAL_CONSTANT.ALERT,
    //   payload: {
    //     loading: true,
    //   },
    // });
  
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
  
    const response = await putDataApi(`posts/${id}`, data);
  
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
  