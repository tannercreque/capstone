import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src='../photos/roopy.png' alt="ruby" className='navbar-logo'></img>
          <div className='logo-text'>Ruby's Lua Showcase</div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Sign Up!
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/scripts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Scripts
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;