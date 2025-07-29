import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, MessageCircle, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <ShoppingBag size={20} />
            </div>
            <h1 className="logo-text">Brand</h1>
          </div>

          {/* Search Section */}
          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <select className="search-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
                <option>Sports</option>
                <option>Books</option>
                <option>Beauty</option>
              </select>
              <button className="search-button">
                Search
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="nav-icons">
            {/* Profile */}
            <div className="nav-icon-item">
              <User className="nav-icon" />
              <span className="nav-icon-label">Profile</span>
            </div>

            {/* Message */}
            <div className="nav-icon-item">
              <MessageCircle className="nav-icon" />
              <span className="nav-icon-label">Message</span>
            </div>

            {/* Orders */}
            <div className="nav-icon-item">
              <Heart className="nav-icon" />
              <span className="nav-icon-label">Orders</span>
            </div>

            {/* Cart */}
            <div className="nav-icon-item">
              <ShoppingCart className="nav-icon" />
              <span className="nav-icon-label">My cart</span>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Toggle Switch */}
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark(!dark)}
              />
              <span className="slider"></span>
            </label>
            <span style={{ fontSize: 14 }}>{dark ? 'Dark' : 'Light'} Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;