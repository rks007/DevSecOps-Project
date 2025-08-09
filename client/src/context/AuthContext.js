// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from '../axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('token') || null);

  const login = async (email, password) => {
    try {
<<<<<<< HEAD
      const res = await axios.post('/auth/login', { email, password });
=======
      const res = await axios.post('/api/auth/login', { email, password });
>>>>>>> b618d01754b2c63ee9ef65f3a29f2c26a274c3c4
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || 'Login failed. Please try again.',
      };
    }
  };

  const register = async (name, email, password) => {
    try {
<<<<<<< HEAD
      await axios.post('/auth/register', { name, email, password });
=======
      await axios.post('/api/auth/register', { name, email, password });
>>>>>>> b618d01754b2c63ee9ef65f3a29f2c26a274c3c4
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || 'Registration failed.',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
