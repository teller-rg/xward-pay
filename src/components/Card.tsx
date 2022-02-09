export interface CardInfo {
  title: string;
  items: string[];
}
export const Card: React.FC<CardInfo> = ({ title, items }) => (
  <>
    <h6>{title}</h6>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);
