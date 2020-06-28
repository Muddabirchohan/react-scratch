import axios from "axios";
var data = [];
export const fetchUsers = async () => {
  data = await axios.get("https://jsonplaceholder.typicode.com/users");
};

export const userFetcAction = () => ({
  type: "FETCH_USERS",
  payload: data,
});

export const selectedUser = (user) => ({
  type: "SELECTED_USER",
  payload: user,
});
