import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faGavel, faUsers, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faScaleBalanced} className="law-icon" />
        <h2>Charles Mbugua & Co Advocates</h2>
      </div>
      <ul className="navbar-links">
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
