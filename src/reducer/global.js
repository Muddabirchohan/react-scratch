let initialState = {
  subService: "global",
};

export default function global(state = initialState, action) {
  switch (action?.type) {
    case "SELECTED_SIDEBAR":
      return {
        ...state,
        subService: action.payload,
      };
    default:
      return state;
  }
}
