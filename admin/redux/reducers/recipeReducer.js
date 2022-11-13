import { DeleteData, GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const initalState = { loading: false, recipes: [], result: 0 };
const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANT.ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
      };
    case GLOBAL_CONSTANT.RECIPES:
      return {
        ...state,
        recipes: action.payload,
        result: action.payload.length,
      };

    case GLOBAL_CONSTANT.DLETE_RECIPE:
      return {
        ...state,
        recipes: DeleteData(state.recipes, action.payload_id),
      };

    default:
      return state;
  }
};

export default recipeReducer;
