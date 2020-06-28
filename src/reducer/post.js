let initialState = {
  posts: [],
  selectedPost: {},
};

export default function post(state = initialState, action) {
  switch (action?.type) {
    case "FETCH_POST":
      return {
        ...state,
        posts: action.payload.data,
      };
    case "SELECTED_POST":
      return {
        ...state,
        selectedPost: action.payload,
      };

    default:
      return state;
  }
}
