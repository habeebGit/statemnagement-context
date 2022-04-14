// Bring the useContext to using context
import React, { useContext } from "react"

// Context
import TodoContext from "../context/ToDoContext"

const TodoForm = () => {
  const { setTodoTitle, createTodo, title } = useContext(TodoContext)

  const onCreateTodo = (e) => {
    e.preventDefault()

    if (title === "") {
      alert("Fill the form")
      return
    }

    createTodo(title)
  }

  return (
    <form
      className='flex justify-center items-center mt-4'
      onSubmit={onCreateTodo}
    >
      <input
        type='text'
        name='title'
        className='input'
        onChange={(e) => setTodoTitle(e.target.value)}
        value={title}
        placeholder='Things you wanna do...'
      />
      <button type='submit' className='btn'>
        Save
      </button>
    </form>
  )
}

export default TodoForm