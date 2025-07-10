import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import page components
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

// Components
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__title">OSJKIT</Link>
        <div className="navbar__links">
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/contact" className="navbar__link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const scrollToGettingStarted = () => {
    document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">OSJKIT</h1>
        <p className="hero__subtitle">Build modern desktop applications with React and Tauri</p>
        <button className="hero__button" onClick={scrollToGettingStarted}>
          Get Started
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">made by opensourcejay on github</p>
      </div>
    </footer>
  )
}

// Pages
function HomePage() {
  return (
    <>
      <Hero />
      <section id="getting-started" className="getting-started">
        <div className="getting-started__container">
          <h2 className="getting-started__title">Getting Started with OSJKIT Desktop</h2>
          <div className="getting-started__content">
            <div className="getting-started__intro">
              <p>Welcome! You've successfully installed the OSJKIT desktop template. This template provides everything you need to build modern desktop applications with React and Tauri. Follow these steps to get your development environment ready:</p>
            </div>
            
            <div className="getting-started__steps">
              <div className="step">
                <div className="step__number">1</div>
                <div className="step__content">
                  <h3 className="step__title">Install Dependencies</h3>
                  <p className="step__description">Install Node.js dependencies and ensure Rust is available on your system.</p>
                  <div className="step__code">
                    <code>npm install</code>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">2</div>
                <div className="step__content">
                  <h3 className="step__title">Check Environment</h3>
                  <p className="step__description">Verify that your system has all required tools for Tauri development.</p>
                  <div className="step__code">
                    <code>npm run check-env</code> or <code>./check-env.bat</code> (Windows)
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">3</div>
                <div className="step__content">
                  <h3 className="step__title">Start Development</h3>
                  <p className="step__description">Launch the Tauri development environment with hot reload for both frontend and backend.</p>
                  <div className="step__code">
                    <code>npm run tauri dev</code>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">4</div>
                <div className="step__content">
                  <h3 className="step__title">Build Your App</h3>
                  <p className="step__description">Replace this content with your own components and Tauri commands. The window management and basic app structure are ready!</p>
                  <div className="step__code">
                    Edit <code>src/App.jsx</code> and <code>src-tauri/src/main.rs</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="getting-started__features">
              <h3>What You Get Out of the Box:</h3>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature__icon">🖥️</div>
                  <h4 className="feature__title">Desktop Native</h4>
                  <p className="feature__description">True desktop application with native performance</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">🎨</div>
                  <h4 className="feature__title">CSS Modules Structure</h4>
                  <p className="feature__description">Pre-configured component structure with scoped, maintainable CSS</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">🔧</div>
                  <h4 className="feature__title">Tauri Backend</h4>
                  <p className="feature__description">Rust-powered backend with secure API commands</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">⚡</div>
                  <h4 className="feature__title">Modern Stack</h4>
                  <p className="feature__description">React 18, Vite, Tauri with all development tools configured</p>
                </div>
              </div>
            </div>

            <div className="getting-started__next">
              <h3>Next Steps:</h3>
              <ul>
                <li>Explore the example components in <code>src/components/</code></li>
                <li>Check out the Tauri configuration in <code>src-tauri/tauri.conf.json</code></li>
                <li>Add Tauri commands in <code>src-tauri/src/main.rs</code></li>
                <li>Customize the window settings and app metadata</li>
                <li>Build for production with <code>npm run tauri build</code></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
