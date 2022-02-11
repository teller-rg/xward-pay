import React from 'react';

import './Card.css';

export interface CardInfo {
  title: string;
  items: string[];
}
export const Card: React.FC<CardInfo> = ({ title, items }) => (
  <>
    <div className="card">
      <h5 className="title-secondary">{title}</h5>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </>
);
