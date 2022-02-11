import React from 'react';

import './PrimaryButton.css';

export enum ButtonType {
  PRIMARY,
  GRADIENT,
}
interface PropTypes {
  title: string;
  type: ButtonType;
}
export const PrimaryButton: React.FC<PropTypes> = ({ title, type }) => (
  <>
    <button
      className={`button 
        ${type === ButtonType.PRIMARY ? 'button-primary' : 'button-gradient'}
      `}
    >
      {title}
    </button>
  </>
);
