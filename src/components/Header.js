import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}>
      <div className="nav-links">
        <Link to="/">Simbonggyo's Portfolio</Link>
      </div>
      <nav>
        <ul className="nav-links2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
