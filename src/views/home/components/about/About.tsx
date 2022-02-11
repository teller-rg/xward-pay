import React from 'react';
import { ButtonType, Button } from 'components/button/Button';

import AboutImage from 'assets/images/about.svg';
import './About.css';

export const About: React.FC = () => (
  <>
    <div className="about">
      <div className="container">
        <img src={AboutImage} alt="" />
        <div className="about-content">
          <h2 className="title-primary">Connect Banking to Digital Avatars</h2>
          <p className="text-primary">
            Connect our Banking Solutions like accounts, cards and IBANs inside
            of your Metaverse ecosystem directly connected to any Verified
            Digital Avatar, and boost your business into a new dimension.
          </p>
          <label>See our documentation</label>
          <Button title="Coming soon" type={ButtonType.PRIMARY} />
        </div>
      </div>
    </div>
  </>
);
