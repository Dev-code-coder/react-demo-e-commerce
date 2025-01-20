import React from 'react';
import { Link } from 'react-router-dom';
import './CompStyle/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
