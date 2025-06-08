import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="home-header">
        <img src="/images/hero.webp" alt="image of jayplay" />
        <img src="/images/hero.webp" alt="image of jayplay"  />
        <img src="/images/hero.webp" alt="image of jayplay" />

      <div className="header-content">
        <h1>Welcome to Jay Play</h1>
        <p>Discover the rhythm of the moment.</p>
      </div>
    </header>
  );
};

export default Header;
