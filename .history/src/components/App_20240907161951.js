import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  // Importing HomePage component
import Login from '../components/Login';  // Importing Login component
import Signup from '../pages/Signup';  // Importing Signup component
import Dashboard from '../pages/Dashboard';  // Importing Dashboard component
import EventsPage from './Events/EventsPage';  // Importing EventsPage component
import Counseling from './Counseling/Counseling'; // Importing Counseling component
import Blog from './Blog/Blog';  // Importing Blog component
import PrivateRoute from './PrivateRoute'; // Importing PrivateRoute component

function App() {
  return (
    <Router>
      <Routes>
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