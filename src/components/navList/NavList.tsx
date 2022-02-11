import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ChevronDownIcon from '../../assets/icons/chevron-down.svg';
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
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div className="navList">
        <h6
          className="title-tertiary"
          onClick={() => setCollapsed(collapsed ? false : true)}
        >
          {title}
          <img
            src={ChevronDownIcon}
            alt=""
            className={collapsed ? '' : 'rotated'}
          />
        </h6>
        <ul className={collapsed ? '' : 'collapse-show'}>
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
