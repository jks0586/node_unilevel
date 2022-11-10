export const GLOBAL_CONSTANT = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_URL: "https://recipe-api-theta.vercel.app/",
  TOKEN: "TOKEN",
  AUTH: "AUTH",
  ALERT: "ALERT",
  BASE_URL: "https://recipe-api-theta.vercel.app/",
};

export const DeleteData = (data, id) => {
  const newData = data.filter((d) => d._id !== id);
  return newData;
};
export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";
