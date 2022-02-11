import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../assets/images/header_logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header container">
      <Link to="/">
        <img src={HeaderLogo} alt="" />
      </Link>
      <div
        className={`menu-icon ${open ? 'menu-icon-close' : ''}`}
        onClick={() => setOpen(open ? false : true)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};
