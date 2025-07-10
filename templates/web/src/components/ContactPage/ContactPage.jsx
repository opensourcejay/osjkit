import React from 'react'
import styles from './ContactPage.module.css'

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.content}>
          <p className={styles.intro}>
            Have questions, suggestions, or want to contribute to OSJKIT? I'd love to hear from you!
          </p>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionDescription}>
              The best way to reach out is through GitHub where you can:
            </p>
            
            <ul className={styles.list}>
              <li className={styles.listItem}>Open an issue for bug reports or feature requests</li>
              <li className={styles.listItem}>Start a discussion for questions or ideas</li>
              <li className={styles.listItem}>Submit a pull request to contribute</li>
              <li className={styles.listItem}>Follow the project for updates</li>
            </ul>
            
            <p className={styles.github}>
              Find me on GitHub: <a 
                href="https://github.com/opensourcejay" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                @opensourcejay
              </a>
            </p>
          </div>
          
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Contributing</h2>
            <p className={styles.sectionDescription}>
              OSJKIT is an open-source project and contributions are welcome! Whether it's fixing bugs, 
              adding new features, improving documentation, or creating new templates, your help makes 
              this toolkit better for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
