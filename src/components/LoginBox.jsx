import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../LoginPage.css';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Placeholder for sign-in logic
    console.log('Sign In:', { email, password, rememberMe });
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="login-box">
          <h2>Log In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options">
            <a href="#">Forget Password?</a>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button onClick={handleSignIn}>SIGN IN</button>
          <div className="or-divider">
            <span className="line"></span>
            <span className="or-text">OR</span>
            <span className="line"></span>
          </div>
          <Link to="/signup" className="signup-btn">SIGN UP</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginBox;