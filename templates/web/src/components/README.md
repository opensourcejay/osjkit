# Components

This folder contains reusable React components using CSS Modules for styling.

## Available Components

### Page Components
- **AboutPage/** - About page with project information and features
- **ContactPage/** - Contact page with GitHub links and contribution info  
- **ApiDemoPage/** - Interactive API demonstration with live examples

### Example Components
- **ExampleComponent/** - Sample component demonstrating CSS Modules structure

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

### Example Usage

```jsx
// Component file
import styles from './ExampleComponent.module.css'

const ExampleComponent = () => {
  return (
    <div className={styles.component}>
      <header className={styles.header}>
        <h1 className={styles.title}>Title</h1>
        <button className={`${styles.button} ${styles.buttonPrimary}`}>
          Button
        </button>
      </header>
    </div>
  )
}
```

```css
/* ExampleComponent.module.css */
.component {
  padding: 1rem;
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  color: #333;
}

.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttonPrimary {
  background: #007bff;
  color: white;
}
```

## Example Usage

```jsx
// Import page components
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ApiDemoPage from './components/ApiDemoPage'

// Import example components
import ExampleComponent from './components/ExampleComponent'

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3']
  
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/api-demo" element={<ApiDemoPage />} />
      <Route path="/example" element={
        <ExampleComponent 
          title="My Component" 
          items={items} 
        />
      } />
    </Routes>
  )
}
```

## Creating New Components

1. **Create a new folder** with your component name
2. **Add the JSX file** with your React component
3. **Add the CSS Module file** (`.module.css` extension)
4. **Add an index.js** for clean exports
5. **Import and use** in your app

### Component Template

```jsx
// NewComponent.jsx
import React from 'react'
import styles from './NewComponent.module.css'

const NewComponent = ({ prop1, prop2 }) => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        {/* Content */}
      </div>
    </div>
  )
}

export default NewComponent
```

```css
/* NewComponent.module.css */
.component {
  /* Component wrapper styles */
}

.content {
  /* Content area styles */
}

.contentHighlighted {
  /* Modifier for highlighted state */
}
```

## Best Practices

1. **Use semantic naming** for CSS classes without prefixes
2. **Keep components focused** on a single responsibility
3. **Use props** for component customization
4. **Follow responsive design** principles
5. **Document your components** with clear prop types and examples
6. **Combine classes** using template literals for conditional styling
