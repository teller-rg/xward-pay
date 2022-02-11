import React from 'react';
import {
  ButtonType,
  Button,
} from '../../../../components/button/Button';

import JoinNowImage from '../../../../assets/images/slogan.svg';
import './Slogan.css';

export const Slogan: React.FC = () => (
  <>
    <div className="container text-center slogan">
      <div className="slogan-content">
        <h3 className="title-primary">
          A dimension where everything is possible
        </h3>
        <p className="text-primary">
          Xward allows seamless and compliant integration in multiple Virtual
          and Augment environments by embedding our financial connections right
          to the core of digital world.
        </p>
        <Button title="Learn More" type={ButtonType.PRIMARY} />
      </div>
      <div className="slogan-background">
        <img src={JoinNowImage} alt="" />
      </div>
    </div>
  </>
);
