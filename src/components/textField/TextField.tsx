import React from 'react';

import './TextField.css';

interface InputProps {
  placeholder: string;
}

export const TextField: React.FC<InputProps> = ({ placeholder }) => (
  <>
    <input type="text" className="input-primary" placeholder={placeholder} />
  </>
);
