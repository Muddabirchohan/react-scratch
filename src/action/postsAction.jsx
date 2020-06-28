import axios from "axios";
var data = [];
export const fetchPosts = async () => {
  data = await axios.get("http://jsonplaceholder.typicode.com/posts");
  console.log("posts", data);
};

export const userFetcPost = () => ({
  type: "FETCH_POST",
  payload: data,
});

export const selectedPost = (data) => ({
  type: "SELECTED_POST",
  payload: data,
});
