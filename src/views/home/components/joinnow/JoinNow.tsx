import React from 'react';
import {
  ButtonType,
  Button,
} from 'components/button/Button';
import { TextField } from 'components/textField/TextField';

import JoinNowImage from 'assets/images/joinNow.svg';
import './JoinNow.css';

export const JoinNow: React.FC = () => (
  <>
    <div className="container text-center joinNow">
      <h1 className="title-primary">
        Future of the <strong>Metaverse</strong> Banking
      </h1>
      <p className="text-primary">
        Xward offers most complete solutions for embedding banking features in
        your Metaverse ecosystem
      </p>
      <div className="form-group">
        <TextField placeholder="Enter your email" />
        <Button title="Join now" type={ButtonType.GRADIENT} />
      </div>
      <div className="joinNow-background">
        <img src={JoinNowImage} alt="" />
      </div>
    </div>
  </>
);
