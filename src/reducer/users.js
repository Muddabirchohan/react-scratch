let initialState = {
  users: [],
  selectedUser: {},
};

export default function user(state = initialState, action) {
  switch (action?.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload.data,
      };
    case "SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
}
