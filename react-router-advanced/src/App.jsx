import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog/:id" element={<BlogPost />} />

    </Routes>
  </Router>
);

export default App;
