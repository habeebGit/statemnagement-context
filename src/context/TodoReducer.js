// Dont Forget import the types
import {
    SET_TODO_TITLE,
    GET_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    CLEAR_TODO_TITLE
  } from "./ToDoTypes"
  
  export default (state, { type, payload }) => {
    switch (type) {
      // Get all todos
      case GET_TODOS:
        return {
          ...state,
          loading: false,
          todos: payload
        }
      // Set Todo title for form
      case SET_TODO_TITLE:
        return {
          ...state,
          title: payload
        }
      // Create a new todo
      case CREATE_TODO:
        return {
          ...state,
          todos: [payload, ...state.todos]
        }
      // Clear todo title after create
      case CLEAR_TODO_TITLE:
        return {
          ...state,
          title: ""
        }
      // Delete a todo
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== payload)
        }
      default:
        return state
    }
  }