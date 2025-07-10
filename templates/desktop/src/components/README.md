# Components

This folder contains reusable React components using CSS Modules for styling.

## Available Components

### Page Components
- **AboutPage/** - About page with project information and features
- **ContactPage/** - Contact page with GitHub links and contribution info  

## Structure

Each component follows this structure:
```
ComponentName/
├── ComponentName.jsx          # React component
├── ComponentName.module.css   # CSS Module styles
├── index.js                  # Export file for clean imports
└── README.md                 # Component documentation (optional)
```

## CSS Modules Methodology

CSS Modules automatically scope CSS class names to prevent conflicts and provide better maintainability:

### Benefits
- **Scoped styles**: Class names are automatically scoped to the component
- **No naming conflicts**: No need to worry about global class name collisions
- **Better maintainability**: Easy to rename classes and see which styles belong to which component
- **Tree shaking**: Unused styles can be removed during build

## Example Usage

```jsx
// Import page components
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
```

## Creating New Components

1. Create a new folder with your component name in PascalCase
2. Add the required files:
   - `ComponentName.jsx` - Main component file
   - `ComponentName.module.css` - CSS Module styles
   - `index.js` - Export file

### Component Template:
```jsx
import React from 'react'
import styles from './ComponentName.module.css'

const ComponentName = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.component} ${className}`} {...props}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default ComponentName
```

### CSS Template:
```css
/* ComponentName.module.css */
.component {
  /* Component wrapper styles */
}

.content {
  /* Content area styles */
}

.componentHighlighted {
  /* Modifier for highlighted state */
}

/* Responsive Design */
@media (max-width: 768px) {
  .component {
    /* Mobile styles */
  }
}
```

### Index Template:
```javascript
export { default } from './ComponentName'
```

## Best Practices

1. **One component per folder** - Keep components isolated and self-contained
2. **CSS Modules naming** - Use semantic class names without prefixes
3. **Responsive design** - Include mobile-first responsive styles  
4. **Semantic HTML** - Use appropriate HTML elements for accessibility
5. **Clean imports** - Always use index.js for component exports
6. **Desktop considerations** - Remember this is a desktop app, consider native interactions
7. **Combine classes** - Use template literals for conditional styling
