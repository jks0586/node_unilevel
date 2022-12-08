import axios from "axios";
import { GLOBAL_CONSTANT } from "./GlobalConstant";

export const postDataApi = async (url, data) => {
  const response = await axios
    .post(GLOBAL_CONSTANT.BASE_URL + url, data, {
      headers: {
        Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN),
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {});
};

//post add
export const postDataApiPost = async (url, data) => {
  const response = await axios
    .post(GLOBAL_CONSTANT.BASE_URL + url, data, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      //console.log(error);
    });
};

//Setting add
export const postDataApiSetting = async (url, data) => {
  // alert(url);
  // alert(data);
  // console.log(data);
  const response = await axios
    .post(GLOBAL_CONSTANT.BASE_URL + url, data, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .catch((error) => {
      //console.log(error);
    });
  return response;
};

export const putDataApi = async (url, data) => {
  delete data._id;
  delete data.deletedAt;
  delete data.createdAt;
  delete data.updatedAt;
  delete data.__v;
  const response = await axios
    .put(GLOBAL_CONSTANT.BASE_URL + url, data, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getDataApi = async (url) => {
  const response = await axios
    .get(GLOBAL_CONSTANT.BASE_URL + url, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

// export const findSinglePost = async (url) => {
//   const response = await axios
//     .get(GLOBAL_CONSTANT.BASE_URL + url, {
//       headers: { Authorization: localStorage.findSinglePost(GLOBAL_CONSTANT.TOKEN) },
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return response;
// };

//category detete
export const deleteDataApi = async (url) => {
  // alert(url);
  const response = await axios
    .delete(GLOBAL_CONSTANT.BASE_URL + "category/" + url, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

//posts delete
export const deleteDataApipost = async (url) => {
  // alert(url);
  const response = await axios
    .delete(GLOBAL_CONSTANT.BASE_URL + "posts/" + url, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const deleteDataApiProduct = async (url) => {
  // alert(url);
  const response = await axios
    .delete(GLOBAL_CONSTANT.BASE_URL + "product/" + url, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const deleteDataApiRole = async (url) => {
  // alert(url);
  const response = await axios
    .delete(GLOBAL_CONSTANT.BASE_URL + "role/" + url, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
