import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Welcome to Your React App</h1>
          <p className="hero__subtitle">
            A modern, responsive web application built with React, Vite, and CSS BEM methodology.
          </p>
          <div className="hero__actions">
            <button className="button button--large">Get Started</button>
            <button className="button button--secondary button--large">Learn More</button>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__placeholder">
            <svg className="hero__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
