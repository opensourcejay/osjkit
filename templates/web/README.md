# React Web Application

A modern, production-ready web application built with React 18, Vite, and CSS Modules. Features a complete component architecture with routing, API integration, and responsive design.

## ✨ Features

- ⚡️ **Fast Development** - Built with Vite for lightning-fast development and hot reload
- 🎨 **CSS Modules** - Scoped and maintainable CSS using CSS Modules methodology
- 📱 **Mobile Responsive** - Fully responsive design optimized for all devices
- 🧪 **Testing Ready** - Pre-configured with Vitest and React Testing Library
- ⚛️ **Modern React** - Uses latest React 18 features with hooks and modern patterns
- � **API Integration** - Ready-to-use API service with live examples
- 📄 **Sample Pages** - Complete About, Contact, and API Demo pages
- 🧭 **Routing** - React Router configured with navigation
- �🔧 **TypeScript Support** - Optional TypeScript support available

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Testing

Run tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

## 📁 Project Structure

```
src/
├── components/                    # All React components
│   ├── AboutPage/                # About page component
│   │   ├── AboutPage.jsx
│   │   ├── AboutPage.module.css
│   │   └── index.js
│   ├── ContactPage/              # Contact page component
│   │   ├── ContactPage.jsx
│   │   ├── ContactPage.module.css
│   │   └── index.js
│   ├── ApiDemoPage/              # API demonstration page
│   │   ├── ApiDemoPage.jsx
│   │   ├── ApiDemoPage.module.css
│   │   └── index.js
│   ├── ExampleComponent/         # Example reusable component
│   │   ├── ExampleComponent.jsx
│   │   ├── ExampleComponent.module.css
│   │   └── index.js
│   └── README.md                 # Component documentation
├── utils/                        # Utility functions and services
│   └── api.js                    # API service utility
├── App.jsx                       # Main application with routing
├── main.jsx                      # Application entry point
├── index.css                     # Global styles
└── App.css                       # App-level styles
```

## CSS Architecture

This project uses **CSS Modules** for styling:

- **Scoped Styles**: CSS class names are automatically scoped to prevent conflicts
- **Better Maintainability**: Easy to rename classes and see which styles belong to which component
- **Tree Shaking**: Unused styles can be removed during build
- **No Naming Conflicts**: No need to worry about global class name collisions

### Example CSS Modules Usage

```jsx
// Component.jsx
import styles from './Component.module.css'

const Component = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <h1 className={styles.title}>Title</h1>
      <button className={`${styles.button} ${styles.buttonPrimary}`}>
        Button
      </button>
    </header>
  </div>
)
```

```css
/* Component.module.css */
.wrapper { }

.header { }
.title { }

.button { }
.buttonPrimary { }
```

## Responsive Design

The application is built with a mobile-first approach using these breakpoints:

- Mobile: up to 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above
- Large Desktop: 1200px and above

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

## 🚀 Technologies Used

- **React 18** - UI library with latest features and hooks
- **React Router** - Client-side routing and navigation
- **Vite** - Next-generation build tool and development server
- **Vitest** - Fast unit testing framework
- **Testing Library** - Simple and complete testing utilities
- **ESLint** - Code linting and quality enforcement
- **CSS Modules** - Scoped CSS methodology for maintainable styles

## 🔧 API Integration

The project includes a ready-to-use API service (`src/utils/api.js`) with:

- **Configurable base URL** and headers
- **HTTP methods** (GET, POST, PUT, DELETE)
- **Automatic error handling** and timeout management
- **TypeScript support** (when using TypeScript template)
- **Live examples** in the API Demo page

### Quick API Usage Example

```javascript
import api from './utils/api'

// Configure for your API
api.setBaseURL('https://your-api.com/api/v1')
api.setHeaders({ 'Authorization': 'Bearer your-token' })

// Make requests
const users = await api.get('/users')
const newUser = await api.post('/users', { name: 'John', email: 'john@example.com' })
```

## 🎯 Customization Guide

### Adding New Pages

1. Create a new component folder in `src/components/`
2. Follow the existing structure:
   ```
   NewPage/
   ├── NewPage.jsx
   ├── NewPage.module.css
   └── index.js
   ```
3. Add the route to `App.jsx`
4. Update navigation in the navbar

### Styling Guidelines

- Use CSS Modules for component-specific styles
- Follow the existing naming convention (camelCase)
- Keep global styles in `index.css` and `App.css`
- Use responsive design patterns from existing components

## 📦 Building for Production

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Test the production build:**
   ```bash
   npm run preview
   ```

3. **Deploy to hosting platforms:**
   - **Vercel**: Connect your GitHub repo for automatic deploys
   - **Netlify**: Drag and drop the `dist` folder or connect repo
   - **GitHub Pages**: Use GitHub Actions to deploy
   - **Traditional hosting**: Upload contents of `dist` folder

## 🧪 Testing

Run all tests:
```bash
npm run test
```

Run tests in watch mode during development:
```bash
npm run test -- --watch
```

Run tests with coverage:
```bash
npm run test -- --coverage
```

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
