import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import page components
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ApiDemoPage from './components/ApiDemoPage'

// Components
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__title">OSJKIT</Link>
        <div className="navbar__links">
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/contact" className="navbar__link">Contact</Link>
          <Link to="/api-demo" className="navbar__link">API Demo</Link>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const scrollToGettingStarted = () => {
    const element = document.getElementById('getting-started')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">OSJKIT</h1>
        <p className="hero__subtitle">Open Source Toolkit for Modern Web & Desktop Development</p>
        <button onClick={scrollToGettingStarted} className="hero__button">
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
          <h2 className="getting-started__title">Getting Started with OSJKIT</h2>
          <div className="getting-started__content">
            <div className="getting-started__intro">
              <p>Welcome! You've successfully installed OSJKIT. This template provides everything you need to build modern web applications with React. Follow these steps to customize and build your project:</p>
            </div>
            
            <div className="getting-started__steps">
              <div className="step">
                <div className="step__number">1</div>
                <div className="step__content">
                  <h3 className="step__title">Install Dependencies</h3>
                  <p className="step__description">Install all required packages to get your development environment ready.</p>
                  <div className="step__code">
                    <code>npm install</code>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">2</div>
                <div className="step__content">
                  <h3 className="step__title">Start Development Server</h3>
                  <p className="step__description">Launch the development server with hot reload to start building your application.</p>
                  <div className="step__code">
                    <code>npm run dev</code>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">3</div>
                <div className="step__content">
                  <h3 className="step__title">Explore the Structure</h3>
                  <p className="step__description">Check out the example components and pages. This template uses CSS Modules for maintainable, scoped styles.</p>
                  <div className="step__code">
                    <code>src/components/</code> - Reusable components<br/>
                    <code>src/utils/</code> - API utilities and helpers
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="step__number">4</div>
                <div className="step__content">
                  <h3 className="step__title">Customize Your App</h3>
                  <p className="step__description">Replace this content with your own pages, components, and styling. The navbar, footer, and routing are ready to go!</p>
                  <div className="step__code">
                    Edit <code>src/App.jsx</code> and start building
                  </div>
                </div>
              </div>
            </div>

            <div className="getting-started__features">
              <h3>What You Get Out of the Box:</h3>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature__icon">🎨</div>
                  <h4 className="feature__title">CSS Modules Structure</h4>
                  <p className="feature__description">Pre-configured component structure with scoped, maintainable CSS</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">🔗</div>
                  <h4 className="feature__title">API Integration</h4>
                  <p className="feature__description">Ready-to-use API service with live examples</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">📱</div>
                  <h4 className="feature__title">Responsive Layout</h4>
                  <p className="feature__description">Mobile-first design that works everywhere</p>
                </div>
                
                <div className="feature">
                  <div className="feature__icon">⚡</div>
                  <h4 className="feature__title">Modern Stack</h4>
                  <p className="feature__description">React 18, Vite, and all development tools configured</p>
                </div>
              </div>
            </div>

            <div className="getting-started__next">
              <h3>Next Steps:</h3>
              <div className="next-steps">
                <div className="next-step">
                  <h4>📝 Customize Your Content</h4>
                  <p>Edit the pages and components to match your project needs</p>
                </div>
                <div className="next-step">
                  <h4>🧩 Add Components</h4>
                  <p>Use the example component structure to build reusable UI elements</p>
                </div>
                <div className="next-step">
                  <h4>🌐 Connect Your API</h4>
                  <p>Update the API service configuration to work with your backend</p>
                </div>
                <div className="next-step">
                  <h4>🚀 Deploy</h4>
                  <p>Build and deploy your application using modern hosting platforms</p>
                </div>
              </div>
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
          <Route path="/api-demo" element={<ApiDemoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
