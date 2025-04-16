import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../SignUpPage.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Refs for input fields
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  // Effect to handle label visibility
  useEffect(() => {
    const inputs = [
      firstNameRef,
      lastNameRef,
      emailRef,
      countryRef,
      stateRef,
      phoneRef,
      passwordRef,
    ];

    inputs.forEach((inputRef) => {
      const input = inputRef.current;
      const label = input?.nextSibling; // Get the next sibling (label)

      if (input && label) {
        input.addEventListener('focus', () => {
          label.style.opacity = '1';
          label.style.top = '-1.5rem';
        });

        input.addEventListener('blur', () => {
          if (!input.value) {
            label.style.opacity = '0';
          }
        });
      }
    });

    // Cleanup event listeners
    return () => {
      inputs.forEach((inputRef) => {
        const input = inputRef.current;
        const label = input?.nextSibling;
        if (input && label) {
          input.removeEventListener('focus', () => {});
          input.removeEventListener('blur', () => {});
        }
      });
    };
  }, []);

  const handleSignUp = () => {
    // Placeholder for sign-up logic
    console.log('Sign Up:', { firstName, lastName, email, country, state, phone, password });
    // Navigate to the main page after sign-up
    navigate('/main');
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-left">
          <div className="logo">
            <span className="logo-letter">L</span>
            <span className="logo-letter">A</span>
            <span className="logo-letter">P</span>
          </div>
          <div className="logo-placeholder">
            {/* Placeholder for the real logo */}
            <div className="logo-placeholder-text">Logo Placeholder</div>
          </div>
          <p className="signup-slogan">Begin with your new style!</p>
          <div className="signup-testimonial">
            <h3 className="testimonial-title">Absolutely AMAZING!</h3>
            <p className="testimonial-text">
              This brand has been a game-changer for me! My style have never been this stylish!
            </p>
            <div className="testimonial-footer">
              <div className="avatar-placeholder">
                {/* Placeholder for the avatar */}
                <div className="avatar-placeholder-text">Avatar</div>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div className="signup-right">
          <h2>Let's get started</h2>
          <div className="signup-form">
            <div className="form-row">
              <div className="input-group">
                <input
                  ref={firstNameRef}
                  type="text"
                  id="firstName"
                  placeholder="Enter your name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="firstName">Name</label>
              </div>
              <div className="input-group">
                <input
                  ref={lastNameRef}
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input
                  ref={countryRef}
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor="country">Country</label>
              </div>
              <div className="input-group">
                <input
                  ref={stateRef}
                  type="text"
                  id="state"
                  placeholder="Enter your state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="state">State</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input
                  ref={phoneRef}
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button onClick={handleSignUp}>Get Started</button>
            <div className="signup-divider">
              <span className="signup-or-text">or</span>
            </div>
            <Link to="/" className="login-link">I have an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;