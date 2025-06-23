import React, { useState } from 'react';
import { Search, Menu, X, Globe, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">freelancr</div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <a href="#">Find Services</a>
            <a href="#">Find Talent</a>
            <a href="#">Categories</a>
            <a href="#">About</a>
          </nav>

          {/* Right side */}
          <div className="header-actions">
            <button className="language-btn">
              <Globe size={16} />
              English
            </button>
            <a href="#" className="sign-in-link">
              Sign In
            </a>
            <button className="btn btn-primary">Join</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#">Find Services</a>
          <a href="#">Find Talent</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <div className="mobile-nav-footer">
            <a href="#" className="mobile-sign-in">Sign In</a>
            <button className="btn btn-primary mobile-join-btn">Join</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;