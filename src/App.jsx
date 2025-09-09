// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'; // Your landing page
import LoginForm from './components/Auth/Login';
import RegisterForm from './components/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard'; // The all-in-one dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        
        {/* This route now points to your entire self-contained dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;