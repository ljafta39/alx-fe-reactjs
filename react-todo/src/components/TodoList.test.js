import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  // Initial render test
  test('renders initial todo list', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  // Add todo test
  test('adds a new todo', () => {
    render(<TodoList />);
    
    // Find input and submit button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Enter new todo and submit
    fireEvent.change(input, { target: { value: 'New Todo Test' } });
    fireEvent.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Todo Test')).toBeInTheDocument();
  });

  // Toggle todo test
  test('toggles todo completion', () => {
    render(<TodoList />);
    
    // Find first todo item
    const todoItem = screen.getByText('Learn React');
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // Check if todo is marked as completed
    expect(todoItem).toHaveClass('completed');
  });

  // Delete todo test
  test('deletes a todo', () => {
    render(<TodoList />);
    
    // Find delete button for first todo
    const deleteButton = screen.getByTestId('delete-todo-1');
    
    // Click delete
    fireEvent.click(deleteButton);
    
    // Check if todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Prevent adding empty todo
  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Ensure no new todo is added
    const todoList = screen.getByTestId('todo-list');
    expect(todoList.children.length).toBe(3); // Initial 3 todos
  });
});