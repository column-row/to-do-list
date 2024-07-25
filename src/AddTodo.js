// src/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  // Using useState hook to manage the input value
  const [input, setInput] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior

    // Calling the addTodo function passed via props with the new todo object
    addTodo({
      text: input,
      id: Date.now(), // Using current timestamp as a unique id
      completed: false, // Setting the initial completed state to false
    });

    // Clearing the input field after submission
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input} // Binding the input value to the state
        onChange={(e) => setInput(e.target.value)} // Updating the state on input change
        placeholder="Add a new todo" // Placeholder text for the input field
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
