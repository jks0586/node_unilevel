export const GLOBAL_CONSTANT = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_URL: "http://localhost:5000/",
  TOKEN: "TOKEN",
  AUTH: "AUTH",
  ALERT: "ALERT",
  POST_CREATE: "POST_CREATE",
  POSTS: " POSTS",
  DELETE_POSTS: "DELETE_POSTS",
  BASE_URL: "http://localhost:5000/",
};


export const DeleteData = (data, id) => {
  const newData = data.filter((d) => d._id !== id);
  return newData;
};

