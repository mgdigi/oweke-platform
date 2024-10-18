// src/components/Login.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';  

const Login = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;