// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <Router>
    <App />
  </Router>
);
