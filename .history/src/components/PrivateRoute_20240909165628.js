// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';  // Import Firebase auth

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not logged in or email is not verified, redirect to login page
  if (!user || !user.emailVerified) {
    return <Navigate to="/login" />;
  }

  return children;  // Grant access if user is logged in and email is verified
};

export default PrivateRoute;