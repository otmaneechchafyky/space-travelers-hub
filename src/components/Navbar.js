import { NavLink } from 'react-router-dom';
import '../App.css';

const links = [
  { path: 'Rockets', text: 'Rockets' },
  { path: 'Missions', text: 'Missions' },
  { path: 'Profile', text: 'Profile' },
];
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M243.39 61.68c-7.24-12.48-27-15-57.24-7.49A93.92 93.92 0 0 0 34.05 128a94.5 94.5 0 0 0 .9 13c-21.86 22.38-29.56 40.78-22.29 53.32c4.5 7.76 14 11.69 27.86 11.69a116.38 116.38 0 0 0 25-3.16c1.45-.32 2.92-.68 4.41-1a93.95 93.95 0 0 0 151.19-86.89c12.65-13 21.11-25.32 23.86-35.6c1.78-6.83 1.26-12.77-1.59-17.68ZM128 46a82.12 82.12 0 0 1 80.19 64.94c-16 15.3-38.14 31.67-63.3 46.12c-27.4 15.76-52.1 25.94-72.04 31.54A82 82 0 0 1 128 46ZM23 188.3c-3.52-6.07 2.31-18.56 15-33a94 94 0 0 0 21.07 36.62c-19.65 3.82-32.68 2.16-36.07-3.62ZM128 210a81.41 81.41 0 0 1-43.35-12.45c20.68-6.71 43.56-17.06 66.22-30.08c22.83-13.12 43.13-27.67 59.05-41.91c0 .81.06 1.62.06 2.44A82.08 82.08 0 0 1 128 210ZM233.35 76.21c-1.88 7-7.28 15.49-15.36 24.61a93.92 93.92 0 0 0-21.1-36.7c15.82-3.05 32-3.49 36.12 3.58c1.19 2.05 1.3 4.92.34 8.51Z"
        />
      </svg>
      <h1 className="logo-title">Space Traveler&apos;s Hub</h1>
    </div>
    <ul className="links">
      {links.map((link) => (
        <li key={link.text} className="link">
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
