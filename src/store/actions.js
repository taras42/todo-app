import { ADD_TODO, ADD_LIST } from "./actionTypes";

export const addList = name => ({
  type: ADD_LIST,
  payload: { name, id: Date.now() }
});
