import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faGavel, faUsers, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faScaleBalanced} className="law-icon" />
        <h2>Charles Mbugua & Co Advocates</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <a href="#">Home</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
          <a href="#">About Us</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGavel} className="nav-icon" />
          <a href="#">Our Services</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} className="nav-icon" />
          <a href="#">Attorneys</a>
        </li>
      </ul>
      
      <div className="navbar-contact">
        <button className="btn-contact">Get In Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
