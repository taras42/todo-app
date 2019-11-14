import { ADD_LIST } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      
    }
    default:
      return state;
  }
}