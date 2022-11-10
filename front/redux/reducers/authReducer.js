import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const initialState = {};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANT.AUTH:
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
