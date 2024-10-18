// src/utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.oweke.com',
});

export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const signupUser = (data) => API.post('/auth/signup', data);