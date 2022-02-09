import { Card, CardInfo } from '../../../components/Card';

export const Solutions: React.FC = () => {
  const solutions: CardInfo[] = [
    {
      title: 'Cards and IBANs',
      items: ['Web banking app', 'Virtual and Physical cards'],
    },
  ];
  return (
    <>
      {solutions.map((solution, index) => (
        <Card key={index} title={solution.title} items={solution.items} />
      ))}
    </>
  );
};
