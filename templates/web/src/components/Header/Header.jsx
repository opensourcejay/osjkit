import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <h1 className="header__title">Your App</h1>
          </div>
          
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#home" className="header__nav-link">Home</a>
              </li>
              <li className="header__nav-item">
                <a href="#about" className="header__nav-link">About</a>
              </li>
              <li className="header__nav-item">
                <a href="#services" className="header__nav-link">Services</a>
              </li>
              <li className="header__nav-item">
                <a href="#contact" className="header__nav-link">Contact</a>
              </li>
            </ul>
          </nav>

          <button 
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
