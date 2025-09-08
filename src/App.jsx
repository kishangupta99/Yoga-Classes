// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import LoginForm from './components/Auth/Login';
import RegisterForm from './components/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* This route is your normal, full-width desktop page */}
        <Route path="/" element={<Home />} />
        
        {/* Your auth routes (can also be full-width or framed) */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        
        {/* This single route points to your entire self-contained dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;