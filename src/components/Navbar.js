import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Profile', text: 'Profile' },
  { path: 'Rockets', text: 'Rockets' },
  { path: 'Missions', text: 'Missions' },
];
const Navbar = () => (
  <nav className="navbar">
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
