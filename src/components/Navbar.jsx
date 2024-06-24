import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/garlands">Garlands</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.5rem' }} />
  Cart
</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
