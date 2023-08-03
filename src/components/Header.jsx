import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <p className="logo-name">Ákos.</p>
      <nav>
        <ul className="nav-links-container">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
