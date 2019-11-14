import { combineReducers } from "redux";
import todos from "./todos";
import lists from "./lists";

export default combineReducers({ todos, lists });
