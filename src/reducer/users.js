let initialState = {
  users: [],
};

export default function user(state = initialState, action) {
  switch (action?.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.data,
      };
    default:
      return state;
  }
}
