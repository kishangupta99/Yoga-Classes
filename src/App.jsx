// src/App.jsx

import React from 'react';
import Home from './pages/Home';
import AuthForm from './components/Auth/Register';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LoginForm from './components/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;

