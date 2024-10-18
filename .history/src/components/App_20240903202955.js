import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  // Adjusted import path
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import EventsPage from './Events/EventsPage';  // Adjusted import path
import Counseling from './Counseling/Counseling'; // Import Counseling component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/counseling" element={<Counseling />} /> {/* Added this route */}
      </Routes>
    </Router>
  );
}

export default App;