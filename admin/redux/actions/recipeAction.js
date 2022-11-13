import {
  deleteDataApi,
  getDataApi,
  imageUpload,
  postDataApi,
  putDataApi,
} from "../../config/fetchData";

export const addRecipe = (data, router) => async (dispatch) => {
  let media = [];
  

  if (data.img) {
    media = await imageUpload(data.img);
  }
  data = { ...data, ["img"]: media };
  data = { ...data, ["lat"]: "00.00" };
  data = { ...data, ["lng"]: "00.00" };
  console.log(data);
  const response = await postDataApi("posts/create", data);

  if (response && response.status) {
    dispatch({
      type: GLOBAL_CONSTANT.ADD_RECIPE,
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

export const getRecipes = () => async (dispatch) => {
  const response = await getDataApi("posts");
  //console.log(response);
  if (response && response.status) {
    dispatch({
      type: GLOBAL_CONSTANT.RECIPES,
      payload: response.data,
    });
  } else {
  }
};

export const deleteRecipe = (data) => async (dispatch) => {
  dispatch({
    type: GLOBAL_CONSTANT.DLETE_RECIPE,
    payload: data,
  });

  const response = await deleteDataApi(`Delete/${data._id}/Posts`);

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

export const editRecipe = (data, router) => async (dispatch) => {
  let media = [];
  dispatch({
    type: GLOBAL_CONSTANT.ALERT,
    payload: {
      loading: true,
    },
  });

  if (data.img) {
    let imageData = data.img.filter((file) => file.public_id == null);
    media = await imageUpload(imageData);
  }
  data = {
    ...data,
    ["img"]: [...data.img.filter((file) => file.public_id != null), ...media],
  };
  data = { ...data, ["lat"]: "00.00" };
  data = { ...data, ["lng"]: "00.00" };

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
