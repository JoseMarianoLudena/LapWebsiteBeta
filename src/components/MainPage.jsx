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

// Import custom icons for Account, Cart, and Add to Cart (default and white versions)
import accountIcon from '../assets/account-icon.png';
import cartIcon from '../assets/cart-icon.png';
import addToCartIcon from '../assets/cart-icon.png';
import addToCartIconWhite from '../assets/add-to-cart-icon-white.png'; // New white icon

// Array of background images
const backgroundImages = [
  background1,
  background2,
  background3,
  background4,
];

// Array of products with unique IDs for tracking liked and added-to-cart states
const productsMen = [
  { id: 'short-one', name: 'Short One', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: '$29.99', image: shortOne },
  { id: 'short-two', name: 'Short Two', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: '$29.99', image: shortTwo },
  { id: 't-shirt-one', name: 'T-Shirt One', description: 'Lightweight t-shirt perfect for everyday wear.', price: '$19.99', image: tShirtOne },
];

const productsWomen = [
  { id: 't-shirt-two', name: 'T-Shirt Two', description: 'Lightweight t-shirt perfect for everyday wear.', price: '$19.99', image: tShirtTwo },
  { id: 't-shirt-three', name: 'T-Shirt Three', description: 'Lightweight t-shirt perfect for everyday wear.', price: '$19.99', image: tShirtThree },
  { id: 't-shirt-four', name: 'T-Shirt Four', description: 'Lightweight t-shirt perfect for everyday wear.', price: '$19.99', image: tShirtFour },
];

const MainPage = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState({}); // Track liked state for each product
  const [addedToCart, setAddedToCart] = useState({}); // Track added-to-cart state for each product
  const [cartCount, setCartCount] = useState(0); // Track total items in cart

  const handleBackgroundChange = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle liked state
    }));
  };

  const toggleAddToCart = (productId) => {
    setAddedToCart((prev) => {
      const isAdded = !prev[productId]; // Toggle added state
      setCartCount((prevCount) => {
        const newCount = prevCount + (isAdded ? 1 : -1);
        return Math.max(newCount, 0); // Ensure cart count doesn't go below 0
      });
      return {
        ...prev,
        [productId]: isAdded,
      };
    });
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
              <span className="cart-count">{cartCount}</span>
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
            {productsMen.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className={`price ${addedToCart[product.id] ? 'added' : ''}`}>
                    {product.price}
                  </span>
                  <div className="buttons">
                    <button
                      className={`like-button ${likedProducts[product.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(product.id)}
                    >
                      {likedProducts[product.id] ? '♥' : '♡'}
                    </button>
                    <button
                      className={`add-to-cart ${addedToCart[product.id] ? 'added' : ''}`}
                      onClick={() => toggleAddToCart(product.id)}
                    >
                      <img
                        src={addedToCart[product.id] ? addToCartIconWhite : addToCartIcon}
                        alt="Add to Cart"
                        className="add-to-cart-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Women */}
        <div className="category-section">
          <h2>For Women</h2>
          <p className="category-subtitle">Lightweight and breathable, designed to allow freedom of movement.</p>
          <div className="products-grid">
            {productsWomen.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className={`price ${addedToCart[product.id] ? 'added' : ''}`}>
                    {product.price}
                  </span>
                  <div className="buttons">
                    <button
                      className={`like-button ${likedProducts[product.id] ? 'liked' : ''}`}
                      onClick={() => toggleLike(product.id)}
                    >
                      {likedProducts[product.id] ? '♥' : '♡'}
                    </button>
                    <button
                      className={`add-to-cart ${addedToCart[product.id] ? 'added' : ''}`}
                      onClick={() => toggleAddToCart(product.id)}
                    >
                      <img
                        src={addedToCart[product.id] ? addToCartIconWhite : addToCartIcon}
                        alt="Add to Cart"
                        className="add-to-cart-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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