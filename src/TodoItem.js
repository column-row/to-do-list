// src/TodoItem.js
import React from 'react';

// Function component for a single todo item
function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      <span>{todo.text}</span> {/* Displaying the text of the todo */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* Button to delete the todo */}
    </li>
  );
}

export default TodoItem;
