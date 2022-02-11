import React from 'react';
import { Card, CardInfo } from '../../../../components/card/Card';

import './Solutions.css';

export const Solutions: React.FC = () => {
  const solutions: CardInfo[] = [
    {
      title: 'Cards and IBANs',
      items: [
        'Web banking app',
        'Virtual and Physical cards',
        'Business accounts',
      ],
    },
    {
      title: 'Merchants',
      items: [
        'One click purchases',
        'Free management engine',
        'Monitoring and reporting',
      ],
    },
    {
      title: 'Digital assets',
      items: [
        'Wide range of wallet integration',
        'Payment gateway for blockchain payments',
        'Friendly to use',
      ],
    },
  ];
  return (
    <>
      <div className="container solutions">
        <h4 className="title-primary">Our Solutions</h4>
        <p className="text-primary">
          Transform your Metaverse by adding our innovative solutions
        </p>
        <div className="card-container">
          {solutions.map((solution, index) => (
            <Card key={index} title={solution.title} items={solution.items} />
          ))}
        </div>
      </div>
    </>
  );
};
