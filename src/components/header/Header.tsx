import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../assets/images/header_logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header container">
      <Link to="/">
        <img src={HeaderLogo} alt="" />
      </Link>
      <div
        className={`menu-icon ${isMenuOpen ? 'menu-icon-close' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};
