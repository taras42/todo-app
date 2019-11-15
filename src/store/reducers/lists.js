import { ADD_TODO, ADD_LIST, REMOVE_TODO, MOVE_TODO, REMOVE_LIST } from "../actionTypes";

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
    case REMOVE_LIST: {
      const { id } = action.payload;

      return Object.keys(state).reduce((memo, key) => {
        if (Number(key) !== id) {
          memo[key] = state[key];
        }

        return memo;
      }, {});
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
    case MOVE_TODO: {
      const { id, from, to } = action.payload;

      const fromList = state[from];
      const toList = state[to];

      const { fromListTodos, todo } = fromList.todos.reduce((memo, todo) => {
        if (todo.id !== id) {
          memo.fromListTodos.push(todo);
        } else {
          memo.todo = todo;
        }

        return memo;
      }, {
        fromListTodos: [],
        todo: {}
      });

      const toListTodos = [todo, ...toList.todos];

      return {
        ...state,
        [from]: {
          ...fromList,
          todos: fromListTodos
        },
        [to]: {
          ...toList,
          todos: toListTodos
        }
      }
    }
    default:
      return state;
  }
}