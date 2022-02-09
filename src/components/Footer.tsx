import { NavLinks, NavList } from './NavList';

const items: [NavLinks] = [
  {
    title: 'SiteMap',
    links: [
      {
        name: 'Home',
        path: '/home',
      },
    ],
  },
];

export const Footer: React.FC = () => (
  <>
    {items.map((item, index) => (
      <NavList title={item.title} links={item.links} key={index} />
    ))}
  </>
);
