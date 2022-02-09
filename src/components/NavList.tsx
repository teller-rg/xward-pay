export interface Link {
  name: string;
  path: string;
}
export interface NavLinks {
  title: string;
  links: [Link];
}
export const NavList: React.FC<NavLinks> = ({ title, links }) => (
  <>
    <h5>{title}</h5>
    <ul>
      {links.map((link, index) => {
        return <li key={index}>{link.name}</li>;
      })}
    </ul>
  </>
);
