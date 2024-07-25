// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList'; // Importing TodoList component
import AddTodo from './AddTodo'; // Importing AddTodo component
import './App.css'

function App() {
  // Using useState hook to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    // Updating the todos state by appending the new todo
    setTodos([...todos, todo]);
  };

  // Function to delete a todo from the list
  const deleteTodo = (id) => {
    // Filtering out the todo with the given id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Rendering AddTodo component and passing addTodo function as a prop */}
      <AddTodo addTodo={addTodo} />
      {/* Rendering TodoList component and passing todos array and deleteTodo function as props */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

