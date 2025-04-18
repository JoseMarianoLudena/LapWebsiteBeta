import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../MainPage.css';

// Import background images from assets
import background1 from '../assets/bg1.png';
import background2 from '../assets/bg2.png';
import background3 from '../assets/bg3.png';
import background4 from '../assets/background.png';

// Import product images for Men
import shortOne from '../assets/short-one.jpg';
import shortTwo from '../assets/short-two.jpg';
import tShirtOne from '../assets/t-shirt-one.jpg';

// Import product images for Women
import tShirtTwo from '../assets/t-shirt-two.jpg';
import tShirtThree from '../assets/t-shirt-three.jpg';
import tShirtFour from '../assets/t-shirt-four.jpg';

// Import custom icons for Account and Cart
import accountIcon from '../assets/account_icon.png';
import cartIcon from '../assets/cart_icon.png';

// Array of background images
const backgroundImages = [
  background1,
  background2,
  background3,
  background4,
];

const MainPage = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const handleBackgroundChange = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <div className="main-page">
      {/* PART 1: Header and Slogan with Background */}
      <section
        className="header-section"
        style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
        onClick={handleBackgroundChange}
      >
        <header className="main-header">
          <div className="logo">
            <span className="logo-letter">L</span>
            <span className="logo-letter">A</span>
            <span className="logo-letter">P</span>
          </div>
          <nav className="main-nav">
            <Link to="/men" className="nav-link">MEN</Link>
            <Link to="/women" className="nav-link">WOMEN</Link>
            <Link to="/testimonials" className="nav-link">TESTIMONIALS</Link>
            <Link to="/about" className="nav-link">ABOUT US</Link>
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </nav>
          <div className="header-icons">
            <Link to="/account" className="icon-button">
              <img src={accountIcon} alt="Account" className="account-icon" />
            </Link>
            <button className="icon-button">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
              <span className="cart-count">0</span>
            </button>
          </div>
        </header>
        <div className="slogan-content">
          <h1>Run Your Way, Every Day</h1>
          <p>Stay cozy and stylish with our exclusive men's collection of clothes.</p>
        </div>
      </section>

      {/* PART 2: Product Sections (For Men and For Women) */}
      <section className="products-section">
        {/* For Men */}
        <div className="category-section">
          <h2>For Men</h2>
          <p className="category-subtitle">Lightweight and breathable, designed to allow freedom of movement.</p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${shortOne})` }}></div>
              <h3>Short One</h3>
              <p>Breathable running shorts designed for comfort and freedom of movement.</p>
              <div className="product-footer">
                <span className="price">$29.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${shortTwo})` }}></div>
              <h3>Short Two</h3>
              <p>Breathable running shorts designed for comfort and freedom of movement.</p>
              <div className="product-footer">
                <span className="price">$29.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${tShirtOne})` }}></div>
              <h3>T-Shirt One</h3>
              <p>Lightweight t-shirt perfect for everyday wear.</p>
              <div className="product-footer">
                <span className="price">$19.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
          </div>
        </div>

        {/* For Women */}
        <div className="category-section">
          <h2>For Women</h2>
          <p className="category-subtitle">Lightweight and breathable, designed to allow freedom of movement.</p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${tShirtTwo})` }}></div>
              <h3>T-Shirt Two</h3>
              <p>Lightweight t-shirt perfect for everyday wear.</p>
              <div className="product-footer">
                <span className="price">$19.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${tShirtThree})` }}></div>
              <h3>T-Shirt Three</h3>
              <p>Lightweight t-shirt perfect for everyday wear.</p>
              <div className="product-footer">
                <span className="price">$19.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${tShirtFour})` }}></div>
              <h3>T-Shirt Four</h3>
              <p>Lightweight t-shirt perfect for everyday wear.</p>
              <div className="product-footer">
                <span className="price">$19.99</span>
                <button className="like-button">❤️</button>
                <button className="add-to-cart">🛍️</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: Footer */}
      <footer className="main-footer">
        <div className="footer-copyright">
          <p>Copyright © 2025</p>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/legal" className="footer-link">Legal</Link>
          <Link to="/support" className="footer-link">Support</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;