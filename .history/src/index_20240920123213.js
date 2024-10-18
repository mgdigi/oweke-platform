// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';  // Import App component
import Signup from './components/Signup'; // Import Signup component
import VerifyEmail from './components/VerifyEmail'; // Optional: Import VerifyEmail component
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main App component */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        <Route path="/verify-email" element={<VerifyEmail />} /> {/* Optional: Verify Email page */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();a