import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ChevronDownIcon from 'assets/icons/chevron-down.svg';
import './NavList.css';

export interface Links {
  name: string;
  path: string;
}
export interface NavLinks {
  title: string;
  links: Links[];
}
export const NavList: React.FC<NavLinks> = ({ title, links }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <>
      <div className="navList">
        <h6
          className="title-tertiary"
          onClick={() => setCollapsed(!isCollapsed)}
        >
          {title}
          <img
            src={ChevronDownIcon}
            alt=""
            className={isCollapsed ? '' : 'rotated'}
          />
        </h6>
        <ul className={isCollapsed ? '' : 'collapse-show'}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to="/">{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
