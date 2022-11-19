import axios from "axios";
import { GLOBAL_CONSTANT } from "./GlobalConstant";

export const postDataApi = async (url, data) => {
  // console.log(url);
  // console.log(data);
  // alert('fddgdf'); 
  // console.log(url, data, "fetchData");
  const response = await axios
    .post(GLOBAL_CONSTANT.BASE_URL + url, data, {
      headers: { Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN) },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      //console.log(error);
    });
  console.log(response, "response");
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





export const deleteDataApi = async (url) => {
  alert(url);
  const response = await axios
    .delete(GLOBAL_CONSTANT.BASE_URL+'posts/' + url, {
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

// export const imageUpload = async (images) => {
//   let imgArr = [];
//   for (const item of images) { 
//     const formData = new FormData();

//     if (item.camera) {
//       formData.append("file", item.camera);
//     } else {
//       formData.append("file", item);
//     }

//     formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET_ID);
//     formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);

//     const res = await fetch(process.env.NEXT_PUBLIC_CLOUD_URL, {
//       method: "POST",
//       body: formData,
//     });
//     const data = await res.json();
//     imgArr.push({ public_id: data.public_id, url: data.secure_url });
//   }
//   return imgArr;
// };
