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

// Import custom icons for Account, Cart, Add to Cart, and Like/Unlike
import accountIcon from '../assets/account-icon.png';
import cartIcon from '../assets/cart-icon.png';
import addToCartIcon from '../assets/cart-icon.png';
import addToCartIconWhite from '../assets/add-to-cart-icon-white.png';
import unlikeButtonIcon from '../assets/unlike-button.png';
import likeButtonIcon from '../assets/like-button.png';

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
  { id: 't-shirt-two', name: 'T-Shirt Two', description: 'Lightweight t-shirt perfect for everyday wear.', price: '$120.00', image: tShirtTwo },
  { id: 't-shirt-three', name: 'T-Shirt Three', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: '$150.00', image: tShirtThree },
  { id: 't-shirt-four', name: 'T-Shirt Four', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: '$145.00', image: tShirtFour },
];

// Footer dropdown options
const footerDropdownOptions = {
  'about-us': ['Our Story', 'Mission', 'Team'],
  'legal': ['Terms of Service', 'Privacy Policy', 'Returns'],
  'support': ['FAQ', 'Help Center', 'Contact Support'],
  'contact': ['Email Us', 'Phone', 'Live Chat'],
};

const MainPage = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleBackgroundChange = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const toggleAddToCart = (productId) => {
    setAddedToCart((prev) => {
      const isAdded = !prev[productId];
      setCartCount((prevCount) => {
        const newCount = prevCount + (isAdded ? 1 : -1);
        return Math.max(newCount, 0);
      });
      return {
        ...prev,
        [productId]: isAdded,
      };
    });
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
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
                      <img
                        src={likedProducts[product.id] ? likeButtonIcon : unlikeButtonIcon}
                        alt={likedProducts[product.id] ? "Liked" : "Not Liked"}
                        className="like-icon"
                      />
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
                      <img
                        src={likedProducts[product.id] ? likeButtonIcon : unlikeButtonIcon}
                        alt={likedProducts[product.id] ? "Liked" : "Not Liked"}
                        className="like-icon"
                      />
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
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-link-container">
              <button
                className={`footer-link-button ${openDropdown === 'about-us' ? 'active' : ''}`}
                onClick={() => toggleDropdown('about-us')}
              >
                About Us
              </button>
              {openDropdown === 'about-us' && (
                <ul className="footer-dropdown">
                  {footerDropdownOptions['about-us'].map((option, index) => (
                    <li key={index}>
                      <Link to={`/${option.toLowerCase().replace(/\s/g, '-')}`} className="footer-dropdown-item">
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="footer-link-container">
              <button
                className={`footer-link-button ${openDropdown === 'legal' ? 'active' : ''}`}
                onClick={() => toggleDropdown('legal')}
              >
                Legal
              </button>
              {openDropdown === 'legal' && (
                <ul className="footer-dropdown">
                  {footerDropdownOptions['legal'].map((option, index) => (
                    <li key={index}>
                      <Link to={`/${option.toLowerCase().replace(/\s/g, '-')}`} className="footer-dropdown-item">
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="footer-link-container">
              <button
                className={`footer-link-button ${openDropdown === 'support' ? 'active' : ''}`}
                onClick={() => toggleDropdown('support')}
              >
                Support
              </button>
              {openDropdown === 'support' && (
                <ul className="footer-dropdown">
                  {footerDropdownOptions['support'].map((option, index) => (
                    <li key={index}>
                      <Link to={`/${option.toLowerCase().replace(/\s/g, '-')}`} className="footer-dropdown-item">
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="footer-link-container">
              <button
                className={`footer-link-button ${openDropdown === 'contact' ? 'active' : ''}`}
                onClick={() => toggleDropdown('contact')}
              >
                Contact
              </button>
              {openDropdown === 'contact' && (
                <ul className="footer-dropdown">
                  {footerDropdownOptions['contact'].map((option, index) => (
                    <li key={index}>
                      <Link to={`/${option.toLowerCase().replace(/\s/g, '-')}`} className="footer-dropdown-item">
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="footer-copyright">
            <p>Copyright © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;