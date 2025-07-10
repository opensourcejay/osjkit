# OSJKit

A comprehensive template generator for React applications supporting both web and desktop platforms.

## Overview

OSJKit is an npm package that provides ready-to-use templates for creating modern React applications. It supports both web applications and desktop applications (using Tauri), with options for JavaScript or TypeScript.

## Features

- 🚀 **Quick Setup** - Generate complete applications with a single command
- 🌐 **Web Applications** - React + Vite + CSS Modules
- 🖥️ **Desktop Applications** - React + Vite + Tauri for native performance
- 📱 **Mobile Responsive** - All templates are fully responsive
- 🧪 **Testing Ready** - Pre-configured with Vitest and Testing Library
- 🎨 **CSS Modules** - Organized CSS architecture using CSS Modules methodology
- 🔧 **TypeScript Support** - Optional TypeScript support for both platforms
- ⚡️ **Modern Tooling** - Latest versions of React, Vite, and other tools

## Installation

You can use OSJKit without installing it globally using `npx`:

```bash
npx osjkit <app-name> --web
npx osjkit <app-name> --desktop
```

Or install it globally:

```bash
npm install -g osjkit
osjkit <app-name> --web
```

## Usage

### Create a Web Application

```bash
# JavaScript (default)
npx osjkit my-web-app --web

# TypeScript
npx osjkit my-web-app --web --typescript
```

### Create a Desktop Application

```bash
# JavaScript (default)
npx osjkit my-desktop-app --desktop

# TypeScript
npx osjkit my-desktop-app --desktop --typescript
```

### Interactive Mode

If you don't specify `--web` or `--desktop`, OSJKit will prompt you to choose:

```bash
npx osjkit my-app
# You'll be prompted to choose between web and desktop
```

## What's Included

### Web Applications

- **React 18** with modern hooks and features
- **Vite** for fast development and building
- **Vitest** for testing with Testing Library
- **ESLint** for code quality
- **React Router** for navigation between pages
- **API Integration** with ready-to-use service utilities
- **Sample Pages** (About, Contact, API Demo) for quick customization
- **CSS Modules** methodology for maintainable styles
- **Desktop-optimized components** adapted for native app experience
- **Mobile-first** responsive breakpoints

### Desktop Applications

Everything from web applications, plus:

- **Tauri** for native desktop performance
- **Rust backend** with sample commands
- **Native window** configuration
- **Platform-specific builds** (Windows, macOS, Linux)
- **System integration** capabilities

## Project Structure

### Web Application
```
my-app/
├── src/
│   ├── components/
│   │   ├── AboutPage/
│   │   │   ├── AboutPage.jsx
│   │   │   ├── AboutPage.module.css
│   │   │   └── index.js
│   │   ├── ContactPage/
│   │   │   ├── ContactPage.jsx
│   │   │   ├── ContactPage.module.css
│   │   │   └── index.js
│   │   ├── ApiDemoPage/
│   │   │   ├── ApiDemoPage.jsx
│   │   │   ├── ApiDemoPage.module.css
│   │   │   └── index.js
│   │   ├── ExampleComponent/
│   │   │   ├── ExampleComponent.jsx
│   │   │   ├── ExampleComponent.module.css
│   │   │   └── index.js
│   │   └── README.md
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

### Desktop Application
```
my-app/
├── src/                 # React frontend
├── src-tauri/          # Rust backend
│   ├── src/
│   │   └── main.rs
│   ├── Cargo.toml
│   └── tauri.conf.json
├── package.json
├── vite.config.js
└── README.md
```

## Available Scripts

After creating your application, you can use these scripts:

### Web Applications
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run test       # Run tests
npm run test:ui    # Run tests with UI
npm run lint       # Run ESLint
```

### Desktop Applications
```bash
npm run dev        # Start web development server
npm run build      # Build web assets
npm run test       # Run tests
npm run tauri:dev  # Start desktop app in development
npm run tauri:build # Build desktop app for distribution
```

## CSS Architecture

All templates use **CSS Modules** methodology:

```css
/* Component.module.css */
.header { }
.nav { }
.title { }
.navOpen { }
.buttonLarge { }
```

```jsx
// Component.jsx
import styles from './Component.module.css';

function Component() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <h1 className={styles.title}>Title</h1>
      </nav>
    </header>
  );
}
```

## Responsive Breakpoints

- **Mobile**: up to 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1199px
- **Large Desktop**: 1200px and above

## Prerequisites

### For Web Applications
- Node.js (version 14 or higher)

### For Desktop Applications
- Node.js (version 14 or higher)
- Rust (latest stable version)
- Platform-specific dependencies:
  - **Windows**: Microsoft C++ Build Tools
  - **macOS**: Xcode Command Line Tools
  - **Linux**: webkit2gtk development packages

## TypeScript Support

Add the `--typescript` flag to any command to generate a TypeScript project:

```bash
npx osjkit my-app --web --typescript
npx osjkit my-app --desktop --typescript
```

This will:
- Rename `.js` files to `.ts` and `.jsx` files to `.tsx`
- Add TypeScript dependencies
- Create `tsconfig.json` configuration
- Update build configuration for TypeScript

## Examples

### Creating a Portfolio Website
```bash
npx osjkit portfolio-site --web --typescript
cd portfolio-site
npm run dev
```

### Creating a Desktop Utility App
```bash
npx osjkit my-utility --desktop
cd my-utility
npm run tauri:dev
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/opensourcejay/osjkit.git
   cd osjkit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Test your changes:
   ```bash
   npm test
   npm run test:cli
   ```

4. Submit a Pull Request

## License

MIT License

## Support

For support and questions:
- 🐛 [Open an issue](https://github.com/opensourcejay/osjkit/issues)
- 📖 [Check the documentation](https://github.com/opensourcejay/osjkit#readme)
- 💬 [GitHub Discussions](https://github.com/opensourcejay/osjkit/discussions)

## Changelog

### 1.0.1
- Complete CSS Modules migration
- Added production-ready page components (About, Contact, API Demo)
- API utility service with live examples
- Enhanced component structure with reusable patterns
- Updated documentation and examples

### 1.0.0
- Initial release
- Web application templates with React + Vite
- Desktop application templates with React + Vite + Tauri
- TypeScript support
- CSS Modules methodology
- Mobile responsive design
- Testing setup with Vitest
