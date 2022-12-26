import { DeleteData, GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const initalState = { loading: false, category: [], result: 0 };
const categoryReducer = (state = initalState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANT.CATEGORY_CREATE:
      return {
        ...state,
        category: [action.payload, ...state.category],
      };
    case GLOBAL_CONSTANT.CATEGORY:
      return {
        ...state,
        category: action.payload,
        result: action.payload.length,
      };


    case GLOBAL_CONSTANT.DELETE_CATEGORY:
      return {
        ...state,
        category: DeleteData(state.category, action.payload_id),
      };

    default:
      return state;
  }
  
  
};

export default categoryReducer;