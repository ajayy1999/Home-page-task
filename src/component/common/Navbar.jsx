import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../public/images/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Gecko Accountancy" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/case-studies" className="nav-links">
              Case Studies
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="contact-btn">
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;