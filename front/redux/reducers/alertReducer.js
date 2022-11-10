import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const alertReducer = (state = initalState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANT.ALERT:
      // console.log(action.payload, "action");
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
