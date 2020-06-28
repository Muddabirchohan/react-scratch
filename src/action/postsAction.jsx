import axios from "axios";
var data = [];
export const fetchPosts = async () => {
  data = await axios.get("http://jsonplaceholder.typicode.com/posts");
};

export const userFetcPost = () => ({
  type: "FETCH_POST",
  payload: data,
});

export const selectedPost = (data) => ({
  type: "SELECTED_POST",
  payload: data,
});
