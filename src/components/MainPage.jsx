import React, { useState, useEffect } from 'react';
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
  { id: 'short-one', name: 'Short One', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: 29.99, image: shortOne, category: 'Men', size: 'S' },
  { id: 'short-two', name: 'Short Two', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: 29.99, image: shortTwo, category: 'Men', size: 'S' },
  { id: 't-shirt-one', name: 'T-Shirt One', description: 'Lightweight t-shirt perfect for everyday wear.', price: 19.99, image: tShirtOne, category: 'Men', size: 'L' },
];

const productsWomen = [
  { id: 't-shirt-two', name: 'T-Shirt Two', description: 'Lightweight t-shirt perfect for everyday wear.', price: 120.00, image: tShirtTwo, category: 'Women', size: 'M' },
  { id: 't-shirt-three', name: 'T-Shirt Three', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: 150.00, image: tShirtThree, category: 'Women', size: 'S' },
  { id: 't-shirt-four', name: 'T-Shirt Four', description: 'Breathable running shorts designed for comfort and freedom of movement.', price: 145.00, image: tShirtFour, category: 'Women', size: 'L' },
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
  const [cartItems, setCartItems] = useState([]); // Array of items with quantity
  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart overlay state
  const [removedItem, setRemovedItem] = useState(null); // Track removed item for undo
  const [openDropdown, setOpenDropdown] = useState(null); // Track which footer dropdown is open

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Calculate total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleBackgroundChange = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the item is already in the cart, remove it
        return prevItems.filter((item) => item.id !== product.id);
      }
      // If the item is not in the cart, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const adjustQuantity = (productId, delta) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      setRemovedItem({ ...itemToRemove }); // Save the removed item for undo
      return prevItems.filter((item) => item.id !== productId);
    });
    // Clear the removed item after 5 seconds (undo timeout)
    setTimeout(() => setRemovedItem(null), 5000);
  };

  const undoRemove = () => {
    if (removedItem) {
      setCartItems((prevItems) => [...prevItems, removedItem]);
      setRemovedItem(null);
    }
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
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
            <button className="icon-button" onClick={toggleCart}>
              <img src={cartIcon} alt="Cart" className="cart-icon" />
              <span className="cart-count">{totalItems}</span>
            </button>
          </div>
        </header>
        <div className="slogan-content">
          <h1>Run Your Way, Every Day</h1>
          <p>Stay cozy and stylish with our exclusive men's collection of clothes.</p>
        </div>
      </section>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-content">
            {/* Part 1: Header */}
            <div className="cart-header">
              <h3>Your items ({totalItems})</h3>
              <button className="cart-close-button" onClick={toggleCart}>
                Close
              </button>
            </div>
            <hr className="cart-divider" />

            {/* Part 2: Items List */}
            <div className="cart-items">
              <h4>You are almost done!</h4>
              {cartItems.length === 0 && !removedItem && (
                <p className="cart-empty">NO ITEMS</p>
              )}
              {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="cart-item">
                    <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                    <div className="cart-item-details">
                      <h5>{item.name}</h5>
                      <p>{item.category}/{item.size}</p>
                      <div className="cart-item-quantity">
                        <button onClick={() => adjustQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => adjustQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <div className="cart-item-price">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                        ×
                      </button>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <hr className="cart-item-divider" />}
                </React.Fragment>
              ))}
              {removedItem && (
                <div className="cart-undo">
                  <p>Item removed</p>
                  <button onClick={undoRemove}>UNDO</button>
                </div>
              )}
            </div>

            {/* Part 3: Footer */}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <p className="cart-total-price">${totalPrice}</p>
                <button className="cart-checkout-button">CHECK OUT</button>
              </div>
            )}
          </div>
        </div>
      )}

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
                  <span className={`price ${cartItems.some((item) => item.id === product.id) ? 'added' : ''}`}>
                    ${product.price.toFixed(2)}
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
                      className={`add-to-cart ${cartItems.some((item) => item.id === product.id) ? 'added' : ''}`}
                      onClick={() => addToCart(product)}
                    >
                      <img
                        src={cartItems.some((item) => item.id === product.id) ? addToCartIconWhite : addToCartIcon}
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
                  <span className={`price ${cartItems.some((item) => item.id === product.id) ? 'added' : ''}`}>
                    ${product.price.toFixed(2)}
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
                      className={`add-to-cart ${cartItems.some((item) => item.id === product.id) ? 'added' : ''}`}
                      onClick={() => addToCart(product)}
                    >
                      <img
                        src={cartItems.some((item) => item.id === product.id) ? addToCartIconWhite : addToCartIcon}
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