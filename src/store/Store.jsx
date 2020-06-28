import { applyMiddleware, thunkMiddleware, createStore, compose } from "redux";
import rootReducer from "./../reducer/index";

const store = createStore(
  rootReducer
  // applyMiddleware({...thunkMiddleware})
);

export default store;
