import {
  LOADING_END,
  LOADING_START,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from "../../config/GlobalConstant";

const loaderReducer = (state = null, action) => {
  switch (action.type) {
    case LOADING_START:
      return { loading: true };
    case LOADING_END:
      return { loading: false };
    case REQUEST_SUCCESS:
      return { loading: false, message: action.payload };
    case REQUEST_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default loaderReducer;
