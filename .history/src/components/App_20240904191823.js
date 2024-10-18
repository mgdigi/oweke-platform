import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/HomePage';  // Home Page
import EventsPage from './Events/EventsPage';  // Events Page
import Blog from './Blog/Blog';  // Import Blog

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<Blog />} /> {/* Blog Route */}
      </Routes>
    </Router>
  );
}

export default App;