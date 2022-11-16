import { DeleteData, GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const initalState = { loading: false, posts: [], result: 0 };
const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case GLOBAL_CONSTANT.POST_CREATE:
      return {
        ...state,
        post: [action.payload, ...state.posts],
      };
    case GLOBAL_CONSTANT.POSTS:
      return {
        ...state,
        posts: action.payload,
        result: action.payload.length,
      };

    case GLOBAL_CONSTANT.DELETE_POSTS:
      return {
        ...state,
        posts: DeleteData(state.posts, action.payload_id),
      };

    default:
      return state;
  }
};

export default postReducer;