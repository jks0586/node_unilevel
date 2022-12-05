export const GLOBAL_CONSTANT = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_URL: "http://localhost:5000/",
  TOKEN: "TOKEN",
  AUTH: "AUTH",
  ALERT: "ALERT",
  POST_CREATE: "POST_CREATE",
  POSTS: " POSTS",
  DELETE_POSTS: "DELETE_POSTS",
  CATEGORY_CREATE:"CATEGORY_CREATE",
  CATEGORY:"CATEGORY",
  DELETE_CATEGORY:"DELETE_CATEGORY",
  PRODUCT_CREATE:"PRODUCT_CREATE",
  PRODUCT:"PRODUCT",
  DELETE_PRODUCT:"DELETE_PRODUCT",
  ROLE: "ROLE",
  ROLE_CREATE:"ROLE_CREATE",
  DELETE_ROLE:"DELETE_ROLE",
  BASE_URL: "http://localhost:5000/",
};


export const DeleteData = (data, id) => {
  const newData = data.filter((d) => d._id !== id);
  return newData;
};

