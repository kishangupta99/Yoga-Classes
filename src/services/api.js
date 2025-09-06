import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // The base URL of your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// IMPORTANT: This interceptor runs before each request.
// It checks if a token exists in localStorage and adds it to the request header.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Add the token to the 'x-auth-token' header
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;