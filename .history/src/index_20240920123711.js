// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // Import App component
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App /> {/* The entire app is wrapped by one Router */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();