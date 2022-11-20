import { deleteDataApi, getDataApi, postDataApi, putDataApi } from "../../config/fetchData";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

export const addCategory = (data, router) => async (dispatch) => {
  const response = await postDataApi("add-category", data);
};
 

// export const getPost = () => async (dispatch) => {
//   const response = await getDataApi("category"); 

//   if (response && response.status) {
//     dispatch({
//       type: GLOBAL_CONSTANT.POSTS,
//       payload: response.data,
//     });
//   } else {
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   const response = await deleteDataApi(id);
// };

// export const editPost = (id, data, router) => async (dispatch) => {
//   let media = [];
//   console.log(data);

//   const response = await putDataApi(`posts/${id}`, data);
// };
