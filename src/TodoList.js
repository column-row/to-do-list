// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem'; // Importing TodoItem component

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {/* Mapping through the todos array and rendering a TodoItem for each todo */}
      {todos.map((todo) => (
        // Passing the todo object and deleteTodo function as props to TodoItem
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
