import React from "react";
import "./indexx.css"; // File CSS Anda

const Header = () => {
  return (
    <header>
      {/* Top Section: Logo and Search */}
      <div className="top-bar">
        <div className="logo">
          <h1>Artcyclopedia</h1>
        </div>
        <div className="actions">
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search art" />
          </div>

          {/* Profile Icon */}
          <div className="profile">
    
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Collections</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
