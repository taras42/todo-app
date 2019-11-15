import { ADD_TODO, ADD_LIST, REMOVE_TODO } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      const { id, name } = action.payload;
      
      return {
        [id]: {
          id,
          name,
          todos: []
        },
        ...state
      }
    }
    case ADD_TODO: {
      const { listId, ...todo } = action.payload;

      const list = state[listId];

      return {
        ...state,
        [listId]: {
          ...list,
          todos: [
            todo,
            ...list.todos
          ]
        }
      }
    }
    case REMOVE_TODO: {
      const { todoId, listId } = action.payload;

      const list = state[listId];
      const todos = list.todos.filter((todo) => {
        return todo.id !== todoId;
      });

      return {
        ...state,
        [listId]: {
          ...list,
          todos
        }
      }
    }
    default:
      return state;
  }
}