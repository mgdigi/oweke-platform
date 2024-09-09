import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global CSS
import App from './App';  // Ensure the correct path to your App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);