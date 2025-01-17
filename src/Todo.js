import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeOne, clearTodo } from './features/todoSlice';

function Todo() {
  const items = useSelector((state) => state.todos.items); // Accessing to-dos from Redux store
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  // Function to handle adding a to-do
  const submitForm = (e) => {
    e.preventDefault();
    if (input.trim()) { // Prevent empty to-dos
      dispatch(addTodo(input));
      setInput(''); // Clear input after submission
    }
  };

  // Render to-do items with remove functionality
  const renderItems = items.map((item, index) => (
    <li key={index} onClick={() => dispatch(removeOne(index))}>
      {item}
    </li>
  ));

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a to-do"
        />
        <button type="submit">Add</button>
      </form>
      <ul>{renderItems}</ul>
      <button onClick={() => dispatch(clearTodo())}>Clear All</button>
    </div>
  );
}

export default Todo;
