// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  
import Login from './Login';  
import Signup from '../pages/Signup';  
import Dashboard from '../pages/Dashboard';  
import EventsPage from './Events/EventsPage';  
import Counseling from './Counseling/Counseling'; 
import Blog from './Blog/Blog';  
import PrivateRoute from './PrivateRoute';  

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route 
          path="/events" 
          element={
            <PrivateRoute>
              <EventsPage />
            </PrivateRoute>
          }
        />
        <Route 
          path="/counseling" 
          element={
            <PrivateRoute>
              <Counseling />
            </PrivateRoute>
          }
        />
        <Route 
          path="/blog" 
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;