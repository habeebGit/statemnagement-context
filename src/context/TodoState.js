import React, { useReducer } from "react"

// Bring the context
import TodoContext from "./ToDoContext"

// Bring the reducer
import TodoReducer from "./TodoReducer"

// Bring the types
import {
  SET_TODO_TITLE,
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  CLEAR_TODO_TITLE
} from "./ToDoTypes"

const TodoState = ({ children }) => {
  // Define our state
  const initialState = {
    todos: [],
    title: "",
    loading: true
  }

  // Dispatch the reducer
  // This come from useReducer from ReactJS
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  // Set the title for the new todo
  // This will change whenever user type in the form later
  const setTodoTitle = (payload) => {
    dispatch({ type: SET_TODO_TITLE, payload })
  }

  // Get todos
  const getTodos = async () => {
    try {
      const todos = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      )
      const toJSON = await todos.json()

      dispatch({ type: GET_TODOS, payload: toJSON })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Create todo
  const createTodo = async (title) => {
    const newTodo = {
      title,
      completed: false
    }

    try {
      const todo = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
      })
      const toJSON = await todo.json()

      dispatch({ type: CLEAR_TODO_TITLE })
      dispatch({ type: CREATE_TODO, payload: toJSON })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })

      dispatch({ type: DELETE_TODO, payload: id })
    } catch (err) {
      console.error(err.message)
    }
  }

  // Destruct the states
  const { todos, title, loading } = state

  // Here's where we gonna use this state and funcitons to dealing with the context
  // The context will wrapping our entire application with this component and accept children in it
  // Anything state or function, must be passed in to value props in this provider in order to use it
  // NOTE: PLEASE NOTICE, IF YOU DIDN'T PASS THE STATE OR THE FUNCTION in THIS VALUE PROPS, YOU WILL GET AN ERROR
  return (
    <TodoContext.Provider
      value={{
        todos,
        title,
        loading,
        getTodos,
        setTodoTitle,
        createTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState