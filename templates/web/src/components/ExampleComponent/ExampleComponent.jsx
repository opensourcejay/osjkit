import React, { useState } from 'react'
import styles from './ExampleComponent.module.css'

const ExampleComponent = ({ title = 'Example Component', items = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index)
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button 
          className={`${styles.toggle} ${isExpanded ? styles.toggleActive : ''}`}
          onClick={toggleExpanded}
          aria-label="Toggle component"
        >
          <span className={styles.toggleIcon}></span>
        </button>
      </div>
      
      <div className={`${styles.content} ${isExpanded ? styles.contentExpanded : ''}`}>
        <p className={styles.description}>
          This is an example component demonstrating CSS Modules methodology. 
          Notice how CSS classes are scoped to this component and avoid naming conflicts.
        </p>
        
        {items.length > 0 && (
          <div className={styles.list}>
            <h3 className={styles.listTitle}>Items:</h3>
            <ul className={styles.items}>
              {items.map((item, index) => (
                <li 
                  key={index}
                  className={`${styles.item} ${activeItem === index ? styles.itemActive : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <span className={styles.itemText}>{item}</span>
                  <span className={styles.itemIndicator}></span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className={styles.footer}>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>
            Primary Action
          </button>
          <button className={`${styles.button} ${styles.buttonSecondary}`}>
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExampleComponent
