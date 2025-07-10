import React from 'react'
import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>About OSJKIT</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            OSJKIT is a comprehensive toolkit designed to accelerate your development workflow. 
            This project provides ready-to-use templates and components for both web and desktop 
            applications, helping developers get started quickly with modern technologies.
          </p>
          
          <p className={styles.description}>
            Built with modern web technologies including React, Vite, and Tauri for desktop applications, 
            OSJKIT follows best practices and includes everything you need to build production-ready applications.
          </p>
          
          <div className={styles.features}>
            <h2 className={styles.featuresTitle}>Features</h2>
            <ul className={styles.featuresList}>
              <li className={styles.featuresItem}>Modern React templates for web applications</li>
              <li className={styles.featuresItem}>Tauri-based desktop application templates</li>
              <li className={styles.featuresItem}>Responsive design with mobile-first approach</li>
              <li className={styles.featuresItem}>CSS Modules for scoped, maintainable styles</li>
              <li className={styles.featuresItem}>Testing setup with Vitest and Testing Library</li>
              <li className={styles.featuresItem}>Development tools and build optimization</li>
            </ul>
          </div>
          
          <p className={styles.conclusion}>
            Whether you're building a simple web app or a complex desktop application, OSJKIT provides 
            the foundation you need to focus on what matters most - your unique features and business logic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
