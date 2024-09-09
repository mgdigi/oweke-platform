// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  // Importing HomePage component
import Login from '../components/Login';  // Importing Login component
import Signup from '../components/Signup';  // Importing Signup component
import Dashboard from '../pages/Dashboard';  // Importing Dashboard component
import EventsPage from './Events/EventsPage';  // Importing EventsPage component
import Counseling from './Counseling/Counseling'; // Importing Counseling component
import Blog from './Blog/Blog';  // Importing Blog component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/counseling" element={<Counseling />} />  {/* Added route for Counseling */}
        <Route path="/blog" element={<Blog />} />  {/* Added route for Blog */}
      </Routes>
    </Router>
  );
}

export default App;