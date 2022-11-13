export const GLOBAL_CONSTANT = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_URL: "http://localhost:5000/",
  TOKEN: "TOKEN",
  AUTH: "AUTH",
  ALERT: "ALERT",
  posts_create: "posts_create",
  posts: " posts",
  BASE_URL: "http://localhost:5000/",
};
export const DeleteData = (data, id) => {
  const newData = data.filter((d) => d._id !== id);
  return newData;
};

export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
