import React from "react"

// Styles
import "./style.css"

// Components
import TodoForm from "./components/TodoContext"
import TodoList from "./components/TodoForm"

// State
import TodoState from "./context/TodoState"

const App = () => {
  return (
    // Wrap entire app with State
    <TodoState>
      <div className='container flex flex-col mt-4'>
        <h1 className='text-center'>Todo App With Context</h1>

        {/* Todo Form */}
        <TodoForm />

        {/* Todo List */}
        <div className='flex flex-col mt-4'>
          <TodoList />
        </div>
      </div>
    </TodoState>
  )
}

export default App


/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */