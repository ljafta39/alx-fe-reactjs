import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: false }
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>My Todo List</h1>
      <form onSubmit={addTodo} data-testid="add-todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="add-todo-button">Add Todo</button>
      </form>
      <ul data-testid="todo-list">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            onClick={() => toggleTodo(todo.id)}
            className={todo.completed ? 'completed' : ''}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              data-testid={`delete-todo-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;