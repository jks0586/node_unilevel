import {
  deleteDataApi,
  getDataApi,
  imageUpload,
  postDataApi,
  putDataApi,
} from "../../config/fetchData";

export const addRecipe = (data, router) => async (dispatch) => {
  let media = [];
  dispatch({
    type: GLOBAL_CONSTANT.ALERT,
    payload: {
      loading: true,
    },
  });

  if (data.img) {
    media = await imageUpload(data.img);
  }
  data = { ...data, ["img"]: media };
  data = { ...data, ["lat"]: "00.00" };
  data = { ...data, ["lng"]: "00.00" };
  console.log(data);
  const response = await postDataApi("product/create", data);

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

  // const response = await postDataApi("product/create", data);
  // console.log(data);
  // const response = await axios.post(
  //   GLOBAL_CONSTANT.APP_URL + "product/create",
  //   data,
  //   {
  //     headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
  //   }
  // );
  // const res = await response.data;

  // if (res && res.status) {
  //   dispatch({
  //     type: GLOBAL_CONSTANT.ADD_RECIPE,
  //     payload: res.data,
  //   });
  //   dispatch({
  //     type: GLOBAL_CONSTANT.ALERT,
  //     payload: { success: res.message },
  //   });
  //   router.back();
  // } else {
  //   dispatch({
  //     type: GLOBAL_CONSTANT.ALERT,
  //     payload: { error: res.message },
  //   });
  // }
};

export const getRecipes = () => async (dispatch) => {
  const response = await getDataApi("product/list");
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

  const response = await deleteDataApi(`product/${data._id}/delete`);

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

  const response = await putDataApi(`product/${data._id}/update`, data);

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
