import { ADD_TODO, ADD_LIST, REMOVE_TODO } from "./actionTypes";

export const addList = name => ({
  type: ADD_LIST,
  payload: { name, id: Date.now() }
});

export const addTodo = (listId, name, description, date, status) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            name,
            listId,
            description,
            date,
            status
        }
    }
}

export const removeTodo = (todoId, listId) => {
    return {
        type: REMOVE_TODO,
        payload: {
            listId,
            todoId
        }
    }
}