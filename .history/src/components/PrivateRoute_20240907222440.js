import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';  // Import Firebase hook
import { auth } from './firebase';  // Import Firebase auth

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while checking authentication
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;