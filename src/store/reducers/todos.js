import { ADD_TODO } from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      
    }
    default:
      return state;
  }
}