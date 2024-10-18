import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';  // Importing Firebase auth

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);  // Checking authentication state

  return user ? children : <Navigate to="/login" />;  // If logged in, return the component, else redirect to login
};

export default PrivateRoute;