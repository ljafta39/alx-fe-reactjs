import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles a todo as completed', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  const deleteButton = screen.getByText(/Delete/i);

  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
