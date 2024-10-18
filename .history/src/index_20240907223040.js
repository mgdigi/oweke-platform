import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global styles if any
import App from './components/App';  // Corrected path to App.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();