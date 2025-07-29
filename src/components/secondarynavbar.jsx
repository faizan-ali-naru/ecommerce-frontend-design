import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import '../styles/secondarynavbar.css';
// ...existing code...

const SecondaryNavbar = () => {
  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-container">
        <div className="secondary-nav-content">
          {/* Left Side Menu */}
          <div className="left-menu">
            {/* All Category with Hamburger */}
            <div className="menu-item all-category">
              <Menu className="hamburger-icon" />
              <span>All category</span>
            </div>

            {/* Menu Items */}
            <a href="#" className="menu-item">
              Hot offers
            </a>

            <a href="#" className="menu-item">
              Gift boxes
            </a>

            <a href="#" className="menu-item">
              Projects
            </a>

            <a href="#" className="menu-item">
              Menu item
            </a>

            <div className="menu-item">
              <span>Help</span>
              <ChevronDown className="dropdown-arrow" />
            </div>
          </div>

          {/* Right Side Options */}
          <div className="right-options">
            {/* Language and Currency */}
            <div className="language-currency">
              <div className="option-item">
                <span>English, USD</span>
                <ChevronDown className="dropdown-arrow" />
              </div>
            </div>

            {/* Ship To */}
            <div className="ship-to">
              <div className="option-item">
                <span>Ship to</span>
                <div className="flag-icon"></div>
                <ChevronDown className="dropdown-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;