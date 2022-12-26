import {
  getDataApi,
  putDataApi,
  deleteDataApipost,
  postDataApiPost,
} from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addPost = (data, router) => async (dispatch) => {
  const response = await postDataApiPost("posts/create", data);
};

export const findSingle1Post = (id) => async (dispatch) => {
  const response = await getDataApi("posts/" + id);
  
};

export const getPost = () => async (dispatch) => {
  const response = await getDataApi("posts");
  //console.log(response);
};

export const deletePost = (id) => async (dispatch) => {
  const response = await deleteDataApipost(id);
};

export const editPost = (id, data, router) => async (dispatch) => {
  let media = [];
  console.log(data);

  const response = await putDataApi(`posts/${id}`, data);
};
