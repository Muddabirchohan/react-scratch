import axios from "axios";
var data = [];
export const fetchPosts = async () => {
  debugger;
  data = await axios.get("http://jsonplaceholder.typicode.com/posts");
  console.log("posts", data);
};

export const userFetcPost = () => ({
  type: "FETCH_POST",
  payload: data,
});
