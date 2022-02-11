import React from 'react';
import { NavLinks, NavList } from '../navList/NavList';
import { Link } from 'react-router-dom';

import FooterLogo from '../../assets/images/footer_logo.svg';
import PlayStore from '../../assets/images/playStore.svg';
import AppleStore from '../../assets/images/appleStore.svg';
import './Footer.css';

const items: NavLinks[] = [
  {
    title: 'SiteMap',
    links: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Plans',
        path: '/plans',
      },
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Help',
        path: '/help',
      },
      {
        name: 'Press',
        path: '/press',
      },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        name: 'Facebook',
        path: '/facebook',
      },
      {
        name: 'Instagram',
        path: '/instagram',
      },
      {
        name: 'Linkedin',
        path: '/linkedin',
      },
      {
        name: 'Twitter',
        path: '/twitter',
      },
      {
        name: 'Youtube',
        path: '/youtube',
      },
    ],
  },
  {
    title: 'Policies',
    links: [
      {
        name: 'Privacy Policy',
        path: '/privacy',
      },
      {
        name: 'Terms of use',
        path: '/terms',
      },
      {
        name: 'Cookies policy',
        path: '/cookies',
      },
    ],
  },
];

export const Footer: React.FC = () => (
  <>
    <div className="footer">
      <div className="container">
        <div className="footer-primary">
          <Link to="/">
            <img src={FooterLogo} alt="" className="footer-logo" />
          </Link>
          {items.map((item, index) => (
            <NavList title={item.title} links={item.links} key={index} />
          ))}
          <div className="callToAction">
            <h6 className="title-tertiary">Get our free app</h6>
            <Link to="/appleStore">
              <img src={AppleStore} alt="" />
            </Link>
            <Link to="/playStore">
              <img src={PlayStore} alt="" />
            </Link>
          </div>
        </div>
        <p className="copyright">© XwardPay</p>
      </div>
    </div>
  </>
);
