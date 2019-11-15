import { ADD_TODO, ADD_LIST, REMOVE_TODO, MOVE_TODO, REMOVE_LIST } from "./actionTypes";

export const addList = name => ({
  type: ADD_LIST,
  payload: { name, id: Date.now() }
});

export const removeList = (id) => {
    return {
        type: REMOVE_LIST,
        payload: {
            id
        }
    }
}

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

export const moveTodo = (id, from, to) => {
    return {
        type: MOVE_TODO,
        payload: {
            id,
            from,
            to
        }
    }
}