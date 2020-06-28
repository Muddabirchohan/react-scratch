let initialState = {
  posts: [],
};

export default function post(state = initialState, action) {
  switch (action?.type) {
    case "FETCH_POST":
      return {
        ...state,
        posts: action.payload.data,
      };
    default:
      return state;
  }
}
