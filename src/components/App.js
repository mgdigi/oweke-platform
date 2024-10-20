// src/components/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  // Importing HomePage component
import Login from '../components/Login';  // Importing Login component
import Signup from '../components/Signup';  // Importing Signup component
import Dashboard from '../pages/Dashboard';  // Importing Dashboard component
import EventsPage from './Events/EventsPage';  // Importing EventsPage component
import Counseling from './Counseling/Counseling'; // Importing Counseling component
import Blog from './Blog/Blog';  // Importing Blog component

import AboutPage from './About/AboutPage.js';
import ContactPage from './Contact/ContactPage.js';


function App() {
  return (
    <Routes> {/* Use Routes here, without wrapping it in Router */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/events" element={<EventsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path="/counseling" element={<Counseling />} />  {/* Added route for Counseling */}
      <Route path="/blog" element={<Blog />} />  {/* Added route for Blog */}
    </Routes>
  );
}

export default App;